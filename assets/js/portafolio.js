
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
      title: "Welcome to My Portfolio",
      about: "About Me",
      quote: "When you're curious, you find lots of interesting things to do.",
      contact: "Contact",
      follow: "Follow me on my social media.",
      countdownTitle: "End of the Bootcamp in",  
      signup: "Sign Up",
  },
  es: {
      title: "Bienvenido a Mi Portafolio",
      about: "Sobre mí",
      quote: "Cuando tienes curiosidad, encuentras muchas cosas interesantes que hacer",
      contact: "Contacto",
      follow: "Sígueme en mis redes sociales:",
      countdownTitle: "Término del Bootcamp en",
      signup: "Registrarse",
  },
  fr: {
      title: "Bienvenue dans Mon Portefeuille",
      about: "À Propos de Moi",
      quote: "Lorsque vous êtes curieux, vous trouvez beaucoup de choses intéressantes à faire.",
      contact: "Contact",
      follow: "Suivez-moi sur mes réseaux sociaux.",
      countdownTitle: "Fin du Bootcamp en",
      signup: "S'inscrire",
  },
  dk: {
      title: "Velkommen til Min Portfolio",
      about: "Om Mig",
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
  const titleElement = document.getElementById('title');
  const aboutElement = document.getElementById('about');
  const quoteElement = document.getElementById('quote');
  const contactElement = document.getElementById('contact');
  const followElement = document.getElementById('follow');
  const signupElement = document.getElementById('signup');
  const countdownTitleElement = document.getElementById('countdown-title');
  

  titleElement.textContent = translations[language].title;
  aboutElement.textContent = translations[language].about;
  quoteElement.textContent = translations[language].quote;
  contactElement.textContent = translations[language].contact;
  followElement.textContent = translations[language].follow;
  signupElement.textContent = translations[language].signup;
  countdownTitleElement.textContent = translations[language].countdownTitle;
 
  
  console.log("Language changed to: " + language);
}
