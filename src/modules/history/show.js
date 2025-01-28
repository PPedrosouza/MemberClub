
// seleciona as sessões do histórico, do card e da progress bar
const user = document.getElementById("user")
const history = document.getElementById("history")
const card = document.getElementById("card")
const progressBar = document.getElementById("progress")

export function historyShow({ clientData }) {
    try {
        // user
        const userPhoto = user.querySelector("#avatar");
        const userName = user.querySelector("#info h3");
        const userInfo = user.querySelector("#info span");

        if (userPhoto) {
            userPhoto.src = "../src/assets/images/avatar.png";
            userPhoto.alt = "avatar";
        }
        if (userName) userName.textContent = "";
        if (userInfo) userInfo.textContent = "";

        // history
        const historyTotalHairCut = history.querySelector("#history-header span")
        const historylist = history.querySelector("#history-list")

        if (historyTotalHairCut) historyTotalHairCut.textContent = "";
        if (historylist) historylist.textContent = "";

        // card
        const slotsItensImg = card.querySelector("#slots .item img")
        const idTag = card.querySelector(".id-tag")

        if (slotsItensImg) {
            userPhoto.src = "";
            userPhoto.alt = "";
            slotsItensImg.style.display = "none";
        }
        if (idTag) idTag.textContent = "";

        // progress bar
        const contentParagraph = progressBar.querySelector(".content p");
        const linearProgressSpan = progressBar.querySelector(".linear-progress span");
        const progressIndicator = progressBar.querySelector(".linear-progress .bar .progress-indicator")

        if (contentParagraph) contentParagraph.textContent = "";
        if (linearProgressSpan) linearProgressSpan.textContent = "";
        if (linearProgressSpan) linearProgressSpan.textContent = "";
        if (progressIndicator) progressIndicator.style.width = "0";


        // renderizar os dados do cliente
        clientData.forEach((client) => {
            const userName = document.createElement("h3")
            const userInfo = document.createElement("span")
        });
    } catch (error) {
        alert("Não foi possível exibir os agendamentos.")
        console.log(error);
    }
}