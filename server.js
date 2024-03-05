require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

// Routes
const authRoutes = require("./routes/auth.route.js")
const userRoutes = require("./routes/user.route.js")
const categoryRoutes = require("./routes/category.route.js")
const productRoutes = require("./routes/product.route.js")
const orderRoutes = require("./routes/order.route.js")
const stripeRoutes = require("./routes/stripePayment.route.js")

// Database
const DB_Connection = require("./db/db.connect.js")

// Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// Routes
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)
app.use("/api", orderRoutes)
app.use("/api", stripeRoutes)

// PORT
const PORT = process.env.PORT

// Start the server on
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})