import { apiConfig } from "./api-config.js";

export async function searchId({ id }) {
    try {
        // faz a requisição para enviar os dados do agendamento
        await fetch(`${apiConfig.baseURL}/search-clients`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })

        // exibe mensagem do agendamento realizado
        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        alert("ID inválido. Tente um outro!")
        console.log(error);
    }
}