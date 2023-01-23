import { BandType } from '../types'

class Bands {
  bands: BandType[]

  constructor () {
    this.bands = []
  }

  addBand (band: BandType): void {
    this.bands.push(band)
  }

  getBands (): BandType[] {
    return this.bands
  }

  deleteBand (id: string): void {
    this.bands = this.bands.filter(band => band.id !== id)
  }

  voteBand (id: string): void {
    this.bands = this.bands.map(band => {
      if (band.id !== id) return band
      band.votes++
      return band
    })
  }
}

export default Bands
