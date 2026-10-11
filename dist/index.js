"use strict";var f=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(s){throw e=0,s}}};var p=f(function(X,h){"use strict";function k(a,e,s){var i,t,r;for(i=a.data,t=s,r=0;r<i.length;r++)t+=e[r]*i[r].start;return t}h.exports=k});var S=f(function(Y,y){"use strict";function M(a,e,s){var i,t,r,n;for(i=a.data,t=[],r=0;r<s.length;r++)n=s[r],t.push(e[n]*i[n].step);return t}y.exports=M});var z=f(function(Z,w){"use strict";var N=require("@stdlib/ndarray-base-buffer"),T=require("@stdlib/array-base-zeros");function B(a,e,s,i,t){var r,n;return n=s.length,n===0?r=[0]:r=T(n),new a(e,N(e,0),s,r,0,i,{readonly:t})}w.exports=B});var b=f(function(_,R){"use strict";var D=require("@stdlib/slice-base-normalize-multi-slice"),C=require("@stdlib/slice-base-nonreduced-dimensions"),j=require("@stdlib/slice-base-shape"),m=require("@stdlib/array-base-take-indexed"),F=require("@stdlib/array-base-zeros"),A=require("@stdlib/array-base-join"),E=require("@stdlib/ndarray-base-numel"),G=require("@stdlib/ndarray-base-dtype"),H=require("@stdlib/ndarray-base-shape"),I=require("@stdlib/ndarray-base-strides"),J=require("@stdlib/ndarray-base-offset"),K=require("@stdlib/ndarray-base-order"),g=require("@stdlib/ndarray-base-data-buffer"),O=require("@stdlib/string-format"),L=p(),P=S(),Q=z();function U(a,e,s,i){var t,r,n,o,d,c,q,l,u,v;if(n=G(a),o=H(a,!0),t=I(a,!0),r=J(a),d=K(a),q=o.length,e.ndims!==q)throw new RangeError(O("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",A(o,","),e.ndims));if(l=a.constructor,q===0)return new l(n,g(a),o,t,r,d,{readonly:!i});if(c=C(e),v=D(e,o,!0),v.code){if(s)throw new RangeError(O("invalid argument. Slice exceeds array bounds. Array shape: (%s).",A(o,",")));v=D(e,o,!1),u=j(v),E(m(u,c))>0&&(u=F(u.length))}else u=j(v);return E(u)===0?Q(l,n,m(u,c),d,!i):(r=L(v,t,r),u=m(u,c),u.length===0?new l(n,g(a),[],[0],r,d,{readonly:!i}):(t=P(v,t,c),new l(n,g(a),u,t,r,d,{readonly:!i})))}R.exports=U});var V=b();module.exports=V;
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
