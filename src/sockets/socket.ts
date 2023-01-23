import Band from '../models/band'
import Bands from '../models/bands'

const bands = new Bands()

bands.addBand(new Band('First'))
bands.addBand(new Band('Second'))
bands.addBand(new Band('Third'))
bands.addBand(new Band('Fourth'))

const socketInit = (io: any): void => {
  io.on('connection', (client: any) => {
    console.log('Client connected')

    client.emit('active-bands', bands.getBands())

    client.on('disconnect', () => {
      console.log('Client disconnected')
    })

    client.on('message', (payload: any) => {
      console.log(payload)

      io.emit('message', { admin: 'New SMS', ...payload })
    })

    client.on('vote-band', (payload: any) => {
      bands.voteBand(payload.id)
      io.emit('active-bands', bands.getBands())
    })

    client.on('add-band', (payload: any) => {
      bands.addBand(new Band(payload.name))
      io.emit('active-bands', bands.getBands())
    })

    client.on('delete-band', (payload: any) => {
      bands.deleteBand(payload.id)
      io.emit('active-bands', bands.getBands())
    })
  })
}

export { socketInit }
