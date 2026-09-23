document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("productContainer");
  
  // Array of new arrivals
  const newArrivals = [/* your product array */
    { type: "tshirt", no: "rtimg1", name: "Red Regular T-Shirt", color: "Red", price: 1000, url: "img/product/tshirt/regular/rtimg1.jpg", info: "A vibrant Red Regural T-Shirt, perfect for casual outings.", addinfo: "140 GSM, Cotton, Lightweight" },
    { type: "tshirt", no: "rtimg2", name: "Orange Regular T-Shirt", color: "Orange", price: 1100, url: "img/product/tshirt/regular/rtimg2.jpg", info: "A comfortable Orange T-Shirt for everyday wear.", addinfo: "140 GSM, Cotton, Regular Fit" },
    { type: "tshirt", no: "rtimg3", name: "Dark Blue Regular T-Shirt", color: "Dark Blue", price: 1500, url: "img/product/tshirt/regular/rtimg3.jpg", info: "A soft Dark Blue T-Shirt, ideal for casual outings.", addinfo: "140 GSM, Cotton, Breathable Fabric" },
    { type: "tshirt", no: "rtimg4", name: "Black Regular T-Shirt", color: "Black", price: 1300, url: "img/product/tshirt/regular/rtimg4.jpg", info: "A versatile Black T-Shirt, great for layering or standalone wear.", addinfo: "150 GSM, Cotton, Classic Fit" },
    { type: "tshirt", no: "rtimg5", name: "Brown Regular T-Shirt", color: "Brown", price: 1000, url: "img/product/tshirt/regular/rtimg5.jpg", info: "A plain Brown T-Shirt, an essential for any wardrobe.", addinfo: "150 GSM, Cotton, Essential Piece" },
    { type: "tshirt", no: "rtimg6", name: "Light Blue Regular T-Shirt", color: "Light Blue", price: 1200, url: "img/product/tshirt/regular/rtimg6.jpg", info: "A casual Light Blue T-Shirt, perfect for everyday wear.", addinfo: "140 GSM, Cotton, Comfortable Fit" },
    { type: "tshirt", no: "rtimg7", name: "Royal Blue Regular T-Shirt", color: "Royal Blue", price: 1500, url: "img/product/tshirt/regular/rtimg7.jpg", info: "A Royal Blue T-Shirt to add a pop of color to your look.", addinfo: "130 GSM, Cotton, Vibrant Color" },
    { type: "tshirt", no: "rtimg8", name: "Cream Regular T-Shirt", color: "Cream", price: 1300, url: "img/product/tshirt/regular/rtimg8.jpg", info: "A trendy Cream T-Shirt for casual outings.", addinfo: "140 GSM, Cotton, Modern Fit" },
    { type: "tshirt", no: "rtimg9", name: "Light Blue Regular T-Shirt", color: "Light Blue", price: 1100, url: "img/product/tshirt/regular/rtimg9.jpg", info: "A Light Blue T-Shirt, great for stylish casual wear.", addinfo: "150 GSM, Cotton, Bold Color" },
    { type: "overshirt", no: "otimg1", name: "Red Oversized Graphic T-shirt", color: "Red", price: 1299, url: "img/product/tshirt/over/otimg1.jpg", info: "A bold Red Oversized T-Shirt with graphic prints. Perfect for a streetwear look.", addinfo: "180 GSM, Cotton, Trendy Design" },
  { type: "overshirt", no: "otimg2", name: "Black Oversized T-shirt", color: "Light Black", price: 1199, url: "img/product/tshirt/over/otimg2.jpg", info: "A sleek Light Black Oversized T-Shirt for casual wear.", addinfo: "190 GSM, Cotton, Premium Comfort" },
  { type: "overshirt", no: "otimg3", name: "Brown Oversized Casual T-shirt", color: "Brown", price: 1000, url: "img/product/tshirt/over/otimg3.jpg", info: "A soft Brown Oversized T-Shirt for relaxed days.", addinfo: "180 GSM, Cotton, Relaxed Fit" },
  { type: "overshirt", no: "otimg4", name: "Black Oversized Printed T-shirt", color: "Black", price: 1399, url: "img/product/tshirt/over/otimg4.png", info: "A stylish black oversized t-shirt with unique prints.", addinfo: "200 GSM, Cotton, Bold Design" },
  { type: "overshirt", no: "otimg5", name: "Black And White Oversized Minimalist T-shirt", color: "Black And White", price: 1099, url: "img/product/tshirt/over/otimg5.jpg", info: "A minimalist Black And White oversized t-shirt for a clean look.", addinfo: "190 GSM, Cotton, Minimal Design" },
  { type: "overshirt", no: "otimg6", name: "Royal Blue Oversized Casual T-shirt", color: "Royal Blue", price: 1099, url: "img/product/tshirt/over/otimg6.jpg", info: "A casual Royal Blue oversized t-shirt, great for every occasion.", addinfo: "180 GSM, Cotton, Comfortable Fit" },
  { type: "overshirt", no: "otimg7", name: "Black Oversized Graphic T-shirt", color: "Black", price: 1299, url: "img/product/tshirt/over/otimg7.jpg", info: "A vibrant Black oversized t-shirt with standout graphics.", addinfo: "200 GSM, Cotton, Durable Design" },
  { type: "overshirt", no: "otimg8", name: "Green Oversized T-shirt", color: "Green", price: 1000, url: "img/product/tshirt/over/otimg8.jpg", info: "A cool Green oversized t-shirt for a laid-back vibe.", addinfo: "190 GSM, Cotton, Breathable Fabric" },
  { type: "overshirt", no: "otimg9", name: "Dark Cream Oversized Bold T-shirt", color: "Dark Cream", price: 1199, url: "img/product/tshirt/over/otimg9.jpg", info: "A bold Dark Cream oversized t-shirt for those who love bright colors.", addinfo: "200 GSM, Cotton, Vibrant Color" },
  { type: "overshirt", no: "otimg10", name: "Dark Grey Oversized Classic T-shirt", color: "Dark Grey", price: 1099, url: "img/product/tshirt/over/otimg10.jpg", info: "A classic Dark Grey oversized t-shirt suitable for all occasions.", addinfo: "190 GSM, Cotton, Timeless Style" },
  { type: "overshirt", no: "otimg11", name: "Navy Blue Oversized Premium T-shirt", color: "Navy Blue", price: 1499, url: "img/product/tshirt/over/otimg11.jpg", info: "A premium navy blue oversized t-shirt for a sophisticated casual look.", addinfo: "210 GSM, Cotton, High Quality" },
  { type: "overshirt", no: "otimg12", name: "Light Blue Oversized T-shirt", color: "Light Blue", price: 1299, url: "img/product/tshirt/over/otimg12.jpg", info: "A Light Blue oversized t-shirt for a trendy style.", addinfo: "180 GSM, Cotton, Soft Fabric" },
  { type: "overshirt", no: "otimg13", name: "Ghost White Oversized Summer T-shirt", color: "Ghost White", price: 1500, url: "img/product/tshirt/over/otimg13.jpg", info: "A Ghost White oversized t-shirt perfect for summer.", addinfo: "180 GSM, Cotton, Vibrant and Light" },
  { type: "overshirt", no: "otimg14", name: "Cream Oversized Cotton T-shirt", color: "Purple", price: 1199, url: "img/product/tshirt/over/otimg14.jpg", info: "A Cream oversized t-shirt made from premium cotton.", addinfo: "190 GSM, Cotton, Unique Style" },
  { type: "overshirt", no: "otimg15", name: "Off Whitw Oversized Formal T-shirt", color: "Off White", price: 1599, url: "img/product/tshirt/over/otimg15.png", info: "A Off White  oversized t-shirt for an elevated casual look.", addinfo: "210 GSM, Cotton, Sophisticated Design" }
  ];

  // Render products with duplicated content
  function renderProducts() {
    const productsHTML = newArrivals
      .map((product) => `
        <div class="lcard" onclick="ac('${product.no}', '${product.type}')">
          <img src="${product.url}" alt="" class="lcimgs">
          <p class="lcpara">${product.name}</p>
          <hr class="lcdivider">
          <span class="lcspan1">${product.price} M.R.P</span>
          <span class="lcspan2">-10% off</span>
        </div>
      `).join("");

    productContainer.innerHTML = `
      <div class="scroller-wrapper">
        ${productsHTML}
        ${productsHTML}
      </div>
    `;
  }

  renderProducts();

  // Auto-scroll setup
  const scrollerWrapper = document.querySelector('.scroller-wrapper');
  const cards = document.querySelectorAll('.lcard');
  const cardWidth = cards[0].offsetWidth;
  const totalWidth = cardWidth * newArrivals.length;
  let currentPosition = 0;
  let animationFrameId;
  let isPaused = false;
  const scrollSpeed = 2; // Increased scroll speed

  scrollerWrapper.style.width = `${totalWidth * 2}px`;

  function animate() {
    if (!isPaused) {
      currentPosition -= scrollSpeed;
      if (-currentPosition >= totalWidth) {
        currentPosition = 0;
      }
      scrollerWrapper.style.transform = `translateX(${currentPosition}px)`;
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  // Smoother hover handling
  let raf;
  productContainer.addEventListener('mouseenter', () => {
    cancelAnimationFrame(raf);
    isPaused = true;
    scrollerWrapper.style.transition = 'transform 0.3s linear';
    raf = requestAnimationFrame(() => {
      scrollerWrapper.style.transform = `translateX(${currentPosition}px)`;
    });
  });

  productContainer.addEventListener('mouseleave', () => {
    isPaused = false;
    scrollerWrapper.style.transition = 'transform 0.3s linear';
    requestAnimationFrame(() => {
      scrollerWrapper.style.transition = 'none';
    });
  });

  window.addEventListener('unload', () => {
    cancelAnimationFrame(animationFrameId);
  });
});

