

if (document.readyState === "loading") {  // Delay init until content is loaded
    document.addEventListener("DOMContentLoaded", init); // Call init when content is loaded
} else { // Else if content is already loaded
    init(); // Call init right away
}




// Add some functionality to the page
    function init() {

        //Selecting the list
        const list = document.querySelector(".card-body ol");
        //Select the input button
        const addList = document.querySelector("#item-text");


        // Attach listeners

        document.querySelector('#submitItemBtn').addEventListener("click", event => {

            // Prevent standard HTML form behaviour (page reload)
            event.preventDefault();

            //Get the value of the input field
            const value = addList.value;
            addList.value = '';

            //create elements for the list
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            const labelItem = document.createElement('label');
            const deleteItem = document.createElement('span');

            //add content
            deleteItem.textContent = 'Delete';
            checkbox.setAttribute("type", "checkbox");
            labelItem.textContent = value;

            //add classes to the list
            checkbox.classList.add('todoCheckbox');
            deleteItem.classList.add('delete');
            li.classList.add('list-group-item');

            //append to document
            li.appendChild(checkbox);
            li.appendChild(labelItem);
            li.appendChild(deleteItem);
            list.appendChild(li);


            //Add line through
            labelItem.addEventListener('click',function(){
                labelItem.classList.toggle("done");
            });

            //Delete the list item
            list.addEventListener('click',function(e){
                if(e.target.className == 'delete'){
                    const li = e.target.parentElement;
                    list.removeChild(li);
                }
            });

            //Change the text of the button when clicked
            event.target.textContent = "Submitted";

        });

        // TODO: Implement button functionality here



        console.log("Initialization done!");
    }





    /* Not working
// Declare variables
var button = document.getElementById("btn");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");


//get length of list
function inputLength() {
	return input.value.length;
}

//create a new list item for user input
function createListElement() {
    let li = document.createElement("li");
//add input to the new list
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = "";


    //get length of list
    function inputLength() {
        return input.value.length;
    }
    /*

// function to create a line-through
    function lineThrough() {
        li.classList.toggle("done");
    }

//call the function to add the line through
    li.addEventListener("click", lineThrough);



//create a delete button
    var btnDelete = document.createElement("button");
//add button to the list
    li.appendChild(btnDelete);
//style for the delete button
    btnDelete.classList.add("deleteBtn");
//add input x to the button
    btnDelete.appendChild(document.createTextNode("X"));

// add display: none to the button
    function deleteListItem() {
        li.classList.add("delete");
    }
//when it's clicked the x button, the items from the list will be deteleted
    btnDelete.addEventListener("click", deleteListItem);

}//end the function to create list elements


//user clicks add input
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

//user presses enter on keyboard ////NOT WORKING
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

console.log('hey');
*/





/*
let list = [];
const addToList = () => {
    let itemText = document.getElementById('itemText');
    let itemList = document.getElementById('itemList');
    let item = document.createElement('li');

    //Add new item text to the Item
    item.innerText = itemText.value;

    //Add new item to List
    itemList.appendChild(item);

    //Send the itemText value to the list of arrays
    list.push(itemText.value);

    //Reset the text
    itemText.value = '';

}

*/

































/*
    //Select the elements for JS functionality
    const list = document.GetElementById("itemList");
    const button = document.GetElementById("submitItemBtn");

    // Classes names for the list items functionality
    const CHECK = "fa fa-check-square-o";
    const UNCHECK = "fa fa-square-o";
    const LINE_THROUGH = "lineThrough";

    function addToDo(toDo, id, done, trash){

        if(trash){ return; }

        const DONE = done ? CHECK : UNCHECK;
        const LINE = done ? LINE_THROUGH : "";

        const item = `<li class="list-group-item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <label for="todo1">${toDo}</label>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

        const position = "beforeend";

        list.insertAdjacentHTML(position, item);
    }
    addToDo("Drink coffee");

*/