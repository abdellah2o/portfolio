const lienBas = document.getElementById("lien-bas")
const mediaQuery = window.matchMedia("(max-width: 767px)")

const majLienBas = () => {
    lienBas.textContent = mediaQuery.matches ? "bas" : "bas de page";
}

majLienBas()
mediaQuery.addEventListener("change", majLienBas)