//////// GLOBAL VARIABLES ////////

const logger = (e) => console.log(e || 'logger');

const colors = {
  brown: 'rgb(145, 38, 38)',
  gray: 'rgb(105, 105, 105)',
  transparent: 'transparent',
  white: 'antiquewhite',
  whiteDark: 'rgb(216, 188, 152)',
};

const rawArrayOfItems = [
  {
    src: 'https://imagizer.imageshack.com/img922/705/yUCFWA.jpg',
    category: 'wd-item',
    price: 700_000,
    description: 'A mesmerizing bouquet that exudes a captivating charm with its carefully curated blend of enchanting flowers, adding an air of sophistication and elegance to any wedding celebration.',
    name: 'Enchanting Elegance',
  },
  {
    src: 'https://imagizer.imageshack.com/img923/9525/wyC99w.jpg',
    category: 'wd-item',
    price: 600_000,
    description: 'Delicate and romantic, this bouquet showcases an array of soft, blush-colored blooms, symbolizing love and tenderness. It creates a sweet and romantic ambiance, perfect for a dreamy wedding.',
    name: 'Blushing Blooms',
  },
  {
    src: 'https://imagizer.imageshack.com/img924/678/XLLOU2.jpg    ',
    category: 'wd-item',
    price: 500_000,
    description: 'A bouquet filled with whimsy and romance, combining playful elements with delicate floral accents. It effortlessly captures the essence of a fairytale love story, adding a touch of magic to the wedding day.',
    name: 'Whimsical Romance',
  },
  {
    src: 'https://imagizer.imageshack.com/img924/7243/COHUSu.jpg    ',
    category: 'wd-item',
    price: 500_000,
    description: 'Radiating grace and purity, this bouquet features the timeless beauty of gardenias, known for their fragrant and exquisite white blossoms. It exudes an aura of elegance and sophistication, creating a truly enchanting bridal accessory.',
    name: 'Graceful Gardenia',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/7401/DOZN2s.jpg    ',
    category: 'wd-item',
    price: 750_000,
    description: 'Bursting with vibrant colors and lively energy, this bouquet is a harmonious blend of bold and captivating blooms. It creates a joyful and energetic atmosphere, reflecting the celebration of love and happiness.',
    name: 'Radiant Rhapsody',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/6740/ZRjIKo.jpg    ',
    category: 'wd-item',
    price: 550_000,
    description: 'A tranquil and serene bouquet that evokes a sense of peace and tranquility. Composed of delicate flowers in soft pastel shades, it brings a serene and calming presence to the wedding, setting the stage for a harmonious celebration.',
    name: 'Serene Serenade',
  },
  {
    src: 'https://imagizer.imageshack.com/img924/9756/qXBIO7.jpg    ',
    category: 'wd-item',
    price: 450_000,
    description: 'A bouquet inspired by timeless beauty and classic elegance. It combines timeless flowers with a touch of modern flair, resulting in a harmonious arrangement that embodies the essence of everlasting love and cherished memories.',
    name: 'Timeless Treasures',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/2331/bufcTK.jpg    ',
    category: 'wd-item',
    price: 400_000,
    description: 'Step into a magical realm with this enchanting bouquet. It showcases a whimsical blend of ethereal flowers, creating a fairytale-like ambiance that will transport you and your guests to a world of enchantment and wonder.',
    name: 'Floral Fairytale',
  },
  {
    src: 'https://imagizer.imageshack.com/img923/554/4fIRH3.jpg    ',
    category: 'wd-item',
    price: 500_000,
    description: 'Overflowing with abundant blooms, this bouquet captures the essence of pure bliss and joy. It features an exquisite combination of flowers that symbolize new beginnings and promises of a beautiful journey ahead.',
    name: 'Blossoming Bliss',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/2313/9ZBigC.png',
    category: 'wd-item',
    price: 600_000,
    description: 'Delicate and ethereal, this bouquet creates a captivating aura with its soft and airy blooms. It wraps the bride in an enchanting embrace of beauty and grace, evoking a sense of otherworldly charm and romance.', 
    name: 'Ethereal Embrace',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/2686/4lONvp.jpg    ',
    category: 'dc-item',
    price: 400_000,
    description: 'A serene and elegant trellis adorned with delicate vines and blossoms, offering a sense of tranquility and natural beauty. It adds a touch of serenity and sophistication to any event or space.',
    name: 'Tranquil Trellis',
  },
  {
    src: 'https://imagizer.imageshack.com/img923/2646/2XWtcK.jpg    ',
    category: 'dc-item',
    price: 300_000,
    description: 'Immerse yourself in a world of botanical splendor with this blissful decor item. It showcases lush greenery, vibrant blooms, and a harmonious blend of natural elements, bringing a sense of tranquility and freshness to any space.',
    name: 'Botanical Bliss',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/1830/AFRxRH.jpg    ',
    category: 'dc-item',
    price: 350_000,
    description: 'Embrace the charm of rustic elegance with this rosewood decor piece. Crafted with a blend of weathered wood and delicate roses, it exudes a warm and inviting ambiance, perfect for creating a cozy and intimate atmosphere.',
    name: 'Rustic Rosewood',
  },
  {
    src: 'https://imagizer.imageshack.com/img924/6168/3j156b.png    ',
    category: 'dc-item',
    price: 250_000,
    description: 'Create a magical ambiance with these enchanting lanterns that cast a soft and flickering glow. Adorned with floral accents and intricate details, they add a touch of romance and mystique to weddings and events.',
    name: 'Enchanting Lanterns',
  },
  {
    src: 'https://imagizer.imageshack.com/img924/3443/mm1ltu.jpg    ',
    category: 'dc-item',
    price: 200_000,
    description: 'Elevate the ambiance with a touch of elegance through this charming chandelier. Its cascading flowers and delicate crystals create a captivating focal point, casting a warm and romantic light that transforms any space into a fairy tale setting.',
    name: 'Charming Chandelier',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/1830/b5R7Cq.jpg',
    category: 'dc-item',
    price: 200_000,
    description: 'A whimsical and intricately designed dreamcatcher featuring delicate flowers and natural elements. It not only captures dreams but also adds a touch of ethereal charm and enchantment to any setting.',
    name: 'Delicate Dreamcatcher',
  },
  {
    src: 'https://imagizer.imageshack.com/img924/1170/06DVn2.jpg    ',
    category: 'mn-item',
    price: 50_000,
    description: 'A dainty and enchanting mini bouquet composed of delicate petals and intricate foliage. It is a small bundle of floral beauty, perfect for adding a touch of elegance and charm to any occasion or gift.',
    name: 'Petite Petal Posy',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/651/4qAcSj.jpg    ',
    category: 'mn-item',
    price: 65_000,
    description: 'These mini bouquets are a testament to the wonders of nature captured in a small, exquisite arrangement. Each bloom is carefully selected to create a stunning display of vibrant colors and captivating textures.',
    name: 'Miniature Marvels',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/4223/VrlMV9.jpg    ',
    category: 'mn-item',
    price: 40_000,
    description: 'Embrace the sweet and innocent beauty of daisies with these darling mini bouquets. Featuring charming daisies in various hues, they bring a sense of cheerfulness and simplicity to any setting.',
    name: 'Darling Daisies',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/3715/NHEiAv.png    ',
    category: 'mn-item',
    price: 45_000,
    description: 'These mini bouquets exude a gentle and delicate aura, representing the tender emotions and heartfelt sentiments associated with special moments. They are a lovely way to express love, gratitude, or care in a compact and meaningful manner.',
    name: 'Tiny Tenderness',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/7360/PL04Wn.jpg    ',
    category: 'mn-item',
    price: 50_000,
    description: 'Celebrate the beauty of new beginnings with these delightful mini bouquets featuring blooming flower buds. They symbolize growth, potential, and the anticipation of blossoming into something magnificent.',
    name: 'Blooming Buds',
  },
  {
    src: 'https://imagizer.imageshack.com/img923/104/XomNWl.jpg',
    category: 'mn-item',
    price: 55_000,
    description: 'Discover the delicate and delightful nature of these mini bouquets. With their soft color palette and intricate floral arrangements, they create a sense of joy and appreciation for the small and beautiful things in life.',
    name: 'Delicate Delights',
  },
  {
    src: 'https://imagizer.imageshack.com/img923/6672/sihjJv.jpg    ',
    category: 'jw-item',
    price: 80_000,
    description: 'Immerse yourself in a world of floral beauty with our Floral Fantasy jewelry collection. Inspired by the vibrant colors and delicate forms of blooming flowers, each piece is meticulously crafted to capture the essence of nature artistry. Let these enchanting accessories transport you to a realm of floral dreams.',
    name: 'Floral Fantasy',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/7544/gquEDd.jpg    ',
    category: 'jw-item',
    price: 90_000,
    description: 'Experience the captivating charm of nature with our Nature Charm jewelry collection. From graceful leaves to intricate branches, each piece celebrates the wonders of the natural world. Adorn yourself with these organic-inspired designs and embrace the timeless elegance of nature.',
    name: 'Nature Charm',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/3192/GqBFpg.jpg    ',
    category: 'jw-item',
    price: 75_000,
    description: 'Unleash your inner strength and grace with our Petal Power jewelry collection. Featuring intricate petal motifs and graceful floral patterns, these pieces symbolize the resilience and beauty found in nature. Let the delicate petals empower you as you wear these stunning accessories.',
    name: 'Petal Power',
  },
  {
    src: 'https://imagizer.imageshack.com/img924/8886/0qlEZf.jpg    ',
    category: 'jw-item',
    price: 70_000,
    description: 'Step into a world of enchantment with our Enchanted Garden jewelry collection. Inspired by the magical allure of secret gardens, these pieces evoke a sense of whimsy and wonder. Embrace the mystical beauty of nature as you adorn yourself with these spellbinding accessories.',
    name: 'Enchanted Garden',
  },
  {
    src: 'https://imagizer.imageshack.com/img923/25/KbQ6sj.jpg',
    category: 'jw-item',
    price: 90_000,
    description: 'Embrace your free-spirited nature with our Whimsical Wildflower jewelry collection. Each piece captures the carefree essence of wildflowers, celebrating their natural beauty and delicate charm. Let these unique and playful accessories inspire your own wild and adventurous spirit.',
    name: 'Whimsical Wildflower',
  },
  {
    src: 'https://imagizer.imageshack.com/img924/4760/cS8vg5.jpg    ',
    category: 'fr-item',
    price: 120_000,
    description: 'Capture the essence of a blossoming garden with our Garden Serenade Floral frames. Adorned with delicate flowers and intricate details, these frames bring the beauty and serenity of nature into your cherished memories, creating a visual symphony of colors and fragrances.',
    name: 'Garden Serenade Floral',
  },
  {
    src: 'https://imagizer.imageshack.com/img922/310/8U6d21.jpg    ',
    category: 'fr-item',
    price: 130_000,
    description: 'Preserve your precious moments with our Botanical Treasures frames. These frames feature intricate botanical designs and showcase the delicate beauty of nature',
    name: 'Botanical Treasures',
  },
  {
    src: 'https://imagizer.imageshack.com/img924/9742/OJQwny.jpg    ',
    category: 'fr-item',
    price: 150_000,
    description: 'Create a peaceful and serene atmosphere with our Garden of Serenity frames. These frames capture the tranquility and harmony found in nature, featuring gentle hues and floral accents.',
    name: 'Garden of Serenity',
  },
  {
    src: 'https://imagizer.imageshack.com/img924/6130/lBtggL.jpg    ',
    category: 'fr-item',
    price: 145_000,
    description: 'Embark on a journey through blooming pathways with our Petal Pathways frames. These frames beautifully frame your memories with a touch of floral elegance, guiding you through a trail of petals and creating a captivating display of love and joy.',
    name: 'Petal Pathways',
  },
  {
    src: 'https://imagizer.imageshack.com/img923/1631/9fJ4RR.jpg',
    category: 'fr-item',
    price: 150_000,
    description: 'Preserve your special moments in our Blooming Memories frames. ',
    name: 'Blooming Memories',
  },
];
const itemsByCategory = { /* all, wd, dc, mn, jw, fr */};
const formatArrayOfItems = () => {
  const categories = [...new Set(rawArrayOfItems.map(item => item.category))];
  let output = [];
  categories.forEach(category => {
    const arrayOfItemsByCategory = rawArrayOfItems
      .filter(item => item.category === category)
      .map((item, index) => ({ ...item, alt: `${item.category}-${index+1}`, id: `${item.category}-${index+1}` }));
    output = [...output, ...arrayOfItemsByCategory];
    itemsByCategory[category.replace('-item','')] = [...arrayOfItemsByCategory];
  });
  itemsByCategory.all = [...output];
  return output;
};
const arrayOfItems = formatArrayOfItems();
const categoryTitles = {
  all: 'All',
  wd: 'Wedding Bouquet',
  mn: 'Mini Bouquet',
  dc: 'Room Decor',
  jw: 'Jewelry',
  fr: 'Frames',
};

