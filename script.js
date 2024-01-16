const form = document.getElementById('form');
const imgAproved = '<img src="./public/images/aprovado.png" alt="Emoji festejando" />';
const imgFlunked = '<img src="./public/images/reprovado.png" alt="Emoji decepcionado" />';

let rows = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputActivity = document.getElementById("activity-name");
    const inputScore = document.getElementById("score");

    let row = '<tr>';
    row += `<tr>${inputActivity.value}</tr>`;
    row += `<tr>${inputScore.value}</tr>`;
    row += `<tr>${inputScore.value >= 7 ? imgAproved : imgFlunked}</tr>`;
    row += `</tr>`;

    rows = row;

    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = rows;

    inputActivity.value = '';
    inputScore.value = '';
})