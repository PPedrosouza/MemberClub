import dayjs from "dayjs"
import { contentUsersHistory } from "../history/load"

const form = document.querySelector("form")
const clientId = document.getElementById("client-id")

form.onsubmit = async (event) => {
   event.preventDefault()

   try {
      const id = clientId.value.trim();
      console.log("ID do cliente:", id);

      if (!id) {
         return alert("Informe o ID do cliente!");
      }

      // recarrega os dados da página do cliente filtrado 
      await contentUsersHistory();
   } catch (error) {
      alert("Não foi possível fazer a busca.");
      console.log(error);
   }
}