const bodyText = document.querySelector(".bodyText")

export var greeting = "hello"

export const test =  function () {
    return greeting;
}

export const menu = (function () {
    bodyText.innerHTML = '';
    const menuItems = ["Beef", "Pork", "Sausage"];
    menuItems.forEach(element => {
        const foodItem = document.createElement("p");
        foodItem.textContent = element;
        bodyText.appendChild(foodItem);
    })
})

export const home = (function (){
    bodyText.innerHTML = '';
    const about = document.createElement("p");
    about.textContent = "this is just about section";
    bodyText.appendChild(about);
})

