export function readFile(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader;
        fileReader.onload = e => resolve(fileReader.result);
        fileReader.onerror = reject;
        fileReader.readAsText(file);
    });
}