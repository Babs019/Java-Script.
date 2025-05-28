// const result = document.querySelector("#title");
// console.log(result.innerHTML)

// const result2 = document.querySelector(".paragraph");
// console.log(result2.innerHTML)

// const result3 = document.querySelector("h2")
// console.log(result3.innerHTML)

// const result4 = document.querySelector("button")
// console.log(result4.innerHTML)

// document.getElementById("title").innerText = "Welcome to Javascript!";

// document.querySelector("h1").style.color ="blue";
// document.querySelector("h1").style.fontsize ="30px";

// document.querySelector("button").style.color ="blue";
// document.querySelector("button").setAttribute("enabled", true);

// function example() {
//     alert("button was clicked");
// }

// userName = "Babs"

// function changeText() {
//     document.querySelector(".paragraph").innerText = `Hello ${userName}`;
// }


// const button = document.querySelector("button")

// button.addEventListener("click", function(){
//     alert("button was click!");
// });

// const button = document.querySelector("button")
// const text = document.querySelector("h1")

// button.addEventListener("click", function(){
//     text.innerText = "Welcome Babs!";
//     text.style.color = "blue";
// });

// const button = document.querySelector("button")

// button.addEventListener("click", function(){
//     const message = document.createElement("button");
//     message.innerText = "Resgistration Successful!";
//     document.body.appendChild(message);
// });

// const btn = document.querySelector("#add-note-btn");

// btn.addEventListener("click", function(){
//     const note = document.createElement("p");
//     note.innerText = "This is a new note!";
//     document.body.appendChild(note);
// });

// const btn  = document.querySelector("#addToCart");

// btn.addEventListener("click", function(){
//     const cart = document.createElement("div");
//     note.innerText = "Product added to cart!";
//     document.body.appendChild(cart);
// });

// const input = document.querySelector("input"); 
// const btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     const inputValue = input.value;
//     alert(inputValue);
    
// });

// const btn = document.querySelector("button");
// const span = document.querySelector("span");

// let count = 0;

// btn.addEventListener("click", function() {
//     count= 7;
//     span.innerText = `Count: ${count}`;
    
// });

document.getElementById("addBtn").addEventListener("click", function() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter valid input.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    //Completed 
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.onClick = () => li.classList.toggle("completed");

    //delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.onClick = () => li.remove();  

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);    

    input.value = ""; // Clear the input field  

});
