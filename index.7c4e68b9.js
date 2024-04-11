const e=void 0,t=void 0,a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer undefined"}},o=async t=>{try{let o=`${e}movie/now_playing?language=es_ES&page=${t}`,r=await fetch(o,a),i=await r.json();console.log(i);let s=await l();return await n(i,s)}catch(e){throw Error(e)}},l=async()=>{try{let t=`${e}genre/movie/list?language=es`,o=await fetch(t,a),l=await o.json();return console.log("gender:",l),l}catch(e){throw Error(e)}},r=async(e,t)=>e.map(e=>{let a=t.genres.find(t=>t.id===e);return a?a.name:"Género desconocido"}),n=async(e,a)=>{let o=[];for(let l of e.results){let e={id:l.id,title:l.title,overview:l.overview,release_date:new Date(l.release_date),genre:await r(l.genre_ids,a),image:null!==l.poster_path?`${t}${l.poster_path}`:"No hay imagen"};o.push(e)}return o},i=(e,t)=>(t.innerHTML=`
        <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${e.image}?as=webp&width=500" class="img-fluid" />
                <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                </a>
            </div>
            <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text">
                    ${e.overview}
                </p>
            </div>
            <div class="card-footer">
                ${e.genre.map(e=>`<span class="badge rounded-pill bg-dark g-3">${e}</span>`).join(" ")}
            </div>
        </div>
    `,t),s=async e=>{let t=async e=>{void 0===e&&(e=1);let t=await o(e);return console.log(t),t},a=t=>{for(let a of(document.createElement("div").classList.add("container"),t)){let t=document.createElement("div");t.classList.add("col");let o=i(a,t);e.appendChild(o)}let a=e.querySelectorAll(".col");a[a.length-1]},l=t=>{t&&t.disconnect();let a=e.querySelectorAll(".col");console.log(a);let o=a[a.length-1];console.log(o),t.observe(o)};a(await t()),(()=>{let e=1,o=new IntersectionObserver(async r=>{console.log(r),r[0].isIntersecting&&(e+=1,console.log("Ejecuto una accion cuando el elemento esta visible"+r[0].target),a(await t(e)),l(o))});l(o)})()},c={type:"error",message:'Element with ID "list-wrapper" not found.'};document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("list-wrapper");if(!e)throw c;s(e)});
//# sourceMappingURL=index.7c4e68b9.js.map
