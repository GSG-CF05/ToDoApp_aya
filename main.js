//access elements
let userlist = document.querySelector('.list');
let listinput = document.querySelector('.list_input');
let addlist = document.querySelector('.addlistbtn');
let savelist = document.querySelector('.savelistbtn');
// const todoList= document.querySelector('.todo-list');


//add action listener
addlist.addEventListener('click', addNewItem);
document.addEventListener('DOMContentLoaded', getTodoListOnLoad);
//todoList.addEventListener('click', handelDeleteOrEdit);


//function to add task list into the ul
function addNewItem(e){

    e.preventDefault();

    if(listinput.value!=""){ 
    let newDiv= document.createElement('div')
      let newItem = `
        <li>${listinput.value}</li>
        <i class="fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash"></i>`;

      newDiv.innerHTML= newItem;
      listinput.appendChild(newDiv)
     // newDiv.classList.add('todo-item') //add style for div

      saveToLocalStorage(listinput.value);
    }
    listinput.value = ""; //!once task added leave the input blank

}

//save items to local storage
function saveToLocalStorage(todo){
    let todos
    if(localStorage.getItem('todos')==null){
    todos=[]
    }
    else {
        todos=JSON.parse(localStorage.getItem('todos'))//transforming json string into a js object
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))//transforming into js object to json string 
}

// get list in page when it loaded
function getTodoListOnLoad(){
    if(localStorage.getItem('todos')){
        todos= JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(todo => {
        let newDiv= document.createElement('div')
      let newItem = `
        <li>${todo}</li>
        <i class="fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash"></i>
      `;
      newDiv.innerHTML= newItem;
      todoList.appendChild(newDiv)
    //  newDiv.classList.add('todo-item')
    });
}

// function responsible to handel if the event for delete or edit depends on the class
function handelDeleteOrEdit(e){
  if(e.target.classList.contains('fa-trash'))
  deleteTodo(e);
  if(e.target.classList.contains("fa-pen"))
  editTodo(e);
}

//delete function 
function deleteTodo(e){
   let item = e.target.parentNode; //access the parent of e which is div
   let array=JSON.parse(localStorage.getItem('todos')) //access the array from local storage
   let itemDelete=array.indexOf(item.innerText)//get the index for item 
   array.splice(itemDelete, 1)//delete item from array
   localStorage.setItem('todos', JSON.stringify(array))//add array to local storage after delete item
   item.remove();//remove the item from the page
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
