function totalDigitRekursif(angka) {
    var strAngka = String(angka)
    if(strAngka.length <= 1){
        return Number(strAngka[0])
    }
    let num = Number(strAngka[0])
    strAngka = strAngka.slice(1)
    return num + totalDigitRekursif(Number(strAngka))
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5