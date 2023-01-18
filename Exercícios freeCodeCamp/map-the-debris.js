function orbitalPeriod(arr) {
  
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  let orbital = alt => Math.round(2 * Math.PI * Math.sqrt(Math.pow((alt + earthRadius), 3) / GM));

  return arr.map(obj => ({name: obj.name, orbitalPeriod: orbital(obj.avgAlt)}));

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);