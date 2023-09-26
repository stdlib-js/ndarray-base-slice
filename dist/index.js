"use strict";var l=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var g=l(function(W,q){
var M=require('@stdlib/ndarray-base-sub2ind/dist');function N(i,a,u,s){var e,r,t;for(e=i.data,r=[a,u,s],t=0;t<e.length;t++)r.push(e[t].start);return r.push("throw"),M.apply(null,r)}q.exports=N
});var y=l(function(X,w){
function B(i,a,u){var s,e,r,t;for(s=i.data,e=[],r=0;r<u.length;r++)t=u[r],e.push(a[t]*s[t].step);return e}w.exports=B
});var p=l(function(Y,b){
function C(){return{readonly:!0}}b.exports=C
});var j=l(function(Z,S){
var F=require('@stdlib/ndarray-base-buffer/dist'),G=require('@stdlib/array-base-zeros/dist'),H=p();function I(i,a,u,s){var e,r;return r=u.length,r===0?e=[0]:e=G(r),new i(a,F(a,0),u,e,0,s,H())}S.exports=I
});var D=l(function(_,k){
var z=require('@stdlib/slice-base-normalize-multi-slice/dist'),J=require('@stdlib/slice-base-nonreduced-dimensions/dist'),A=require('@stdlib/slice-base-shape/dist'),h=require('@stdlib/array-base-take/dist'),K=require('@stdlib/array-base-zeros/dist'),L=require('@stdlib/ndarray-base-vind2bind/dist'),E=require('@stdlib/ndarray-base-numel/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),O=g(),P=y(),m=p(),Q=j();function T(i,a,u){var s,e,r,t,v,d,f,c,n,o;if(r=i.dtype,t=i.shape,s=i.strides,e=i.offset,v=i.order,f=t.length,a.ndims!==f)throw new RangeError(R("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",t.join(","),a.ndims));if(c=i.constructor,f===0)return new c(r,i.data,t,s,e,v,m());if(d=J(a),o=z(a,t,!0),o.code){if(u)throw new RangeError(R("invalid argument. Slice exceeds array bounds. Array shape: (%s).",t.join(",")));o=z(a,t,!1),n=A(o),E(h(n,d))>0&&(n=K(n.length))}else n=A(o);return E(n)===0?Q(c,r,h(n,d),v):(e=L(t,s,e,v,O(o,t,s,0),"throw"),n=h(n,d),n.length===0?new c(r,i.data,[],[0],e,v,m()):(s=P(o,s,d),new c(r,i.data,n,s,e,v,m())))}k.exports=T
});var U=D();module.exports=U;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
