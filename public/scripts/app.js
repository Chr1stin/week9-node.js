const movieTitle = document.querySelector(".movie-title");
const movieRating = document.querySelector(".movie-rating");
const releaseDate = document.querySelector(".release-date");
const movieGenres = document.querySelector(".genres");
const movieDuration = document.querySelector(".movie-duration");
const moviePoster = document.querySelector(".movie-poster-container img");
const movieInfoQuote = document.querySelector(".movie-info-quote");
const movieOverview = document.querySelector(".movie-info-overview");

window.onload = () => {
    
    let url = 'https://api.themoviedb.org/3/movie/245891git ?api_key=d6786e3599ab20d71b44ad7c375c6d25';
    
    fetch(url) 
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        movieTitle.textContent = data.title;
        
        let date = new Date(data.release_date);
        releaseDate.textContent = `${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;
        movieDuration.textContent = `${data.runtime} minutes`; 
        /* ` backtick */
        movieInfoQuote.textContent = data.tagline;
        movieOverview.textContent = data.overview;

        let posterUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
        moviePoster.src = posterUrl;
        moviePoster.alt = `${data.title} poster`;
      /*See genres pole sama, mis ülal nimetatud "genres", see on javascirpti enda muutuja, mis on vahemälus */
        let genresToDisplay = "";


        /* See data.genres tuleb objektist- jsonist. automaatselt paneb otsima genres' arvu.*/
        data.genres.forEach(genre => {
            genresToDisplay = genresToDisplay + `${genre.name},`;
            
        });
        console.log(genresToDisplay)
        let genresUpdated = genresToDisplay.slice(0,-2) + ".";
       movieGenres.textContent =genresUpdated;

     });
    }
