
function add()
{
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;

    var x=parseInt(a)+parseInt(b);
    console.log(x);
    document.getElementById("result").innerHTML="<b>"+x+"</b>";
}
// console.log(sayhello());
// console.log(addition(30,40));