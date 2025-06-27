


const product2Model = require("../models/product2");



exports.getAllProducts = async (req, res) => {

    const allProduct2  = await product2Model.find({id : {$gt : 27 }})
    res.json(allProduct2);
    console.log("All Products Get Fetched!");
}

exports.getProduct = async (req, res) => {

    const id = req.params.id;
    const product = await product2Model.findOne({_id : id});

    res.json(product)
    console.log("Single Product Get Fetched!");

}

exports.createProduct = (req, res) => {

    const product2 = new product2Model(req.body)

    // product2.title = "PhoneX",
    // product2.price = 9999,
    // product2.rating = 5,
    product2.save()

    res.status(201).json(product2); //we usully want to see saved data one copy to client. //used 201 for created Item status code.
    console.log("New Single Product Get Added!");

}

//PUT - Replace
exports.replaceProduct = async (req, res) => {

    const id = req.params.id;
    const product = await product2Model.findOneAndReplace(id, req.body) ;

    res.status(204).end("New Data Has Been Replace at Hit Id..!");
}

//PATCH - Update
exports.updateProduct = async (req, res) => {

    const id = req.params.id;
    const product = await product2Model.findOneAndUpdate(id, req.body) ;

    res.status(200).json("New Data Has Been Replace at Hit Id..!");

}

exports.deleteProduct = async (req, res) => {

    const id = req.params.id;
    const product = await product2Model.findOneAndDelete() ;

    res.status(200).json("Given ID Data Has Been Deleted..!");

}

