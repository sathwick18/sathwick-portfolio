import{r as p,j as r}from"./index-BJV_8Exl.js";class u{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const R=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:R()},g=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},N=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=g(e);i.publicKey=s.publicKey,i.blockHeadless=s.blockHeadless,i.storageProvider=s.storageProvider,i.blockList=s.blockList,i.limitRate=s.limitRate,i.origin=s.origin||t},j=async(e,t,s={})=>{const a=await fetch(i.origin+e,{method:"POST",headers:s,body:t}),o=await a.text(),n=new u(a.status,o);if(a.ok)return n;throw n},x=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},T=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},v=e=>e.webdriver||!e.languages||e.languages.length===0,S=()=>new u(451,"Unavailable For Headless Browser"),P=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},I=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},A=(e,t)=>e instanceof FormData?e.get(t):e[t],k=(e,t)=>{if(I(e))return!1;P(e.list,e.watchVariable);const s=A(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},_=()=>new u(403,"Forbidden"),H=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},M=async(e,t,s)=>{const a=Number(await s.get(e)||0);return t-Date.now()+a},L=async(e,t,s)=>{if(!t.throttle||!s)return!1;H(t.throttle,t.id);const a=t.id||e;return await M(a,t.throttle,s)>0?!0:(await s.set(a,Date.now().toString()),!1)},E=()=>new u(429,"Too Many Requests"),F=async(e,t,s,a)=>{const o=g(a),n=o.publicKey||i.publicKey,d=o.blockHeadless||i.blockHeadless,l=o.storageProvider||i.storageProvider,c={...i.blockList,...o.blockList},h={...i.limitRate,...o.limitRate};return d&&v(navigator)?Promise.reject(S()):(x(n,e,t),T(s),s&&k(c,s)?Promise.reject(_()):await L(location.pathname,h,l)?Promise.reject(E()):j("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:n,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},C=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},O=e=>typeof e=="string"?document.querySelector(e):e,V=async(e,t,s,a)=>{const o=g(a),n=o.publicKey||i.publicKey,d=o.blockHeadless||i.blockHeadless,l=i.storageProvider||o.storageProvider,c={...i.blockList,...o.blockList},h={...i.limitRate,...o.limitRate};if(d&&v(navigator))return Promise.reject(S());const f=O(s);x(n,e,t),C(f);const m=new FormData(f);return k(c,m)?Promise.reject(_()):await L(location.pathname,h,l)?Promise.reject(E()):(m.append("lib_version","4.4.1"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",n),j("/api/v1.0/email/send-form",m))},D={init:N,send:F,sendForm:V,EmailJSResponseStatus:u},K="service_58isghp",q="template_hhoy1zl",B="Fto8XD7brbx1Yt38P",Y="Sathwick Reddy, Yalla",J="sathwick@outlook.in",G="/assets/terminal.png",U="/assets/arrow-up.png",y={name:"",email:"",message:""},b={name:"Enter Your Full Name",email:"Enter Your Email Address",message:"Hi, I wanna provide you a job opportunity..."},w={success:"Your message has been sent!",error:"Something went wrong!"},W="contact",X=()=>{const e=p.useRef(),[t,s]=p.useState(!1),[a,o]=p.useState(y),n=({target:{name:l,value:c}})=>{o({...a,[l]:c})},d=async l=>{l.preventDefault(),s(!0);try{await D.send(K,q,{from_name:a.name,to_name:Y,from_email:a.email,to_email:J,message:a.message},B),s(!1),alert(w.success),o(y)}catch(c){s(!1),console.log(c),alert(w.error)}};return r.jsx("section",{className:"c-space my-20",id:W,children:r.jsxs("div",{className:"relative min-h-screen flex items-center justify-center flex-col",children:[r.jsx("img",{src:G,alt:"terminal",className:"absolute inset-0 min-h-screen hidden sm:block 2xl:h-full 2xl:w-full"}),r.jsxs("div",{className:"contact-container",children:[r.jsx("h3",{className:"sm:text-3xl text-2xl font-semibold text-gray_gradient",children:"Let's Talk"}),r.jsx("p",{className:"text-lg text-white-600 mt-3",children:"I'm always excited to connect and explore new opportunities. Whether you're an HR professional interested in discussing a job opportunity or a fellow enthusiast eager to collaborate on innovative projects, I'd love to hear from you. Looking forward to our conversation!"}),r.jsxs("form",{ref:e,onSubmit:d,className:"mt-6 flex flex-col space-y-7",children:[r.jsxs("label",{className:"space-y-2",children:[r.jsx("span",{className:"field-label",children:"Full Name"}),r.jsx("input",{type:"text",name:"name",value:a.name,onChange:n,required:!0,className:"field-input",placeholder:b.name})]}),r.jsxs("label",{className:"space-y-2",children:[r.jsx("span",{className:"field-label",children:"Email Address"}),r.jsx("input",{type:"email",name:"email",value:a.email,onChange:n,required:!0,className:"field-input",placeholder:b.email})]}),r.jsxs("label",{className:"space-y-2",children:[r.jsx("span",{className:"field-label",children:"Message"}),r.jsx("textarea",{name:"message",value:a.message,onChange:n,rows:6,required:!0,className:"field-input",placeholder:b.message})]}),r.jsxs("button",{className:"field-btn",type:"submit",disabled:t,children:[t?"Sending...":"Send Message",r.jsx("img",{src:U,alt:"arrow-up",className:"field-btn_arrow"})]})]})]})]})})};export{X as default};
