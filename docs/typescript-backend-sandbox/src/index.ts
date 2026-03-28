import cors from "cors"
import express, {Router} from "express"
import {config} from "./config.js"
import {sessionRoutes} from "./Routes/SessionRoutes.js"
import {bankIdRoutes} from "./Routes/BankIdRoutes.js"
import {investmentRoutes} from "./Routes/InvestmentRoutes.js"

const app = express()
const port = config.PORT


// Configure CORS middleware options
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin
    if (!origin) return callback(null, true)

    if (config.FRONTEND_URL !== origin) {
      const msg = "The CORS policy for this site does not allow access from the specified Origin."
      console.log(`Rejected request from ${origin} due to CORS policy`)
      return callback(new Error(msg), false)
    }

    // Allow request
    return callback(null, true)
  }
}

// Enable CORS with the above options
app.use(cors(corsOptions))
app.use(express.json())


// Router

const router = Router()

sessionRoutes(router)
bankIdRoutes(router)
investmentRoutes(router)

app.use(router)


// Start server

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/, config.IS_PROD: ${config.IS_PROD}`)
})
