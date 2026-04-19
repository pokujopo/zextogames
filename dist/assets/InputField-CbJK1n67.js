import{c as r,r as x,j as e}from"./index-UiVTYccU.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=r("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);function y({label:c,error:s,type:i="text",className:d="",...o}){const[t,n]=x.useState(!1),a=i==="password";return e.jsxs("label",{className:`block space-y-2 ${d}`,children:[c&&e.jsx("span",{className:"text-sm font-medium text-text-primary",children:c}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:`input-base ${a?"pr-12":""} ${s?"border-destructive/60 focus:ring-destructive/20":""}`,type:a?t?"text":"password":i,...o}),a&&e.jsx("button",{type:"button","aria-label":t?"Hide password":"Show password",onClick:()=>n(l=>!l),className:"absolute inset-y-0 right-3 my-auto text-text-muted",children:t?e.jsx(p,{size:18}):e.jsx(u,{size:18})})]}),s&&e.jsx("p",{className:"text-sm text-destructive",children:s})]})}export{y as I};