const shirts = [
  { type: "shirt", no: "simg1", name: "Casual Black Shirt", color: "Black", price: 2000, url: "img/product/shirt/simg1.jpg", info: "A stylish Casual Black Shirt perfect for casual or semi-formal occasions.", addinfo: "100% Cotton, Soft Feel, Breathable" },
  { type: "shirt", no: "simg2", name: "Casual Cream Shirt", color: "Cream", price: 2220, url: "img/product/shirt/simg2.jpg", info: "A cool Casual Cream Shirt designed for everyday wear. Versatile and easy to pair.", addinfo: "100% Cotton, Casual Style, Comfortable Fit" },
  { type: "shirt", no: "simg3", name: "Black Pocket Shirt", color: "Black", price: 2500, url: "img/product/shirt/simg3.jpg", info: "A trendy Black Pocket Shirt that gives a relaxed yet fashionable look.", addinfo: "Cotton Blend, Classic Plaid, Soft Material" },
  { type: "shirt", no: "simg4", name: "Casual Blue Shirt", color: "Blue", price: 1300, url: "img/product/shirt/simg4.jpg", info: "A sharp Casual Blue Shirt ideal for office wear or formal occasions.", addinfo: "100% Cotton, Slim Fit, Professional Look" }
];

const tshirts = [
  { type: "tshirt", no: "rtimg1", name: "Red Regular T-Shirt", color: "Red", price: 1000, url: "img/product/tshirt/regular/rtimg1.jpg", info: "A vibrant Red Regural T-Shirt, perfect for casual outings.", addinfo: "140 GSM, Cotton, Lightweight" },
  { type: "tshirt", no: "rtimg2", name: "Orange Regular T-Shirt", color: "Orange", price: 1100, url: "img/product/tshirt/regular/rtimg2.jpg", info: "A comfortable Orange T-Shirt for everyday wear.", addinfo: "140 GSM, Cotton, Regular Fit" },
  { type: "tshirt", no: "rtimg3", name: "Dark Blue Regular T-Shirt", color: "Dark Blue", price: 1500, url: "img/product/tshirt/regular/rtimg3.jpg", info: "A soft Dark Blue T-Shirt, ideal for casual outings.", addinfo: "140 GSM, Cotton, Breathable Fabric" },
  { type: "tshirt", no: "rtimg4", name: "Black Regular T-Shirt", color: "Black", price: 1300, url: "img/product/tshirt/regular/rtimg4.jpg", info: "A versatile Black T-Shirt, great for layering or standalone wear.", addinfo: "150 GSM, Cotton, Classic Fit" },
  { type: "tshirt", no: "rtimg5", name: "Brown Regular T-Shirt", color: "Brown", price: 1000, url: "img/product/tshirt/regular/rtimg5.jpg", info: "A plain Brown T-Shirt, an essential for any wardrobe.", addinfo: "150 GSM, Cotton, Essential Piece" },
  { type: "tshirt", no: "rtimg6", name: "Light Blue Regular T-Shirt", color: "Light Blue", price: 1200, url: "img/product/tshirt/regular/rtimg6.jpg", info: "A casual Light Blue T-Shirt, perfect for everyday wear.", addinfo: "140 GSM, Cotton, Comfortable Fit" },
  { type: "tshirt", no: "rtimg7", name: "Royal Blue Regular T-Shirt", color: "Royal Blue", price: 1500, url: "img/product/tshirt/regular/rtimg7.jpg", info: "A Royal Blue T-Shirt to add a pop of color to your look.", addinfo: "130 GSM, Cotton, Vibrant Color" },
  { type: "tshirt", no: "rtimg8", name: "Cream Regular T-Shirt", color: "Cream", price: 1300, url: "img/product/tshirt/regular/rtimg8.jpg", info: "A trendy Cream T-Shirt for casual outings.", addinfo: "140 GSM, Cotton, Modern Fit" },
  { type: "tshirt", no: "rtimg9", name: "Light Blue Regular T-Shirt", color: "Light Blue", price: 1100, url: "img/product/tshirt/regular/rtimg9.jpg", info: "A Light Blue T-Shirt, great for stylish casual wear.", addinfo: "150 GSM, Cotton, Bold Color" }
];




