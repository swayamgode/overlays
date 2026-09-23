<?php
session_start(); // Start the session

// Check if the user is NOT logged in
if (!isset($_SESSION['username'])) {
    // Redirect to the login page
    header("Location: login.php");
    exit(); // Make sure to exit to prevent further execution
}

// Logout functionality (this should come after the login check)
if (isset($_GET['logout'])) {
    session_unset(); // Remove all session variables
    session_destroy(); // Destroy the session
    header("Location: index.php"); // Redirect to the index page
    exit();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="src/style.css" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">
    <style>
        /* Loader Screen */
        #loading-screen {
            position: fixed;
            width: 100%;
            height: 100vh;
            background: black;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }

        /* Video Preloader */
        #loading-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Hide Content Until Loaded */
        #main-content {
            display: none;
        }

        * {
            margin: 0;
            padding: 0;
            border: none;
            box-sizing: border-box;
        }

        body {
            overflow-x: hidden;
            font-family: 'Outfit', sans-serif;
            background-color: white;
        }

        .container {
            height: 200vh;
            background-color: white;
        }

        canvas {
            z-index: 2; /* Ensure canvas appears above backgrounds */
        }

        /* Add third background style */
        .bg3 {
            opacity: 0;
        }

        .background {
            background-color: black;
            position: fixed;
            width: 100%;
            height: 100vh;
            object-fit: cover;
            transition: opacity 1s;
            z-index: 1;
        }

        .bg1 {
            opacity: 1;
            top: 50px;
        }

        .bg2 {
            opacity: 0;
        }

        canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }

        .bg8 {
            background-color: white;
        }
    </style>
</head>

