function playGame() {
    const veces = parseInt(prompt("¿Cuántas veces deseas jugar?"), 10);
    if (isNaN(veces) || veces <= 0) {
        alert("Por favor, ingresa un número válido de rondas.");
        return;
    }

    for (let i = 0; i < veces; i++) {
        const usuario = prompt("Elige entre PIEDRA, PAPEL o TIJERA:").toUpperCase();
        const opciones = ['PIEDRA', 'PAPEL', 'TIJERA'];
        const selectPC = opciones[Math.floor(Math.random() * 3)];  
        let result = '';
        
        if (usuario === selectPC) {
            result = '¡Es un empate!';
        } else if (
            (usuario === 'PIEDRA' && selectPC === 'TIJERA') ||
            (usuario === 'PAPEL' && selectPC === 'PIEDRA') ||
            (usuario === 'TIJERA' && selectPC === 'PAPEL')
        ) {
            result = `Ganaste! ${usuario} vence a ${selectPC}`;
        } else {
            result = `Perdiste! ${selectPC} vence a ${usuario}`;
        }

        alert(result);
    }
}