const overshirt = [
  { type: "overshirt", no: "otimg1", name: "Red Oversized Graphic T-shirt", color: "Red", price: 1299, url: "img/product/tshirt/over/otimg1.jpg", info: "A bold Red Oversized T-Shirt with graphic prints. Perfect for a streetwear look.", addinfo: "180 GSM, Cotton, Trendy Design" },
  { type: "overshirt", no: "otimg2", name: "Black Oversized T-shirt", color: "Light Black", price: 1199, url: "img/product/tshirt/over/otimg2.jpg", info: "A sleek Light Black Oversized T-Shirt for casual wear.", addinfo: "190 GSM, Cotton, Premium Comfort" },
  { type: "overshirt", no: "otimg3", name: "Brown Oversized Casual T-shirt", color: "Brown", price: 1000, url: "img/product/tshirt/over/otimg3.jpg", info: "A soft Brown Oversized T-Shirt for relaxed days.", addinfo: "180 GSM, Cotton, Relaxed Fit" },
  { type: "overshirt", no: "otimg4", name: "Black Oversized Printed T-shirt", color: "Black", price: 1399, url: "img/product/tshirt/over/otimg4.png", info: "A stylish black oversized t-shirt with unique prints.", addinfo: "200 GSM, Cotton, Bold Design" },
  { type: "overshirt", no: "otimg5", name: "Black And White Oversized Minimalist T-shirt", color: "Black And White", price: 1099, url: "img/product/tshirt/over/otimg5.jpg", info: "A minimalist Black And White oversized t-shirt for a clean look.", addinfo: "190 GSM, Cotton, Minimal Design" },
  { type: "overshirt", no: "otimg6", name: "Royal Blue Oversized Casual T-shirt", color: "Royal Blue", price: 1099, url: "img/product/tshirt/over/otimg6.jpg", info: "A casual Royal Blue oversized t-shirt, great for every occasion.", addinfo: "180 GSM, Cotton, Comfortable Fit" },
  { type: "overshirt", no: "otimg7", name: "Black Oversized Graphic T-shirt", color: "Black", price: 1299, url: "img/product/tshirt/over/otimg7.jpg", info: "A vibrant Black oversized t-shirt with standout graphics.", addinfo: "200 GSM, Cotton, Durable Design" },
  { type: "overshirt", no: "otimg8", name: "Green Oversized T-shirt", color: "Green", price: 1000, url: "img/product/tshirt/over/otimg8.jpg", info: "A cool Green oversized t-shirt for a laid-back vibe.", addinfo: "190 GSM, Cotton, Breathable Fabric" },
  { type: "overshirt", no: "otimg9", name: "Dark Cream Oversized Bold T-shirt", color: "Dark Cream", price: 1199, url: "img/product/tshirt/over/otimg9.jpg", info: "A bold Dark Cream oversized t-shirt for those who love bright colors.", addinfo: "200 GSM, Cotton, Vibrant Color" },
  { type: "overshirt", no: "otimg10", name: "Dark Grey Oversized Classic T-shirt", color: "Dark Grey", price: 1099, url: "img/product/tshirt/over/otimg10.jpg", info: "A classic Dark Grey oversized t-shirt suitable for all occasions.", addinfo: "190 GSM, Cotton, Timeless Style" },
  { type: "overshirt", no: "otimg11", name: "Navy Blue Oversized Premium T-shirt", color: "Navy Blue", price: 1499, url: "img/product/tshirt/over/otimg11.jpg", info: "A premium navy blue oversized t-shirt for a sophisticated casual look.", addinfo: "210 GSM, Cotton, High Quality" },
  { type: "overshirt", no: "otimg12", name: "Light Blue Oversized T-shirt", color: "Light Blue", price: 1299, url: "img/product/tshirt/over/otimg12.jpg", info: "A Light Blue oversized t-shirt for a trendy style.", addinfo: "180 GSM, Cotton, Soft Fabric" },
  { type: "overshirt", no: "otimg13", name: "Ghost White Oversized Summer T-shirt", color: "Ghost White", price: 1500, url: "img/product/tshirt/over/otimg13.jpg", info: "A Ghost White oversized t-shirt perfect for summer.", addinfo: "180 GSM, Cotton, Vibrant and Light" },
  { type: "overshirt", no: "otimg14", name: "Cream Oversized Cotton T-shirt", color: "Purple", price: 1199, url: "img/product/tshirt/over/otimg14.jpg", info: "A Cream oversized t-shirt made from premium cotton.", addinfo: "190 GSM, Cotton, Unique Style" },
  { type: "overshirt", no: "otimg15", name: "Off Whitw Oversized Formal T-shirt", color: "Off White", price: 1599, url: "img/product/tshirt/over/otimg15.png", info: "A Off White  oversized t-shirt for an elevated casual look.", addinfo: "210 GSM, Cotton, Sophisticated Design" }
];


