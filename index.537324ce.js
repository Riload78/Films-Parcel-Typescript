!function(){let e=void 0,t=void 0,a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer undefined"}},l=async t=>{try{let l=`${e}movie/now_playing?language=es_ES&page=${t}`,n=await fetch(l,a),i=await n.json();console.log(i);let s=await o();return await r(i,s)}catch(e){throw Error(e)}},o=async()=>{try{let t=`${e}genre/movie/list?language=es`,l=await fetch(t,a),o=await l.json();return console.log("gender:",o),o}catch(e){throw Error(e)}},n=async(e,t)=>e.map(e=>{let a=t.genres.find(t=>t.id===e);return a?a.name:"Género desconocido"}),r=async(e,a)=>{let l=[];for(let o of e.results){let e={id:o.id,title:o.title,overview:o.overview,release_date:new Date(o.release_date),genre:await n(o.genre_ids,a),image:null!==o.poster_path?`${t}${o.poster_path}`:"No hay imagen"};l.push(e)}return l},i=(e,t)=>(t.innerHTML=`
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
    `,t),s=async e=>{let t=async e=>{void 0===e&&(e=1);let t=await l(e);return console.log(t),t},a=t=>{for(let a of(document.createElement("div").classList.add("container"),t)){let t=document.createElement("div");t.classList.add("col");let l=i(a,t);e.appendChild(l)}let a=e.querySelectorAll(".col");a[a.length-1]},o=t=>{t&&t.disconnect();let a=e.querySelectorAll(".col");console.log(a);let l=a[a.length-1];console.log(l),t.observe(l)};a(await t()),(()=>{let e=1,l=new IntersectionObserver(async n=>{console.log(n),n[0].isIntersecting&&(e+=1,console.log("Ejecuto una accion cuando el elemento esta visible"+n[0].target),a(await t(e)),o(l))});o(l)})()},c={type:"error",message:'Element with ID "list-wrapper" not found.'};document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("list-wrapper");if(!e)throw c;s(e)})}();
//# sourceMappingURL=index.537324ce.js.map
