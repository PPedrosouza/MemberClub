import { clientSearchById } from '../services/client-search-by-id.js'
import { contentUsersHistory } from './history/load.js'

// seleciona o input de data
const clientId = document.getElementById("client-id")

export async function scheduleDays() {
    // obtém a data do input
    const id = clientId.value

    // buscar na API os agendamentos
    const clientData = await clientSearchById({ id })

    console.log(clientData);
    // exibe os agendamentos
    contentUsersHistory({ clientData })

}