const movieList = document.getElementById('row');

let listOfMovies = '';

fetch('https://silverbird-scraper.glitch.me/movies')
    .then(response => {
        response.json().then((result) => {
            result.movies.map(({ thumbnail, title, url, showtime, release }) => {
                listOfMovies = listOfMovies +
                    `
                    <div class="col-lg-4 col-md-6" style="padding:10px">
                        <div class="card" style="padding:10px">
                            <img class="card-img-top" src="${thumbnail}">
                            <div class="card-body">
                            <h5 class="card-title" style="color:#2A96C8;font-weight:700">${title}</h5>
                            <p> <span style="color:#B34E4B">Showtime</span> :  ${showtime} </p>
                            <p><span style="color:#B34E4B">Release date</span> :  ${release}</p>
                            <a class="btn btn" href ="${url}" style=" background-color:#2A96C8; color:#fff">See more</a>
                            </div>
                        </div>
                    </div>
                    `

            })
            movieList.innerHTML = listOfMovies;

        })

    })


let changeOption = () => {
    let selection = document.getElementById('genre').value;

    fetch('https://silverbird-scraper.glitch.me/movies')
        .then(response => {
            response.json().then((result) => {

                const genreList = document.getElementById('grid');
                let listOfGenres = [];

                result.movies.map(({ thumbnail, title, url, genres }) => {
                    genrelength = genres.length;
                    for (i = 0; i <= genrelength; i++) {

                        if (selection == genres[i]) {
                            listOfGenres = listOfGenres + `
                                <div class="col-lg-4" style="padding:10px">
                                    <div class="card" style="padding:10px">
                                        <img class="card-img-top" src="${thumbnail}">
                                        <div class="card-body">
                                        <h5 class="card-title" style="color:#2A96C8">${title}</h5>
                                        <p> <span style="color:#B34E4B"> Genre </span>: ${genres}</p>
                                        <a class="btn btn" href ="${url}" style=" background-color:#2A96C8; color:#fff">See more</a>
                                        </div>
                                    </div>
                                </div>
                            `

                        }

                    }

                })
                genreList.innerHTML = listOfGenres;
            })
        })
}