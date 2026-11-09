/*RESOLUTION BUG D'AFFICHAGE MOBILE*/

const lienBas = document.getElementById("lien-bas")
const mediaQuery = window.matchMedia("(max-width: 767px)")

const majLienBas = () => {
    lienBas.textContent = mediaQuery.matches ? "bas" : "bas de page";
}

majLienBas()
mediaQuery.addEventListener("change", majLienBas)


/*PROJETS*/

const conteneurProjets = document.getElementById("projets")
const btnFiltrer = document.getElementById("btn_filtrer")
const panneauFiltres = document.getElementById("panneau_filtres")
const btnVoirPlus = document.getElementById("btn_voir_plus")
const mediaTablette = window.matchMedia("(max-width: 1023px)")

const filtres = { categorie: null, secteur: null }

// nombre de rangées de projets affichées, chaque rangée correspond au nombre de colonnes de la grille
let rangees = 1

const nbColonnes = () => mediaQuery.matches ? 1 : mediaTablette.matches ? 2 : 3
const limiteProjets = () => rangees * nbColonnes()

// évite qu'un "<" dans un texte casse le HTML
const echapper = (texte) => String(texte).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]
)

const gabaritProjet = (projet) => `
    <div class="projet">
        <h3>${echapper(projet.titre)}</h3>
        <p>Technologies utilisées : ${echapper(projet.technologies.join(", "))}</p>
        <p>${echapper(projet.description)}</p>
        ${projet.lien
            ? `<a href="${echapper(projet.lien.url)}" target="_blank" rel="noopener noreferrer">${echapper(projet.lien.libelle)}</a><br><br>`
            : ""}
        ${projet.images.map((img) =>
            `<img src="${echapper(img.src)}" alt="${echapper(img.alt)}" class="screen_projet" loading="lazy">`
        ).join("")}
    </div>`

const projetsFiltres = () => PROJETS.filter((projet) =>
    (!filtres.categorie || projet.categorie === filtres.categorie) &&
    (!filtres.secteur   || projet.secteur   === filtres.secteur)
)

const afficherProjets = () => {
    const visibles = projetsFiltres()

    conteneurProjets.innerHTML = visibles.length
        ? visibles.slice(0, limiteProjets()).map(gabaritProjet).join("")
        : "<p>Aucun projet ne correspond à ces filtres.</p>"

    btnVoirPlus.hidden = limiteProjets() >= visibles.length
}

// un changement de filtre repart de la première rangée
const appliquerFiltres = () => {
    rangees = 1
    afficherProjets()
}

// ajoute seulement la rangée suivante : les cartes déjà affichées ne sont pas recréées
btnVoirPlus.addEventListener("click", () => {
    const visibles = projetsFiltres()
    const debut = limiteProjets()

    rangees++
    conteneurProjets.insertAdjacentHTML(
        "beforeend",
        visibles.slice(debut, limiteProjets()).map(gabaritProjet).join("")
    )

    btnVoirPlus.hidden = limiteProjets() >= visibles.length
})

// ouverture / fermeture du panneau
btnFiltrer.addEventListener("click", () => {
    const ouverture = panneauFiltres.hidden
    
    panneauFiltres.hidden = !ouverture
    if (panneauFiltres.hidden) {
        document.querySelectorAll("#panneau_filtres input").forEach((entree) => entree.checked = false)
        document.querySelectorAll(".filtre_valeurs").forEach((bloc) => bloc.hidden = true)
        Object.keys(filtres).forEach((axe) => filtres[axe] = null)

        appliquerFiltres()
    }
    
    btnFiltrer.setAttribute("aria-expanded", String(ouverture))
})

// un seul écouteur générique par axe, grâce à data-axe
document.querySelectorAll(".filtre_actif").forEach((caseAxe) => {
    const axe = caseAxe.dataset.axe
    const blocValeurs = caseAxe.closest(".filtre").querySelector(".filtre_valeurs")
    const radios = blocValeurs.querySelectorAll("input[type=radio]")

    caseAxe.addEventListener("change", () => {
        blocValeurs.hidden = !caseAxe.checked

        if (caseAxe.checked) {
            const coche = [...radios].find((radio) => radio.checked)
            filtres[axe] = coche ? coche.value : null
        } else {
            radios.forEach((radio) => radio.checked = false)
            filtres[axe] = null
        }

        appliquerFiltres()
    })

    radios.forEach((radio) => radio.addEventListener("change", () => {
        filtres[axe] = radio.value
        appliquerFiltres()
    }))
})

// le nombre de colonnes change avec la largeur de l'écran
mediaQuery.addEventListener("change", afficherProjets)
mediaTablette.addEventListener("change", afficherProjets)

afficherProjets()