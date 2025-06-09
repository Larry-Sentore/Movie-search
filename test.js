const URL = "https://api.tvmaze.com/search/shows?q=breaking";

fetch(URL)
  .then(function(resolved_response) {
    return resolved_response.json();
  })
  .then(function(resolved_data) {
    const show = resolved_data[0].show;
    console.log(show.name);
    console.log(show.summary);

    const genres = show.genres;
    for (let genre of genres) {
      console.log(genre);
    }
  })
  .catch(function(error) {
    console.error("Error fetching or parsing data:", error);
  });
