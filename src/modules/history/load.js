import dayjs from "dayjs";
import { clientSearchById } from "../../services/client-search-by-id";
import { historyShow } from "./show";

const clientId = document.getElementById("client-id")

export async function contentUsersHistory() {
    try {
        // obtém o id do input
        const id = clientId.value

        // busca na API o histórico de agendamentos do cliente
        const appointmentHistory = await clientSearchById({ id })

        // exibe o histórico
        historyShow({appointmentHistory})

    } catch (error) {
        alert("Não foi possível exibir os agendamentos.")
        console.log(error);
    }
}