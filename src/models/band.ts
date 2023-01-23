import { v4 as uuidv4 } from 'uuid'

class Band {
  id: string
  name: string
  votes: number

  constructor (name: string) {
    this.id = uuidv4()
    this.name = name
    this.votes = 0
  }
}

export default Band
