function addToList() {

    var taskname = document.getElementById('taskname').value;
    var tododiv = document.getElementById('myToDo')
    
    document.getElementById('taskname').value = ''
    var newtodoitem = document.createElement('div')

    var todoname = document.createElement('li')
    todoname.innerText = taskname
    var deletebtn = document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)

    tododiv.appendChild(newtodoitem)

}

var tododiv = document.getElementById('myToDo')
tododiv.addEventListener('click',deleitem)

function deleitem(e){
    const element = e.target;
    if(element.classList[0] == 'far')
    {
        element.parentElement.remove();
    }
   
}