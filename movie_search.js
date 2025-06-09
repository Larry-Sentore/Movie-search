document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("searchForm");
    const resultDiv = document.getElementById("results");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const search_query = document.getElementById("searchInput").value;
        const URL = "https://api.tvmaze.com/search/shows?q=" + encodeURIComponent(search_query);

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    resultDiv.innerHTML = "<p>No results found.</p>";
                    return;
                }
                for (let i = 0; i < data.length; i++) {
                    const show = data[i].show;

                    resultDiv.innerHTML += `
                        <div class="show">
                            <h2>${show.name}</h2>
                            <p>${show.summary || "No summary available."}</p>
                            <p><strong>Genres:</strong> ${show.genres.join(", ")}</p>
                        </div>
                        <hr/>
                    `;
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);
                resultDiv.innerHTML = "<p>Error loading data.</p>";
            });
    });
});
