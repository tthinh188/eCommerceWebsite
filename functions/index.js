
// firebase emulators:start
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IMiWTEutSapc6cGGZTf0i23wbjI7p3GHelrkekf2tF9HV5CLgLyIAsJpIzYwyljskOtSDqk7neOVr2HD00mqyHd00aTPZHPyt");

// API

// App config

const app = express();

// middlewares

app.use(cors({origin: true}));
app.use(express.json());

// API routes

app.get("/", (request, response) => response.status(200).send('hello word'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received amount: ', total)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    });
    
// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-96fac/us-central1/api