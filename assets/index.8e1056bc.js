import{r as l,j as s,i as a,D as c,a as u,R as f}from"./vendor.3fa8a0ab.js";const h=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}};h();function m({setEditorText:e}){const n=l.exports.useRef(null);function t(o,r){n.current=o}return s("div",{children:s(a,{height:"90vh",width:"50vw",defaultLanguage:"javascript",defaultValue:"// some comment",onMount:t,onChange:e})})}const p=[{key:"component",name:"component"},{key:"lowest",name:"Low Estimate"},{key:"highest",name:"High Estimate"}];function g({rows:e,setRows:n}){let[t,o]=l.exports.useState(!1);return l.exports.useEffect(()=>(o(!0),()=>{}),[n]),s("div",{style:{height:"100vh",width:"50vw"},children:t?s(c,{columns:p,rows:e}):s("div",{children:"Loading..."})})}function v({children:e}){return s("div",{style:{display:"flex",flexDirection:"row",height:"100vh",width:"100vw"},children:e})}let y=e=>e.split(`
`).filter(n=>n.trim()!==""),_=e=>/^([\t]|[\s]{4})+/g.test(e),x=e=>e.match(/^([\t]|[\s]{4})+([\s]{1,4})?(?=[^])/g)[0].match(/([\t]|[\s]{4})/g).length;const w=(e,...n)=>[...n].reduce((t,o)=>Array.isArray(o)&&o.length>=2?o[0](t,o[1]):o(t),e),E=e=>(console.log(e),e);let L=e=>w(e,y,E,n=>n.map((t,o)=>{var t=t.trim();if(_(t)){let r=x(t);return{component:t,lowest:0,highest:0,indent_level:r}}else return{component:t,lowest:0,highest:0,indent_level:0}}));function A(){const[e,n]=l.exports.useState(null),[t,o]=l.exports.useState(null);return l.exports.useEffect(()=>{n([{id:0,title:"Example"},{id:1,title:"Demo"}])},[]),l.exports.useEffect(()=>{t&&n(L(t))},[t]),s("div",{className:"App",children:u(v,{children:[s(m,{setEditorText:o}),s(g,{rows:e,setRows:n})]})})}f.render(s(A,{}),document.getElementById("root"));
