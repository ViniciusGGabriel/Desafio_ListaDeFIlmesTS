const apiKey = "7f4cdcf564250599b852eca228dd9044";
const popularMovies = document.getElementById(
  "carrossel_popular_movies"
) as HTMLDivElement;

// Ambas funções são async, pois elas dependem de uma resposta da API
async function requestApiTMDB(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function innerPopularMovies() {
  // Inicia o HTML com um valor vazio
  popularMovies.innerHTML = "";

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  // Esperar pela resposta da API
  const responseData = await requestApiTMDB(url);

  if (responseData && responseData.results) {
    const movies = responseData.results;
    // Função forEach para cada filme dentro do array de filmes da resposta da API
    movies.forEach((movie: any) => {
      // Cria um elemento HTML e adiciona as classes
      const popularMoviesList = document.createElement("div");
      popularMoviesList.classList.add("carrossel");
      // Coloca dentro desse elemento criado outro elemento HTML
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

      // Adiciona o elemento criado dentro do elemento HTML com id "carrossel_popular_movies"
      popularMovies.appendChild(popularMoviesList);
    });
  }
}

innerPopularMovies();

/*
 */
