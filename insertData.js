const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Change if needed
const client = new MongoClient(uri);

const databaseName = "products";
const collections = {
    shirts : [
        { type: "shirt", no: "simg1", name: "SwayamGode", color: "White", price: 20, url: "img/product/shirt/simg1.jpg", info: "A stylish white shirt perfect for casual or semi-formal occasions.", addinfo: "100% Cotton, Soft Feel, Breathable" },
        { type: "shirt", no: "simg2", name: "Casual Blue Shirt", color: "Blue", price: 22, url: "img/product/shirt/simg2.jpg", info: "A cool blue shirt designed for everyday wear. Versatile and easy to pair.", addinfo: "100% Cotton, Casual Style, Comfortable Fit" },
        { type: "shirt", no: "simg3", name: "Plaid Red Shirt", color: "Red", price: 25, url: "img/product/shirt/simg3.jpg", info: "A trendy red plaid shirt that gives a relaxed yet fashionable look.", addinfo: "Cotton Blend, Classic Plaid, Soft Material" },
        { type: "shirt", no: "simg4", name: "Black Office Shirt", color: "Black", price: 30, url: "img/product/shirt/simg4.jpg", info: "A sharp black shirt ideal for office wear or formal occasions.", addinfo: "100% Cotton, Slim Fit, Professional Look" }
      ], // Paste the `shirts` array here
     tshirts : [
        { type: "tshirt", no: "rtimg1", name: "Red Regular T-Shirt", color: "Red", price: 10, url: "img/product/tshirt/regular/rtimg1.jpg", info: "A vibrant red t-shirt, perfect for casual outings.", addinfo: "140 GSM, Cotton, Lightweight" },
        { type: "tshirt", no: "rtimg2", name: "Blue Regular T-Shirt", color: "Blue", price: 12, url: "img/product/tshirt/regular/rtimg2.jpg", info: "A comfortable blue t-shirt for everyday wear.", addinfo: "140 GSM, Cotton, Regular Fit" },
        { type: "tshirt", no: "rtimg3", name: "Green Regular T-Shirt", color: "Green", price: 11, url: "img/product/tshirt/regular/rtimg3.jpg", info: "A soft green t-shirt, ideal for casual outings.", addinfo: "140 GSM, Cotton, Breathable Fabric" },
        { type: "tshirt", no: "rtimg4", name: "Black Regular T-Shirt", color: "Black", price: 15, url: "img/product/tshirt/regular/rtimg4.jpg", info: "A versatile black t-shirt, great for layering or standalone wear.", addinfo: "150 GSM, Cotton, Classic Fit" },
        { type: "tshirt", no: "rtimg5", name: "White Regular T-Shirt", color: "White", price: 14, url: "img/product/tshirt/regular/rtimg5.jpg", info: "A plain white t-shirt, an essential for any wardrobe.", addinfo: "150 GSM, Cotton, Essential Piece" },
        { type: "tshirt", no: "rtimg6", name: "Gray Regular T-Shirt", color: "Gray", price: 13, url: "img/product/tshirt/regular/rtimg6.jpg", info: "A casual gray t-shirt, perfect for everyday wear.", addinfo: "140 GSM, Cotton, Comfortable Fit" },
        { type: "tshirt", no: "rtimg7", name: "Yellow Regular T-Shirt", color: "Yellow", price: 9, url: "img/product/tshirt/regular/rtimg7.jpg", info: "A bright yellow t-shirt to add a pop of color to your look.", addinfo: "130 GSM, Cotton, Vibrant Color" },
        { type: "tshirt", no: "rtimg8", name: "Pink Regular T-Shirt", color: "Pink", price: 16, url: "img/product/tshirt/regular/rtimg8.jpg", info: "A trendy pink t-shirt for casual outings.", addinfo: "140 GSM, Cotton, Modern Fit" },
        { type: "tshirt", no: "rtimg9", name: "Purple Regular T-Shirt", color: "Purple", price: 17, url: "img/product/tshirt/regular/rtimg9.jpg", info: "A bold purple t-shirt, great for stylish casual wear.", addinfo: "150 GSM, Cotton, Bold Color" }
      ],
      
      
      
      
     overshirt : [
        { type: "overshirt", no: "otimg1", name: "Red Oversized Graphic T-shirt", color: "Red", price: 1299, url: "img/product/tshirt/over/otimg1.jpg", info: "A bold red oversized t-shirt with graphic prints. Perfect for a streetwear look.", addinfo: "180 GSM, Cotton, Trendy Design" },
        { type: "overshirt", no: "otimg2", name: "Dark Blue Oversized T-shirt", color: "Dark Blue", price: 1199, url: "img/product/tshirt/over/otimg2.jpg", info: "A sleek dark blue oversized t-shirt for casual wear.", addinfo: "190 GSM, Cotton, Premium Comfort" },
        { type: "overshirt", no: "otimg3", name: "Brown Oversized Casual T-shirt", color: "Brown", price: 999, url: "img/product/tshirt/over/otimg3.jpg", info: "A soft brown oversized t-shirt for relaxed days.", addinfo: "180 GSM, Cotton, Relaxed Fit" },
        { type: "overshirt", no: "otimg4", name: "Black Oversized Printed T-shirt", color: "Black", price: 1399, url: "img/product/tshirt/over/otimg4.png", info: "A stylish black oversized t-shirt with unique prints.", addinfo: "200 GSM, Cotton, Bold Design" },
        { type: "overshirt", no: "otimg5", name: "Beige Oversized Minimalist T-shirt", color: "Beige", price: 1099, url: "img/product/tshirt/over/otimg5.jpg", info: "A minimalist beige oversized t-shirt for a clean look.", addinfo: "190 GSM, Cotton, Minimal Design" },
        { type: "overshirt", no: "otimg6", name: "White Oversized Casual T-shirt", color: "White", price: 899, url: "img/product/tshirt/over/otimg6.jpg", info: "A casual white oversized t-shirt, great for every occasion.", addinfo: "180 GSM, Cotton, Comfortable Fit" },
        { type: "overshirt", no: "otimg7", name: "Green Oversized Graphic T-shirt", color: "Green", price: 1299, url: "img/product/tshirt/over/otimg7.jpg", info: "A vibrant green oversized t-shirt with standout graphics.", addinfo: "200 GSM, Cotton, Durable Design" },
        { type: "overshirt", no: "otimg8", name: "Light Blue Oversized T-shirt", color: "Light Blue", price: 999, url: "img/product/tshirt/over/otimg8.jpg", info: "A cool light blue oversized t-shirt for a laid-back vibe.", addinfo: "190 GSM, Cotton, Breathable Fabric" },
        { type: "overshirt", no: "otimg9", name: "Orange Oversized Bold T-shirt", color: "Orange", price: 1199, url: "img/product/tshirt/over/otimg9.jpg", info: "A bold orange oversized t-shirt for those who love bright colors.", addinfo: "200 GSM, Cotton, Vibrant Color" },
        { type: "overshirt", no: "otimg10", name: "Grey Oversized Classic T-shirt", color: "Grey", price: 1099, url: "img/product/tshirt/over/otimg10.jpg", info: "A classic grey oversized t-shirt suitable for all occasions.", addinfo: "190 GSM, Cotton, Timeless Style" },
        { type: "overshirt", no: "otimg11", name: "Navy Blue Oversized Premium T-shirt", color: "Navy Blue", price: 1499, url: "img/product/tshirt/over/otimg11.jpg", info: "A premium navy blue oversized t-shirt for a sophisticated casual look.", addinfo: "210 GSM, Cotton, High Quality" },
        { type: "overshirt", no: "otimg12", name: "Pastel Pink Oversized T-shirt", color: "Pink", price: 1299, url: "img/product/tshirt/over/otimg12.jpg", info: "A pastel pink oversized t-shirt for a trendy style.", addinfo: "180 GSM, Cotton, Soft Fabric" },
        { type: "overshirt", no: "otimg13", name: "Yellow Oversized Summer T-shirt", color: "Yellow", price: 999, url: "img/product/tshirt/over/otimg13.jpg", info: "A bright yellow oversized t-shirt perfect for summer.", addinfo: "180 GSM, Cotton, Vibrant and Light" },
        { type: "overshirt", no: "otimg14", name: "Purple Oversized Cotton T-shirt", color: "Purple", price: 1199, url: "img/product/tshirt/over/otimg14.jpg", info: "A rich purple oversized t-shirt made from premium cotton.", addinfo: "190 GSM, Cotton, Unique Style" },
        { type: "overshirt", no: "otimg15", name: "Black Oversized Formal T-shirt", color: "Black", price: 1599, url: "img/product/tshirt/over/otimg15.png", info: "A formal black oversized t-shirt for an elevated casual look.", addinfo: "210 GSM, Cotton, Sophisticated Design" }
      ],
    
      
      hoodies :          [
        { type: "hoodie", no: "himg1", p:"hodi", name: "Red Hoodie", color: "Red", price: 40, url: "img/product/hoodies/himg1.jpg", info: "A warm and stylish red hoodie. Great for chilly weather and casual wear.", addinfo: "180 GSM, Cotton, High Graded" },
        { type: "hoodie", no: "himg2", p:"hodi", name: "Blue Hoodie", color: "Blue", price: 42, url: "img/product/hoodies/himg2.jpg", info: "A cozy blue hoodie perfect for layering. Soft cotton material for a comfortable fit.", addinfo: "190 GSM, Cotton, Premium Comfort" },
        { type: "hoodie", no: "himg3", p:"hodi", name: "Black Hoodie", color: "Black", price: 45, url: "img/product/hoodies/himg3.jpg", info: "A sleek black hoodie that pairs well with any outfit. Ideal for casual wear.", addinfo: "200 GSM, Cotton, High Quality" },
        { type: "hoodie", no: "himg4", p:"hodi", name: "Lime Hoodie", color: "Lime", price: 38, url: "img/product/hoodies/himg4.jpg", info: "A bright lime hoodie, perfect for those looking to stand out. Soft fabric for all-day wear.", addinfo: "180 GSM, Cotton, Vibrant Color" },
        { type: "hoodie", no: "himg5", p:"hodi", name: "Mint Hoodie", color: "Mint", price: 39, url: "img/product/hoodies/himg5.jpg", info: "A refreshing mint hoodie with a clean design. Ideal for casual outings or lounging.", addinfo: "190 GSM, Cotton, Relaxed Fit" },
        { type: "hoodie", no: "himg6", p:"hodi", name: "Royal Blue Hoodie", color: "Royal Blue", price: 43, url: "img/product/hoodies/himg6.jpg", info: "A deep royal blue hoodie that adds a touch of color to your wardrobe.", addinfo: "200 GSM, Cotton, Classic Look" },
        { type: "hoodie", no: "himg7", p:"hodi", name: "Gray Hoodie", color: "Gray", price: 37, url: "img/product/hoodies/himg7.jpg", info: "A versatile gray hoodie perfect for layering or as a stand-alone piece.", addinfo: "180 GSM, Cotton, Comfortable" },
        { type: "hoodie", no: "himg8", p:"hodi", name: "Dark Green Hoodie", color: "Dark Green", price: 41, url: "img/product/hoodies/himg8.jpg", info: "A dark green hoodie with a rich, deep tone. A great addition to any casual outfit.", addinfo: "190 GSM, Cotton, Soft Texture" },
        { type: "hoodie", no: "himg9", p:"hodi", name: "Purple Hoodie", color: "Purple", price: 44, url: "img/product/hoodies/himg9.jpg", info: "A unique purple hoodie with a trendy design. Cozy and stylish for all-day wear.", addinfo: "200 GSM, Cotton, Bold Color" },
        { type: "hoodie", no: "himg10", p:"hodi", name: "Graphic Red Hoodie", color: "Red", price: 46, url: "img/product/hoodies/himg10.jpg", info: "A red hoodie with graphic designs, perfect for a bold statement.", addinfo: "210 GSM, Cotton, Graphic Design" },
        { type: "hoodie", no: "himg11", p:"hodi", name: "Brown Hoodie", color: "Brown", price: 40, url: "img/product/hoodies/himg11.jpg", info: "A cozy brown hoodie, perfect for fall or winter. Soft and warm for everyday wear.", addinfo: "190 GSM, Cotton, Comfortable Fit" },
        { type: "hoodie", no: "himg12", p:"hodi", name: "Bright Yellow Hoodie", color: "Yellow", price: 42, url: "img/product/hoodies/himg12.jpg", info: "A bright yellow hoodie that brings a pop of color to your wardrobe. Ideal for casual wear.", addinfo: "180 GSM, Cotton, Vibrant Shade" },
        { type: "hoodie", no: "himg13", p:"hodi", name: "Graphic Hoodie", color: "Multicolor", price: 48, url: "img/product/hoodies/himg13.jpg", info: "A multicolor graphic hoodie, perfect for those who love bold fashion.", addinfo: "200 GSM, Cotton, Trendy Design" },
        { type: "hoodie", no: "himg14", p:"hodi", name: "Beige Fleece Hoodie", color: "Beige", price: 43, url: "img/product/hoodies/himg14.jpg", info: "A soft beige fleece hoodie, offering comfort and warmth in cooler weather.", addinfo: "210 GSM, Fleece, Soft Texture" },
        { type: "hoodie", no: "himg15", p:"hodi", name: "Cream Sherpa Hoodie", color: "Cream", price: 45, url: "img/product/hoodies/himg15.jpg", info: "A cozy cream sherpa hoodie, designed to keep you warm in the coldest weather.", addinfo: "220 GSM, Sherpa Fleece, High Warmth" },
        { type: "hoodie", no: "himg16", p:"hodi", name: "Classic Black Hoodie", color: "Black", price: 40, url: "img/product/hoodies/himg16.jpg", info: "A classic black hoodie that goes with anything. Comfortable and stylish.", addinfo: "200 GSM, Cotton, Essential Piece" }
      ]
};

async function insertData() {
  try {
    await client.connect();
    const db = client.db(databaseName);

    for (const [collection, data] of Object.entries(collections)) {
      await db.collection(collection).insertMany(data);
      console.log(`Inserted ${data.length} documents into ${collection}`);
    }
  } finally {
    await client.close();
  }
}

insertData().catch(console.error);
