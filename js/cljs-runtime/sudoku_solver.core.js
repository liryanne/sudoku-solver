goog.provide('sudoku_solver.core');
if((typeof sudoku_solver !== 'undefined') && (typeof sudoku_solver.core !== 'undefined') && (typeof sudoku_solver.core.game_state !== 'undefined')){
} else {
sudoku_solver.core.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),(0))))),new cljs.core.Keyword(null,"initial-board","initial-board",715087213),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),(0))))),new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),null,new cljs.core.Keyword(null,"solving","solving",-175043197),false], null));
}
sudoku_solver.core.get_cell_value = (function sudoku_solver$core$get_cell_value(row,col){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sudoku_solver.core.game_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),row,col], null));
});
sudoku_solver.core.get_initial_value = (function sudoku_solver$core$get_initial_value(row,col){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sudoku_solver.core.game_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-board","initial-board",715087213),row,col], null));
});
sudoku_solver.core.is_initial_cell_QMARK_ = (function sudoku_solver$core$is_initial_cell_QMARK_(row,col){
return (sudoku_solver.core.get_initial_value(row,col) > (0));
});
sudoku_solver.core.cell_selected_QMARK_ = (function sudoku_solver$core$cell_selected_QMARK_(row,col){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sudoku_solver.core.game_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});
sudoku_solver.core.get_row = (function sudoku_solver$core$get_row(board,row){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,row);
});
sudoku_solver.core.get_column = (function sudoku_solver$core$get_column(board,col){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22219_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__22219_SHARP_,col);
}),board);
});
sudoku_solver.core.get_box = (function sudoku_solver$core$get_box(board,row,col){
var box_row = ((3) * cljs.core.quot(row,(3)));
var box_col = ((3) * cljs.core.quot(col,(3)));
var iter__5523__auto__ = (function sudoku_solver$core$get_box_$_iter__22220(s__22221){
return (new cljs.core.LazySeq(null,(function (){
var s__22221__$1 = s__22221;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22221__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var r = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__22221__$1,r,xs__6360__auto__,temp__5804__auto__,box_row,box_col){
return (function sudoku_solver$core$get_box_$_iter__22220_$_iter__22222(s__22223){
return (new cljs.core.LazySeq(null,((function (s__22221__$1,r,xs__6360__auto__,temp__5804__auto__,box_row,box_col){
return (function (){
var s__22223__$1 = s__22223;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22223__$1);
if(temp__5804__auto____$1){
var s__22223__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22223__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22223__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22225 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22224 = (0);
while(true){
if((i__22224 < size__5522__auto__)){
var c = cljs.core._nth(c__5521__auto__,i__22224);
cljs.core.chunk_append(b__22225,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)));

var G__22248 = (i__22224 + (1));
i__22224 = G__22248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22225),sudoku_solver$core$get_box_$_iter__22220_$_iter__22222(cljs.core.chunk_rest(s__22223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22225),null);
}
} else {
var c = cljs.core.first(s__22223__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),sudoku_solver$core$get_box_$_iter__22220_$_iter__22222(cljs.core.rest(s__22223__$2)));
}
} else {
return null;
}
break;
}
});})(s__22221__$1,r,xs__6360__auto__,temp__5804__auto__,box_row,box_col))
,null,null));
});})(s__22221__$1,r,xs__6360__auto__,temp__5804__auto__,box_row,box_col))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(box_col,(box_col + (3)))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,sudoku_solver$core$get_box_$_iter__22220(cljs.core.rest(s__22221__$1)));
} else {
var G__22249 = cljs.core.rest(s__22221__$1);
s__22221__$1 = G__22249;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(box_row,(box_row + (3))));
});
sudoku_solver.core.has_duplicate_QMARK_ = (function sudoku_solver$core$has_duplicate_QMARK_(values,target_value,target_pos){

var filtered_values = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,val){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(idx,target_pos)){
return val;
} else {
return null;
}
}),values);
var non_zero_values = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22226_SHARP_){
var and__5043__auto__ = p1__22226_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return (p1__22226_SHARP_ > (0));
} else {
return and__5043__auto__;
}
}),filtered_values);
return cljs.core.some((function (p1__22227_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22227_SHARP_,target_value);
}),non_zero_values);
});
sudoku_solver.core.is_valid_move_QMARK_ = (function sudoku_solver$core$is_valid_move_QMARK_(board,row,col,value){

if((value === (0))){
return true;
} else {
var row_values = sudoku_solver.core.get_row(board,row);
var col_values = sudoku_solver.core.get_column(board,col);
var box_values = cljs.core.vec(sudoku_solver.core.get_box(board,row,col));
var box_pos = (((3) * cljs.core.mod(row,(3))) + cljs.core.mod(col,(3)));
return cljs.core.not((function (){var or__5045__auto__ = sudoku_solver.core.has_duplicate_QMARK_(row_values,value,col);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sudoku_solver.core.has_duplicate_QMARK_(col_values,value,row);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return sudoku_solver.core.has_duplicate_QMARK_(box_values,value,box_pos);
}
}
})());
}
});
sudoku_solver.core.find_empty_cell = (function sudoku_solver$core$find_empty_cell(board){

return cljs.core.first((function (){var iter__5523__auto__ = (function sudoku_solver$core$find_empty_cell_$_iter__22228(s__22229){
return (new cljs.core.LazySeq(null,(function (){
var s__22229__$1 = s__22229;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22229__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var row = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__22229__$1,row,xs__6360__auto__,temp__5804__auto__){
return (function sudoku_solver$core$find_empty_cell_$_iter__22228_$_iter__22230(s__22231){
return (new cljs.core.LazySeq(null,((function (s__22229__$1,row,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__22231__$1 = s__22231;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22231__$1);
if(temp__5804__auto____$1){
var s__22231__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22231__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22231__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22233 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22232 = (0);
while(true){
if((i__22232 < size__5522__auto__)){
var col = cljs.core._nth(c__5521__auto__,i__22232);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)) === (0))){
cljs.core.chunk_append(b__22233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

var G__22250 = (i__22232 + (1));
i__22232 = G__22250;
continue;
} else {
var G__22251 = (i__22232 + (1));
i__22232 = G__22251;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22233),sudoku_solver$core$find_empty_cell_$_iter__22228_$_iter__22230(cljs.core.chunk_rest(s__22231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22233),null);
}
} else {
var col = cljs.core.first(s__22231__$2);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)) === (0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),sudoku_solver$core$find_empty_cell_$_iter__22228_$_iter__22230(cljs.core.rest(s__22231__$2)));
} else {
var G__22252 = cljs.core.rest(s__22231__$2);
s__22231__$1 = G__22252;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__22229__$1,row,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__22229__$1,row,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((9))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,sudoku_solver$core$find_empty_cell_$_iter__22228(cljs.core.rest(s__22229__$1)));
} else {
var G__22253 = cljs.core.rest(s__22229__$1);
s__22229__$1 = G__22253;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((9)));
})());
});
sudoku_solver.core.solve_sudoku = (function sudoku_solver$core$solve_sudoku(board){

var temp__5802__auto__ = sudoku_solver.core.find_empty_cell(board);
if(cljs.core.truth_(temp__5802__auto__)){
var empty_pos = temp__5802__auto__;
var vec__22234 = empty_pos;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22234,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22234,(1),null);
var num = (1);
while(true){
if((num <= (9))){
if(sudoku_solver.core.is_valid_move_QMARK_(board,row,col,num)){
var new_board = cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),num);
var result = (sudoku_solver.core.solve_sudoku.cljs$core$IFn$_invoke$arity$1 ? sudoku_solver.core.solve_sudoku.cljs$core$IFn$_invoke$arity$1(new_board) : sudoku_solver.core.solve_sudoku.call(null,new_board));
if(cljs.core.truth_(result)){
return result;
} else {
var G__22254 = (num + (1));
num = G__22254;
continue;
}
} else {
var G__22255 = (num + (1));
num = G__22255;
continue;
}
} else {
return null;
}
break;
}
} else {
return board;
}
});
sudoku_solver.core.get_cell_class = (function sudoku_solver$core$get_cell_class(row,col){
var value = sudoku_solver.core.get_cell_value(row,col);
var selected_QMARK_ = sudoku_solver.core.cell_selected_QMARK_(row,col);
var initial_QMARK_ = sudoku_solver.core.is_initial_cell_QMARK_(row,col);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sudoku_solver.core.game_state));
var valid_QMARK_ = sudoku_solver.core.is_valid_move_QMARK_(board,row,col,value);
if(selected_QMARK_){
return "cell selected";
} else {
if((((value > (0))) && ((!(valid_QMARK_))))){
return "cell invalid";
} else {
if(initial_QMARK_){
return "cell initial";
} else {
if((value > (0))){
return "cell solved";
} else {
return "cell";

}
}
}
}
});
sudoku_solver.core.create_cell = (function sudoku_solver$core$create_cell(row,col){
var value = sudoku_solver.core.get_cell_value(row,col);
var cell_class = sudoku_solver.core.get_cell_class(row,col);
return ["<div class='",cell_class,"' ","data-row='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"' data-col='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"' ","onclick='selectCell(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),")'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((value > (0)))?value:"")),"</div>"].join('');
});
sudoku_solver.core.create_row = (function sudoku_solver$core$create_row(row_index){
return ["<div class='row'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22237_SHARP_){
return sudoku_solver.core.create_cell(row_index,p1__22237_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((9))))),"</div>"].join('');
});
sudoku_solver.core.create_board = (function sudoku_solver$core$create_board(){
return ["<div class='board'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sudoku_solver.core.create_row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((9))))),"</div>"].join('');
});
sudoku_solver.core.create_controls = (function sudoku_solver$core$create_controls(){
return ["<div class='controls'>","<button onclick='solvePuzzle()' class='btn btn-solve'>\uD83D\uDE80 GO</button>","<button onclick='clearBoard()' class='btn btn-clear'>\uD83D\uDDD1\uFE0F Clear</button>","</div>"].join('');
});
sudoku_solver.core.render_board_BANG_ = (function sudoku_solver$core$render_board_BANG_(){
var board_element = document.getElementById("sudoku-board");
if(cljs.core.truth_(board_element)){
return (board_element.innerHTML = sudoku_solver.core.create_board());
} else {
return null;
}
});
sudoku_solver.core.set_cell_value_BANG_ = (function sudoku_solver$core$set_cell_value_BANG_(row,col,value){
if(cljs.core.not(new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sudoku_solver.core.game_state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sudoku_solver.core.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),row,col], null),value);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sudoku_solver.core.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-board","initial-board",715087213),row,col], null),value);

return sudoku_solver.core.render_board_BANG_();
} else {
return null;
}
});
sudoku_solver.core.clear_cell_BANG_ = (function sudoku_solver$core$clear_cell_BANG_(row,col){
if(cljs.core.not(new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sudoku_solver.core.game_state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sudoku_solver.core.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),row,col], null),(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sudoku_solver.core.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-board","initial-board",715087213),row,col], null),(0));

return sudoku_solver.core.render_board_BANG_();
} else {
return null;
}
});
sudoku_solver.core.select_cell_BANG_ = (function sudoku_solver$core$select_cell_BANG_(row,col){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sudoku_solver.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

return sudoku_solver.core.render_board_BANG_();
});
sudoku_solver.core.solve_puzzle_BANG_ = (function sudoku_solver$core$solve_puzzle_BANG_(){
var current_board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sudoku_solver.core.game_state));
var solution = sudoku_solver.core.solve_sudoku(current_board);
if(cljs.core.truth_(solution)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sudoku_solver.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),solution,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),false], 0));

