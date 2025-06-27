/*

What is Stripe ?

Stripe is an online payment processing platform that allows businesses to accept payments from customers through their website, ecommerce platform.

Integrating Stripe in Node allows to make and manage online payments. Stripe provides developer-friendly API to set up the payment gateway to handle secure transactions.

Payment gateways help the user to make their payments. There are many payment gateways available in the market like Razorpay, Google pay, etc but the most popular among them is Stripe payment gateway.

It’s easy to get started and easy to use.
It is a widely used and popular module for processing payments.
User-friendly services and highly secured.

#To Setup stripe Payment gateway with Nodejs -

Install the stripe package in project : >npm install stripe

Then, setup environment variables for authentication, API endpoints for processing payments, and handle the transactions.

To work with stripe Payment Gateway Need packages like -

>npm i ejs express body-parser ejs dotenv nodemon



*/

const express = require("express");
const server = express();
require("dotenv").config();

const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.STRIPE_PORT  || 3000 ;

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY) ;


server.use(express.urlencoded({extended : false}));
server.use(express.json());

server.set("view engine", "ejs");
server.set("views", path.resolve("./views"));


// To Load HTML/CSS i.e UI, here at Payment Page -
server.get("/payment", (req, res)=>{

    res.render("V.Stripe_PaymentGateWay.ejs",{
        key : process.env.STRIPE_PUBLISHABLE_KEY,
        amount : 500
    })
})

server.post("/payment", (req, res)=>{

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: "Prakash Verma",
        address: {
            line1: "30/1 K.C Bose Lane",
            postal_code:"711201",
            city: "Kolkata",
            state: "West Bengal",
            country: "India"
        }
    })
    .then((customer) => {
        return stripe.charges.create({
            amount: 50000, // Charging Rs 25
            description: "Web Development Product",
            currency: "INR",
            customer: customer.id
        });
    })
    .then((charge) => {
        res.send("Success"); // If no error occurs
        console.log(charge); //To see all charges as Bill.
    })

    .catch((err) => {
        res.send(err); // If some error occurs
    });

});


server.listen(PORT, ()=> console.log(`Server started on ${PORT}`));