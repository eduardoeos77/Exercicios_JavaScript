function titleCase(str) {
  let characters = str.toLowerCase().split("");

  for (let i = 0; i < characters.length; i++) {
    if (characters[i-1] === undefined || characters[i-1] === " ")
      characters[i] = characters[i].toUpperCase();
  }
  return characters.join("");
}

titleCase("I'm a little tea pot");