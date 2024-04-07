import { Film } from "../utils/interface"
const apiUrl = process.env.API_BASE_URL
const apiUrlImage = process.env.API_BASE_IMAGE_URL
const authToken = process.env.AUTH_TOKEN

const options: object = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authToken}`
    }
}


export const getLastFilms = async () : Promise<any> => {
    try {
        const url = `${apiUrl}movie/now_playing?language=es_ES&page=1`
        const response = await fetch(url, options)
        const data = await response.json()
        const films = getParseData(data)
        console.log(data);
        return films   

    } catch (error) {
        throw new Error(error)
    }
}

const getGenres = async () : Promise<any> => {
    try {
        const url = `${apiUrl}genre/movie/list?language=es`
        const response = await  fetch(url, options)
        const data = await response.json()
        console.log('gender:', data);
        return data
        
    } catch (error) {
        throw new Error(error);
        
    }
}

const getGenreNamesByIds = async (genreIds:number[]) => {
    const genresData = await getGenres()
    return genreIds.map(id => {
        const genre = genresData.genres.find(genre => genre.id === id);
        return genre ? genre.name : 'Género desconocido';
    });
}

const getParseData = async (data: object) =>  {
    let films =  [] as Film[]
    for (const element of data.results) {
        let film : Film =  {
            id: element.id,
            title: element.title,
            overview: element.overview,
            release_date: new Date(element.release_date),
            genre: await getGenreNamesByIds(element.genre_ids),
            image: element.poster_path !== null ? `${apiUrlImage}${element.poster_path}` : "No hay imagen",
        }
        films.push(film)        
    };
    return films
}
