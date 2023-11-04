const apiKey = "7f4cdcf564250599b852eca228dd9044";

async function requestApiTMDB() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=" + apiKey
    );
    console.log(response.json());
  } catch (error) {
    console.error(error);
  }
}

requestApiTMDB();
