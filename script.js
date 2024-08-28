const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('name');
    const age = data.get('age');

    alert(`Громодянин ${name}, якому ${age} років, підозрюється у шахрайстві в інтернеті`);
});