const womensLower = [
  { type: "womenslower", no: "wtimg1", name: "Women's Black Joggers", color: "Black", price: 1499, url: "img/product/womenslower/wtimg1.jpg", info: "Comfortable black joggers perfect for casual and gym wear.", addinfo: "Cotton Blend, Elastic Waist, Stylish Fit" },
  { type: "womenslower", no: "wtimg2", name: "Grey High-Waisted Leggings", color: "Grey", price: 1299, url: "img/product/womenslower/wtimg2.jpg", info: "Soft and stretchable high-waisted leggings for everyday comfort.", addinfo: "Polyester, Breathable, Slim Fit" },
  { type: "womenslower", no: "wtimg3", name: "Navy Blue Palazzo Pants", color: "Navy Blue", price: 1799, url: "img/product/womenslower/wtimg3.jpg", info: "Elegant and flowy palazzo pants for a stylish look.", addinfo: "Rayon, Loose Fit, Trendy Design" },
  { type: "womenslower", no: "wtimg4", name: "Beige Wide-Leg Trousers", color: "Beige", price: 1999, url: "img/product/womenslower/wtimg4.jpg", info: "Chic beige wide-leg trousers for a sophisticated touch.", addinfo: "Cotton Blend, High Waist, Formal Wear" },
  { type: "womenslower", no: "wtimg5", name: "Dark Green Straight Pants", color: "Dark Green", price: 1599, url: "img/product/womenslower/wtimg5.jpg", info: "Straight-fit dark green pants for a versatile wardrobe.", addinfo: "Linen, Breathable, Comfortable Fit" },
  { type: "womenslower", no: "wtimg6", name: "Pink Yoga Leggings", color: "Pink", price: 1399, url: "img/product/womenslower/wtimg6.jpg", info: "Stylish pink leggings designed for yoga and workouts.", addinfo: "Spandex Blend, Stretchable, High Waist" },
  { type: "womenslower", no: "wtimg7", name: "White Relaxed Joggers", color: "White", price: 1699, url: "img/product/womenslower/wtimg7.jpg", info: "Relaxed-fit white joggers for effortless styling.", addinfo: "Cotton, Drawstring Waist, Soft Fabric" },
  { type: "womenslower", no: "wtimg8", name: "Light Blue Denim Shorts", color: "Light Blue", price: 1199, url: "img/product/womenslower/wtimg8.jpg", info: "Trendy light blue denim shorts for summer outings.", addinfo: "Denim, Casual Wear, Mid Rise" }
];



const hoodies = [
  { type: "hoodie", no: "himg1", p:"hodi", name: "Red Hoodie", color: "Red", price: 1500, url: "img/product/hoodies/himg1.jpg", info: "A warm and stylish Red Hoodie. Great for chilly weather and casual wear.", addinfo: "180 GSM, Cotton, High Graded" },
  { type: "hoodie", no: "himg2", p:"hodi", name: "Blue Hoodie", color: "Blue", price: 1700, url: "img/product/hoodies/himg2.jpg", info: "A cozy Blue Hoodie perfect for layering. Soft cotton material for a comfortable fit.", addinfo: "190 GSM, Cotton, Premium Comfort" },
  { type: "hoodie", no: "himg3", p:"hodi", name: "Black Hoodie", color: "Black", price: 2000, url: "img/product/hoodies/himg3.jpg", info: "A sleek Black Hoodie that pairs well with any outfit. Ideal for casual wear.", addinfo: "200 GSM, Cotton, High Quality" },
  { type: "hoodie", no: "himg4", p:"hodi", name: "Lime Hoodie", color: "Lime", price: 1600, url: "img/product/hoodies/himg4.jpg", info: "A bright Lime Hoodie, perfect for those looking to stand out. Soft fabric for all-day wear.", addinfo: "180 GSM, Cotton, Vibrant Color" },
  { type: "hoodie", no: "himg5", p:"hodi", name: "Mint Hoodie", color: "Mint", price: 1500, url: "img/product/hoodies/himg5.jpg", info: "A refreshing Mint Hoodie with a clean design. Ideal for casual outings or lounging.", addinfo: "190 GSM, Cotton, Relaxed Fit" },
  { type: "hoodie", no: "himg6", p:"hodi", name: "Royal Blue Hoodie", color: "Royal Blue", price: 1400, url: "img/product/hoodies/himg6.jpg", info: "A deep Royal Blue hoodie that adds a touch of color to your wardrobe.", addinfo: "200 GSM, Cotton, Classic Look" },
  { type: "hoodie", no: "himg7", p:"hodi", name: "Grey Hoodie", color: "Grey", price: 1999, url: "img/product/hoodies/himg7.jpg", info: "A versatile Grey Hoodie perfect for layering or as a stand-alone piece.", addinfo: "180 GSM, Cotton, Comfortable" },
  { type: "hoodie", no: "himg8", p:"hodi", name: "Dark Green Hoodie", color: "Dark Green", price: 1300, url: "img/product/hoodies/himg8.jpg", info: "A Dark Green Hoodie with a rich, deep tone. A great addition to any casual outfit.", addinfo: "190 GSM, Cotton, Soft Texture" },
  { type: "hoodie", no: "himg9", p:"hodi", name: "Purple Hoodie", color: "Purple", price: 1400, url: "img/product/hoodies/himg9.jpg", info: "A unique Purple Hoodie with a trendy design. Cozy and stylish for all-day wear.", addinfo: "200 GSM, Cotton, Bold Color" },
  { type: "hoodie", no: "himg10", p:"hodi", name: "Graphic Red Hoodie", color: "Red", price: 1600, url: "img/product/hoodies/himg10.jpg", info: "A Red Hoodie with graphic designs, perfect for a bold statement.", addinfo: "210 GSM, Cotton, Graphic Design" },
  { type: "hoodie", no: "himg11", p:"hodi", name: "Brown Hoodie", color: "Brown", price: 1400, url: "img/product/hoodies/himg11.jpg", info: "A cozy Brown Hoodie, perfect for fall or winter. Soft and warm for everyday wear.", addinfo: "190 GSM, Cotton, Comfortable Fit" },
  { type: "hoodie", no: "himg12", p:"hodi", name: "Neon Hoodie", color: "Neon", price: 1200, url: "img/product/hoodies/himg12.jpg", info: "A Neon Hoodie that brings a pop of color to your wardrobe. Ideal for casual wear.", addinfo: "180 GSM, Cotton, Vibrant Shade" },
  { type: "hoodie", no: "himg13", p:"hodi", name: "Graphic Hoodie", color: "Multicolor", price: 1800, url: "img/product/hoodies/himg13.jpg", info: "A Multicolor Graphic Hoodie, perfect for those who love bold fashion.", addinfo: "200 GSM, Cotton, Trendy Design" },
  { type: "hoodie", no: "himg14", p:"hodi", name: "White Fleece Hoodie", color: "White", price: 1700, url: "img/product/hoodies/himg14.jpg", info: "A Soft White Fleece Hoodie, offering comfort and warmth in cooler weather.", addinfo: "210 GSM, Fleece, Soft Texture" },
  { type: "hoodie", no: "himg15", p:"hodi", name: "Cream Sherpa Hoodie", color: "Cream", price: 1500, url: "img/product/hoodies/himg15.jpg", info: "A Cozy Cream Sherpa Hoodie, designed to keep you warm in the coldest weather.", addinfo: "220 GSM, Sherpa Fleece, High Warmth" },
  { type: "hoodie", no: "himg16", p:"hodi", name: "Classic Black Hoodie", color: "Black", price: 1500, url: "img/product/hoodies/himg16.jpg", info: "A Classic Black Hoodie that goes with anything. Comfortable and stylish.", addinfo: "200 GSM, Cotton, Essential Piece" }
];



