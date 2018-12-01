function readValues()
{
    var Name= document.getElementById("name").value;
    var Email=document.getElementById("email").value;
    var Mob=document.getElementById("mob").value;
    var Username=document.getElementById("username").value;
    var Password=document.getElementById("pwd").value;
    var CnfPassword=document.getElementById("cnfpwd").value;

   if(CnfPassword==Password)
   {
    console.log(Name);
    console.log(Email);
    console.log(Mob);
    console.log(Username);
    console.log(Password);
    console.log(CnfPassword);
   }
   else
   {
       alert("Password or ConfirmPassword Doesnt Match")
   }
}