function kalkulator(angka1, angka2, operator) {
  switch (operator) {
    case "+":
      return angka1 + angka2;
    case "-":
      return angka1 - angka2;
    case "*":
      return angka1 * angka2;
    case "/":
      if (angka2 !== 0) {
        return angka1 / angka2;
      } else {
        return "Tidak dapat membagi dengan nol.";
      }
    default:
      return "Operator tidak valid.";
  }
}

const angka1 = 10;
const angka2 = 5;
const operator = "+";
const hasil = kalkulator(angka1, angka2, operator);
console.log(`Hasil dari ${angka1} ${operator} ${angka2} adalah ${hasil}`);
