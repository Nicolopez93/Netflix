const key ='6265c33aee8691fe92f02436fe7ca8ff';  

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
};

export default requests