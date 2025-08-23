goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13973 = arguments.length;
switch (G__13973) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13974 = (function (f,blockable,meta13975){
this.f = f;
this.blockable = blockable;
this.meta13975 = meta13975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13976,meta13975__$1){
var self__ = this;
var _13976__$1 = this;
return (new cljs.core.async.t_cljs$core$async13974(self__.f,self__.blockable,meta13975__$1));
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13976){
var self__ = this;
var _13976__$1 = this;
return self__.meta13975;
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13975","meta13975",-1413576626,null)], null);
}));

(cljs.core.async.t_cljs$core$async13974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13974");

(cljs.core.async.t_cljs$core$async13974.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13974.
 */
cljs.core.async.__GT_t_cljs$core$async13974 = (function cljs$core$async$__GT_t_cljs$core$async13974(f__$1,blockable__$1,meta13975){
return (new cljs.core.async.t_cljs$core$async13974(f__$1,blockable__$1,meta13975));
});

}

return (new cljs.core.async.t_cljs$core$async13974(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14000 = arguments.length;
switch (G__14000) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14009 = arguments.length;
switch (G__14009) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14020 = arguments.length;
switch (G__14020) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17595 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17595) : fn1.call(null,val_17595));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17595) : fn1.call(null,val_17595));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14036 = arguments.length;
switch (G__14036) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17600 = n;
var x_17601 = (0);
while(true){
if((x_17601 < n__5636__auto___17600)){
(a[x_17601] = x_17601);

var G__17602 = (x_17601 + (1));
x_17601 = G__17602;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14093 = (function (flag,meta14094){
this.flag = flag;
this.meta14094 = meta14094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14095,meta14094__$1){
var self__ = this;
var _14095__$1 = this;
return (new cljs.core.async.t_cljs$core$async14093(self__.flag,meta14094__$1));
}));

(cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14095){
var self__ = this;
var _14095__$1 = this;
return self__.meta14094;
}));

(cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14094","meta14094",1992016801,null)], null);
}));

(cljs.core.async.t_cljs$core$async14093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14093");

(cljs.core.async.t_cljs$core$async14093.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14093.
 */
cljs.core.async.__GT_t_cljs$core$async14093 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14093(flag__$1,meta14094){
return (new cljs.core.async.t_cljs$core$async14093(flag__$1,meta14094));
});

}

return (new cljs.core.async.t_cljs$core$async14093(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14112 = (function (flag,cb,meta14113){
this.flag = flag;
this.cb = cb;
this.meta14113 = meta14113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14114,meta14113__$1){
var self__ = this;
var _14114__$1 = this;
return (new cljs.core.async.t_cljs$core$async14112(self__.flag,self__.cb,meta14113__$1));
}));

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14114){
var self__ = this;
var _14114__$1 = this;
return self__.meta14113;
}));

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14113","meta14113",1158060430,null)], null);
}));

(cljs.core.async.t_cljs$core$async14112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14112");

(cljs.core.async.t_cljs$core$async14112.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14112.
 */
cljs.core.async.__GT_t_cljs$core$async14112 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14112(flag__$1,cb__$1,meta14113){
return (new cljs.core.async.t_cljs$core$async14112(flag__$1,cb__$1,meta14113));
});

}

