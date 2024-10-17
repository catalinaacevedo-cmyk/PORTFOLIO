
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
      title_sm: "About me",
      sobreMi_01: "My name is Catalina Alejandra Acevedo Pacheco. I am a Chilean filmmaker with a degree in Film and a specialization in executive production and image and sound post-production from the Film School of the University of Valparaíso.",
      sobreMi_02: "Upon graduating from university, I decided to specialize in Color Grading. My work focuses on the manipulation and adjustment of colors in audiovisual material, ensuring that the appropriate limits of color and tone are respected.",
      sobreMi_03: "Color grading is important for audiovisual preservation.",
      sobreMi_04: "Apart from my specialization in Color Correction influenced by cinematic techniques, I have an extreme passion for everything creative, ambition, and a great desire to learn constantly. Following this line of continuous learning, in February 2022, I completed a master's in VFX with Houdini and Nuke for film and advertising at Animum Creativity Advanced School.",
      sobreMi_05: "I worked for a time at a post-production company called Panolab, where I worked as a Junior Compositor.",
      sobreMi_06: "After finishing my job there, I applied for a Full Stack Python Application Development Scholarship at Talento Digital. I am currently taking the course and feel motivated about my future.",
      sobreMi_07: "Not everything in my life is work; in my free time, I enjoy learning languages because I would like to be a polyglot one day. That’s why I added a translation option to my portfolio. I also love painting in oil and enjoy video games. Currently, I’m playing Assassin's Creed Odyssey, and yes, on NIGHTMARE mode.",
      quote: "When you're curious, you find lots of interesting things to do.",
      contact: "Contact",
      follow: "Follow me on my social media.",
      countdownTitle: "End of the Bootcamp in",  
      signup: "Sign Up",
  },
  es: { 
      title_sm: "Sobre mí",
      sobreMi_01:"Mi nombre es Catalina Alejandra Acevedo Pacheco, Soy una cineasta chilena con el grado de Licenciada en Cine y Especialidad en producción ejecutiva y Postproducción de imagen y sonido de la Escuela de Cine de la Universidad de Valparaíso.",
      sobreMi_02: "Al salir de la Universidad decidí especializarme en Correción de color. mi trabajo se centra en la manipulación y ajuste de los colores en el material audiovisual garantizando que se respeten los límites adecuados de color y tonalidad.",
      sobreMi_03: "La correción de color es importante para la preservación audiovisual.",
      sobreMi_04: "Aparte de mi especialización en Corrección de color influenciada por técnicas cinematográficas, tengo una pasión extrema por todo lo creativo, ambición y un gran afán por aprender constantemente. siguiendo está linea de aprendizaje constante en febrero 2022 finalice el máster en VFX con Houdini y Nuke para cine y publicidad en animum creativity advanced school.",
      sobreMi_05: "Trabaje por un tiempo en una productora de Post producción llamada Panolab, ahí trabaje como compositora Junior.",
      sobreMi_06: "Al terminar mi trabajo ahí postule para una Beca de Desarollo de aplicaciones Full Stack Python en Talento Digital. Actualmente estoy cursando el curso y me siento motivada con mi futuro.",
      sobreMi_07: "No todo en mi vida es trabajo en mi tiempo libre disfruto de aprender Idiomas ya que me gustaría algún día ser poliglota, es por eso que a mi portfolio le agregé la opción de traducción. Tambien me encanta pintar al oléo y disfruto de los juegos de videos, actualmente estoy jugando Assassin's Creed Odyssey y sí en modo NIGHTMARE ",
      quote: "Cuando tienes curiosidad, encuentras muchas cosas interesantes que hacer",
      contact: "Contacto",
      follow: "Sígueme en mis redes sociales:",
      countdownTitle: "Término del Bootcamp en",
      signup: "Registrarse",
  },
  fr: {
      title_sm: "sur moi",
      sobreMi_01: "Je m'appelle Catalina Alejandra Acevedo Pacheco. Je suis une cinéaste chilienne titulaire d'un diplôme en cinéma et spécialisée en production exécutive et en postproduction d'image et de son à l'École de cinéma de l'Université de Valparaíso.",
      sobreMi_02: "À la sortie de l'université, j'ai décidé de me spécialiser dans l'Étalonnage. Mon travail se concentre sur la manipulation et l'ajustement des couleurs dans le matériel audiovisuel, garantissant que les limites appropriées de couleur et de tonalité soient respectées.",
      sobreMi_03: "L'étalonnage est important pour la préservation audiovisuelle.",
      sobreMi_04: "En plus de ma spécialisation en correction des couleurs influencée par des techniques cinématographiques, j'ai une passion extrême pour tout ce qui est créatif, de l'ambition et un grand désir d'apprendre constamment. Suivant cette voie d'apprentissage continu, en février 2022, j'ai terminé un master en VFX avec Houdini et Nuke pour le cinéma et la publicité à l'Animum Creativity Advanced School.",
      sobreMi_05: "J'ai travaillé pendant un certain temps dans une société de post-production appelée Panolab, où j'ai travaillé comme compositrice junior.",
      sobreMi_06: "Après avoir terminé mon travail là-bas, j'ai postulé pour une bourse de développement d'applications Full Stack Python chez Talento Digital. Je suis actuellement le cours et je me sens motivée pour mon avenir.",
      sobreMi_07: "Tout n'est pas travail dans ma vie ; pendant mon temps libre, j'aime apprendre des langues car j'aimerais un jour être polyglotte. C'est pourquoi j'ai ajouté une option de traduction à mon portfolio. J'adore aussi peindre à l'huile et j'apprécie les jeux vidéo. Actuellement, je joue à Assassin's Creed Odyssey, et oui, en mode NIGHTMARE.",
      contact: "Contact",
      follow: "Suivez-moi sur mes réseaux sociaux.",
      countdownTitle: "Fin du Bootcamp en",
      signup: "S'inscrire",
  },
  dk: {
      title_sm: "om mig",
      sobreMi_01: "Mit navn er Catalina Alejandra Acevedo Pacheco. Jeg er en chilensk filmskaber med en grad i film og specialisering i eksekutiv produktion og billede- og lydpostproduktion fra Filmskolen ved Universitetet i Valparaíso.",
      sobreMi_02: "Da jeg dimitterede fra universitetet, besluttede jeg mig for at specialisere mig i Farvekorrektion. Mit arbejde fokuserer på manipulation og justering af farver i audiovisuelle materialer, hvilket sikrer, at de passende grænser for farve og tone overholdes.",
      sobreMi_03: "Farvekorrektion er vigtig for den audiovisuelle bevarelse.",
      sobreMi_04: "Udover min specialisering i farvekorrektion, der er påvirket af filmteknikker, har jeg en ekstrem passion for alt kreativt, ambition og et stort ønske om konstant at lære. I denne kontinuerlige læringsretning afsluttede jeg i februar 2022 en kandidatuddannelse i VFX med Houdini og Nuke til film og reklame ved Animum Creativity Advanced School.",
      sobreMi_05: "Jeg arbejdede i et stykke tid hos et postproduktionsfirma kaldet Panolab, hvor jeg arbejdede som juniorkompositor.",
      sobreMi_06: "Efter at have afsluttet mit arbejde der, ansøgte jeg om et stipendium til udvikling af Full Stack Python-applikationer hos Talento Digital. Jeg tager i øjeblikket kurset og føler mig motiveret for min fremtid.",
      sobreMi_07: "Ikke alt i mit liv er arbejde; i min fritid nyder jeg at lære sprog, fordi jeg gerne vil være polyglot en dag. Derfor har jeg tilføjet en oversætningsmulighed til min portefølje. Jeg elsker også at male med olie og nyder videospil. Lige nu spiller jeg Assassin's Creed Odyssey, og ja, i NIGHTMARE-tilstand.",
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
    
  const title_smElement = document.getElementById('title_sm');
  const sobreMi_01Element = document.getElementById('sobreMi_01');
  const sobreMi_02Element = document.getElementById('sobreMi_02');
  const sobreMi_03Element = document.getElementById('sobreMi_03');
  const sobreMi_04Element = document.getElementById('sobreMi_04');
  const sobreMi_05Element = document.getElementById('sobreMi_05');
  const sobreMi_06Element = document.getElementById('sobreMi_06');
  const sobreMi_07Element = document.getElementById('sobreMi_07');
  const quoteElement = document.getElementById('quote');
  const contactElement = document.getElementById('contact');
  const followElement = document.getElementById('follow');
  const signupElement = document.getElementById('signup');
  const countdownTitleElement = document.getElementById('countdownTitle');
  
  
  title_smElement.textContent = translations[language].title_sm;
  sobreMi_01Element.textContent = translations[language].sobreMi_01;
  sobreMi_02Element.textContent = translations[language].sobreMi_02;
  sobreMi_03Element.textContent = translations[language].sobreMi_03;
  sobreMi_04Element.textContent = translations[language].sobreMi_04;
  sobreMi_05Element.textContent = translations[language].sobreMi_05;
  sobreMi_06Element.textContent = translations[language].sobreMi_06;
  sobreMi_07Element.textContent = translations[language].sobreMi_07;
  quoteElement.textContent = translations[language].quote;
  contactElement.textContent = translations[language].contact;
  followElement.textContent = translations[language].follow;
  signupElement.textContent = translations[language].signup;
  countdownTitleElement.textContent = translations[language].countdownTitle;
 
  console.log("Language changed to: " + language);
  
}

