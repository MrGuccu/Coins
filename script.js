// Slider
const slider = document.getElementById('slider');

slider.addEventListener('input', function() {
  const value = slider.value;
  const flexItems = document.querySelectorAll('.coin');

  flexItems.forEach(item => {
    item.style.width = value + '%';
  });
});

// Hide double coin mode elements when the page loads
window.addEventListener('DOMContentLoaded', function() {
  const flexItems = document.querySelectorAll('.coin');

  flexItems.forEach(item => {
    const singleImages = item.querySelectorAll('.single img');
    const doubleImages = item.querySelectorAll('.double img');

    singleImages.forEach(image => {
      image.style.display = 'block';
    });
    doubleImages.forEach(image => {
      image.style.display = 'none';
    });
  });
});

// Toggle between single and double coin mode
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
  const flexItems = document.querySelectorAll('.coin');

  flexItems.forEach(item => {
    const singleImages = item.querySelectorAll('.single img');
    const doubleImages = item.querySelectorAll('.double img');

    if (singleImages[0].style.display === 'none') {
      singleImages.forEach(image => {
        image.style.display = 'block';
      });
      doubleImages.forEach(image => {
        image.style.display = 'none';
      });
    } else {
      singleImages.forEach(image => {
        image.style.display = 'none';
      });
      doubleImages.forEach(image => {
        image.style.display = 'block';
      });
    }
  });
});



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

  return coinElement;
}

// Add coins to the flex container
const flexContainer = document.querySelector('.flex-container');

coins.forEach(function (coin) {
  const coinElement = createCoinElement(coin);
  flexContainer.appendChild(coinElement);
});