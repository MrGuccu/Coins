let isSingle = true; // Boolean variable to track the mode (single or double)

const toggleButton = document.getElementById('toggleButton');

// Function to toggle between single and double modes
function toggleMode() {
  isSingle = !isSingle; // Toggle the mode

  // Get all coin elements
  const coinElements = document.querySelectorAll('.coin');

  // Iterate over each coin element and show/hide the appropriate images based on the mode
  coinElements.forEach((coinElement) => {
    const singleImages = coinElement.querySelectorAll('.single img');
    const doubleImages = coinElement.querySelectorAll('.double img');

    singleImages.forEach((singleImage) => {
      singleImage.style.display = isSingle ? 'block' : 'none';
    });

    doubleImages.forEach((doubleImage) => {
      doubleImage.style.display = isSingle ? 'none' : 'block';
    });
  });
}

// Add event listener to the toggleButton
toggleButton.addEventListener('click', toggleMode);


// Slider
const slider = document.getElementById('slider');

slider.addEventListener('input', function() {
  const value = slider.value;
  const flexItems = document.querySelectorAll('.coin');

  flexItems.forEach(item => {
    item.style.width = value + '%';
  });
});

let showcoins = [];

// Define an array of coin objects
const coins = [
  {
    origin: "Connecticut",
    denomination: "Facing Right Connecticut Copper",
    year: 1785
  },
  {
    origin: "Connecticut",
    denomination: "Draped Bust Facing Left Connecticut Copper",
    year: 1787
  },
  {
    origin: "Connecticut",
    denomination: "Mailed Bust Facing Left Connecticut Copper",
    year: 1787
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1798
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1800
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1801
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1802
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1803
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1816
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1817
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1819
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1820
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1825
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1830
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1832
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1833
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1835
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1837
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1840
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1842
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1849
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1851
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1852
  },
  {
    origin: "United States",
    denomination: "Large Cent",
    year: 1855
  },
  {
    origin: "United States",
    denomination: "Capped Bust Quarter",
    year: 1834
  },
  {
    origin: "United States",
    denomination: "Flying Eagle Cent",
    year: 1857
  },
  {
    origin: "United States",
    denomination: "Seated Liberty Half Dollar",
    year: 1877
  },
  {
    origin: "United States",
    denomination: "Seated Liberty Quarter",
    year: 1877
  },
  {
    origin: "United States",
    denomination: "V Nickel",
    year: 1883
  },
  {
    origin: "United States",
    denomination: "VDB Cent",
    year: 1909
  },
  {
    origin: "Austria Hungary",
    denomination: "1 Korona",
    year: 1915
  },
  {
    origin: "United States",
    denomination: "Peace Dollar",
    year: 1923
  },
  {
    origin: "United States",
    denomination: "Standing Liberty Quarter",
    year: 1925
  },
  {
    origin: "United States",
    denomination: "Capped Bust Half Dollar",
    year: 1824
  },
  {
    origin: "United States",
    denomination: "Capped Bust Half Dollar",
    year: 1829
  },
  {
    origin: "United States",
    denomination: "Colombian Exchange Half Dollar",
    year: 1893
  },
  {
    origin: "United States",
    denomination: "Barber Half Dollar",
    year: 1906
  },
  {
    origin: "United States",
    denomination: "Walking Liberty Half Dollar",
    year: 1934
  },
  {
    origin: "United States",
    denomination: "Walking Liberty Half Dollar",
    year: 1935
  },
  {
    origin: "United States",
    denomination: "Walking Liberty Half Dollar",
    year: 1937
  },
  {
    origin: "United States",
    denomination: "Walking Liberty Half Dollar",
    year: 1940
  },
  {
    origin: "United States",
    denomination: "Walking Liberty Half Dollar",
    year: 1941
  },
  {
    origin: "United States",
    denomination: "Walking Liberty Half Dollar",
    year: 1942
  },
  {
    origin: "United States",
    denomination: "Walking Liberty Half Dollar",
    year: 1943
  },
  {
    origin: "United States",
    denomination: "Walking Liberty Half Dollar",
    year: 1944
  },
  {
    origin: "United States",
    denomination: "Walking Liberty Half Dollar",
    year: 1945
  },
  {
    origin: "United States",
    denomination: "Walking Liberty Half Dollar",
    year: 1947
  },
  {
    origin: "United States",
    denomination: "Franklin Half Dollar",
    year: 1951
  },
  {
    origin: "United States",
    denomination: "Franklin Half Dollar",
    year: 1963
  },
  {
    origin: "United States",
    denomination: "Kennedy Half Dollar",
    year: 1964
  },
  {
    origin: "Switzerland",
    denomination: "Swiss 2 Frank",
    year: 1947
  },
  {
    origin: "Switzerland",
    denomination: "Swiss 1 Frank",
    year: 1944
  },
  {
    origin: "Switzerland",
    denomination: "Swiss 0.5 Frank",
    year: 1944
  },
  {
    origin: "Germany",
    denomination: "German 1 Mark",
    year: 1915
  },
];

