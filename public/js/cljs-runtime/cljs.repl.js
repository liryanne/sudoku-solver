goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18516){
var map__18517 = p__18516;
var map__18517__$1 = cljs.core.__destructure_map(map__18517);
var m = map__18517__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18517__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18517__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18524_19022 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18525_19023 = null;
var count__18526_19024 = (0);
var i__18527_19025 = (0);
while(true){
if((i__18527_19025 < count__18526_19024)){
var f_19033 = chunk__18525_19023.cljs$core$IIndexed$_nth$arity$2(null,i__18527_19025);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19033], 0));


var G__19034 = seq__18524_19022;
var G__19035 = chunk__18525_19023;
var G__19036 = count__18526_19024;
var G__19037 = (i__18527_19025 + (1));
seq__18524_19022 = G__19034;
chunk__18525_19023 = G__19035;
count__18526_19024 = G__19036;
i__18527_19025 = G__19037;
continue;
} else {
var temp__5804__auto___19038 = cljs.core.seq(seq__18524_19022);
if(temp__5804__auto___19038){
var seq__18524_19039__$1 = temp__5804__auto___19038;
if(cljs.core.chunked_seq_QMARK_(seq__18524_19039__$1)){
var c__5568__auto___19040 = cljs.core.chunk_first(seq__18524_19039__$1);
var G__19041 = cljs.core.chunk_rest(seq__18524_19039__$1);
var G__19042 = c__5568__auto___19040;
var G__19043 = cljs.core.count(c__5568__auto___19040);
var G__19044 = (0);
seq__18524_19022 = G__19041;
chunk__18525_19023 = G__19042;
count__18526_19024 = G__19043;
i__18527_19025 = G__19044;
continue;
} else {
var f_19045 = cljs.core.first(seq__18524_19039__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19045], 0));


var G__19046 = cljs.core.next(seq__18524_19039__$1);
var G__19047 = null;
var G__19048 = (0);
var G__19049 = (0);
seq__18524_19022 = G__19046;
chunk__18525_19023 = G__19047;
count__18526_19024 = G__19048;
i__18527_19025 = G__19049;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19054 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19054], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19054)))?cljs.core.second(arglists_19054):arglists_19054)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18542_19073 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18543_19074 = null;
var count__18544_19075 = (0);
var i__18545_19076 = (0);
while(true){
if((i__18545_19076 < count__18544_19075)){
var vec__18574_19079 = chunk__18543_19074.cljs$core$IIndexed$_nth$arity$2(null,i__18545_19076);
var name_19080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18574_19079,(0),null);
var map__18577_19081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18574_19079,(1),null);
var map__18577_19082__$1 = cljs.core.__destructure_map(map__18577_19081);
var doc_19083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18577_19082__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18577_19082__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19080], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19084], 0));

if(cljs.core.truth_(doc_19083)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19083], 0));
} else {
}


var G__19093 = seq__18542_19073;
var G__19094 = chunk__18543_19074;
var G__19095 = count__18544_19075;
var G__19096 = (i__18545_19076 + (1));
seq__18542_19073 = G__19093;
chunk__18543_19074 = G__19094;
count__18544_19075 = G__19095;
i__18545_19076 = G__19096;
continue;
} else {
var temp__5804__auto___19099 = cljs.core.seq(seq__18542_19073);
if(temp__5804__auto___19099){
var seq__18542_19101__$1 = temp__5804__auto___19099;
if(cljs.core.chunked_seq_QMARK_(seq__18542_19101__$1)){
var c__5568__auto___19102 = cljs.core.chunk_first(seq__18542_19101__$1);
var G__19104 = cljs.core.chunk_rest(seq__18542_19101__$1);
var G__19105 = c__5568__auto___19102;
var G__19106 = cljs.core.count(c__5568__auto___19102);
var G__19107 = (0);
seq__18542_19073 = G__19104;
chunk__18543_19074 = G__19105;
count__18544_19075 = G__19106;
i__18545_19076 = G__19107;
continue;
} else {
var vec__18583_19108 = cljs.core.first(seq__18542_19101__$1);
var name_19109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18583_19108,(0),null);
var map__18586_19110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18583_19108,(1),null);
var map__18586_19111__$1 = cljs.core.__destructure_map(map__18586_19110);
var doc_19112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18586_19111__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18586_19111__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19109], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19116], 0));

if(cljs.core.truth_(doc_19112)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19112], 0));
} else {
}


var G__19123 = cljs.core.next(seq__18542_19101__$1);
var G__19124 = null;
var G__19125 = (0);
var G__19126 = (0);
seq__18542_19073 = G__19123;
chunk__18543_19074 = G__19124;
count__18544_19075 = G__19125;
i__18545_19076 = G__19126;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18593 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18594 = null;
var count__18595 = (0);
var i__18596 = (0);
while(true){
if((i__18596 < count__18595)){
var role = chunk__18594.cljs$core$IIndexed$_nth$arity$2(null,i__18596);
var temp__5804__auto___19138__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19138__$1)){
var spec_19141 = temp__5804__auto___19138__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19141)], 0));
} else {
}


