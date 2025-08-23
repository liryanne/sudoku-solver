goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19086 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19086(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19103 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19103(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17577 = coll;
var G__17578 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17577,G__17578) : shadow.dom.lazy_native_coll_seq.call(null,G__17577,G__17578));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17613 = arguments.length;
switch (G__17613) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17620 = arguments.length;
switch (G__17620) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17624 = arguments.length;
switch (G__17624) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17630 = arguments.length;
switch (G__17630) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17646 = arguments.length;
switch (G__17646) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17649 = arguments.length;
switch (G__17649) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17659){if((e17659 instanceof Object)){
var e = e17659;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17659;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17666 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17667 = null;
var count__17668 = (0);
var i__17669 = (0);
while(true){
if((i__17669 < count__17668)){
var el = chunk__17667.cljs$core$IIndexed$_nth$arity$2(null,i__17669);
var handler_19254__$1 = ((function (seq__17666,chunk__17667,count__17668,i__17669,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17666,chunk__17667,count__17668,i__17669,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19254__$1);


var G__19258 = seq__17666;
var G__19259 = chunk__17667;
var G__19260 = count__17668;
var G__19261 = (i__17669 + (1));
seq__17666 = G__19258;
chunk__17667 = G__19259;
count__17668 = G__19260;
i__17669 = G__19261;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17666);
if(temp__5804__auto__){
var seq__17666__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17666__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17666__$1);
var G__19263 = cljs.core.chunk_rest(seq__17666__$1);
var G__19264 = c__5568__auto__;
var G__19265 = cljs.core.count(c__5568__auto__);
var G__19266 = (0);
seq__17666 = G__19263;
chunk__17667 = G__19264;
count__17668 = G__19265;
i__17669 = G__19266;
continue;
} else {
var el = cljs.core.first(seq__17666__$1);
var handler_19270__$1 = ((function (seq__17666,chunk__17667,count__17668,i__17669,el,seq__17666__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17666,chunk__17667,count__17668,i__17669,el,seq__17666__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19270__$1);


var G__19272 = cljs.core.next(seq__17666__$1);
var G__19273 = null;
var G__19274 = (0);
var G__19275 = (0);
seq__17666 = G__19272;
chunk__17667 = G__19273;
count__17668 = G__19274;
i__17669 = G__19275;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17700 = arguments.length;
switch (G__17700) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17716 = cljs.core.seq(events);
var chunk__17717 = null;
var count__17718 = (0);
var i__17719 = (0);
while(true){
if((i__17719 < count__17718)){
var vec__17740 = chunk__17717.cljs$core$IIndexed$_nth$arity$2(null,i__17719);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17740,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19301 = seq__17716;
var G__19302 = chunk__17717;
var G__19303 = count__17718;
var G__19304 = (i__17719 + (1));
seq__17716 = G__19301;
chunk__17717 = G__19302;
count__17718 = G__19303;
i__17719 = G__19304;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17716);
if(temp__5804__auto__){
var seq__17716__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17716__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17716__$1);
var G__19308 = cljs.core.chunk_rest(seq__17716__$1);
var G__19309 = c__5568__auto__;
var G__19310 = cljs.core.count(c__5568__auto__);
var G__19311 = (0);
seq__17716 = G__19308;
chunk__17717 = G__19309;
count__17718 = G__19310;
i__17719 = G__19311;
continue;
} else {
var vec__17750 = cljs.core.first(seq__17716__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17750,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19316 = cljs.core.next(seq__17716__$1);
var G__19317 = null;
var G__19318 = (0);
var G__19319 = (0);
seq__17716 = G__19316;
chunk__17717 = G__19317;
count__17718 = G__19318;
i__17719 = G__19319;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17759 = cljs.core.seq(styles);
var chunk__17760 = null;
var count__17761 = (0);
var i__17762 = (0);
while(true){
if((i__17762 < count__17761)){
var vec__17778 = chunk__17760.cljs$core$IIndexed$_nth$arity$2(null,i__17762);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17778,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19332 = seq__17759;
var G__19333 = chunk__17760;
var G__19334 = count__17761;
var G__19335 = (i__17762 + (1));
seq__17759 = G__19332;
chunk__17760 = G__19333;
count__17761 = G__19334;
i__17762 = G__19335;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17759);
if(temp__5804__auto__){
var seq__17759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17759__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17759__$1);
var G__19339 = cljs.core.chunk_rest(seq__17759__$1);
var G__19340 = c__5568__auto__;
var G__19341 = cljs.core.count(c__5568__auto__);
var G__19342 = (0);
seq__17759 = G__19339;
chunk__17760 = G__19340;
count__17761 = G__19341;
i__17762 = G__19342;
continue;
} else {
var vec__17785 = cljs.core.first(seq__17759__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17785,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17785,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19353 = cljs.core.next(seq__17759__$1);
var G__19354 = null;
var G__19355 = (0);
var G__19356 = (0);
seq__17759 = G__19353;
chunk__17760 = G__19354;
count__17761 = G__19355;
i__17762 = G__19356;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17803_19358 = key;
var G__17803_19359__$1 = (((G__17803_19358 instanceof cljs.core.Keyword))?G__17803_19358.fqn:null);
switch (G__17803_19359__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19380 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19380,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19380,"aria-");
}
})())){
el.setAttribute(ks_19380,value);
} else {
(el[ks_19380] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17835){
var map__17836 = p__17835;
var map__17836__$1 = cljs.core.__destructure_map(map__17836);
var props = map__17836__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17836__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17837 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17837,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17837,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17837,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17842 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17842,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17842;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17847 = arguments.length;
switch (G__17847) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17867){
var vec__17868 = p__17867;
var seq__17869 = cljs.core.seq(vec__17868);
var first__17870 = cljs.core.first(seq__17869);
var seq__17869__$1 = cljs.core.next(seq__17869);
var nn = first__17870;
var first__17870__$1 = cljs.core.first(seq__17869__$1);
var seq__17869__$2 = cljs.core.next(seq__17869__$1);
var np = first__17870__$1;
var nc = seq__17869__$2;
var node = vec__17868;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17883 = nn;
var G__17884 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17883,G__17884) : create_fn.call(null,G__17883,G__17884));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17885 = nn;
var G__17886 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17885,G__17886) : create_fn.call(null,G__17885,G__17886));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17901 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17901,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17901,(1),null);
var seq__17904_19424 = cljs.core.seq(node_children);
var chunk__17905_19425 = null;
var count__17906_19426 = (0);
var i__17907_19427 = (0);
while(true){
if((i__17907_19427 < count__17906_19426)){
var child_struct_19428 = chunk__17905_19425.cljs$core$IIndexed$_nth$arity$2(null,i__17907_19427);
var children_19433 = shadow.dom.dom_node(child_struct_19428);
if(cljs.core.seq_QMARK_(children_19433)){
var seq__17980_19434 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19433));
var chunk__17982_19435 = null;
var count__17983_19436 = (0);
var i__17984_19437 = (0);
while(true){
if((i__17984_19437 < count__17983_19436)){
var child_19438 = chunk__17982_19435.cljs$core$IIndexed$_nth$arity$2(null,i__17984_19437);
if(cljs.core.truth_(child_19438)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19438);


var G__19440 = seq__17980_19434;
var G__19441 = chunk__17982_19435;
var G__19442 = count__17983_19436;
var G__19443 = (i__17984_19437 + (1));
seq__17980_19434 = G__19440;
chunk__17982_19435 = G__19441;
count__17983_19436 = G__19442;
i__17984_19437 = G__19443;
continue;
} else {
var G__19444 = seq__17980_19434;
var G__19445 = chunk__17982_19435;
var G__19446 = count__17983_19436;
var G__19447 = (i__17984_19437 + (1));
seq__17980_19434 = G__19444;
chunk__17982_19435 = G__19445;
count__17983_19436 = G__19446;
i__17984_19437 = G__19447;
continue;
}
} else {
var temp__5804__auto___19449 = cljs.core.seq(seq__17980_19434);
if(temp__5804__auto___19449){
var seq__17980_19451__$1 = temp__5804__auto___19449;
if(cljs.core.chunked_seq_QMARK_(seq__17980_19451__$1)){
var c__5568__auto___19454 = cljs.core.chunk_first(seq__17980_19451__$1);
var G__19456 = cljs.core.chunk_rest(seq__17980_19451__$1);
var G__19457 = c__5568__auto___19454;
var G__19458 = cljs.core.count(c__5568__auto___19454);
var G__19459 = (0);
seq__17980_19434 = G__19456;
chunk__17982_19435 = G__19457;
count__17983_19436 = G__19458;
i__17984_19437 = G__19459;
continue;
} else {
var child_19460 = cljs.core.first(seq__17980_19451__$1);
if(cljs.core.truth_(child_19460)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19460);


var G__19461 = cljs.core.next(seq__17980_19451__$1);
var G__19462 = null;
var G__19463 = (0);
var G__19464 = (0);
seq__17980_19434 = G__19461;
chunk__17982_19435 = G__19462;
count__17983_19436 = G__19463;
i__17984_19437 = G__19464;
continue;
} else {
var G__19466 = cljs.core.next(seq__17980_19451__$1);
var G__19467 = null;
var G__19468 = (0);
var G__19469 = (0);
seq__17980_19434 = G__19466;
chunk__17982_19435 = G__19467;
count__17983_19436 = G__19468;
i__17984_19437 = G__19469;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19433);
}


var G__19471 = seq__17904_19424;
var G__19472 = chunk__17905_19425;
var G__19473 = count__17906_19426;
var G__19474 = (i__17907_19427 + (1));
seq__17904_19424 = G__19471;
chunk__17905_19425 = G__19472;
count__17906_19426 = G__19473;
i__17907_19427 = G__19474;
continue;
} else {
var temp__5804__auto___19476 = cljs.core.seq(seq__17904_19424);
if(temp__5804__auto___19476){
var seq__17904_19478__$1 = temp__5804__auto___19476;
if(cljs.core.chunked_seq_QMARK_(seq__17904_19478__$1)){
var c__5568__auto___19479 = cljs.core.chunk_first(seq__17904_19478__$1);
var G__19480 = cljs.core.chunk_rest(seq__17904_19478__$1);
var G__19481 = c__5568__auto___19479;
var G__19482 = cljs.core.count(c__5568__auto___19479);
var G__19483 = (0);
seq__17904_19424 = G__19480;
chunk__17905_19425 = G__19481;
count__17906_19426 = G__19482;
i__17907_19427 = G__19483;
continue;
} else {
var child_struct_19484 = cljs.core.first(seq__17904_19478__$1);
var children_19485 = shadow.dom.dom_node(child_struct_19484);
if(cljs.core.seq_QMARK_(children_19485)){
var seq__18014_19488 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19485));
var chunk__18016_19489 = null;
var count__18017_19490 = (0);
var i__18018_19491 = (0);
while(true){
if((i__18018_19491 < count__18017_19490)){
var child_19493 = chunk__18016_19489.cljs$core$IIndexed$_nth$arity$2(null,i__18018_19491);
if(cljs.core.truth_(child_19493)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19493);


var G__19495 = seq__18014_19488;
var G__19496 = chunk__18016_19489;
var G__19497 = count__18017_19490;
var G__19498 = (i__18018_19491 + (1));
seq__18014_19488 = G__19495;
chunk__18016_19489 = G__19496;
count__18017_19490 = G__19497;
i__18018_19491 = G__19498;
continue;
} else {
var G__19504 = seq__18014_19488;
var G__19505 = chunk__18016_19489;
var G__19506 = count__18017_19490;
var G__19507 = (i__18018_19491 + (1));
seq__18014_19488 = G__19504;
chunk__18016_19489 = G__19505;
count__18017_19490 = G__19506;
i__18018_19491 = G__19507;
continue;
}
} else {
var temp__5804__auto___19508__$1 = cljs.core.seq(seq__18014_19488);
if(temp__5804__auto___19508__$1){
var seq__18014_19510__$1 = temp__5804__auto___19508__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18014_19510__$1)){
var c__5568__auto___19513 = cljs.core.chunk_first(seq__18014_19510__$1);
var G__19514 = cljs.core.chunk_rest(seq__18014_19510__$1);
var G__19515 = c__5568__auto___19513;
var G__19516 = cljs.core.count(c__5568__auto___19513);
var G__19517 = (0);
seq__18014_19488 = G__19514;
chunk__18016_19489 = G__19515;
count__18017_19490 = G__19516;
i__18018_19491 = G__19517;
continue;
} else {
var child_19518 = cljs.core.first(seq__18014_19510__$1);
if(cljs.core.truth_(child_19518)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19518);


var G__19519 = cljs.core.next(seq__18014_19510__$1);
var G__19520 = null;
var G__19521 = (0);
var G__19522 = (0);
seq__18014_19488 = G__19519;
chunk__18016_19489 = G__19520;
count__18017_19490 = G__19521;
i__18018_19491 = G__19522;
continue;
} else {
var G__19523 = cljs.core.next(seq__18014_19510__$1);
var G__19524 = null;
var G__19525 = (0);
var G__19526 = (0);
seq__18014_19488 = G__19523;
chunk__18016_19489 = G__19524;
count__18017_19490 = G__19525;
i__18018_19491 = G__19526;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19485);
}


var G__19531 = cljs.core.next(seq__17904_19478__$1);
var G__19532 = null;
var G__19533 = (0);
var G__19534 = (0);
seq__17904_19424 = G__19531;
chunk__17905_19425 = G__19532;
count__17906_19426 = G__19533;
i__17907_19427 = G__19534;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18078 = cljs.core.seq(node);
var chunk__18079 = null;
var count__18080 = (0);
var i__18081 = (0);
while(true){
if((i__18081 < count__18080)){
var n = chunk__18079.cljs$core$IIndexed$_nth$arity$2(null,i__18081);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19557 = seq__18078;
var G__19558 = chunk__18079;
var G__19559 = count__18080;
var G__19560 = (i__18081 + (1));
seq__18078 = G__19557;
chunk__18079 = G__19558;
count__18080 = G__19559;
i__18081 = G__19560;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18078);
if(temp__5804__auto__){
var seq__18078__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18078__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18078__$1);
var G__19561 = cljs.core.chunk_rest(seq__18078__$1);
var G__19562 = c__5568__auto__;
var G__19564 = cljs.core.count(c__5568__auto__);
var G__19565 = (0);
seq__18078 = G__19561;
chunk__18079 = G__19562;
count__18080 = G__19564;
i__18081 = G__19565;
continue;
} else {
var n = cljs.core.first(seq__18078__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19568 = cljs.core.next(seq__18078__$1);
var G__19569 = null;
var G__19570 = (0);
var G__19571 = (0);
seq__18078 = G__19568;
chunk__18079 = G__19569;
count__18080 = G__19570;
i__18081 = G__19571;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18129 = arguments.length;
switch (G__18129) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18139 = arguments.length;
switch (G__18139) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18149 = arguments.length;
switch (G__18149) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19600 = arguments.length;
var i__5770__auto___19601 = (0);
while(true){
if((i__5770__auto___19601 < len__5769__auto___19600)){
args__5775__auto__.push((arguments[i__5770__auto___19601]));

var G__19602 = (i__5770__auto___19601 + (1));
i__5770__auto___19601 = G__19602;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18180_19603 = cljs.core.seq(nodes);
var chunk__18181_19604 = null;
var count__18182_19605 = (0);
var i__18183_19606 = (0);
while(true){
if((i__18183_19606 < count__18182_19605)){
var node_19607 = chunk__18181_19604.cljs$core$IIndexed$_nth$arity$2(null,i__18183_19606);
fragment.appendChild(shadow.dom._to_dom(node_19607));


var G__19609 = seq__18180_19603;
var G__19610 = chunk__18181_19604;
var G__19611 = count__18182_19605;
var G__19612 = (i__18183_19606 + (1));
seq__18180_19603 = G__19609;
chunk__18181_19604 = G__19610;
count__18182_19605 = G__19611;
i__18183_19606 = G__19612;
continue;
} else {
var temp__5804__auto___19616 = cljs.core.seq(seq__18180_19603);
if(temp__5804__auto___19616){
var seq__18180_19617__$1 = temp__5804__auto___19616;
if(cljs.core.chunked_seq_QMARK_(seq__18180_19617__$1)){
var c__5568__auto___19618 = cljs.core.chunk_first(seq__18180_19617__$1);
var G__19619 = cljs.core.chunk_rest(seq__18180_19617__$1);
var G__19620 = c__5568__auto___19618;
var G__19621 = cljs.core.count(c__5568__auto___19618);
var G__19622 = (0);
seq__18180_19603 = G__19619;
chunk__18181_19604 = G__19620;
count__18182_19605 = G__19621;
i__18183_19606 = G__19622;
continue;
} else {
var node_19624 = cljs.core.first(seq__18180_19617__$1);
fragment.appendChild(shadow.dom._to_dom(node_19624));


var G__19625 = cljs.core.next(seq__18180_19617__$1);
var G__19626 = null;
var G__19627 = (0);
var G__19628 = (0);
seq__18180_19603 = G__19625;
chunk__18181_19604 = G__19626;
count__18182_19605 = G__19627;
i__18183_19606 = G__19628;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18168){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18168));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18211_19632 = cljs.core.seq(scripts);
var chunk__18212_19633 = null;
var count__18213_19634 = (0);
var i__18214_19635 = (0);
while(true){
if((i__18214_19635 < count__18213_19634)){
var vec__18234_19637 = chunk__18212_19633.cljs$core$IIndexed$_nth$arity$2(null,i__18214_19635);
var script_tag_19638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18234_19637,(0),null);
var script_body_19639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18234_19637,(1),null);
eval(script_body_19639);


var G__19641 = seq__18211_19632;
var G__19642 = chunk__18212_19633;
var G__19643 = count__18213_19634;
var G__19644 = (i__18214_19635 + (1));
seq__18211_19632 = G__19641;
chunk__18212_19633 = G__19642;
count__18213_19634 = G__19643;
i__18214_19635 = G__19644;
continue;
} else {
var temp__5804__auto___19646 = cljs.core.seq(seq__18211_19632);
if(temp__5804__auto___19646){
var seq__18211_19647__$1 = temp__5804__auto___19646;
if(cljs.core.chunked_seq_QMARK_(seq__18211_19647__$1)){
var c__5568__auto___19648 = cljs.core.chunk_first(seq__18211_19647__$1);
var G__19649 = cljs.core.chunk_rest(seq__18211_19647__$1);
var G__19650 = c__5568__auto___19648;
var G__19651 = cljs.core.count(c__5568__auto___19648);
var G__19652 = (0);
seq__18211_19632 = G__19649;
chunk__18212_19633 = G__19650;
count__18213_19634 = G__19651;
i__18214_19635 = G__19652;
continue;
} else {
var vec__18243_19654 = cljs.core.first(seq__18211_19647__$1);
var script_tag_19655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18243_19654,(0),null);
var script_body_19656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18243_19654,(1),null);
eval(script_body_19656);


var G__19657 = cljs.core.next(seq__18211_19647__$1);
var G__19658 = null;
var G__19659 = (0);
var G__19660 = (0);
seq__18211_19632 = G__19657;
chunk__18212_19633 = G__19658;
count__18213_19634 = G__19659;
i__18214_19635 = G__19660;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18248){
var vec__18250 = p__18248;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18250,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18250,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18284 = arguments.length;
switch (G__18284) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18318 = cljs.core.seq(style_keys);
var chunk__18319 = null;
var count__18320 = (0);
var i__18321 = (0);
while(true){
if((i__18321 < count__18320)){
var it = chunk__18319.cljs$core$IIndexed$_nth$arity$2(null,i__18321);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19683 = seq__18318;
var G__19684 = chunk__18319;
var G__19685 = count__18320;
var G__19686 = (i__18321 + (1));
seq__18318 = G__19683;
chunk__18319 = G__19684;
count__18320 = G__19685;
i__18321 = G__19686;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18318);
if(temp__5804__auto__){
var seq__18318__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18318__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18318__$1);
var G__19691 = cljs.core.chunk_rest(seq__18318__$1);
var G__19692 = c__5568__auto__;
var G__19693 = cljs.core.count(c__5568__auto__);
var G__19694 = (0);
seq__18318 = G__19691;
chunk__18319 = G__19692;
count__18320 = G__19693;
i__18321 = G__19694;
continue;
} else {
var it = cljs.core.first(seq__18318__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19698 = cljs.core.next(seq__18318__$1);
var G__19699 = null;
var G__19700 = (0);
var G__19701 = (0);
seq__18318 = G__19698;
chunk__18319 = G__19699;
count__18320 = G__19700;
i__18321 = G__19701;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18336,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18374 = k18336;
var G__18374__$1 = (((G__18374 instanceof cljs.core.Keyword))?G__18374.fqn:null);
switch (G__18374__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18336,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18376){
var vec__18378 = p__18376;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18378,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18378,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18335){
var self__ = this;
var G__18335__$1 = this;
return (new cljs.core.RecordIter((0),G__18335__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18337,other18338){
var self__ = this;
var this18337__$1 = this;
return (((!((other18338 == null)))) && ((((this18337__$1.constructor === other18338.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18337__$1.x,other18338.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18337__$1.y,other18338.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18337__$1.__extmap,other18338.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18336){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18397 = k18336;
var G__18397__$1 = (((G__18397 instanceof cljs.core.Keyword))?G__18397.fqn:null);
switch (G__18397__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18336);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18335){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18401 = cljs.core.keyword_identical_QMARK_;
var expr__18402 = k__5352__auto__;
if(cljs.core.truth_((pred__18401.cljs$core$IFn$_invoke$arity$2 ? pred__18401.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18402) : pred__18401.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18402)))){
return (new shadow.dom.Coordinate(G__18335,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18401.cljs$core$IFn$_invoke$arity$2 ? pred__18401.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18402) : pred__18401.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18402)))){
return (new shadow.dom.Coordinate(self__.x,G__18335,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18335),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18335){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18335,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18348){
var extmap__5385__auto__ = (function (){var G__18415 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18348,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18348)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18415);
} else {
return G__18415;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18348),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18348),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18427,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18436 = k18427;
var G__18436__$1 = (((G__18436 instanceof cljs.core.Keyword))?G__18436.fqn:null);
switch (G__18436__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18427,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18441){
var vec__18442 = p__18441;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18442,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18442,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18426){
var self__ = this;
var G__18426__$1 = this;
return (new cljs.core.RecordIter((0),G__18426__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18428,other18429){
var self__ = this;
var this18428__$1 = this;
return (((!((other18429 == null)))) && ((((this18428__$1.constructor === other18429.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18428__$1.w,other18429.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18428__$1.h,other18429.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18428__$1.__extmap,other18429.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18427){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18471 = k18427;
var G__18471__$1 = (((G__18471 instanceof cljs.core.Keyword))?G__18471.fqn:null);
switch (G__18471__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18427);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18426){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18473 = cljs.core.keyword_identical_QMARK_;
var expr__18474 = k__5352__auto__;
if(cljs.core.truth_((pred__18473.cljs$core$IFn$_invoke$arity$2 ? pred__18473.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18474) : pred__18473.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18474)))){
return (new shadow.dom.Size(G__18426,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18473.cljs$core$IFn$_invoke$arity$2 ? pred__18473.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18474) : pred__18473.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18474)))){
return (new shadow.dom.Size(self__.w,G__18426,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18426),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18426){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18426,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18431){
var extmap__5385__auto__ = (function (){var G__18479 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18431,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18431)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18479);
} else {
return G__18479;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18431),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18431),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19850 = (i + (1));
var G__19851 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19850;
ret = G__19851;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18494){
var vec__18495 = p__18494;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18495,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18495,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18499 = arguments.length;
switch (G__18499) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19860 = ps;
var G__19861 = (i + (1));
el__$1 = G__19860;
i = G__19861;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18550 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18550,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18550,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18550,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18555_19871 = cljs.core.seq(props);
var chunk__18556_19872 = null;
var count__18557_19873 = (0);
var i__18558_19874 = (0);
while(true){
if((i__18558_19874 < count__18557_19873)){
var vec__18579_19879 = chunk__18556_19872.cljs$core$IIndexed$_nth$arity$2(null,i__18558_19874);
var k_19880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18579_19879,(0),null);
var v_19881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18579_19879,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19880);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19880),v_19881);


var G__19887 = seq__18555_19871;
var G__19888 = chunk__18556_19872;
var G__19889 = count__18557_19873;
var G__19890 = (i__18558_19874 + (1));
seq__18555_19871 = G__19887;
chunk__18556_19872 = G__19888;
count__18557_19873 = G__19889;
i__18558_19874 = G__19890;
continue;
} else {
var temp__5804__auto___19891 = cljs.core.seq(seq__18555_19871);
if(temp__5804__auto___19891){
var seq__18555_19892__$1 = temp__5804__auto___19891;
if(cljs.core.chunked_seq_QMARK_(seq__18555_19892__$1)){
var c__5568__auto___19894 = cljs.core.chunk_first(seq__18555_19892__$1);
var G__19895 = cljs.core.chunk_rest(seq__18555_19892__$1);
var G__19896 = c__5568__auto___19894;
var G__19897 = cljs.core.count(c__5568__auto___19894);
var G__19898 = (0);
seq__18555_19871 = G__19895;
chunk__18556_19872 = G__19896;
count__18557_19873 = G__19897;
i__18558_19874 = G__19898;
continue;
} else {
var vec__18588_19899 = cljs.core.first(seq__18555_19892__$1);
var k_19900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18588_19899,(0),null);
var v_19901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18588_19899,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19900);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19900),v_19901);


var G__19908 = cljs.core.next(seq__18555_19892__$1);
var G__19909 = null;
var G__19910 = (0);
var G__19911 = (0);
seq__18555_19871 = G__19908;
chunk__18556_19872 = G__19909;
count__18557_19873 = G__19910;
i__18558_19874 = G__19911;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18603 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18603,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18603,(1),null);
var seq__18607_19918 = cljs.core.seq(node_children);
var chunk__18609_19919 = null;
var count__18610_19920 = (0);
var i__18611_19921 = (0);
while(true){
if((i__18611_19921 < count__18610_19920)){
var child_struct_19925 = chunk__18609_19919.cljs$core$IIndexed$_nth$arity$2(null,i__18611_19921);
if((!((child_struct_19925 == null)))){
if(typeof child_struct_19925 === 'string'){
var text_19928 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19928),child_struct_19925].join(''));
} else {
var children_19931 = shadow.dom.svg_node(child_struct_19925);
if(cljs.core.seq_QMARK_(children_19931)){
var seq__18656_19934 = cljs.core.seq(children_19931);
var chunk__18659_19935 = null;
var count__18660_19936 = (0);
var i__18661_19937 = (0);
while(true){
if((i__18661_19937 < count__18660_19936)){
var child_19940 = chunk__18659_19935.cljs$core$IIndexed$_nth$arity$2(null,i__18661_19937);
if(cljs.core.truth_(child_19940)){
node.appendChild(child_19940);


var G__19941 = seq__18656_19934;
var G__19942 = chunk__18659_19935;
var G__19943 = count__18660_19936;
var G__19944 = (i__18661_19937 + (1));
seq__18656_19934 = G__19941;
chunk__18659_19935 = G__19942;
count__18660_19936 = G__19943;
i__18661_19937 = G__19944;
continue;
} else {
var G__19950 = seq__18656_19934;
var G__19951 = chunk__18659_19935;
var G__19952 = count__18660_19936;
var G__19953 = (i__18661_19937 + (1));
seq__18656_19934 = G__19950;
chunk__18659_19935 = G__19951;
count__18660_19936 = G__19952;
i__18661_19937 = G__19953;
continue;
}
} else {
var temp__5804__auto___19954 = cljs.core.seq(seq__18656_19934);
if(temp__5804__auto___19954){
var seq__18656_19956__$1 = temp__5804__auto___19954;
if(cljs.core.chunked_seq_QMARK_(seq__18656_19956__$1)){
var c__5568__auto___19957 = cljs.core.chunk_first(seq__18656_19956__$1);
var G__19958 = cljs.core.chunk_rest(seq__18656_19956__$1);
var G__19959 = c__5568__auto___19957;
var G__19960 = cljs.core.count(c__5568__auto___19957);
var G__19961 = (0);
seq__18656_19934 = G__19958;
chunk__18659_19935 = G__19959;
count__18660_19936 = G__19960;
i__18661_19937 = G__19961;
continue;
} else {
var child_19962 = cljs.core.first(seq__18656_19956__$1);
if(cljs.core.truth_(child_19962)){
node.appendChild(child_19962);


var G__19964 = cljs.core.next(seq__18656_19956__$1);
var G__19965 = null;
var G__19966 = (0);
var G__19967 = (0);
seq__18656_19934 = G__19964;
chunk__18659_19935 = G__19965;
count__18660_19936 = G__19966;
i__18661_19937 = G__19967;
continue;
} else {
var G__19970 = cljs.core.next(seq__18656_19956__$1);
var G__19971 = null;
var G__19972 = (0);
var G__19973 = (0);
seq__18656_19934 = G__19970;
chunk__18659_19935 = G__19971;
count__18660_19936 = G__19972;
i__18661_19937 = G__19973;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19931);
}
}


var G__19976 = seq__18607_19918;
var G__19977 = chunk__18609_19919;
var G__19978 = count__18610_19920;
var G__19979 = (i__18611_19921 + (1));
seq__18607_19918 = G__19976;
chunk__18609_19919 = G__19977;
count__18610_19920 = G__19978;
i__18611_19921 = G__19979;
continue;
} else {
var G__19981 = seq__18607_19918;
var G__19982 = chunk__18609_19919;
var G__19983 = count__18610_19920;
var G__19984 = (i__18611_19921 + (1));
seq__18607_19918 = G__19981;
chunk__18609_19919 = G__19982;
count__18610_19920 = G__19983;
i__18611_19921 = G__19984;
continue;
}
} else {
var temp__5804__auto___19985 = cljs.core.seq(seq__18607_19918);
if(temp__5804__auto___19985){
var seq__18607_19986__$1 = temp__5804__auto___19985;
if(cljs.core.chunked_seq_QMARK_(seq__18607_19986__$1)){
var c__5568__auto___19987 = cljs.core.chunk_first(seq__18607_19986__$1);
var G__19988 = cljs.core.chunk_rest(seq__18607_19986__$1);
var G__19989 = c__5568__auto___19987;
var G__19990 = cljs.core.count(c__5568__auto___19987);
var G__19991 = (0);
seq__18607_19918 = G__19988;
chunk__18609_19919 = G__19989;
count__18610_19920 = G__19990;
i__18611_19921 = G__19991;
continue;
} else {
var child_struct_19995 = cljs.core.first(seq__18607_19986__$1);
if((!((child_struct_19995 == null)))){
if(typeof child_struct_19995 === 'string'){
var text_19996 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19996),child_struct_19995].join(''));
} else {
var children_19998 = shadow.dom.svg_node(child_struct_19995);
if(cljs.core.seq_QMARK_(children_19998)){
var seq__18711_20000 = cljs.core.seq(children_19998);
var chunk__18713_20002 = null;
var count__18714_20003 = (0);
var i__18715_20004 = (0);
while(true){
if((i__18715_20004 < count__18714_20003)){
var child_20005 = chunk__18713_20002.cljs$core$IIndexed$_nth$arity$2(null,i__18715_20004);
if(cljs.core.truth_(child_20005)){
node.appendChild(child_20005);


var G__20006 = seq__18711_20000;
var G__20007 = chunk__18713_20002;
var G__20008 = count__18714_20003;
var G__20009 = (i__18715_20004 + (1));
seq__18711_20000 = G__20006;
chunk__18713_20002 = G__20007;
count__18714_20003 = G__20008;
i__18715_20004 = G__20009;
continue;
} else {
var G__20010 = seq__18711_20000;
var G__20011 = chunk__18713_20002;
var G__20012 = count__18714_20003;
var G__20013 = (i__18715_20004 + (1));
seq__18711_20000 = G__20010;
chunk__18713_20002 = G__20011;
count__18714_20003 = G__20012;
i__18715_20004 = G__20013;
continue;
}
} else {
var temp__5804__auto___20014__$1 = cljs.core.seq(seq__18711_20000);
if(temp__5804__auto___20014__$1){
var seq__18711_20016__$1 = temp__5804__auto___20014__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18711_20016__$1)){
var c__5568__auto___20020 = cljs.core.chunk_first(seq__18711_20016__$1);
var G__20021 = cljs.core.chunk_rest(seq__18711_20016__$1);
var G__20022 = c__5568__auto___20020;
var G__20023 = cljs.core.count(c__5568__auto___20020);
var G__20024 = (0);
seq__18711_20000 = G__20021;
chunk__18713_20002 = G__20022;
count__18714_20003 = G__20023;
i__18715_20004 = G__20024;
continue;
} else {
var child_20025 = cljs.core.first(seq__18711_20016__$1);
if(cljs.core.truth_(child_20025)){
node.appendChild(child_20025);


var G__20026 = cljs.core.next(seq__18711_20016__$1);
var G__20027 = null;
var G__20028 = (0);
var G__20029 = (0);
seq__18711_20000 = G__20026;
chunk__18713_20002 = G__20027;
count__18714_20003 = G__20028;
i__18715_20004 = G__20029;
continue;
} else {
var G__20031 = cljs.core.next(seq__18711_20016__$1);
var G__20032 = null;
var G__20033 = (0);
var G__20034 = (0);
seq__18711_20000 = G__20031;
chunk__18713_20002 = G__20032;
count__18714_20003 = G__20033;
i__18715_20004 = G__20034;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19998);
}
}


var G__20039 = cljs.core.next(seq__18607_19986__$1);
var G__20040 = null;
var G__20041 = (0);
var G__20042 = (0);
seq__18607_19918 = G__20039;
chunk__18609_19919 = G__20040;
count__18610_19920 = G__20041;
i__18611_19921 = G__20042;
continue;
} else {
var G__20045 = cljs.core.next(seq__18607_19986__$1);
var G__20046 = null;
var G__20047 = (0);
var G__20048 = (0);
seq__18607_19918 = G__20045;
chunk__18609_19919 = G__20046;
count__18610_19920 = G__20047;
i__18611_19921 = G__20048;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20061 = arguments.length;
var i__5770__auto___20063 = (0);
while(true){
if((i__5770__auto___20063 < len__5769__auto___20061)){
args__5775__auto__.push((arguments[i__5770__auto___20063]));

var G__20064 = (i__5770__auto___20063 + (1));
i__5770__auto___20063 = G__20064;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18819){
var G__18820 = cljs.core.first(seq18819);
var seq18819__$1 = cljs.core.next(seq18819);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18820,seq18819__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18872 = arguments.length;
switch (G__18872) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13873__auto___20082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_18921){
var state_val_18922 = (state_18921[(1)]);
if((state_val_18922 === (1))){
var state_18921__$1 = state_18921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18921__$1,(2),once_or_cleanup);
} else {
if((state_val_18922 === (2))){
var inst_18915 = (state_18921[(2)]);
var inst_18919 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18921__$1 = (function (){var statearr_18938 = state_18921;
(statearr_18938[(7)] = inst_18915);

return statearr_18938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18921__$1,inst_18919);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13563__auto__ = null;
var shadow$dom$state_machine__13563__auto____0 = (function (){
var statearr_18948 = [null,null,null,null,null,null,null,null];
(statearr_18948[(0)] = shadow$dom$state_machine__13563__auto__);

(statearr_18948[(1)] = (1));

return statearr_18948;
});
var shadow$dom$state_machine__13563__auto____1 = (function (state_18921){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_18921);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e18958){var ex__13566__auto__ = e18958;
var statearr_18959_20085 = state_18921;
(statearr_18959_20085[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_18921[(4)]))){
var statearr_18960_20087 = state_18921;
(statearr_18960_20087[(1)] = cljs.core.first((state_18921[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20088 = state_18921;
state_18921 = G__20088;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
shadow$dom$state_machine__13563__auto__ = function(state_18921){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13563__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13563__auto____1.call(this,state_18921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13563__auto____0;
shadow$dom$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13563__auto____1;
return shadow$dom$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_18966 = f__13874__auto__();
(statearr_18966[(6)] = c__13873__auto___20082);

return statearr_18966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
