function makeTable() {
    const table = [];

    for (let i = 0; i < 10; i++) {
        table[i] = [];

        for (let j = 0; j < 10; j++) {
            table[i][j] = i * 10 + j + 1;
        }
    }
    return table;
}
document.querySelector(".box-numbers").insertAdjacentHTML(
    "beforeend",
    `<table>${makeTable().map((n) => `<tr>${n.map((m) => `<td>${m}</td>`).join("")}</tr>`).join("")}</table>`);