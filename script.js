console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button

let button1 = document.querySelector("#helloButton")
console.log(button1)

// Select the empty p tag under that button
let ptag = document.querySelector("#helloText")

console.log(ptag)
// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"

button1.addEventListener("click", function(event){
  ptag.textContent ="Hello";
})

// Task 2: All caps button flow
// Implement the DOM manipulation code flow such that when you click the all caps button, the text below becomes all caps (i.e. "THERE'S NO NEED TO SHOUT")
// Make sure to add whatever IDs/classes you need to select the necessary elements


let button2 = document.querySelector("#Caps")
console.log(button2)

let ptag2 = document.querySelector("#shouting")
console.log(ptag2)

button2.addEventListener("click", function(event){
  ptag2.textContent= ptag2.textContent.toUpperCase()
})

// Task 3: Dog image flow
// Implement the DOM manipulation code flow such that when your mouse is over the dog image, it shows happy-dog.jpeg and when it is off the dog image, it shows sad-dog.jpeg.
// Make sure to add whatever IDs/classes you need to select the necessary elements


let img = document.querySelector("img")
console.log(img)

img.addEventListener("mouseover", function (event){
  img.src = "happy-dog.jpeg"
})



// Task 4: Name input flow
// Implement the DOM manipulation code flow such that when you click the submit button, you display "Nice to meet you " with the value typed into the input field
// Make sure to add whatever IDs/classes you need to select the necessary elements

let input = document.querySelector("#input")
console.log(input)


let sub = document.querySelector("#sub")
  console.log(sub)



