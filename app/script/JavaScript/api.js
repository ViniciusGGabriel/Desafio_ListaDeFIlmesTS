"use strict";
const apiKey = "7f4cdcf564250599b852eca228dd9044";
const popularMovies = document.getElementById("carrossel_popular_movies");
async function requestApiTMDB(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}
async function innerPopularMovies() {
    popularMovies.innerHTML = "";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    const responseData = await requestApiTMDB(url);
    if (responseData && responseData.results) {
        const movies = responseData.results;
        movies.forEach((movie) => {
            const popularMoviesList = document.createElement("div");
            popularMoviesList.classList.add("carrossel");
            popularMoviesList.innerHTML = `
            <div class="article-card">
                <div class="content">
                    <p class="img_title_carrossel mt-auto mb-2 text-white">${movie.title}</p>
                </div>
                <img
                src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}"
                alt="${movie.title}"/> 
            </div>
    `;
            popularMovies.appendChild(popularMoviesList);
        });
    }
}
innerPopularMovies();
