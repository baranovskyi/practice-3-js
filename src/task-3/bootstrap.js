import filterTable from "./task-3";
import renderTable from "./render";
import albums from "./albums.json";

const table = document.getElementById("table-task-3"),
    tbody = table.querySelector("tbody"),
    filterButton = table.querySelector("button"),
    filterInputs = [...table.querySelectorAll("input")];

renderTable(tbody, albums, ["album", "performer", "genre", "year"]);

filterButton.addEventListener("click", () => {
    const filters = filterInputs.reduce((acc, input) => {
        if (input.value) {
            acc[input.dataset.field] = input.value;
        }
        return acc;
    }, {});

    filterTable(tbody, filters);
});
