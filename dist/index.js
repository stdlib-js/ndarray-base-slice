"use strict";var f=function(t,i){return function(){return i||t((i={exports:{}}).exports,i),i.exports}};var g=f(function(T,q){
function M(t,i,o){var a,e,r;for(a=t.data,e=o,r=0;r<a.length;r++)e+=i[r]*a[r].start;return e}q.exports=M
});var y=f(function(U,w){
function N(t,i,o){var a,e,r,s;for(a=t.data,e=[],r=0;r<o.length;r++)s=o[r],e.push(i[s]*a[s].step);return e}w.exports=N
});var m=f(function(V,S){
function x(){return{readonly:!0}}S.exports=x
});var j=f(function(W,b){
var B=require('@stdlib/ndarray-base-buffer/dist'),C=require('@stdlib/array-base-zeros/dist'),F=m();function G(t,i,o,a){var e,r;return r=o.length,r===0?e=[0]:e=C(r),new t(i,B(i,0),o,e,0,a,F())}b.exports=G
});var D=f(function(X,k){
var z=require('@stdlib/slice-base-normalize-multi-slice/dist'),H=require('@stdlib/slice-base-nonreduced-dimensions/dist'),A=require('@stdlib/slice-base-shape/dist'),p=require('@stdlib/array-base-take/dist'),I=require('@stdlib/array-base-zeros/dist'),E=require('@stdlib/ndarray-base-numel/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),J=g(),K=y(),h=m(),L=j();function O(t,i,o){var a,e,r,s,v,d,l,c,n,u;if(r=t.dtype,s=t.shape,a=t.strides,e=t.offset,v=t.order,l=s.length,i.ndims!==l)throw new RangeError(R("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",s.join(","),i.ndims));if(c=t.constructor,l===0)return new c(r,t.data,s,a,e,v,h());if(d=H(i),u=z(i,s,!0),u.code){if(o)throw new RangeError(R("invalid argument. Slice exceeds array bounds. Array shape: (%s).",s.join(",")));u=z(i,s,!1),n=A(u),E(p(n,d))>0&&(n=I(n.length))}else n=A(u);return E(n)===0?L(c,r,p(n,d),v):(e=J(u,a,e),n=p(n,d),n.length===0?new c(r,t.data,[],[0],e,v,h()):(a=K(u,a,d),new c(r,t.data,n,a,e,v,h())))}k.exports=O
});var P=D();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
