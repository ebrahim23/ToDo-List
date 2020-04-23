/* Tasks To Do */
// Use Sweet Alert If Input Is Empty        [Done]
// Check If Task Is Exist                   [None]
// Create Delete All Tasks Button           [Done]
// Create Finish All Tasks Button           [None]

// var items = JSON.parse(localStorage.getItem('todo-list')) || [];

/* Sitting Up The Variables */
let theInput = document.querySelector(".add-task input"),
    itemVal = theInput.value,
    addButt = document.querySelector(".add-task .plus"),
    taskCon = document.querySelector(".task-content"),
    noTask = document.querySelector(".no-task"),
    taskCount = document.querySelector(".task-count span"),
    taskComplete = document.querySelector(".task-complete span"),
    delAll = document.querySelector(".del-all"),
    spans = document.querySelector(".spans");


/* Auto Focus On The Input Feild */
window.onload = function focus(){
    theInput.focus();
};

/* Add Task Function */
addButt.onclick = function(){
    // If The Input Is Empty
    if(theInput.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can\'t Leave The Feild Empty!'
          })
    // If The Input Is Filld
    } else {
        noTask.remove();
        // Create The Main Span
        let mainspan = document.createElement('span'),
            // Create The Delete Element
            delElement = document.createElement('span'),
            // Create The Input Text
            text = document.createTextNode(theInput.value),
            // Create The Delete Text
            delText = document.createTextNode("Delete");
        // Append Text To Main Span
        mainspan.appendChild(text);
        // Set A Class To Main Span
        mainspan.className = 'task-box';
        // Append Text To Delete Element
        delElement.appendChild(delText);
        // Set A Class To Delete Element
        delElement.className = "delete";
        // Append Delete Element To Main Span
        mainspan.appendChild(delElement);
        // Append Spans Element To task-Container
        taskCon.appendChild(spans);
        // Append MainSpan Element To Spans
        spans.appendChild(mainspan);
        // Empty The Input
        theInput.value = null;
        // Focus On The Input
        theInput.focus();
        // Calc Function
        clacTasks();
    }
}

/* Delete Element Function */
document.addEventListener('click', function(e){
    // Delete Task
    if(e.target.className == "delete"){
        e.target.parentNode.remove();
        // Focus On The Input
        theInput.focus();
        // Calc Function
        clacTasks();
    }
    // Finish Task
    if(e.target.classList.contains("task-box")){
        e.target.classList.toggle('finished');
        // Focus On The Input
        theInput.focus();
        // Calc Function
        clacTasks();
    }
    // Delete All Function
    if(e.target.classList.contains("del-all")){
        document.querySelector(".spans").remove();
        // Calc Function
        clacTasks();
    }
})

/* Calc Tasks Function */
function clacTasks(){
    taskCount.innerHTML = document.querySelectorAll(".task-content .task-box").length;
    taskComplete.innerHTML = document.querySelectorAll(".task-content .finished").length;
}
