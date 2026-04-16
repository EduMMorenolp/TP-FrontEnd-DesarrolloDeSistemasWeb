const portadaBtn = document.getElementById("portadaBtn");
const portadaMensaje = document.getElementById("portadaMensaje");

if (portadaBtn && portadaMensaje) {
	portadaBtn.addEventListener("click", () => {
		portadaMensaje.textContent = "La mision comenzo: el gremio Clouds se prepara para vencer al Bug.";
	});
}

const profileButtons = document.querySelectorAll(".profile-btn");

profileButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const card = button.closest(".card");
		const hint = card ? card.querySelector(".profile-hint") : null;
		const name = button.getAttribute("data-name") || "Integrante";

		if (hint) {
			hint.textContent = `${name} activo su habilidad especial para el TP1.`;
		}
	});
});
