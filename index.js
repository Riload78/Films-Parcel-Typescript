const $e777d4fe0c07d99a$var$apiUrl = undefined;
const $e777d4fe0c07d99a$var$apiUrlImage = undefined;
const $e777d4fe0c07d99a$var$authToken = undefined;
const $e777d4fe0c07d99a$var$options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${$e777d4fe0c07d99a$var$authToken}`
    }
};
const $e777d4fe0c07d99a$export$abcf9bca77844134 = async (page)=>{
    try {
        const url = `${$e777d4fe0c07d99a$var$apiUrl}movie/now_playing?language=es_ES&page=${page}`;
        const response = await fetch(url, $e777d4fe0c07d99a$var$options);
        const data = await response.json();
        console.log(data);
        const genresData = await $e777d4fe0c07d99a$var$getGenres();
        const films = await $e777d4fe0c07d99a$var$getParseData(data, genresData);
        return films;
    } catch (error) {
        throw new Error(error);
    }
};
const $e777d4fe0c07d99a$var$getGenres = async ()=>{
    try {
        const url = `${$e777d4fe0c07d99a$var$apiUrl}genre/movie/list?language=es`;
        const response = await fetch(url, $e777d4fe0c07d99a$var$options);
        const data = await response.json();
        console.log("gender:", data);
        return data;
    } catch (error) {
        throw new Error(error);
    }
};
const $e777d4fe0c07d99a$var$getGenreNamesByIds = async (genreIds, genresData)=>{
    return genreIds.map((id)=>{
        const genre = genresData.genres.find((genre)=>genre.id === id);
        return genre ? genre.name : "G\xe9nero desconocido";
    });
};
const $e777d4fe0c07d99a$var$getParseData = async (data, genresData)=>{
    let films = [];
    for (const element of data.results){
        let film = {
            id: element.id,
            title: element.title,
            overview: element.overview,
            release_date: new Date(element.release_date),
            genre: await $e777d4fe0c07d99a$var$getGenreNamesByIds(element.genre_ids, genresData),
            image: element.poster_path !== null ? `${$e777d4fe0c07d99a$var$apiUrlImage}${element.poster_path}` : "No hay imagen"
        };
        films.push(film);
    }
    return films;
};


const $11d171d2a66934d8$export$5f16c92464781569 = (film, listWrapper)=>{
    const renderGenrers = (genrers)=>{
        return genrers.map((genrer)=>`<span class="badge rounded-pill bg-dark g-3">${genrer}</span>`).join(" ");
    };
    listWrapper.innerHTML = `
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
    `;
    return listWrapper;
};


const $0beaa18bbfbb87f8$export$5060af7baf5cca60 = async (listWrapper)=>{
    const loadFilms = async (page)=>{
        if (page === undefined) page = 1;
        const films = await (0, $e777d4fe0c07d99a$export$abcf9bca77844134)(page);
        console.log(films);
        return films;
    };
    const handlerListBuild = (films)=>{
        const listContainer = document.createElement("div");
        listContainer.classList.add("container");
        for (const film of films){
            const cardFilmElement = document.createElement("div");
            cardFilmElement.classList.add("col");
            const cardFilm = (0, $11d171d2a66934d8$export$5f16c92464781569)(film, cardFilmElement);
            listWrapper.appendChild(cardFilm);
        }
        const filmsInPage = listWrapper.querySelectorAll(".col");
        const lastFilmInPage = filmsInPage[filmsInPage.length - 1];
    };
    const handlerLoadPage = ()=>{
        let pages = 1;
        const observerLoadPage = new IntersectionObserver(async (entries)=>{
            console.log(entries);
            if (!entries[0].isIntersecting) return;
            pages += 1;
            console.log("Ejecuto una accion cuando el elemento esta visible" + entries[0].target);
            const films = await loadFilms(pages);
            handlerListBuild(films);
            lastItem(observerLoadPage);
        });
        lastItem(observerLoadPage);
    };
    const lastItem = (observerLoadPage)=>{
        if (observerLoadPage) observerLoadPage.disconnect(); // Desconectar el observador anterior antes de crear uno nuevo
        const filmsInPage = listWrapper.querySelectorAll(".col");
        console.log(filmsInPage);
        const lastFilmInPage = filmsInPage[filmsInPage.length - 1];
        console.log(lastFilmInPage);
        observerLoadPage.observe(lastFilmInPage);
    };
    const films = await loadFilms();
    handlerListBuild(films);
    handlerLoadPage();
};


const $ad1d3652ac9201c7$var$errorHtlml = {
    type: "error",
    message: 'Element with ID "list-wrapper" not found.'
};
const $ad1d3652ac9201c7$var$error = {
    type: "error",
    message: 'Element with ID "list-wrapper" not found.'
};
document.addEventListener("DOMContentLoaded", ()=>{
    const listWrapper = document.getElementById("list-wrapper");
    if (!listWrapper) throw $ad1d3652ac9201c7$var$error;
    (0, $0beaa18bbfbb87f8$export$5060af7baf5cca60)(listWrapper);
});


//# sourceMappingURL=index.js.map
