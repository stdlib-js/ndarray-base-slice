"use strict";var f=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(s){throw e=0,s}}};var p=f(function(W,h){"use strict";function b(a,e,s){var i,t,r;for(i=a.data,t=s,r=0;r<i.length;r++)t+=e[r]*i[r].start;return t}h.exports=b});var S=f(function(X,y){"use strict";function k(a,e,s){var i,t,r,n;for(i=a.data,t=[],r=0;r<s.length;r++)n=s[r],t.push(e[n]*i[n].step);return t}y.exports=k});var j=f(function(Y,w){"use strict";var M=require("@stdlib/ndarray-base-buffer"),N=require("@stdlib/array-base-zeros");function T(a,e,s,i,t){var r,n;return n=s.length,n===0?r=[0]:r=N(n),new a(e,M(e,0),s,r,0,i,{readonly:t})}w.exports=T});var R=f(function(Z,O){"use strict";var z=require("@stdlib/slice-base-normalize-multi-slice"),B=require("@stdlib/slice-base-nonreduced-dimensions"),D=require("@stdlib/slice-base-shape"),q=require("@stdlib/array-base-take-indexed"),C=require("@stdlib/array-base-zeros"),A=require("@stdlib/ndarray-base-numel"),F=require("@stdlib/ndarray-base-dtype"),G=require("@stdlib/ndarray-base-shape"),H=require("@stdlib/ndarray-base-strides"),I=require("@stdlib/ndarray-base-offset"),J=require("@stdlib/ndarray-base-order"),g=require("@stdlib/ndarray-base-data-buffer"),E=require("@stdlib/string-format"),K=p(),L=S(),P=j();function Q(a,e,s,i){var t,r,n,o,d,c,m,l,u,v;if(n=F(a),o=G(a,!0),t=H(a,!0),r=I(a),d=J(a),m=o.length,e.ndims!==m)throw new RangeError(E("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=a.constructor,m===0)return new l(n,g(a),o,t,r,d,{readonly:!i});if(c=B(e),v=z(e,o,!0),v.code){if(s)throw new RangeError(E("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));v=z(e,o,!1),u=D(v),A(q(u,c))>0&&(u=C(u.length))}else u=D(v);return A(u)===0?P(l,n,q(u,c),d,!i):(r=K(v,t,r),u=q(u,c),u.length===0?new l(n,g(a),[],[0],r,d,{readonly:!i}):(t=L(v,t,c),new l(n,g(a),u,t,r,d,{readonly:!i})))}O.exports=Q});var U=R();module.exports=U;
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
