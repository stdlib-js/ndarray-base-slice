"use strict";var f=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var p=f(function(W,h){
function b(e,a,u){var i,t,r;for(i=e.data,t=u,r=0;r<i.length;r++)t+=a[r]*i[r].start;return t}h.exports=b
});var S=f(function(X,y){
function k(e,a,u){var i,t,r,n;for(i=e.data,t=[],r=0;r<u.length;r++)n=u[r],t.push(a[n]*i[n].step);return t}y.exports=k
});var j=f(function(Y,w){
var M=require('@stdlib/ndarray-base-buffer/dist'),N=require('@stdlib/array-base-zeros/dist');function T(e,a,u,i,t){var r,n;return n=u.length,n===0?r=[0]:r=N(n),new e(a,M(a,0),u,r,0,i,{readonly:t})}w.exports=T
});var R=f(function(Z,O){
var z=require('@stdlib/slice-base-normalize-multi-slice/dist'),B=require('@stdlib/slice-base-nonreduced-dimensions/dist'),D=require('@stdlib/slice-base-shape/dist'),q=require('@stdlib/array-base-take/dist'),C=require('@stdlib/array-base-zeros/dist'),A=require('@stdlib/ndarray-base-numel/dist'),F=require('@stdlib/ndarray-base-dtype/dist'),G=require('@stdlib/ndarray-base-shape/dist'),H=require('@stdlib/ndarray-base-strides/dist'),I=require('@stdlib/ndarray-base-offset/dist'),J=require('@stdlib/ndarray-base-order/dist'),g=require('@stdlib/ndarray-base-data-buffer/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),K=p(),L=S(),P=j();function Q(e,a,u,i){var t,r,n,o,d,c,m,l,s,v;if(n=F(e),o=G(e,!0),t=H(e,!0),r=I(e),d=J(e),m=o.length,a.ndims!==m)throw new RangeError(E('1jREt',o.join(","),a.ndims));if(l=e.constructor,m===0)return new l(n,g(e),o,t,r,d,{readonly:!i});if(c=B(a),v=z(a,o,!0),v.code){if(u)throw new RangeError(E('1jREz',o.join(",")));v=z(a,o,!1),s=D(v),A(q(s,c))>0&&(s=C(s.length))}else s=D(v);return A(s)===0?P(l,n,q(s,c),d,!i):(r=K(v,t,r),s=q(s,c),s.length===0?new l(n,g(e),[],[0],r,d,{readonly:!i}):(t=L(v,t,c),new l(n,g(e),s,t,r,d,{readonly:!i})))}O.exports=Q
});var U=R();module.exports=U;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
