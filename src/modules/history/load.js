import dayjs from "dayjs";
import { clientSearchById } from "../../services/client-search-by-id";
import { historyShow } from "./show";

const clientId = document.getElementById("client-id")

export async function contentUsersHistory() {
    const id = clientId.value;

    // Busca na API o histórico de agendamentos do cliente
    const client = await clientSearchById({ id });

    // Exibe o histórico
    if (client) {
        historyShow({ client });  // Passa o cliente diretamente
    } else {
        console.log("Cliente não encontrado.");
    }
}
