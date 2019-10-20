function changeVocals (str) {
    var word = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o' || str[i] == 'A' || str[i] == 'I' || str[i] == 'U' || str[i] == 'E' || str[i] == 'O'){
            var hurufBaru = String.fromCharCode(str[i].charCodeAt(0) + 1);
        }else{
            var hurufBaru = str[i];
        }
        word += hurufBaru;
    }
    return word;
  }
  
  function reverseWord (str) {
    let word = ''
    for(let i = str.length - 1; i >= 0; i--){
        word += str[i] 
    }return word;
  }
  
  function setLowerUpperCase (str) {
    let word = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            word += str[i].toLowerCase();
        }
        if(str[i] == str[i].toLowerCase()){
            word += str[i].toUpperCase();
        }
    }return word;
  }
  
  function removeSpaces (str) {
    let word = str.split(' ').join('')
    return word
  }
  
  function passwordGenerator (name) {
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    let beenremove = removeSpaces(name)
    let setcase = setLowerUpperCase(beenremove)
    let beenreverse = reverseWord(setcase)
    return changeVocals(beenreverse);
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'