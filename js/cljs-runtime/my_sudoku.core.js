goog.provide('my_sudoku.core');
if((typeof my_sudoku !== 'undefined') && (typeof my_sudoku.core !== 'undefined') && (typeof my_sudoku.core.game_state !== 'undefined')){
} else {
my_sudoku.core.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),(0))))),new cljs.core.Keyword(null,"initial-board","initial-board",715087213),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),(0))))),new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),null,new cljs.core.Keyword(null,"solving","solving",-175043197),false], null));
}
my_sudoku.core.get_cell_value = (function my_sudoku$core$get_cell_value(row,col){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_sudoku.core.game_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),row,col], null));
});
my_sudoku.core.get_initial_value = (function my_sudoku$core$get_initial_value(row,col){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_sudoku.core.game_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-board","initial-board",715087213),row,col], null));
});
my_sudoku.core.is_initial_cell_QMARK_ = (function my_sudoku$core$is_initial_cell_QMARK_(row,col){
return (my_sudoku.core.get_initial_value(row,col) > (0));
});
my_sudoku.core.cell_selected_QMARK_ = (function my_sudoku$core$cell_selected_QMARK_(row,col){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_sudoku.core.game_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});
my_sudoku.core.get_row = (function my_sudoku$core$get_row(board,row){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,row);
});
my_sudoku.core.get_column = (function my_sudoku$core$get_column(board,col){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21973_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__21973_SHARP_,col);
}),board);
});
my_sudoku.core.get_box = (function my_sudoku$core$get_box(board,row,col){
var box_row = ((3) * cljs.core.quot(row,(3)));
var box_col = ((3) * cljs.core.quot(col,(3)));
var iter__5523__auto__ = (function my_sudoku$core$get_box_$_iter__21974(s__21975){
return (new cljs.core.LazySeq(null,(function (){
var s__21975__$1 = s__21975;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21975__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var r = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__21975__$1,r,xs__6360__auto__,temp__5804__auto__,box_row,box_col){
return (function my_sudoku$core$get_box_$_iter__21974_$_iter__21976(s__21977){
return (new cljs.core.LazySeq(null,((function (s__21975__$1,r,xs__6360__auto__,temp__5804__auto__,box_row,box_col){
return (function (){
var s__21977__$1 = s__21977;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21977__$1);
if(temp__5804__auto____$1){
var s__21977__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21977__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21977__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21979 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21978 = (0);
while(true){
if((i__21978 < size__5522__auto__)){
var c = cljs.core._nth(c__5521__auto__,i__21978);
cljs.core.chunk_append(b__21979,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)));

var G__22002 = (i__21978 + (1));
i__21978 = G__22002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21979),my_sudoku$core$get_box_$_iter__21974_$_iter__21976(cljs.core.chunk_rest(s__21977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21979),null);
}
} else {
var c = cljs.core.first(s__21977__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),my_sudoku$core$get_box_$_iter__21974_$_iter__21976(cljs.core.rest(s__21977__$2)));
}
} else {
return null;
}
break;
}
});})(s__21975__$1,r,xs__6360__auto__,temp__5804__auto__,box_row,box_col))
,null,null));
});})(s__21975__$1,r,xs__6360__auto__,temp__5804__auto__,box_row,box_col))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(box_col,(box_col + (3)))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,my_sudoku$core$get_box_$_iter__21974(cljs.core.rest(s__21975__$1)));
} else {
var G__22003 = cljs.core.rest(s__21975__$1);
s__21975__$1 = G__22003;
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
my_sudoku.core.has_duplicate_QMARK_ = (function my_sudoku$core$has_duplicate_QMARK_(values,target_value,target_pos){

var filtered_values = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,val){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(idx,target_pos)){
return val;
} else {
return null;
}
}),values);
var non_zero_values = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21980_SHARP_){
var and__5043__auto__ = p1__21980_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return (p1__21980_SHARP_ > (0));
} else {
return and__5043__auto__;
}
}),filtered_values);
return cljs.core.some((function (p1__21981_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21981_SHARP_,target_value);
}),non_zero_values);
});
my_sudoku.core.is_valid_move_QMARK_ = (function my_sudoku$core$is_valid_move_QMARK_(board,row,col,value){

if((value === (0))){
return true;
} else {
var row_values = my_sudoku.core.get_row(board,row);
var col_values = my_sudoku.core.get_column(board,col);
var box_values = cljs.core.vec(my_sudoku.core.get_box(board,row,col));
var box_pos = (((3) * cljs.core.mod(row,(3))) + cljs.core.mod(col,(3)));
return cljs.core.not((function (){var or__5045__auto__ = my_sudoku.core.has_duplicate_QMARK_(row_values,value,col);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = my_sudoku.core.has_duplicate_QMARK_(col_values,value,row);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return my_sudoku.core.has_duplicate_QMARK_(box_values,value,box_pos);
}
}
})());
}
});
my_sudoku.core.find_empty_cell = (function my_sudoku$core$find_empty_cell(board){

return cljs.core.first((function (){var iter__5523__auto__ = (function my_sudoku$core$find_empty_cell_$_iter__21982(s__21983){
return (new cljs.core.LazySeq(null,(function (){
var s__21983__$1 = s__21983;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21983__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var row = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__21983__$1,row,xs__6360__auto__,temp__5804__auto__){
return (function my_sudoku$core$find_empty_cell_$_iter__21982_$_iter__21984(s__21985){
return (new cljs.core.LazySeq(null,((function (s__21983__$1,row,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__21985__$1 = s__21985;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21985__$1);
if(temp__5804__auto____$1){
var s__21985__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21985__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21985__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21987 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21986 = (0);
while(true){
if((i__21986 < size__5522__auto__)){
var col = cljs.core._nth(c__5521__auto__,i__21986);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)) === (0))){
cljs.core.chunk_append(b__21987,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

var G__22004 = (i__21986 + (1));
i__21986 = G__22004;
continue;
} else {
var G__22005 = (i__21986 + (1));
i__21986 = G__22005;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21987),my_sudoku$core$find_empty_cell_$_iter__21982_$_iter__21984(cljs.core.chunk_rest(s__21985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21987),null);
}
} else {
var col = cljs.core.first(s__21985__$2);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)) === (0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),my_sudoku$core$find_empty_cell_$_iter__21982_$_iter__21984(cljs.core.rest(s__21985__$2)));
} else {
var G__22006 = cljs.core.rest(s__21985__$2);
s__21985__$1 = G__22006;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__21983__$1,row,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__21983__$1,row,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((9))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,my_sudoku$core$find_empty_cell_$_iter__21982(cljs.core.rest(s__21983__$1)));
} else {
var G__22007 = cljs.core.rest(s__21983__$1);
s__21983__$1 = G__22007;
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
my_sudoku.core.solve_sudoku = (function my_sudoku$core$solve_sudoku(board){

var temp__5802__auto__ = my_sudoku.core.find_empty_cell(board);
if(cljs.core.truth_(temp__5802__auto__)){
var empty_pos = temp__5802__auto__;
var vec__21988 = empty_pos;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21988,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21988,(1),null);
var num = (1);
while(true){
if((num <= (9))){
if(my_sudoku.core.is_valid_move_QMARK_(board,row,col,num)){
var new_board = cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),num);
var result = (my_sudoku.core.solve_sudoku.cljs$core$IFn$_invoke$arity$1 ? my_sudoku.core.solve_sudoku.cljs$core$IFn$_invoke$arity$1(new_board) : my_sudoku.core.solve_sudoku.call(null,new_board));
if(cljs.core.truth_(result)){
return result;
} else {
var G__22008 = (num + (1));
num = G__22008;
continue;
}
} else {
var G__22009 = (num + (1));
num = G__22009;
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
my_sudoku.core.get_cell_class = (function my_sudoku$core$get_cell_class(row,col){
var value = my_sudoku.core.get_cell_value(row,col);
var selected_QMARK_ = my_sudoku.core.cell_selected_QMARK_(row,col);
var initial_QMARK_ = my_sudoku.core.is_initial_cell_QMARK_(row,col);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_sudoku.core.game_state));
var valid_QMARK_ = my_sudoku.core.is_valid_move_QMARK_(board,row,col,value);
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
my_sudoku.core.create_cell = (function my_sudoku$core$create_cell(row,col){
var value = my_sudoku.core.get_cell_value(row,col);
var cell_class = my_sudoku.core.get_cell_class(row,col);
return ["<div class='",cell_class,"' ","data-row='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"' data-col='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"' ","onclick='selectCell(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),")'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((value > (0)))?value:"")),"</div>"].join('');
});
my_sudoku.core.create_row = (function my_sudoku$core$create_row(row_index){
return ["<div class='row'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21991_SHARP_){
return my_sudoku.core.create_cell(row_index,p1__21991_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((9))))),"</div>"].join('');
});
my_sudoku.core.create_board = (function my_sudoku$core$create_board(){
return ["<div class='board'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(my_sudoku.core.create_row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((9))))),"</div>"].join('');
});
my_sudoku.core.create_controls = (function my_sudoku$core$create_controls(){
return ["<div class='controls'>","<button onclick='solvePuzzle()' class='btn btn-solve'>\uD83D\uDE80 GO</button>","<button onclick='clearBoard()' class='btn btn-clear'>\uD83D\uDDD1\uFE0F Clear</button>","</div>"].join('');
});
my_sudoku.core.render_board_BANG_ = (function my_sudoku$core$render_board_BANG_(){
var board_element = document.getElementById("sudoku-board");
if(cljs.core.truth_(board_element)){
return (board_element.innerHTML = my_sudoku.core.create_board());
} else {
return null;
}
});
my_sudoku.core.set_cell_value_BANG_ = (function my_sudoku$core$set_cell_value_BANG_(row,col,value){
if(cljs.core.not(new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_sudoku.core.game_state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_sudoku.core.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),row,col], null),value);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_sudoku.core.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-board","initial-board",715087213),row,col], null),value);

return my_sudoku.core.render_board_BANG_();
} else {
return null;
}
});
my_sudoku.core.clear_cell_BANG_ = (function my_sudoku$core$clear_cell_BANG_(row,col){
if(cljs.core.not(new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_sudoku.core.game_state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_sudoku.core.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),row,col], null),(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_sudoku.core.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-board","initial-board",715087213),row,col], null),(0));

return my_sudoku.core.render_board_BANG_();
} else {
return null;
}
});
my_sudoku.core.select_cell_BANG_ = (function my_sudoku$core$select_cell_BANG_(row,col){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_sudoku.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

return my_sudoku.core.render_board_BANG_();
});
my_sudoku.core.solve_puzzle_BANG_ = (function my_sudoku$core$solve_puzzle_BANG_(){
var current_board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_sudoku.core.game_state));
var solution = my_sudoku.core.solve_sudoku(current_board);
if(cljs.core.truth_(solution)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_sudoku.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),solution,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),false], 0));

my_sudoku.core.render_board_BANG_();

return alert("\u2705 Puzzle resolvido com sucesso!");
} else {
return alert("\u274C Este puzzle n\u00E3o tem solu\u00E7\u00E3o v\u00E1lida!");
}
});
my_sudoku.core.clear_board_BANG_ = (function my_sudoku$core$clear_board_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_sudoku.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),(0))))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-board","initial-board",715087213),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),(0))))),new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),null,new cljs.core.Keyword(null,"solving","solving",-175043197),false], 0));

