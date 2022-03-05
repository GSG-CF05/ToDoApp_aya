//access elements
let userlist = document.querySelector('.list');
let listinput = document.querySelector('.list_input');
let addlist = document.querySelector('.addlistbtn');
let savelist = document.querySelector('.savelistbtn');
// const todoList= document.querySelector('.todo-list');


//add action listener
addlist.addEventListener('click', addNewItem);
document.addEventListener('DOMContentLoaded', Load);


//function to add task list into the ul
function addNewItem(e){

    e.preventDefault();

    if(listinput.value!=""){ 
    let newDiv= document.createElement('div')
      let newItem ;

      newDiv.innerHTML= newItem;
      listinput.appendChild(newDiv)

      saveToLocalStorage(listinput.value);
    }
    listinput.value = ""; 

}

//save items to local storage
function saveToLocalStorage(todo){
    let todos
    if(localStorage.getItem('todos')==null){
    todos=[]
    }
    else {
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}


function Load(){
    if(localStorage.getItem('todos')){
        todos= JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(todo => {
        let newDiv= document.createElement('div')
      let newItem ;
      newDiv.innerHTML= newItem;
      todoList.appendChild(newDiv)
    //  newDiv.classList.add('todo-item')
    });
}


//delete function 
function deleteTodo(e){
   let item = e.target.parentNode; 
   let array=JSON.parse(localStorage.getItem('todos'))
   let itemDelete=array.indexOf(item.innerText)
   array.splice(itemDelete, 1)
   localStorage.setItem('todos', JSON.stringify(array))
   item.remove();
}
//edit function
// function editTodo(e){
//   let item = e.target.parentNode;
//   let allItems=JSON.parse(localStorage.getItem('todos'))
//   let itemEdit=allItems.indexOf(item.innerText) //the idex for editable item 
//   saveIndex.value=itemEdit; // put a value for hidden input which is index 
//   todoInput.value=allItems[itemEdit] // put an editable item in todo input to edit it 
//   addTaskButton.style.display="none"; // hide add button
//   saveTaskButton.style.display="inline"; //display save button 
// }