//////// INITIAL VALUES ////////

let searchText = '';
let shownCategory = 'all';
let itemsInCart = [];

//////// UTILITY FUNCTIONS ////////

const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
  arr.slice(i * size, i * size + size)
);

//////// DOCUMENT FUNCTIONS ////////

const toggleSearchFocus = () => {
  const searchBar = document.getElementById("SearchBar");
  const isFocused = (document.activeElement === searchBar);
  if (isFocused) {
    searchBar.blur();
  } else {
    searchBar.focus();
  };
};

const scrollToCatalogSection = () => {
  const catalogSection = document.getElementById("CatalogSection");
  catalogSection.scrollIntoView();
};

const writeCategories = () => {
  const categoriesMenu = document.getElementById("CategoriesMenu");
  const menuItems = Object.entries(categoryTitles).map(entry => `
    <li
      onclick="setShownCategory('${entry[0]}')"
      class="category-selection ${entry[0] === shownCategory ? 'active-category' : ''}"
    >${entry[1]}</li>
  `).join('');
  categoriesMenu.innerHTML = menuItems;
}

const writeItems = () => {
  const iw = window.innerWidth;
  let chunkSize = 0; let cardWidth = 0;
  if (iw < 500) {
    chunkSize = 1; cardWidth = 220;
  } else if (iw >= 500 && iw < 800) {
    chunkSize = 2; cardWidth = 200;
  } else if (iw >= 800 && iw < 1100) {
    chunkSize = 3; cardWidth = 240;
  } else {
    chunkSize = 4; cardWidth = 300;
  };
  const contentInnerSlider = document.getElementsByClassName('content_inner_slider')[0];
  const allChunks = [];
  const gridItems = itemsByCategory[shownCategory]
    .filter(el => el.name.toLowerCase().includes(searchText.toLowerCase()))
    .map(el => `
      <div class="item-card" style="width:${cardWidth}px">
        <img src=${el.src} alt=${el.alt} style="width:${cardWidth}px;height:${cardWidth}px" class="catalog-item-image">
        <div class="card-body">
          <p class="item-title">${el.name}</p>
          <p class="item-description">
            ${el.description.length > 125 ? `${el.description.slice(0, 125)}... <span class="see-more-txt">(See more)</span>` : el.description}
          </p>
          <div class="item-card-footer-wrapper">
            <div class="item-card-footer-item">
              <button class="atc-btn" onclick="addItemToCart('${el.id}')">Add to Cart</button>
            </div>
            <div class="item-card-footer-item">
              <div class="item-price">Rp. ${el.price.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
          </div>
        </div>
      </div>
    `);
  const contentChunk = chunkArray(gridItems, chunkSize);
  contentChunk.forEach(chunk => allChunks.push(`<div class="content-chunk">
    ${chunk.join('')}
  </div>`));
  const dotsWrapper = document.getElementsByClassName('dots')[0];
  dotsWrapper.innerHTML = (new Array(contentChunk.length).fill().map((dot, i) => `<li class="dot" value="${i}"></li>`)).join('');
  contentInnerSlider.innerHTML = allChunks.join('');
};

