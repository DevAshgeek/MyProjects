function display(val)
{
   document.getElementById('txtarea').value+=val
   
}

function calculate()
{
   var value = document.getElementById('txtarea').value
   var ans = eval(value)
   document.getElementById('txtarea').value=ans
}

function clr()
{
  document.getElementById('txtarea').value=''
}