export interface CustomError {
    type: string,
    message: string
}

export interface Film {
    id?: number,
    title: string,
    overview: string,
    release_date: Date | null,
    genre: [] | string[],    
    image: string 

}


