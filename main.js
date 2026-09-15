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

const filtres = { categorie: null, secteur: null }

// évite qu'un "<" dans un texte casse le HTML
const echapper = (texte) => String(texte).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]
)

const gabaritProjet = (projet) => `
    <details>
        <summary>${echapper(projet.titre)}</summary>
        <p>Technologies utilisées : ${echapper(projet.technologies.join(", "))}</p>
        <p>${echapper(projet.description)}</p>
        ${projet.lien
            ? `<a href="${echapper(projet.lien.url)}" target="_blank" rel="noopener noreferrer">${echapper(projet.lien.libelle)}</a><br><br>`
            : ""}
        ${projet.images.map((img) =>
            `<img src="${echapper(img.src)}" alt="${echapper(img.alt)}" class="screen_projet" loading="lazy">`
        ).join("")}
    </details>`

const afficherProjets = () => {
    const visibles = PROJETS.filter((projet) =>
        (!filtres.categorie || projet.categorie === filtres.categorie) &&
        (!filtres.secteur   || projet.secteur   === filtres.secteur)
    )

    conteneurProjets.innerHTML = visibles.length
        ? visibles.map(gabaritProjet).join("")
        : "<p>Aucun projet ne correspond à ces filtres.</p>"
}

// ouverture / fermeture du panneau
btnFiltrer.addEventListener("click", () => {
    const ouverture = panneauFiltres.hidden
    
    panneauFiltres.hidden = !ouverture
    if (panneauFiltres.hidden) {
        document.querySelectorAll("#panneau_filtres input").forEach((entree) => entree.checked = false)
        document.querySelectorAll(".filtre_valeurs").forEach((bloc) => bloc.hidden = true)
        Object.keys(filtres).forEach((axe) => filtres[axe] = null)

        afficherProjets()
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

        afficherProjets()
    })

    radios.forEach((radio) => radio.addEventListener("change", () => {
        filtres[axe] = radio.value
        afficherProjets()
    }))
})

afficherProjets()