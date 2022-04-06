const listHtml = document.getElementById('list_100'); //dichiaro una costante che mi prenda il mio ul 


function grid() {
    const difficulty = document.getElementById("level").value;
    console.log(difficulty);
    if (difficulty === 'easy') {
        const list = document.getElementById(`list_100`).innerHTML = "";

        for (let i = 1; i <= 100; i++) {
            const listItem = `<li class="col-1">${i}</li>`;
            listHtml.innerHTML = listHtml.innerHTML + listItem;
        };
    } else if (difficulty === 'medium') {
        const list = document.getElementById(`list_100`).innerHTML = "";
        for (let i = 1; i <= 81; i++) {


            const listItem = `<li class="col-1">${i}</li>`;

            listHtml.innerHTML = listHtml.innerHTML + listItem;

        };
    } else if (difficulty === 'hard') {
        const list = document.getElementById(`list_100`).innerHTML = "";
        for (let i = 1; i <= 49; i++) {
            const listItem = `<li class="col-1" onclick="fun()">${i}</li>`;

            listHtml.innerHTML = listHtml.innerHTML + listItem;
        };
    } else if (difficulty === `default`) {
        const list = document.getElementById(`list_100`).innerHTML = "";
    }
}

function fun() {
    var a = document.getElementsByClassName(`col-1`)
    a.className = "bgHeader";
}