//////// DYNAMIC STYLING SECTION ////////

// #Cart
const openCart = () => {
  document.getElementById("Cart").style.width = "500px";
  document.getElementById("PageBody").style.filter = "brightness(0.2)";
  document.getElementById("Background").style.filter = "brightness(0.2)";
};
const closeCart = () => {
  if(document.getElementById("Cart").style.width !== '0px') {
    document.getElementById("Cart").style.width = "0";
    document.getElementById("PageBody").style.filter = "brightness(1)";
    document.getElementById("Background").style.filter = "brightness(0.8)";
  };
};

// header
const adjustHeaderBg = () => {
  const { scrollY } = window;
  const header = document.getElementsByTagName("header")[0];
  if (scrollY === 0) header.style.backgroundColor = colors.transparent;
  if (scrollY > 10) header.style.backgroundColor = colors.brown;
};

// #LoadingScreen
const toggleLoading = () => {
  const loadingScreen = document.getElementById('LoadingScreen');
  const body = document.getElementById('PageBody');
  let loadingText = loadingScreen.getElementsByTagName('p')[0];
  const loadingTime = 0; // in milisecond
  // add dots during loading
  const addDotsDuringLoading = setInterval(() => {
    loadingText.innerHTML += '.';
  }, loadingTime/3)
  // switch from loading screen to main content
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    body.style.display = 'block';
    clearInterval(addDotsDuringLoading);
  }, loadingTime);
};

