var g=Object.defineProperty;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(n,e,t)=>e in n?g(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,m=(n,e)=>{for(var t in e||(e={}))y.call(e,t)&&f(n,t,e[t]);if(p)for(var t of p(e))v.call(e,t)&&f(n,t,e[t]);return n};import{j as d,P as x,r as c,R as _}from"./vendor.581e58b8.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}};G();const s=d.exports.jsx,l=d.exports.jsxs,N=d.exports.Fragment,h=({setCategories:n})=>{const[e,t]=c.exports.useState("");return s("form",{onSubmit:a=>{a.preventDefault(),e.trim().length>2&&(n(o=>[e,...o]),t("")),console.log("Enviado")},children:s("input",{type:"text",placeholder:"Search any gifs",value:e,onChange:a=>{t(a.target.value)}})})};h.propTypes={setCategories:x.func.isRequired};const b=({id:n,title:e,url:t})=>l("div",{className:"card animate__animated animate__bounceInUp",children:[s("img",{src:t,alt:e}),s("div",{className:"capa",children:s("h3",{children:e})})]});const I=async n=>{const e="wE6rqwNZ66oSEY1ADbNhPggoyhz4hfQc",t=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(n)}&limit=10&api_key=${e}`,i=await fetch(t),{data:r}=await i.json();return r.map(o=>{var u;return{id:o.id,title:o.title,url:(u=o.images)==null?void 0:u.downsized_medium.url}})},S=n=>{const[e,t]=c.exports.useState({data:[],loading:!0});return c.exports.useEffect(()=>{I(n).then(i=>{t({data:i,loading:!1})})},[n]),e},E=({category:n})=>{const{data:e,loading:t}=S(n);return console.log(t),l("div",{className:"container",children:[s("h3",{className:"animate__animated animate__bounceInUp",children:n}),t&&s("p",{className:"animate__animated animate__flash",children:"Laoding..."}),s("div",{className:"cards-container",children:e.map(i=>s(b,m({img:i},i),i.id))})]})};const j=()=>s("header",{children:s("nav",{children:s("a",{href:"#",children:"GifExpert-APP"})})}),C=()=>{const[n,e]=c.exports.useState(["Dragon ball"]);return l(N,{children:[s(j,{}),s(h,{setCategories:e}),n.map(t=>s(E,{category:t},t))]})};_.render(s(C,{}),document.getElementById("root"));