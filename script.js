document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    const photoInput = document.getElementById('photo');
    const captureButton = document.getElementById('capture');
    const enviarButton = document.getElementById('enviar');
    const prosseguirButton = document.getElementById('prosseguir');
    const nomeInput = document.getElementById('nome');
    const numeroInput = document.getElementById('numero');
    const cameraError = document.getElementById('camera-error');

    // Acessar a câmera do usuário
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("Erro ao acessar a câmera: ", err);
            cameraError.style.display = 'block'; // Mostra mensagem de erro
        });

    // Capturar a foto e desenhá-la no canvas
    captureButton.addEventListener('click', () => {
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const photoData = canvas.toDataURL('image/png');
        photoInput.value = photoData; // Define o valor do input com a foto em base64
    });

    // Validar campos e enviar o cadastro
    enviarButton.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o envio do formulário para testar a validação

        // Validar nome e número (exemplo simples, ajuste conforme necessário)
        if (nomeInput.value.trim() === '') {
            alert('Por favor, insira seu nome.');
            return;
        }
        if (numeroInput.value.trim() === '') {
            alert('Por favor, insira seu número.');
            return;
        }

        // Aqui você pode enviar o formulário ou realizar outras operações necessárias
        alert('Cadastro enviado com sucesso!');
        console.log('Nome:', nomeInput.value);
        console.log('Número:', numeroInput.value);
        console.log('Foto:', photoInput.value); // Aqui estaria a foto em base64

        // Redirecionar para a página de validação de cadastro
        window.location.href = 'validar.html';
    });

    // Redirecionar para a página de validação de cadastro ao clicar em Prosseguir
    prosseguirButton.addEventListener('click', () => {
        // Validar se a foto já foi capturada e os dados preenchidos
        if (photoInput.value.trim() === '') {
            alert('Por favor, capture uma foto antes de prosseguir.');
            return;
        }
        if (nomeInput.value.trim() === '') {
            alert('Por favor, insira seu nome antes de prosseguir.');
            return;
        }
        if (numeroInput.value.trim() === '') {
            alert('Por favor, insira seu número antes de prosseguir.');
            return;
        }

        // Redirecionar para a página de validação de cadastro
        window.location.href = 'validar.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');

    // Exibir a mensagem de boas-vindas após um pequeno intervalo
    setTimeout(() => {
        welcomeMessage.innerHTML = '<p>Bem-vindo ao Mundo Senai 2024. <br> <br> Além do Cadastro foi enviada uma mensagem em seu número, verifique!!</p>';
    }, 1000); // Tempo em milissegundos, ajuste conforme necessário
});