const inputBox=document.getElementById("input-box");
const ListContainer=document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ' ') {
        alert("You must right something!"); //if the text box is empty display alert
    }
    else {
        let li=document.createElement("li"); //dynamically creating list element
        li.innerHTML=inputBox.value; //taking the value from text box & storing it into the li 
        ListContainer.appendChild(li); //display the text added

        //code to add the cross icon to clear the list items
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        //display the span
        li.appendChild(span);
    }
    
    //code to clear the text box after adding the text
    inputBox.value=" ";
    saveData();
}

//code to cross the completed task and delete the task when clicked on cross
ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//code to store the list so that when we refresh the page the list doesn't get deleted
function saveData() //func to store the data
{
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showTask() //func to display the data
{
    ListContainer.innerHTML=localStorage.getItem("data"); //it will give all the contents stored in the browser in the name of data
}
showTask();