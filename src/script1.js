import "./styles.css"
import {greeting, test, menu, home} from "./script2.js"


const content = document.querySelector("#content")

const navigation = (function () {
    let array = ["Home", "Menu", "About"];
    array.forEach(element => {
        const button = document.createElement("button");
        button.textContent = element;
        button.setAttribute('id',element.toLowerCase());
        button.addEventListener("click", () => btnPress(button));
        content.appendChild(button);
    })
})()

function btnPress(button){
    if(button.id == "menu"){
        menu();
    } else if (button.id == "home"){
        home();
    }
}

