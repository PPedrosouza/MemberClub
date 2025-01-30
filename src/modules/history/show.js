const content = document.getElementById("content")

// user
const user = document.getElementById("user")
const userPhoto = user.querySelector("#avatar");
const userName = user.querySelector("#info h3");
const userInfo = user.querySelector("#info span");

// history
const history = document.getElementById("history")
const historyTotalHairCut = history.querySelector("#history-header span")
const historylist = history.querySelector("#history-list")

// card
const card = document.getElementById("card")
const slotsItensImg = card.querySelector("#slots .item img")
const idTag = card.querySelector(".id-tag")

// progress bar
const progressBar = document.getElementById("progress")
const contentParagraph = progressBar.querySelector(".content p");
const linearProgressSpan = progressBar.querySelector(".linear-progress span");
const progressIndicator = progressBar.querySelector(".linear-progress .bar .progress-indicator")

export function historyShow({ client }) {
    try {
        if (!client) {
            throw new Error("Cliente não encontrado.");
        }

        // Exibir o conteúdo (content)
        content.style.visibility  = "visible";  // Torna o content visível

        // Limpar os dados anteriores
        cleanOldUser();

        // Renderizar os dados do cliente
        if (client.id === "124-537-835-230") {
            userPhoto.src = "../src/assets/images/nataliaMiranda.png";
        } else if (client.id === "207-245-699-104") {
            userPhoto.src = "../src/assets/images/capitaoNascimento.jpg";
        } else if (client.id === "523-114-876-908") {
            userPhoto.src = "../src/assets/images/sansao.jpg";
        } else {
            userPhoto.src = "../src/assets/images/avatar.png";
        }

        userName.innerHTML = client.name;
        userInfo.innerHTML = "Cliente desde " + client.clientSince;

        historyTotalHairCut.innerHTML = client.loyaltyCard.totalCuts + " Cortes";

        client.appointmentHistory.forEach((appointment) => {
            const history_row_div = document.createElement("div");
            history_row_div.classList.add('history-row');

            const history_row_title_div = document.createElement("div");
            history_row_title_div.classList.add('history-row-title');
            const p = document.createElement("p");
            p.innerHTML = appointment.date;
            const span = document.createElement("span");
            span.innerHTML = appointment.time;

            history_row_title_div.append(p, span);

            const history_row_icon_div = document.createElement("div");
            history_row_icon_div.classList.add('history-row-icon');
            const check_hair_cut_icon = document.createElement("img");
            check_hair_cut_icon.classList.add('history-row-icon');
            check_hair_cut_icon.setAttribute("src", "./src/assets/icons/check-colorfull.svg");
            check_hair_cut_icon.setAttribute("alt", "Check");

            history_row_icon_div.append(check_hair_cut_icon);
            history_row_div.append(history_row_title_div, history_row_icon_div);
            historylist.appendChild(history_row_div);  // Adiciona a linha ao histórico
        });
    } catch (error) {
        alert("Não foi possível exibir os dados do usuário.");
        console.log(error);
    }
}

function cleanOldUser() {
    if (userPhoto) {
        userPhoto.src = "../src/assets/images/avatar.png";
    }
    if (userName) userName.textContent = "";
    if (userInfo) userInfo.textContent = "";

    if (historyTotalHairCut) historyTotalHairCut.textContent = "";
    if (historylist) historylist.textContent = "";

    if (slotsItensImg) {
        userPhoto.src = "";
        userPhoto.alt = "";
        slotsItensImg.style.display = "none";
    }
    if (idTag) idTag.textContent = "";

    if (contentParagraph) contentParagraph.textContent = "";
    if (linearProgressSpan) linearProgressSpan.textContent = "";
    if (linearProgressSpan) linearProgressSpan.textContent = "";
    if (progressIndicator) progressIndicator.style.width = "0";
}