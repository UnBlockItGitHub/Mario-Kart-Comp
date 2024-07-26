document.addEventListener('DOMContentLoaded', () => {
    const submitKartCodeButton = document.getElementById('submit-kart-code-button');
    const kartCodeInput = document.getElementById('kart-code-input');
    const kartCodeResult = document.getElementById('kart-code-result');
    const kartCodeOutput = document.getElementById('kart-code-output');
    const restartButton = document.getElementById('restart-button');

    const kartMap = {
        'SK': 'Standard Kart',
        'PF': 'Pipe Frame',
        'M8': 'Mach 8',
        'SD': 'Steel Driver',
        'GSK': 'Gold Standard Kart',
        'KCK': 'Koopa Clown Kart',
        'SB': 'Standard Bike',
        'TD': 'The Duke',
        'CT': 'City Tripper'
    };

    const characterMap = {
        'MA': 'Mario',
        'LU': 'Luigi',
        'PE': 'Peach',
        'DA': 'Daisy',
        'RO': 'Rosalina',
        'YO': 'Yoshi',
        'TO': 'Toad',
        'KT': 'Koopa Troopa',
        'BM': 'Baby Mario',
        'BL': 'Baby Luigi',
        'BP': 'Baby Peach',
        'BD': 'Baby Daisy',
        'BR': 'Baby Rosalina',
        'WA': 'Wario',
        'WL': 'Waluigi',
        'BO': 'Bowser',
        'DK': 'Donkey Kong'
    };

    submitKartCodeButton.addEventListener('click', () => {
        const kartCode = kartCodeInput.value.split('-');
        if (kartCode.length === 3) {
            const name = kartCode[0];
            const kart = kartMap[kartCode[1]];
            const character = characterMap[kartCode[2]];
            if (name && kart && character) {
                kartCodeOutput.innerText = `Name: ${name}\nKart: ${kart}\nCharacter: ${character}`;
                kartCodeInput.parentElement.classList.add('hidden');
                kartCodeResult.classList.remove('hidden');
            } else {
                alert('Invalid kart code. Please try again.');
            }
        } else {
            alert('Invalid kart code format. Please use the format: name-KART-CHAR');
        }
    });

    restartButton.addEventListener('click', () => {
        kartCodeResult.classList.add('hidden');
        kartCodeInput.parentElement.classList.remove('hidden');
        kartCodeInput.value = '';
    });
});
