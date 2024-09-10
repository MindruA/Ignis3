function toggleMenu() {
    const menu = document.getElementById("side-menu");
    if (menu.style.width === "37vh") {
        menu.style.width = "0"; // Închide meniul
    } else {
        menu.style.width = "37vh"; // Deschide meniul
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const motoText = document.querySelector('.moto h1'); // Selectăm elementul <h1>

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adaugă clasa 'visible' când este vizibil
            }
        });
    }, {
        threshold: 0.1 // Animația se declanșează când 30% din element este vizibil
    });

    observer.observe(motoText); // Monitorizăm elementul <h1>
});


document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null, // Obiectul de observare (viewport-ul)
        rootMargin: '0px',
        threshold: 0.1 // Când 10% din element este vizibil
    };

    // Crearea unui observator de intersecție
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adăugăm clasa `visible` pentru a începe animația
                entry.target.classList.add('visible');
                // Optional: Opriți observarea elementului după ce devine vizibil
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Se adaugă observatorul pentru fiecare element "brix"
    document.querySelectorAll('.brix').forEach(brix => {
        observer.observe(brix);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.poza img'); // Selectează elementul imagine
    const maxBlur = 10; // Valoarea maximă a blur-ului în pixeli

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY; // Poziția de scroll de pe verticală
        const maxScroll = 800; // Valoarea la care blur-ul devine maxim, ajustează după cum dorești
        const blurValue = Math.min(maxBlur, (scrollPosition / maxScroll) * maxBlur);
        img.style.filter = `blur(${blurValue}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const brixElements = document.querySelectorAll('.brix');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.01 });

    brixElements.forEach(brix => {
        observer.observe(brix);
    });
});


