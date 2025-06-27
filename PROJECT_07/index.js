const fetch = require('node-fetch');
const mongoose = require('mongoose');

//Mongodb connect -
mongoose.connect('mongodb://127.0.0.1:27017/postDB').then(() => {
    console.log("Connected Succefully");
}).catch((err) => {
    console.log("Error : ", err)
})

//Schema -

const userDataSchema = new mongoose.Schema({
    user_Id: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

//Model -

const userDataModel = mongoose.model("userData2", userDataSchema);

async function getAPI() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts'); //returns an promise

    const data = await posts.json(); //returns an promise
    // console.log(data);

    //const all = await userDataModel.insertMany(data)
    //console.log(all);

    // for(let i=0; i<data.length ; i++){

    //     }

    data.forEach( async (element) => {

        // console.log(element["id"]);
        // console.log(element["title"]);
        const all = await userDataModel.create({
            user_Id: element["userId"] ,
            id: element["id"] ,
            title: element["title"] ,
            description: element["body"] ,

        });

    });


}


getAPI();