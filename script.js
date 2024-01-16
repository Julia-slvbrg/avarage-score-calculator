const form = document.getElementById('form');
const imgAproved = '<img src="./public/images/aprovado.png" alt="Emoji festejando" />';
const imgFlunked = '<img src="./public/images/reprovado.png" alt="Emoji decepcionado" />';
const activities = [];
const scores = [];
const aprovedSpan = '<span class = "result aproved">Aprovado</span>';
const flunkedSpan = '<span class = "result flunked">Reprovado</span>';
const minScore = parseFloat(prompt('Digite a nota mínima:'));

let rows = '';

const addRow = () => {
    const inputActivity = document.getElementById("activity-name");
    const inputScore = document.getElementById("score");

    if(activities.includes(inputActivity.value)) return alert(`A atividade ${inputActivity.value} já foi inserida.`)

    activities.push(inputActivity.value);
    scores.push(parseFloat(inputScore.value));

    let row = '<tr>';
    row += `<td>${inputActivity.value}</td>`;
    row += `<td>${inputScore.value}</td>`;
    row += `<td>${inputScore.value >= 7 ? imgAproved : imgFlunked}</td>`;
    row += `</tr>`;

    rows += row;
    
    inputActivity.value = '';
    inputScore.value = '';
};

function updateTable(){
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = rows;
};

const getaverageScore = () => {
    let scoreSum = 0;

    for (let i = 0; i < scores.length; i++){
        scoreSum += scores[i];
    };

    return scoreSum / (scores.length);
};

const updateFinalAverage = () => {
    const finalAverage = getaverageScore();
    
    document.getElementById('average-score-value').innerHTML = finalAverage.toFixed(2);
    document.getElementById('average-score-result').innerHTML = finalAverage >= minScore ? aprovedSpan : flunkedSpan;
};

form.addEventListener('submit', function(e){
    e.preventDefault();

    addRow();
    updateTable();
    updateFinalAverage();
})