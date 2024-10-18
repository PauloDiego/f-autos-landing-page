document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_0ddcgp8', 'template_og3kuhq', this)
        .then(function(response) {
            console.log('Sucesso no envio!', response.status, response.text);
            alert("Mensagem enviada com sucesso!");
        }, function(error) {
            console.error('Falha no envio...', error);
            alert("Ocorreu um erro ao enviar a mensagem. Favor tente novamente.");
        });
});