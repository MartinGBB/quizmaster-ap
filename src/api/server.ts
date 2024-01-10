import { app } from './app'
import { config } from 'dotenv'

config()
const PORT = process.env.APP_PORT || 3000

app.listen(PORT, () => console.log(`App connected in the port ${PORT}`))
