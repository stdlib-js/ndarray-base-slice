// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-multi-slice@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-nonreduced-dimensions@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-shape@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take-indexed@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-offset@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-order@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-data-buffer@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@v0.2.1-esm/index.mjs";function f(f,v,b,c){var g,u,x,y,w,E,R,z,k,q;if(x=i(f),y=m(f,!0),g=o(f,!0),u=a(f),w=l(f),R=y.length,v.ndims!==R)throw new RangeError(h("1jREt",y.join(","),v.ndims));if(z=f.constructor,0===R)return new z(x,j(f),y,g,u,w,{readonly:!c});if(E=s(v),(q=e(v,y,!0)).code){if(b)throw new RangeError(h("1jREz",y.join(",")));q=e(v,y,!1),k=r(q),d(t(k,E))>0&&(k=n(k.length))}else k=r(q);return 0===d(k)?function(e,s,r,t,d){var i,m;return i=0===(m=r.length)?[0]:n(m),new e(s,p(s,0),r,i,0,t,{readonly:d})}(z,x,t(k,E),w,!c):(u=function(e,s,r){var t,n,d;for(t=e.data,n=r,d=0;d<t.length;d++)n+=s[d]*t[d].start;return n}(q,g,u),0===(k=t(k,E)).length?new z(x,j(f),[],[0],u,w,{readonly:!c}):(g=function(e,s,r){var t,n,d,i;for(t=e.data,n=[],d=0;d<r.length;d++)i=r[d],n.push(s[i]*t[i].step);return n}(q,g,E),new z(x,j(f),k,g,u,w,{readonly:!c})))}export{f as default};
//# sourceMappingURL=index.mjs.map