return (new cljs.core.async.t_cljs$core$async14112(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14129_SHARP_){
var G__14150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14129_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14150) : fret.call(null,G__14150));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14131_SHARP_){
var G__14151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14131_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14151) : fret.call(null,G__14151));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17631 = (i + (1));
i = G__17631;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17642 = arguments.length;
var i__5770__auto___17643 = (0);
while(true){
if((i__5770__auto___17643 < len__5769__auto___17642)){
args__5775__auto__.push((arguments[i__5770__auto___17643]));

var G__17647 = (i__5770__auto___17643 + (1));
i__5770__auto___17643 = G__17647;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14178){
var map__14180 = p__14178;
var map__14180__$1 = cljs.core.__destructure_map(map__14180);
var opts = map__14180__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14174){
var G__14175 = cljs.core.first(seq14174);
var seq14174__$1 = cljs.core.next(seq14174);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14175,seq14174__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14196 = arguments.length;
switch (G__14196) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13873__auto___17651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_14268){
var state_val_14269 = (state_14268[(1)]);
if((state_val_14269 === (7))){
var inst_14261 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
var statearr_14276_17652 = state_14268__$1;
(statearr_14276_17652[(2)] = inst_14261);

(statearr_14276_17652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (1))){
var state_14268__$1 = state_14268;
var statearr_14284_17658 = state_14268__$1;
(statearr_14284_17658[(2)] = null);

(statearr_14284_17658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (4))){
var inst_14244 = (state_14268[(7)]);
var inst_14244__$1 = (state_14268[(2)]);
var inst_14245 = (inst_14244__$1 == null);
var state_14268__$1 = (function (){var statearr_14285 = state_14268;
(statearr_14285[(7)] = inst_14244__$1);

return statearr_14285;
})();
if(cljs.core.truth_(inst_14245)){
var statearr_14286_17661 = state_14268__$1;
(statearr_14286_17661[(1)] = (5));

} else {
var statearr_14287_17662 = state_14268__$1;
(statearr_14287_17662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (13))){
var state_14268__$1 = state_14268;
var statearr_14288_17664 = state_14268__$1;
(statearr_14288_17664[(2)] = null);

(statearr_14288_17664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (6))){
var inst_14244 = (state_14268[(7)]);
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14268__$1,(11),to,inst_14244);
} else {
if((state_val_14269 === (3))){
var inst_14263 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14268__$1,inst_14263);
} else {
if((state_val_14269 === (12))){
var state_14268__$1 = state_14268;
var statearr_14308_17670 = state_14268__$1;
(statearr_14308_17670[(2)] = null);

(statearr_14308_17670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (2))){
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14268__$1,(4),from);
} else {
if((state_val_14269 === (11))){
var inst_14254 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
if(cljs.core.truth_(inst_14254)){
var statearr_14321_17671 = state_14268__$1;
(statearr_14321_17671[(1)] = (12));

} else {
var statearr_14323_17672 = state_14268__$1;
(statearr_14323_17672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (9))){
var state_14268__$1 = state_14268;
var statearr_14328_17673 = state_14268__$1;
(statearr_14328_17673[(2)] = null);

(statearr_14328_17673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (5))){
var state_14268__$1 = state_14268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14332_17674 = state_14268__$1;
(statearr_14332_17674[(1)] = (8));

} else {
var statearr_14338_17675 = state_14268__$1;
(statearr_14338_17675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (14))){
var inst_14259 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
var statearr_14339_17677 = state_14268__$1;
(statearr_14339_17677[(2)] = inst_14259);

(statearr_14339_17677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (10))){
var inst_14251 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
var statearr_14340_17684 = state_14268__$1;
(statearr_14340_17684[(2)] = inst_14251);

(statearr_14340_17684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (8))){
var inst_14248 = cljs.core.async.close_BANG_(to);
var state_14268__$1 = state_14268;
var statearr_14342_17685 = state_14268__$1;
(statearr_14342_17685[(2)] = inst_14248);

(statearr_14342_17685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_14346 = [null,null,null,null,null,null,null,null];
(statearr_14346[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_14346[(1)] = (1));

return statearr_14346;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_14268){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_14268);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e14347){var ex__13566__auto__ = e14347;
var statearr_14348_17687 = state_14268;
(statearr_14348_17687[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_14268[(4)]))){
var statearr_14349_17697 = state_14268;
(statearr_14349_17697[(1)] = cljs.core.first((state_14268[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17698 = state_14268;
state_14268 = G__17698;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_14268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_14268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_14351 = f__13874__auto__();
(statearr_14351[(6)] = c__13873__auto___17651);

return statearr_14351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14369){
var vec__14370 = p__14369;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(1),null);
var job = vec__14370;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13873__auto___17706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_14378){
var state_val_14379 = (state_14378[(1)]);
if((state_val_14379 === (1))){
var state_14378__$1 = state_14378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14378__$1,(2),res,v);
} else {
if((state_val_14379 === (2))){
var inst_14375 = (state_14378[(2)]);
var inst_14376 = cljs.core.async.close_BANG_(res);
var state_14378__$1 = (function (){var statearr_14380 = state_14378;
(statearr_14380[(7)] = inst_14375);

return statearr_14380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14378__$1,inst_14376);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0 = (function (){
var statearr_14383 = [null,null,null,null,null,null,null,null];
(statearr_14383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__);

(statearr_14383[(1)] = (1));

return statearr_14383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1 = (function (state_14378){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_14378);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e14384){var ex__13566__auto__ = e14384;
var statearr_14385_17723 = state_14378;
(statearr_14385_17723[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_14378[(4)]))){
var statearr_14386_17724 = state_14378;
(statearr_14386_17724[(1)] = cljs.core.first((state_14378[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17725 = state_14378;
state_14378 = G__17725;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__ = function(state_14378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1.call(this,state_14378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_14403 = f__13874__auto__();
(statearr_14403[(6)] = c__13873__auto___17706);

return statearr_14403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14404){
var vec__14409 = p__14404;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14409,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14409,(1),null);
var job = vec__14409;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17733 = n;
var __17734 = (0);
while(true){
if((__17734 < n__5636__auto___17733)){
var G__14433_17736 = type;
var G__14433_17737__$1 = (((G__14433_17736 instanceof cljs.core.Keyword))?G__14433_17736.fqn:null);
switch (G__14433_17737__$1) {
case "compute":
var c__13873__auto___17739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17734,c__13873__auto___17739,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async){
return (function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = ((function (__17734,c__13873__auto___17739,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async){
return (function (state_14447){
var state_val_14448 = (state_14447[(1)]);
if((state_val_14448 === (1))){
var state_14447__$1 = state_14447;
var statearr_14452_17748 = state_14447__$1;
(statearr_14452_17748[(2)] = null);

(statearr_14452_17748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14448 === (2))){
var state_14447__$1 = state_14447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14447__$1,(4),jobs);
} else {
if((state_val_14448 === (3))){
var inst_14445 = (state_14447[(2)]);
var state_14447__$1 = state_14447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14447__$1,inst_14445);
} else {
if((state_val_14448 === (4))){
var inst_14437 = (state_14447[(2)]);
var inst_14438 = process__$1(inst_14437);
var state_14447__$1 = state_14447;
if(cljs.core.truth_(inst_14438)){
var statearr_14465_17753 = state_14447__$1;
(statearr_14465_17753[(1)] = (5));

} else {
var statearr_14467_17754 = state_14447__$1;
(statearr_14467_17754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14448 === (5))){
var state_14447__$1 = state_14447;
var statearr_14474_17755 = state_14447__$1;
(statearr_14474_17755[(2)] = null);

(statearr_14474_17755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14448 === (6))){
var state_14447__$1 = state_14447;
var statearr_14479_17756 = state_14447__$1;
(statearr_14479_17756[(2)] = null);

(statearr_14479_17756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14448 === (7))){
var inst_14443 = (state_14447[(2)]);
var state_14447__$1 = state_14447;
var statearr_14480_17758 = state_14447__$1;
(statearr_14480_17758[(2)] = inst_14443);

(statearr_14480_17758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17734,c__13873__auto___17739,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async))
;
return ((function (__17734,switch__13562__auto__,c__13873__auto___17739,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0 = (function (){
var statearr_14481 = [null,null,null,null,null,null,null];
(statearr_14481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__);

(statearr_14481[(1)] = (1));

return statearr_14481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1 = (function (state_14447){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_14447);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e14482){var ex__13566__auto__ = e14482;
var statearr_14483_17769 = state_14447;
(statearr_14483_17769[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_14447[(4)]))){
var statearr_14484_17770 = state_14447;
(statearr_14484_17770[(1)] = cljs.core.first((state_14447[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17772 = state_14447;
state_14447 = G__17772;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__ = function(state_14447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1.call(this,state_14447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__;
})()
;})(__17734,switch__13562__auto__,c__13873__auto___17739,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async))
})();
var state__13875__auto__ = (function (){var statearr_14498 = f__13874__auto__();
(statearr_14498[(6)] = c__13873__auto___17739);

return statearr_14498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
});})(__17734,c__13873__auto___17739,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async))
);


break;
case "async":
var c__13873__auto___17776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17734,c__13873__auto___17776,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async){
return (function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = ((function (__17734,c__13873__auto___17776,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async){
return (function (state_14518){
var state_val_14519 = (state_14518[(1)]);
if((state_val_14519 === (1))){
var state_14518__$1 = state_14518;
var statearr_14530_17777 = state_14518__$1;
(statearr_14530_17777[(2)] = null);

(statearr_14530_17777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (2))){
var state_14518__$1 = state_14518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14518__$1,(4),jobs);
} else {
if((state_val_14519 === (3))){
var inst_14516 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14518__$1,inst_14516);
} else {
if((state_val_14519 === (4))){
var inst_14507 = (state_14518[(2)]);
var inst_14508 = async(inst_14507);
var state_14518__$1 = state_14518;
if(cljs.core.truth_(inst_14508)){
var statearr_14535_17781 = state_14518__$1;
(statearr_14535_17781[(1)] = (5));

} else {
var statearr_14536_17782 = state_14518__$1;
(statearr_14536_17782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (5))){
var state_14518__$1 = state_14518;
var statearr_14538_17783 = state_14518__$1;
(statearr_14538_17783[(2)] = null);

(statearr_14538_17783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (6))){
var state_14518__$1 = state_14518;
var statearr_14540_17784 = state_14518__$1;
(statearr_14540_17784[(2)] = null);

(statearr_14540_17784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (7))){
var inst_14513 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
var statearr_14541_17788 = state_14518__$1;
(statearr_14541_17788[(2)] = inst_14513);

(statearr_14541_17788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17734,c__13873__auto___17776,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async))
;
return ((function (__17734,switch__13562__auto__,c__13873__auto___17776,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0 = (function (){
var statearr_14542 = [null,null,null,null,null,null,null];
(statearr_14542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__);

(statearr_14542[(1)] = (1));

return statearr_14542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1 = (function (state_14518){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_14518);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e14546){var ex__13566__auto__ = e14546;
var statearr_14547_17790 = state_14518;
(statearr_14547_17790[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_14518[(4)]))){
var statearr_14548_17791 = state_14518;
(statearr_14548_17791[(1)] = cljs.core.first((state_14518[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17792 = state_14518;
state_14518 = G__17792;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__ = function(state_14518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1.call(this,state_14518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__;
})()
;})(__17734,switch__13562__auto__,c__13873__auto___17776,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async))
})();
var state__13875__auto__ = (function (){var statearr_14554 = f__13874__auto__();
(statearr_14554[(6)] = c__13873__auto___17776);

return statearr_14554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
});})(__17734,c__13873__auto___17776,G__14433_17736,G__14433_17737__$1,n__5636__auto___17733,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14433_17737__$1)].join('')));

}

var G__17800 = (__17734 + (1));
__17734 = G__17800;
continue;
} else {
}
break;
}

var c__13873__auto___17801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_14587){
var state_val_14588 = (state_14587[(1)]);
if((state_val_14588 === (7))){
var inst_14583 = (state_14587[(2)]);
var state_14587__$1 = state_14587;
var statearr_14598_17804 = state_14587__$1;
(statearr_14598_17804[(2)] = inst_14583);

(statearr_14598_17804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (1))){
var state_14587__$1 = state_14587;
var statearr_14607_17805 = state_14587__$1;
(statearr_14607_17805[(2)] = null);

(statearr_14607_17805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (4))){
var inst_14562 = (state_14587[(7)]);
var inst_14562__$1 = (state_14587[(2)]);
var inst_14563 = (inst_14562__$1 == null);
var state_14587__$1 = (function (){var statearr_14612 = state_14587;
(statearr_14612[(7)] = inst_14562__$1);

return statearr_14612;
})();
if(cljs.core.truth_(inst_14563)){
var statearr_14613_17807 = state_14587__$1;
(statearr_14613_17807[(1)] = (5));

} else {
var statearr_14614_17808 = state_14587__$1;
(statearr_14614_17808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (6))){
var inst_14562 = (state_14587[(7)]);
var inst_14571 = (state_14587[(8)]);
var inst_14571__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14574 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14575 = [inst_14562,inst_14571__$1];
var inst_14576 = (new cljs.core.PersistentVector(null,2,(5),inst_14574,inst_14575,null));
var state_14587__$1 = (function (){var statearr_14622 = state_14587;
(statearr_14622[(8)] = inst_14571__$1);

return statearr_14622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14587__$1,(8),jobs,inst_14576);
} else {
if((state_val_14588 === (3))){
var inst_14585 = (state_14587[(2)]);
var state_14587__$1 = state_14587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14587__$1,inst_14585);
} else {
if((state_val_14588 === (2))){
var state_14587__$1 = state_14587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14587__$1,(4),from);
} else {
if((state_val_14588 === (9))){
var inst_14580 = (state_14587[(2)]);
var state_14587__$1 = (function (){var statearr_14633 = state_14587;
(statearr_14633[(9)] = inst_14580);

return statearr_14633;
})();
var statearr_14640_17809 = state_14587__$1;
(statearr_14640_17809[(2)] = null);

(statearr_14640_17809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (5))){
var inst_14569 = cljs.core.async.close_BANG_(jobs);
var state_14587__$1 = state_14587;
var statearr_14643_17810 = state_14587__$1;
(statearr_14643_17810[(2)] = inst_14569);

(statearr_14643_17810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (8))){
var inst_14571 = (state_14587[(8)]);
var inst_14578 = (state_14587[(2)]);
var state_14587__$1 = (function (){var statearr_14649 = state_14587;
(statearr_14649[(10)] = inst_14578);

return statearr_14649;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14587__$1,(9),results,inst_14571);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0 = (function (){
var statearr_14651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14651[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__);

(statearr_14651[(1)] = (1));

return statearr_14651;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1 = (function (state_14587){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_14587);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e14652){var ex__13566__auto__ = e14652;
var statearr_14653_17813 = state_14587;
(statearr_14653_17813[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_14587[(4)]))){
var statearr_14654_17816 = state_14587;
(statearr_14654_17816[(1)] = cljs.core.first((state_14587[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17817 = state_14587;
state_14587 = G__17817;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__ = function(state_14587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1.call(this,state_14587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_14658 = f__13874__auto__();
(statearr_14658[(6)] = c__13873__auto___17801);

return statearr_14658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


var c__13873__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_14701){
var state_val_14702 = (state_14701[(1)]);
if((state_val_14702 === (7))){
var inst_14697 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
var statearr_14706_17824 = state_14701__$1;
(statearr_14706_17824[(2)] = inst_14697);

(statearr_14706_17824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (20))){
var state_14701__$1 = state_14701;
var statearr_14707_17825 = state_14701__$1;
(statearr_14707_17825[(2)] = null);

(statearr_14707_17825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (1))){
var state_14701__$1 = state_14701;
var statearr_14709_17827 = state_14701__$1;
(statearr_14709_17827[(2)] = null);

(statearr_14709_17827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (4))){
var inst_14661 = (state_14701[(7)]);
var inst_14661__$1 = (state_14701[(2)]);
var inst_14662 = (inst_14661__$1 == null);
var state_14701__$1 = (function (){var statearr_14711 = state_14701;
(statearr_14711[(7)] = inst_14661__$1);

return statearr_14711;
})();
if(cljs.core.truth_(inst_14662)){
var statearr_14712_17828 = state_14701__$1;
(statearr_14712_17828[(1)] = (5));

} else {
var statearr_14713_17830 = state_14701__$1;
(statearr_14713_17830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (15))){
var inst_14677 = (state_14701[(8)]);
var state_14701__$1 = state_14701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14701__$1,(18),to,inst_14677);
} else {
if((state_val_14702 === (21))){
var inst_14692 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
var statearr_14715_17831 = state_14701__$1;
(statearr_14715_17831[(2)] = inst_14692);

(statearr_14715_17831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (13))){
var inst_14694 = (state_14701[(2)]);
var state_14701__$1 = (function (){var statearr_14722 = state_14701;
(statearr_14722[(9)] = inst_14694);

return statearr_14722;
})();
var statearr_14723_17832 = state_14701__$1;
(statearr_14723_17832[(2)] = null);

(statearr_14723_17832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (6))){
var inst_14661 = (state_14701[(7)]);
var state_14701__$1 = state_14701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14701__$1,(11),inst_14661);
} else {
if((state_val_14702 === (17))){
var inst_14687 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
if(cljs.core.truth_(inst_14687)){
var statearr_14728_17833 = state_14701__$1;
(statearr_14728_17833[(1)] = (19));

} else {
var statearr_14729_17834 = state_14701__$1;
(statearr_14729_17834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (3))){
var inst_14699 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14701__$1,inst_14699);
} else {
if((state_val_14702 === (12))){
var inst_14672 = (state_14701[(10)]);
var state_14701__$1 = state_14701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14701__$1,(14),inst_14672);
} else {
if((state_val_14702 === (2))){
var state_14701__$1 = state_14701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14701__$1,(4),results);
} else {
if((state_val_14702 === (19))){
var state_14701__$1 = state_14701;
var statearr_14737_17840 = state_14701__$1;
(statearr_14737_17840[(2)] = null);

(statearr_14737_17840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (11))){
var inst_14672 = (state_14701[(2)]);
var state_14701__$1 = (function (){var statearr_14741 = state_14701;
(statearr_14741[(10)] = inst_14672);

return statearr_14741;
})();
var statearr_14744_17841 = state_14701__$1;
(statearr_14744_17841[(2)] = null);

(statearr_14744_17841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (9))){
var state_14701__$1 = state_14701;
var statearr_14746_17843 = state_14701__$1;
(statearr_14746_17843[(2)] = null);

(statearr_14746_17843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (5))){
var state_14701__$1 = state_14701;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14748_17844 = state_14701__$1;
(statearr_14748_17844[(1)] = (8));

} else {
var statearr_14749_17845 = state_14701__$1;
(statearr_14749_17845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (14))){
var inst_14677 = (state_14701[(8)]);
var inst_14679 = (state_14701[(11)]);
var inst_14677__$1 = (state_14701[(2)]);
var inst_14678 = (inst_14677__$1 == null);
var inst_14679__$1 = cljs.core.not(inst_14678);
var state_14701__$1 = (function (){var statearr_14750 = state_14701;
(statearr_14750[(8)] = inst_14677__$1);

(statearr_14750[(11)] = inst_14679__$1);

return statearr_14750;
})();
if(inst_14679__$1){
var statearr_14751_17856 = state_14701__$1;
(statearr_14751_17856[(1)] = (15));

} else {
var statearr_14753_17857 = state_14701__$1;
(statearr_14753_17857[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (16))){
var inst_14679 = (state_14701[(11)]);
var state_14701__$1 = state_14701;
var statearr_14756_17858 = state_14701__$1;
(statearr_14756_17858[(2)] = inst_14679);

(statearr_14756_17858[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (10))){
var inst_14669 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
var statearr_14760_17861 = state_14701__$1;
(statearr_14760_17861[(2)] = inst_14669);

(statearr_14760_17861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (18))){
var inst_14683 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
var statearr_14762_17864 = state_14701__$1;
(statearr_14762_17864[(2)] = inst_14683);

(statearr_14762_17864[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (8))){
var inst_14666 = cljs.core.async.close_BANG_(to);
var state_14701__$1 = state_14701;
var statearr_14765_17866 = state_14701__$1;
(statearr_14765_17866[(2)] = inst_14666);

(statearr_14765_17866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0 = (function (){
var statearr_14772 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__);

(statearr_14772[(1)] = (1));

return statearr_14772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1 = (function (state_14701){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_14701);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e14776){var ex__13566__auto__ = e14776;
var statearr_14777_17877 = state_14701;
(statearr_14777_17877[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_14701[(4)]))){
var statearr_14779_17878 = state_14701;
(statearr_14779_17878[(1)] = cljs.core.first((state_14701[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17879 = state_14701;
state_14701 = G__17879;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__ = function(state_14701){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1.call(this,state_14701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_14784 = f__13874__auto__();
(statearr_14784[(6)] = c__13873__auto__);

return statearr_14784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));

return c__13873__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14791 = arguments.length;
switch (G__14791) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14800 = arguments.length;
switch (G__14800) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14816 = arguments.length;
switch (G__14816) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13873__auto___17940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_14856){
var state_val_14857 = (state_14856[(1)]);
if((state_val_14857 === (7))){
var inst_14851 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14860_17945 = state_14856__$1;
(statearr_14860_17945[(2)] = inst_14851);

(statearr_14860_17945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (1))){
var state_14856__$1 = state_14856;
var statearr_14861_17949 = state_14856__$1;
(statearr_14861_17949[(2)] = null);

(statearr_14861_17949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (4))){
var inst_14832 = (state_14856[(7)]);
var inst_14832__$1 = (state_14856[(2)]);
var inst_14833 = (inst_14832__$1 == null);
var state_14856__$1 = (function (){var statearr_14863 = state_14856;
(statearr_14863[(7)] = inst_14832__$1);

return statearr_14863;
})();
if(cljs.core.truth_(inst_14833)){
var statearr_14865_17950 = state_14856__$1;
(statearr_14865_17950[(1)] = (5));

} else {
var statearr_14867_17953 = state_14856__$1;
(statearr_14867_17953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (13))){
var state_14856__$1 = state_14856;
var statearr_14871_17955 = state_14856__$1;
(statearr_14871_17955[(2)] = null);

(statearr_14871_17955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (6))){
var inst_14832 = (state_14856[(7)]);
var inst_14838 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14832) : p.call(null,inst_14832));
var state_14856__$1 = state_14856;
if(cljs.core.truth_(inst_14838)){
var statearr_14883_17963 = state_14856__$1;
(statearr_14883_17963[(1)] = (9));

} else {
var statearr_14888_17964 = state_14856__$1;
(statearr_14888_17964[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (3))){
var inst_14854 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14856__$1,inst_14854);
} else {
if((state_val_14857 === (12))){
var state_14856__$1 = state_14856;
var statearr_14909_17965 = state_14856__$1;
(statearr_14909_17965[(2)] = null);

(statearr_14909_17965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (2))){
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14856__$1,(4),ch);
} else {
if((state_val_14857 === (11))){
var inst_14832 = (state_14856[(7)]);
var inst_14842 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14856__$1,(8),inst_14842,inst_14832);
} else {
if((state_val_14857 === (9))){
var state_14856__$1 = state_14856;
var statearr_14912_17973 = state_14856__$1;
(statearr_14912_17973[(2)] = tc);

(statearr_14912_17973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (5))){
var inst_14835 = cljs.core.async.close_BANG_(tc);
var inst_14836 = cljs.core.async.close_BANG_(fc);
var state_14856__$1 = (function (){var statearr_14914 = state_14856;
(statearr_14914[(8)] = inst_14835);

return statearr_14914;
})();
var statearr_14916_17979 = state_14856__$1;
(statearr_14916_17979[(2)] = inst_14836);

(statearr_14916_17979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (14))){
var inst_14849 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14917_17986 = state_14856__$1;
(statearr_14917_17986[(2)] = inst_14849);

(statearr_14917_17986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (10))){
var state_14856__$1 = state_14856;
var statearr_14921_17987 = state_14856__$1;
(statearr_14921_17987[(2)] = fc);

(statearr_14921_17987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (8))){
var inst_14844 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
if(cljs.core.truth_(inst_14844)){
var statearr_14922_17989 = state_14856__$1;
(statearr_14922_17989[(1)] = (12));

} else {
var statearr_14925_17990 = state_14856__$1;
(statearr_14925_17990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_14928 = [null,null,null,null,null,null,null,null,null];
(statearr_14928[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_14928[(1)] = (1));

return statearr_14928;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_14856){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_14856);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e14935){var ex__13566__auto__ = e14935;
var statearr_14936_17995 = state_14856;
(statearr_14936_17995[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_14856[(4)]))){
var statearr_14938_17996 = state_14856;
(statearr_14938_17996[(1)] = cljs.core.first((state_14856[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18002 = state_14856;
state_14856 = G__18002;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_14856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_14856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_14946 = f__13874__auto__();
(statearr_14946[(6)] = c__13873__auto___17940);

return statearr_14946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13873__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_14974){
var state_val_14975 = (state_14974[(1)]);
if((state_val_14975 === (7))){
var inst_14969 = (state_14974[(2)]);
var state_14974__$1 = state_14974;
var statearr_14978_18004 = state_14974__$1;
(statearr_14978_18004[(2)] = inst_14969);

(statearr_14978_18004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (1))){
var inst_14950 = init;
var inst_14951 = inst_14950;
var state_14974__$1 = (function (){var statearr_14980 = state_14974;
(statearr_14980[(7)] = inst_14951);

return statearr_14980;
})();
var statearr_14981_18013 = state_14974__$1;
(statearr_14981_18013[(2)] = null);

(statearr_14981_18013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (4))){
var inst_14955 = (state_14974[(8)]);
var inst_14955__$1 = (state_14974[(2)]);
var inst_14957 = (inst_14955__$1 == null);
var state_14974__$1 = (function (){var statearr_14982 = state_14974;
(statearr_14982[(8)] = inst_14955__$1);

return statearr_14982;
})();
if(cljs.core.truth_(inst_14957)){
var statearr_14986_18020 = state_14974__$1;
(statearr_14986_18020[(1)] = (5));

} else {
var statearr_14987_18021 = state_14974__$1;
(statearr_14987_18021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (6))){
var inst_14951 = (state_14974[(7)]);
var inst_14955 = (state_14974[(8)]);
var inst_14960 = (state_14974[(9)]);
var inst_14960__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14951,inst_14955) : f.call(null,inst_14951,inst_14955));
var inst_14961 = cljs.core.reduced_QMARK_(inst_14960__$1);
var state_14974__$1 = (function (){var statearr_14989 = state_14974;
(statearr_14989[(9)] = inst_14960__$1);

return statearr_14989;
})();
if(inst_14961){
var statearr_14990_18022 = state_14974__$1;
(statearr_14990_18022[(1)] = (8));

} else {
var statearr_14991_18023 = state_14974__$1;
(statearr_14991_18023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (3))){
var inst_14971 = (state_14974[(2)]);
var state_14974__$1 = state_14974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14974__$1,inst_14971);
} else {
if((state_val_14975 === (2))){
var state_14974__$1 = state_14974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14974__$1,(4),ch);
} else {
if((state_val_14975 === (9))){
var inst_14960 = (state_14974[(9)]);
var inst_14951 = inst_14960;
var state_14974__$1 = (function (){var statearr_14994 = state_14974;
(statearr_14994[(7)] = inst_14951);

return statearr_14994;
})();
var statearr_14995_18028 = state_14974__$1;
(statearr_14995_18028[(2)] = null);

(statearr_14995_18028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (5))){
var inst_14951 = (state_14974[(7)]);
var state_14974__$1 = state_14974;
var statearr_14996_18032 = state_14974__$1;
(statearr_14996_18032[(2)] = inst_14951);

(statearr_14996_18032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (10))){
var inst_14967 = (state_14974[(2)]);
var state_14974__$1 = state_14974;
var statearr_15001_18035 = state_14974__$1;
(statearr_15001_18035[(2)] = inst_14967);

(statearr_15001_18035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (8))){
var inst_14960 = (state_14974[(9)]);
var inst_14963 = cljs.core.deref(inst_14960);
var state_14974__$1 = state_14974;
var statearr_15006_18036 = state_14974__$1;
(statearr_15006_18036[(2)] = inst_14963);

(statearr_15006_18036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13563__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13563__auto____0 = (function (){
var statearr_15011 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15011[(0)] = cljs$core$async$reduce_$_state_machine__13563__auto__);

(statearr_15011[(1)] = (1));

return statearr_15011;
});
var cljs$core$async$reduce_$_state_machine__13563__auto____1 = (function (state_14974){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_14974);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e15013){var ex__13566__auto__ = e15013;
var statearr_15014_18040 = state_14974;
(statearr_15014_18040[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_14974[(4)]))){
var statearr_15015_18041 = state_14974;
(statearr_15015_18041[(1)] = cljs.core.first((state_14974[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18042 = state_14974;
state_14974 = G__18042;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13563__auto__ = function(state_14974){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13563__auto____1.call(this,state_14974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13563__auto____0;
cljs$core$async$reduce_$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13563__auto____1;
return cljs$core$async$reduce_$_state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_15019 = f__13874__auto__();
(statearr_15019[(6)] = c__13873__auto__);

return statearr_15019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));

return c__13873__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13873__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_15032){
var state_val_15033 = (state_15032[(1)]);
if((state_val_15033 === (1))){
var inst_15027 = cljs.core.async.reduce(f__$1,init,ch);
var state_15032__$1 = state_15032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15032__$1,(2),inst_15027);
} else {
if((state_val_15033 === (2))){
var inst_15029 = (state_15032[(2)]);
var inst_15030 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15029) : f__$1.call(null,inst_15029));
var state_15032__$1 = state_15032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15032__$1,inst_15030);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13563__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13563__auto____0 = (function (){
var statearr_15034 = [null,null,null,null,null,null,null];
(statearr_15034[(0)] = cljs$core$async$transduce_$_state_machine__13563__auto__);

(statearr_15034[(1)] = (1));

return statearr_15034;
});
var cljs$core$async$transduce_$_state_machine__13563__auto____1 = (function (state_15032){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_15032);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e15039){var ex__13566__auto__ = e15039;
var statearr_15040_18059 = state_15032;
(statearr_15040_18059[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_15032[(4)]))){
var statearr_15043_18061 = state_15032;
(statearr_15043_18061[(1)] = cljs.core.first((state_15032[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18062 = state_15032;
state_15032 = G__18062;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13563__auto__ = function(state_15032){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13563__auto____1.call(this,state_15032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13563__auto____0;
cljs$core$async$transduce_$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13563__auto____1;
return cljs$core$async$transduce_$_state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_15048 = f__13874__auto__();
(statearr_15048[(6)] = c__13873__auto__);

return statearr_15048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));

return c__13873__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15058 = arguments.length;
switch (G__15058) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13873__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_15085){
var state_val_15086 = (state_15085[(1)]);
if((state_val_15086 === (7))){
var inst_15067 = (state_15085[(2)]);
var state_15085__$1 = state_15085;
var statearr_15088_18075 = state_15085__$1;
(statearr_15088_18075[(2)] = inst_15067);

(statearr_15088_18075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15086 === (1))){
var inst_15061 = cljs.core.seq(coll);
var inst_15062 = inst_15061;
var state_15085__$1 = (function (){var statearr_15090 = state_15085;
(statearr_15090[(7)] = inst_15062);

return statearr_15090;
})();
var statearr_15092_18082 = state_15085__$1;
(statearr_15092_18082[(2)] = null);

(statearr_15092_18082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15086 === (4))){
var inst_15062 = (state_15085[(7)]);
var inst_15065 = cljs.core.first(inst_15062);
var state_15085__$1 = state_15085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15085__$1,(7),ch,inst_15065);
} else {
if((state_val_15086 === (13))){
var inst_15079 = (state_15085[(2)]);
var state_15085__$1 = state_15085;
var statearr_15103_18086 = state_15085__$1;
(statearr_15103_18086[(2)] = inst_15079);

(statearr_15103_18086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15086 === (6))){
var inst_15070 = (state_15085[(2)]);
var state_15085__$1 = state_15085;
if(cljs.core.truth_(inst_15070)){
var statearr_15108_18088 = state_15085__$1;
(statearr_15108_18088[(1)] = (8));

} else {
var statearr_15109_18093 = state_15085__$1;
(statearr_15109_18093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15086 === (3))){
var inst_15083 = (state_15085[(2)]);
var state_15085__$1 = state_15085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15085__$1,inst_15083);
} else {
if((state_val_15086 === (12))){
var state_15085__$1 = state_15085;
var statearr_15114_18099 = state_15085__$1;
(statearr_15114_18099[(2)] = null);

(statearr_15114_18099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15086 === (2))){
var inst_15062 = (state_15085[(7)]);
var state_15085__$1 = state_15085;
if(cljs.core.truth_(inst_15062)){
var statearr_15115_18120 = state_15085__$1;
(statearr_15115_18120[(1)] = (4));

} else {
var statearr_15117_18121 = state_15085__$1;
(statearr_15117_18121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15086 === (11))){
var inst_15076 = cljs.core.async.close_BANG_(ch);
var state_15085__$1 = state_15085;
var statearr_15121_18122 = state_15085__$1;
(statearr_15121_18122[(2)] = inst_15076);

(statearr_15121_18122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15086 === (9))){
var state_15085__$1 = state_15085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15122_18123 = state_15085__$1;
(statearr_15122_18123[(1)] = (11));

} else {
var statearr_15123_18124 = state_15085__$1;
(statearr_15123_18124[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15086 === (5))){
var inst_15062 = (state_15085[(7)]);
var state_15085__$1 = state_15085;
var statearr_15124_18125 = state_15085__$1;
(statearr_15124_18125[(2)] = inst_15062);

(statearr_15124_18125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15086 === (10))){
var inst_15081 = (state_15085[(2)]);
var state_15085__$1 = state_15085;
var statearr_15126_18126 = state_15085__$1;
(statearr_15126_18126[(2)] = inst_15081);

(statearr_15126_18126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15086 === (8))){
var inst_15062 = (state_15085[(7)]);
var inst_15072 = cljs.core.next(inst_15062);
var inst_15062__$1 = inst_15072;
var state_15085__$1 = (function (){var statearr_15129 = state_15085;
(statearr_15129[(7)] = inst_15062__$1);

return statearr_15129;
})();
var statearr_15130_18128 = state_15085__$1;
(statearr_15130_18128[(2)] = null);

(statearr_15130_18128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_15133 = [null,null,null,null,null,null,null,null];
(statearr_15133[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_15133[(1)] = (1));

return statearr_15133;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_15085){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_15085);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e15135){var ex__13566__auto__ = e15135;
var statearr_15136_18130 = state_15085;
(statearr_15136_18130[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_15085[(4)]))){
var statearr_15137_18135 = state_15085;
(statearr_15137_18135[(1)] = cljs.core.first((state_15085[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18137 = state_15085;
state_15085 = G__18137;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_15085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_15085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_15169 = f__13874__auto__();
(statearr_15169[(6)] = c__13873__auto__);

return statearr_15169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));

return c__13873__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15172 = arguments.length;
switch (G__15172) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18142 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18142(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18145 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18145(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18146 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18146(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18147 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18147(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15216 = (function (ch,cs,meta15217){
this.ch = ch;
this.cs = cs;
this.meta15217 = meta15217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15218,meta15217__$1){
var self__ = this;
var _15218__$1 = this;
return (new cljs.core.async.t_cljs$core$async15216(self__.ch,self__.cs,meta15217__$1));
}));

(cljs.core.async.t_cljs$core$async15216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15218){
var self__ = this;
var _15218__$1 = this;
return self__.meta15217;
}));

(cljs.core.async.t_cljs$core$async15216.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15216.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15216.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15216.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15216.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15217","meta15217",-1033624887,null)], null);
}));

(cljs.core.async.t_cljs$core$async15216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15216");

(cljs.core.async.t_cljs$core$async15216.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15216.
 */
cljs.core.async.__GT_t_cljs$core$async15216 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15216(ch__$1,cs__$1,meta15217){
return (new cljs.core.async.t_cljs$core$async15216(ch__$1,cs__$1,meta15217));
});

}

return (new cljs.core.async.t_cljs$core$async15216(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13873__auto___18157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_15385){
var state_val_15387 = (state_15385[(1)]);
if((state_val_15387 === (7))){
var inst_15376 = (state_15385[(2)]);
var state_15385__$1 = state_15385;
var statearr_15396_18160 = state_15385__$1;
(statearr_15396_18160[(2)] = inst_15376);

(statearr_15396_18160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (20))){
var inst_15268 = (state_15385[(7)]);
var inst_15285 = cljs.core.first(inst_15268);
var inst_15287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15285,(0),null);
var inst_15288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15285,(1),null);
var state_15385__$1 = (function (){var statearr_15404 = state_15385;
(statearr_15404[(8)] = inst_15287);

return statearr_15404;
})();
if(cljs.core.truth_(inst_15288)){
var statearr_15406_18162 = state_15385__$1;
(statearr_15406_18162[(1)] = (22));

} else {
var statearr_15408_18163 = state_15385__$1;
(statearr_15408_18163[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (27))){
var inst_15326 = (state_15385[(9)]);
var inst_15321 = (state_15385[(10)]);
var inst_15319 = (state_15385[(11)]);
var inst_15236 = (state_15385[(12)]);
var inst_15326__$1 = cljs.core._nth(inst_15319,inst_15321);
var inst_15327 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15326__$1,inst_15236,done);
var state_15385__$1 = (function (){var statearr_15411 = state_15385;
(statearr_15411[(9)] = inst_15326__$1);

return statearr_15411;
})();
if(cljs.core.truth_(inst_15327)){
var statearr_15412_18164 = state_15385__$1;
(statearr_15412_18164[(1)] = (30));

} else {
var statearr_15413_18165 = state_15385__$1;
(statearr_15413_18165[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (1))){
var state_15385__$1 = state_15385;
var statearr_15414_18166 = state_15385__$1;
(statearr_15414_18166[(2)] = null);

(statearr_15414_18166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (24))){
var inst_15268 = (state_15385[(7)]);
var inst_15293 = (state_15385[(2)]);
var inst_15294 = cljs.core.next(inst_15268);
var inst_15245 = inst_15294;
var inst_15246 = null;
var inst_15247 = (0);
var inst_15248 = (0);
var state_15385__$1 = (function (){var statearr_15417 = state_15385;
(statearr_15417[(13)] = inst_15248);

(statearr_15417[(14)] = inst_15293);

(statearr_15417[(15)] = inst_15247);

(statearr_15417[(16)] = inst_15246);

(statearr_15417[(17)] = inst_15245);

return statearr_15417;
})();
var statearr_15418_18173 = state_15385__$1;
(statearr_15418_18173[(2)] = null);

(statearr_15418_18173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (39))){
var state_15385__$1 = state_15385;
var statearr_15439_18174 = state_15385__$1;
(statearr_15439_18174[(2)] = null);

(statearr_15439_18174[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (4))){
var inst_15236 = (state_15385[(12)]);
var inst_15236__$1 = (state_15385[(2)]);
var inst_15237 = (inst_15236__$1 == null);
var state_15385__$1 = (function (){var statearr_15441 = state_15385;
(statearr_15441[(12)] = inst_15236__$1);

return statearr_15441;
})();
if(cljs.core.truth_(inst_15237)){
var statearr_15443_18178 = state_15385__$1;
(statearr_15443_18178[(1)] = (5));

} else {
var statearr_15444_18179 = state_15385__$1;
(statearr_15444_18179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (15))){
var inst_15248 = (state_15385[(13)]);
var inst_15247 = (state_15385[(15)]);
var inst_15246 = (state_15385[(16)]);
var inst_15245 = (state_15385[(17)]);
var inst_15263 = (state_15385[(2)]);
var inst_15264 = (inst_15248 + (1));
var tmp15432 = inst_15247;
var tmp15434 = inst_15246;
var tmp15435 = inst_15245;
var inst_15245__$1 = tmp15435;
var inst_15246__$1 = tmp15434;
var inst_15247__$1 = tmp15432;
var inst_15248__$1 = inst_15264;
var state_15385__$1 = (function (){var statearr_15445 = state_15385;
(statearr_15445[(13)] = inst_15248__$1);

(statearr_15445[(15)] = inst_15247__$1);

(statearr_15445[(16)] = inst_15246__$1);

(statearr_15445[(18)] = inst_15263);

(statearr_15445[(17)] = inst_15245__$1);

return statearr_15445;
})();
var statearr_15448_18184 = state_15385__$1;
(statearr_15448_18184[(2)] = null);

(statearr_15448_18184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (21))){
var inst_15297 = (state_15385[(2)]);
var state_15385__$1 = state_15385;
var statearr_15453_18187 = state_15385__$1;
(statearr_15453_18187[(2)] = inst_15297);

(statearr_15453_18187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (31))){
var inst_15326 = (state_15385[(9)]);
var inst_15331 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15326);
var state_15385__$1 = state_15385;
var statearr_15454_18188 = state_15385__$1;
(statearr_15454_18188[(2)] = inst_15331);

(statearr_15454_18188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (32))){
var inst_15321 = (state_15385[(10)]);
var inst_15319 = (state_15385[(11)]);
var inst_15318 = (state_15385[(19)]);
var inst_15320 = (state_15385[(20)]);
var inst_15333 = (state_15385[(2)]);
var inst_15334 = (inst_15321 + (1));
var tmp15450 = inst_15319;
var tmp15451 = inst_15318;
var tmp15452 = inst_15320;
var inst_15318__$1 = tmp15451;
var inst_15319__$1 = tmp15450;
var inst_15320__$1 = tmp15452;
var inst_15321__$1 = inst_15334;
var state_15385__$1 = (function (){var statearr_15457 = state_15385;
(statearr_15457[(10)] = inst_15321__$1);

(statearr_15457[(21)] = inst_15333);

(statearr_15457[(11)] = inst_15319__$1);

(statearr_15457[(19)] = inst_15318__$1);

(statearr_15457[(20)] = inst_15320__$1);

return statearr_15457;
})();
var statearr_15459_18197 = state_15385__$1;
(statearr_15459_18197[(2)] = null);

(statearr_15459_18197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (40))){
var inst_15346 = (state_15385[(22)]);
var inst_15350 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15346);
var state_15385__$1 = state_15385;
var statearr_15462_18198 = state_15385__$1;
(statearr_15462_18198[(2)] = inst_15350);

(statearr_15462_18198[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (33))){
var inst_15337 = (state_15385[(23)]);
var inst_15339 = cljs.core.chunked_seq_QMARK_(inst_15337);
var state_15385__$1 = state_15385;
if(inst_15339){
var statearr_15466_18206 = state_15385__$1;
(statearr_15466_18206[(1)] = (36));

} else {
var statearr_15467_18207 = state_15385__$1;
(statearr_15467_18207[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (13))){
var inst_15257 = (state_15385[(24)]);
var inst_15260 = cljs.core.async.close_BANG_(inst_15257);
var state_15385__$1 = state_15385;
var statearr_15468_18209 = state_15385__$1;
(statearr_15468_18209[(2)] = inst_15260);

(statearr_15468_18209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (22))){
var inst_15287 = (state_15385[(8)]);
var inst_15290 = cljs.core.async.close_BANG_(inst_15287);
var state_15385__$1 = state_15385;
var statearr_15469_18210 = state_15385__$1;
(statearr_15469_18210[(2)] = inst_15290);

(statearr_15469_18210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (36))){
var inst_15337 = (state_15385[(23)]);
var inst_15341 = cljs.core.chunk_first(inst_15337);
var inst_15342 = cljs.core.chunk_rest(inst_15337);
var inst_15343 = cljs.core.count(inst_15341);
var inst_15318 = inst_15342;
var inst_15319 = inst_15341;
var inst_15320 = inst_15343;
var inst_15321 = (0);
var state_15385__$1 = (function (){var statearr_15470 = state_15385;
(statearr_15470[(10)] = inst_15321);

(statearr_15470[(11)] = inst_15319);

(statearr_15470[(19)] = inst_15318);

(statearr_15470[(20)] = inst_15320);

return statearr_15470;
})();
var statearr_15472_18220 = state_15385__$1;
(statearr_15472_18220[(2)] = null);

(statearr_15472_18220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (41))){
var inst_15337 = (state_15385[(23)]);
var inst_15354 = (state_15385[(2)]);
var inst_15355 = cljs.core.next(inst_15337);
var inst_15318 = inst_15355;
var inst_15319 = null;
var inst_15320 = (0);
var inst_15321 = (0);
var state_15385__$1 = (function (){var statearr_15474 = state_15385;
(statearr_15474[(10)] = inst_15321);

(statearr_15474[(25)] = inst_15354);

(statearr_15474[(11)] = inst_15319);

(statearr_15474[(19)] = inst_15318);

(statearr_15474[(20)] = inst_15320);

return statearr_15474;
})();
var statearr_15475_18221 = state_15385__$1;
(statearr_15475_18221[(2)] = null);

(statearr_15475_18221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (43))){
var state_15385__$1 = state_15385;
var statearr_15476_18225 = state_15385__$1;
(statearr_15476_18225[(2)] = null);

(statearr_15476_18225[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (29))){
var inst_15363 = (state_15385[(2)]);
var state_15385__$1 = state_15385;
var statearr_15477_18233 = state_15385__$1;
(statearr_15477_18233[(2)] = inst_15363);

(statearr_15477_18233[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (44))){
var inst_15373 = (state_15385[(2)]);
var state_15385__$1 = (function (){var statearr_15482 = state_15385;
(statearr_15482[(26)] = inst_15373);

return statearr_15482;
})();
var statearr_15483_18237 = state_15385__$1;
(statearr_15483_18237[(2)] = null);

(statearr_15483_18237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (6))){
var inst_15308 = (state_15385[(27)]);
var inst_15307 = cljs.core.deref(cs);
var inst_15308__$1 = cljs.core.keys(inst_15307);
var inst_15309 = cljs.core.count(inst_15308__$1);
var inst_15310 = cljs.core.reset_BANG_(dctr,inst_15309);
var inst_15315 = cljs.core.seq(inst_15308__$1);
var inst_15318 = inst_15315;
var inst_15319 = null;
var inst_15320 = (0);
var inst_15321 = (0);
var state_15385__$1 = (function (){var statearr_15491 = state_15385;
(statearr_15491[(10)] = inst_15321);

(statearr_15491[(27)] = inst_15308__$1);

(statearr_15491[(28)] = inst_15310);

(statearr_15491[(11)] = inst_15319);

(statearr_15491[(19)] = inst_15318);

(statearr_15491[(20)] = inst_15320);

return statearr_15491;
})();
var statearr_15492_18246 = state_15385__$1;
(statearr_15492_18246[(2)] = null);

(statearr_15492_18246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (28))){
var inst_15318 = (state_15385[(19)]);
var inst_15337 = (state_15385[(23)]);
var inst_15337__$1 = cljs.core.seq(inst_15318);
var state_15385__$1 = (function (){var statearr_15493 = state_15385;
(statearr_15493[(23)] = inst_15337__$1);

return statearr_15493;
})();
if(inst_15337__$1){
var statearr_15494_18247 = state_15385__$1;
(statearr_15494_18247[(1)] = (33));

} else {
var statearr_15495_18249 = state_15385__$1;
(statearr_15495_18249[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (25))){
var inst_15321 = (state_15385[(10)]);
var inst_15320 = (state_15385[(20)]);
var inst_15323 = (inst_15321 < inst_15320);
var inst_15324 = inst_15323;
var state_15385__$1 = state_15385;
if(cljs.core.truth_(inst_15324)){
var statearr_15496_18253 = state_15385__$1;
(statearr_15496_18253[(1)] = (27));

} else {
var statearr_15497_18254 = state_15385__$1;
(statearr_15497_18254[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (34))){
var state_15385__$1 = state_15385;
var statearr_15500_18255 = state_15385__$1;
(statearr_15500_18255[(2)] = null);

(statearr_15500_18255[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (17))){
var state_15385__$1 = state_15385;
var statearr_15501_18258 = state_15385__$1;
(statearr_15501_18258[(2)] = null);

(statearr_15501_18258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (3))){
var inst_15378 = (state_15385[(2)]);
var state_15385__$1 = state_15385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15385__$1,inst_15378);
} else {
if((state_val_15387 === (12))){
var inst_15302 = (state_15385[(2)]);
var state_15385__$1 = state_15385;
var statearr_15505_18261 = state_15385__$1;
(statearr_15505_18261[(2)] = inst_15302);

(statearr_15505_18261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (2))){
var state_15385__$1 = state_15385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15385__$1,(4),ch);
} else {
if((state_val_15387 === (23))){
var state_15385__$1 = state_15385;
var statearr_15512_18268 = state_15385__$1;
(statearr_15512_18268[(2)] = null);

(statearr_15512_18268[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (35))){
var inst_15361 = (state_15385[(2)]);
var state_15385__$1 = state_15385;
var statearr_15513_18269 = state_15385__$1;
(statearr_15513_18269[(2)] = inst_15361);

(statearr_15513_18269[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (19))){
var inst_15268 = (state_15385[(7)]);
var inst_15274 = cljs.core.chunk_first(inst_15268);
var inst_15275 = cljs.core.chunk_rest(inst_15268);
var inst_15276 = cljs.core.count(inst_15274);
var inst_15245 = inst_15275;
var inst_15246 = inst_15274;
var inst_15247 = inst_15276;
var inst_15248 = (0);
var state_15385__$1 = (function (){var statearr_15515 = state_15385;
(statearr_15515[(13)] = inst_15248);

(statearr_15515[(15)] = inst_15247);

(statearr_15515[(16)] = inst_15246);

(statearr_15515[(17)] = inst_15245);

return statearr_15515;
})();
var statearr_15517_18278 = state_15385__$1;
(statearr_15517_18278[(2)] = null);

(statearr_15517_18278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (11))){
var inst_15268 = (state_15385[(7)]);
var inst_15245 = (state_15385[(17)]);
var inst_15268__$1 = cljs.core.seq(inst_15245);
var state_15385__$1 = (function (){var statearr_15520 = state_15385;
(statearr_15520[(7)] = inst_15268__$1);

return statearr_15520;
})();
if(inst_15268__$1){
var statearr_15521_18282 = state_15385__$1;
(statearr_15521_18282[(1)] = (16));

} else {
var statearr_15522_18283 = state_15385__$1;
(statearr_15522_18283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (9))){
var inst_15305 = (state_15385[(2)]);
var state_15385__$1 = state_15385;
var statearr_15523_18285 = state_15385__$1;
(statearr_15523_18285[(2)] = inst_15305);

(statearr_15523_18285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (5))){
var inst_15243 = cljs.core.deref(cs);
var inst_15244 = cljs.core.seq(inst_15243);
var inst_15245 = inst_15244;
var inst_15246 = null;
var inst_15247 = (0);
var inst_15248 = (0);
var state_15385__$1 = (function (){var statearr_15530 = state_15385;
(statearr_15530[(13)] = inst_15248);

(statearr_15530[(15)] = inst_15247);

(statearr_15530[(16)] = inst_15246);

(statearr_15530[(17)] = inst_15245);

return statearr_15530;
})();
var statearr_15532_18286 = state_15385__$1;
(statearr_15532_18286[(2)] = null);

(statearr_15532_18286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (14))){
var state_15385__$1 = state_15385;
var statearr_15534_18288 = state_15385__$1;
(statearr_15534_18288[(2)] = null);

(statearr_15534_18288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (45))){
var inst_15370 = (state_15385[(2)]);
var state_15385__$1 = state_15385;
var statearr_15535_18289 = state_15385__$1;
(statearr_15535_18289[(2)] = inst_15370);

(statearr_15535_18289[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (26))){
var inst_15308 = (state_15385[(27)]);
var inst_15365 = (state_15385[(2)]);
var inst_15366 = cljs.core.seq(inst_15308);
var state_15385__$1 = (function (){var statearr_15539 = state_15385;
(statearr_15539[(29)] = inst_15365);

return statearr_15539;
})();
if(inst_15366){
var statearr_15543_18290 = state_15385__$1;
(statearr_15543_18290[(1)] = (42));

} else {
var statearr_15546_18291 = state_15385__$1;
(statearr_15546_18291[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (16))){
var inst_15268 = (state_15385[(7)]);
var inst_15272 = cljs.core.chunked_seq_QMARK_(inst_15268);
var state_15385__$1 = state_15385;
if(inst_15272){
var statearr_15547_18292 = state_15385__$1;
(statearr_15547_18292[(1)] = (19));

} else {
var statearr_15548_18293 = state_15385__$1;
(statearr_15548_18293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (38))){
var inst_15358 = (state_15385[(2)]);
var state_15385__$1 = state_15385;
var statearr_15551_18294 = state_15385__$1;
(statearr_15551_18294[(2)] = inst_15358);

(statearr_15551_18294[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (30))){
var state_15385__$1 = state_15385;
var statearr_15553_18295 = state_15385__$1;
(statearr_15553_18295[(2)] = null);

(statearr_15553_18295[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (10))){
var inst_15248 = (state_15385[(13)]);
var inst_15246 = (state_15385[(16)]);
var inst_15256 = cljs.core._nth(inst_15246,inst_15248);
var inst_15257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15256,(0),null);
var inst_15258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15256,(1),null);
var state_15385__$1 = (function (){var statearr_15564 = state_15385;
(statearr_15564[(24)] = inst_15257);

return statearr_15564;
})();
if(cljs.core.truth_(inst_15258)){
var statearr_15565_18296 = state_15385__$1;
(statearr_15565_18296[(1)] = (13));

} else {
var statearr_15566_18297 = state_15385__$1;
(statearr_15566_18297[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (18))){
var inst_15300 = (state_15385[(2)]);
var state_15385__$1 = state_15385;
var statearr_15567_18298 = state_15385__$1;
(statearr_15567_18298[(2)] = inst_15300);

(statearr_15567_18298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (42))){
var state_15385__$1 = state_15385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15385__$1,(45),dchan);
} else {
if((state_val_15387 === (37))){
var inst_15337 = (state_15385[(23)]);
var inst_15236 = (state_15385[(12)]);
var inst_15346 = (state_15385[(22)]);
var inst_15346__$1 = cljs.core.first(inst_15337);
var inst_15347 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15346__$1,inst_15236,done);
var state_15385__$1 = (function (){var statearr_15568 = state_15385;
(statearr_15568[(22)] = inst_15346__$1);

return statearr_15568;
})();
if(cljs.core.truth_(inst_15347)){
var statearr_15569_18307 = state_15385__$1;
(statearr_15569_18307[(1)] = (39));

} else {
var statearr_15570_18308 = state_15385__$1;
(statearr_15570_18308[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (8))){
var inst_15248 = (state_15385[(13)]);
var inst_15247 = (state_15385[(15)]);
var inst_15250 = (inst_15248 < inst_15247);
var inst_15251 = inst_15250;
var state_15385__$1 = state_15385;
if(cljs.core.truth_(inst_15251)){
var statearr_15573_18313 = state_15385__$1;
(statearr_15573_18313[(1)] = (10));

} else {
var statearr_15575_18314 = state_15385__$1;
(statearr_15575_18314[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13563__auto__ = null;
var cljs$core$async$mult_$_state_machine__13563__auto____0 = (function (){
var statearr_15580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15580[(0)] = cljs$core$async$mult_$_state_machine__13563__auto__);

(statearr_15580[(1)] = (1));

return statearr_15580;
});
var cljs$core$async$mult_$_state_machine__13563__auto____1 = (function (state_15385){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_15385);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e15581){var ex__13566__auto__ = e15581;
var statearr_15582_18315 = state_15385;
(statearr_15582_18315[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_15385[(4)]))){
var statearr_15587_18316 = state_15385;
(statearr_15587_18316[(1)] = cljs.core.first((state_15385[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18317 = state_15385;
state_15385 = G__18317;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13563__auto__ = function(state_15385){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13563__auto____1.call(this,state_15385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13563__auto____0;
cljs$core$async$mult_$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13563__auto____1;
return cljs$core$async$mult_$_state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_15589 = f__13874__auto__();
(statearr_15589[(6)] = c__13873__auto___18157);

return statearr_15589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15593 = arguments.length;
switch (G__15593) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18323 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18323(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18329 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18329(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18330 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18330(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18334 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18334(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18341 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18341(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18352 = arguments.length;
var i__5770__auto___18357 = (0);
while(true){
if((i__5770__auto___18357 < len__5769__auto___18352)){
args__5775__auto__.push((arguments[i__5770__auto___18357]));

var G__18360 = (i__5770__auto___18357 + (1));
i__5770__auto___18357 = G__18360;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15634){
var map__15635 = p__15634;
var map__15635__$1 = cljs.core.__destructure_map(map__15635);
var opts = map__15635__$1;
var statearr_15636_18361 = state;
(statearr_15636_18361[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15638_18364 = state;
(statearr_15638_18364[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15640_18366 = state;
(statearr_15640_18366[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15629){
var G__15630 = cljs.core.first(seq15629);
var seq15629__$1 = cljs.core.next(seq15629);
var G__15631 = cljs.core.first(seq15629__$1);
var seq15629__$2 = cljs.core.next(seq15629__$1);
var G__15632 = cljs.core.first(seq15629__$2);
var seq15629__$3 = cljs.core.next(seq15629__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15630,G__15631,G__15632,seq15629__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15661 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15662){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15662 = meta15662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15663,meta15662__$1){
var self__ = this;
var _15663__$1 = this;
return (new cljs.core.async.t_cljs$core$async15661(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15662__$1));
}));

(cljs.core.async.t_cljs$core$async15661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15663){
var self__ = this;
var _15663__$1 = this;
return self__.meta15662;
}));

(cljs.core.async.t_cljs$core$async15661.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15661.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15661.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15661.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15661.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15661.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15661.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15662","meta15662",-211631327,null)], null);
}));

(cljs.core.async.t_cljs$core$async15661.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15661");

(cljs.core.async.t_cljs$core$async15661.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15661");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15661.
 */
cljs.core.async.__GT_t_cljs$core$async15661 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15661(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15662){
return (new cljs.core.async.t_cljs$core$async15661(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15662));
});

}

return (new cljs.core.async.t_cljs$core$async15661(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13873__auto___18390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_15781){
var state_val_15782 = (state_15781[(1)]);
if((state_val_15782 === (7))){
var inst_15729 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
if(cljs.core.truth_(inst_15729)){
var statearr_15789_18394 = state_15781__$1;
(statearr_15789_18394[(1)] = (8));

} else {
var statearr_15790_18396 = state_15781__$1;
(statearr_15790_18396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (20))){
var inst_15722 = (state_15781[(7)]);
var state_15781__$1 = state_15781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15781__$1,(23),out,inst_15722);
} else {
if((state_val_15782 === (1))){
var inst_15703 = calc_state();
var inst_15704 = cljs.core.__destructure_map(inst_15703);
var inst_15705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15704,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15704,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15704,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15708 = inst_15703;
var state_15781__$1 = (function (){var statearr_15795 = state_15781;
(statearr_15795[(8)] = inst_15707);

(statearr_15795[(9)] = inst_15708);

(statearr_15795[(10)] = inst_15706);

(statearr_15795[(11)] = inst_15705);

return statearr_15795;
})();
var statearr_15796_18404 = state_15781__$1;
(statearr_15796_18404[(2)] = null);

(statearr_15796_18404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (24))){
var inst_15712 = (state_15781[(12)]);
var inst_15708 = inst_15712;
var state_15781__$1 = (function (){var statearr_15797 = state_15781;
(statearr_15797[(9)] = inst_15708);

return statearr_15797;
})();
var statearr_15798_18405 = state_15781__$1;
(statearr_15798_18405[(2)] = null);

(statearr_15798_18405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (4))){
var inst_15724 = (state_15781[(13)]);
var inst_15722 = (state_15781[(7)]);
var inst_15721 = (state_15781[(2)]);
var inst_15722__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15721,(0),null);
var inst_15723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15721,(1),null);
var inst_15724__$1 = (inst_15722__$1 == null);
var state_15781__$1 = (function (){var statearr_15800 = state_15781;
(statearr_15800[(14)] = inst_15723);

(statearr_15800[(13)] = inst_15724__$1);

(statearr_15800[(7)] = inst_15722__$1);

return statearr_15800;
})();
if(cljs.core.truth_(inst_15724__$1)){
var statearr_15801_18407 = state_15781__$1;
(statearr_15801_18407[(1)] = (5));

} else {
var statearr_15804_18408 = state_15781__$1;
(statearr_15804_18408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (15))){
var inst_15749 = (state_15781[(15)]);
var inst_15713 = (state_15781[(16)]);
var inst_15749__$1 = cljs.core.empty_QMARK_(inst_15713);
var state_15781__$1 = (function (){var statearr_15808 = state_15781;
(statearr_15808[(15)] = inst_15749__$1);

return statearr_15808;
})();
if(inst_15749__$1){
var statearr_15809_18412 = state_15781__$1;
(statearr_15809_18412[(1)] = (17));

} else {
var statearr_15810_18413 = state_15781__$1;
(statearr_15810_18413[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (21))){
var inst_15712 = (state_15781[(12)]);
var inst_15708 = inst_15712;
var state_15781__$1 = (function (){var statearr_15813 = state_15781;
(statearr_15813[(9)] = inst_15708);

return statearr_15813;
})();
var statearr_15817_18414 = state_15781__$1;
(statearr_15817_18414[(2)] = null);

(statearr_15817_18414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (13))){
var inst_15737 = (state_15781[(2)]);
var inst_15738 = calc_state();
var inst_15708 = inst_15738;
var state_15781__$1 = (function (){var statearr_15820 = state_15781;
(statearr_15820[(9)] = inst_15708);

(statearr_15820[(17)] = inst_15737);

return statearr_15820;
})();
var statearr_15821_18416 = state_15781__$1;
(statearr_15821_18416[(2)] = null);

(statearr_15821_18416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (22))){
var inst_15773 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
var statearr_15824_18418 = state_15781__$1;
(statearr_15824_18418[(2)] = inst_15773);

(statearr_15824_18418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (6))){
var inst_15723 = (state_15781[(14)]);
var inst_15727 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15723,change);
var state_15781__$1 = state_15781;
var statearr_15826_18420 = state_15781__$1;
(statearr_15826_18420[(2)] = inst_15727);

(statearr_15826_18420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (25))){
var state_15781__$1 = state_15781;
var statearr_15827_18422 = state_15781__$1;
(statearr_15827_18422[(2)] = null);

(statearr_15827_18422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (17))){
var inst_15714 = (state_15781[(18)]);
var inst_15723 = (state_15781[(14)]);
var inst_15751 = (inst_15714.cljs$core$IFn$_invoke$arity$1 ? inst_15714.cljs$core$IFn$_invoke$arity$1(inst_15723) : inst_15714.call(null,inst_15723));
var inst_15752 = cljs.core.not(inst_15751);
var state_15781__$1 = state_15781;
var statearr_15838_18423 = state_15781__$1;
(statearr_15838_18423[(2)] = inst_15752);

(statearr_15838_18423[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (3))){
var inst_15777 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15781__$1,inst_15777);
} else {
if((state_val_15782 === (12))){
var state_15781__$1 = state_15781;
var statearr_15843_18425 = state_15781__$1;
(statearr_15843_18425[(2)] = null);

(statearr_15843_18425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (2))){
var inst_15708 = (state_15781[(9)]);
var inst_15712 = (state_15781[(12)]);
var inst_15712__$1 = cljs.core.__destructure_map(inst_15708);
var inst_15713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15712__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15712__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15712__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15781__$1 = (function (){var statearr_15846 = state_15781;
(statearr_15846[(18)] = inst_15714);

(statearr_15846[(16)] = inst_15713);

(statearr_15846[(12)] = inst_15712__$1);

return statearr_15846;
})();
return cljs.core.async.ioc_alts_BANG_(state_15781__$1,(4),inst_15715);
} else {
if((state_val_15782 === (23))){
var inst_15760 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
if(cljs.core.truth_(inst_15760)){
var statearr_15854_18432 = state_15781__$1;
(statearr_15854_18432[(1)] = (24));

} else {
var statearr_15856_18433 = state_15781__$1;
(statearr_15856_18433[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (19))){
var inst_15755 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
var statearr_15857_18434 = state_15781__$1;
(statearr_15857_18434[(2)] = inst_15755);

(statearr_15857_18434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (11))){
var inst_15723 = (state_15781[(14)]);
var inst_15733 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15723);
var state_15781__$1 = state_15781;
var statearr_15868_18435 = state_15781__$1;
(statearr_15868_18435[(2)] = inst_15733);

(statearr_15868_18435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (9))){
var inst_15723 = (state_15781[(14)]);
var inst_15742 = (state_15781[(19)]);
var inst_15713 = (state_15781[(16)]);
var inst_15742__$1 = (inst_15713.cljs$core$IFn$_invoke$arity$1 ? inst_15713.cljs$core$IFn$_invoke$arity$1(inst_15723) : inst_15713.call(null,inst_15723));
var state_15781__$1 = (function (){var statearr_15870 = state_15781;
(statearr_15870[(19)] = inst_15742__$1);

return statearr_15870;
})();
if(cljs.core.truth_(inst_15742__$1)){
var statearr_15871_18439 = state_15781__$1;
(statearr_15871_18439[(1)] = (14));

} else {
var statearr_15872_18440 = state_15781__$1;
(statearr_15872_18440[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (5))){
var inst_15724 = (state_15781[(13)]);
var state_15781__$1 = state_15781;
var statearr_15873_18445 = state_15781__$1;
(statearr_15873_18445[(2)] = inst_15724);

(statearr_15873_18445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (14))){
var inst_15742 = (state_15781[(19)]);
var state_15781__$1 = state_15781;
var statearr_15874_18446 = state_15781__$1;
(statearr_15874_18446[(2)] = inst_15742);

(statearr_15874_18446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (26))){
var inst_15769 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
var statearr_15876_18447 = state_15781__$1;
(statearr_15876_18447[(2)] = inst_15769);

(statearr_15876_18447[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (16))){
var inst_15757 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
if(cljs.core.truth_(inst_15757)){
var statearr_15881_18448 = state_15781__$1;
(statearr_15881_18448[(1)] = (20));

} else {
var statearr_15884_18449 = state_15781__$1;
(statearr_15884_18449[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (10))){
var inst_15775 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
var statearr_15888_18450 = state_15781__$1;
(statearr_15888_18450[(2)] = inst_15775);

(statearr_15888_18450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (18))){
var inst_15749 = (state_15781[(15)]);
var state_15781__$1 = state_15781;
var statearr_15891_18453 = state_15781__$1;
(statearr_15891_18453[(2)] = inst_15749);

(statearr_15891_18453[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (8))){
var inst_15722 = (state_15781[(7)]);
var inst_15731 = (inst_15722 == null);
var state_15781__$1 = state_15781;
if(cljs.core.truth_(inst_15731)){
var statearr_15895_18456 = state_15781__$1;
(statearr_15895_18456[(1)] = (11));

} else {
var statearr_15896_18457 = state_15781__$1;
(statearr_15896_18457[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13563__auto__ = null;
var cljs$core$async$mix_$_state_machine__13563__auto____0 = (function (){
var statearr_15900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15900[(0)] = cljs$core$async$mix_$_state_machine__13563__auto__);

(statearr_15900[(1)] = (1));

return statearr_15900;
});
var cljs$core$async$mix_$_state_machine__13563__auto____1 = (function (state_15781){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_15781);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e15902){var ex__13566__auto__ = e15902;
var statearr_15904_18466 = state_15781;
(statearr_15904_18466[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_15781[(4)]))){
var statearr_15906_18467 = state_15781;
(statearr_15906_18467[(1)] = cljs.core.first((state_15781[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18468 = state_15781;
state_15781 = G__18468;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13563__auto__ = function(state_15781){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13563__auto____1.call(this,state_15781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13563__auto____0;
cljs$core$async$mix_$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13563__auto____1;
return cljs$core$async$mix_$_state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_15907 = f__13874__auto__();
(statearr_15907[(6)] = c__13873__auto___18390);

return statearr_15907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18470 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18470(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18472 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18472(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18476 = (function() {
var G__18477 = null;
var G__18477__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18477__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18477 = function(p,v){
switch(arguments.length){
case 1:
return G__18477__1.call(this,p);
case 2:
return G__18477__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18477.cljs$core$IFn$_invoke$arity$1 = G__18477__1;
G__18477.cljs$core$IFn$_invoke$arity$2 = G__18477__2;
return G__18477;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15947 = arguments.length;
switch (G__15947) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18476(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18476(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15959 = arguments.length;
switch (G__15959) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15957_SHARP_){
if(cljs.core.truth_((p1__15957_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15957_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15957_SHARP_.call(null,topic)))){
return p1__15957_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15957_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15960 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15961){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15961 = meta15961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15962,meta15961__$1){
var self__ = this;
var _15962__$1 = this;
return (new cljs.core.async.t_cljs$core$async15960(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15961__$1));
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15962){
var self__ = this;
var _15962__$1 = this;
return self__.meta15961;
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15961","meta15961",1647603693,null)], null);
}));

(cljs.core.async.t_cljs$core$async15960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15960");

(cljs.core.async.t_cljs$core$async15960.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15960.
 */
cljs.core.async.__GT_t_cljs$core$async15960 = (function cljs$core$async$__GT_t_cljs$core$async15960(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15961){
return (new cljs.core.async.t_cljs$core$async15960(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15961));
});

}

return (new cljs.core.async.t_cljs$core$async15960(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13873__auto___18507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_16100){
var state_val_16101 = (state_16100[(1)]);
if((state_val_16101 === (7))){
var inst_16093 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16107_18510 = state_16100__$1;
(statearr_16107_18510[(2)] = inst_16093);

(statearr_16107_18510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (20))){
var state_16100__$1 = state_16100;
var statearr_16114_18512 = state_16100__$1;
(statearr_16114_18512[(2)] = null);

(statearr_16114_18512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (1))){
var state_16100__$1 = state_16100;
var statearr_16119_18513 = state_16100__$1;
(statearr_16119_18513[(2)] = null);

(statearr_16119_18513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (24))){
var inst_16075 = (state_16100[(7)]);
var inst_16085 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16075);
var state_16100__$1 = state_16100;
var statearr_16130_18515 = state_16100__$1;
(statearr_16130_18515[(2)] = inst_16085);

(statearr_16130_18515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (4))){
var inst_16006 = (state_16100[(8)]);
var inst_16006__$1 = (state_16100[(2)]);
var inst_16007 = (inst_16006__$1 == null);
var state_16100__$1 = (function (){var statearr_16135 = state_16100;
(statearr_16135[(8)] = inst_16006__$1);

return statearr_16135;
})();
if(cljs.core.truth_(inst_16007)){
var statearr_16137_18518 = state_16100__$1;
(statearr_16137_18518[(1)] = (5));

} else {
var statearr_16138_18519 = state_16100__$1;
(statearr_16138_18519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (15))){
var inst_16066 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16141_18520 = state_16100__$1;
(statearr_16141_18520[(2)] = inst_16066);

(statearr_16141_18520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (21))){
var inst_16090 = (state_16100[(2)]);
var state_16100__$1 = (function (){var statearr_16143 = state_16100;
(statearr_16143[(9)] = inst_16090);

return statearr_16143;
})();
var statearr_16144_18522 = state_16100__$1;
(statearr_16144_18522[(2)] = null);

(statearr_16144_18522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (13))){
var inst_16045 = (state_16100[(10)]);
var inst_16048 = cljs.core.chunked_seq_QMARK_(inst_16045);
var state_16100__$1 = state_16100;
if(inst_16048){
var statearr_16152_18528 = state_16100__$1;
(statearr_16152_18528[(1)] = (16));

} else {
var statearr_16155_18529 = state_16100__$1;
(statearr_16155_18529[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (22))){
var inst_16082 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
if(cljs.core.truth_(inst_16082)){
var statearr_16157_18531 = state_16100__$1;
(statearr_16157_18531[(1)] = (23));

} else {
var statearr_16163_18532 = state_16100__$1;
(statearr_16163_18532[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (6))){
var inst_16077 = (state_16100[(11)]);
var inst_16075 = (state_16100[(7)]);
var inst_16006 = (state_16100[(8)]);
var inst_16075__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16006) : topic_fn.call(null,inst_16006));
var inst_16076 = cljs.core.deref(mults);
var inst_16077__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16076,inst_16075__$1);
var state_16100__$1 = (function (){var statearr_16170 = state_16100;
(statearr_16170[(11)] = inst_16077__$1);

(statearr_16170[(7)] = inst_16075__$1);

return statearr_16170;
})();
if(cljs.core.truth_(inst_16077__$1)){
var statearr_16171_18534 = state_16100__$1;
(statearr_16171_18534[(1)] = (19));

} else {
var statearr_16175_18535 = state_16100__$1;
(statearr_16175_18535[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (25))){
var inst_16087 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16182_18537 = state_16100__$1;
(statearr_16182_18537[(2)] = inst_16087);

(statearr_16182_18537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (17))){
var inst_16045 = (state_16100[(10)]);
var inst_16057 = cljs.core.first(inst_16045);
var inst_16058 = cljs.core.async.muxch_STAR_(inst_16057);
var inst_16059 = cljs.core.async.close_BANG_(inst_16058);
var inst_16060 = cljs.core.next(inst_16045);
var inst_16023 = inst_16060;
var inst_16024 = null;
var inst_16025 = (0);
var inst_16026 = (0);
var state_16100__$1 = (function (){var statearr_16189 = state_16100;
(statearr_16189[(12)] = inst_16025);

(statearr_16189[(13)] = inst_16059);

(statearr_16189[(14)] = inst_16024);

(statearr_16189[(15)] = inst_16023);

(statearr_16189[(16)] = inst_16026);

return statearr_16189;
})();
var statearr_16190_18541 = state_16100__$1;
(statearr_16190_18541[(2)] = null);

(statearr_16190_18541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (3))){
var inst_16095 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16100__$1,inst_16095);
} else {
if((state_val_16101 === (12))){
var inst_16068 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16198_18546 = state_16100__$1;
(statearr_16198_18546[(2)] = inst_16068);

(statearr_16198_18546[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (2))){
var state_16100__$1 = state_16100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16100__$1,(4),ch);
} else {
if((state_val_16101 === (23))){
var state_16100__$1 = state_16100;
var statearr_16201_18554 = state_16100__$1;
(statearr_16201_18554[(2)] = null);

(statearr_16201_18554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (19))){
var inst_16077 = (state_16100[(11)]);
var inst_16006 = (state_16100[(8)]);
var inst_16080 = cljs.core.async.muxch_STAR_(inst_16077);
var state_16100__$1 = state_16100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16100__$1,(22),inst_16080,inst_16006);
} else {
if((state_val_16101 === (11))){
var inst_16023 = (state_16100[(15)]);
var inst_16045 = (state_16100[(10)]);
var inst_16045__$1 = cljs.core.seq(inst_16023);
var state_16100__$1 = (function (){var statearr_16209 = state_16100;
(statearr_16209[(10)] = inst_16045__$1);

return statearr_16209;
})();
if(inst_16045__$1){
var statearr_16210_18567 = state_16100__$1;
(statearr_16210_18567[(1)] = (13));

} else {
var statearr_16215_18568 = state_16100__$1;
(statearr_16215_18568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (9))){
var inst_16070 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16217_18570 = state_16100__$1;
(statearr_16217_18570[(2)] = inst_16070);

(statearr_16217_18570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (5))){
var inst_16020 = cljs.core.deref(mults);
var inst_16021 = cljs.core.vals(inst_16020);
var inst_16022 = cljs.core.seq(inst_16021);
var inst_16023 = inst_16022;
var inst_16024 = null;
var inst_16025 = (0);
var inst_16026 = (0);
var state_16100__$1 = (function (){var statearr_16221 = state_16100;
(statearr_16221[(12)] = inst_16025);

(statearr_16221[(14)] = inst_16024);

(statearr_16221[(15)] = inst_16023);

(statearr_16221[(16)] = inst_16026);

return statearr_16221;
})();
var statearr_16227_18578 = state_16100__$1;
(statearr_16227_18578[(2)] = null);

(statearr_16227_18578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (14))){
var state_16100__$1 = state_16100;
var statearr_16235_18582 = state_16100__$1;
(statearr_16235_18582[(2)] = null);

(statearr_16235_18582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (16))){
var inst_16045 = (state_16100[(10)]);
var inst_16050 = cljs.core.chunk_first(inst_16045);
var inst_16051 = cljs.core.chunk_rest(inst_16045);
var inst_16052 = cljs.core.count(inst_16050);
var inst_16023 = inst_16051;
var inst_16024 = inst_16050;
var inst_16025 = inst_16052;
var inst_16026 = (0);
var state_16100__$1 = (function (){var statearr_16244 = state_16100;
(statearr_16244[(12)] = inst_16025);

(statearr_16244[(14)] = inst_16024);

(statearr_16244[(15)] = inst_16023);

(statearr_16244[(16)] = inst_16026);

return statearr_16244;
})();
var statearr_16245_18587 = state_16100__$1;
(statearr_16245_18587[(2)] = null);

(statearr_16245_18587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (10))){
var inst_16025 = (state_16100[(12)]);
var inst_16024 = (state_16100[(14)]);
var inst_16023 = (state_16100[(15)]);
var inst_16026 = (state_16100[(16)]);
var inst_16032 = cljs.core._nth(inst_16024,inst_16026);
var inst_16033 = cljs.core.async.muxch_STAR_(inst_16032);
var inst_16034 = cljs.core.async.close_BANG_(inst_16033);
var inst_16035 = (inst_16026 + (1));
var tmp16231 = inst_16025;
var tmp16232 = inst_16024;
var tmp16233 = inst_16023;
var inst_16023__$1 = tmp16233;
var inst_16024__$1 = tmp16232;
var inst_16025__$1 = tmp16231;
var inst_16026__$1 = inst_16035;
var state_16100__$1 = (function (){var statearr_16255 = state_16100;
(statearr_16255[(12)] = inst_16025__$1);

(statearr_16255[(14)] = inst_16024__$1);

(statearr_16255[(15)] = inst_16023__$1);

(statearr_16255[(16)] = inst_16026__$1);

(statearr_16255[(17)] = inst_16034);

return statearr_16255;
})();
var statearr_16260_18598 = state_16100__$1;
(statearr_16260_18598[(2)] = null);

(statearr_16260_18598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (18))){
var inst_16063 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16267_18600 = state_16100__$1;
(statearr_16267_18600[(2)] = inst_16063);

(statearr_16267_18600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (8))){
var inst_16025 = (state_16100[(12)]);
var inst_16026 = (state_16100[(16)]);
var inst_16029 = (inst_16026 < inst_16025);
var inst_16030 = inst_16029;
var state_16100__$1 = state_16100;
if(cljs.core.truth_(inst_16030)){
var statearr_16271_18601 = state_16100__$1;
(statearr_16271_18601[(1)] = (10));

} else {
var statearr_16276_18602 = state_16100__$1;
(statearr_16276_18602[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_16281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16281[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_16281[(1)] = (1));

return statearr_16281;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_16100){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_16100);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e16284){var ex__13566__auto__ = e16284;
var statearr_16285_18619 = state_16100;
(statearr_16285_18619[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_16100[(4)]))){
var statearr_16290_18620 = state_16100;
(statearr_16290_18620[(1)] = cljs.core.first((state_16100[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18622 = state_16100;
state_16100 = G__18622;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_16100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_16100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_16297 = f__13874__auto__();
(statearr_16297[(6)] = c__13873__auto___18507);

return statearr_16297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16316 = arguments.length;
switch (G__16316) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16326 = arguments.length;
switch (G__16326) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16337 = arguments.length;
switch (G__16337) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13873__auto___18643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_16397){
var state_val_16398 = (state_16397[(1)]);
if((state_val_16398 === (7))){
var state_16397__$1 = state_16397;
var statearr_16403_18644 = state_16397__$1;
(statearr_16403_18644[(2)] = null);

(statearr_16403_18644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (1))){
var state_16397__$1 = state_16397;
var statearr_16404_18645 = state_16397__$1;
(statearr_16404_18645[(2)] = null);

(statearr_16404_18645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (4))){
var inst_16355 = (state_16397[(7)]);
var inst_16356 = (state_16397[(8)]);
var inst_16358 = (inst_16356 < inst_16355);
var state_16397__$1 = state_16397;
if(cljs.core.truth_(inst_16358)){
var statearr_16408_18647 = state_16397__$1;
(statearr_16408_18647[(1)] = (6));

} else {
var statearr_16409_18650 = state_16397__$1;
(statearr_16409_18650[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (15))){
var inst_16383 = (state_16397[(9)]);
var inst_16388 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16383);
var state_16397__$1 = state_16397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16397__$1,(17),out,inst_16388);
} else {
if((state_val_16398 === (13))){
var inst_16383 = (state_16397[(9)]);
var inst_16383__$1 = (state_16397[(2)]);
var inst_16384 = cljs.core.some(cljs.core.nil_QMARK_,inst_16383__$1);
var state_16397__$1 = (function (){var statearr_16413 = state_16397;
(statearr_16413[(9)] = inst_16383__$1);

return statearr_16413;
})();
if(cljs.core.truth_(inst_16384)){
var statearr_16414_18663 = state_16397__$1;
(statearr_16414_18663[(1)] = (14));

} else {
var statearr_16415_18664 = state_16397__$1;
(statearr_16415_18664[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (6))){
var state_16397__$1 = state_16397;
var statearr_16416_18666 = state_16397__$1;
(statearr_16416_18666[(2)] = null);

(statearr_16416_18666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (17))){
var inst_16390 = (state_16397[(2)]);
var state_16397__$1 = (function (){var statearr_16426 = state_16397;
(statearr_16426[(10)] = inst_16390);

return statearr_16426;
})();
var statearr_16427_18667 = state_16397__$1;
(statearr_16427_18667[(2)] = null);

(statearr_16427_18667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (3))){
var inst_16395 = (state_16397[(2)]);
var state_16397__$1 = state_16397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16397__$1,inst_16395);
} else {
if((state_val_16398 === (12))){
var _ = (function (){var statearr_16431 = state_16397;
(statearr_16431[(4)] = cljs.core.rest((state_16397[(4)])));

return statearr_16431;
})();
var state_16397__$1 = state_16397;
var ex16425 = (state_16397__$1[(2)]);
var statearr_16432_18673 = state_16397__$1;
(statearr_16432_18673[(5)] = ex16425);


if((ex16425 instanceof Object)){
var statearr_16437_18676 = state_16397__$1;
(statearr_16437_18676[(1)] = (11));

(statearr_16437_18676[(5)] = null);

} else {
throw ex16425;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (2))){
var inst_16354 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16355 = cnt;
var inst_16356 = (0);
var state_16397__$1 = (function (){var statearr_16439 = state_16397;
(statearr_16439[(11)] = inst_16354);

(statearr_16439[(7)] = inst_16355);

(statearr_16439[(8)] = inst_16356);

return statearr_16439;
})();
var statearr_16441_18679 = state_16397__$1;
(statearr_16441_18679[(2)] = null);

(statearr_16441_18679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (11))){
var inst_16362 = (state_16397[(2)]);
var inst_16363 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16397__$1 = (function (){var statearr_16444 = state_16397;
(statearr_16444[(12)] = inst_16362);

return statearr_16444;
})();
var statearr_16445_18685 = state_16397__$1;
(statearr_16445_18685[(2)] = inst_16363);

(statearr_16445_18685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (9))){
var inst_16356 = (state_16397[(8)]);
var _ = (function (){var statearr_16446 = state_16397;
(statearr_16446[(4)] = cljs.core.cons((12),(state_16397[(4)])));

return statearr_16446;
})();
var inst_16369 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16356) : chs__$1.call(null,inst_16356));
var inst_16370 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16356) : done.call(null,inst_16356));
var inst_16371 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16369,inst_16370);
var ___$1 = (function (){var statearr_16447 = state_16397;
(statearr_16447[(4)] = cljs.core.rest((state_16397[(4)])));

return statearr_16447;
})();
var state_16397__$1 = state_16397;
var statearr_16448_18708 = state_16397__$1;
(statearr_16448_18708[(2)] = inst_16371);

(statearr_16448_18708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (5))){
var inst_16381 = (state_16397[(2)]);
var state_16397__$1 = (function (){var statearr_16449 = state_16397;
(statearr_16449[(13)] = inst_16381);

return statearr_16449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16397__$1,(13),dchan);
} else {
if((state_val_16398 === (14))){
var inst_16386 = cljs.core.async.close_BANG_(out);
var state_16397__$1 = state_16397;
var statearr_16450_18720 = state_16397__$1;
(statearr_16450_18720[(2)] = inst_16386);

(statearr_16450_18720[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (16))){
var inst_16393 = (state_16397[(2)]);
var state_16397__$1 = state_16397;
var statearr_16451_18729 = state_16397__$1;
(statearr_16451_18729[(2)] = inst_16393);

(statearr_16451_18729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (10))){
var inst_16356 = (state_16397[(8)]);
var inst_16374 = (state_16397[(2)]);
var inst_16375 = (inst_16356 + (1));
var inst_16356__$1 = inst_16375;
var state_16397__$1 = (function (){var statearr_16452 = state_16397;
(statearr_16452[(8)] = inst_16356__$1);

(statearr_16452[(14)] = inst_16374);

return statearr_16452;
})();
var statearr_16453_18741 = state_16397__$1;
(statearr_16453_18741[(2)] = null);

(statearr_16453_18741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (8))){
var inst_16379 = (state_16397[(2)]);
var state_16397__$1 = state_16397;
var statearr_16456_18744 = state_16397__$1;
(statearr_16456_18744[(2)] = inst_16379);

(statearr_16456_18744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_16459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16459[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_16459[(1)] = (1));

return statearr_16459;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_16397){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_16397);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e16460){var ex__13566__auto__ = e16460;
var statearr_16461_18766 = state_16397;
(statearr_16461_18766[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_16397[(4)]))){
var statearr_16462_18768 = state_16397;
(statearr_16462_18768[(1)] = cljs.core.first((state_16397[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18773 = state_16397;
state_16397 = G__18773;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_16397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_16397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_16463 = f__13874__auto__();
(statearr_16463[(6)] = c__13873__auto___18643);

return statearr_16463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16468 = arguments.length;
switch (G__16468) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13873__auto___18800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_16500){
var state_val_16501 = (state_16500[(1)]);
if((state_val_16501 === (7))){
var inst_16479 = (state_16500[(7)]);
var inst_16480 = (state_16500[(8)]);
var inst_16479__$1 = (state_16500[(2)]);
var inst_16480__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16479__$1,(0),null);
var inst_16481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16479__$1,(1),null);
var inst_16482 = (inst_16480__$1 == null);
var state_16500__$1 = (function (){var statearr_16502 = state_16500;
(statearr_16502[(9)] = inst_16481);

(statearr_16502[(7)] = inst_16479__$1);

(statearr_16502[(8)] = inst_16480__$1);

return statearr_16502;
})();
if(cljs.core.truth_(inst_16482)){
var statearr_16503_18817 = state_16500__$1;
(statearr_16503_18817[(1)] = (8));

} else {
var statearr_16504_18818 = state_16500__$1;
(statearr_16504_18818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (1))){
var inst_16469 = cljs.core.vec(chs);
var inst_16470 = inst_16469;
var state_16500__$1 = (function (){var statearr_16507 = state_16500;
(statearr_16507[(10)] = inst_16470);

return statearr_16507;
})();
var statearr_16508_18827 = state_16500__$1;
(statearr_16508_18827[(2)] = null);

(statearr_16508_18827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (4))){
var inst_16470 = (state_16500[(10)]);
var state_16500__$1 = state_16500;
return cljs.core.async.ioc_alts_BANG_(state_16500__$1,(7),inst_16470);
} else {
if((state_val_16501 === (6))){
var inst_16496 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
var statearr_16509_18833 = state_16500__$1;
(statearr_16509_18833[(2)] = inst_16496);

(statearr_16509_18833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (3))){
var inst_16498 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16500__$1,inst_16498);
} else {
if((state_val_16501 === (2))){
var inst_16470 = (state_16500[(10)]);
var inst_16472 = cljs.core.count(inst_16470);
var inst_16473 = (inst_16472 > (0));
var state_16500__$1 = state_16500;
if(cljs.core.truth_(inst_16473)){
var statearr_16515_18848 = state_16500__$1;
(statearr_16515_18848[(1)] = (4));

} else {
var statearr_16517_18852 = state_16500__$1;
(statearr_16517_18852[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (11))){
var inst_16470 = (state_16500[(10)]);
var inst_16489 = (state_16500[(2)]);
var tmp16510 = inst_16470;
var inst_16470__$1 = tmp16510;
var state_16500__$1 = (function (){var statearr_16518 = state_16500;
(statearr_16518[(10)] = inst_16470__$1);

(statearr_16518[(11)] = inst_16489);

return statearr_16518;
})();
var statearr_16519_18854 = state_16500__$1;
(statearr_16519_18854[(2)] = null);

(statearr_16519_18854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (9))){
var inst_16480 = (state_16500[(8)]);
var state_16500__$1 = state_16500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16500__$1,(11),out,inst_16480);
} else {
if((state_val_16501 === (5))){
var inst_16494 = cljs.core.async.close_BANG_(out);
var state_16500__$1 = state_16500;
var statearr_16529_18877 = state_16500__$1;
(statearr_16529_18877[(2)] = inst_16494);

(statearr_16529_18877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (10))){
var inst_16492 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
var statearr_16531_18882 = state_16500__$1;
(statearr_16531_18882[(2)] = inst_16492);

(statearr_16531_18882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (8))){
var inst_16470 = (state_16500[(10)]);
var inst_16481 = (state_16500[(9)]);
var inst_16479 = (state_16500[(7)]);
var inst_16480 = (state_16500[(8)]);
var inst_16484 = (function (){var cs = inst_16470;
var vec__16475 = inst_16479;
var v = inst_16480;
var c = inst_16481;
return (function (p1__16466_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16466_SHARP_);
});
})();
var inst_16485 = cljs.core.filterv(inst_16484,inst_16470);
var inst_16470__$1 = inst_16485;
var state_16500__$1 = (function (){var statearr_16532 = state_16500;
(statearr_16532[(10)] = inst_16470__$1);

return statearr_16532;
})();
var statearr_16536_18911 = state_16500__$1;
(statearr_16536_18911[(2)] = null);

(statearr_16536_18911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_16539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16539[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_16539[(1)] = (1));

return statearr_16539;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_16500){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_16500);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e16541){var ex__13566__auto__ = e16541;
var statearr_16543_18930 = state_16500;
(statearr_16543_18930[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_16500[(4)]))){
var statearr_16544_18931 = state_16500;
(statearr_16544_18931[(1)] = cljs.core.first((state_16500[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18937 = state_16500;
state_16500 = G__18937;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_16500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_16500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_16547 = f__13874__auto__();
(statearr_16547[(6)] = c__13873__auto___18800);

return statearr_16547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16556 = arguments.length;
switch (G__16556) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13873__auto___18964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_16609){
var state_val_16610 = (state_16609[(1)]);
if((state_val_16610 === (7))){
var inst_16585 = (state_16609[(7)]);
var inst_16585__$1 = (state_16609[(2)]);
var inst_16586 = (inst_16585__$1 == null);
var inst_16587 = cljs.core.not(inst_16586);
var state_16609__$1 = (function (){var statearr_16617 = state_16609;
(statearr_16617[(7)] = inst_16585__$1);

return statearr_16617;
})();
if(inst_16587){
var statearr_16618_18968 = state_16609__$1;
(statearr_16618_18968[(1)] = (8));

} else {
var statearr_16621_18970 = state_16609__$1;
(statearr_16621_18970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (1))){
var inst_16573 = (0);
var state_16609__$1 = (function (){var statearr_16623 = state_16609;
(statearr_16623[(8)] = inst_16573);

return statearr_16623;
})();
var statearr_16624_18976 = state_16609__$1;
(statearr_16624_18976[(2)] = null);

(statearr_16624_18976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (4))){
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16609__$1,(7),ch);
} else {
if((state_val_16610 === (6))){
var inst_16604 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16635_18985 = state_16609__$1;
(statearr_16635_18985[(2)] = inst_16604);

(statearr_16635_18985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (3))){
var inst_16606 = (state_16609[(2)]);
var inst_16607 = cljs.core.async.close_BANG_(out);
var state_16609__$1 = (function (){var statearr_16636 = state_16609;
(statearr_16636[(9)] = inst_16606);

return statearr_16636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16609__$1,inst_16607);
} else {
if((state_val_16610 === (2))){
var inst_16573 = (state_16609[(8)]);
var inst_16575 = (inst_16573 < n);
var state_16609__$1 = state_16609;
if(cljs.core.truth_(inst_16575)){
var statearr_16640_18990 = state_16609__$1;
(statearr_16640_18990[(1)] = (4));

} else {
var statearr_16641_18991 = state_16609__$1;
(statearr_16641_18991[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (11))){
var inst_16573 = (state_16609[(8)]);
var inst_16596 = (state_16609[(2)]);
var inst_16597 = (inst_16573 + (1));
var inst_16573__$1 = inst_16597;
var state_16609__$1 = (function (){var statearr_16646 = state_16609;
(statearr_16646[(8)] = inst_16573__$1);

(statearr_16646[(10)] = inst_16596);

return statearr_16646;
})();
var statearr_16650_18996 = state_16609__$1;
(statearr_16650_18996[(2)] = null);

(statearr_16650_18996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (9))){
var state_16609__$1 = state_16609;
var statearr_16656_18997 = state_16609__$1;
(statearr_16656_18997[(2)] = null);

(statearr_16656_18997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (5))){
var state_16609__$1 = state_16609;
var statearr_16659_19002 = state_16609__$1;
(statearr_16659_19002[(2)] = null);

(statearr_16659_19002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (10))){
var inst_16601 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16663_19005 = state_16609__$1;
(statearr_16663_19005[(2)] = inst_16601);

(statearr_16663_19005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (8))){
var inst_16585 = (state_16609[(7)]);
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16609__$1,(11),out,inst_16585);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_16667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16667[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_16667[(1)] = (1));

return statearr_16667;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_16609){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_16609);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e16672){var ex__13566__auto__ = e16672;
var statearr_16674_19011 = state_16609;
(statearr_16674_19011[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_16609[(4)]))){
var statearr_16679_19014 = state_16609;
(statearr_16679_19014[(1)] = cljs.core.first((state_16609[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19015 = state_16609;
state_16609 = G__19015;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_16609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_16609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_16683 = f__13874__auto__();
(statearr_16683[(6)] = c__13873__auto___18964);

return statearr_16683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16698 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16698 = (function (f,ch,meta16699){
this.f = f;
this.ch = ch;
this.meta16699 = meta16699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16700,meta16699__$1){
var self__ = this;
var _16700__$1 = this;
return (new cljs.core.async.t_cljs$core$async16698(self__.f,self__.ch,meta16699__$1));
}));

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16700){
var self__ = this;
var _16700__$1 = this;
return self__.meta16699;
}));

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16716 = (function (f,ch,meta16699,_,fn1,meta16717){
this.f = f;
this.ch = ch;
this.meta16699 = meta16699;
this._ = _;
this.fn1 = fn1;
this.meta16717 = meta16717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16718,meta16717__$1){
var self__ = this;
var _16718__$1 = this;
return (new cljs.core.async.t_cljs$core$async16716(self__.f,self__.ch,self__.meta16699,self__._,self__.fn1,meta16717__$1));
}));

(cljs.core.async.t_cljs$core$async16716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16718){
var self__ = this;
var _16718__$1 = this;
return self__.meta16717;
}));

(cljs.core.async.t_cljs$core$async16716.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16716.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16695_SHARP_){
var G__16736 = (((p1__16695_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16695_SHARP_) : self__.f.call(null,p1__16695_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16736) : f1.call(null,G__16736));
});
}));

(cljs.core.async.t_cljs$core$async16716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16699","meta16699",1569251947,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16698","cljs.core.async/t_cljs$core$async16698",436205962,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16717","meta16717",-795838535,null)], null);
}));

(cljs.core.async.t_cljs$core$async16716.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16716");

(cljs.core.async.t_cljs$core$async16716.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16716");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16716.
 */
cljs.core.async.__GT_t_cljs$core$async16716 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16716(f__$1,ch__$1,meta16699__$1,___$2,fn1__$1,meta16717){
return (new cljs.core.async.t_cljs$core$async16716(f__$1,ch__$1,meta16699__$1,___$2,fn1__$1,meta16717));
});

}

return (new cljs.core.async.t_cljs$core$async16716(self__.f,self__.ch,self__.meta16699,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16742 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16742) : self__.f.call(null,G__16742));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16699","meta16699",1569251947,null)], null);
}));

(cljs.core.async.t_cljs$core$async16698.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16698");

(cljs.core.async.t_cljs$core$async16698.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16698");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16698.
 */
cljs.core.async.__GT_t_cljs$core$async16698 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16698(f__$1,ch__$1,meta16699){
return (new cljs.core.async.t_cljs$core$async16698(f__$1,ch__$1,meta16699));
});

}

return (new cljs.core.async.t_cljs$core$async16698(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16761 = (function (f,ch,meta16762){
this.f = f;
this.ch = ch;
this.meta16762 = meta16762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16763,meta16762__$1){
var self__ = this;
var _16763__$1 = this;
return (new cljs.core.async.t_cljs$core$async16761(self__.f,self__.ch,meta16762__$1));
}));

(cljs.core.async.t_cljs$core$async16761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16763){
var self__ = this;
var _16763__$1 = this;
return self__.meta16762;
}));

(cljs.core.async.t_cljs$core$async16761.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16761.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16761.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16762","meta16762",-431550513,null)], null);
}));

(cljs.core.async.t_cljs$core$async16761.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16761");

(cljs.core.async.t_cljs$core$async16761.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16761");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16761.
 */
cljs.core.async.__GT_t_cljs$core$async16761 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16761(f__$1,ch__$1,meta16762){
return (new cljs.core.async.t_cljs$core$async16761(f__$1,ch__$1,meta16762));
});

}

return (new cljs.core.async.t_cljs$core$async16761(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16798 = (function (p,ch,meta16799){
this.p = p;
this.ch = ch;
this.meta16799 = meta16799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16800,meta16799__$1){
var self__ = this;
var _16800__$1 = this;
return (new cljs.core.async.t_cljs$core$async16798(self__.p,self__.ch,meta16799__$1));
}));

(cljs.core.async.t_cljs$core$async16798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16800){
var self__ = this;
var _16800__$1 = this;
return self__.meta16799;
}));

(cljs.core.async.t_cljs$core$async16798.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16798.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16798.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16798.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16798.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16798.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16798.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16799","meta16799",1899190250,null)], null);
}));

(cljs.core.async.t_cljs$core$async16798.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16798");

(cljs.core.async.t_cljs$core$async16798.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16798");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16798.
 */
cljs.core.async.__GT_t_cljs$core$async16798 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16798(p__$1,ch__$1,meta16799){
return (new cljs.core.async.t_cljs$core$async16798(p__$1,ch__$1,meta16799));
});

}

return (new cljs.core.async.t_cljs$core$async16798(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16828 = arguments.length;
switch (G__16828) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13873__auto___19191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_16871){
var state_val_16872 = (state_16871[(1)]);
if((state_val_16872 === (7))){
var inst_16865 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
var statearr_16895_19195 = state_16871__$1;
(statearr_16895_19195[(2)] = inst_16865);

(statearr_16895_19195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (1))){
var state_16871__$1 = state_16871;
var statearr_16914_19199 = state_16871__$1;
(statearr_16914_19199[(2)] = null);

(statearr_16914_19199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (4))){
var inst_16844 = (state_16871[(7)]);
var inst_16844__$1 = (state_16871[(2)]);
var inst_16845 = (inst_16844__$1 == null);
var state_16871__$1 = (function (){var statearr_16921 = state_16871;
(statearr_16921[(7)] = inst_16844__$1);

return statearr_16921;
})();
if(cljs.core.truth_(inst_16845)){
var statearr_16922_19205 = state_16871__$1;
(statearr_16922_19205[(1)] = (5));

} else {
var statearr_16923_19206 = state_16871__$1;
(statearr_16923_19206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (6))){
var inst_16844 = (state_16871[(7)]);
var inst_16851 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16844) : p.call(null,inst_16844));
var state_16871__$1 = state_16871;
if(cljs.core.truth_(inst_16851)){
var statearr_16931_19210 = state_16871__$1;
(statearr_16931_19210[(1)] = (8));

} else {
var statearr_16934_19212 = state_16871__$1;
(statearr_16934_19212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (3))){
var inst_16868 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16871__$1,inst_16868);
} else {
if((state_val_16872 === (2))){
var state_16871__$1 = state_16871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16871__$1,(4),ch);
} else {
if((state_val_16872 === (11))){
var inst_16858 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
var statearr_16945_19221 = state_16871__$1;
(statearr_16945_19221[(2)] = inst_16858);

(statearr_16945_19221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (9))){
var state_16871__$1 = state_16871;
var statearr_16946_19229 = state_16871__$1;
(statearr_16946_19229[(2)] = null);

(statearr_16946_19229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (5))){
var inst_16847 = cljs.core.async.close_BANG_(out);
var state_16871__$1 = state_16871;
var statearr_16947_19230 = state_16871__$1;
(statearr_16947_19230[(2)] = inst_16847);

(statearr_16947_19230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (10))){
var inst_16861 = (state_16871[(2)]);
var state_16871__$1 = (function (){var statearr_16948 = state_16871;
(statearr_16948[(8)] = inst_16861);

return statearr_16948;
})();
var statearr_16949_19237 = state_16871__$1;
(statearr_16949_19237[(2)] = null);

(statearr_16949_19237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (8))){
var inst_16844 = (state_16871[(7)]);
var state_16871__$1 = state_16871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16871__$1,(11),out,inst_16844);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_16952 = [null,null,null,null,null,null,null,null,null];
(statearr_16952[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_16952[(1)] = (1));

return statearr_16952;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_16871){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_16871);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e16953){var ex__13566__auto__ = e16953;
var statearr_16954_19251 = state_16871;
(statearr_16954_19251[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_16871[(4)]))){
var statearr_16955_19252 = state_16871;
(statearr_16955_19252[(1)] = cljs.core.first((state_16871[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19256 = state_16871;
state_16871 = G__19256;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_16871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_16871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_16958 = f__13874__auto__();
(statearr_16958[(6)] = c__13873__auto___19191);

return statearr_16958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16961 = arguments.length;
switch (G__16961) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13873__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_17051){
var state_val_17052 = (state_17051[(1)]);
if((state_val_17052 === (7))){
var inst_17047 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17053_19285 = state_17051__$1;
(statearr_17053_19285[(2)] = inst_17047);

(statearr_17053_19285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (20))){
var inst_17008 = (state_17051[(7)]);
var inst_17028 = (state_17051[(2)]);
var inst_17029 = cljs.core.next(inst_17008);
var inst_16994 = inst_17029;
var inst_16995 = null;
var inst_16996 = (0);
var inst_16997 = (0);
var state_17051__$1 = (function (){var statearr_17054 = state_17051;
(statearr_17054[(8)] = inst_16996);

(statearr_17054[(9)] = inst_17028);

(statearr_17054[(10)] = inst_16997);

(statearr_17054[(11)] = inst_16994);

(statearr_17054[(12)] = inst_16995);

return statearr_17054;
})();
var statearr_17056_19293 = state_17051__$1;
(statearr_17056_19293[(2)] = null);

(statearr_17056_19293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (1))){
var state_17051__$1 = state_17051;
var statearr_17057_19295 = state_17051__$1;
(statearr_17057_19295[(2)] = null);

(statearr_17057_19295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (4))){
var inst_16977 = (state_17051[(13)]);
var inst_16977__$1 = (state_17051[(2)]);
var inst_16978 = (inst_16977__$1 == null);
var state_17051__$1 = (function (){var statearr_17058 = state_17051;
(statearr_17058[(13)] = inst_16977__$1);

return statearr_17058;
})();
if(cljs.core.truth_(inst_16978)){
var statearr_17060_19297 = state_17051__$1;
(statearr_17060_19297[(1)] = (5));

} else {
var statearr_17061_19300 = state_17051__$1;
(statearr_17061_19300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (15))){
var state_17051__$1 = state_17051;
var statearr_17065_19306 = state_17051__$1;
(statearr_17065_19306[(2)] = null);

(statearr_17065_19306[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (21))){
var state_17051__$1 = state_17051;
var statearr_17066_19307 = state_17051__$1;
(statearr_17066_19307[(2)] = null);

(statearr_17066_19307[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (13))){
var inst_16996 = (state_17051[(8)]);
var inst_16997 = (state_17051[(10)]);
var inst_16994 = (state_17051[(11)]);
var inst_16995 = (state_17051[(12)]);
var inst_17004 = (state_17051[(2)]);
var inst_17005 = (inst_16997 + (1));
var tmp17062 = inst_16996;
var tmp17063 = inst_16994;
var tmp17064 = inst_16995;
var inst_16994__$1 = tmp17063;
var inst_16995__$1 = tmp17064;
var inst_16996__$1 = tmp17062;
var inst_16997__$1 = inst_17005;
var state_17051__$1 = (function (){var statearr_17069 = state_17051;
(statearr_17069[(8)] = inst_16996__$1);

(statearr_17069[(10)] = inst_16997__$1);

(statearr_17069[(14)] = inst_17004);

(statearr_17069[(11)] = inst_16994__$1);

(statearr_17069[(12)] = inst_16995__$1);

return statearr_17069;
})();
var statearr_17070_19325 = state_17051__$1;
(statearr_17070_19325[(2)] = null);

(statearr_17070_19325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (22))){
var state_17051__$1 = state_17051;
var statearr_17071_19328 = state_17051__$1;
(statearr_17071_19328[(2)] = null);

(statearr_17071_19328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (6))){
var inst_16977 = (state_17051[(13)]);
var inst_16988 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16977) : f.call(null,inst_16977));
var inst_16989 = cljs.core.seq(inst_16988);
var inst_16994 = inst_16989;
var inst_16995 = null;
var inst_16996 = (0);
var inst_16997 = (0);
var state_17051__$1 = (function (){var statearr_17073 = state_17051;
(statearr_17073[(8)] = inst_16996);

(statearr_17073[(10)] = inst_16997);

(statearr_17073[(11)] = inst_16994);

(statearr_17073[(12)] = inst_16995);

return statearr_17073;
})();
var statearr_17074_19345 = state_17051__$1;
(statearr_17074_19345[(2)] = null);

(statearr_17074_19345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (17))){
var inst_17008 = (state_17051[(7)]);
var inst_17020 = cljs.core.chunk_first(inst_17008);
var inst_17021 = cljs.core.chunk_rest(inst_17008);
var inst_17022 = cljs.core.count(inst_17020);
var inst_16994 = inst_17021;
var inst_16995 = inst_17020;
var inst_16996 = inst_17022;
var inst_16997 = (0);
var state_17051__$1 = (function (){var statearr_17075 = state_17051;
(statearr_17075[(8)] = inst_16996);

(statearr_17075[(10)] = inst_16997);

(statearr_17075[(11)] = inst_16994);

(statearr_17075[(12)] = inst_16995);

return statearr_17075;
})();
var statearr_17078_19360 = state_17051__$1;
(statearr_17078_19360[(2)] = null);

(statearr_17078_19360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (3))){
var inst_17049 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17051__$1,inst_17049);
} else {
if((state_val_17052 === (12))){
var inst_17037 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17079_19365 = state_17051__$1;
(statearr_17079_19365[(2)] = inst_17037);

(statearr_17079_19365[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (2))){
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17051__$1,(4),in$);
} else {
if((state_val_17052 === (23))){
var inst_17045 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17080_19369 = state_17051__$1;
(statearr_17080_19369[(2)] = inst_17045);

(statearr_17080_19369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (19))){
var inst_17032 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17081_19372 = state_17051__$1;
(statearr_17081_19372[(2)] = inst_17032);

(statearr_17081_19372[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (11))){
var inst_17008 = (state_17051[(7)]);
var inst_16994 = (state_17051[(11)]);
var inst_17008__$1 = cljs.core.seq(inst_16994);
var state_17051__$1 = (function (){var statearr_17083 = state_17051;
(statearr_17083[(7)] = inst_17008__$1);

return statearr_17083;
})();
if(inst_17008__$1){
var statearr_17084_19381 = state_17051__$1;
(statearr_17084_19381[(1)] = (14));

} else {
var statearr_17085_19382 = state_17051__$1;
(statearr_17085_19382[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (9))){
var inst_17039 = (state_17051[(2)]);
var inst_17040 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17051__$1 = (function (){var statearr_17086 = state_17051;
(statearr_17086[(15)] = inst_17039);

return statearr_17086;
})();
if(cljs.core.truth_(inst_17040)){
var statearr_17087_19392 = state_17051__$1;
(statearr_17087_19392[(1)] = (21));

} else {
var statearr_17088_19394 = state_17051__$1;
(statearr_17088_19394[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (5))){
var inst_16982 = cljs.core.async.close_BANG_(out);
var state_17051__$1 = state_17051;
var statearr_17089_19397 = state_17051__$1;
(statearr_17089_19397[(2)] = inst_16982);

(statearr_17089_19397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (14))){
var inst_17008 = (state_17051[(7)]);
var inst_17018 = cljs.core.chunked_seq_QMARK_(inst_17008);
var state_17051__$1 = state_17051;
if(inst_17018){
var statearr_17090_19400 = state_17051__$1;
(statearr_17090_19400[(1)] = (17));

} else {
var statearr_17092_19402 = state_17051__$1;
(statearr_17092_19402[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (16))){
var inst_17035 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17093_19405 = state_17051__$1;
(statearr_17093_19405[(2)] = inst_17035);

(statearr_17093_19405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (10))){
var inst_16997 = (state_17051[(10)]);
var inst_16995 = (state_17051[(12)]);
var inst_17002 = cljs.core._nth(inst_16995,inst_16997);
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17051__$1,(13),out,inst_17002);
} else {
if((state_val_17052 === (18))){
var inst_17008 = (state_17051[(7)]);
var inst_17025 = cljs.core.first(inst_17008);
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17051__$1,(20),out,inst_17025);
} else {
if((state_val_17052 === (8))){
var inst_16996 = (state_17051[(8)]);
var inst_16997 = (state_17051[(10)]);
var inst_16999 = (inst_16997 < inst_16996);
var inst_17000 = inst_16999;
var state_17051__$1 = state_17051;
if(cljs.core.truth_(inst_17000)){
var statearr_17095_19407 = state_17051__$1;
(statearr_17095_19407[(1)] = (10));

} else {
var statearr_17096_19408 = state_17051__$1;
(statearr_17096_19408[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13563__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13563__auto____0 = (function (){
var statearr_17101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17101[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13563__auto__);

(statearr_17101[(1)] = (1));

return statearr_17101;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13563__auto____1 = (function (state_17051){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_17051);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e17102){var ex__13566__auto__ = e17102;
var statearr_17105_19413 = state_17051;
(statearr_17105_19413[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_17051[(4)]))){
var statearr_17106_19415 = state_17051;
(statearr_17106_19415[(1)] = cljs.core.first((state_17051[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19416 = state_17051;
state_17051 = G__19416;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13563__auto__ = function(state_17051){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13563__auto____1.call(this,state_17051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13563__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13563__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_17115 = f__13874__auto__();
(statearr_17115[(6)] = c__13873__auto__);

return statearr_17115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));

return c__13873__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17125 = arguments.length;
switch (G__17125) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17131 = arguments.length;
switch (G__17131) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17139 = arguments.length;
switch (G__17139) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13873__auto___19453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_17170){
var state_val_17171 = (state_17170[(1)]);
if((state_val_17171 === (7))){
var inst_17165 = (state_17170[(2)]);
var state_17170__$1 = state_17170;
var statearr_17172_19465 = state_17170__$1;
(statearr_17172_19465[(2)] = inst_17165);

(statearr_17172_19465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17171 === (1))){
var inst_17147 = null;
var state_17170__$1 = (function (){var statearr_17181 = state_17170;
(statearr_17181[(7)] = inst_17147);

return statearr_17181;
})();
var statearr_17182_19477 = state_17170__$1;
(statearr_17182_19477[(2)] = null);

(statearr_17182_19477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17171 === (4))){
var inst_17150 = (state_17170[(8)]);
var inst_17150__$1 = (state_17170[(2)]);
var inst_17151 = (inst_17150__$1 == null);
var inst_17152 = cljs.core.not(inst_17151);
var state_17170__$1 = (function (){var statearr_17189 = state_17170;
(statearr_17189[(8)] = inst_17150__$1);

return statearr_17189;
})();
if(inst_17152){
var statearr_17190_19492 = state_17170__$1;
(statearr_17190_19492[(1)] = (5));

} else {
var statearr_17197_19494 = state_17170__$1;
(statearr_17197_19494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17171 === (6))){
var state_17170__$1 = state_17170;
var statearr_17198_19503 = state_17170__$1;
(statearr_17198_19503[(2)] = null);

(statearr_17198_19503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17171 === (3))){
var inst_17167 = (state_17170[(2)]);
var inst_17168 = cljs.core.async.close_BANG_(out);
var state_17170__$1 = (function (){var statearr_17202 = state_17170;
(statearr_17202[(9)] = inst_17167);

return statearr_17202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17170__$1,inst_17168);
} else {
if((state_val_17171 === (2))){
var state_17170__$1 = state_17170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17170__$1,(4),ch);
} else {
if((state_val_17171 === (11))){
var inst_17150 = (state_17170[(8)]);
var inst_17159 = (state_17170[(2)]);
var inst_17147 = inst_17150;
var state_17170__$1 = (function (){var statearr_17207 = state_17170;
(statearr_17207[(7)] = inst_17147);

(statearr_17207[(10)] = inst_17159);

return statearr_17207;
})();
var statearr_17216_19535 = state_17170__$1;
(statearr_17216_19535[(2)] = null);

(statearr_17216_19535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17171 === (9))){
var inst_17150 = (state_17170[(8)]);
var state_17170__$1 = state_17170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17170__$1,(11),out,inst_17150);
} else {
if((state_val_17171 === (5))){
var inst_17147 = (state_17170[(7)]);
var inst_17150 = (state_17170[(8)]);
var inst_17154 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17150,inst_17147);
var state_17170__$1 = state_17170;
if(inst_17154){
var statearr_17230_19538 = state_17170__$1;
(statearr_17230_19538[(1)] = (8));

} else {
var statearr_17231_19539 = state_17170__$1;
(statearr_17231_19539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17171 === (10))){
var inst_17162 = (state_17170[(2)]);
var state_17170__$1 = state_17170;
var statearr_17232_19547 = state_17170__$1;
(statearr_17232_19547[(2)] = inst_17162);

(statearr_17232_19547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17171 === (8))){
var inst_17147 = (state_17170[(7)]);
var tmp17223 = inst_17147;
var inst_17147__$1 = tmp17223;
var state_17170__$1 = (function (){var statearr_17233 = state_17170;
(statearr_17233[(7)] = inst_17147__$1);

return statearr_17233;
})();
var statearr_17234_19552 = state_17170__$1;
(statearr_17234_19552[(2)] = null);

(statearr_17234_19552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_17235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17235[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_17235[(1)] = (1));

return statearr_17235;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_17170){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_17170);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e17236){var ex__13566__auto__ = e17236;
var statearr_17237_19563 = state_17170;
(statearr_17237_19563[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_17170[(4)]))){
var statearr_17238_19566 = state_17170;
(statearr_17238_19566[(1)] = cljs.core.first((state_17170[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19575 = state_17170;
state_17170 = G__19575;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_17170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_17170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_17241 = f__13874__auto__();
(statearr_17241[(6)] = c__13873__auto___19453);

return statearr_17241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17248 = arguments.length;
switch (G__17248) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13873__auto___19580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_17290){
var state_val_17291 = (state_17290[(1)]);
if((state_val_17291 === (7))){
var inst_17285 = (state_17290[(2)]);
var state_17290__$1 = state_17290;
var statearr_17292_19583 = state_17290__$1;
(statearr_17292_19583[(2)] = inst_17285);

(statearr_17292_19583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17291 === (1))){
var inst_17252 = (new Array(n));
var inst_17253 = inst_17252;
var inst_17254 = (0);
var state_17290__$1 = (function (){var statearr_17293 = state_17290;
(statearr_17293[(7)] = inst_17254);

(statearr_17293[(8)] = inst_17253);

return statearr_17293;
})();
var statearr_17294_19585 = state_17290__$1;
(statearr_17294_19585[(2)] = null);

(statearr_17294_19585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17291 === (4))){
var inst_17257 = (state_17290[(9)]);
var inst_17257__$1 = (state_17290[(2)]);
var inst_17258 = (inst_17257__$1 == null);
var inst_17259 = cljs.core.not(inst_17258);
var state_17290__$1 = (function (){var statearr_17296 = state_17290;
(statearr_17296[(9)] = inst_17257__$1);

return statearr_17296;
})();
if(inst_17259){
var statearr_17297_19590 = state_17290__$1;
(statearr_17297_19590[(1)] = (5));

} else {
var statearr_17298_19591 = state_17290__$1;
(statearr_17298_19591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17291 === (15))){
var inst_17279 = (state_17290[(2)]);
var state_17290__$1 = state_17290;
var statearr_17299_19593 = state_17290__$1;
(statearr_17299_19593[(2)] = inst_17279);

(statearr_17299_19593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17291 === (13))){
var state_17290__$1 = state_17290;
var statearr_17300_19594 = state_17290__$1;
(statearr_17300_19594[(2)] = null);

(statearr_17300_19594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17291 === (6))){
var inst_17254 = (state_17290[(7)]);
var inst_17275 = (inst_17254 > (0));
var state_17290__$1 = state_17290;
if(cljs.core.truth_(inst_17275)){
var statearr_17301_19596 = state_17290__$1;
(statearr_17301_19596[(1)] = (12));

} else {
var statearr_17302_19597 = state_17290__$1;
(statearr_17302_19597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17291 === (3))){
var inst_17287 = (state_17290[(2)]);
var state_17290__$1 = state_17290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17290__$1,inst_17287);
} else {
if((state_val_17291 === (12))){
var inst_17253 = (state_17290[(8)]);
var inst_17277 = cljs.core.vec(inst_17253);
var state_17290__$1 = state_17290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17290__$1,(15),out,inst_17277);
} else {
if((state_val_17291 === (2))){
var state_17290__$1 = state_17290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17290__$1,(4),ch);
} else {
if((state_val_17291 === (11))){
var inst_17269 = (state_17290[(2)]);
var inst_17270 = (new Array(n));
var inst_17253 = inst_17270;
var inst_17254 = (0);
var state_17290__$1 = (function (){var statearr_17304 = state_17290;
(statearr_17304[(7)] = inst_17254);

(statearr_17304[(8)] = inst_17253);

(statearr_17304[(10)] = inst_17269);

return statearr_17304;
})();
var statearr_17305_19608 = state_17290__$1;
(statearr_17305_19608[(2)] = null);

(statearr_17305_19608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17291 === (9))){
var inst_17253 = (state_17290[(8)]);
var inst_17267 = cljs.core.vec(inst_17253);
var state_17290__$1 = state_17290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17290__$1,(11),out,inst_17267);
} else {
if((state_val_17291 === (5))){
var inst_17254 = (state_17290[(7)]);
var inst_17262 = (state_17290[(11)]);
var inst_17253 = (state_17290[(8)]);
var inst_17257 = (state_17290[(9)]);
var inst_17261 = (inst_17253[inst_17254] = inst_17257);
var inst_17262__$1 = (inst_17254 + (1));
var inst_17263 = (inst_17262__$1 < n);
var state_17290__$1 = (function (){var statearr_17306 = state_17290;
(statearr_17306[(12)] = inst_17261);

(statearr_17306[(11)] = inst_17262__$1);

return statearr_17306;
})();
if(cljs.core.truth_(inst_17263)){
var statearr_17307_19630 = state_17290__$1;
(statearr_17307_19630[(1)] = (8));

} else {
var statearr_17308_19631 = state_17290__$1;
(statearr_17308_19631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17291 === (14))){
var inst_17282 = (state_17290[(2)]);
var inst_17283 = cljs.core.async.close_BANG_(out);
var state_17290__$1 = (function (){var statearr_17310 = state_17290;
(statearr_17310[(13)] = inst_17282);

return statearr_17310;
})();
var statearr_17311_19636 = state_17290__$1;
(statearr_17311_19636[(2)] = inst_17283);

(statearr_17311_19636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17291 === (10))){
var inst_17273 = (state_17290[(2)]);
var state_17290__$1 = state_17290;
var statearr_17312_19640 = state_17290__$1;
(statearr_17312_19640[(2)] = inst_17273);

(statearr_17312_19640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17291 === (8))){
var inst_17262 = (state_17290[(11)]);
var inst_17253 = (state_17290[(8)]);
var tmp17309 = inst_17253;
var inst_17253__$1 = tmp17309;
var inst_17254 = inst_17262;
var state_17290__$1 = (function (){var statearr_17313 = state_17290;
(statearr_17313[(7)] = inst_17254);

(statearr_17313[(8)] = inst_17253__$1);

return statearr_17313;
})();
var statearr_17314_19653 = state_17290__$1;
(statearr_17314_19653[(2)] = null);

(statearr_17314_19653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_17315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17315[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_17315[(1)] = (1));

return statearr_17315;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_17290){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_17290);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e17316){var ex__13566__auto__ = e17316;
var statearr_17317_19662 = state_17290;
(statearr_17317_19662[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_17290[(4)]))){
var statearr_17318_19664 = state_17290;
(statearr_17318_19664[(1)] = cljs.core.first((state_17290[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19667 = state_17290;
state_17290 = G__19667;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_17290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_17290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_17323 = f__13874__auto__();
(statearr_17323[(6)] = c__13873__auto___19580);

return statearr_17323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17341 = arguments.length;
switch (G__17341) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13873__auto___19675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13874__auto__ = (function (){var switch__13562__auto__ = (function (state_17403){
var state_val_17404 = (state_17403[(1)]);
if((state_val_17404 === (7))){
var inst_17397 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
var statearr_17409_19677 = state_17403__$1;
(statearr_17409_19677[(2)] = inst_17397);

(statearr_17409_19677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (1))){
var inst_17346 = [];
var inst_17347 = inst_17346;
var inst_17348 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17403__$1 = (function (){var statearr_17412 = state_17403;
(statearr_17412[(7)] = inst_17348);

(statearr_17412[(8)] = inst_17347);

return statearr_17412;
})();
var statearr_17415_19687 = state_17403__$1;
(statearr_17415_19687[(2)] = null);

(statearr_17415_19687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (4))){
var inst_17352 = (state_17403[(9)]);
var inst_17352__$1 = (state_17403[(2)]);
var inst_17353 = (inst_17352__$1 == null);
var inst_17354 = cljs.core.not(inst_17353);
var state_17403__$1 = (function (){var statearr_17417 = state_17403;
(statearr_17417[(9)] = inst_17352__$1);

return statearr_17417;
})();
if(inst_17354){
var statearr_17419_19697 = state_17403__$1;
(statearr_17419_19697[(1)] = (5));

} else {
var statearr_17420_19702 = state_17403__$1;
(statearr_17420_19702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (15))){
var inst_17347 = (state_17403[(8)]);
var inst_17389 = cljs.core.vec(inst_17347);
var state_17403__$1 = state_17403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17403__$1,(18),out,inst_17389);
} else {
if((state_val_17404 === (13))){
var inst_17384 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
var statearr_17421_19703 = state_17403__$1;
(statearr_17421_19703[(2)] = inst_17384);

(statearr_17421_19703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (6))){
var inst_17347 = (state_17403[(8)]);
var inst_17386 = inst_17347.length;
var inst_17387 = (inst_17386 > (0));
var state_17403__$1 = state_17403;
if(cljs.core.truth_(inst_17387)){
var statearr_17423_19707 = state_17403__$1;
(statearr_17423_19707[(1)] = (15));

} else {
var statearr_17425_19708 = state_17403__$1;
(statearr_17425_19708[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (17))){
var inst_17394 = (state_17403[(2)]);
var inst_17395 = cljs.core.async.close_BANG_(out);
var state_17403__$1 = (function (){var statearr_17426 = state_17403;
(statearr_17426[(10)] = inst_17394);

return statearr_17426;
})();
var statearr_17427_19713 = state_17403__$1;
(statearr_17427_19713[(2)] = inst_17395);

(statearr_17427_19713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (3))){
var inst_17400 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17403__$1,inst_17400);
} else {
if((state_val_17404 === (12))){
var inst_17347 = (state_17403[(8)]);
var inst_17375 = cljs.core.vec(inst_17347);
var state_17403__$1 = state_17403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17403__$1,(14),out,inst_17375);
} else {
if((state_val_17404 === (2))){
var state_17403__$1 = state_17403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17403__$1,(4),ch);
} else {
if((state_val_17404 === (11))){
var inst_17352 = (state_17403[(9)]);
var inst_17360 = (state_17403[(11)]);
var inst_17347 = (state_17403[(8)]);
var inst_17372 = inst_17347.push(inst_17352);
var tmp17430 = inst_17347;
var inst_17347__$1 = tmp17430;
var inst_17348 = inst_17360;
var state_17403__$1 = (function (){var statearr_17432 = state_17403;
(statearr_17432[(7)] = inst_17348);

(statearr_17432[(12)] = inst_17372);

(statearr_17432[(8)] = inst_17347__$1);

return statearr_17432;
})();
var statearr_17433_19732 = state_17403__$1;
(statearr_17433_19732[(2)] = null);

(statearr_17433_19732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (9))){
var inst_17348 = (state_17403[(7)]);
var inst_17364 = cljs.core.keyword_identical_QMARK_(inst_17348,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17403__$1 = state_17403;
var statearr_17437_19739 = state_17403__$1;
(statearr_17437_19739[(2)] = inst_17364);

(statearr_17437_19739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (5))){
var inst_17348 = (state_17403[(7)]);
var inst_17361 = (state_17403[(13)]);
var inst_17352 = (state_17403[(9)]);
var inst_17360 = (state_17403[(11)]);
var inst_17360__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17352) : f.call(null,inst_17352));
var inst_17361__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17360__$1,inst_17348);
var state_17403__$1 = (function (){var statearr_17438 = state_17403;
(statearr_17438[(13)] = inst_17361__$1);

(statearr_17438[(11)] = inst_17360__$1);

return statearr_17438;
})();
if(inst_17361__$1){
var statearr_17440_19746 = state_17403__$1;
(statearr_17440_19746[(1)] = (8));

} else {
var statearr_17441_19749 = state_17403__$1;
(statearr_17441_19749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (14))){
var inst_17352 = (state_17403[(9)]);
var inst_17360 = (state_17403[(11)]);
var inst_17377 = (state_17403[(2)]);
var inst_17379 = [];
var inst_17380 = inst_17379.push(inst_17352);
var inst_17347 = inst_17379;
var inst_17348 = inst_17360;
var state_17403__$1 = (function (){var statearr_17442 = state_17403;
(statearr_17442[(7)] = inst_17348);

(statearr_17442[(14)] = inst_17377);

(statearr_17442[(15)] = inst_17380);

(statearr_17442[(8)] = inst_17347);

return statearr_17442;
})();
var statearr_17443_19753 = state_17403__$1;
(statearr_17443_19753[(2)] = null);

(statearr_17443_19753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (16))){
var state_17403__$1 = state_17403;
var statearr_17444_19754 = state_17403__$1;
(statearr_17444_19754[(2)] = null);

(statearr_17444_19754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (10))){
var inst_17366 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
if(cljs.core.truth_(inst_17366)){
var statearr_17447_19758 = state_17403__$1;
(statearr_17447_19758[(1)] = (11));

} else {
var statearr_17448_19759 = state_17403__$1;
(statearr_17448_19759[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (18))){
var inst_17391 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
var statearr_17450_19760 = state_17403__$1;
(statearr_17450_19760[(2)] = inst_17391);

(statearr_17450_19760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17404 === (8))){
var inst_17361 = (state_17403[(13)]);
var state_17403__$1 = state_17403;
var statearr_17451_19761 = state_17403__$1;
(statearr_17451_19761[(2)] = inst_17361);

(statearr_17451_19761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13563__auto__ = null;
var cljs$core$async$state_machine__13563__auto____0 = (function (){
var statearr_17452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17452[(0)] = cljs$core$async$state_machine__13563__auto__);

(statearr_17452[(1)] = (1));

return statearr_17452;
});
var cljs$core$async$state_machine__13563__auto____1 = (function (state_17403){
while(true){
var ret_value__13564__auto__ = (function (){try{while(true){
var result__13565__auto__ = switch__13562__auto__(state_17403);
if(cljs.core.keyword_identical_QMARK_(result__13565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13565__auto__;
}
break;
}
}catch (e17453){var ex__13566__auto__ = e17453;
var statearr_17454_19767 = state_17403;
(statearr_17454_19767[(2)] = ex__13566__auto__);


if(cljs.core.seq((state_17403[(4)]))){
var statearr_17455_19768 = state_17403;
(statearr_17455_19768[(1)] = cljs.core.first((state_17403[(4)])));

} else {
throw ex__13566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19769 = state_17403;
state_17403 = G__19769;
continue;
} else {
return ret_value__13564__auto__;
}
break;
}
});
cljs$core$async$state_machine__13563__auto__ = function(state_17403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13563__auto____1.call(this,state_17403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13563__auto____0;
cljs$core$async$state_machine__13563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13563__auto____1;
return cljs$core$async$state_machine__13563__auto__;
})()
})();
var state__13875__auto__ = (function (){var statearr_17458 = f__13874__auto__();
(statearr_17458[(6)] = c__13873__auto___19675);

return statearr_17458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13875__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
