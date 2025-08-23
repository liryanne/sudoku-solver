goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21101 = arguments.length;
var i__5770__auto___21102 = (0);
while(true){
if((i__5770__auto___21102 < len__5769__auto___21101)){
args__5775__auto__.push((arguments[i__5770__auto___21102]));

var G__21103 = (i__5770__auto___21102 + (1));
i__5770__auto___21102 = G__21103;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20814){
var G__20815 = cljs.core.first(seq20814);
var seq20814__$1 = cljs.core.next(seq20814);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20815,seq20814__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20816 = cljs.core.seq(sources);
var chunk__20817 = null;
var count__20818 = (0);
var i__20819 = (0);
while(true){
if((i__20819 < count__20818)){
var map__20828 = chunk__20817.cljs$core$IIndexed$_nth$arity$2(null,i__20819);
var map__20828__$1 = cljs.core.__destructure_map(map__20828);
var src = map__20828__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20829){var e_21104 = e20829;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21104);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21104.message)].join('')));
}

var G__21105 = seq__20816;
var G__21106 = chunk__20817;
var G__21107 = count__20818;
var G__21108 = (i__20819 + (1));
seq__20816 = G__21105;
chunk__20817 = G__21106;
count__20818 = G__21107;
i__20819 = G__21108;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20816);
if(temp__5804__auto__){
var seq__20816__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20816__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20816__$1);
var G__21109 = cljs.core.chunk_rest(seq__20816__$1);
var G__21110 = c__5568__auto__;
var G__21111 = cljs.core.count(c__5568__auto__);
var G__21112 = (0);
seq__20816 = G__21109;
chunk__20817 = G__21110;
count__20818 = G__21111;
i__20819 = G__21112;
continue;
} else {
var map__20831 = cljs.core.first(seq__20816__$1);
var map__20831__$1 = cljs.core.__destructure_map(map__20831);
var src = map__20831__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20832){var e_21113 = e20832;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21113);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21113.message)].join('')));
}

var G__21114 = cljs.core.next(seq__20816__$1);
var G__21115 = null;
var G__21116 = (0);
var G__21117 = (0);
seq__20816 = G__21114;
chunk__20817 = G__21115;
count__20818 = G__21116;
i__20819 = G__21117;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20833 = cljs.core.seq(js_requires);
var chunk__20834 = null;
var count__20835 = (0);
var i__20836 = (0);
while(true){
if((i__20836 < count__20835)){
var js_ns = chunk__20834.cljs$core$IIndexed$_nth$arity$2(null,i__20836);
var require_str_21118 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21118);


var G__21119 = seq__20833;
var G__21120 = chunk__20834;
var G__21121 = count__20835;
var G__21122 = (i__20836 + (1));
seq__20833 = G__21119;
chunk__20834 = G__21120;
count__20835 = G__21121;
i__20836 = G__21122;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20833);
if(temp__5804__auto__){
var seq__20833__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20833__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20833__$1);
var G__21123 = cljs.core.chunk_rest(seq__20833__$1);
var G__21124 = c__5568__auto__;
var G__21125 = cljs.core.count(c__5568__auto__);
var G__21126 = (0);
seq__20833 = G__21123;
chunk__20834 = G__21124;
count__20835 = G__21125;
i__20836 = G__21126;
continue;
} else {
var js_ns = cljs.core.first(seq__20833__$1);
var require_str_21127 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21127);