// .grid-container
const adjustGridContainerStyle = () => {
  const gridContainer = document.getElementsByClassName('catalog-grid-container')[0];
  const iw = window.innerWidth;
  let cols = 0;
  if (iw < 500) {
    cols = 1;
  } else if (iw >= 500 && iw < 800) {
    cols = 2;
  } else if (iw >= 800 && iw < 1100) {
    cols = 3;
  } else {
    cols = 4;
  };
  gridContainer.style['grid-template-columns'] = new Array(cols).fill().map(el => 'auto').join(' ');
};

// .item-footer-wrapper
const adjustItemFooterWrapperStyle = () => {
  const itemCardFooterWrappers = document.getElementsByClassName('item-card-footer-wrapper');
  const iw = window.innerWidth;
  let cols = 0;
  if (iw < 1000) {
    cols = 1;
  } else {
    cols = 2;
  };
  for (item of itemCardFooterWrappers) item.style['grid-template-columns'] = new Array(cols).fill().map(el => 'auto').join(' ');
};

//////// EVENT LISTENERS ////////
const onSearch = () => {
  const text = document.getElementById("SearchBar").value || '';
  searchText = text;
  writeItems();
};

const setShownCategory = (category='') => {
  shownCategory = category;
  writeCategories();
  writeItems();
  const catalogSection = document.getElementById("CatalogSection");
  window.scrollTo({ top: catalogSection.offsetTop, left: 0, behavior: 'smooth' });
};

