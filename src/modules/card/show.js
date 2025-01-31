
// slots
const slotsDiv = document.getElementById("slots")

// card
const card = document.getElementById("card")
const slotsItensImg = card.querySelector("#slots .item img")
const idTag = document.getElementById("id-tag")

// progress bar
const progressBar = document.getElementById("progress")
const contentParagraph = progressBar.querySelector(".content p");
const linearProgressSpan = progressBar.querySelector(".linear-progress span");
const progressIndicator = progressBar.querySelector(".linear-progress .bar .progress-indicator")

export function cardShow({ client }) {
    try {
        if (!client) {
            throw new Error("Cliente não encontrado.");
        }

        slotsDiv.innerHTML = "";

        const id = document.getElementById("id-client")
        id.innerHTML = "ID: " + client.id;

        Array.from({ length: client.loyaltyCard.cutsNeeded }).forEach((_, index) => {
            const slot_div = document.createElement("div");
            slot_div.classList.add("item");

            if (index < client.loyaltyCard.totalCuts) {
                // Os primeiros 7 slots recebem o selinho (imgDiv)
                const img_div = document.createElement("img");
                img_div.classList.add("gift-default");
                img_div.src = "../src/assets/images/PinCheck.png";
                img_div.alt = "check";
                slot_div.appendChild(img_div);
            } else if (index === client.loyaltyCard.cutsNeeded - 1) {
                // O último slot recebe o ícone de prêmio
                const prize = document.createElement("img");
                prize.classList.add("gift-icon");
                prize.src = "../src/assets/icons/gift-default.svg";
                prize.alt = "prêmio";
                slot_div.appendChild(prize);
            }

            slotsDiv.appendChild(slot_div);
        });

        contentParagraph.innerHTML = client.loyaltyCard.cutsRemaining + " cortes restantes"
        linearProgressSpan.innerHTML = client.loyaltyCard.totalCuts + " de " + client.loyaltyCard.cutsNeeded
        const totalWidthInRem = 21.9375; // Largura total em rem
        const remToPx = 16; // Definindo que 1rem = 16px (padrão)
        
        const totalWidthInPx = totalWidthInRem * remToPx; // Converte para px
        
        // Calculando o progresso em pixels
        const progressWidthInPx = (client.loyaltyCard.totalCuts / client.loyaltyCard.cutsNeeded) * totalWidthInPx;
        
        // Atualizando o width do progressIndicator
        progressIndicator.style.width = `${progressWidthInPx}px`;
        
        if(client.loyaltyCard.cutsRemaining == 0){
            alert("🎉 Parabéns! Seu próximo corte é gratuito! 🎉")
        }
    } catch (error) {
        alert("Não foi possível exibir os dados do usuário.");
        console.log(error);
    }
}
