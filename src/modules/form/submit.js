import dayjs from "dayjs"

const form = document.querySelector("form")
const clientId = document.getElementById("client-id")

form.onsubmit = async (event) => {
   event.preventDefault()

   try {
      // recuperando o nome do cliente
      const id = clientId.value.trim()

      if (!id) {
         return alert("Informe o ID do cliente!")
      }

      // recarrega os dados da página do cliente filtrado 
      await loadLappointmentHistory()
      await loadLoyaltyCard()
   } catch (error) {
      alert("Não foi possível realizar o agendamento.")
      console.log(error);
   }
}