const joggerCargo = [
  { type: "jogger_cargo", no: "jo1", name: "Black Cargo Joggers", color: "Black", price: 1799, url: "img/product/jogger_cargo/jo1.jpg", info: "Trendy black cargo joggers with multiple pockets.", addinfo: "Cotton Blend, Elastic Waist, Utility Design" },
  { type: "jogger_cargo", no: "jo2", name: "Grey Tapered Joggers", color: "Grey", price: 1599, url: "img/product/jogger_cargo/jo2.jpg", info: "Slim-fit grey joggers with an athletic touch.", addinfo: "Polyester, Drawstring Waist, Modern Fit" },
  { type: "jogger_cargo", no: "jo3", name: "Navy Blue Cargo Joggers", color: "Navy Blue", price: 1899, url: "img/product/jogger_cargo/jo3.jpg", info: "Navy blue joggers with stylish cargo pockets.", addinfo: "Cotton, Elastic Cuffs, Functional Pockets" },
  { type: "jogger_cargo", no: "jo4", name: "Beige Relaxed Fit Joggers", color: "Beige", price: 1699, url: "img/product/jogger_cargo/jo4.jpg", info: "Relaxed beige joggers perfect for casual wear.", addinfo: "Cotton Blend, Comfortable Fit, Adjustable Waist" },
  { type: "jogger_cargo", no: "jo5", name: "Dark Green Tactical Joggers", color: "Dark Green", price: 1999, url: "img/product/jogger_cargo/jo5.jpg", info: "Tactical joggers with durable fabric and a rugged look.", addinfo: "Polyester, Cargo Pockets, Stylish Look" },
  { type: "jogger_cargo", no: "jo6", name: "Maroon Slim Joggers", color: "Maroon", price: 1499, url: "img/product/jogger_cargo/jo6.jpg", info: "Slim-fit maroon joggers for a sleek style.", addinfo: "Cotton Blend, Soft Feel, Tapered Fit" },
  { type: "jogger_cargo", no: "jo7", name: "White Streetwear Joggers", color: "White", price: 1899, url: "img/product/jogger_cargo/jo7.jpg", info: "Street-style white joggers with a modern design.", addinfo: "Cotton, Trendy Fit, Breathable Fabric" },
  { type: "jogger_cargo", no: "jo8", name: "Light Blue Denim Joggers", color: "Light Blue", price: 2199, url: "img/product/jogger_cargo/jo8.jpg", info: "Denim-style joggers for a fusion of casual and comfort.", addinfo: "Denim Fabric, Elastic Waist, Slim Fit" },
  { type: "jogger_cargo", no: "jo9", name: "Olive Green Cargo Joggers", color: "Olive Green", price: 1799, url: "img/product/jogger_cargo/jo9.jpg", info: "Olive green joggers with a military-inspired design.", addinfo: "Cotton, Side Pockets, Adjustable Cuffs" },
  { type: "jogger_cargo", no: "jo10", name: "Steel Blue Athletic Joggers", color: "Steel Blue", price: 1699, url: "img/product/jogger_cargo/jo10.jpg", info: "Athletic joggers designed for both workouts and casual wear.", addinfo: "Polyester Blend, Sweat-Wicking, Comfortable Fit" },
  { type: "jogger_cargo", no: "jo11", name: "Brown Classic Cargo Joggers", color: "Brown", price: 1899, url: "img/product/jogger_cargo/jo11.jpg", info: "Classic brown joggers with a versatile look.", addinfo: "Cotton, Everyday Wear, Adjustable Fit" },
  { type: "jogger_cargo", no: "jo12", name: "Khaki Urban Joggers", color: "Khaki", price: 1599, url: "img/product/jogger_cargo/jo12.jpg", info: "Urban-inspired khaki joggers with a sleek fit.", addinfo: "Cotton, Streetwear Style, Elastic Waistband" },
  { type: "jogger_cargo", no: "jo13", name: "Purple Statement Joggers", color: "Purple", price: 1799, url: "img/product/jogger_cargo/jo13.jpg", info: "Bold purple joggers that stand out.", addinfo: "Polyester Blend, Trendy Look, Soft Fabric" },
  { type: "jogger_cargo", no: "jo14", name: "Yellow Casual Joggers", color: "Yellow", price: 1499, url: "img/product/jogger_cargo/jo14.jpg", info: "Light yellow joggers for a summer casual style.", addinfo: "Cotton, Breathable Fabric, Relaxed Fit" },
  { type: "jogger_cargo", no: "jo15", name: "Black and White Striped Joggers", color: "Black & White", price: 2099, url: "img/product/jogger_cargo/jo15.jpg", info: "Black joggers with stylish white stripes for an edgy look.", addinfo: "Cotton, Modern Fit, Athletic Feel" }
];

const shorts = [
  { type: "shorts", no: "sh1", name: "Black Sports Shorts", color: "Black", price: 999, url: "img/product/shorts/sh1.jpg", info: "Classic black sports shorts for workouts and casual wear.", addinfo: "Polyester, Elastic Waist, Breathable Fabric" },
  { type: "shorts", no: "sh2", name: "Brown Relaxed Shorts", color: "Brown", price: 899, url: "img/product/shorts/sh2.jpg", info: "Comfortable brown shorts for a relaxed style.", addinfo: "Cotton Blend, Adjustable Waist, Everyday Comfort" },
  { type: "shorts", no: "sh3", name: "Grey Casual Shorts", color: "Grey", price: 1199, url: "img/product/shorts/sh3.jpg", info: "Light grey shorts for a modern streetwear look.", addinfo: "Cotton Blend, Side Pockets, Trendy Fit" },
  { type: "shorts", no: "sh4", name: "Denim Blue Shorts", color: "Blue", price: 1499, url: "img/product/shorts/sh4.jpg", info: "Stylish denim blue shorts with a rugged design.", addinfo: "Denim Fabric, Functional Pockets, Classic Fit" },
  { type: "shorts", no: "sh5", name: "Dark Grey Performance Shorts", color: "Dark Grey", price: 1599, url: "img/product/shorts/sh5.jpg", info: "Performance-focused dark grey shorts.", addinfo: "Polyester, Sweat-Wicking, Athletic Fit" }
];

