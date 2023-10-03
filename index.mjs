// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-multi-slice@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-nonreduced-dimensions@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-shape@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@v0.1.1-esm/index.mjs";function o(o,m,l,h){var f,j,c,p,u,v,b,g,y,x;if(c=o.dtype,p=o.shape,f=o.strides,j=o.offset,u=o.order,b=p.length,m.ndims!==b)throw new RangeError(d("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",p.join(","),m.ndims));if(g=o.constructor,0===b)return new g(c,o.data,p,f,j,u,{readonly:!h});if(v=s(m),(x=e(m,p,!0)).code){if(l)throw new RangeError(d("invalid argument. Slice exceeds array bounds. Array shape: (%s).",p.join(",")));x=e(m,p,!1),y=r(x),i(n(y,v))>0&&(y=t(y.length))}else y=r(x);return 0===i(y)?function(e,s,r,n,i){var d,o;return d=0===(o=r.length)?[0]:t(o),new e(s,a(s,0),r,d,0,n,{readonly:i})}(g,c,n(y,v),u,!h):(j=function(e,s,r){var n,t,i;for(n=e.data,t=r,i=0;i<n.length;i++)t+=s[i]*n[i].start;return t}(x,f,j),0===(y=n(y,v)).length?new g(c,o.data,[],[0],j,u,{readonly:!h}):(f=function(e,s,r){var n,t,i,d;for(n=e.data,t=[],i=0;i<r.length;i++)d=r[i],t.push(s[d]*n[d].step);return t}(x,f,v),new g(c,o.data,y,f,j,u,{readonly:!h})))}export{o as default};
//# sourceMappingURL=index.mjs.map