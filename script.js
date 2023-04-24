"use strict"
//1 make a function that creates 100 box's on page, for loop? done
//2 style them. black, white borders. done
//3 make 3 buttons red, green, blue. done
//4 add event listener to tell when the button is clicked. done
//5 when you click on a box the box changes color, red green or blue. first box is only affected because querySelector only selects the first box that matches

const addBox = document.querySelector(".add-box");
const boxContainer = document.querySelector(".box-container");
const redButton = document.querySelector("#red-button");
const greenButton = document.querySelector("#green-button");
const blueButton = document.querySelector("#blue-button");
const blackButton = document.querySelector("#black-button");
const yellowButton = document.querySelector("#yellow-button");
  

   
const addBoxFunction = () => {
    for (let i = 0; i < 100; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "box");
        boxContainer.append(newDiv);
    //     newDiv.addEventListener("click", (e) => {
    //         e.target.style.backgroundColor = "red";
    //    })
    }
    
}


addBoxFunction();


const redButtonWasClicked = () => {
    const newDiv = document.querySelectorAll(".box").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.querySelector(".box");
            e.target.style.backgroundColor = "red";
        })
    });
        
};

const redButtonFunction = () => {
    redButton.addEventListener("click", () => {
        redButtonWasClicked(); 
    })
};


redButtonFunction();


const greenButtonWasClicked = () => {
    const newDiv = document.querySelectorAll(".box").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.querySelector(".box");
            e.target.style.backgroundColor = "green";
        })
    });
}

const greenButtonFunction = () => {
    greenButton.addEventListener("click", () => {
        greenButtonWasClicked();
    })
}


greenButtonFunction();


const blueButtonWasClicked = () => {
    const newDiv = document.querySelectorAll(".box").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.querySelector(".box");
            e.target.style.backgroundColor = "blue";
        })
    });
}

const blueButtonFunction = () => {
    blueButton.addEventListener("click", () => {
        blueButtonWasClicked();
    })
}


blueButtonFunction();


const blackButtonWasClicked = () => {
    const newDiv = document.querySelectorAll(".box").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.querySelector(".box");
            e.target.style.backgroundColor = "black";
        })
    });
}

const blackButtonFunction = () => {
    blackButton.addEventListener("click", () => {
        blackButtonWasClicked();
    })
}


blackButtonFunction();


const yellowButtonWasClicked = () => {
    const newDiv = document.querySelectorAll(".box").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.querySelector(".box");
            e.target.style.backgroundColor = "yellow";
        })
    });
        
};

const yellowButtonFunction = () => {
    yellowButton.addEventListener("click", () => {
        yellowButtonWasClicked(); 
    })
};

yellowButtonFunction();









