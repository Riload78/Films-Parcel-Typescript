!function(){let e="https://api.themoviedb.org/3/",t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGUyZWRjM2ZiODU0ZWQ4Nzc0NDk2YjNjOGFhOWFiNSIsInN1YiI6IjYyMTEyOTU4YTI0MjMyMDAxY2JkYmQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pVI8_DJuhZaTHVCuDuNQaThNVLBUEQ2A9t9yOx4kc3k"}},a=async a=>{try{let o=`${e}movie/now_playing?language=es_ES&page=${a}`,r=await fetch(o,t),n=await r.json();console.log(n);let s=await l();return await i(n,s)}catch(e){throw Error(e)}},l=async()=>{try{let a=`${e}genre/movie/list?language=es`,l=await fetch(a,t),o=await l.json();return console.log("gender:",o),o}catch(e){throw Error(e)}},o=async(e,t)=>e.map(e=>{let a=t.genres.find(t=>t.id===e);return a?a.name:"Género desconocido"}),i=async(e,t)=>{let a=[];for(let l of e.results){let e={id:l.id,title:l.title,overview:l.overview,release_date:new Date(l.release_date),genre:await o(l.genre_ids,t),image:null!==l.poster_path?`https://image.tmdb.org/t/p/original/${l.poster_path}`:"No hay imagen"};a.push(e)}return a},r=(e,t)=>(t.innerHTML=`
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
    `,t),n=async e=>{let t=async e=>{void 0===e&&(e=1);let t=await a(e);return console.log(t),t},l=t=>{for(let a of(document.createElement("div").classList.add("container"),t)){let t=document.createElement("div");t.classList.add("col");let l=r(a,t);e.appendChild(l)}let a=e.querySelectorAll(".col");a[a.length-1]},o=t=>{t&&t.disconnect();let a=e.querySelectorAll(".col");console.log(a);let l=a[a.length-1];console.log(l),t.observe(l)};l(await t()),(()=>{let e=1,a=new IntersectionObserver(async i=>{console.log(i),i[0].isIntersecting&&(e+=1,console.log("Ejecuto una accion cuando el elemento esta visible"+i[0].target),l(await t(e)),o(a))});o(a)})()},s={type:"error",message:'Element with ID "list-wrapper" not found.'};document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("list-wrapper");if(!e)throw s;n(e)})}();
//# sourceMappingURL=index.56638e12.js.map
