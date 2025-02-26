const express = require('express');
const path = require('path');
const Product = require('../Model/CreateProduct');
const { pupload } = require('../multer');
const User = require('../Model/user');

const Router = express.Router();

Router.post("/createProduct", pupload.array('file', 5), async (req, res) => {
    const { name, description, category, tags, price, stock, email } = req.body;

    if (!req.files || req.files.length === 0) {
        return res.status(400).send("At least one image is required.");
    }

    const images = req.files.map(file => `/products/${path.basename(file.path)}`);

    try {
        if (!name || !description || !category || !price || !stock || !email) {
            return res.status(400).send("All fields are required.");
        }

        const existUser = await User.findOne({ email });
        if (!existUser) {
            return res.status(400).send("User doesn't exist.");
        }

        const product = new Product({
            name,
            description,
            category,
            tags: tags.split(","),
            price,
            stock,
            email,
            images
        });

        await product.save();
        res.status(201).json({ message: "Product created successfully!", product });

    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = Router;
