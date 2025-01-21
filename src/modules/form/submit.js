import dayjs from "dayjs"

const form = document.querySelector("form")
const clientId = document.getElementById("client-id")

form.onsubmit = async (event) => {
   event.preventDefault()

   console.log(clientId.value)
}