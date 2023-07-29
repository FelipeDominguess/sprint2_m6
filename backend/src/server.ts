import app from './app'
import "dotenv/config"
import { AppDataSource } from "./data-source"

const cors = require('cors');



AppDataSource.initialize()
    .then(() => {
        app.use(cors())
        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`)
        })
    })
    .catch((error) => console.log(error))
