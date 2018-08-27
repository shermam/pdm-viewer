import { readFile } from "./readFile.js"
import { renderJSON } from "./renderJSON.js"

const fileInput = document.querySelector("input[type=file]");
const divMain = document.querySelector("#main");

fileInput.addEventListener('change', async e => {
    const jsonText = await readFile(fileInput.files[0]);
    const json = JSON.parse(jsonText);
    renderJSON(json, divMain);
});