var G__21128 = cljs.core.next(seq__20833__$1);
var G__21129 = null;
var G__21130 = (0);
var G__21131 = (0);
seq__20833 = G__21128;
chunk__20834 = G__21129;
count__20835 = G__21130;
i__20836 = G__21131;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20840){
var map__20841 = p__20840;
var map__20841__$1 = cljs.core.__destructure_map(map__20841);
var msg = map__20841__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20841__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20841__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20842(s__20843){
return (new cljs.core.LazySeq(null,(function (){
var s__20843__$1 = s__20843;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20843__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20848 = cljs.core.first(xs__6360__auto__);
var map__20848__$1 = cljs.core.__destructure_map(map__20848);
var src = map__20848__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20848__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20848__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20843__$1,map__20848,map__20848__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20841,map__20841__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20842_$_iter__20844(s__20845){
return (new cljs.core.LazySeq(null,((function (s__20843__$1,map__20848,map__20848__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20841,map__20841__$1,msg,info,reload_info){
return (function (){
var s__20845__$1 = s__20845;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20845__$1);
if(temp__5804__auto____$1){
var s__20845__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20845__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20845__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20847 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20846 = (0);
while(true){
if((i__20846 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20846);
cljs.core.chunk_append(b__20847,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21132 = (i__20846 + (1));
i__20846 = G__21132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20847),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20842_$_iter__20844(cljs.core.chunk_rest(s__20845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20847),null);
}
} else {
var warning = cljs.core.first(s__20845__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20842_$_iter__20844(cljs.core.rest(s__20845__$2)));
}
} else {
return null;
}
break;
}
});})(s__20843__$1,map__20848,map__20848__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20841,map__20841__$1,msg,info,reload_info))
,null,null));
});})(s__20843__$1,map__20848,map__20848__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20841,map__20841__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20842(cljs.core.rest(s__20843__$1)));
} else {
var G__21133 = cljs.core.rest(s__20843__$1);
s__20843__$1 = G__21133;
continue;
}
} else {
var G__21134 = cljs.core.rest(s__20843__$1);
s__20843__$1 = G__21134;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20849_21135 = cljs.core.seq(warnings);
var chunk__20850_21136 = null;
var count__20851_21137 = (0);
var i__20852_21138 = (0);
while(true){
if((i__20852_21138 < count__20851_21137)){
var map__20855_21139 = chunk__20850_21136.cljs$core$IIndexed$_nth$arity$2(null,i__20852_21138);
var map__20855_21140__$1 = cljs.core.__destructure_map(map__20855_21139);
var w_21141 = map__20855_21140__$1;
var msg_21142__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855_21140__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855_21140__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855_21140__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855_21140__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21145)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21143),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21144),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21142__$1)].join(''));


var G__21146 = seq__20849_21135;
var G__21147 = chunk__20850_21136;
var G__21148 = count__20851_21137;
var G__21149 = (i__20852_21138 + (1));
seq__20849_21135 = G__21146;
chunk__20850_21136 = G__21147;
count__20851_21137 = G__21148;
i__20852_21138 = G__21149;
continue;
} else {
var temp__5804__auto___21150 = cljs.core.seq(seq__20849_21135);
if(temp__5804__auto___21150){
var seq__20849_21151__$1 = temp__5804__auto___21150;
if(cljs.core.chunked_seq_QMARK_(seq__20849_21151__$1)){
var c__5568__auto___21152 = cljs.core.chunk_first(seq__20849_21151__$1);
var G__21153 = cljs.core.chunk_rest(seq__20849_21151__$1);
var G__21154 = c__5568__auto___21152;
var G__21155 = cljs.core.count(c__5568__auto___21152);
var G__21156 = (0);
seq__20849_21135 = G__21153;
chunk__20850_21136 = G__21154;
count__20851_21137 = G__21155;
i__20852_21138 = G__21156;
continue;
} else {
var map__20856_21157 = cljs.core.first(seq__20849_21151__$1);
var map__20856_21158__$1 = cljs.core.__destructure_map(map__20856_21157);
var w_21159 = map__20856_21158__$1;
var msg_21160__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21158__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21158__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21158__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21158__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21163)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21161),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21162),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21160__$1)].join(''));


