const express = require('express');
const router = express.Router();

const presentation = require('./routes/presentation.js');
// const copier = require("./route/copier.js");
// const deliveries = require("./route/deliveries.js");
// const invoices = require("./route/invoices.js");
// const orderItems = require("./route/order_items.js");
// const orders = require("./route/orders.js");
// const products = require("./route/products.js");

router.use('/', presentation);
// router.use("/copier", copier);
// router.use("/deliveries", deliveries);
// router.use("/invoices", invoices);
// router.use("/order_items", orderItems);
// router.use("/orders", orders);
// router.use("/products", products);

module.exports = router;
