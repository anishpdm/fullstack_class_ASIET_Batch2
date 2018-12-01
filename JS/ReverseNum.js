var num=5012;
console.log(Reverse(num));


function Reverse(num){
    var rev=0;
while(num>0)
{
    rem=num%10;
    rev=rev*10+rem;
    num=parseInt(num/10);
}
return rev;
}
