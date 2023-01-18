function convertHTML(str) {

  let characters = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  let strArr = str
  .split("")
  .map(letter => characters[letter] || letter)
  .join("");

  return strArr; 
}

convertHTML("Dolce & Gabbana");