return my_sudoku.core.render_board_BANG_();
});
my_sudoku.core.move_selection = (function my_sudoku$core$move_selection(direction){

var selected = new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_sudoku.core.game_state));
if(cljs.core.truth_(selected)){
var vec__21992 = selected;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21992,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21992,(1),null);
var vec__21995 = (function (){var G__21998 = direction;
var G__21998__$1 = (((G__21998 instanceof cljs.core.Keyword))?G__21998.fqn:null);
switch (G__21998__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21998__$1)].join('')));

}
})();
var new_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21995,(0),null);
var new_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21995,(1),null);
return my_sudoku.core.select_cell_BANG_(new_row,new_col);
} else {
return null;
}
});
my_sudoku.core.handle_keypress = (function my_sudoku$core$handle_keypress(event){
var key = event.key;
var selected = new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_sudoku.core.game_state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowUp")){
event.preventDefault();

return my_sudoku.core.move_selection(new cljs.core.Keyword(null,"up","up",-269712113));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowDown")){
event.preventDefault();

return my_sudoku.core.move_selection(new cljs.core.Keyword(null,"down","down",1565245570));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowLeft")){
event.preventDefault();

return my_sudoku.core.move_selection(new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowRight")){
event.preventDefault();

return my_sudoku.core.move_selection(new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = selected;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_sudoku.core.game_state)));
} else {
return and__5043__auto__;
}
})())){
var vec__21999 = selected;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21999,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21999,(1),null);
if(cljs.core.truth_(cljs.core.re_matches(/[1-9]/,key))){
var number = parseInt(key);
return my_sudoku.core.set_cell_value_BANG_(row,col,number);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Delete")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Backspace")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"0")))))){
return my_sudoku.core.clear_cell_BANG_(row,col);
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
(window.selectCell = my_sudoku.core.select_cell_BANG_);
(window.solvePuzzle = my_sudoku.core.solve_puzzle_BANG_);
(window.clearBoard = my_sudoku.core.clear_board_BANG_);
my_sudoku.core.init_BANG_ = (function my_sudoku$core$init_BANG_(){
var app_element = document.getElementById("app");
(app_element.innerHTML = ["<h1>\uD83C\uDFAF My Sudoku Solver</h1>","<div id='sudoku-board'>",my_sudoku.core.create_board(),"</div>",my_sudoku.core.create_controls(),"<p class='instructions'>Use setas para navegar | Digite 1-9 | Delete/Backspace/0 para apagar | GO para resolver</p>"].join(''));

my_sudoku.core.select_cell_BANG_((4),(4));

return document.addEventListener("keydown",my_sudoku.core.handle_keypress);
});

//# sourceMappingURL=my_sudoku.core.js.map
