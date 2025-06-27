const fs = require("fs");

const db = fs.readFileSync("Basics/Web Server/Example/data.json", "utf-8");
// console.log(db, typeof db) ;

const dbObj = JSON.parse(db); //JS object now
const dbArry = dbObj.users; //retuns an array containing multiple object of data

// console.log(dbArry);

const getProducts = (req, res) => {

    res.json(dbArry);
    console.log("All Products Get Fetched!");
}

const getProduct = (req, res) => {

    const id = req.params.id;

    const id_Obj = dbArry.find((item, index) => {

        return item.id === +(id);
    });

    res.json(id_Obj)
    console.log("Single Product Get Fetched!");

}

const createProduct = (req, res) => {

    dbArry.push(req.body);

    res.status(201).json(req.body); //we usully want to see saved data one copy to client. //used 201 for created Item status code.
    console.log("New Single Product Get Added!");

}

const replaceProduct = (req, res) => {

    const id = +(req.params.id);

    const arryIndex = dbArry.findIndex(item => item.id === id);

    dbArry.splice(arryIndex, 1, { ...req.body, id: id });

    res.status(204).end("New Data Has Been Replace at Hit Id..!");
}

const editProduct = (req, res) => {

    const id = +(req.params.id);

    const arryIndex = dbArry.findIndex(item => item.id === id);

    const respObj = dbArry[arryIndex];

    dbArry.splice(arryIndex, 1, { ...respObj, ...req.body });

    res.status(200).json("New Data Has Been Replace at Hit Id..!");

}

const deleteProduct = (req, res) => {

    const id = +(req.params.id);

    const arryIndex = dbArry.findIndex(item => item.id === id);

    dbArry.splice(arryIndex, 1);

    res.status(200).json("Given ID Data Has Been Deleted..!");

}


module.exports = {createProduct, getProducts, getProduct, replaceProduct, editProduct, deleteProduct } ;