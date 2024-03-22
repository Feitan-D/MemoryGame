document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const cardArray = [
        { name: '1', img: 'img1.png' },
        { name: '2', img: 'img2.png' },
        // Adicione pares de cartas aqui
        { name: '1', img: 'img1.png' },
        { name: '2', img: 'img2.png' }
        // Repita para cada par de cartas
    ];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        }
    }

    let cardsChosen = [];
    let cardsChosenIds = [];

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);
        this.classList.add('flip');
        this.innerHTML = cardArray[cardId].name; // Temporariamente mostrando o nome
        // Substituir por imagens ou ícones conforme necessário
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('.card');
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];

        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            alert('Você encontrou um par!');
            cards[optionOneId].style.visibility = 'hidden';
            cards[optionTwoId].style.visibility = 'hidden';
        } else {
            cards[optionOneId].classList.remove('flip');
            cards[optionTwoId].classList.remove('flip');
            cards[optionOneId].innerHTML = '';
            cards[optionTwoId].innerHTML = '';
        }
        cardsChosen = [];
        cardsChosenIds = [];
    }

    createBoard();
});