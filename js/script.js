const form = document.querySelector('form');
const button = document.getElementById('button_enviar');

form.addEventListener('submit', function(event) {
    if (event.submitter === button) {
        event.preventDefault();
        alert('Dados guardados com sucesso!');
        form.reset();
    }
});
