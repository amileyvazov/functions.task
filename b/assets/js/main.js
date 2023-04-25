Names(prompt("Zehmet olmasa adinizi daxil edin"),prompt("Zehmet olmasa soyadinizi daxil edin"),prompt("Zehmrt olmasa atanizin adini daxil edin"))

function Names(name,surname,fathername){
     if(name === "" && surname === ""){
        alert(name)
     }else if(fathername === ""){
        alert(name + "" + surname)
     }else{
        alert(name+''+ surname + ''+fathername)
     }
}