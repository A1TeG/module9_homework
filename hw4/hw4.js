const btnNode = document.querySelector('.btn-request');

btnNode.addEventListener('click', () => {
    const inputWidth = +document.querySelector('.input-width').value;
    const inputHeight = +document.querySelector('.input-height').value;

    let cards = document.querySelector('.j-result');
    cards.textContent = '';
    if (!(inputWidth >= 100 && inputWidth <= 300 && inputHeight >= 100 && inputHeight <= 300)) {
        cards.textContent = 'Одно из чисел вне диапазона от 100 до 300';
        return;
    }
    fetch(`https://picsum.photos/${inputWidth}/${inputHeight}`)
        .then((response) => {
            document.querySelector('.result').src = response.url;
        });
});