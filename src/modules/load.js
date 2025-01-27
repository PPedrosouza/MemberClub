import { searchId } from '../services/search-for-clients.js'
import { contentUsersHistory } from '../modules/history/show.js'

// seleciona o input de data
const clientId = document.getElementById("client-id")

export async function scheduleDays() {
    // obtém a data do input
    const id = clientId.value

    // buscar na API os agendamentos
    const clientData = await searchId({ id })

    // exibe os agendamentos
    contentUsersHistory({ clientData })

}