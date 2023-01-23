import Express from 'express'
import http from 'http'
import * as dotenv from 'dotenv'
import { Server } from 'socket.io'
import { socketInit } from './sockets/socket'

dotenv.config()
const app = Express()
const port = process.env.PORT ?? '5000'

const server = http.createServer(app)
const io = new Server(server)

socketInit(io)

app.use(Express.static('public'))

server.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
