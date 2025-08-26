(ns sudoku-solver.core)

;; Game state
(defonce game-state 
  (atom {:board (vec (repeat 9 (vec (repeat 9 0))))
         :initial-board (vec (repeat 9 (vec (repeat 9 0))))  ; Numbers placed by user
         :selected-cell nil
         :solving false
         :is-mobile false}))

;; Forward declaration
(declare render-board!)

(defn get-cell-value [row col]
  (get-in @game-state [:board row col]))

(defn get-initial-value [row col]
  (get-in @game-state [:initial-board row col]))

(defn is-initial-cell? [row col]
  (pos? (get-initial-value row col)))

(defn cell-selected? [row col]
  (= (:selected-cell @game-state) [row col]))

;; Sudoku validation functions
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

(defn has-duplicate?
  "Checks if there's a duplicate of target-value, ignoring target-pos position"
  [values target-value target-pos]
  (let [filtered-values (map-indexed 
                          (fn [idx val] 
                            (when (not= idx target-pos) val)) 
                          values)
        non-zero-values (filter #(and % (pos? %)) filtered-values)]
    (some #(= % target-value) non-zero-values)))

(defn is-valid-move?
  "Checks if placing 'value' at position [row col] is valid"
  [board row col value]
  (if (zero? value)
    true  ; Can always clear
    (let [row-values (get-row board row)
          col-values (get-column board col)
          box-values (vec (get-box board row col))
          box-pos (+ (* 3 (mod row 3)) (mod col 3))]
      (not (or (has-duplicate? row-values value col)
               (has-duplicate? col-values value row)
               (has-duplicate? box-values value box-pos))))))

;; Solving algorithm (Backtracking)
(defn find-empty-cell
  "Finds the first empty cell (returns [row col] or nil)"
  [board]
  (first (for [row (range 9)
               col (range 9)
               :when (zero? (get-in board [row col]))]
           [row col])))

(defn solve-sudoku
  "Solves Sudoku using backtracking. Returns solved board or nil if impossible"
  [board]
  (if-let [empty-pos (find-empty-cell board)]
    (let [[row col] empty-pos]
      (loop [num 1]
        (if (<= num 9)
          (if (is-valid-move? board row col num)
            (let [new-board (assoc-in board [row col] num)
                  result (solve-sudoku new-board)]
              (if result
                result  ; Solution found
                (recur (inc num))))  ; Try next number
            (recur (inc num)))  ; Invalid number, try next
          nil)))  ; No number worked
    board))  ; No empty cells, puzzle solved

(defn get-cell-class [row col]
  (let [value (get-cell-value row col)
        selected? (cell-selected? row col)
        initial? (is-initial-cell? row col)
        board (:board @game-state)
        valid? (is-valid-move? board row col value)]
    (cond
      ;; Selected cells - different colors based on type
      (and selected? initial?) "cell selected-initial"  ; Green when selected manual number
      (and selected? (pos? value)) "cell selected-solved"  ; Blue when selected auto number  
      selected? "cell selected"  ; Default selection for empty cells
      ;; Non-selected cells
      (and (pos? value) (not valid?)) "cell invalid"
      initial? "cell initial"  ; Numbers placed by user (green)
      (pos? value) "cell solved"  ; Numbers solved by algorithm (blue)
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

(defn create-mobile-keyboard []
  (str "<div id='mobile-keyboard' class='mobile-keyboard'>"
       "<div class='keyboard-title'>Toque para inserir número:</div>"
       "<div class='keyboard-grid'>"
       "<button class='keyboard-btn' onclick='inputNumber(1)'>1</button>"
       "<button class='keyboard-btn' onclick='inputNumber(2)'>2</button>"
       "<button class='keyboard-btn' onclick='inputNumber(3)'>3</button>"
       "<button class='keyboard-btn' onclick='inputNumber(4)'>4</button>"
       "<button class='keyboard-btn' onclick='inputNumber(5)'>5</button>"
       "<button class='keyboard-btn' onclick='inputNumber(6)'>6</button>"
       "<button class='keyboard-btn' onclick='inputNumber(7)'>7</button>"
       "<button class='keyboard-btn' onclick='inputNumber(8)'>8</button>"
       "<button class='keyboard-btn' onclick='inputNumber(9)'>9</button>"
       "<button class='keyboard-btn clear' onclick='clearSelectedCell()'>🗑️</button>"
       "</div>"
       "</div>"))

(defn render-board! []
  (let [board-element (.getElementById js/document "sudoku-board")]
    (when board-element
      (set! (.-innerHTML board-element) (create-board)))))

(defn show-mobile-keyboard! []
  (when (:is-mobile @game-state)
    (let [keyboard (.getElementById js/document "mobile-keyboard")]
      (when keyboard
        (.add (.-classList keyboard) "show")))))

(defn hide-mobile-keyboard! []
  (let [keyboard (.getElementById js/document "mobile-keyboard")]
    (when keyboard
      (.remove (.-classList keyboard) "show"))))

(defn set-cell-value! [row col value]
  (when (not (:solving @game-state))  ; Only allow editing if not solving
    (swap! game-state assoc-in [:board row col] value)
    (swap! game-state assoc-in [:initial-board row col] value)  ; Mark as initial
    (render-board!)))

(defn clear-cell! [row col]
  (when (not (:solving @game-state))
    (swap! game-state assoc-in [:board row col] 0)
    (swap! game-state assoc-in [:initial-board row col] 0)
    (render-board!)))

(defn select-cell! [row col]
  (swap! game-state assoc :selected-cell [row col])
  (render-board!)
  (when (:is-mobile @game-state)
    (show-mobile-keyboard!)))

(defn solve-puzzle! []
  (let [current-board (:board @game-state)
        solution (solve-sudoku current-board)]
    (if solution
      (do
        (swap! game-state assoc :board solution :solving false)
        (render-board!)
        (js/alert "✅ Puzzle solved successfully!"))
      (js/alert "❌ This puzzle has no valid solution!"))))

(defn clear-board! []
  (swap! game-state assoc 
         :board (vec (repeat 9 (vec (repeat 9 0))))
         :initial-board (vec (repeat 9 (vec (repeat 9 0))))
         :selected-cell [4 4]  ; Position in center (like initial load)
         :solving false)
  (render-board!)
  (when (:is-mobile @game-state)
    (show-mobile-keyboard!)))

(defn move-selection 
  "Moves selection in the specified direction"
  [direction]
  (let [selected (:selected-cell @game-state)]
    (when selected
      (let [[row col] selected
            [new-row new-col] (case direction
                                :up [(max 0 (dec row)) col]
                                :down [(min 8 (inc row)) col]
                                :left [row (max 0 (dec col))]
                                :right [row (min 8 (inc col))])]
        (select-cell! new-row new-col)))))

(defn input-number! [number]
  (let [selected (:selected-cell @game-state)]
    (when (and selected (not (:solving @game-state)))
      (let [[row col] selected]
        (set-cell-value! row col number)))))

(defn clear-selected-cell! []
  (let [selected (:selected-cell @game-state)]
    (when (and selected (not (:solving @game-state)))
      (let [[row col] selected]
        (clear-cell! row col)))))

(defn handle-keypress [event]
  (let [key (.-key event)
        selected (:selected-cell @game-state)]
    (cond
      ;; Arrow navigation (always works)
      (= key "ArrowUp") 
      (do (.preventDefault event) (move-selection :up))
      
      (= key "ArrowDown") 
      (do (.preventDefault event) (move-selection :down))
      
      (= key "ArrowLeft") 
      (do (.preventDefault event) (move-selection :left))
      
      (= key "ArrowRight") 
      (do (.preventDefault event) (move-selection :right))
      
      ;; Editing (only when not solving)
      (and selected (not (:solving @game-state)))
      (let [[row col] selected]
        (cond
          ;; Numbers 1-9
          (re-matches #"[1-9]" key)
          (let [number (js/parseInt key)]
            (set-cell-value! row col number))
          
          ;; Clear cell (Delete, Backspace or 0)
          (or (= key "Delete") 
              (= key "Backspace") 
              (= key "0"))
          (clear-cell! row col))))))

;; Global functions to be called by HTML
(set! (.-selectCell js/window) select-cell!)
(set! (.-solvePuzzle js/window) solve-puzzle!)
(set! (.-clearBoard js/window) clear-board!)
(set! (.-inputNumber js/window) input-number!)
(set! (.-clearSelectedCell js/window) clear-selected-cell!)

(defn init! []
  ;; Detectar se é mobile usando a variável global definida no HTML
  (let [is-mobile (or (.-IS_MOBILE js/window) false)]
    (swap! game-state assoc :is-mobile is-mobile)
    (js/console.log "Mobile detectado no ClojureScript:" is-mobile))
  
  (let [app-element (.getElementById js/document "app")
        instructions-text (if (:is-mobile @game-state)
                           "Toque nas células e use o teclado numérico | GO para resolver"
                           "Use arrows to navigate | Type 1-9 | Delete/Backspace/0 to clear | GO to solve")]
    (set! (.-innerHTML app-element) 
          (str "<h1>🎯 Sudoku Solver</h1>"
               "<div id='sudoku-board'>" (create-board) "</div>"
               (create-controls)
               (when (:is-mobile @game-state) (create-mobile-keyboard))
               "<p class='instructions'>" instructions-text "</p>"))
    
    ;; Select initial cell (center of grid)
    (select-cell! 4 4)
    
    ;; Add keyboard listener (sempre adicionar, mesmo em mobile para teclados externos)
    (.addEventListener js/document "keydown" handle-keypress)))
