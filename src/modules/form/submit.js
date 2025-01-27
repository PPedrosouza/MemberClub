import dayjs from "dayjs"

const form = document.querySelector("form")
const clientId = document.getElementById("client-id")

form.onsubmit = async (event) => {
   event.preventDefault()

   try {
      // recuperando o nome do cliente
      const name = clientName.value.trim()
      if (!name) {
         return alert("Informe o ID do cliente!")
      }

      // recarrega os dados da página do cliente filtrado 
      await scheduleDays()
   } catch (error) {
      alert("Não foi possível realizar o agendamento.")
      console.log(error);

   }
}