function getRan() {
    return Math.floor(Math.random() * 6) + 1;
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
let isover = 0;
let noPlayer = 0;
let roll = 0;
let data = [];
let score = [];

let winScore = -1;
let winPayer = "";

const declare = document.querySelector('h5')
const a = document.querySelector('#bttn')
const solo = document.querySelector('#solo')
const reset = document.querySelector('#reset')
const addBtn = document.querySelector('#addBtn')
const check = document.querySelectorAll(".check")

solo.addEventListener("click", function () {
    roll = getRan()
    solo.src = `images/dice${roll}.png`
    solo.parentElement.children[1].innerText = roll;
})

document.querySelector("#howMany").addEventListener("change", function (e) {
    noPlayer = parseInt(document.querySelector("#howMany").value);
    console.log(noPlayer)
    removeAllChildNodes(addBtn)
    data = [];
    score = [];
    for (let x = 1; x <= noPlayer; x++) {

        data.push(`p${x}`);
        const span = document.createElement('span')
        span.classList.add("shadow", "m-2", "col", "d-flex", 'flex-column', 'align-items-center', "py-3")
        const image = document.createElement('img')
        image.classList.add(`p${x}img`, "col", "d-block", "align-self-center")
        image.classList.remove("hide")
        image.src = `images/dice1.png`
        const c = document.createElement('button')
        c.innerText = `Player${x}`
        c.classList.add("col", "mt-2", "btn", "btn-primary", "check", "width100", "shadow")
        span.append(image)
        span.append(c)
        addBtn.append(span)
    }

})


let buttonsClicked = 0;
addBtn.addEventListener("click", function (e) {
    if (e.target.nodeName == "BUTTON") {
        roll = getRan();
        console.log(e.target.innerText)
        e.target.value = roll;
        e.target.parentElement.firstChild.src = `images/dice${roll}.png`;
        e.target.disabled = true;
        buttonsClicked++;
    }
})



addBtn.addEventListener("click", function (e) {
    for (let x = 0; x < data.length; x++) {
        if (parseInt(document.querySelectorAll(".check")[x].value) > winScore) {
            winScore = parseInt(document.querySelectorAll(".check")[x].value);
            winPayer = document.querySelectorAll(".check")[x].innerText;
        }


        for (let x = 1; x < data.length; x++) {
            if (parseInt(document.querySelectorAll(".check")[x].value) == parseInt(document.querySelectorAll(".check")[x - 1].value)) {
                declare.innerText = `Its a draw!!! `;
            }
        } if (buttonsClicked == data.length)
            declare.innerText = `${winPayer} wins!!`
    }
})
// for (let x = 0; x < data.length; x++) {

//     declare.innerText = `${winPayer} wins`;
// }
// if (isover == 1) {
//     declare.innerText = "Game over, its a draw!!!";
// }
// const check = document.querySelectorAll('.check')

// for (let x = 0; x < noPlayer; x++) {
//     //     let y = 0;
//     if (check[x].disabled == true) {
//         y++;
//     }
// //     // console.log(y)
// }
