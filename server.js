const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'chat.html'));
});

// ✅ API Endpoint for chatbot logic
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message?.trim().toLowerCase();
    console.log("User Message:", userMessage); // Debugging log

    const categoryLinks = {
        "interview": { message: "For an interview, check these shirts!", link: "http://localhost:8080/final/newcpp/shirts.html" },
        "formals": { message: "Try our best formal collection!", link: "http://localhost:8080/final/newcpp/shirts.html" },
        "birthday": { message: "Wish u best Try our best collection!", link: "http://localhost:8080/final/newcpp/tshirts.html"},
        "beach": { message: "Wish u best Try our best collection!", link: "http://localhost:8080/final/newcpp/shorts.html" },
        "trend": { message: "Wish u best Try our best collection!", link: "http://localhost:8080/final/newcpp/oversize.html" },
        "winter": { message: "Wish u best Try our best collection!", link: "http://localhost:8080/final/newcpp/hoodies.html" },
        "summer": { message: "Wish u best Try our best collection!", link: "http://localhost:8080/final/newcpp/tshirts.html" },
        "casual": { message: "Check out our casual tees!", link: "http://localhost:8080/final/newcpp/tshirt.html" }
    };

    for (const keyword in categoryLinks) {
        if (userMessage.includes(keyword)) {
            console.log("Match Found:", keyword); // Debugging log
            return res.json({
                type: 'product_card',
                message: categoryLinks[keyword].message,
                product: {
                    name: keyword.charAt(0).toUpperCase() + keyword.slice(1),
                    redirectLink: categoryLinks[keyword].link
                }
            });
        }
    }

    console.log("No Match Found!"); // Debugging log
    res.json({ type: 'text', message: "Sorry, I couldn't find a match!" });
});


// ✅ Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
