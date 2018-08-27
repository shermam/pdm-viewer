export function renderJSON(obj, target) {
    target.innerHTML = recursiveTable(obj);
}

function recursiveTable(obj) {
    if (!obj) return '';

    return `
        <table>
            ${Object.keys(obj).map(key => `

            <tr>                
                <td>${key}</td>
                <td>${typeof obj[key] === 'object' ? recursiveTable(obj[key]) : obj[key]}</td>                
            </tr>

            `).join('')}
        </table>
    `;
}