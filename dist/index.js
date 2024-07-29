"use strict";var f=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var p=f(function(W,h){"use strict";function b(e,a,u){var i,t,r;for(i=e.data,t=u,r=0;r<i.length;r++)t+=a[r]*i[r].start;return t}h.exports=b});var S=f(function(X,y){"use strict";function k(e,a,u){var i,t,r,n;for(i=e.data,t=[],r=0;r<u.length;r++)n=u[r],t.push(a[n]*i[n].step);return t}y.exports=k});var j=f(function(Y,w){"use strict";var M=require("@stdlib/ndarray-base-buffer"),N=require("@stdlib/array-base-zeros");function T(e,a,u,i,t){var r,n;return n=u.length,n===0?r=[0]:r=N(n),new e(a,M(a,0),u,r,0,i,{readonly:t})}w.exports=T});var R=f(function(Z,O){"use strict";var z=require("@stdlib/slice-base-normalize-multi-slice"),B=require("@stdlib/slice-base-nonreduced-dimensions"),D=require("@stdlib/slice-base-shape"),q=require("@stdlib/array-base-take-indexed"),C=require("@stdlib/array-base-zeros"),A=require("@stdlib/ndarray-base-numel"),F=require("@stdlib/ndarray-base-dtype"),G=require("@stdlib/ndarray-base-shape"),H=require("@stdlib/ndarray-base-strides"),I=require("@stdlib/ndarray-base-offset"),J=require("@stdlib/ndarray-base-order"),g=require("@stdlib/ndarray-base-data-buffer"),E=require("@stdlib/string-format"),K=p(),L=S(),P=j();function Q(e,a,u,i){var t,r,n,o,d,c,m,l,s,v;if(n=F(e),o=G(e,!0),t=H(e,!0),r=I(e),d=J(e),m=o.length,a.ndims!==m)throw new RangeError(E("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),a.ndims));if(l=e.constructor,m===0)return new l(n,g(e),o,t,r,d,{readonly:!i});if(c=B(a),v=z(a,o,!0),v.code){if(u)throw new RangeError(E("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));v=z(a,o,!1),s=D(v),A(q(s,c))>0&&(s=C(s.length))}else s=D(v);return A(s)===0?P(l,n,q(s,c),d,!i):(r=K(v,t,r),s=q(s,c),s.length===0?new l(n,g(e),[],[0],r,d,{readonly:!i}):(t=L(v,t,c),new l(n,g(e),s,t,r,d,{readonly:!i})))}O.exports=Q});var U=R();module.exports=U;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
