const listHtml = document.getElementById('level'); //dichiaro una costante che mi prenda il mio ul 




if (condition) {

}

function grid_100() {
    for (let i = 1; i <= 100; i++) {

        const listItem = `<li>elemento lista n° ${i}</li>`;

        listHtml.innerHTML = listHtml.innerHTML + listItem;

    };
}
grid_100(); //creo funzione che mi crea una tabella di 100 elementi

function grid_89() {
    for (let i = 1; i <= 89; i++) {

        const listItem = `<li>elemento lista n° ${i}</li>`;

        listHtml.innerHTML = listHtml.innerHTML + listItem;

    };
}
grid_89(); //creo funzione che mi crea una tabella di 89 elementi

function grid_49() {
    for (let i = 1; i <= 49; i++) {

        const listItem = `<li>elemento lista n° ${i}</li>`;

        listHtml.innerHTML = listHtml.innerHTML + listItem;

    };
}
grid_49(); //creo funzione che mi crea una tabella di 49 elementi