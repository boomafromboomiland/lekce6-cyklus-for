// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
/*let vypisat = [];

for (let i = 0; i <= 10; i += 1) {
  vypisat.push(i);
  console.log(vypisat);
}

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

let rozdiel = [];
for (let i = 0; i < 10; i += 1) {
  rozdiel.push(i);
  console.log(rozdiel);
}

// Třetí příklad - vypiš sestupně čísla od 10 do 0
let zostupne = [];

for (let i = 10; i >= 0; i = i - 1) {
  zostupne.push(i);
  console.log(zostupne);
}*/


// WHILE

// První příklad - vypiš vzestupně čísla od 0 do 10
let vypisat = [];
let i = 0;

while (i < 10) {
  i++;
  vypisat.push(i);
  console.log(vypisat);
}

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

let rozdiel = [];
let a = 0;

while (a < 10) {
  a++;
  rozdiel.push(a);
  console.log(rozdiel);
}

// Třetí příklad - vypiš sestupně čísla od 10 do 0
let zostupne = [];
let b = 11;

while (b >= 0) {
  b = b - 1;
  zostupne.push(b);
  console.log(zostupne);
}