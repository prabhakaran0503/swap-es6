let n1=prompt("enter the value");
let n2=prompt("enter the value");
let fun=(a,b)=>{
    document.write(`Befour swapping:n1=${a},n2=${b}<br>`)
    var c=a
     a=b
     b=c
    document.write(`After swapping:n1=${a},n2=${b}`)
}
fun(n1,n2);