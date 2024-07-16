

let stream;
    let wishlist = [];
    let cameraActive = false;

    document.getElementById('confirm-snap').addEventListener('click', function() {
      if (!cameraActive) {
        startCamera();
      } else {
        stopCamera();
      }
    });

    function startCamera() {
      document.querySelector('.camera').style.display = 'flex';
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(s) {
          stream = s;
          let video = document.getElementById('video');
          video.srcObject = stream;
          cameraActive = true;
        })
        .catch(function(err) {
          console.log("An error occurred: " + err);
        });
    }

    function stopCamera() {
      let video = document.getElementById('video');
      video.pause();
      video.srcObject.getTracks().forEach(function(track) {
        track.stop();
      });
      cameraActive = false;
      document.querySelector('.camera').style.display = 'none';
    }

    // Taking snapshot
    document.getElementById('snap').addEventListener('click', function() {
      if (cameraActive) {
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');
        canvas.style.display = 'block'; // Display canvas when taking snapshot
        context.drawImage(document.getElementById('video'), 0, 0, canvas.width, canvas.height);
        document.getElementById('video').style.display = 'none'; // Hide video after snapshot
        this.disabled = true; // Disable the snap button after taking snapshot

        stopCamera(); // Stop the video stream after taking the snapshot
      } else {
        startCamera(); // Start the camera if it's not active
      }
    });

    // Function to fetch images from Unsplash API
    function fetchImages(category, query) {
      const apiKey = 'yDYf_ybyKqAKk7ukNM13hwCs6BWlW9E3RzNTe6Jb00Q';
      fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          let container = document.getElementById(category);
          container.innerHTML = ''; // Clear any existing images
          data.results.forEach(item => {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('clothing-item');

            let img = document.createElement('img');
            img.src = item.urls.regular;
            img.alt = item.alt_description;

            let description = document.createElement('p');
            description.textContent = item.alt_description;
            description.classList.add('item-description');

            let price = document.createElement('p');
            price.textContent = '$19.99'; // Replace with actual price from your data
            price.classList.add('item-price');


// Create the heart button
let heartButton = document.createElement('button');
let cartButton= document.createElement('button');// c1
  // Create the cart button
//   let cartButton = createButton('bi-cart-plus', 'blue', function() {
//     addToCart(item); // Function to add item to cart
//   });

// Create the SVG element for the heart icon
let svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgIcon.setAttribute("width", "50");
svgIcon.setAttribute("height", "50");
svgIcon.setAttribute("fill", "red"); // Set fill color (can be adjusted)
svgIcon.setAttribute("class", "bi bi-heart-fill");
svgIcon.setAttribute("viewBox", "0 0 16 16");

// Create the path element for the heart shape
let pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElement.setAttribute("fill-rule", "evenodd");
pathElement.setAttribute("d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314");

// Append the path element to the SVG icon
svgIcon.appendChild(pathElement);

// Append the SVG icon to the heart button
heartButton.appendChild(svgIcon);

// Add classes and event listener to the heart button
heartButton.classList.add('heart-button');
heartButton.addEventListener('click', function() {
  toggleWishlist(item, this); // Adjust this according to your toggle function
});



// Create the SVG element for the cart icon
let svgIconCart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgIconCart.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgIconCart.setAttribute("width", "20");
svgIconCart.setAttribute("height", "20");
svgIconCart.setAttribute("fill", "black"); // Set fill color (can be adjusted)
svgIconCart.setAttribute("class", "bi bi-cart-plus");
svgIconCart.setAttribute("viewBox", "0 0 16 16");

// Create the path element for the cart shape
let pathElementCart = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElementCart.setAttribute("fill-rule", "evenodd");
pathElementCart.setAttribute("d", "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2");

// Append the path element to the SVG icon
svgIconCart.appendChild(pathElementCart);

// Append the SVG icon to the cart button
cartButton.appendChild(svgIconCart);

// Add classes and event listener to the cart button
cartButton.classList.add('cart-button'); // Add class for styling if needed

//c1

let groupCartButton = document.createElement('button');
let svgIconGroupCart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgIconGroupCart.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgIconGroupCart.setAttribute("width", "20");
svgIconGroupCart.setAttribute("height", "20");
    
svgIconGroupCart.setAttribute("fill", "#ff008c"); // Set fill color (can be adjusted)
svgIconGroupCart.setAttribute("class", "bi bi-people");
svgIconGroupCart.setAttribute("viewBox", "0 0 16 16");

// Create the path element for the group cart shape
let pathElementGroupCart = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElementGroupCart.setAttribute("fill-rule", "evenodd");
pathElementGroupCart.setAttribute("d", "M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z");
svgIconGroupCart.appendChild(pathElementGroupCart);
groupCartButton.append(svgIconGroupCart);

groupCartButton.classList.add('group-cart-button'); // Add class for styling if needed
        groupCartButton.addEventListener('click', function() {
            addToGCart(item); // Function to add item to group cart
        });
//c1 end
cartButton.addEventListener('click', function() {
  addToCart(item); // Function to add item to cart
});

// itemDiv.appendChild(cartButton);
// container.appendChild(itemDiv);

//c3 end

// Append the heart button to the itemDiv or container as needed
itemDiv.appendChild(img);
itemDiv.appendChild(description);
itemDiv.appendChild(price);
itemDiv.appendChild(heartButton);
itemDiv.appendChild(cartButton);
itemDiv.appendChild(groupCartButton);
// itemDiv.appendChild(img);
container.appendChild(itemDiv);
// itemDiv.appendChild(cartButton);
          });
        })

        //c1
        // Create the cart button

        //c1 end
        .catch(error => console.log('Error fetching images:', error));
    }


    function toggleWishlist(item, button) {
      if (wishlist.some(wishItem => wishItem.id === item.id)) {
        wishlist = wishlist.filter(wishItem => wishItem.id !== item.id);
        button.classList.remove('active');
      } else {
        wishlist.push(item);
        button.classList.add('active');
      }
      updateWishlist();
    }

    function updateWishlist() {
      const wishlistContainer = document.getElementById('wishlist-items');
      wishlistContainer.innerHTML = '';
      wishlist.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.classList.add('wishlist-item');

        const img = document.createElement('img');
        img.src = item.urls.thumb;
        img.alt = item.alt_description;

        const description = document.createElement('p');
        description.textContent = item.alt_description;

        const removeBtn = document.createElement('span');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove');
        removeBtn.addEventListener('click', function() {
          toggleWishlist(item, document.querySelector(`.clothing-item img[src="${item.urls.regular}"]`).nextSibling.nextSibling.nextSibling);
        });

        wishlistItem.appendChild(img);
        wishlistItem.appendChild(description);
        wishlistItem.appendChild(removeBtn);
        wishlistContainer.appendChild(wishlistItem);
      });
    }

    // Show clothing category based on selection
    document.querySelectorAll('.nav-left ul li ul li a').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        let category = this.getAttribute('data-category');
        document.querySelector('.camera').style.display = 'none';
        document.querySelectorAll('.clothing-category').forEach(function(cat) {
          cat.style.display = 'none';
        });
        if (category) {
          document.getElementById(category).style.display = 'flex';
          // Fetch images based on category
          if (category === 'men-clothes') {
            fetchImages('men-clothes', 'men clothing'); 
          } else if (category === 'women-clothes') {
            fetchImages('women-clothes', 'women clothing');
          } else if (category === 'kids-clothes') {
            fetchImages('kids-clothes', 'kids clothing');
          }
        }
      });
    });

    // Show wishlist when wishlist button is clicked
    document.getElementById('wishlist-btn').addEventListener('click', function(e) {
      e.preventDefault();
      const wishlistContainer = document.getElementById('wishlist');
      wishlistContainer.style.display = wishlistContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Close wishlist when close button is clicked
document.getElementById('close-wishlist').addEventListener('click', function() {
    document.getElementById('wishlist').style.display = 'none';
  });
  document.getElementById('group-cart-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const grpCartContainer = document.getElementById('group-cart');
    grpCartContainer.style.display = grpCartContainer.style.display === 'block' ? 'none' : 'block';
  });

  document.getElementById('close-group-cart').addEventListener('click', function() {
    document.getElementById('group-cart').style.display = 'none';
  });


  // Show bag when bag button is clicked
document.getElementById('bag-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const bagContainer = document.getElementById('bag');
    bagContainer.style.display = bagContainer.style.display === 'block' ? 'none' : 'block';
  });
  
  // Close bag when close button is clicked
  document.getElementById('close-bag').addEventListener('click', function() {
    document.getElementById('bag').style.display = 'none';
  });


  

