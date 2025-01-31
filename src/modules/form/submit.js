import { contentUserHistory } from "../history/load"
import { contentUserCard } from "../card/load"

const content = document.getElementById("content")
const form = document.querySelector("form")
const clientId = document.getElementById("client-id")

form.onsubmit = async (event) => {
   event.preventDefault()

   try {
      const id = clientId.value.trim();

      if (!id) {
         content.style.visibility = "hidden";
         return alert("Informe o ID do cliente!");
      }
      content.style.visibility = "visible";

      // recarrega os dados da página do cliente filtrado 
      await contentUserHistory();
      await contentUserCard();

   } catch (error) {
      alert("Não foi possível fazer a busca.");
      console.log(error);
   }
}