const jackets = [
  { type: "jacket", no: "jack1", name: "Corduroy Beige Jacket", color: "Beige", price: 3500, url: "img/product/jacket/jack1.jpg", info: "A stylish Corduroy Beige Jacket with a vintage look.", addinfo: "Soft Fabric, Durable, Classic Design" },
  { type: "jacket", no: "jack2", name: "Velvet Maroon Jacket", color: "Maroon", price: 4000, url: "img/product/jacket/jack2.jpg", info: "A premium Velvet Maroon Jacket for an elegant appearance.", addinfo: "Luxurious Fabric, Warm & Comfortable" },
  { type: "jacket", no: "jack3", name: "Plaid Blue Jacket", color: "Blue", price: 2800, url: "img/product/jacket/jack3.jpg", info: "A trendy Plaid Blue Jacket perfect for casual outings.", addinfo: "100% Cotton, Stylish & Cozy" },
  { type: "jacket", no: "jack4", name: "Checked Brown Jacket", color: "Brown", price: 3200, url: "img/product/jacket/jack4.jpg", info: "A modern Checked Brown Jacket with a rugged feel.", addinfo: "Warm Fabric, Unique Checkered Pattern" }
];


const allProducts = [...shirts, ...tshirts, ...overshirt, ...womensLower, ...hoodies];

// Function to shuffle the array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const all = shuffleArray(allProducts);


let body;

const sc = document.getElementById("lp");
body = all;
if (sc) {
  sc.innerHTML = body
  .map(
    (simg) => `
    <div class="card" onclick="ac('${simg.no}','${simg.type}')">
      <img src="${simg.url}" alt="" class="cimgs">
      <p class="cpara">${simg.name}</p>
      <hr class="cdivider">
      <span class="cspan1">${simg.price} M.R.P</span>
      <span class="cspan2"></span>
    </div>
  `
  )
  .join("");
  updateFavoriteIcons(); // Ensure icons update after rendering
}



const s1 = document.getElementById("show1");


if (s1) {
  let bod=tshirts
  s1.innerHTML = bod
    .map(
      (simg) => `
      <div class="card" onclick="ac('${simg.no}','${simg.type}')">
        <img src="${simg.url}" alt="" class="cimgs">
        <p class="cpara">${simg.name}</p>
        <hr class="cdivider">
        <span class="cspan1">${simg.price} M.R.P</span>
        <span class="cspan2">-10% off</span>
      </div>
    `
    )
    .join("");
}

const s2 = document.getElementById("show2");


if (s2) {
  let bod=shirts
  s2.innerHTML = bod
    .map(
      (simg) => `
      <div class="card scroll-transition" onclick="ac('${simg.no}','${simg.type}')">
        <img src="${simg.url}" alt="" class="cimgs">
        <p class="cpara">${simg.name}</p>
        <hr class="cdivider">
        <span class="cspan1">${simg.price} M.R.P</span>
        <span class="cspan2">-10% off</span>
      </div>
    `
    )
    .join("");
}

const s3 = document.getElementById("show3");

body=overshirt
if (s3) {
  s3.innerHTML = body
    .map(
      (simg) => `
      <div class="card scroll-transition" onclick="ac('${simg.no}','${simg.type}')">
        <img src="${simg.url}" alt="" class="cimgs">
        <p class="cpara">${simg.name}</p>
        <hr class="cdivider">
        <span class="cspan1">${simg.price} M.R.P</span>
        <span class="cspan2">-10% off</span>
      </div>
    `
    )
    .join("");
}

const s4 = document.getElementById("show4");

body=hoodies
if (s4) {
  s4.innerHTML = body
    .map(
      (simg) => `
      <div class="card scroll-transition" onclick="ac('${simg.no}','${simg.type}')">
        <img src="${simg.url}" alt="" class="cimgs">
        <p class="cpara">${simg.name}</p>
        <hr class="cdivider">
        <span class="cspan1">${simg.price} M.R.P</span>
        <span class="cspan2">-10% off</span>
      </div>
    `
    )
    .join("");
}

const s5 = document.getElementById("show5");

body=joggerCargo
if (s5) {
  s5.innerHTML = body
    .map(
      (simg) => `
      <div class="card scroll-transition" onclick="ac('${simg.no}','${simg.type}')">
        <img src="${simg.url}" alt="" class="cimgs">
        <p class="cpara">${simg.name}</p>
        <hr class="cdivider">
        <span class="cspan1">${simg.price} M.R.P</span>
        <span class="cspan2">-10% off</span>
      </div>
    `
    )
    .join("");
}

const s6 = document.getElementById("show6");

body=womensLower
if (s6) {
  s6.innerHTML = body
    .map(
      (simg) => `
      <div class="card scroll-transition" onclick="ac('${simg.no}','${simg.type}')">
        <img src="${simg.url}" alt="" class="cimgs">
        <p class="cpara">${simg.name}</p>
        <hr class="cdivider">
        <span class="cspan1">${simg.price} M.R.P</span>
        <span class="cspan2">-10% off</span>
      </div>
    `
    )
    .join("");
}

const s7 = document.getElementById("show7");

body=shorts
if (s7) {
  s7.innerHTML = body
    .map(
      (simg) => `
      <div class="card scroll-transition" onclick="ac('${simg.no}','${simg.type}')">
        <img src="${simg.url}" alt="" class="cimgs">
        <p class="cpara">${simg.name}</p>
        <hr class="cdivider">
        <span class="cspan1">${simg.price} M.R.P</span>
        <span class="cspan2">-10% off</span>
      </div>
    `
    )
    .join("");
}
const s8 = document.getElementById("show8");

body=jackets
if (s8) {
  s8.innerHTML = body
    .map(
      (simg) => `
      <div class="card scroll-transition" onclick="ac('${simg.no}','${simg.type}')">
        <img src="${simg.url}" alt="" class="cimgs">
        <p class="cpara">${simg.name}</p>
        <hr class="cdivider">
        <span class="cspan1">${simg.price} M.R.P</span>
        <span class="cspan2">-10% off</span>
      </div>
    `
    )
    .join("");
}






function handleChange(products) {
  const value=products.value
  if (products) {
    window.location.href = value;
  }


}           


