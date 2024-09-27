import"https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js";import"./LanguageFlag.astro_astro_type_script_index_0_lang.BnP4WC8V.js";const l=document;l.addEventListener("DOMContentLoaded",function(){const e=l.getElementById("skills__avatar"),t=l.querySelector(".skills__popup"),s=l.querySelector(".btn__red "),o={root:null,rootMargin:"0px",threshold:.5},r=(i,c)=>{i.forEach(m=>{m.isIntersecting?(t.classList.add("active"),s.addEventListener("click",function(){t.classList.remove("active")})):t.classList.remove("active")})};new IntersectionObserver(r,o).observe(e)});const E=document.querySelector(".btn__red"),S=document.querySelector(".popup");E.addEventListener("click",()=>{S.close()});const _=document.getElementById("bg-icons"),w=20;for(let e=0;e<w;e++){const t=document.createElement("span");_.appendChild(t)}const L="http://localhost:4322";async function y(e="data"){return(await(await fetch(`${L}/api/${e!=="data"?e:"all"}`)).json())[e]}const{user:b}=await y(),q=document.getElementById("profile-picture");function v(e){q.src=e?b.profilePicture2:b.profilePicture}v(document.documentElement.classList.contains("dark"));window.addEventListener("themeChange",e=>{v(e.detail.isDark)});const{skills:h}=await y(),g=e=>e.map(t=>({sort:Math.random(),value:t})).sort((t,s)=>t.sort-s.sort).map(t=>t.value),$=document.querySelector(".image__button"),k=document.querySelector(".hero__skills"),P=g(h).slice(0,7);k.innerHTML=P.map((e,t)=>`
        <div class="icon__container skill-${t}" >
      <iconify-icon
        class="skills__icons "
        icon="${e.icon}"
      ></iconify-icon>
      </div>
    `).join("");$.addEventListener("click",()=>{const e=g(h).slice(0,7);k.innerHTML=e.map((t,s)=>`

        <div class="icon__container skill-${s}">
      <iconify-icon
        class="skills__icons "
        icon="${t.icon}"
      ></iconify-icon>
      </div>
    `).join("")});const j=document.querySelector(".image__button"),I=document.querySelectorAll(".hero__skills");let p=0;function C(){p++,p===9&&(document.documentElement.classList.add("customScheme"),document.documentElement.classList.remove("dark","dark-mode"),localStorage.setItem("theme","customScheme"),I.forEach(e=>{e.style.display="none"}))}j.addEventListener("click",C);const M="&api_key=wmbjfv0ybbzjsaceaojxrbm9aaelzzq2bbe7mgws",T=async e=>{const t=`${M}`,o=`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${e}`)}&api_key=${t}`;try{const r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const n=await r.json();if(n.items&&n.items.length>0)return n.items;throw new Error("No videos found in the feed.")}catch(r){throw console.error("Error fetching videos:",r),r}},A=document.querySelector(".youtube__button"),x=document.querySelector(".modal__close__button"),D=document.querySelector(".youtubeThumbnail"),B=document.querySelector("iframe"),H="UC36_js-krsAHAEAWpEDhHtw",V=(e,t)=>{const s=e.getAttribute("vnum"),o=t[s],n=`https://youtube.com/embed/${o.link.split("v=")[1]}?controls=1&autoplay=1`;e.setAttribute("src",n),D.style.backgroundImage=o.thumbnail===""?"url('/img/portadaLIVE.png')":`url(${o.thumbnail})`,A.addEventListener("click",()=>{document.querySelector("dialog").showModal(),e.setAttribute("src",n)}),x.addEventListener("click",()=>{document.querySelector("dialog").close(),B.setAttribute("src","")})},U=async e=>{try{const t=await T(H);V(e,t)}catch(t){console.error("Error loading video:",t)}},f=document.getElementsByClassName("latestVideoEmbed");f.length>0&&U(f[0]);const d=document.querySelector(".toast-alerts");function a(e,t="info"){if(!d){console.error("Toast container not found.");return}let s;switch(t){case"success":s="success";break;case"error":s="error";break;case"warning":s="warning";break;default:s="info"}const o=document.createElement("div");o.classList.add("toast-message",s),o.innerHTML=e,d.appendChild(o),d.classList.add("show"),document.querySelectorAll(".toast-message"),setTimeout(()=>{o.remove()},5e3)}const u=document.querySelector(".loader");let O="el mensaje se envió correctamente 🚀",z="debes completar todos los campos 🙄";const N=()=>{document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("form");async function t(o){const r=new FormData(o);try{u.classList.add("success");const n=await fetch("/api/email-sender",{method:"POST",body:r});if(n.ok){const i=await n.json();document.querySelector("#nameError").textContent="",document.querySelector("#emailError").textContent="",document.querySelector("#subjectError").textContent="",document.querySelector("#messageError").textContent="",u.classList.remove("success"),o.reset(),a(O,"success")}else u.classList.remove("success"),a(z,"error")}catch(n){console.error("Error:",n)}}e.addEventListener("submit",o=>{o.preventDefault(),t(e)});function s(o){const r=e.querySelector(`#${o}`),n=r.value.trim(),i=document.getElementById(`${o}Error`);let c="";switch(o){case"name":n===""&&(c="Please enter your name.",a(c,"warning"));break;case"email":n===""?(c="Please enter your email.",a(c,"warning")):/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(n)||(c="Please enter a valid email.",a(c,"warning"));break;case"subject":n===""&&(c="Please enter a subject.",a(c,"warning"));break;case"message":n===""&&(c="Please enter your message.",a(c,"warning"));break}i.textContent=c,r.classList.toggle("input-error",!!c)}["name","email","subject","message"].forEach(o=>{e.querySelector(`#${o}`).addEventListener("blur",()=>s(o))})})};N();const R=document.querySelector(".btn__red"),Y=document.querySelector(".popup");R.addEventListener("click",()=>{Y.close()});