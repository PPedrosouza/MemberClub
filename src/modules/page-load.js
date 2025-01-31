import { contentUserHistory } from './history/load.js'
import { contentUserCard } from './card/load.js'

export async function scheduleDays() {
    contentUserHistory()
    contentUserCard()

}