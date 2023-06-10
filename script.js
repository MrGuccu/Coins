// Slider
const slider = document.getElementById('slider');

slider.addEventListener('input', function() {
  const value = slider.value;
  const flexItems = document.querySelectorAll('.coin');

  flexItems.forEach(item => {
    item.style.width = value + 'px';
  });
});

// Two Viewing Method
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
    origin: "United States",
    denomination: "Standing Liberty Quarter",
    year: 1925,
    mint: "P",
    condition: "Fine",
    variety: "Chain AMERICA",
    notes: "Some notes about the coin",
    obverseImage: "pics/1925 Standing Liberty Quarter Obverse.png",
    reverseImage: "pics/1925 Standing Liberty Quarter Reverse.png"
    },
    {
    origin: "United States",
    denomination: "Capped Bust Half Dollar",
    year: 1824,
    mint: "P",
    condition: "Very Fine",
    variety: "None",
    notes: "Some notes about the coin",
    obverseImage: "pics/1824 Capped Bust Half Dollar Obverse.png",
    reverseImage: "pics/1824 Capped Bust Half Dollar Reverse.png"
    },
    {
    origin: "United States",
    denomination: "Capped Bust Half Dollar",
    year: 1829,
    mint: "P",
    condition: "Very Fine",
    variety: "None",
    notes: "Some notes about the coin",
    obverseImage: "pics/1829 Capped Bust Half Dollar Obverse.png",
    reverseImage: "pics/1829 Capped Bust Half Dollar Reverse.png"
    },
    {
      origin: "United States",
      denomination: "Large Cent",
      year: 1798,
      mint: "P",
      condition: "Very Fine",
      variety: "None",
      notes: "Some notes about the coin",
      obverseImage: "pics/1798 Large Cent Obverse.png",
      reverseImage: "pics/1798 Large Cent Reverse.png"
    },
    {
      origin: "United States",
      denomination: "Large Cent",
      year: 1800,
      mint: "P",
      condition: "Very Fine",
      variety: "None",
      notes: "Some notes about the coin",
      obverseImage: "pics/1800 Large Cent Obverse.png",
      reverseImage: "pics/1800 Large Cent Reverse.png"
    },
    {
      origin: "United States",
      denomination: "Large Cent",
      year: 1801,
      mint: "P",
      condition: "Very Fine",
      variety: "None",
      notes: "Some notes about the coin",
      obverseImage: "pics/1801 Large Cent Obverse.png",
      reverseImage: "pics/1801 Large Cent Reverse.png"
    },
    {
      origin: "United States",
      denomination: "Large Cent",
      year: 1802,
      mint: "P",
      condition: "Very Fine",
      variety: "None",
      notes: "Some notes about the coin",
      obverseImage: "pics/1802 Large Cent Obverse.png",
      reverseImage: "pics/1802 Large Cent Reverse.png"
    },
    {
      origin: "United States",
      denomination: "Large Cent",
      year: 1803,
      mint: "P",
      condition: "Very Fine",
      variety: "None",
      notes: "Some notes about the coin",
      obverseImage: "pics/1803 Large Cent Obverse.png",
      reverseImage: "pics/1803 Large Cent Reverse.png"
    },
    
    // Add more coin objects here
    ];
    
    // Function to create a coin element
    function createCoinElement(coin) {
    const coinElement = document.createElement('div');
    coinElement.classList.add('coin');
    
    const doubleElement = document.createElement('div');
    doubleElement.classList.add('double');
    
    const obverseImage = document.createElement('img');
    obverseImage.src = coin.obverseImage;
    obverseImage.alt = 'pics/Alt.png';
    
    const reverseImage = document.createElement('img');
    reverseImage.src = coin.reverseImage;
    reverseImage.alt = 'pics/Alt.png';
    
    doubleElement.appendChild(obverseImage);
    doubleElement.appendChild(reverseImage);
    
    const singleElement = document.createElement('div');
    singleElement.classList.add('single');
    
    const singleImage = document.createElement('img');
    singleImage.src = coin.obverseImage;
    singleImage.alt = 'pics/Alt.png';
    singleImage.onmouseover = function() {
    this.src = coin.reverseImage;
    };
    singleImage.onmouseout = function() {
    this.src = coin.obverseImage;
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
    
    coins.forEach(function(coin) {
    const coinElement = createCoinElement(coin);
    flexContainer.appendChild(coinElement);
    });