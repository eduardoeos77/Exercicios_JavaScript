function translatePigLatin(str) {

  let consoante = /^[^aeiou]+/;
  let sub = str.match(consoante);

  if (sub !== null)  
    return str.
    replace(consoante, '')
    .concat(sub)
    .concat('ay');
    
    else
      return str.concat("way");
  
}

translatePigLatin("consonant");
translatePigLatin("eight");
translatePigLatin("schwartz");
translatePigLatin("rhythm");
translatePigLatin("algorithm");