<body>
    <!-- GSAP for Animations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

    <!-- Three.js & GLTFLoader -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"></script>



    <!-- Loading Screen with Video
    <div id="loading-screen">
        <video id="loading-video" autoplay muted playsinline>
            <source src="loader.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>

    <div id="main-content">-->
    <!-- -------------------------------------------------------------- -->
    <!-- Navbar -->
    <nav class="navbar3">
        <div class="navbar-right">
            <a href="index.php" class="active">Home</a>

            <!-- Your other navbar links -->
            <select class="btn" id="opt" onchange="handleChange(this)">
                <option value="" disabled selected>Products</option>
                <option value="tshirts.html">T-shirt</option>
                <option value="shirts.html">Shirt</option>
                <option value="oversize.html">Overshirt</option>
                <option value="hoodies.html">Hoodies</option>
                <option value="jackets.html">Jackets</option>
                <option value="shorts.html">Shorts</option>
                <option value="joggers.html">Joggers</option>
                <option value="womenlower.html">Womens</option>
            </select>
            <a href="custo.html" class="btn">Customize</a>
            <a href="about.html" class="btn">About</a>
            
            <a href="cart.html" class="btn">Cart</a>

            <?php if (isset($_SESSION['username'])): ?>
                <span class="gg">Welcome, <?php echo $_SESSION['username']; ?>!</span>
                <a href="index.php?logout=true" class="btn">Logout</a>
            <?php else: ?>
                <a href="login.php" class="btn">Login</a>
                <a href="register.php" class="btn">Register</a>
            <?php endif; ?>
        </div>
    </nav>

  

    <a href="http://localhost:3000" target="_blank" class="chatbot-icon">
        <img src="chatbot.png" alt="Chatbot">
    </a>
    <div class="bg8"></div>
    <div class="container">
        <img src="2.png" class="background bg1">
        <img src="6.png" class="background bg2">
        <img src="3.png" class="background bg3"> <!-- New third background -->
    </div>

    <div class="bg8"></div>
    <script>
        let scene, camera, renderer, model, cursorLight;
        let isScrolled = false;

        function init() {
            scene = new THREE.Scene();

            // Camera adjustments
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 1.2, 5.5);
            camera.lookAt(0, 1.2, 0); // Adjusted lookAt target

            renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true,
                powerPreference: "high-performance"
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.outputEncoding = THREE.sRGBEncoding;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            document.body.appendChild(renderer.domElement);

            // Enhanced lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 1);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
            directionalLight.position.set(3, 5, 2);
            directionalLight.castShadow = true;
            scene.add(directionalLight);

            // Improved cursor light
            cursorLight = new THREE.PointLight(0xffff90, 3, 10);
            cursorLight.position.set(0, 1, 3);
            scene.add(cursorLight);

            // Model loading with error handling
            const loader = new THREE.GLTFLoader();
            loader.load('shirt10.glb',
                (gltf) => {
                    model = gltf.scene;
                    model.position.set(0, 1.2, 0);
                    model.scale.set(1.8, 1.8, 1.8);
                    scene.add(model);
                },
                undefined,
                (error) => {
                    console.error('Error loading model:', error);
                }
            );

            animate();
        }

        function handleContentAnimation() {
            const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const contentSection = document.querySelector('.content-section');

            if (scrollPercent < 0.1) {
                contentSection.classList.add('content-visible');
            } else {
                contentSection.classList.remove('content-visible');
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            if (model && !isScrolled) {
                model.rotation.y += 0.005;
            }
            renderer.render(scene, camera);
        }

        function onScroll() {
            const container = document.querySelector('.container');
            const containerTop = container.offsetTop;
            const containerHeight = container.offsetHeight;
            const viewportHeight = window.innerHeight;
            let scrollPercent = (window.scrollY - containerTop) / (containerHeight - viewportHeight);
            scrollPercent = Math.max(0, Math.min(1, scrollPercent));

            // Background transitions for 3 images
            gsap.to('.bg1', {
                opacity: scrollPercent > 0.25 ? 0 : 1,
                duration: 1,
                ease: "power2.out"
            });
            gsap.to('.bg2', {
                opacity: scrollPercent > 0.25 && scrollPercent < 0.55 ? 1 : 0,
                duration: 1,
                ease: "power2.out"
            });
            gsap.to('.bg3', {
                opacity: scrollPercent > 0.55 ? 1 : 0,
                duration: 1,
                ease: "power2.out"
            });

            // Model animation triggers only once at 25% scroll
            if (scrollPercent > 0.25) {
                isScrolled = true;
                if (model) {
                    gsap.to(model.position, {
                        x: -3.0,
                        y: 1.2,
                        duration: 1.5,
                        ease: "power2.out"
                    });
                    gsap.to(model.rotation, {
                        y: Math.PI / 3.8,
                        duration: 1.5
                    });
                    gsap.to(model.scale, {
                        x: 2,
                        y: 2,
                        z: 2,
                        duration: 1.5
                    });
                    gsap.to(camera.position, {
                        x: -0.3,
                        y: 2.8,
                        z: 5.5,
                        duration: 1.5
                    });
                    gsap.to(camera.rotation, {
                        x: -0.2,
                        duration: 1.5
                    });
                }
            } else {
                isScrolled = false;
                if (model) {
                    gsap.to(model.position, {
                        x: 0,
                        y: 1.2,
                        duration: 1.5
                    });
                    gsap.to(model.rotation, {
                        y: 0,
                        duration: 1.5
                    });
                    gsap.to(model.scale, {
                        x: 1.8,
                        y: 1.8,
                        z: 1.8,
                        duration: 1.5
                    });
                    gsap.to(camera.position, {
                        x: 0,
                        y: 1.2,
                        z: 5.5,
                        duration: 1.5
                    });
                    gsap.to(camera.rotation, {
                        x: 0,
                        duration: 1.5
                    });
                }
            }
        }


        function onMouseMove(event) {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            gsap.to(cursorLight.position, {
                x: mouseX * 5,
                y: mouseY * 3,
                duration: 0.3,
                ease: "power2.out"
            });
        }

        // Event listeners
        window.addEventListener('load', () => {
            gsap.to('.hero-text', {
                duration: 0.1,
                opacity: 1
            });
        });
        // Event listener for scrolling
        window.addEventListener('scroll', onScroll);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });

        init();
    </script>

    <div class="crazy">
        <p></p>
    </div>
  


    <div class="bg">
        <br><br>
        <div class="head">
            <h1 class="heading">New Arrivals !!</h1>
            <hr class="head-un">
        </div>
        <br><br>
        <!-- THIS IS CARDLAYOUT-->
        <!-- -------------------------------------------------------------- -->
        <div class="scroll" id="productContainer"></div>


        <!-- -------------------------------------------------------------- -->
        <br><br>
        <div class="head">
            <h1 class="heading">Ride Your Glory</h1>
            <hr class="head-un">
        </div>
        <br><br>
        <!-- -------------------------------------------------------------- -->

        <section class="gallery">
            <img src="img/banners/red1.png" Red Shirt" class="item-1">
            <img src="img/banners/image 3.png" alt="Orange Shirt" class="item-2">

            <img src="img/banners/image 8.png" alt="Blue Shirt" class="item-3">


        </section>

        <!-- -------------------------------------------------------------- -->

        <br><br>
        <div class="head">
            <h1 class="heading">Our Products</h1>
            <hr class="head-un">
        </div>
        <br><br>

        <!-- -------------------------------------------------------------- -->
        <div class="scroll-transition">
            <div class="lp" id="lp"></div>
        </div>
    </div>


    </div>

    <footer class="footer">
    <div class="footer-container">
        <!-- About Section -->
        <div class="footer-section about">
            <h3>Your Brand</h3>
            <p>Crafting stylish and sustainable fashion for everyone.</p>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="cart.html">Cart</a></li>
            </ul>
        </div>

        <!-- Product Categories -->
        <div class="footer-section">
            <h3>Our Products</h3>
            <ul>
                <li><a href="tshirts.html">T-Shirts</a></li>
                <li><a href="shirts.html">Shirts</a></li>
                <li><a href="oversize.html">Overshirts</a></li>
                <li><a href="hoodies.html">Hoodies</a></li>
                <li><a href="jackets.html">Jackets</a></li>
                <li><a href="shorts.html">Shorts</a></li>
                <li><a href="joggers.html">Joggers</a></li>
                <li><a href="womenlower.html">Womens</a></li>
            </ul>
        </div>

        <!-- Features Section -->
        <div class="footer-section">
            <h3>Our Features</h3>
            <ul>
                <li><a href="custo.html">✨ Customize: Design your own fashion with unique colors, prints, and styles.</a></li>
                <li><a href="tryon.html">👕 Try On: Upload your image and see how our clothes fit you virtually.</a></li>
            </ul>
        </div>

        <!-- User Account -->
        <div class="footer-section">
            <h3>Account</h3>
            <?php if (isset($_SESSION['username'])): ?>
                <p>Welcome, <strong><?php echo $_SESSION['username']; ?></strong></p>
                <a href="index.php?logout=true" class="footer-btn">Logout</a>
            <?php else: ?>
                <a href="login.php" class="footer-btn">Login</a>
                <a href="register.php" class="footer-btn">Register</a>
            <?php endif; ?>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2025 Bhausaheb Vartak Polytechnic.Group No. 28.</p>
    </div>
</footer>

    <!-- ----------------------------------------------
    <script>


        // Hide loading screen when video ends
        const loadingVideo = document.getElementById("loading-video");
        loadingVideo.onended = function() {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        };
    </script>
    ---------------- -->
    <script src="src/script.js"></script>

</body>
</html>