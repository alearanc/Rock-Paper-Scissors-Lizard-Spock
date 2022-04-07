let text = [`YOU WIN!`, `YOU LOST!`, `IT'S A TIE!`];
let options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

let pSelection, 
    mSelection, 
    result, 
    cartel
    overLay = document.getElementById('overlay'),
    popUp = document.getElementById('popup')
    btnClosePopUp = document.getElementById('submit-btn');

let round = [
    [0, 'p', 'm', 'm', 'p'],
    ['m', 0, 'p', 'p', 'm'],
    ['p', 'm', 0, 'm', 'p'],
    ['p', 'm', 'p', 0, 'm'],
    ['m', 'p', 'm', 'p', 0]
];

let descMoves = [
    ['', `Paper covers Rock`, `Rock crushes Scissors`, `Rock crushes Lizard`, `Spock vaporizes Rock`],
    [`Paper covers Rock`, '', `Scissors cuts Paper`, `Lizard eats Paper`, `Paper disproves Spock`],
    [`Rock crushes Scissors`, `Scissors cuts Paper`, '', `Scissors decapites Lizard`, `Spock smashes Scissors`],
    [`Rock crushes Lizard`, `Lizard eats Paper`, `Scissors decapites Lizard`, '', `Lizard poisons Spock`],
    [`Spock vaporizes Rock`, `Paper disproves Spock`, `Spock smashes Scissors`, `Lizard poisons Spock`, '']
];

//utilizo la constante main para referirme al contenedor de los botones
//esto es con el fin de no hacer un addEventListener para cada botón

const main = document.getElementById('main');

main.addEventListener("click", (e) => {
    mSelection = Math.floor(Math.random() * options.length);   
    pSelection = e.target.id;
    result = round[mSelection][pSelection];
    logic();
    overLay.classList.add('active');
    popUp.classList.add('active');
});

btnClosePopUp.addEventListener('click', () => {
    overlay.classList.remove('active');
    popUp.classList.remove('active');
});

function logic() {
    switch(result) {
        case 'p':
            let aviso1 = document.getElementById('h3-text');
            aviso1.style.color='green';
            aviso1.innerHTML = `${text[0]}`;
            document.getElementById('h4-player').innerHTML = `Player: ${options[pSelection]}`;
            document.getElementById('h4-opponent').innerHTML = `Opponent: ${options[mSelection]}`;
            document.getElementById('h4-desc').innerHTML = `${descMoves[mSelection][pSelection]}`
            break;
        case 'm':
            let aviso2 = document.getElementById('h3-text');
            aviso2.style.color='red';
            aviso2.innerHTML = `${text[1]}`;
            document.getElementById('h4-player').innerHTML = `Player: ${options[pSelection]}`;
            document.getElementById('h4-opponent').innerHTML = `Opponent: ${options[mSelection]}`;
            document.getElementById('h4-desc').innerHTML = `${descMoves[mSelection][pSelection]}`
            break;
        default:
            let aviso3 = document.getElementById('h3-text');
            aviso3.style.color = 'grey';
            aviso3.innerHTML = `${text[2]}`;
            document.getElementById('h4-player').innerHTML = `Player: ${options[pSelection]}`;
            document.getElementById('h4-opponent').innerHTML = `Opponent: ${options[mSelection]}`;
            document.getElementById('h4-desc').innerHTML = `${descMoves[mSelection][pSelection]}`
            break;
    }
};