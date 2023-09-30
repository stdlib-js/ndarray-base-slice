"use strict";var f=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var q=f(function(O,p){
function k(e,a,o){var i,t,r;for(i=e.data,t=o,r=0;r<i.length;r++)t+=a[r]*i[r].start;return t}p.exports=k
});var g=f(function(P,y){
function D(e,a,o){var i,t,r,s;for(i=e.data,t=[],r=0;r<o.length;r++)s=o[r],t.push(a[s]*i[s].step);return t}y.exports=D
});var w=f(function(Q,S){
var M=require('@stdlib/ndarray-base-buffer/dist'),N=require('@stdlib/array-base-zeros/dist');function B(e,a,o,i,t){var r,s;return s=o.length,s===0?r=[0]:r=N(s),new e(a,M(a,0),o,r,0,i,{readonly:t})}S.exports=B
});var b=f(function(T,R){
var j=require('@stdlib/slice-base-normalize-multi-slice/dist'),C=require('@stdlib/slice-base-nonreduced-dimensions/dist'),z=require('@stdlib/slice-base-shape/dist'),h=require('@stdlib/array-base-take/dist'),F=require('@stdlib/array-base-zeros/dist'),A=require('@stdlib/ndarray-base-numel/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),G=q(),H=g(),I=w();function J(e,a,o,i){var t,r,s,u,v,c,m,l,n,d;if(s=e.dtype,u=e.shape,t=e.strides,r=e.offset,v=e.order,m=u.length,a.ndims!==m)throw new RangeError(E("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",u.join(","),a.ndims));if(l=e.constructor,m===0)return new l(s,e.data,u,t,r,v,{readonly:!i});if(c=C(a),d=j(a,u,!0),d.code){if(o)throw new RangeError(E("invalid argument. Slice exceeds array bounds. Array shape: (%s).",u.join(",")));d=j(a,u,!1),n=z(d),A(h(n,c))>0&&(n=F(n.length))}else n=z(d);return A(n)===0?I(l,s,h(n,c),v,!i):(r=G(d,t,r),n=h(n,c),n.length===0?new l(s,e.data,[],[0],r,v,{readonly:!i}):(t=H(d,t,c),new l(s,e.data,n,t,r,v,{readonly:!i})))}R.exports=J
});var K=b();module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
