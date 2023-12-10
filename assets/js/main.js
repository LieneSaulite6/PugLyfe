// Grab elements

const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error('Something went wrong, make sure that ${selector} is typed correctly.');
};

//Nav styles on scroll

const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader);
// Open menu & search pop-up

const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup

const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));

// -- Close the search form popup on ESC keypress

window.addEventListener('keyup', event => {
    if (event.key === 'Escape') searchFormContainer.classList.remove('activated');
});

// Switch theme/add to local storage

const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
});

// Swiper

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true, // Enable or disable the buttons
  },

  pagination: {
      el: '.swiper-pagination'
  },

  breakpoints: {
      700: {
          slidesPerView: 2
      },
      1200: {
          slidesPerView: 3
      }
  },
});

// Disable navigation buttons on initialization
disableNavigationButtons();

// Function to disable navigation buttons if on the first or last slide
function disableNavigationButtons() {
  const prevArrow = document.querySelector('.swiper-button-prev');
  const nextArrow = document.querySelector('.swiper-button-next');

  if (swiper.isBeginning) {
      prevArrow.classList.add('swiper-button-disabled');
  } else {
      prevArrow.classList.remove('swiper-button-disabled');
  }

  if (swiper.isEnd) {
      nextArrow.classList.add('swiper-button-disabled');
  } else {
      nextArrow.classList.remove('swiper-button-disabled');
  }
}

// Update navigation buttons on slide change
swiper.on('slideChange', function () {
  disableNavigationButtons();
});

// Intercept click event on arrows to prevent default action if disabled
document.querySelector('.swiper-button-prev').addEventListener('click', function (e) {
  if (swiper.isBeginning) {
      e.preventDefault();
  }
});

document.querySelector('.swiper-button-next').addEventListener('click', function (e) {
  if (swiper.isEnd) {
      e.preventDefault();
  }
});


//For Search (source https://www.youtube.com/watch?v=bRdjEpodiaQ)

let searchable = [
  { name: 'Paws and the City: A Pugs Guide to New York', link: 'adventure1.html' },
  { name: 'Pugtastic Tales of San Francisco Streets', link: 'adventure2.html' },
  { name: 'Pugventures in Paris: City of Love and Baguettes', link: 'adventure3.html' },
  { name: 'London Barks: A Pugs Tour of the UK Capital', link: 'adventure4.html' },
  { name: 'Paws and Salsa: A Pugs Fiesta in Mexico City', link: 'adventure5.html' },
  { name: 'Tokyo Tails: A Pugs Journey Through Japans Capital', link: 'adventure6.html' },

  { name: 'Pawtraits and Masterpieces: A Pugs Guide to Canine Artistry', link: 'art1.html' },
  { name: 'Snout Sketches: The Art of Pug Doodling', link: 'art2.html' },
  { name: 'Paws and Prints: A Pugs Adventure in Paw-Painting', link: 'art3.html' },
  { name: 'Pugtastic Pixels: A Digital Pugs Journey into Virtual Art', link: 'art4.html' },
  { name: 'The Barkitecture Chronicles: A Pugs Perspective on Canine Design', link: 'art5.html' },
  { name: 'Pug Graffiti: Street Art with a Canine Twist', link: 'art6.html' },

  { name: 'Pawshion Forward: A Pugs Guide to Spring Trends', link: 'fashion1.html' },
  { name: 'Runway to Dog Park: A Year in Review of Pug Fashion', link: 'fashion2.html' },
  { name: 'Winter Wonderland Woofs: Pug Couture for the Cold Season', link: 'fashion3.html' },
  { name: 'Pugoween Glam: Spooky and Stylish Halloween Costumes', link: 'fashion4.html' },
  { name: 'Autumn Leaves and Pug Sleeves: Fall Fashion Finds', link: 'fashion5.html' },
  { name: 'Summer Barkbecue Chic: Cool Canine Couture for Hot Days', link: 'fashion6.html' },

  { name: 'Paws and Giggles: A Pugs Guide to Canine Comedy', link: 'laughs1.html' },
  { name: 'Snorts and Chuckles: Pug-approved Jokes to Brighten Your Day', link: 'laughs2.html' },
  { name: 'Pugnificent Memes: A Tail of Laughter and Wiggles', link: 'laughs3.html' },
  { name: 'The Bark Side of Life: Pug Jokes That Speak to Every Dog Lover', link: 'laughs4.html' },
  { name: 'Pawsitively Pugtastic: A Pugs Comedic Take on Everyday Canine Antics', link: 'laughs5.html' },
  { name: 'Pugnacious Puns: A Pawsome Collection of Doggy Wordplay', link: 'laughs6.html' },
  
  { name: 'Pawesome Pug Pancakes: A Fluffy Breakfast Delight', link: 'noms1.html' },
  { name: 'Bark-a-licious Banana Bites: A Healthy and Tasty Snack', link: 'noms2.html' },
  { name: 'Snout-lickin Peanut Butter Pupcakes: A Canine Cupcake Extravaganza', link: 'noms3.html' },
  { name: 'Pugs Delight Meatballs: A Savory Sensation', link: 'noms4.html' },
  { name: 'Cozy Carrot Crunchies: A Veggie-Filled Treat', link: 'noms5.html' },
  { name: 'Berry Bliss Frozen Yogurt: A Cool Canine Dessert', link: 'noms6.html' },

  { name: 'The Great Sock Caper: A Pugs Tale of Sneaky Mischief', link: 'tales1.html' },
  { name: 'Paw-some Adventures in the Land of Tails: A Pugs Fantasy Odyssey', link: 'tales2.html' },
  { name: 'The Barktastic Birthday Bash: A Pugs Guide to Paw-ty Planning', link: 'tales3.html' },
  { name: 'The Pug Who Loved Ice Cream a Bit Too Much: A Brain Freeze Saga', link: 'tales4.html' },
  { name: 'The Secret Society of Napping: A Pugs Guide to Cozy Conspiracies', link: 'tales5.html' },
  { name: 'The Epic Quest for the Elusive Tail: A Pugs Odyssey of Self-Discovery', link: 'tales6.html' },

  { name: 'Adventures', link: 'categories-adventures.html' },
  { name: 'Art', link: 'categories-art.html' },
  { name: 'Fashion', link: 'categories-fashion.html' },
  { name: 'Laughs', link: 'categories-laughs.html' },
  { name: 'Noms', link: 'categories-noms.html' },
  { name: 'Tales', link: 'categories-tales.html' },
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length || !searchInput.value.trim()) {
    searchWrapper.classList.remove('show');
    resultsWrapper.innerHTML = '';
    return;
  }

  const maxResultsToShow = 10; // Set the maximum number of results to display
  const limitedResults = results.slice(0, maxResultsToShow);

  const content = limitedResults
    .map((item) => {
      return `<li><a href='${item.link}'>${item.name}</a></li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}
