const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('name');
    const age = data.get('age');

    if (age < 10) {
        alert(`Учень ${name}, якому ${age} років, рекомендована група "Minecraft Education"`);
    } else {
        alert(`Учень ${name}, якому ${age} років, рекомендована група "YOUNG WEB DEV"`)
    }
});