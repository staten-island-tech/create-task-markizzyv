import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

// const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;  

const URL = `https://imdb-api.com/en/API/Top250Movies/k_12345678`

async function getData(URL){
  try {
    const response = await fetch(URL);
    if (response.status !=200){
     
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
  
  }
}
getData(URL);


/* const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;

//insert display cards
function movInsert(arr) {


  document.querySelector(".flex-container").innerHTML = '';
  
  
      arr.forEach((card)=> {
        const {title, poster_path, vote_average} = card;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = 
       
      ` <div class= "card">
      <h1 class ="movTitle">${title}</h1>  
      <img src = "https://image.tmdb.org/t/p/w500${poster_path}" class ="movImg" alt = "">
      <p class ="movVoteAverage">${vote_average}</p>
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






 */




/* import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
 */