// Function to create a coin element
function createCoinElement(coin) {
  const coinElement = document.createElement('div');
  coinElement.classList.add('coin');

  const doubleElement = document.createElement('div');
  doubleElement.classList.add('double');

  const obverseImage = document.createElement('img');
  obverseImage.src = `pics/${coin.year} ${coin.denomination} Obverse.png`;
  obverseImage.alt = 'pics/Alt.png';

  const reverseImage = document.createElement('img');
  reverseImage.src = `pics/${coin.year} ${coin.denomination} Reverse.png`;
  reverseImage.alt = 'pics/Alt.png';

  doubleElement.appendChild(obverseImage);
  doubleElement.appendChild(reverseImage);

  const singleElement = document.createElement('div');
  singleElement.classList.add('single');

  const singleImage = document.createElement('img');
  singleImage.src = `pics/${coin.year} ${coin.denomination} Obverse.png`;
  singleImage.alt = 'pics/Alt.png';
  singleImage.onmouseover = function () {
    this.src = `pics/${coin.year} ${coin.denomination} Reverse.png`;
  };
  singleImage.onmouseout = function () {
    this.src = `pics/${coin.year} ${coin.denomination} Obverse.png`;
  };

  singleElement.appendChild(singleImage);

  const yearElement = document.createElement('p');
  yearElement.textContent = `${coin.year} - ${coin.denomination}`;

  coinElement.appendChild(doubleElement);
  coinElement.appendChild(singleElement);
  coinElement.appendChild(yearElement);

  const value = slider.value;
  coinElement.style.width = value + '%';

  return coinElement;
}

// Add coins to the flex container
const flexContainer = document.querySelector('.flex-container');

showcoins.forEach(function (coin) {
  const coinElement = createCoinElement(coin);
  flexContainer.appendChild(coinElement);
});


// Function to update the displayed coins based on the filters and sorting
function updateDisplayedCoins() {
  const originFilter = document.getElementById('origin').value;
  const denominationFilter = document.getElementById('denomination').value;
  const sortOption = document.getElementById('sort').value;

  // Filter coins based on origin and denomination
  const filteredCoins = coins.filter((coin) => {
    const originMatch = originFilter === 'all' || coin.origin === originFilter;
    const denominationMatch = denominationFilter === 'all' || coin.denomination === denominationFilter;
    return originMatch && denominationMatch;
  });

  // Sort coins based on the selected option
  filteredCoins.sort((a, b) => {
    if (sortOption === 'ascending') {
      return a.year - b.year;
    } else if (sortOption === 'descending') {
      return b.year - a.year;
    }
  });

  // Clear the flex container
  flexContainer.innerHTML = '';

  // Add the filtered and sorted coins to the flex container
  filteredCoins.forEach((coin) => {
    const coinElement = createCoinElement(coin);
    flexContainer.appendChild(coinElement);
  });
}

// Populate Origin Drop-down
const originDropdown = document.getElementById('origin');
const uniqueOrigins = [...new Set(coins.map((coin) => coin.origin))];
uniqueOrigins.forEach((origin) => {
  const option = document.createElement('option');
  option.value = origin;
  option.textContent = origin;
  originDropdown.appendChild(option);
});

// Populate Denomination Drop-down
const denominationDropdown = document.getElementById('denomination');
const uniqueDenominations = [...new Set(coins.map((coin) => coin.denomination))];
uniqueDenominations.forEach((denomination) => {
  const option = document.createElement('option');
  option.value = denomination;
  option.textContent = denomination;
  denominationDropdown.appendChild(option);
});

// Add event listeners to filters and sorting options
originDropdown.addEventListener('change', updateDisplayedCoins);
originDropdown.addEventListener('change', apply);
denominationDropdown.addEventListener('change', updateDisplayedCoins);
denominationDropdown.addEventListener('change', apply);
document.getElementById('sort').addEventListener('change', updateDisplayedCoins);
document.getElementById('sort').addEventListener('change', apply);

// Initial display of coins
updateDisplayedCoins();
toggleMode();

function apply(){
  toggleMode();
  toggleMode();
}

// Function to load settings from URL
function loadSettingsFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const sortByParam = urlParams.get('sort');
  const originParam = urlParams.get('origin');
  const denominationParam = urlParams.get('denomination');

  // Update the sort dropdown
  const sortDropdown = document.getElementById('sort');
  if (sortByParam) {
    if (sortByParam === 'DateAscending') {
      sortDropdown.value = 'ascending';
    } else if (sortByParam === 'DateDescending') {
      sortDropdown.value = 'descending';
    }
  }

  // Update the origin dropdown
  const originDropdown = document.getElementById('origin');
  if (originParam) {
    originDropdown.value = originParam;
  }

  // Update the denomination dropdown
  const denominationDropdown = document.getElementById('denomination');
  if (denominationParam) {
    denominationDropdown.value = denominationParam;
  }

  // Update the displayed coins based on the loaded settings
  updateDisplayedCoins();
}

// Call the function to load settings from URL
loadSettingsFromURL();