var G__21164 = cljs.core.next(seq__20849_21151__$1);
var G__21165 = null;
var G__21166 = (0);
var G__21167 = (0);
seq__20849_21135 = G__21164;
chunk__20850_21136 = G__21165;
count__20851_21137 = G__21166;
i__20852_21138 = G__21167;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20839_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20839_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20857){
var map__20858 = p__20857;
var map__20858__$1 = cljs.core.__destructure_map(map__20858);
var msg = map__20858__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20858__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20858__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20859 = cljs.core.seq(updates);
var chunk__20861 = null;
var count__20862 = (0);
var i__20863 = (0);
while(true){
if((i__20863 < count__20862)){
var path = chunk__20861.cljs$core$IIndexed$_nth$arity$2(null,i__20863);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20973_21168 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20977_21169 = null;
var count__20978_21170 = (0);
var i__20979_21171 = (0);
while(true){
if((i__20979_21171 < count__20978_21170)){
var node_21172 = chunk__20977_21169.cljs$core$IIndexed$_nth$arity$2(null,i__20979_21171);
if(cljs.core.not(node_21172.shadow$old)){
var path_match_21173 = shadow.cljs.devtools.client.browser.match_paths(node_21172.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21173)){
var new_link_21174 = (function (){var G__21005 = node_21172.cloneNode(true);
G__21005.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21173),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21005;
})();
(node_21172.shadow$old = true);

(new_link_21174.onload = ((function (seq__20973_21168,chunk__20977_21169,count__20978_21170,i__20979_21171,seq__20859,chunk__20861,count__20862,i__20863,new_link_21174,path_match_21173,node_21172,path,map__20858,map__20858__$1,msg,updates,reload_info){
return (function (e){
var seq__21006_21175 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21008_21176 = null;
var count__21009_21177 = (0);
var i__21010_21178 = (0);
while(true){
if((i__21010_21178 < count__21009_21177)){
var map__21014_21179 = chunk__21008_21176.cljs$core$IIndexed$_nth$arity$2(null,i__21010_21178);
var map__21014_21180__$1 = cljs.core.__destructure_map(map__21014_21179);
var task_21181 = map__21014_21180__$1;
var fn_str_21182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21014_21180__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21014_21180__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21184 = goog.getObjectByName(fn_str_21182,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21183)].join(''));

(fn_obj_21184.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21184.cljs$core$IFn$_invoke$arity$2(path,new_link_21174) : fn_obj_21184.call(null,path,new_link_21174));


var G__21185 = seq__21006_21175;
var G__21186 = chunk__21008_21176;
var G__21187 = count__21009_21177;
var G__21188 = (i__21010_21178 + (1));
seq__21006_21175 = G__21185;
chunk__21008_21176 = G__21186;
count__21009_21177 = G__21187;
i__21010_21178 = G__21188;
continue;
} else {
var temp__5804__auto___21189 = cljs.core.seq(seq__21006_21175);
if(temp__5804__auto___21189){
var seq__21006_21190__$1 = temp__5804__auto___21189;
if(cljs.core.chunked_seq_QMARK_(seq__21006_21190__$1)){
var c__5568__auto___21191 = cljs.core.chunk_first(seq__21006_21190__$1);
var G__21192 = cljs.core.chunk_rest(seq__21006_21190__$1);
var G__21193 = c__5568__auto___21191;
var G__21194 = cljs.core.count(c__5568__auto___21191);
var G__21195 = (0);
seq__21006_21175 = G__21192;
chunk__21008_21176 = G__21193;
count__21009_21177 = G__21194;
i__21010_21178 = G__21195;
continue;
} else {
var map__21015_21196 = cljs.core.first(seq__21006_21190__$1);
var map__21015_21197__$1 = cljs.core.__destructure_map(map__21015_21196);
var task_21198 = map__21015_21197__$1;
var fn_str_21199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015_21197__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015_21197__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21201 = goog.getObjectByName(fn_str_21199,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21200)].join(''));

(fn_obj_21201.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21201.cljs$core$IFn$_invoke$arity$2(path,new_link_21174) : fn_obj_21201.call(null,path,new_link_21174));


var G__21202 = cljs.core.next(seq__21006_21190__$1);
var G__21203 = null;
var G__21204 = (0);
var G__21205 = (0);
seq__21006_21175 = G__21202;
chunk__21008_21176 = G__21203;
count__21009_21177 = G__21204;
i__21010_21178 = G__21205;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21172);
});})(seq__20973_21168,chunk__20977_21169,count__20978_21170,i__20979_21171,seq__20859,chunk__20861,count__20862,i__20863,new_link_21174,path_match_21173,node_21172,path,map__20858,map__20858__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21173], 0));

goog.dom.insertSiblingAfter(new_link_21174,node_21172);


var G__21206 = seq__20973_21168;
var G__21207 = chunk__20977_21169;
var G__21208 = count__20978_21170;
var G__21209 = (i__20979_21171 + (1));
seq__20973_21168 = G__21206;
chunk__20977_21169 = G__21207;
count__20978_21170 = G__21208;
i__20979_21171 = G__21209;
continue;
} else {
var G__21210 = seq__20973_21168;
var G__21211 = chunk__20977_21169;
var G__21212 = count__20978_21170;
var G__21213 = (i__20979_21171 + (1));
seq__20973_21168 = G__21210;
chunk__20977_21169 = G__21211;
count__20978_21170 = G__21212;
i__20979_21171 = G__21213;
continue;
}
} else {
var G__21214 = seq__20973_21168;
var G__21215 = chunk__20977_21169;
var G__21216 = count__20978_21170;
var G__21217 = (i__20979_21171 + (1));
seq__20973_21168 = G__21214;
chunk__20977_21169 = G__21215;
count__20978_21170 = G__21216;
i__20979_21171 = G__21217;
continue;
}
} else {
var temp__5804__auto___21218 = cljs.core.seq(seq__20973_21168);
if(temp__5804__auto___21218){
var seq__20973_21219__$1 = temp__5804__auto___21218;
if(cljs.core.chunked_seq_QMARK_(seq__20973_21219__$1)){
var c__5568__auto___21220 = cljs.core.chunk_first(seq__20973_21219__$1);
var G__21221 = cljs.core.chunk_rest(seq__20973_21219__$1);
var G__21222 = c__5568__auto___21220;
var G__21223 = cljs.core.count(c__5568__auto___21220);
var G__21224 = (0);
seq__20973_21168 = G__21221;
chunk__20977_21169 = G__21222;
count__20978_21170 = G__21223;
i__20979_21171 = G__21224;
continue;
} else {
var node_21225 = cljs.core.first(seq__20973_21219__$1);
if(cljs.core.not(node_21225.shadow$old)){
var path_match_21226 = shadow.cljs.devtools.client.browser.match_paths(node_21225.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21226)){
var new_link_21227 = (function (){var G__21016 = node_21225.cloneNode(true);
G__21016.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21226),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21016;
})();
(node_21225.shadow$old = true);

(new_link_21227.onload = ((function (seq__20973_21168,chunk__20977_21169,count__20978_21170,i__20979_21171,seq__20859,chunk__20861,count__20862,i__20863,new_link_21227,path_match_21226,node_21225,seq__20973_21219__$1,temp__5804__auto___21218,path,map__20858,map__20858__$1,msg,updates,reload_info){
return (function (e){
var seq__21017_21228 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21019_21229 = null;
var count__21020_21230 = (0);
var i__21021_21231 = (0);
while(true){
if((i__21021_21231 < count__21020_21230)){
var map__21025_21232 = chunk__21019_21229.cljs$core$IIndexed$_nth$arity$2(null,i__21021_21231);
var map__21025_21233__$1 = cljs.core.__destructure_map(map__21025_21232);
var task_21234 = map__21025_21233__$1;
var fn_str_21235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025_21233__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025_21233__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21237 = goog.getObjectByName(fn_str_21235,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21236)].join(''));

(fn_obj_21237.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21237.cljs$core$IFn$_invoke$arity$2(path,new_link_21227) : fn_obj_21237.call(null,path,new_link_21227));


var G__21238 = seq__21017_21228;
var G__21239 = chunk__21019_21229;
var G__21240 = count__21020_21230;
var G__21241 = (i__21021_21231 + (1));
seq__21017_21228 = G__21238;
chunk__21019_21229 = G__21239;
count__21020_21230 = G__21240;
i__21021_21231 = G__21241;
continue;
} else {
var temp__5804__auto___21242__$1 = cljs.core.seq(seq__21017_21228);
if(temp__5804__auto___21242__$1){
var seq__21017_21243__$1 = temp__5804__auto___21242__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21017_21243__$1)){
var c__5568__auto___21244 = cljs.core.chunk_first(seq__21017_21243__$1);
var G__21245 = cljs.core.chunk_rest(seq__21017_21243__$1);
var G__21246 = c__5568__auto___21244;
var G__21247 = cljs.core.count(c__5568__auto___21244);
var G__21248 = (0);
seq__21017_21228 = G__21245;
chunk__21019_21229 = G__21246;
count__21020_21230 = G__21247;
i__21021_21231 = G__21248;
continue;
} else {
var map__21026_21249 = cljs.core.first(seq__21017_21243__$1);
var map__21026_21250__$1 = cljs.core.__destructure_map(map__21026_21249);
var task_21251 = map__21026_21250__$1;
var fn_str_21252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21026_21250__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21026_21250__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21254 = goog.getObjectByName(fn_str_21252,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21253)].join(''));

(fn_obj_21254.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21254.cljs$core$IFn$_invoke$arity$2(path,new_link_21227) : fn_obj_21254.call(null,path,new_link_21227));


var G__21255 = cljs.core.next(seq__21017_21243__$1);
var G__21256 = null;
var G__21257 = (0);
var G__21258 = (0);
seq__21017_21228 = G__21255;
chunk__21019_21229 = G__21256;
count__21020_21230 = G__21257;
i__21021_21231 = G__21258;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21225);
});})(seq__20973_21168,chunk__20977_21169,count__20978_21170,i__20979_21171,seq__20859,chunk__20861,count__20862,i__20863,new_link_21227,path_match_21226,node_21225,seq__20973_21219__$1,temp__5804__auto___21218,path,map__20858,map__20858__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21226], 0));

goog.dom.insertSiblingAfter(new_link_21227,node_21225);


var G__21259 = cljs.core.next(seq__20973_21219__$1);
var G__21260 = null;
var G__21261 = (0);
var G__21262 = (0);
seq__20973_21168 = G__21259;
chunk__20977_21169 = G__21260;
count__20978_21170 = G__21261;
i__20979_21171 = G__21262;
continue;
} else {
var G__21263 = cljs.core.next(seq__20973_21219__$1);
var G__21264 = null;
var G__21265 = (0);
var G__21266 = (0);
seq__20973_21168 = G__21263;
chunk__20977_21169 = G__21264;
count__20978_21170 = G__21265;
i__20979_21171 = G__21266;
continue;
}
} else {
var G__21267 = cljs.core.next(seq__20973_21219__$1);
var G__21268 = null;
var G__21269 = (0);
var G__21270 = (0);
seq__20973_21168 = G__21267;
chunk__20977_21169 = G__21268;
count__20978_21170 = G__21269;
i__20979_21171 = G__21270;
continue;
}
}
} else {
}
}
break;
}


