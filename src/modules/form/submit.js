import dayjs from "dayjs"
import { contentUserHistory } from "../history/load"
import { contentUserCard } from "../card/load"


const form = document.querySelector("form")
const clientId = document.getElementById("client-id")

form.onsubmit = async (event) => {
   event.preventDefault()

   try {
      const id = clientId.value.trim();

      if (!id) {
         return alert("Informe o ID do cliente!");
      }

      // recarrega os dados da página do cliente filtrado 
      await contentUserHistory();
      await contentUserCard();

   } catch (error) {
      // // Exibir o conteúdo (content)
      // content.style.visibility = "visible";  // Torna o content visível
      alert("Não foi possível fazer a busca.");
      console.log(error);
   }
}