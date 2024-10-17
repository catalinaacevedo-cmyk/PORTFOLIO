
  document.addEventListener("DOMContentLoaded", function() {
    var options = {
      strings: ["awesome.", "creative.", "useful."],
      typeSpeed: 50, // Velocidad de tipeo
      backSpeed: 50, // Velocidad de borrado
      backDelay: 1000, // Espera antes de borrar
      loop: true // Repetir la animación
    };

    var typed = new Typed("#containerTyped", options);
  });


  document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.querySelector('.countdown');
    const countdownDate = new Date(countdownElement.getAttribute('data-countdown')).getTime();

    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Cálculo del tiempo restante
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar el resultado en el elemento countdown
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

        // Si la cuenta atrás ha terminado, mostrar un mensaje
        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "¡Tiempo terminado!";
        }
    }, 1000);
});





const translations = {
  en: {
      titlehome: "Welcome to My Portfolio",
      sesion_01: "Session 01",
      cardText_01: "The first task we completed was to create a website dedicated to a famous character.",
      cardText_01_02: "Next, we created a resume and learned how to use text formatting in bold and italic.",
      sesion_02: "Session 02",
      cardText_02: "We learned how to create forms, in which we used input elements such as Input, Textarea, and Select to capture information.",
      cardText_02_01: "Forms use the submission method such as GET to retrieve data or POST to capture information.",
      sesion_03: "Session 03",
      cardText_03: "We learned CSS and created colored tables. We also learned how to create styled buttons.",
      sesion_04: "Session 04",
      cardText_04: "We learned about design responsibility with a mobile-first approach.",
      cardText_04_01: "Google favors sites that are optimized for mobile, which can improve rankings in search engines.",
      cardText_04_02: "This ensures functionality, regardless of the device.",
      sesion_05: "Session 05",
      cardText_05: "We learned about Bootstrap and created a table. We built a website for an airline called SkyP.",
      cardText_05_01:  "We learned to use the NAVBAR and CARDS from Bootstrap.",
      sesion_06: "Session 06",
      cardText_06: "We created a form using Bootstrap, which included a component called jumbotron.",
      cardText_06_01: "We designed a page with a flight search engine for an airline similar to LAN.",
      sesion_07: "Session 07",
      cardText_07: "We learned JavaScript and did an exercise to compare numbers using alerts.",
      cardText_07_01: "We also created a menu using a Prompt and an Alert for a mobile phone company.",
      sesion_08: "Session 08",
      cardText_08: "We learned about control flow in JavaScript and created a menu that allowed us to exit and choose different options.",
      cardText_08_01: "We created a menu similar to that of an online bank.",
      sesion_09: "Session 09",
      cardText_09: "We manipulated the DOM to make elements appear and disappear, or to enlarge them using JavaScript.",
      cardText_09_01: "We created a to-do list where we could add new tasks and remove them.",
      sesion_10: "Session 10",
      cardText_10: "We repeated the exercise from session 09, but this time the elements appeared and disappeared using jQuery.",
      cardText_10_01: "In this exercise, we took the page we had previously created for SkyP and updated it by adding the option to enlarge the description.",
      sesion_11: "Session 11",
      cardText_11: "We learned to use Git Bash. Git is a system that controls all the versions of our code, allowing us to navigate between the different versions that have existed, create branches where we can work without altering the current stable version, and when a new feature is finished, it allows us to merge it into the stable version without risks.",
      sesion_12: "Session 12",
      cardText_12: "We learned about GitHub, which is a cloud (remote) repository hosting provider managed by Git. It is the most widely used and allows hosting an unlimited number of both public and private repositories.",
      quote: "When you're curious, you find lots of interesting things to do.",
      contact: "Contact",
      follow: "Follow me on my social media.",
      countdownTitle: "End of the Bootcamp in",  
      signup: "Sign Up",
  },
  es: { 
      titlehome: "Bienvenido a Mi Portafolio",
      sesion_01: "Sesión 01",
      cardText_01: "La primera tarea que realizamos fue crear una página web dedicada a un personaje famoso.",
      cardText_01_02: "A continuación, elaboramos un currículum vitae y aprendimos a utilizar el formato de texto en negritas y cursiva.",
      sesion_02: "Sesión 02",
      cardText_02: "Aprendimos a crear formularios, en los cuales utlizamos elementos de entrada, como Input, Textarea, Select, para captar información.",
      cardText_02_01: "Los formularios utilizan el metodo de envío como GET para obtener datos o POST para captar información.",
      sesion_03: "Sesión 03",
      cardText_03: "Aprendimos CSS y realizamos tablas con colores.  También aprendimos a crear botones con estilos.",
      sesion_04: "Sesión 04",
      cardText_04: "Aprendimos sobre la responsabilidad de diseño con el enfoque mobile first.",
      cardText_04_01: "Google favorece los sitios que están optimizados para móviles, lo que puede mejorar el posicionamiento en los motores de búsqueda.",
      cardText_04_02: "Esto asegura la funcionalidad, independientemente del dispositivo.",
      sesion_05: "Sesión 05",
      cardText_05: "Aprendimos sobre Bootstrap y realizamos una tabla.  Creamos una página web para una aerolínea llamada SkyP.",
      cardText_05_01: "Aprendimos a usar las NAVBAR y CARDS de bootstrap",
      sesion_06: "Sesión 06",
      cardText_06: "Creamos un formulario utilizando Bootstrap, que incluía un componente llamado jumbotron.",
      cardText_06_01: "Diseñamos una página con un buscador de vuelo para una aerolínea similar a LAN",
      sesion_07: "Sesión 07",
      cardText_07: "Aprendimos JavaScript e hicimos un ejercicio para comparar números con alertas.",
      cardText_07_01: "También creamos un menú utilizando un Prompt y una Alert para una empresa de celulares.",
      sesion_08: "Sesión 08",
      cardText_08: "Aprendimos sobre control de flujo en JavaScript y realizamos un menú que nos permitía salir y elegir distintas opciones.",
      cardText_08_01: "Creamos un menú similar al de un banco en línea.",
      sesion_09: "Sesión 09",
      cardText_09: "Manipulamos el DOM para hacer que los elementos aparecieran y desaparecieran, o se agrandaran mediante JavaScript.",
      cardText_09_01: "Creamos una lista de tareas pendientes, donde podíamos agregar nuevas tareas y eliminarlas.",
      sesion_10: "Sesión 10",
      cardText_10: "Repetimos el ejercicio de la sesión 09, pero esta vez los elementos aparecieron y desaparecieron con jQuery.",
      cardText_10_01: "En este ejercicio, tomamos la página que habíamos realizado anteriormente de SkyP y la actualizamos, añadiendo la opción de agrandar la descripción.",
      sesion_11: "Sesión 11",
      cardText_11: "Aprendimos a utilizar Git Bash. Git es un sistema que controla todas las versiones que existan de nuestro código, permitiéndonos navegar   entre las diferentes versiones que han existido, crear ramas, que serán lugares donde podremos trabajar sin alterar la versión estable actual y que,  cuando se encuentre terminada una nueva funcionalidad, nos permite incorporarla a la versión estable sin riesgos",
      sesion_12: "Sesión 12",
      cardText_12:"Aprendimos sobre GitHub que es un proveedor de alojamiento de repositorios en la nube (remoto), gestionado por Git. Es el  más usado y permite albergar un número ilimitado de repositorios tanto públicos como privados.",
      quote: "Cuando tienes curiosidad, encuentras muchas cosas interesantes que hacer",
      contact: "Contacto",
      follow: "Sígueme en mis redes sociales:",
      countdownTitle: "Término del Bootcamp en",
      signup: "Registrarse",
  },
  fr: {
      titlehome: "Bienvenue dans Mon Portefeuille",
      sesion_01: "Session 01",
      cardText_01: "The first task we completed was to create a website dedicated to a famous character.",
      cardText_01_02: "Ensuite, nous avons élaboré un curriculum vitae et appris à utiliser le formatage du texte en gras et en italique.",
      sesion_02: "Session 02",
      cardText_02: "Nous avons appris à créer des formulaires, dans lesquels nous avons utilisé des éléments d'entrée tels que Input, Textarea et Select pour recueillir des informations.",      quote: "Lorsque vous êtes curieux, vous trouvez beaucoup de choses intéressantes à faire.",
      cardText_02_01: "Les formulaires utilisent la méthode d'envoi comme GET pour récupérer des données ou POST pour capturer des informations.",
      sesion_03: "Session 03",
      cardText_03: "Nous avons appris le CSS et créé des tableaux colorés. Nous avons également appris à créer des boutons stylisés.",
      sesion_04: "Session 04",
      cardText_04: "Nous avons appris la responsabilité du design avec une approche mobile-first.",
      cardText_04_01:  "Google favorise les sites optimisés pour les mobiles, ce qui peut améliorer le classement dans les moteurs de recherche.",
      cardText_04_02: "Cela garantit la fonctionnalité, quel que soit l'appareil.",
      sesion_05: "Session 05",
      cardText_05: "Nous avons appris à propos de Bootstrap et créé un tableau. Nous avons construit un site web pour une compagnie aérienne appelée SkyP.",
      cardText_05_01: "Nous avons appris à utiliser la NAVBAR et les CARDS de Bootstrap.",
      sesion_06: "Session 06",
      cardText_06: "Nous avons créé un formulaire en utilisant Bootstrap, qui comprenait un composant appelé jumbotron.",
      cardText_06_01: "Nous avons conçu une page avec un moteur de recherche de vols pour une compagnie aérienne similaire à LAN.",
      sesion_07: "Session 07",
      cardText_07:"Nous avons appris JavaScript et réalisé un exercice pour comparer des nombres avec des alertes.",
      cardText_07_01: "Nous avons également créé un menu en utilisant un Prompt et une Alert pour une entreprise de téléphones mobiles.",
      sesion_08: "Session 08",
      cardText_08: "Nous avons appris le contrôle de flux en JavaScript et réalisé un menu qui nous permettait de sortir et de choisir différentes options.",
      cardText_08_01: "Nous avons créé un menu similaire à celui d'une banque en ligne.",
      sesion_09: "Session 09",
      cardText_09: "Nous avons manipulé le DOM pour faire apparaître et disparaître des éléments, ou les agrandir en utilisant JavaScript.",
      cardText_09_01: "Nous avons créé une liste de tâches où nous pouvions ajouter de nouvelles tâches et les supprimer.",
      sesion_10: "Session 10",
      cardText_10:  "Nous avons répété l'exercice de la session 09, mais cette fois les éléments sont apparus et disparus en utilisant jQuery.",
      cardText_10_01: "Dans cet exercice, nous avons pris la page que nous avions créée précédemment pour SkyP et l'avons mise à jour en ajoutant l'option d'agrandir la description.",
      sesion_11: "Session 11",
      cardText_11:  "Nous avons appris à utiliser Git Bash. Git est un système qui contrôle toutes les versions de notre code, nous permettant de naviguer entre les différentes versions qui ont existé, de créer des branches où nous pouvons travailler sans altérer la version stable actuelle, et lorsqu'une nouvelle fonctionnalité est terminée, il nous permet de l'incorporer à la version stable sans risque.",
      sesion_12: "Session 12",
      cardText_12: "Nous avons appris à propos de GitHub, qui est un fournisseur d'hébergement de dépôts dans le cloud (à distance), géré par Git. C'est le plus utilisé et permet d'héberger un nombre illimité de dépôts, tant publics que privés.",
      contact: "Contact",
      follow: "Suivez-moi sur mes réseaux sociaux.",
      countdownTitle: "Fin du Bootcamp en",
      signup: "S'inscrire",
  },
  dk: {
      titlehome: "Velkommen til Min Portfolio",
      sesion_01: "Session 01",
      cardText_01: "Den første opgave, vi udførte, var at skabe en hjemmeside dedikeret til en berømt karakter.",
      cardText_01_02: "Herefter udarbejdede vi et CV og lærte at bruge tekstformatering i fed og kursiv.",
      sesion_02: "Session 02",
      cardText_02: "Vi lærte at oprette formularer, hvor vi brugte indtastningselementer som Input, Textarea og Select til at indsamle information.",
      cardText_02_01: "Formularer bruger indsendelsesmetoder som GET til at hente data eller POST til at indsamle information.",
      sesion_03: "Session 03",
      cardText_03: "Vi lærte CSS og lavede farverige tabeller. Vi lærte også at oprette stilfulde knapper.",
      sesion_04: "Session 04",
      cardText_04: "Vi lærte om designansvar med en mobile-first tilgang.",
      cardText_04_01: "Google favoriserer websteder, der er optimeret til mobil, hvilket kan forbedre placeringen i søgemaskiner.",
      cardText_04_02: "Dette sikrer funktionalitet, uanset enheden.",
      sesion_05: "Session 05",
      cardText_05: "Vi lærte om Bootstrap og lavede et bord. Vi oprettede en hjemmeside til et flyselskab kaldet SkyP.",
      cardText_05_01: "Vi lærte at bruge NAVBAR og CARDS fra Bootstrap.",
      sesion_06: "Session 06",
      cardText_06: "Vi oprettede en formular ved hjælp af Bootstrap, som indeholdt en komponent kaldet jumbotron.",
      cardText_06_01: "Vi designede en side med en flysøgemaskine til et flyselskab, der ligner LAN.",
      sesion_07: "Session 07",
      cardText_07:"Vi lærte JavaScript og lavede en øvelse til at sammenligne tal med alarmer.",
      cardText_07_01: "Vi oprettede også en menu ved hjælp af en Prompt og en Alert til et mobiltelefonfirma.",
      sesion_08: "Session 08",
      cardText_08: "Vi lærte om kontrolstrøm i JavaScript og lavede en menu, der gjorde det muligt for os at forlade og vælge forskellige muligheder.",
      cardText_08_01: "Vi lavede en menu, der ligner en online banks.",
      sesion_09: "Session 09",
      cardText_09: "Vi manipulerede DOM'en for at få elementer til at vises og forsvinde, eller for at forstørre dem ved hjælp af JavaScript.",
      cardText_09_01: "Vi lavede en to-do-liste, hvor vi kunne tilføje nye opgaver og fjerne dem.",
      sesion_10: "Session 10",
      cardText_10: "Vi gentog øvelsen fra session 09, men denne gang dukkede elementerne op og forsvandt ved hjælp af jQuery.",
      cardText_10_01: "I denne øvelse tog vi siden, vi tidligere havde lavet til SkyP, og opdaterede den ved at tilføje muligheden for at forstørre beskrivelsen.",
      sesion_11: "Session 11",
      cardText_11: "Vi lærte at bruge Git Bash. Git er et system, der kontrollerer alle versioner af vores kode, hvilket giver os mulighed for at navigere mellem de forskellige versioner, der har eksisteret, oprette grene, hvor vi kan arbejde uden at ændre den aktuelle stabile version, og når en ny funktion er færdig, giver det os mulighed for at integrere den i den stabile version uden risici.",
      sesion_12: "Session 12",
      cardText_12: "Vi lærte om GitHub, som er en cloud (fjerntliggende) hostingudbyder af repositories, der styres af Git. Det er det mest anvendte og tillader hosting af et ubegribelig antal både offentlige og private repositories.",
      quote: "Når du er nysgerrig, finder du mange interessante ting at lave.",
      contact: "Kontakt",
      follow: "Følg mig på mine sociale medier.",
      countdownTitle: "Afslutning af Bootcamp i",
      signup: "Tilmeld dig",
  }
 
};



    function toggleDropdown() {
        const dropdown = document.querySelector('.menulan');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    // Close dropdown if clicked outside
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            const dropdowns = document.getElementsByClassName('menulan');
            for (let i = 0; i < dropdowns.length; i++) {
                dropdowns[i].style.display = 'none';
            }
        }
    }




