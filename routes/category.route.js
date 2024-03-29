const express = require("express")
const router = express.Router()

const {getCategoryById, createCategory, getCategory, getAllCategory, updateCategory, removeCategory} = require("../controllers/category.controller.js")
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth.controller.js")
const {getUserById} = require("../controllers/user.controller.js")

// params
router.param("userId", getUserById)
router.param("categoryId", getCategoryById)

// actual routes goes here

// create
router.post("/category/create/:userId", isSignedIn, isAuthenticated, isAdmin, createCategory)

// read
router.get("/category/:categoryId", getCategory)
router.get("/categories", getAllCategory)

// update 
router.put("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin, updateCategory)

//delete
router.delete("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin, removeCategory)

module.exports = router