pno=""
ptype=""
// Navigate to Product Page
function ac(no, type) {
  if (no) {
    pno=no;
    ptype=type;
    window.location.href = `product.html?no=${no}&type=${type}`;
  }
}

// Add at the top to handle product page initialization
document.addEventListener("DOMContentLoaded", function() {
  // Initialize product page if on product.html
  if(window.location.pathname.includes("product.html")) {
      initializeProductPage();
  }
});

async function initializeProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productNo = params.get("no");
  const productType = params.get("type");

  if (!productNo || !productType) return;

  // Find product in arrays
  let product;
  switch(productType) {
      case 'shirt': product = shirts.find(p => p.no === productNo); break;
      case 'tshirt': product = tshirts.find(p => p.no === productNo); break;
      case 'overshirt': product = overshirt.find(p => p.no === productNo); break;
      case 'hoodie': product = hoodies.find(p => p.no === productNo); break;
      case 'womenslower': product = womensLower.find(p => p.no === productNo); break;
      case 'jogger_cargo': product = joggerCargo.find(p => p.no === productNo); break;
      case 'shorts': product = shorts.find(p => p.no === productNo); break;
      case 'jacket': product = jackets.find(p => p.no === productNo); break;
  }

  if (!product) return;

  // Generate image paths
  const basePath = product.url.replace('.jpg', '');
  const images = [
      product.url,
      `${basePath}_1.jpg`,
      `${basePath}_2.jpg`,
      `${basePath}_3.jpg`
  ];

  // Generate thumbnails
  let thumbnailsHTML = '';
  for (const img of images) {
      if (await imageExists(img)) {
          thumbnailsHTML += `
              <div class="thumbnail" onclick="changeImage('${img}', this)">
                  <img src="${img}" alt="Thumbnail">
              </div>
          `;
      }
  }

  // Populate product page
  document.getElementById("centr").innerHTML = `
      <div class="container">
        <div class="details">
                <h1>${product.name}</h1>
                  <hr class="head-un">
                <p class="price">${product.price} Rs.</p>
                <p class="description">${product.info}</p>
                <p class="extra">${product.addinfo}</p>
        </div>
        <div class="conts">
                <div class="image">
                    <img id="mainImage" src="${product.url}" alt="${product.name}">
                       <div class="thumbnails">${thumbnailsHTML}</div>
                </div>
             
        </div>
            
        <div class="options">
          <div class="right">
          <div class="sclas">
            <h4>SIZE</h4>
            <div class="sizes">
              <div class="size-btn activebtn"><p>S</p></div>
              <div class="size-btn"><p>M</p></div>
              <div class="size-btn"><p>L</p></div>
              <div class="size-btn"><p>XL</p></div>
            </div>
            </div>
            <div class="btngrp">
           <button class="tybtn" onclick="trynow('${product.url}')">Try Now!!</button>
            <button class="add-to-cart" onclick="addToCart('${product.no}')">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
  `;
}


function changeImage(src, element) {
  document.getElementById("mainImage").src = src;
  document.querySelectorAll(".thumbnail").forEach((thumb) => thumb.classList.remove("act"));
  element.classList.add("act");
}

// Helper function to check image existence
function imageExists(url) {
  return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
  });
}

// Show Login Modal on Load
window.onload = function () {
  document.getElementById("loginModal").style.display = "flex";
};

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Handle size selection
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('size-btn')) {
      document.querySelectorAll('.size-btn').forEach(btn => 
          btn.classList.remove('activebtn'));
      e.target.classList.add('activebtn');
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-transition");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.01 });

  elements.forEach((element) => observer.observe(element));
});


// Function to start Try-On process
function trynow(imgurl) {
  const sd = imgurl.replace(".jpg", "_t.png");
  console.log("Product Image:", sd);

  // Store the product image URL in localStorage
  localStorage.setItem('productImage', sd);

  // Show Try-On modal
  document.getElementById("tryOnModal").style.display = "flex";

  // Initialize the Try-On process
  showtry();
}

// Function to display Try-On modal with stored image
function showtry() {
  const productImageUrl = localStorage.getItem('productImage');

  if (!productImageUrl) {
      console.error("No product image URL found.");
      return;
  }

  document.getElementById("showtrynow").innerHTML = `
      <h1>Virtual Try-On</h1>
      <div class="containerofcanvas">
          <div class="canvas-container">
              <canvas id="outputCanvas" width="400" height="480"></canvas>
          </div>
          <div class="controls">
              <div class="product-box">
                  <img src="${productImageUrl}" alt="Product Image" id="productImage">
              </div>
             
              <input type="file" id="uploadUserImage" accept="image/*">
             
              <button id="applyProduct" disabled>Loading...</button> <!-- Disabled until model loads -->
          </div>
      </div>
  `;

  initializeCanvas();
}

// Initialize Fabric.js and Pose Detection
async function initializeCanvas() {
  const canvasElement = document.getElementById('outputCanvas');
  const fabricCanvas = new fabric.Canvas('outputCanvas');
  const uploadUserImage = document.getElementById('uploadUserImage');
  const applyProductButton = document.getElementById('applyProduct');

  let productImage = null;
  let detector = null;

  // Load Pose Detection Model
  console.log("⏳ Loading Pose Detection Model...");
  try {
      detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
      console.log("✅ Pose detection model loaded successfully.");
      applyProductButton.innerText = "Apply";
      applyProductButton.disabled = false; // Enable Apply button when model is ready
  } catch (error) {
      console.error("❌ Failed to load pose detector:", error);
      return;
  }

  // Handle user image upload
  uploadUserImage.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            // Clear any previous images from the canvas
            fabricCanvas.clear();

            // Load the image to get natural dimensions
            const img = new Image();
            img.onload = () => {
                // Calculate scale to fit within canvas
                const canvasWidth = fabricCanvas.width;
                const canvasHeight = fabricCanvas.height;
                const scale = Math.min(
                    canvasWidth / img.width,
                    canvasHeight / img.height
                );

                // Create Fabric image with correct scale
                fabric.Image.fromURL(e.target.result, (fabricImg) => {
                    fabricImg.set({
                        scaleX: scale,
                        scaleY: scale,
                        left: canvasWidth / 2,
                        top: canvasHeight / 2,
                        originX: 'center',
                        originY: 'center'
                    });
                    fabricCanvas.setBackgroundImage(fabricImg, fabricCanvas.renderAll.bind(fabricCanvas));
                });
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

  // Apply Product to Canvas
  applyProductButton.addEventListener('click', async () => {
      if (!detector) {
          console.error("❌ Pose detector is still not ready.");
          return;
      }

      const poses = await detector.estimatePoses(canvasElement);
      if (poses.length === 0) {
          console.error("❌ No poses detected.");
          return;
      }

      const landmarks = poses[0].keypoints;
    const leftShoulder = landmarks.find(point => point.name === "left_shoulder");
    const rightShoulder = landmarks.find(point => point.name === "right_shoulder");

    // Calculate torso width and center point
    const torsoWidth = Math.abs(rightShoulder.x - leftShoulder.x);
    const shoulderCenterX = (leftShoulder.x + rightShoulder.x) / 2;
    const storedProductImageUrl = localStorage.getItem('productImage');

    // Load product image
    if (!productImage) {
        fabric.Image.fromURL(storedProductImageUrl, (img) => {
            productImage = img;
            
            // Calculate scaling based on torso width
            const scale = torsoWidth / img.width;
            
            img.set({
                left: shoulderCenterX,
                top: leftShoulder.y,
                scaleX: scale,
                scaleY: scale,
                originX: 'center', // Center horizontally
                originY: 'top',    // Align top with shoulder
                selectable: true,
                // ... keep existing style properties ...
            });
            fabricCanvas.add(img);
        });
    }
});
}
// Close Modal when clicking on 'X' or outside the modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("tryOnModal");
  const closeModal = document.querySelector(".close");

  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});















