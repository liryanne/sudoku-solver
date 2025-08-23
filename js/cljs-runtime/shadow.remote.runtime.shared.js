goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16522,res){
var map__16524 = p__16522;
var map__16524__$1 = cljs.core.__destructure_map(map__16524);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16524__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16524__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16528 = res;
var G__16528__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16528,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16528);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16528__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16528__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16537 = arguments.length;
switch (G__16537) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16545,msg,handlers,timeout_after_ms){
var map__16546 = p__16545;
var map__16546__$1 = cljs.core.__destructure_map(map__16546);
var runtime = map__16546__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16546__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16850 = arguments.length;
var i__5770__auto___16852 = (0);
while(true){
if((i__5770__auto___16852 < len__5769__auto___16850)){
args__5775__auto__.push((arguments[i__5770__auto___16852]));

var G__16863 = (i__5770__auto___16852 + (1));
i__5770__auto___16852 = G__16863;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16560,ev,args){
var map__16561 = p__16560;
var map__16561__$1 = cljs.core.__destructure_map(map__16561);
var runtime = map__16561__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16562 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16565 = null;
var count__16566 = (0);
var i__16567 = (0);
while(true){
if((i__16567 < count__16566)){
var ext = chunk__16565.cljs$core$IIndexed$_nth$arity$2(null,i__16567);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16874 = seq__16562;
var G__16875 = chunk__16565;
var G__16876 = count__16566;
var G__16877 = (i__16567 + (1));
seq__16562 = G__16874;
chunk__16565 = G__16875;
count__16566 = G__16876;
i__16567 = G__16877;
continue;
} else {
var G__16880 = seq__16562;
var G__16881 = chunk__16565;
var G__16882 = count__16566;
var G__16883 = (i__16567 + (1));
seq__16562 = G__16880;
chunk__16565 = G__16881;
count__16566 = G__16882;
i__16567 = G__16883;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16562);
if(temp__5804__auto__){
var seq__16562__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16562__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16562__$1);
var G__16887 = cljs.core.chunk_rest(seq__16562__$1);
var G__16888 = c__5568__auto__;
var G__16889 = cljs.core.count(c__5568__auto__);
var G__16890 = (0);
seq__16562 = G__16887;
chunk__16565 = G__16888;
count__16566 = G__16889;
i__16567 = G__16890;
continue;
} else {
var ext = cljs.core.first(seq__16562__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16899 = cljs.core.next(seq__16562__$1);
var G__16900 = null;
var G__16901 = (0);
var G__16902 = (0);
seq__16562 = G__16899;
chunk__16565 = G__16900;
count__16566 = G__16901;
i__16567 = G__16902;
continue;
} else {
var G__16905 = cljs.core.next(seq__16562__$1);
var G__16907 = null;
var G__16908 = (0);
var G__16909 = (0);
seq__16562 = G__16905;
chunk__16565 = G__16907;
count__16566 = G__16908;
i__16567 = G__16909;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16551){
var G__16552 = cljs.core.first(seq16551);
var seq16551__$1 = cljs.core.next(seq16551);
var G__16553 = cljs.core.first(seq16551__$1);
var seq16551__$2 = cljs.core.next(seq16551__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16552,G__16553,seq16551__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16648,p__16649){
var map__16651 = p__16648;
var map__16651__$1 = cljs.core.__destructure_map(map__16651);
var runtime = map__16651__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16651__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16652 = p__16649;
var map__16652__$1 = cljs.core.__destructure_map(map__16652);
var msg = map__16652__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16652__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__16658 = cljs.core.deref(state_ref);
var map__16658__$1 = cljs.core.__destructure_map(map__16658);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16658__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16658__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16668){
var map__16670 = p__16668;
var map__16670__$1 = cljs.core.__destructure_map(map__16670);
var runtime = map__16670__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16670__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16682,msg){
var map__16685 = p__16682;
var map__16685__$1 = cljs.core.__destructure_map(map__16685);
var runtime = map__16685__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16685__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16705,key,p__16706){
var map__16708 = p__16705;
var map__16708__$1 = cljs.core.__destructure_map(map__16708);
var state = map__16708__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16708__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16709 = p__16706;
var map__16709__$1 = cljs.core.__destructure_map(map__16709);
var spec = map__16709__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16709__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16720,key,spec){
var map__16722 = p__16720;
var map__16722__$1 = cljs.core.__destructure_map(map__16722);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16722__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16724_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16724_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16726_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16726_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16727_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16727_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16728_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16728_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16729_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16729_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16738,key){
var map__16739 = p__16738;
var map__16739__$1 = cljs.core.__destructure_map(map__16739);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16739__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16750,msg){
var map__16751 = p__16750;
var map__16751__$1 = cljs.core.__destructure_map(map__16751);
var runtime = map__16751__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16751__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16768,p__16769){
var map__16774 = p__16768;
var map__16774__$1 = cljs.core.__destructure_map(map__16774);
var runtime = map__16774__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16774__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16775 = p__16769;
var map__16775__$1 = cljs.core.__destructure_map(map__16775);
var msg = map__16775__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__16784 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16786 = null;
var count__16787 = (0);
var i__16788 = (0);
while(true){
if((i__16788 < count__16787)){
var map__16807 = chunk__16786.cljs$core$IIndexed$_nth$arity$2(null,i__16788);
var map__16807__$1 = cljs.core.__destructure_map(map__16807);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16807__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16967 = seq__16784;
var G__16968 = chunk__16786;
var G__16969 = count__16787;
var G__16970 = (i__16788 + (1));
seq__16784 = G__16967;
chunk__16786 = G__16968;
count__16787 = G__16969;
i__16788 = G__16970;
continue;
} else {
var G__16971 = seq__16784;
var G__16972 = chunk__16786;
var G__16973 = count__16787;
var G__16974 = (i__16788 + (1));
seq__16784 = G__16971;
chunk__16786 = G__16972;
count__16787 = G__16973;
i__16788 = G__16974;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16784);
if(temp__5804__auto__){
var seq__16784__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16784__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16784__$1);
var G__16990 = cljs.core.chunk_rest(seq__16784__$1);
var G__16991 = c__5568__auto__;
var G__16992 = cljs.core.count(c__5568__auto__);
var G__16993 = (0);
seq__16784 = G__16990;
chunk__16786 = G__16991;
count__16787 = G__16992;
i__16788 = G__16993;
continue;
} else {
var map__16813 = cljs.core.first(seq__16784__$1);
var map__16813__$1 = cljs.core.__destructure_map(map__16813);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17009 = cljs.core.next(seq__16784__$1);
var G__17010 = null;
var G__17011 = (0);
var G__17012 = (0);
seq__16784 = G__17009;
chunk__16786 = G__17010;
count__16787 = G__17011;
i__16788 = G__17012;
continue;
} else {
var G__17014 = cljs.core.next(seq__16784__$1);
var G__17015 = null;
var G__17016 = (0);
var G__17017 = (0);
seq__16784 = G__17014;
chunk__16786 = G__17015;
count__16787 = G__17016;
i__16788 = G__17017;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
