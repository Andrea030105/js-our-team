/* Creo l'array di oggetti con le informazioni fornite. */

let team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    },
]

/* Stampo su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto. */

/* for (let i = 0; i < team.length; i++) {
    for (let key in team[i]) {
        console.log(team[i][key])
    }
} */

/* Stampo le stesse informazioni nel DOM sottoforma di stringhe.
 */

const card = document.getElementById("container-card");

for (let i = 0; i < team.length; i++) {
    card.innerHTML += `<div class="card" style="width: 18rem">
        <img src="./img/${team[i].foto}" class="card-img-top">
        <div class="card-body">
        <p class="card-text">
        ${team[i].nome}
        </p>
        </div>
        </div>`
}