"use strict";
const apiKey = "7f4cdcf564250599b852eca228dd9044";
const popularMovies = document.getElementById("carrossel_popular_movies");
const searchMovies = document.getElementById("search_popular_movies");
const searchBtn = document.getElementById("btn_submit_search");
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
            <div class="article-card-popular">
                <div class="content">
                <p class="title mt-auto mb-2 text-white">${movie.title}</p>
                <p class="date mt-auto mb-2 text-white">${movie.release_date}</p>
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
async function innerSearchMovies() {
    searchMovies.innerHTML = "";
    const search = document.getElementById("search");
    const searchValue = search.value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;
    const responseData = await requestApiTMDB(url);
    if (responseData && responseData.results) {
        const movies = responseData.results;
        movies.forEach((movie) => {
            const searchMoviesList = document.createElement("div");
            searchMoviesList.classList.add("search");
            searchMoviesList.innerHTML = `
      <div class="article-card-search">
      <div class="content">
      <p class="title mt-auto mb-2 text-white">${movie.title}</p>
      <p class="date mt-auto mb-2 text-white">${movie.release_date}</p>
                </div>
                <img
                src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
                alt="${movie.title}"/> 
                </div>
                `;
            searchMovies.appendChild(searchMoviesList);
        });
    }
}
searchBtn.addEventListener("click", innerSearchMovies);
innerPopularMovies();
