let options = [`rock`, `papper`, `scissors`, `lizard`, `Spock`];
// let mSelection = options[Math.floor(Math.random() * options.length)];
let pSelection;
let mSelection;

//utilizo la constante main para referirme al contenedor de los botones
//esto es con el fin de no hacer un addEventListener para cada botón

const main = document.getElementById('main');

main.addEventListener("click", (e) => {
    mSelection = options[Math.floor(Math.random() * options.length)];   
    pSelection = e.target.id;
    logical();

});

function logical() {
    switch (pSelection) {
        case 'btn-rk': {
            switch (mSelection) {
                case options[0]:
                    alert('Tie!');
                    break;
                case options[1]:
                    alert('You lost! Paper covers rock');
                    break;
                case options[2]:
                    alert('You win! Rock crushes scissors');
                    break;
                case options[3]:
                    alert('You win! Rock crushes lizard');
                    break;
                case options[4]:
                    alert('You lost! Spock vaporizes rock');
                    break;
                default: alert('sale default');
            }
        }
        break;

        case 'btn-pp': {
            switch (mSelection) {
                case options[0]:
                    alert('You win! Paper covers rock');
                    break;
                case options[1]:
                    alert('Tie!');
                    break;
                case options[2]:
                    alert('You lost! Scissors cuts paper');
                    break;
                case options[3]:
                    alert('You lost! Lizard eats paper');
                    break;
                case options[4]:
                    alert('You win! Paper disproves Spock');
                    break;
                default: alert('sale default');
            }
        }
        break;

        case 'btn-sc': {
            switch (mSelection) {
                case options[0]:
                    alert('You lost! Rock crushes scissors');
                    break;
                case options[1]:
                    alert('You win! Scissors cuts paper');
                    break;
                case options[2]:
                    alert('Tie!');
                    break;
                case options[3]:
                    alert('You win! Scissors decapites lizard');
                    break;
                case options[4]:
                    alert('You lost! Spock smashes scissors');
                    break;
                default: alert('sale default');
            }
        }
        break;

        case 'btn-lz': {
            switch (mSelection) {
                case options[0]:
                    alert('You lost! Rock crushes lizard');
                    break;
                case options[1]:
                    alert('You win! Lizard eats paper');
                    break;
                case options[2]:
                    alert('You lost! Scissors decapites lizard');
                    break;
                case options[3]:
                    alert('Tie!');
                    break;
                case options[4]:
                    alert('You win! Lizard poisons Spock');
                    break;
                default: alert('sale default');
            }
        }
        break;

        case 'btn-sp': {
            switch (mSelection) {
                case options[0]:
                    alert('You win! Spock vaporizes rock');
                    break;
                case options[1]:
                    alert('You lost! Paper disproves Spock');
                    break;
                case options[2]:
                    alert('You win! Spock smashes scissors');
                    break;
                case options[3]:
                    alert('You lost! Lizard poisons Spock');
                    break;
                case options[4]:
                    alert('Tie!');
                    break;
                default: alert('sale default');
            }
        }
        break;
    }
}
