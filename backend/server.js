const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(cors());

app.use(express.json());


// ==========================================
// TEMPORARY MESSAGE STORAGE
// ==========================================

let messages = [
    {
        id: 1,
        sender: "SYSTEM",
        text: "COMMUNICATION CHANNEL ESTABLISHED.",
        timestamp: new Date().toISOString()
    },
    {
        id: 2,
        sender: "PANDI",
        text: "THE CHANNEL IS OPEN.",
        timestamp: new Date().toISOString()
    }
];


// ==========================================
// STATUS
// ==========================================

app.get("/", (req, res) => {

    res.json({
        status: "ONLINE",
        system: "PANDIST CULT COMMUNICATIONS",
        message: "NETWORK CONNECTION ESTABLISHED."
    });

});


// ==========================================
// GET MESSAGES
// ==========================================

app.get("/api/messages", (req, res) => {

    res.json(messages);

});


// ==========================================
// SEND MESSAGE
// ==========================================

app.post("/api/messages", (req, res) => {

    const { sender, text } = req.body;


    if (!sender || !text) {

        return res.status(400).json({
            error: "Sender and message are required."
        });

    }


    const message = {

        id: Date.now(),

        sender: sender,

        text: text,

        timestamp: new Date().toISOString()

    };


    messages.push(message);


    res.status(201).json(message);

});


// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {

    console.log(
        `PANDIST COMMS ONLINE → PORT ${PORT}`
    );

});
