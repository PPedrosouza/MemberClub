import { apiConfig } from "./api-config.js";

export async function searchId({ id }) {
    try {
        // Fazendo a requisição
        const response = await fetch(`${apiConfig.baseURL}/clients`);

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Filtra os clientes pelo ID selecionado
        const client = data.clients.find(client => client.id === id);

        // Retorna o cliente encontrado ou null se não existir
        return client || null;
    } catch (error) {
        alert("Não foi possível buscar os clients.")
        console.log(error);
    }
}