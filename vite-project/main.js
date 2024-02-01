import './style.css'
import { DOMSelectors } from './dom.js';


async function getData() {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error Data Cannot Be Found");
        return data; 
    }
}


async function submitVoteAvg() {
    const movies = await getData();
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]; //wha is dis????


    document.querySelector(".flex-container").innerHTML =  `${randomMovie.title}`

    DOMSelectors.poster.src = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
    DOMSelectors.poster.alt = randomMovie.title;
    document.querySelector(".flex-container").appendChild(DOMSelectors.poster);


    const real = randomMovie.vote_average;

 //submit button for game

 DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
});
 document.getElementById("guess-btn").addEventListener("click", function() {
 
  const answer = document.getElementById("search-btn").value;
 
    if (answer === real.toString()) {
      document.querySelector(".feedback").textContent = 'Congratulations Nerd! You are correct!';
    } else {
       document.querySelector(".feedback").textContent = `rlly dude, the actual voting average is ${real}.`;
    }
})
}

submitVoteAvg();


function roundVote(){
  
}



















/* 
// const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;  
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;
// insert display cards
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
});
function movInsert(arr) {
  document.querySelector(".flex-container").innerHTML = '';
      arr.forEach((card)=> {
        const {title, poster_path,} = card;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = 
       
      ` <div class= "card">
      <h1 class ="movTitle">${title}</h1>  
      <img src = "https://image.tmdb.org/t/p/w500${poster_path}" class ="movImg" alt = "">
    
      </div>
    `
      document.querySelector(".flex-container").appendChild(movieEl);
  });
}

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status !=200) {
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data)
    movInsert(data.results); 
   
    if (data.results.length === 0) {
      document.querySelector(".error").textContent = "No Results Found: try a good movie instead buddy";
      document.querySelector(".flex-container").innerHTML = "";
      return data
    }
  } catch (error) {
    document.querySelector(".error").textContent = "Error Data Cannot Be Found";
  }
}


getData(URL)





function searchGenre (){
//create a database for when genr

} */
 