const addItemToCart = (itemID='') => {
  const item = arrayOfItems.find(el => el.id === itemID);
  itemsInCart.push(item);
};

const removeItemFromCart = (item={}) => {
  const stringifiedItems = itemsInCart.map(el => JSON.stringify(el));
  const stringifiedItem = JSON.stringify(item);
  const match = stringifiedItems.find(el => el === stringifiedItem);
  const index = stringifiedItems.indexOf(match);
  const newItemsInCart = itemsInCart.splice(index, 1);
  itemsInCart = [...newItemsInCart];
};

//////// CAROUSEL ////////
const renderCarousel = function() {
  const helpers = (function () {
    function getDOMElements(DOMSelectors) {
      let DOMElements = {};
      for (let selector in DOMSelectors) {
        if (DOMSelectors.hasOwnProperty(selector)) {
          DOMElements[selector] = document.querySelector(
            DOMSelectors[selector]
          );
        }
      }
      return DOMElements;
    }
    return {
      getDOMElements
    };
  })();

  const modal = (function () {
    const state = {
      counter: 0,
      intervalID: 0
    };
    let CONSTANTS = {
      ACTIVE_CLASS_NAME: "active",
      TIMER: 1500,
      TRANSITION: "all .3s ease-out"
    };
    function addConstant(key, value) {
      CONSTANTS[key] = value;
    }

    return {
      state,
      CONSTANTS,
      addConstant,
    };
  })();

  const view = (function (helpers) {
    const DOMSelectors = {
      carouselInnerSlider: ".content_inner_slider",
      dots: ".dots",
      // slide: "#slide",
      prevButton: ".prev_button",
      nextButton: ".next_button",
      carouselImages: ".content_inner_slider > div",
      dot: ".dot"
    };
    const DOMElements = helpers.getDOMElements(DOMSelectors);
    const CAROUSEL_IMAGES = [
      ...document.querySelectorAll(DOMSelectors.carouselImages)
    ];
    const DOTS = [...document.querySelectorAll(DOMSelectors.dot)];
    function moveSliderToIndex(IMAGE_SIZE, index) {
      DOMElements.carouselInnerSlider.style.transform = `translateX(-${
        IMAGE_SIZE * index
      }px)`;
    }
    function addClassToIndex(className, index) {
      CAROUSEL_IMAGES[index].classList.add(className);
    }
    function removeClassToIndex(className, index) {
      CAROUSEL_IMAGES[index].classList.remove(className);
    }
    function addBackGroundToCurrentIndex(index) {
      DOTS[index].style.background = `${colors.whiteDark}`;
    }
    function removeBackGroundToCurrentIndex(index) {
      DOTS[index].style.background = "transparent";
    }
    function setTransition(element, transition) {
      element.style.transition = `${transition}`;
    }
    return {
      DOMSelectors,
      moveSliderToIndex,
      addClassToIndex,
      removeClassToIndex,
      addBackGroundToCurrentIndex,
      removeBackGroundToCurrentIndex,
      setTransition
    };
  })(helpers);

  const controller = (function (modal, view, helpers) {
    const DOMSelectors = view.DOMSelectors;
    const DOMElements = helpers.getDOMElements(DOMSelectors);
    function initApp() {
      const imageSize = DOMElements.carouselInnerSlider.clientWidth;
      const imagesCount =
        [...document.querySelectorAll(DOMSelectors.carouselImages)].length - 1;
      modal.addConstant("IMAGE_SIZE", imageSize);
      modal.addConstant("TOTAL_IMAGES", imagesCount);
      view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
      handleAdding();
      DOMElements.nextButton.addEventListener("click", handleNextImage);
      DOMElements.prevButton.addEventListener("click", handlePrevImage);
      DOMElements.dots.addEventListener("click", handleDotClick);
      // DOMElements.slide.addEventListener("change", handleSlide);
    }
    function removeEventListeners() {
      DOMElements.nextButton.removeEventListener("click", handleNextImage);
      DOMElements.prevButton.removeEventListener("click", handlePrevImage);
      DOMElements.dots.removeEventListener("click", handleDotClick);
      // DOMElements.slide.removeEventListener("change", handleSlide);
    }
    function handleNextImage() {
      handleRemove();
      if (modal.state.counter === modal.CONSTANTS.TOTAL_IMAGES) {
        modal.state.counter = -1;
      }
      modal.state.counter += 1;
      handleAdding();
      view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
    }
    function handlePrevImage() {
      handleRemove();
      if (modal.state.counter === 0) {
        modal.state.counter = modal.CONSTANTS.TOTAL_IMAGES + 1;
      }
      modal.state.counter -= 1;
      handleAdding();
      view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
    }
    function handleDotClick(event) {
      const value = Number(event.target.value);
      if (!isNaN(value)) {
        handleRemove();
        modal.state.counter = value;
        view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
        handleAdding();
      }
    }
    function handleSlide(event) {
      const isChecked = event.target.checked;
      if (isChecked) {
        modal.state.intervalID = setInterval(() => {
          handleNextImage();
        }, modal.CONSTANTS.TIMER);
      } else {
        clearInterval(modal.state.intervalID);
        modal.state.intervalID = null;
      }
    }
    function handleRemove() {
      view.removeClassToIndex(
        modal.CONSTANTS.ACTIVE_CLASS_NAME,
        modal.state.counter
      );
      view.removeBackGroundToCurrentIndex(modal.state.counter);
    }
    function handleAdding() {
      view.addClassToIndex(
        modal.CONSTANTS.ACTIVE_CLASS_NAME,
        modal.state.counter
      );
      view.addBackGroundToCurrentIndex(modal.state.counter);
    }
    DOMElements.carouselInnerSlider.addEventListener(
      "transitionstart",
      removeEventListeners
    );
    DOMElements.carouselInnerSlider.addEventListener("transitionend", initApp);
    view.setTransition(
      DOMElements.carouselInnerSlider,
      modal.CONSTANTS.TRANSITION
    );
    return {
      initApp,
      removeEventListeners
    };
  })(modal, view, helpers);

  controller.initApp();

  window.addEventListener("resize", () => {
    controller.removeEventListeners();
    controller.initApp();
  });
};

//////// window functions assignment ////////
window.onload = () => {
  writeItems();
  renderCarousel();
  writeCategories();
  adjustGridContainerStyle();
  adjustItemFooterWrapperStyle();
};
window.onresize = () => {
  writeItems();
  renderCarousel();
  adjustGridContainerStyle();
  adjustItemFooterWrapperStyle();
};
window.onscroll = () => {
  adjustHeaderBg();
};
document.onmouseenter = () => {
  console.log({ itemsInCart })
};

