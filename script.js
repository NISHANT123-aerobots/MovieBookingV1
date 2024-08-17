const movies = {
  romantic: [
      {
          title: "The Notebook",
          description: "A tale of love and loss over the years.",
          image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
      },
      {
          title: "La La Land",
          description: "A jazz musician and an aspiring actress fall in love.",
          image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
      },
      {
          title: "Pride and Prejudice",
          description: "A classic romance of wit and heart.",
          image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
      },
      {
          title: "Titanic",
          description: "An epic love story aboard a doomed ship.",
          image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
      },
      {
          title: "A Star is Born",
          description: "A musician helps a young singer find fame.",
          image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
      },
      {
          title: "The Fault in Our Stars",
          description: "Two teens with cancer find love.",
          image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"
      }
  ],
  action: [
      {
          title: "Mad Max: Fury Road",
          description: "A post-apocalyptic chase across the wasteland.",
          image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"
      },
      {
          title: "John Wick",
          description: "An ex-hitman seeks vengeance.",
          image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"
      },
      {
          title: "Gladiator",
          description: "A betrayed Roman general seeks revenge.",
          image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
      },
      {
          title: "The Dark Knight",
          description: "Batman battles the Joker in Gotham City.",
          image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
      },
      {
          title: "Inception",
          description: "A mind-bending heist within dreams.",
          image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
      },
      {
          title: "Die Hard",
          description: "A cop takes on terrorists in a skyscraper.",
          image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
      }
  ],
  anime: [
      {
          title: "Spirited Away",
          description: "A young girl enters a world of spirits.",
          image: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg"
      },
      {
          title: "Your Name",
          description: "Two teenagers share a profound connection.",
          image: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"
      },
      {
          title: "Akira",
          description: "A young man with psychic abilities causes havoc.",
          image: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg"
      },
      {
          title: "Princess Mononoke",
          description: "A prince gets involved in a struggle between gods.",
          image: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg"
      },
      {
          title: "My Neighbor Totoro",
          description: "Two girls befriend a mystical forest spirit.",
          image: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg"
      },
      {
          title: "Ghost in the Shell",
          description: "A cyborg policewoman hunts a hacker.",
          image: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg"
      }
  ]
};


function Movie(event) {
    console.log("Movie function called");
    document.getElementById("movies-container").innerHTML = '';
    
    const cat = event.target.textContent.toLowerCase();
    console.log(cat);
    const select = cat === 'home' ? [...movies.romantic, ...movies.action, ...movies.anime] : movies[cat];
    console.log(select);
    
    select.forEach((element) => {
        console.log(element.title);
        document.getElementById("movies-container").innerHTML += `
            <div class="movie-card">
                <img src="${element.image}" alt="Movie 1">
                <h3>${element.title}</h3>
                <p>${element.description}</p>
                <button onclick="storeBookingDetails('${element.title}', '${element.description}','${element.image}')">Book Now</button>
            </div>`;
    });
}

window.onload = function() {
    const homeEvent = { target: { textContent: 'Home' } };
    Movie(homeEvent);
};

function storeBookingDetails(title, description, image) {
    localStorage.setItem('MovieTitle', title);
    localStorage.setItem('MovieDescription', description);
    localStorage.setItem('MovieImage', image);
    window.location.href = 'booking.html';
}



// function displayMovies(event) {
//     event.preventDefault();
//     document.getElementById("movies-container").innerHTML = '';
    
//     const category = event.target.textContent.toLowerCase();
//     const selectedMovies = category === 'home' ? [...movieData.romantic, ...movieData.action, ...movieData.anime] : movieData[category];
    
//     selectedMovies.forEach((element) => {
//         const movieCard = `<div class="movie-card"> 
//                             <img src="${element.image}" alt="${element.title}">
//                             <h3>${element.title}</h3>
//                             <p>${element.description}</p>
//                             <button>Book Now</button>
//                            </div>`;
//         document.getElementById("movies-container").innerHTML += movieCard;
//     });
// }


// function createMovieCard(movie) {
//     const card = document.createElement('div');
//     card.className = 'movie-card';
//     card.innerHTML = `
//       <img src="${movie.image}" alt="${movie.title}">
//       <h3>${movie.title}</h3>
//       <p>${movie.description}</p>
//       <button>Book Now</button>
//     `;
//     return card;
// }

// function displayMovies(sectionName) {
//     const container = document.getElementById('movies-container');
//     container.innerHTML = ''; // Clear previous movies

//     if (sectionName === 'home') {
//         // Display all movies from all categories
//         for (const category in movies) {
//             movies[category].forEach(movie => {
//                 const movieCard = createMovieCard(movie);
//                 container.appendChild(movieCard);
//             });
//         }
//     } else {
//         // Display movies for the selected category only
//         movies[sectionName].forEach(movie => {
//             const movieCard = createMovieCard(movie);
//             container.appendChild(movieCard);
//         });
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const sections = {
//         home: document.getElementById('home-section'),
//         romantic: document.getElementById('romantic-section'),
//         action: document.getElementById('action-section'),
//         anime: document.getElementById('anime-section'),
//     };

//     function hideSections() {
//         for (const key in sections) {
//             sections[key].style.display = 'none';
//         }
//     }

//     function showSection(sectionName) {
//         hideSections();
//         sections[sectionName].style.display = 'block';
//         displayMovies(sectionName);
//     }

//     document.getElementById('home-link').addEventListener('click', () => showSection('home'));
//     document.getElementById('romantic-link').addEventListener('click', () => showSection('romantic'));
//     document.getElementById('action-link').addEventListener('click', () => showSection('action'));
//     document.getElementById('anime-link').addEventListener('click', () => showSection('anime'));

//     // Show all movies in the Home section on initial load
//     showSection('home');
// });
