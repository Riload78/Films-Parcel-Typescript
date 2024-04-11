import { Film } from "../utils/interface"
export const buildListFilms = (film: Film, listWrapper:HTMLElement): HTMLElement => {
    const renderGenrers = (genrers:string[]): string =>{
        return genrers.map(genrer =>  `<span class="badge rounded-pill bg-dark g-3">${genrer}</span>` ).join(" ")
     }

    listWrapper.innerHTML =  `
        <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${film.image}?as=webp&width=500" class="img-fluid" />
                <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                </a>
            </div>
            <div class="card-body">
                <h5 class="card-title">${film.title}</h5>
                <p class="card-text">
                    ${film.overview}
                </p>
            </div>
            <div class="card-footer">
                ${renderGenrers(film.genre)}
            </div>
        </div>
    `

    return listWrapper
}