const cardContainer = document.querySelector('.card-container');


const cards = [
    {
        title: 'El señor de los anillos',
        description: 'El señor de los anillos es una épica saga de fantasía escrita por J.R.R. Tolkien. Ambientada en un mundo imaginario llamado la Tierra Media, la historia sigue las aventuras de un grupo de personajes que se unen para destruir un poderoso anillo y derrotar al señor oscuro Sauron. Con elementos como la magia, la amistad y el sacrificio, esta obra literaria ha cautivado a millones de lectores en todo el mundo.',
        image: './img/sr-de-los-anillos.jpg'
    },
    {
        title: 'Spiderman',
        description: 'Spiderman es un popular superhéroe de los cómics. Creado por Stan Lee y Steve Ditko, el personaje de Spiderman es conocido por su alter ego, Peter Parker, un estudiante de secundaria que adquiere habilidades especiales después de ser mordido por una araña radiactiva. Con su traje distintivo y sus habilidades de trepar paredes, lanzar telarañas y tener un "sentido arácnido", Spiderman lucha contra el crimen y protege la ciudad de Nueva York.',
        image: './img/spider.jpeg'
    },
    {
        title: 'Batman',
        description: 'Batman es un icónico superhéroe de DC Comics. Creado por Bob Kane y Bill Finger, Batman es el alter ego de Bruce Wayne, un multimillonario que se convierte en vigilante enmascarado para luchar contra el crimen en Ciudad Gótica. A diferencia de otros superhéroes, Batman no tiene superpoderes, pero confía en su intelecto brillante, su entrenamiento físico y una amplia variedad de gadgets y vehículos para combatir a los villanos y hacer justicia.',
        image: './img/batman.jpg'
    },
    {
        title: 'Avengers',
        description: ' Los Avengers son un equipo de superhéroes de Marvel Comics. Este grupo de personajes icónicos incluye a Iron Man, Capitán América, Thor, Hulk, Black Widow y muchos más. Los Avengers se unen para proteger al mundo de amenazas sobrehumanas y villanos poderosos. Con películas exitosas y una amplia base de fanáticos, los Avengers se han convertido en un fenómeno cultural, con emocionantes historias llenas de acción, drama y camaradería.',
        image: './img/avengers.jpg'
    },
    {
        title: 'Antman',
        description: ' Antman es un superhéroe de Marvel Comics. El personaje principal, Scott Lang, es un ladrón convertido en héroe que puede encoger su tamaño pero aumentar su fuerza gracias a un traje especial y a la tecnología de partículas subatómicas. Con un enfoque único en la capacidad de reducirse al tamaño de una hormiga, Antman combate el crimen y se involucra en aventuras épicas, brindando un giro refrescante al género de los superhéroes.',
        image: './img/antman.jpeg'
    },
    {
        title: 'Thor',
        description: 'Thor es un personaje de Marvel Comics basado en la mitología nórdica. Conocido como el Dios del Trueno, Thor es un poderoso guerrero y príncipe de Asgard. Posee una fuerza sobrehumana, maneja un martillo mágico llamado Mjolnir y puede controlar los elementos del trueno y el relámpago.',
        image: './img/thor.jpeg'
    },
    
]


const createCards = () => {  
    cards.map(card => {

        const cardElement = document.createElement('article');
        cardElement.classList.add('card','shadow', 'card-custom', 'm-3');
        cardElement.innerHTML += `
        <img class="card-img-top card-img" src="${card.image}" alt="${card.title}">
        <div class="card-body">
            <h5 class="card-title text-center">${card.title}</h5>
            <p class="card-text text-truncate">${card.description}</p>
            <a href="#" class="btn btn-primary col-12">Ver más</a>
        </div>
        `;
        cardContainer.appendChild(cardElement);
    });
}

createCards();