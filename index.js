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



// const inputUsername = document.querySelector("#input-username");
// const inputPassword = document.querySelector("#input-password");
// const btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     const value1 = inputUsername.value;
//     const value2 = inputPassword.value;

//     alert(value1 + " " + value2);
//     if (value1 === "" && value2 === "") {
//         alert("Please fill in both fields.");
//     } else {
//         alert("Login successful!");
//     }
// })


// add/remove button example
// const addBtn = document.querySelector(".btn-add");
// const removeBtn = document.querySelector(".btn-remove");
// let count = 0;

// addBtn.addEventListener("click", function() {
//     count++;
//     document.querySelector("#count").textContent = count;
// });
//    removeBtn.addEventListener("click", function() {
//     if (count >= 1) {
//     count--;
//     document.querySelector("#count").textContent = count;
//     }
// });






// document.getElementById("addBtn").addEventListener("click", function() {
//     const input = document.getElementById("taskInput");
//     const taskText = input.value.trim();

//     if (taskText === "") {
//         alert("Please enter valid input.");
//         return;
//     }

//     const li = document.createElement("li");
//     li.textContent = taskText;

//     //Completed 
//     const completeBtn = document.createElement("button");
//     completeBtn.textContent = "Completed";
//     completeBtn.onClick = () => li.classList.toggle("completed");

//     //delete Button
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "delete";
//     deleteBtn.onClick = () => li.remove();  

//     li.appendChild(completeBtn);
//     li.appendChild(deleteBtn);

//     document.getElementById("taskList").appendChild(li);    

//     input.value = ""; // Clear the input field  

// });




// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error", error));

// const getApi = async () => {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     // const filteredProduct = data.products
//     // filteredProduct.filter((p) => p.price < 10);
//     // const first20 = data.products.slice(0, 20); 

//     console.log(data.products);
//     displayProducts(data.products); 
//   } catch(error) {
//     console.error("Error", error);
//   }
// };


// // Render product cards
// function displayProducts(products) {
//     const list = document.getElementById("productList");
//     list.innerHTML = ""; // Clear existing content

//     products.forEach((product) => {
//       const li = document.createElement("li");
//       li.className = "product";
//       li.innerHTML = `
//             <img src="${product.thumbnail}" alt="${product.title}">
//             <h3>${product.title}</h3>
//             <p>Price: $${product.price}</p>
//             <p>${product.description.slice(0, 60)}...</p>
//             <p>comment: ${product.reviews[0].comment}</p>
            
//         `;
//         list.appendChild(li); 
//     });
// } 

// // Automacally run on page load
// window.addEventListener("DOMContentLoaded",getApi);

// const btn = $("button");

// btn.Hide();

// $("button").click(function() {
//     alert("Button was clicked!");
// });

// $("button").hover(function() {
//     alert("Button was clicked!");
// });

// document.querySelector("button").addEventListener("click", function() {
//     alert("Button was clicked!");
// }); 


// $.get("https://dummyjson.com/products", function(response) {
//     console.log(response.products);
// }).catch((error) => console.error("Error fetching products:", error));

// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.products);
//     const list = document.getElementById("productList");
//     data.products.forEach((product) => {
//       const li = document.createElement("li");
//       li.className = "product";
//       li.innerHTML = `
//         <img src="${product.thumbnail}" alt="${product.title}">
//         <h3>${product.title}</h3>
//         <p>Price: $${product.price}</p>
//         <p>${product.description.slice(0, 60)}...</p>
//         <p>comment: ${product.reviews[0].comment}</p>
//       `;
//       list.appendChild(li);
//     });
//   })
//   .catch((error) => console.error("Error fetching products:", error));

// const getApi = async () => {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     console.log(data.products);
//     displayProducts(data.products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// };




// On button click:
$("button").click(function() {
    alert("Hello Mike!");

    $("p").css("color", "blue");

    $("Div").toggle();
});



