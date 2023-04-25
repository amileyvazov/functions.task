calc(prompt("Eded daxil edin"),prompt("Eded daxil edin"),prompt("isaret daxil edin"))

function calc(a,b,c){
    switch (c) {
        case "+":
            alert(a+b)
            break;
        case "-":
         alert(a-b)
         break
        case "*":
            alert(a*b)
            break
        case "/":
            alert(a/b)
            break
        default:
            alert("TEREFLERI DUZGUN DAXIL EDIN")
            break;
    }
}