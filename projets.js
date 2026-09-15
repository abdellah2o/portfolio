/*
    Données des projets du portfolio.
    Ordre : chronologique croissant (le premier du tableau est le plus ancien).

    Champs :
      id            -> identifiant court, utile pour une ancre ou un attribut data-*
      titre         -> texte affiché
      categorie     -> "perso" ou "pro"    (filtre "catégorie")
      secteur       -> "dev"   ou "autre"  (filtre "secteur")
      technologies  -> tableau de chaînes
      description   -> paragraphe
      lien          -> null, ou { url: "...", libelle: "..." }
      images        -> tableau de { src, alt }
*/

const PROJETS = [
    {
        id: "cubeplayer",
        titre: "CubePlayer",
        categorie: "perso",
        secteur: "dev",
        technologies: ["Unity", "C#", "Visual Studio Code"],
        description: "Ce projet constitue mon tout premier contact avec l'informatique, je l'avais mené à bien à l'aide d'un tutoriel sur Youtube. Il m'a permis de comprendre les concepts essentiels de la programmation comme les variables, fonctions, boucles, conditions, et de les appliquer sur un jeu vidéo.",
        lien: null,
        images: [
            { src: "images/screenshots_projets/cubeplayerimg1.png", alt: "écran d'accueil" },
            { src: "images/screenshots_projets/cubeplayerimg2.png", alt: "écran jeu" }
        ]
    },
    {
        id: "the-shoose",
        titre: "The Shoose",
        categorie: "perso",
        secteur: "dev",
        technologies: ["Unity", "C#", "Visual Studio Code"],
        description: "Jeu réalisé dans le cadre d'une game jam de 48h (compétition entre plusieurs personnes qui doivent faire un jeu respectant un thème défini et en un temps limite) du nom de tufrjam2.",
        lien: {
            url: "https://www.jam.tutounity.fr/jeu-details.php?id=141",
            libelle: ">  Page du jeu  <"
        },
        images: [
            { src: "images/screenshots_projets/theshooseimg1.png", alt: "écran d'accueil" },
            { src: "images/screenshots_projets/theshooseimg2.png", alt: "écran jeu" },
            { src: "images/screenshots_projets/theshooseimg3.png", alt: "écran morpion" }
        ]
    },
    {
        id: "othello-java",
        titre: "Othello Java",
        categorie: "pro",
        secteur: "dev",
        technologies: ["Java", "IntelliJ"],
        description: "Projet universitaire en binôme ayant pour but de reproduire le célèbre jeu Othello (parfois appelé Reversi) en Java et jouable sur terminal de commandes. La contrainte imposée par les professeurs responsables du projet est que nous n'ayons pas le droit d'utiliser la programmation orientée objet.",
        lien: null,
        images: [
            { src: "images/screenshots_projets/othelloimg1.png", alt: "accueil du jeu" },
            { src: "images/screenshots_projets/othelloimg2.png", alt: "écran partie" }
        ]
    },
    {
        id: "serveur-lamp",
        titre: "Installation serveur LAMP (Linux, Apache, MySQL, PHP)",
        categorie: "pro",
        secteur: "autre",
        technologies: ["Linux", "Apache", "MySQL", "PHP", "VirtualBox", "bash"],
        description: "En groupe de trois, nous avions procédé à la configuration d'un serveur web LAMP sur machine virtuelle pour héberger un site web, chacun des composants logiciel a été installé à l'aide du gestionnaire de paquets.",
        lien: null,
        images: [
            { src: "images/screenshots_projets/lampimg1.png", alt: "accueil du jeu" },
            { src: "images/screenshots_projets/lampimg2.png", alt: "écran partie" },
            { src: "images/screenshots_projets/lampimg3.png", alt: "écran partie" },
            { src: "images/screenshots_projets/lampimg4.png", alt: "écran partie" }
        ]
    },
    {
        id: "lost-on-crampteus",
        titre: "Lost on Crampteus",
        categorie: "pro",
        secteur: "dev",
        technologies: ["Java", "JavaFX", "JUnit", "Git", "Trello", "IntelliJ"],
        description: "Développement de A à Z d'un jeu vidéo Terraria-like en Java, ce projet universitaire a été réalisé avec deux camarades étudiants de mon IUT. Il nous a été imposé de coder en structure MVC (modèle, vue, contrôleur) sans autre bibliothèque que JavaFX. Le semestre d'après, nous avons du revoir toute la structure du code et implémenter des designs pattern, pour avoir un projet plus maintenable et extensible",
        lien: null,
        images: [
            { src: "images/screenshots_projets/lotimg1.png", alt: "point d'apparition joueur" },
            { src: "images/screenshots_projets/lotimg2.png", alt: "joueur qui mine" },
            { src: "images/screenshots_projets/lotimg3.png", alt: "joueur combat ennemi" }
        ]
    },
    {
        id: "jeu-connexion",
        titre: "Jeu Connexion",
        categorie: "perso",
        secteur: "dev",
        technologies: ["Unity", "C#", "Visual Studio Code", "Git"],
        description: "Jeu où l'on doit construire un réseau informatique local avec des contraintes qui apportent un réel défi. [En cours de développement]",
        lien: null,
        images: [
            { src: "images/screenshots_projets/connexionimg1.png", alt: "point d'apparition joueur" },
            { src: "images/screenshots_projets/connexionimg2.png", alt: "écran dialogue" },
            { src: "images/screenshots_projets/connexionimg3.png", alt: "écran partie" }
        ]
    },
    {
        id: "la-buvette",
        titre: "Application PHP La Buvette",
        categorie: "pro",
        secteur: "dev",
        technologies: ["PHP", "Figma", "Git", "Trello", "HTML", "Bootstrap", "CSS", "MySQL"],
        description: "Projet universitaire où l'on doit concevoir et développer une application web à partir des besoins utilisateurs formulés par les professeurs responsables du projet.",
        lien: null,
        images: [
            { src: "images/screenshots_projets/buvetteimg1.png", alt: "page d'accueil" },
            { src: "images/screenshots_projets/buvetteimg2.png", alt: "écran liste des buvettes" },
            { src: "images/screenshots_projets/buvetteimg3.png", alt: "écran passer une commande" },
            { src: "images/screenshots_projets/buvetteimg4.png", alt: "modèle conceptuel de données de l'application" }
        ]
    },
    {
        id: "apprentissage-kana",
        titre: "Application d'apprentissage des kana",
        categorie: "pro",
        secteur: "dev",
        technologies: ["React + Vite", "TypeScript", "Vercel"],
        description: "Application web front-end développée à entièrement en React et servant à apprendre les kana japonais. Un attention particulière a été apportée à l'UX design.",
        lien: null,
        images: [
            { src: "images/screenshots_projets/kanaimg1.png", alt: "page d'accueil" },
            { src: "images/screenshots_projets/kanaimg2.png", alt: "écran liste des kana" },
            { src: "images/screenshots_projets/kanaimg3.png", alt: "écran quiz" }
        ]
    },
    {
        id: "welcomeback",
        titre: "WelcomeBack, gestion des visiteurs",
        categorie: "pro",
        secteur: "dev",
        technologies: ["React (React Router)", "Flask (SQLAlchemy)", "TailwindCSS"],
        description: "Application web full-stack développée en trinôme avec des camarades d'études. L'application doit tourner en local à l'intérieur d'une école pour faciliter l'accueil et la gestion des visiteurs des joournées portes ouvertes",
        lien: null,
        images: [
            { src: "images/screenshots_projets/welcomebackimg1.png", alt: "page d'accueil" },
            { src: "images/screenshots_projets/welcomebackimg2.png", alt: "écran liste des visiteurs" },
            { src: "images/screenshots_projets/welcomebackimg3.png", alt: "écran détails du visiteur" }
        ]
    },
    {
        id: "secret",
        titre: "[contenu à venir]",
        categorie: "pro",
        secteur: "dev",
        technologies: ["[masqué]"],
        description: "[masqué]",
        lien: null,
        images: [
            { src: "images/screenshots_projets/secretimg1.png", alt: "secret" },
            { src: "images/screenshots_projets/secretimg2.png", alt: "secret" },
            { src: "images/screenshots_projets/secretimg3.png", alt: "secret" }
        ]
    }
];