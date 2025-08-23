(ns my-sudoku.core)

;; Estado do jogo
(defonce game-state 
  (atom {:board (vec (repeat 9 (vec (repeat 9 0))))
         :initial-board (vec (repeat 9 (vec (repeat 9 0))))  ; Números colocados pelo usuário
         :selected-cell nil
         :solving false}))

;; Declaração antecipada
(declare render-board!)

(defn get-cell-value [row col]
  (get-in @game-state [:board row col]))

(defn get-initial-value [row col]
  (get-in @game-state [:initial-board row col]))

(defn is-initial-cell? [row col]
  (pos? (get-initial-value row col)))

(defn cell-selected? [row col]
  (= (:selected-cell @game-state) [row col]))

;; Funções de validação do Sudoku
(defn get-row [board row]
  (get board row))

(defn get-column [board col]
  (mapv #(get % col) board))

(defn get-box [board row col]
  (let [box-row (* 3 (quot row 3))
        box-col (* 3 (quot col 3))]
    (for [r (range box-row (+ box-row 3))
          c (range box-col (+ box-col 3))]
      (get-in board [r c]))))

(defn has-duplicate? [values target-value target-pos]
  "Verifica se há duplicata do target-value, ignorando a posição target-pos"
  (let [filtered-values (map-indexed 
                          (fn [idx val] 
                            (when (not= idx target-pos) val)) 
                          values)
        non-zero-values (filter #(and % (pos? %)) filtered-values)]
    (some #(= % target-value) non-zero-values)))

(defn is-valid-move? [board row col value]
  "Verifica se colocar 'value' na posição [row col] é válido"
  (if (zero? value)
    true  ; Sempre pode apagar
    (let [row-values (get-row board row)
          col-values (get-column board col)
          box-values (vec (get-box board row col))
          box-pos (+ (* 3 (mod row 3)) (mod col 3))]
      (not (or (has-duplicate? row-values value col)
               (has-duplicate? col-values value row)
               (has-duplicate? box-values value box-pos))))))

;; Algoritmo de resolução (Backtracking)
(defn find-empty-cell [board]
  "Encontra a primeira célula vazia (retorna [row col] ou nil)"
  (first (for [row (range 9)
               col (range 9)
               :when (zero? (get-in board [row col]))]
           [row col])))

(defn solve-sudoku [board]
  "Resolve o Sudoku usando backtracking. Retorna board resolvido ou nil se impossível"
  (if-let [empty-pos (find-empty-cell board)]
    (let [[row col] empty-pos]
      (loop [num 1]
        (if (<= num 9)
          (if (is-valid-move? board row col num)
            (let [new-board (assoc-in board [row col] num)
                  result (solve-sudoku new-board)]
              (if result
                result  ; Solução encontrada
                (recur (inc num))))  ; Tenta próximo número
            (recur (inc num)))  ; Número inválido, tenta próximo
          nil)))  ; Nenhum número funcionou
    board))  ; Não há células vazias, puzzle resolvido

(defn get-cell-class [row col]
  (let [value (get-cell-value row col)
        selected? (cell-selected? row col)
        initial? (is-initial-cell? row col)
        board (:board @game-state)
        valid? (is-valid-move? board row col value)]
    (cond
      selected? "cell selected"  ; Sempre mostra seleção por cima
      (and (pos? value) (not valid?)) "cell invalid"
      initial? "cell initial"  ; Números colocados pelo usuário (verde)
      (pos? value) "cell solved"  ; Números resolvidos pelo algoritmo (azul)
      :else "cell")))

(defn create-cell [row col]
  (let [value (get-cell-value row col)
        cell-class (get-cell-class row col)]
    (str "<div class='" cell-class "' "
         "data-row='" row "' data-col='" col "' "
         "onclick='selectCell(" row "," col ")'>"
         (if (pos? value) value "")
         "</div>")))

(defn create-row [row-index]
  (str "<div class='row'>"
       (apply str (map #(create-cell row-index %) (range 9)))
       "</div>"))

(defn create-board []
  (str "<div class='board'>"
       (apply str (map create-row (range 9)))
       "</div>"))

(defn create-controls []
  (str "<div class='controls'>"
       "<button onclick='solvePuzzle()' class='btn btn-solve'>🚀 GO</button>"
       "<button onclick='clearBoard()' class='btn btn-clear'>🗑️ Clear</button>"
       "</div>"))

(defn render-board! []
  (let [board-element (.getElementById js/document "sudoku-board")]
    (when board-element
      (set! (.-innerHTML board-element) (create-board)))))

(defn set-cell-value! [row col value]
  (when (not (:solving @game-state))  ; Só permite editar se não estiver resolvendo
    (swap! game-state assoc-in [:board row col] value)
    (swap! game-state assoc-in [:initial-board row col] value)  ; Marca como inicial
    (render-board!)))

(defn clear-cell! [row col]
  (when (not (:solving @game-state))
    (swap! game-state assoc-in [:board row col] 0)
    (swap! game-state assoc-in [:initial-board row col] 0)
    (render-board!)))

(defn select-cell! [row col]
  (swap! game-state assoc :selected-cell [row col])
  (render-board!))

(defn solve-puzzle! []
  (let [current-board (:board @game-state)
        solution (solve-sudoku current-board)]
    (if solution
      (do
        (swap! game-state assoc :board solution :solving false)
        (render-board!)
        (js/alert "✅ Puzzle resolvido com sucesso!"))
      (js/alert "❌ Este puzzle não tem solução válida!"))))

(defn clear-board! []
  (swap! game-state assoc 
         :board (vec (repeat 9 (vec (repeat 9 0))))
         :initial-board (vec (repeat 9 (vec (repeat 9 0))))
         :selected-cell nil
         :solving false)
  (render-board!))

(defn move-selection [direction]
  "Move a seleção na direção especificada"
  (let [selected (:selected-cell @game-state)]
    (when selected
      (let [[row col] selected
            [new-row new-col] (case direction
                                :up [(max 0 (dec row)) col]
                                :down [(min 8 (inc row)) col]
                                :left [row (max 0 (dec col))]
                                :right [row (min 8 (inc col))])]
        (select-cell! new-row new-col)))))

(defn handle-keypress [event]
  (let [key (.-key event)
        selected (:selected-cell @game-state)]
    (cond
      ;; Navegação com setas (sempre funciona)
      (= key "ArrowUp") 
      (do (.preventDefault event) (move-selection :up))
      
      (= key "ArrowDown") 
      (do (.preventDefault event) (move-selection :down))
      
      (= key "ArrowLeft") 
      (do (.preventDefault event) (move-selection :left))
      
      (= key "ArrowRight") 
      (do (.preventDefault event) (move-selection :right))
      
      ;; Edição (só quando não está resolvendo)
      (and selected (not (:solving @game-state)))
      (let [[row col] selected]
        (cond
          ;; Números de 1-9
          (re-matches #"[1-9]" key)
          (let [number (js/parseInt key)]
            (set-cell-value! row col number))
          
          ;; Apagar célula (Delete, Backspace ou 0)
          (or (= key "Delete") 
              (= key "Backspace") 
              (= key "0"))
          (clear-cell! row col))))))

;; Funções globais para serem chamadas pelo HTML
(set! (.-selectCell js/window) select-cell!)
(set! (.-solvePuzzle js/window) solve-puzzle!)
(set! (.-clearBoard js/window) clear-board!)

(defn init! []
  (let [app-element (.getElementById js/document "app")]
    (set! (.-innerHTML app-element) 
          (str "<h1>🎯 My Sudoku Solver</h1>"
               "<div id='sudoku-board'>" (create-board) "</div>"
               (create-controls)
               "<p class='instructions'>Use setas para navegar | Digite 1-9 | Delete/Backspace/0 para apagar | GO para resolver</p>"))
    
    ;; Selecionar célula inicial (centro do grid)
    (select-cell! 4 4)
    
    ;; Adicionar listener para teclado
    (.addEventListener js/document "keydown" handle-keypress)))
