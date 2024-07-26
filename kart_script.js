document.addEventListener('DOMContentLoaded', () => {
    const submitKartCodeButton = document.getElementById('submit-kart-code-button');
    const kartCodeInput = document.getElementById('kart-code-input');
    const resultDiv = document.getElementById('result');
    const characterLogo = document.getElementById('character-logo');
    const characterName = document.getElementById('character-name');
    const kartLogo = document.getElementById('kart-logo');
    const kartName = document.getElementById('kart-name');

    const characters = {
        'Mario': 'Mario',
        'Luigi': 'Luigi',
        'Peach': 'Peach',
        'Daisy': 'Daisy',
        'Rosalina': 'Rosalina',
        'Yoshi': 'Yoshi',
        'Toad': 'Toad',
        'Koopa Troopa': 'Koopa Troopa',
        'Baby Mario': 'Baby Mario',
        'Baby Luigi': 'Baby Luigi',
        'Baby Peach': 'Baby Peach',
        'Baby Daisy': 'Baby Daisy',
        'Baby Rosalina': 'Baby Rosalina',
        'Wario': 'Wario',
        'Waluigi': 'Waluigi',
        'Bowser': 'Bowser',
        'Donkey Kong': 'Donkey Kong'
    };

    const karts = {
        'Standard Kart': 'Standard Kart',
        'Pipe Frame': 'Pipe Frame',
        'Mach 8': 'Mach 8',
        'Steel Driver': 'Steel Driver',
        'Gold Standard Kart': 'Gold Standard Kart',
        'Koopa Clown Kart': 'Koopa Clown Kart',
        'Standard Bike': 'Standard Bike',
        'The Duke': 'The Duke',
        'City Tripper': 'City Tripper'
    };

    submitKartCodeButton.addEventListener('click', () => {
        const kartCode = kartCodeInput.value.split('-');
        if (kartCode.length !== 3) {
            alert('Invalid format. Please use the format: name-character-kart (e.g., leni-Mario-Gold Standard Kart)');
            return;
        }
        
        const name = kartCode[0];
        const characterNameKey = kartCode[1];
        const kartNameKey = kartCode[2];

        if (characters[characterNameKey] && karts[kartNameKey]) {
            characterLogo.src = `KartSelect/Characters/${characterNameKey}.png`;
            characterName.textContent = characters[characterNameKey];
            kartLogo.src = `KartSelect/Karts/${kartNameKey}.png`;
            kartName.textContent = karts[kartNameKey];
            resultDiv.classList.remove('hidden');
        } else {
            alert('Invalid Kart Code. Please try again.');
        }
    });
});
