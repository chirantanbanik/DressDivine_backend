const express = require("express")
const router = express.Router()

const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth.controller.js")
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user.controller.js")
const {updateStock} = require("../controllers/product.controller.js")
const {getOrderById, createOrder, getAllOrders, updateStatus, getOrderStatus} = require("../controllers/order.controller.js")

// params
router.param("userId", getUserById)
router.param("orderId", getOrderById)

// Actual routes
// Create
router.post("/order/create/:userId", isSignedIn, isAuthenticated, pushOrderInPurchaseList, updateStock, createOrder)

// Read
router.get("/order/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllOrders)

// status of order
router.get("/order/status/:userId", isSignedIn, isAuthenticated, isAdmin, getOrderStatus)
router.put("/order/:orderId/status/:userId", isSignedIn, isAuthenticated, isAdmin, updateStatus)


module.exports = router