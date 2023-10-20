const inputBox = document.getElementById("input-box");  // selects an HTML element with the ID "input-box" and assigns it to a variable named inputBox
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')
    {
        alert("You must write something in input field!");
    }

    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveDate();
}

//Javascript for click function

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveDate();
    }

    else if(e.target.tagName === "SPAN")  //delete parent element
    {
        e.target.parentElement.remove();
        saveDate();
    }
}, false);


// Save data
function saveDate(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// Show data
function showData()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();  //function call