var G__21271 = seq__20859;
var G__21272 = chunk__20861;
var G__21273 = count__20862;
var G__21274 = (i__20863 + (1));
seq__20859 = G__21271;
chunk__20861 = G__21272;
count__20862 = G__21273;
i__20863 = G__21274;
continue;
} else {
var G__21275 = seq__20859;
var G__21276 = chunk__20861;
var G__21277 = count__20862;
var G__21278 = (i__20863 + (1));
seq__20859 = G__21275;
chunk__20861 = G__21276;
count__20862 = G__21277;
i__20863 = G__21278;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20859);
if(temp__5804__auto__){
var seq__20859__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20859__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20859__$1);
var G__21279 = cljs.core.chunk_rest(seq__20859__$1);
var G__21280 = c__5568__auto__;
var G__21281 = cljs.core.count(c__5568__auto__);
var G__21282 = (0);
seq__20859 = G__21279;
chunk__20861 = G__21280;
count__20862 = G__21281;
i__20863 = G__21282;
continue;
} else {
var path = cljs.core.first(seq__20859__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21027_21283 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21031_21284 = null;
var count__21032_21285 = (0);
var i__21033_21286 = (0);
while(true){
if((i__21033_21286 < count__21032_21285)){
var node_21287 = chunk__21031_21284.cljs$core$IIndexed$_nth$arity$2(null,i__21033_21286);
if(cljs.core.not(node_21287.shadow$old)){
var path_match_21288 = shadow.cljs.devtools.client.browser.match_paths(node_21287.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21288)){
var new_link_21289 = (function (){var G__21059 = node_21287.cloneNode(true);
G__21059.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21288),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21059;
})();
(node_21287.shadow$old = true);

(new_link_21289.onload = ((function (seq__21027_21283,chunk__21031_21284,count__21032_21285,i__21033_21286,seq__20859,chunk__20861,count__20862,i__20863,new_link_21289,path_match_21288,node_21287,path,seq__20859__$1,temp__5804__auto__,map__20858,map__20858__$1,msg,updates,reload_info){
return (function (e){
var seq__21060_21290 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21062_21291 = null;
var count__21063_21292 = (0);
var i__21064_21293 = (0);
while(true){
if((i__21064_21293 < count__21063_21292)){
var map__21068_21294 = chunk__21062_21291.cljs$core$IIndexed$_nth$arity$2(null,i__21064_21293);
var map__21068_21295__$1 = cljs.core.__destructure_map(map__21068_21294);
var task_21296 = map__21068_21295__$1;
var fn_str_21297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21295__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21295__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21299 = goog.getObjectByName(fn_str_21297,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21298)].join(''));

(fn_obj_21299.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21299.cljs$core$IFn$_invoke$arity$2(path,new_link_21289) : fn_obj_21299.call(null,path,new_link_21289));


var G__21300 = seq__21060_21290;
var G__21301 = chunk__21062_21291;
var G__21302 = count__21063_21292;
var G__21303 = (i__21064_21293 + (1));
seq__21060_21290 = G__21300;
chunk__21062_21291 = G__21301;
count__21063_21292 = G__21302;
i__21064_21293 = G__21303;
continue;
} else {
var temp__5804__auto___21304__$1 = cljs.core.seq(seq__21060_21290);
if(temp__5804__auto___21304__$1){
var seq__21060_21305__$1 = temp__5804__auto___21304__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21060_21305__$1)){
var c__5568__auto___21306 = cljs.core.chunk_first(seq__21060_21305__$1);
var G__21307 = cljs.core.chunk_rest(seq__21060_21305__$1);
var G__21308 = c__5568__auto___21306;
var G__21309 = cljs.core.count(c__5568__auto___21306);
var G__21310 = (0);
seq__21060_21290 = G__21307;
chunk__21062_21291 = G__21308;
count__21063_21292 = G__21309;
i__21064_21293 = G__21310;
continue;
} else {
var map__21069_21311 = cljs.core.first(seq__21060_21305__$1);
var map__21069_21312__$1 = cljs.core.__destructure_map(map__21069_21311);
var task_21313 = map__21069_21312__$1;
var fn_str_21314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21312__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21312__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21316 = goog.getObjectByName(fn_str_21314,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21315)].join(''));

(fn_obj_21316.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21316.cljs$core$IFn$_invoke$arity$2(path,new_link_21289) : fn_obj_21316.call(null,path,new_link_21289));


var G__21317 = cljs.core.next(seq__21060_21305__$1);
var G__21318 = null;
var G__21319 = (0);
var G__21320 = (0);
seq__21060_21290 = G__21317;
chunk__21062_21291 = G__21318;
count__21063_21292 = G__21319;
i__21064_21293 = G__21320;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21287);
});})(seq__21027_21283,chunk__21031_21284,count__21032_21285,i__21033_21286,seq__20859,chunk__20861,count__20862,i__20863,new_link_21289,path_match_21288,node_21287,path,seq__20859__$1,temp__5804__auto__,map__20858,map__20858__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21288], 0));

goog.dom.insertSiblingAfter(new_link_21289,node_21287);


var G__21321 = seq__21027_21283;
var G__21322 = chunk__21031_21284;
var G__21323 = count__21032_21285;
var G__21324 = (i__21033_21286 + (1));
seq__21027_21283 = G__21321;
chunk__21031_21284 = G__21322;
count__21032_21285 = G__21323;
i__21033_21286 = G__21324;
continue;
} else {
var G__21325 = seq__21027_21283;
var G__21326 = chunk__21031_21284;
var G__21327 = count__21032_21285;
var G__21328 = (i__21033_21286 + (1));
seq__21027_21283 = G__21325;
chunk__21031_21284 = G__21326;
count__21032_21285 = G__21327;
i__21033_21286 = G__21328;
continue;
}
} else {
var G__21329 = seq__21027_21283;
var G__21330 = chunk__21031_21284;
var G__21331 = count__21032_21285;
var G__21332 = (i__21033_21286 + (1));
seq__21027_21283 = G__21329;
chunk__21031_21284 = G__21330;
count__21032_21285 = G__21331;
i__21033_21286 = G__21332;
continue;
}
} else {
var temp__5804__auto___21333__$1 = cljs.core.seq(seq__21027_21283);
if(temp__5804__auto___21333__$1){
var seq__21027_21334__$1 = temp__5804__auto___21333__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21027_21334__$1)){
var c__5568__auto___21335 = cljs.core.chunk_first(seq__21027_21334__$1);
var G__21336 = cljs.core.chunk_rest(seq__21027_21334__$1);
var G__21337 = c__5568__auto___21335;
var G__21338 = cljs.core.count(c__5568__auto___21335);
var G__21339 = (0);
seq__21027_21283 = G__21336;
chunk__21031_21284 = G__21337;
count__21032_21285 = G__21338;
i__21033_21286 = G__21339;
continue;
} else {
var node_21340 = cljs.core.first(seq__21027_21334__$1);
if(cljs.core.not(node_21340.shadow$old)){
var path_match_21341 = shadow.cljs.devtools.client.browser.match_paths(node_21340.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21341)){
var new_link_21342 = (function (){var G__21070 = node_21340.cloneNode(true);
G__21070.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21341),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21070;
})();
(node_21340.shadow$old = true);

(new_link_21342.onload = ((function (seq__21027_21283,chunk__21031_21284,count__21032_21285,i__21033_21286,seq__20859,chunk__20861,count__20862,i__20863,new_link_21342,path_match_21341,node_21340,seq__21027_21334__$1,temp__5804__auto___21333__$1,path,seq__20859__$1,temp__5804__auto__,map__20858,map__20858__$1,msg,updates,reload_info){
return (function (e){
var seq__21071_21343 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21073_21344 = null;
var count__21074_21345 = (0);
var i__21075_21346 = (0);
while(true){
if((i__21075_21346 < count__21074_21345)){
var map__21079_21347 = chunk__21073_21344.cljs$core$IIndexed$_nth$arity$2(null,i__21075_21346);
var map__21079_21348__$1 = cljs.core.__destructure_map(map__21079_21347);
var task_21349 = map__21079_21348__$1;
var fn_str_21350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079_21348__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079_21348__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21352 = goog.getObjectByName(fn_str_21350,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21351)].join(''));

(fn_obj_21352.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21352.cljs$core$IFn$_invoke$arity$2(path,new_link_21342) : fn_obj_21352.call(null,path,new_link_21342));


var G__21353 = seq__21071_21343;
var G__21354 = chunk__21073_21344;
var G__21355 = count__21074_21345;
var G__21356 = (i__21075_21346 + (1));
seq__21071_21343 = G__21353;
chunk__21073_21344 = G__21354;
count__21074_21345 = G__21355;
i__21075_21346 = G__21356;
continue;
} else {
var temp__5804__auto___21357__$2 = cljs.core.seq(seq__21071_21343);
if(temp__5804__auto___21357__$2){
var seq__21071_21358__$1 = temp__5804__auto___21357__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21071_21358__$1)){
var c__5568__auto___21359 = cljs.core.chunk_first(seq__21071_21358__$1);
var G__21360 = cljs.core.chunk_rest(seq__21071_21358__$1);
var G__21361 = c__5568__auto___21359;
var G__21362 = cljs.core.count(c__5568__auto___21359);
var G__21363 = (0);
seq__21071_21343 = G__21360;
chunk__21073_21344 = G__21361;
count__21074_21345 = G__21362;
i__21075_21346 = G__21363;
continue;
} else {
var map__21080_21364 = cljs.core.first(seq__21071_21358__$1);
var map__21080_21365__$1 = cljs.core.__destructure_map(map__21080_21364);
var task_21366 = map__21080_21365__$1;
var fn_str_21367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21080_21365__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21080_21365__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21369 = goog.getObjectByName(fn_str_21367,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21368)].join(''));

(fn_obj_21369.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21369.cljs$core$IFn$_invoke$arity$2(path,new_link_21342) : fn_obj_21369.call(null,path,new_link_21342));


var G__21370 = cljs.core.next(seq__21071_21358__$1);
var G__21371 = null;
var G__21372 = (0);
var G__21373 = (0);
seq__21071_21343 = G__21370;
chunk__21073_21344 = G__21371;
count__21074_21345 = G__21372;
i__21075_21346 = G__21373;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21340);
});})(seq__21027_21283,chunk__21031_21284,count__21032_21285,i__21033_21286,seq__20859,chunk__20861,count__20862,i__20863,new_link_21342,path_match_21341,node_21340,seq__21027_21334__$1,temp__5804__auto___21333__$1,path,seq__20859__$1,temp__5804__auto__,map__20858,map__20858__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21341], 0));