var G__19143 = seq__18593;
var G__19144 = chunk__18594;
var G__19145 = count__18595;
var G__19146 = (i__18596 + (1));
seq__18593 = G__19143;
chunk__18594 = G__19144;
count__18595 = G__19145;
i__18596 = G__19146;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18593);
if(temp__5804__auto____$1){
var seq__18593__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18593__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18593__$1);
var G__19149 = cljs.core.chunk_rest(seq__18593__$1);
var G__19150 = c__5568__auto__;
var G__19152 = cljs.core.count(c__5568__auto__);
var G__19153 = (0);
seq__18593 = G__19149;
chunk__18594 = G__19150;
count__18595 = G__19152;
i__18596 = G__19153;
continue;
} else {
var role = cljs.core.first(seq__18593__$1);
var temp__5804__auto___19156__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19156__$2)){
var spec_19159 = temp__5804__auto___19156__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19159)], 0));
} else {
}


var G__19166 = cljs.core.next(seq__18593__$1);
var G__19167 = null;
var G__19168 = (0);
var G__19169 = (0);
seq__18593 = G__19166;
chunk__18594 = G__19167;
count__18595 = G__19168;
i__18596 = G__19169;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19176 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19177 = cljs.core.ex_cause(t);
via = G__19176;
t = G__19177;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18653 = datafied_throwable;
var map__18653__$1 = cljs.core.__destructure_map(map__18653);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18653__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18653__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18653__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18654 = cljs.core.last(via);
var map__18654__$1 = cljs.core.__destructure_map(map__18654);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18654__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18654__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18654__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18655 = data;
var map__18655__$1 = cljs.core.__destructure_map(map__18655);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18657 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18657__$1 = cljs.core.__destructure_map(map__18657);
var top_data = map__18657__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18657__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18670 = phase;
var G__18670__$1 = (((G__18670 instanceof cljs.core.Keyword))?G__18670.fqn:null);
switch (G__18670__$1) {
case "read-source":
var map__18674 = data;
var map__18674__$1 = cljs.core.__destructure_map(map__18674);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18677 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18677__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18677,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18677);
var G__18677__$2 = (cljs.core.truth_((function (){var fexpr__18678 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18678.cljs$core$IFn$_invoke$arity$1 ? fexpr__18678.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18678.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18677__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18677__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18677__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18677__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18680 = top_data;
var G__18680__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18680,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18680);
var G__18680__$2 = (cljs.core.truth_((function (){var fexpr__18686 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18686.cljs$core$IFn$_invoke$arity$1 ? fexpr__18686.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18686.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18680__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18680__$1);
var G__18680__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18680__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18680__$2);
var G__18680__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18680__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18680__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18680__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18680__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18701 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(3),null);
var G__18710 = top_data;
var G__18710__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18710,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18710);
var G__18710__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18710__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18710__$1);
var G__18710__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18710__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18710__$2);
var G__18710__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18710__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18710__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18710__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18710__$4;
}

break;
case "execution":
var vec__18734 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18734,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18734,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18734,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18734,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18651_SHARP_){
var or__5045__auto__ = (p1__18651_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__18745 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18745.cljs$core$IFn$_invoke$arity$1 ? fexpr__18745.cljs$core$IFn$_invoke$arity$1(p1__18651_SHARP_) : fexpr__18745.call(null,p1__18651_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__18756 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18756__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18756,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18756);
var G__18756__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18756__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18756__$1);
var G__18756__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18756__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18756__$2);
var G__18756__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18756__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18756__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18756__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18756__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18670__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18825){
var map__18826 = p__18825;
var map__18826__$1 = cljs.core.__destructure_map(map__18826);
var triage_data = map__18826__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18853 = phase;
var G__18853__$1 = (((G__18853 instanceof cljs.core.Keyword))?G__18853.fqn:null);
switch (G__18853__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18855 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18857 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18860 = loc;
var G__18862 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18873_19346 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18874_19347 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18875_19348 = true;
var _STAR_print_fn_STAR__temp_val__18876_19349 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18875_19348);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18876_19349);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18806_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18806_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18874_19347);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18873_19346);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18855,G__18857,G__18860,G__18862) : format.call(null,G__18855,G__18857,G__18860,G__18862));

break;
case "macroexpansion":
var G__18889 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18890 = cause_type;
var G__18891 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18892 = loc;
var G__18893 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18889,G__18890,G__18891,G__18892,G__18893) : format.call(null,G__18889,G__18890,G__18891,G__18892,G__18893));

break;
case "compile-syntax-check":
var G__18896 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18897 = cause_type;
var G__18898 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18899 = loc;
var G__18900 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18896,G__18897,G__18898,G__18899,G__18900) : format.call(null,G__18896,G__18897,G__18898,G__18899,G__18900));

break;
case "compilation":
var G__18904 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18905 = cause_type;
var G__18906 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18908 = loc;
var G__18910 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18904,G__18905,G__18906,G__18908,G__18910) : format.call(null,G__18904,G__18905,G__18906,G__18908,G__18910));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18914 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18916 = symbol;
var G__18917 = loc;
var G__18918 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18925_19387 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18926_19388 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18927_19389 = true;
var _STAR_print_fn_STAR__temp_val__18928_19390 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18927_19389);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18928_19390);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18816_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18816_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18926_19388);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18925_19387);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18914,G__18916,G__18917,G__18918) : format.call(null,G__18914,G__18916,G__18917,G__18918));
} else {
var G__18943 = "Execution error%s at %s(%s).\n%s\n";
var G__18944 = cause_type;
var G__18945 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18946 = loc;
var G__18947 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18943,G__18944,G__18945,G__18946,G__18947) : format.call(null,G__18943,G__18944,G__18945,G__18946,G__18947));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18853__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
