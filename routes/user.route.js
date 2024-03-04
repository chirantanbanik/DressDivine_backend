const express = require("express")
const router = express.Router()

const {getUserById, getUser, updateUser, userPurchaseList} = require("../controllers/user.controller.js")
const {isSignedIn, isAdmin, isAuthenticated} = require("../controllers/auth.controller.js")

router.param("userId", getUserById)

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser)
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser)

router.get("/order/user/:userId", isSignedIn, isAuthenticated, userPurchaseList)

module.exports = router

