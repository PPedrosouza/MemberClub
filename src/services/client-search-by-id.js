import { apiConfig } from "./api-config.js";

export async function clientSearchById({ id }) {
    try {
        // Fazendo a requisição
        const response = await fetch(`${apiConfig.baseURL}/clients`);

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Converte a resposta para JSON
        const data = await response.json();
        console.log("Dados da API:", data);  // Adiciona um log para visualizar os dados
        
        // Filtra os clientes pelo ID selecionado
        const client = data.find(client => client.id === id);  // Alterando para usar o array diretamente
        console.log("Dados do client:", client);  // Adiciona um log para visualizar os dados

        // Retorna o cliente encontrado ou null se não existir
        return client;
    } catch (error) {
        alert("Não foi possível buscar o cliente pela API.")
        console.log(error);
    }
}