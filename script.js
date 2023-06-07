// Funkcja obliczająca NWD dwóch liczb
function nwd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Funkcja obliczająca NWW dwóch liczb
function nww(a, b) {
  return (a * b) / nwd(a, b);
}
function oblicz() {
  const liczba1Input = document.getElementById("liczba1");
  const liczba2Input = document.getElementById("liczba2");
  const wynikNWD = document.getElementById("wynikNWD");
  const wynikNWW = document.getElementById("wynikNWW");

  const liczba1 = parseInt(liczba1Input.value);
  const liczba2 = parseInt(liczba2Input.value);

  if (isNaN(liczba1) || isNaN(liczba2)) {
    wynikNWD.textContent = "Wprowadź poprawne liczby";
    wynikNWW.textContent = "";
  } else {
    const nwdResult = nwd(liczba1, liczba2);
    const nwwResult = nww(liczba1, liczba2);
    wynikNWD.textContent = `NWD(${liczba1}, ${liczba2}) = ${nwdResult}`;
    wynikNWW.textContent = `NWW(${liczba1}, ${liczba2}) = ${nwwResult}`;
  }
}
