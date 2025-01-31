import { clientSearchById } from "../../services/client-search-by-id";
import { cardShow } from "./show";

const clientId = document.getElementById("client-id")

export async function contentUserCard() {
    const id = clientId.value;

    const client = await clientSearchById({ id });

    if (client) {
        cardShow({ client }); 
    } else {
        console.log("Cliente não encontrado.");
    }
}