function changeLanguage(language) {
  const titlehomeElement = document.getElementById('titlehome');
  const sesion_01Element = document.getElementById('sesion_01');
  const cardText_01Element = document.getElementById('cardText_01');
  const cardText_01_02Element = document.getElementById('cardText_01_02');
  const sesion_02Element = document.getElementById('sesion_02');
  const cardText_02Element = document.getElementById('cardText_02');
  const cardText_02_01Element = document.getElementById('cardText_02_01');
  const sesion_03Element = document.getElementById('sesion_03');
  const cardText_03Element = document.getElementById('cardText_03');
  const sesion_04Element = document.getElementById('sesion_04');
  const cardText_04Element = document.getElementById('cardText_04');
  const cardText_04_01Element = document.getElementById('cardText_04_01');
  const cardText_04_02Element = document.getElementById('cardText_04_02');
  const sesion_05Element = document.getElementById('sesion_05');
  const cardText_05Element = document.getElementById('cardText_05');
  const cardText_05_01Element = document.getElementById('cardText_05_01');
  const sesion_06Element = document.getElementById('sesion_06');
  const cardText_06Element = document.getElementById('cardText_06');
  const cardText_06_01Element = document.getElementById('cardText_06_01');
  const sesion_07Element = document.getElementById('sesion_07');
  const cardText_07Element = document.getElementById('cardText_07');
  const cardText_07_01Element = document.getElementById('cardText_07_01');
  const sesion_08Element = document.getElementById('sesion_08');
  const cardText_08Element = document.getElementById('cardText_08');
  const cardText_08_01Element = document.getElementById('cardText_08_01');
  const sesion_09Element = document.getElementById('sesion_09');
  const cardText_09Element = document.getElementById('cardText_09');
  const cardText_09_01Element = document.getElementById('cardText_09_01');
  const sesion_10Element = document.getElementById('sesion_10');
  const cardText_10Element = document.getElementById('cardText_10');
  const cardText_10_01Element = document.getElementById('cardText_10_01');
  const sesion_11Element = document.getElementById('sesion_11');
  const cardText_11Element = document.getElementById('cardText_11');
  const sesion_12Element = document.getElementById('sesion_12');
  const cardText_12Element = document.getElementById('cardText_12');
  const quoteElement = document.getElementById('quote');
  const contactElement = document.getElementById('contact');
  const followElement = document.getElementById('follow');
  const signupElement = document.getElementById('signup');
  const countdownTitleElement = document.getElementById('countdownTitle');
  

  titlehomeElement.textContent = translations[language].titlehome;
  sesion_01Element.textContent = translations[language].sesion_01;
  cardText_01Element.textContent = translations[language].cardText_01;
  cardText_01_02Element.textContent = translations[language].cardText_01_02;
  sesion_02Element.textContent = translations[language].sesion_02;
  cardText_02Element.textContent = translations[language].cardText_02;
  cardText_02_01Element.textContent = translations[language].cardText_02_01;
  sesion_03Element.textContent = translations[language].sesion_03;
  cardText_03Element.textContent = translations[language].cardText_03;
  sesion_04Element.textContent = translations[language].sesion_04;
  cardText_04Element.textContent = translations[language].cardText_04; 
  cardText_04_01Element.textContent = translations[language].cardText_04_01; 
  cardText_04_02Element.textContent = translations[language].cardText_04_02;
  sesion_05Element.textContent = translations[language].sesion_05;
  cardText_05Element.textContent = translations[language].cardText_05; 
  cardText_05_01Element.textContent = translations[language].cardText_05_01;
  sesion_06Element.textContent = translations[language].sesion_06;
  cardText_06Element.textContent = translations[language].cardText_06;
  cardText_06_01Element.textContent = translations[language].cardText_06_01;
  sesion_07Element.textContent = translations[language].sesion_07;
  cardText_07Element.textContent = translations[language].cardText_07;
  cardText_07_01Element.textContent = translations[language].cardText_07_01;
  sesion_08Element.textContent = translations[language].sesion_08;
  cardText_08Element.textContent = translations[language].cardText_08;
  cardText_08_01Element.textContent = translations[language].cardText_08_01;
  sesion_09Element.textContent = translations[language].sesion_09;
  cardText_09Element.textContent = translations[language].cardText_09;
  cardText_09_01Element.textContent = translations[language].cardText_09_01; 
  sesion_10Element.textContent = translations[language].sesion_10;
  cardText_10Element.textContent = translations[language].cardText_10;
  cardText_10_01Element.textContent = translations[language].cardText_10_01;
  sesion_11Element.textContent = translations[language].sesion_11;
  cardText_11Element.textContent = translations[language].cardText_11;
  sesion_12Element.textContent = translations[language].sesion_12;
  cardText_12Element.textContent = translations[language].cardText_12;
  quoteElement.textContent = translations[language].quote;
  contactElement.textContent = translations[language].contact;
  followElement.textContent = translations[language].follow;
  signupElement.textContent = translations[language].signup;
  countdownTitleElement.textContent = translations[language].countdownTitle;
 

  console.log("Language changed to: " + language);
}