goog.dom.insertSiblingAfter(new_link_21342,node_21340);


var G__21374 = cljs.core.next(seq__21027_21334__$1);
var G__21375 = null;
var G__21376 = (0);
var G__21377 = (0);
seq__21027_21283 = G__21374;
chunk__21031_21284 = G__21375;
count__21032_21285 = G__21376;
i__21033_21286 = G__21377;
continue;
} else {
var G__21378 = cljs.core.next(seq__21027_21334__$1);
var G__21379 = null;
var G__21380 = (0);
var G__21381 = (0);
seq__21027_21283 = G__21378;
chunk__21031_21284 = G__21379;
count__21032_21285 = G__21380;
i__21033_21286 = G__21381;
continue;
}
} else {
var G__21382 = cljs.core.next(seq__21027_21334__$1);
var G__21383 = null;
var G__21384 = (0);
var G__21385 = (0);
seq__21027_21283 = G__21382;
chunk__21031_21284 = G__21383;
count__21032_21285 = G__21384;
i__21033_21286 = G__21385;
continue;
}
}
} else {
}
}
break;
}


var G__21386 = cljs.core.next(seq__20859__$1);
var G__21387 = null;
var G__21388 = (0);
var G__21389 = (0);
seq__20859 = G__21386;
chunk__20861 = G__21387;
count__20862 = G__21388;
i__20863 = G__21389;
continue;
} else {
var G__21390 = cljs.core.next(seq__20859__$1);
var G__21391 = null;
var G__21392 = (0);
var G__21393 = (0);
seq__20859 = G__21390;
chunk__20861 = G__21391;
count__20862 = G__21392;
i__20863 = G__21393;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21081){
var map__21082 = p__21081;
var map__21082__$1 = cljs.core.__destructure_map(map__21082);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21082__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21083){
var map__21084 = p__21083;
var map__21084__$1 = cljs.core.__destructure_map(map__21084);
var _ = map__21084__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21084__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21085,done,error){
var map__21086 = p__21085;
var map__21086__$1 = cljs.core.__destructure_map(map__21086);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21086__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21087,done,error){
var map__21088 = p__21087;
var map__21088__$1 = cljs.core.__destructure_map(map__21088);
var msg = map__21088__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21088__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21088__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21088__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21089){
var map__21090 = p__21089;
var map__21090__$1 = cljs.core.__destructure_map(map__21090);
var src = map__21090__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21091 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21091) : done.call(null,G__21091));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21092){
var map__21093 = p__21092;
var map__21093__$1 = cljs.core.__destructure_map(map__21093);
var msg__$1 = map__21093__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21093__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21094){var ex = e21094;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21095){
var map__21096 = p__21095;
var map__21096__$1 = cljs.core.__destructure_map(map__21096);
var env = map__21096__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21096__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21097){
var map__21098 = p__21097;
var map__21098__$1 = cljs.core.__destructure_map(map__21098);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21098__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21098__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21099){
var map__21100 = p__21099;
var map__21100__$1 = cljs.core.__destructure_map(map__21100);
var svc = map__21100__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21100__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
