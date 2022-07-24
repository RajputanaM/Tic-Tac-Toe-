console.log("monu");
let gameover = new Audio("gameover.mp3");
let turnmusic = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let flag = false;
let turn = "X";

const changeturn = ()=>{
    return turn ==="X"?"0":"X";
}

const result = ()=> {
    let boxtext = document.getElementsByClassName("innertext");
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
        document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " Won";
       flag = true;
       document.querySelector('.imgcontainer').getElementsByTagName('img')[0].style.width = "150px";
    }
});
}

let box = document.getElementsByClassName("box"); 
Array.from(box).forEach(element =>{
    let text= element.querySelector('.innertext');
    element.addEventListener('click', ()=>{
       if(text.innerText===''){
        text.innerText=turn;
        turn = changeturn();
        turnmusic.play();
        result();
        if(!flag){
            document.getElementsByClassName("turn")[0].innerText= "Turn for " + turn;
           }
        }
    })
})

exit.addEventListener('click', ()=>{
    let texts = document.querySelectorAll('.innertext');
    Array.from(texts).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    flag = false;
    document.getElementsByClassName("turn")[0].innerText ="Turn for " + turn;
    document.querySelector('.imgcontainer').getElementsByTagName("img")[0].style.width = "0";

})