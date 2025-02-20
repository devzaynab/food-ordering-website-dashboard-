  let foods = ["shawarma","pizza","pasta","pasted","paint","pen","burger","fruit-juice","spicy-tuna","yorgurt-parfait","chicken-wings","mozzarella","eggs-benedict","caesar-salad"];
  let sortedfoods = foods.sort();

  //reference
const input = document.getElementById("input");

input.addEventListener("keyup", (e) => {
  removeElements();
  for (let i of sortedfoods) {
    if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "" ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayfoods('" + i + " ')");
      //display matched part in bold
      let word = "<b>" + i.substring(0, input.value.length) + "</b>";
      word += i.substring(input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});

function displayfoods(value) {
  input.value = value;
}

function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((items) => {
    items.remove();
  })
}


const body = document.querySelector("body"),
      navbar = body.querySelector(".nav-bar"),
      toggle = body.querySelector(".toggle"),
      modeswitch = body.querySelector(".toggle-switch"),
      content = body.querySelector(".content"),
      modetext = body.querySelector(".mode-text"),
      container = body.querySelector(".container");
      
      

      toggle.addEventListener("click", () =>{
        navbar.classList.toggle("close"),
        navbar.classList.toggle("open");

        container.classList.toggle("container-close"),
        content.classList.toggle("content-close");
      });

      modeswitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
          modetext.innerHTML = "light mode"
        }else{
           modetext.innerHTML = "dark mode"
        }
      });

   