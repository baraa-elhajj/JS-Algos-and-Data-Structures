const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

// Used to make HTTP requests like GET, POST, PUT, etc.
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    // converts the result into JSON    
    .then((res) => res.json())
    // do something with the result
    .then((data) => {
        // puts the result data (array of authors) into an array.
        authorDataArr = data;
        // slice() is immutable, it returns a new array with the sliced part of the original array.
        displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
    })
    .catch((err) => {
        authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
    });

const fetchMoreAuthors = () => {
    startingIndex += 8;
    endingIndex += 8;

    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
    if (authorDataArr.length <= endingIndex) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.cursor = "not-allowed";
        loadMoreBtn.textContent = 'No more data to load';
    }
};

const displayAuthors = (authors) => {
    // destructing authors object.
    authors.forEach(({ author, image, url, bio }, index) => {
        authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar">
      <div class="purple-divider"></div>
      <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author} author page</a>
    </div>
  `;
    });
};

loadMoreBtn.addEventListener('click', fetchMoreAuthors);