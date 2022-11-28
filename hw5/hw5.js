const resultNode = document.querySelector('.image');

function displayResult(apiData) {
  let img = '';

  apiData.forEach(item => {
    const imgBlock = `
                <div">
                    <img style="width: 100px; height: 100px;" src="${item.download_url}"/>
                </div>`;

    img = img + imgBlock;
  });

  resultNode.innerHTML = img;
}

const saveJson = localStorage.getItem("json");

document.addEventListener("DOMContentLoaded", () => {
  if (saveJson) {
    displayResult(JSON.parse(saveJson));
  }
});

const bt = document.querySelector('button');

bt.onclick = () => {

  const input1 = Number(document.querySelector('#input1').value);
  const input2 = Number(document.querySelector('#input2').value);

  if (input1 < 1 || input1 > 10 || isNaN(input1)) {
    resultNode.textContent = "Номер страницы вне диапазона от 1 до 10";
    setTimeout(() => {
      resultNode.textContent = "";
    }, 3000);
  } else if (input2 < 1 || input2 > 10 || isNaN(input2)) {
    resultNode.textContent = "Лимит вне диапазона от 1 до 10";
    setTimeout(() => {
      resultNode.textContent = "";
    }, 3000);
  } else {
    fetch(`https://picsum.photos/v2/list?page=${input1}&limit=${input2}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        displayResult(json);
        localStorage.setItem('json', JSON.stringify(json));
      })
      .catch(() => { console.log('error') });
  }
}