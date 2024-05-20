let divEl = document.querySelectorAll("div");
let msgEl = document.querySelectorAll(".msg");
let aEl = document.querySelectorAll(".retry");
// console.log(num)
function changeImg(userPick) {

    let num = Math.ceil(Math.random() * 3);



    if (num === 1) {
        divEl[0].innerHTML = `
        <img src="king.jpeg" alt="">
        <img src="bishop.jpeg" alt="">
        <img src="queen.jpeg" alt="">

        `
    }
    else if (num === 2) {
        divEl[0].innerHTML = `
        <img src="bishop.jpeg" alt="">
        <img src="king.jpeg" alt="">
        <img src="queen.jpeg" alt="">

        `;
    }
    else if (num === 3) {
        divEl[0].innerHTML = `
        <img src="queen.jpeg" alt="">
        <img src="bishop.jpeg" alt="">
        <img src="king.jpeg" alt="">

        `;
    }
    if (userPick === num) {
        console.log('you picked right');
        msgEl[0].innerHTML = "You Pick Right Card";
    }
    
    aEl[0].style.visibility = "visible";
        

}