let bag = [];

function addToCart(item) {
  bag.push(item);

  // Update bag display
  updateBag();
}

function updateBag() {
  const bagContainer = document.getElementById('bag-items');
  bagContainer.innerHTML = '';

  bag.forEach(item => {
    const bagItem = document.createElement('div');
    bagItem.classList.add('bag-item');

    const img = document.createElement('img');
    img.src = item.urls.thumb;
    img.alt = item.alt_description;

    const description = document.createElement('p');
    description.textContent = item.alt_description;

    const removeBtn = document.createElement('span');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');
    removeBtn.addEventListener('click', function() {
      removeFromBag(item, bagItem);
    });

    bagItem.appendChild(img);
    bagItem.appendChild(description);
    bagItem.appendChild(removeBtn);
    bagContainer.appendChild(bagItem);
  });
}

function removeFromBag(item, element) {
  bag = bag.filter(bagItem => bagItem.id !== item.id);
  element.remove();
}

let groupCart = [];

function addToGCart(item) {
  groupCart.push(item);

  // Update group cart display
  updateGCart();
}

function updateGCart() {
  const GContainer = document.getElementById('group-cart-items');
  GContainer.innerHTML = '';

  groupCart.forEach(item => {
    const gItem = document.createElement('div');
    gItem.classList.add('g-item');

    const img = document.createElement('img');
    img.src = item.urls.thumb;
    img.alt = item.alt_description;

    const description = document.createElement('p');
    description.textContent = item.alt_description;

    const removeBtn = document.createElement('span');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');
    removeBtn.addEventListener('click', function() {
      removeFromGCart(item, gItem);
    });

    gItem.appendChild(img);
    gItem.appendChild(description);
    gItem.appendChild(removeBtn);
    GContainer.appendChild(gItem);
  });
}


function removeFromGCart(item, element) {
  groupCart = groupCart.filter(gItem => gItem.id !== item.id);
  element.remove();
}
