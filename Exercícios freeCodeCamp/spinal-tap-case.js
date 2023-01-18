function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("AllThe-small Things");