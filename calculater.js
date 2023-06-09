let box1=document.getElementById("box1");
let sum=document.getElementById("sum");
let sub=document.getElementById("sub");
let mult=document.getElementById("mult");
let divv=document.getElementById("divi");
let C=document.getElementById("C");
let percent=document.getElementById("percent");
let dot=document.getElementById("dot");
let plusminus=document.getElementById("plusminus");
let nine=document.getElementById("nine");
let eight=document.getElementById("eight");
let seven=document.getElementById("seven");
let six=document.getElementById("six");
let five=document.getElementById("five");
let four=document.getElementById("four");
let three=document.getElementById("three");
let two=document.getElementById("two");
let one=document.getElementById("one");
let zero=document.getElementById("zero");
let equal=document.getElementById("equal");
let ch="";
let result="";
sum.addEventListener('click',function()
{   
    result=box1.value;
    box1.value="";
    ch='+';
});
sub.addEventListener('click',function()
{
    result=parseFloat(box1.value);
    box1.value="";
    ch="-";
});
mult.addEventListener('click',function()
{
    result=parseFloat(box1.value);
    box1.value="";
    ch="*";
});
divi.addEventListener('click',function()
{
    result=parseFloat(box1.value);
    box1.value="";
    ch="/";
});
C.addEventListener('click',function()
{
    box1.value="";
});
plusminus.addEventListener('click',function()
{
    result=parseFloat(box1.value);
    result=result*(-1);
    box1.value=result;
});
dot.addEventListener('click' ,function()
{       
    let dot=box1.value;
    dot=dot+".";
    console.log(dot);
    box1.value=dot;
});
percent.addEventListener('click',function()
{
    result=parseFloat(box1.value);
    box1.value="";
    ch="%";
    let p=parseFloat(box1.value);
    let p1=result;
    let p3=p1/100;
    box1.value=p3;
});
nine.addEventListener('click',function()
{   
    let p=box1.value;
    if(p.length<=0)
    {
        box1.value='9';
    }
    else
    {
        let p2=p+'9';
        box1.value=p2;
    }
});
eight.addEventListener('click',function()
{   
    let p=box1.value;
    if(p.length<=0)
    {
        box1.value='8';
    }
    else
    {
        let p2=p+'8';
        box1.value=p2;
    }
});
seven.addEventListener('click',function()
{   
    let p=box1.value;
    if(p.length<=0)
    {
        box1.value='7';
    }
    else 
    {
        let p2=p+'7';
        box1.value=p2;
    }
});
six.addEventListener('click',function()
{   
    let p=box1.value;
    if(p.length<=0)
    {
        box1.value='6';
    }
    else
    {
        let p2=p+'6';
        box1.value=p2;
    }
});
five.addEventListener('click',function()
{   
    let p=box1.value;
    if(p.length<=0)
    {
        box1.value='5';
    }
    else
    {
        let p2=p+'5';
        box1.value=p2;
    }
});
four.addEventListener('click',function()
{   
    let p=box1.value;
    if(p.length<=0)
    {
        box1.value='4';
    }
    else
    {
        let p2=p+'4';
        box1.value=p2;
    }
});
three.addEventListener('click',function()
{   
    let p=box1.value;
    if(p.length<=0)
    {
        box1.value='3';
    }
    else
    {
        let p2=p+'3';
        box1.value=p2;
    }
});
two.addEventListener('click',function()
{   
    let p=box1.value;
    if(p.length<=0)
    {
        box1.value='2';
    }
    else
    {
        let p2=p+'2';
        box1.value=p2;
    }
});
one.addEventListener('click',function()
{   
    let p=box1.value;
    if(p.length<=0)
    {
        box1.value='1';
    }
    else
    {
        let p2=p+'1';
        box1.value=p2;
    }
});
zero.addEventListener('click',function()
{   
    let p=box1.value;
    if(p.length<=0)
    {
        box1.value='0';
    }
    else
    {
        let p2=p+'0';
        box1.value=p2;
    }
});
equal.addEventListener('click',function()
{
    if(ch=='+')
    {   
        let p=parseFloat(box1.value);
        let p1=parseFloat(result);
        let p3=p1+p;
        box1.value=p3;
    }
    else if(ch=='-')
    {   
        let p=parseFloat(box1.value);
        let p1=parseFloat(result);
        let p3=p1-p;
        box1.value=p3;
    }
    else if(ch=='*')
    {   
        let p=parseFloat(box1.value);
        let p1=parseFloat(result);
        let p3=p1*p;
        box1.value=p3;
    }
    else if(ch=='/')
    {   
        let p=parseFloat(box1.value);
        let p1=parseFloat(result);
        let p3=p1/p;
        box1.value=p3;
    }
    else if(ch=='%')
    {   
        let p=parseFloat(box1.value);
        let p1=parseFloat(result);
        let p3=p1/100;
        box1.value=p3;
    }
    else if(ch=='')
    {
        box1.value="";
    }
});