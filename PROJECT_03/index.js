
require("dotenv").config();
const express = require("express");
const server = express();

const path = require('path');
const PORT = process.env.STRIPE_PORT  || 3000 ;
const {STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY } = process.env ;

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY) ;


server.use(express.urlencoded({extended : false}));
server.use(express.json());

server.set("view engine", "ejs");
server.set("views", path.resolve("./views"));


// To Load HTML/CSS i.e UI, here at Payment Page -
server.get("/payment", (req, res)=>{

    res.render("payment.ejs",{

        key : process.env.STRIPE_PUBLISHABLE_KEY,
        amount : 500
    })
})

// Stripe Integration /Checkout API -
server.post("/checkout", async (req, res)=>{

    const product = req.body.product;
    console.log(product); //To check are we getting payment details or not.

    // const lineItems = product.map((item)=>{

    //     price_data : {
    //         currency : "inr",
    //         product_data : {
    //             name : item.
    //         },
    //         unit_amount : item.price * 100
    //     },
    //     quantity : item.

    // })

    const session = await stripe.checkout.sessions.create({
        // payment_method_types : ["card"], //only accepts the card
        line_items : [
            {
                price_data : {
                    currency : 'usd',
                    product_data : {
                        name : 'ExpressJs Books',
                        description : "A Book of ExpressJS Tutorial"
                    },
                    unit_amount : 50 * 100 //to convert to percentage
                },
                quantity : 1 //No of line items get purchased
            },

            {
                price_data : {
                    currency : 'usd',
                    product_data : {
                        name : 'T-Shirt and Pants',
                        description : "T-shirt and Pants for Men"
                    },
                    unit_amount : 20 * 100 //to convert to percentage
                },
                quantity : 2 //No of line items get purchased
            },



        ] ,
        mode: 'payment',
        shipping_address_collection : {
            allowed_countries : ['US', 'BR', 'IN']
        },
        success_url:`${process.env.BASE_URL}/success`,
        cancel_url:`${process.env.BASE_URL}/cancel`,

    });

    // console.log(session)

    res.redirect(session.url); //url field of session object holds the details of payment page with entering card number etc.

    // res.json({id : session.id})

});

server.get("/success", (req, res)=>{

    res.send("Your Payment was Succesfull..!")
    
})

server.get("/cancel", (req, res)=>{

    // res.send("Your Payment is Cancelled..!")
    res.redirect("/payment"); //Home Route Page, if payment get failed user get again directed to the Home payment page.

})

/*WebHooks in stripe Payment Gateway : - Webhooks are a way to send real-time notifications between servers when a specific event occurs, such as a payment status change, refund, or chargeback, payment completion, payment failure. 

In a payment gateway, webhooks can be used to: 
Update order status: When a payment is successful, a webhook notification can be sent to update the order status to "Paid". 

Notify users of failed payments: If a payment fails, a webhook notification can be sent to notify the user. 

Automate internal ERPs: Merchants can use webhooks to receive post-payment details to automate and synchronize their internal ERPs. 

Webhooks work by sending an HTTP POST request to a URL that you specify. This allows your system to receive updates in real-time without needing to constantly poll the payment gateway for status changes. 

To Setup Webhooks In Stripe Payment Gateway : -

Install: Stripe CLI and unzip and add unzipped file path to environment path.

Login to CLI at Project :>stripe login


*/

server.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {

    const payload = JSON.stringify(req.body);
    const sig = req.headers['stripe-signature'];

    // Now, Matching these webhook from stripe -
    let event;
    try {
        event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET_KEY );

    } catch (error) {

        console.log(error.message);
       return res.status(400).json({success : false});
        // res.status(400).send(`Webhook Error: ${err.message}`);       
    }

    //Successfull -
    console.log(event.type);
    console.log(event.data.object);
    console.log(event.data.object.id);

    res.json({success : true})
  
   // Handle the event
  switch (event.type) {

    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful!');
      break;

    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a Customer!');
      break;

    // ... handle other event types..

    default:
      console.log(`Unhandled event type ${event.type}`);
    }

  // Return a response to acknowledge receipt of the event
        res.json({received: true});

  });

server.listen(PORT, ()=> console.log(`Server started on ${PORT}`));