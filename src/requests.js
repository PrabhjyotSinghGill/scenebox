export const getMovieData = async (searchQuery) => {
    let result;
    let apiEndPoint = `http://www.omdbapi.com/?s=${searchQuery}&apikey=efaed3e9`;

    let responsePromise = fetch(apiEndPoint);
    let response = await responsePromise;

    let responseJsonPromise = response.json();
    let responseJson = await responseJsonPromise;
    
    console.log(responseJson);
    return result;
}

// Testing code
getMovieData('taken');
