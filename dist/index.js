"use strict";var f=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var q=f(function(O,p){
function k(e,a,o){var t,i,r;for(t=e.data,i=o,r=0;r<t.length;r++)i+=a[r]*t[r].start;return i}p.exports=k
});var g=f(function(P,y){
function D(e,a,o){var t,i,r,s;for(t=e.data,i=[],r=0;r<o.length;r++)s=o[r],i.push(a[s]*t[s].step);return i}y.exports=D
});var S=f(function(Q,w){
var M=require('@stdlib/ndarray-base-buffer/dist'),N=require('@stdlib/array-base-zeros/dist');function B(e,a,o,t,i){var r,s;return s=o.length,s===0?r=[0]:r=N(s),new e(a,M(a,0),o,r,0,t,{readonly:i})}w.exports=B
});var b=f(function(T,R){
var j=require('@stdlib/slice-base-normalize-multi-slice/dist'),C=require('@stdlib/slice-base-nonreduced-dimensions/dist'),z=require('@stdlib/slice-base-shape/dist'),m=require('@stdlib/array-base-take/dist'),F=require('@stdlib/array-base-zeros/dist'),A=require('@stdlib/ndarray-base-numel/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),G=q(),H=g(),I=S();function J(e,a,o,t){var i,r,s,u,v,c,h,l,n,d;if(s=e.dtype,u=e.shape,i=e.strides,r=e.offset,v=e.order,h=u.length,a.ndims!==h)throw new RangeError(E("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",u.join(","),a.ndims));if(l=e.constructor,h===0)return new l(s,e.data,u,i,r,v,{readonly:!t});if(c=C(a),d=j(a,u,!0),d.code){if(o)throw new RangeError(E("invalid argument. Slice exceeds array bounds. Array shape: (%s).",u.join(",")));d=j(a,u,!1),n=z(d),A(m(n,c))>0&&(n=F(n.length))}else n=z(d);return A(n)===0?I(l,s,m(n,c),v,!t):(r=G(d,i,r),n=m(n,c),n.length===0?new l(s,e.data,[],[0],r,v,{readonly:!t}):(i=H(d,i,c),new l(s,e.data,n,i,r,v,{readonly:!t})))}R.exports=J
});var K=b();module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
