var navstatus = 0;
function diplaynav() {
   if(!navstatus){
        $('.maindiv').css('width' , '100%') 
        $('li').css('display' , 'block')
        navstatus=1; 
    }else if(navstatus){
        $('.maindiv').css('width','0%') 
        $('li').css('display','none')
        navstatus=0
    }
  
}