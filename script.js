document.addEventListener('DOMContentLoaded', () => {
    const typingEffect = document.querySelector('.left h1 span');
    const words = ['Web Developer', 'UI/UX Designer', 'Coder'];
    let wordIndex = 0;
    let charIndex = 0;
    let typing = true;

    const typeWord = () => {
        if (typing) {
            if (charIndex < words[wordIndex].length) {
                typingEffect.textContent += words[wordIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWord, 150);
            } else {
                typing = false;
                setTimeout(typeWord, 1500); // Pause before deleting
            }
        } else {
            if (charIndex > 0) {
                typingEffect.textContent = words[wordIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeWord, 100);
            } else {
                typing = true;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeWord, 500); // Pause before typing new word
            }
        }
    };

    typeWord();

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
