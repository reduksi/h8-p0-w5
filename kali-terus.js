function kaliTerusRekursif(angka) {
    var strAngka = String(angka)
    if(strAngka.length > 1){
        let num = Number(strAngka[0])
        strAngka = strAngka.slice(1)
        var cek = num * kaliTerusRekursif(Number(strAngka))
        return kaliTerusRekursif(cek)
    }else{
        return Number(strAngka[0])
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6