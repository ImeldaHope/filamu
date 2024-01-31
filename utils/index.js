

export async function fetchFilms(filters:FilterProps){
    const {title, actor} = filters;
    const headers = {
        'X-RapidAPI-Key':process.env.FILAMU_RAPID_IMDB_API_KEY || '',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
    const response = await fetch (`https://imdb8.p.rapidapi.com/auto-complete?`,{
        headers:headers, 
    });

    const result = await response.json();
    
    return result;
}