//add to cart function
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(productNo) {
    let product = all.find(p => p.no === productNo) || 
                  shirts.find(p => p.no === productNo) || 
                  tshirts.find(p => p.no === productNo) || 
                  overshirt.find(p => p.no === productNo) || 
                  womensLower.find(p => p.no === productNo) || 
                  joggerCargo.find(p => p.no === productNo) || 
                  hoodies.find(p => p.no === productNo)|| 
                  shorts.find(p => p.no === productNo)|| 
                  jackets.find(p => p.no === productNo);
                  

    if (!product) return;

    let existingItem = cart.find(item => item.no === product.no);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Show confirmation alert
    alert(`${product.name} has been added to your cart!`);
}

// Function to load products dynamically
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("product.html")) {
        initializeProductPage();
    }
});

// Function to load product details on product.html
async function initializeProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productNo = params.get("no");
  const productType = params.get("type");

  if (!productNo || !productType) return;

  // Find product in arrays
  let product;
  switch(productType) {
      case 'shirt': product = shirts.find(p => p.no === productNo); break;
      case 'tshirt': product = tshirts.find(p => p.no === productNo); break;
      case 'overshirt': product = overshirt.find(p => p.no === productNo); break;
      case 'hoodie': product = hoodies.find(p => p.no === productNo); break;
      case 'womenslower': product = womensLower.find(p => p.no === productNo); break;
      case 'jogger_cargo': product = joggerCargo.find(p => p.no === productNo); break;
      case 'shorts': product = shorts.find(p => p.no === productNo); break;
      case 'jacket': product = jackets.find(p => p.no === productNo); break;
  }

  if (!product) return;

  // Generate image paths
  const basePath = product.url.replace('.jpg', '');
  const images = [
      product.url,
      `${basePath}_1.jpg`,
      `${basePath}_2.jpg`,
      `${basePath}_3.jpg`
  ];

  // Generate thumbnails
  let thumbnailsHTML = '';
  for (const img of images) {
      if (await imageExists(img)) {
          thumbnailsHTML += `
              <div class="thumbnail" onclick="changeImage('${img}', this)">
                  <img src="${img}" alt="Thumbnail">
              </div>
          `;
      }
  }

  // Populate product page
  document.getElementById("centr").innerHTML = `
      <div class="container">
       <div class="conts">
                <div class="image">
                    <img id="mainImage" src="${product.url}" alt="${product.name}">
                     <div class="thumbnails">${thumbnailsHTML}</div>
                </div>
               
        </div>
        <div class="details">
                <h1>${product.name}</h1>
       
                <p class="price">₹ ${product.price}</p>
                <p class="description">${product.info}</p>
                <p class="extra">${product.addinfo}</p>
                <div class="options">
                      <div class="right">
                        <div class="sclas">
                        
                            <h4>SIZE</h4>
                          <div class="sizes">
                            <div class="size-btn activebtn">S</div>
                            <div class="size-btn">M</div>
                            <div class="size-btn">L</div>
                            <div class="size-btn">XL</div>
                          </div>
                        </div>
                        <div class="btngrp">
                          <button class="tybtn" onclick="trynow('${product.url}')">Try Now!!</button>
                          <button class="add-to-cart" onclick="addToCart('${product.no}')">Add to Cart</button>
                        </div>
                      </div>
                </div>

        </div>
       
            
       
      </div>
  `;
}


function changeImage(src, element) {
  document.getElementById("mainImage").src = src;
  document.querySelectorAll(".thumbnail").forEach((thumb) => thumb.classList.remove("act"));
  element.classList.add("act");
}

// Helper function to check image existence
function imageExists(url) {
  return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
  });
}













// Store favorites in localStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function toggleFavorite(event, productNo) {
  event.stopPropagation(); // Prevents clicking from triggering another event

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  let index = favorites.indexOf(productNo);

  if (index > -1) {
    favorites.splice(index, 1); // Remove from favorites
  } else {
    favorites.push(productNo); // Add to favorites
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavoriteIcons();
}

function updateFavoriteIcons() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  document.querySelectorAll(".favorite-icon").forEach(icon => {
    let productNo = icon.getAttribute("data-product-no");
  
    if (favorites.includes(productNo)) {
      icon.style.color = "red"; 
      icon.classList.add("glow");
    } else {
      icon.style.color = "gray";
      icon.classList.remove("glow");
    }
  });
  
}

document.addEventListener("DOMContentLoaded", updateFavoriteIcons);

// Ensure icons update on page load
document.addEventListener("DOMContentLoaded", function() {
  let productContainer = document.getElementById("show");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (productContainer) {
    productContainer.innerHTML = all.map(product => `
      <div class="card">
        <img src="${product.url}" alt="${product.name}" class="cimgs">
        <span class="favorite-icon" data-product-no="${product.no}" onclick="toggleFavorite(event, '${product.no}')">❤</span>
        <p class="cpara">${product.name}</p>
        <hr class="cdivider">
        <span class="cspan1">${product.price} M.R.P</span>
        <span class="cspan2">-10% off</span>
      </div>
    `).join("");

    updateFavoriteIcons();
  }
});