sudoku_solver.core.render_board_BANG_();

return alert("\u2705 Puzzle resolvido com sucesso!");
} else {
return alert("\u274C Este puzzle n\u00E3o tem solu\u00E7\u00E3o v\u00E1lida!");
}
});
sudoku_solver.core.clear_board_BANG_ = (function sudoku_solver$core$clear_board_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sudoku_solver.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),(0))))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-board","initial-board",715087213),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),(0))))),new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),null,new cljs.core.Keyword(null,"solving","solving",-175043197),false], 0));

return sudoku_solver.core.render_board_BANG_();
});
sudoku_solver.core.move_selection = (function sudoku_solver$core$move_selection(direction){

var selected = new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sudoku_solver.core.game_state));
if(cljs.core.truth_(selected)){
var vec__22238 = selected;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22238,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22238,(1),null);
var vec__22241 = (function (){var G__22244 = direction;
var G__22244__$1 = (((G__22244 instanceof cljs.core.Keyword))?G__22244.fqn:null);
switch (G__22244__$1) {
case "up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (row - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),col], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5133__auto__ = (8);
var y__5134__auto__ = (row + (1));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),col], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (col - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(function (){var x__5133__auto__ = (8);
var y__5134__auto__ = (col + (1));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22244__$1)].join('')));

}
})();
var new_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22241,(0),null);
var new_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22241,(1),null);
return sudoku_solver.core.select_cell_BANG_(new_row,new_col);
} else {
return null;
}
});
sudoku_solver.core.handle_keypress = (function sudoku_solver$core$handle_keypress(event){
var key = event.key;
var selected = new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sudoku_solver.core.game_state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowUp")){
event.preventDefault();

return sudoku_solver.core.move_selection(new cljs.core.Keyword(null,"up","up",-269712113));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowDown")){
event.preventDefault();

return sudoku_solver.core.move_selection(new cljs.core.Keyword(null,"down","down",1565245570));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowLeft")){
event.preventDefault();

return sudoku_solver.core.move_selection(new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowRight")){
event.preventDefault();

return sudoku_solver.core.move_selection(new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = selected;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sudoku_solver.core.game_state)));
} else {
return and__5043__auto__;
}
})())){
var vec__22245 = selected;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22245,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22245,(1),null);
if(cljs.core.truth_(cljs.core.re_matches(/[1-9]/,key))){
var number = parseInt(key);
return sudoku_solver.core.set_cell_value_BANG_(row,col,number);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Delete")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Backspace")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"0")))))){
return sudoku_solver.core.clear_cell_BANG_(row,col);
} else {
return null;
}
}
} else {
return null;
}
}
}
}
}
});
(window.selectCell = sudoku_solver.core.select_cell_BANG_);
(window.solvePuzzle = sudoku_solver.core.solve_puzzle_BANG_);
(window.clearBoard = sudoku_solver.core.clear_board_BANG_);
sudoku_solver.core.init_BANG_ = (function sudoku_solver$core$init_BANG_(){
var app_element = document.getElementById("app");
(app_element.innerHTML = ["<h1>\uD83C\uDFAF Sudoku Solver</h1>","<div id='sudoku-board'>",sudoku_solver.core.create_board(),"</div>",sudoku_solver.core.create_controls(),"<p class='instructions'>Use setas para navegar | Digite 1-9 | Delete/Backspace/0 para apagar | GO para resolver</p>"].join(''));

sudoku_solver.core.select_cell_BANG_((4),(4));

return document.addEventListener("keydown",sudoku_solver.core.handle_keypress);
});

//# sourceMappingURL=sudoku_solver.core.js.map
