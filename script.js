let btn = document.querySelectorAll(".box");

let reset = document.querySelector(".reset_button");

let msg = document.querySelector("#msg");

let newgame = document.querySelector("#new-btn");
console.log(newgame);


let msgContainer = document.querySelector(".msg-container");
// Possible pposition where win

let possibelresult =
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


const disableButton = (() => {
    btn.forEach((button) => {
        button.disabled = true;
    })

    // for(button in btn)
    // {
    //     button.disable=true;  //another method
    // }
})

const enableButton = (() =>   //for new game
{
    btn.forEach((button) => {
        button.disabled = false;
    })
})


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButton();
}

const drawGame = () => {
    msg.innerText = 'Match Drawn';
    msgContainer.classList.remove("hide");
    disableButton();
}




//checks whether game is over after a clcik of the button or not
function checkifover(btn) {
    let arr = Array.from(btn).map((button) => {  //Note: map fucntion is    applicable only to array and btn is a NodeList and not a arrya so need to first convert it to array
        return button.innerText;
    })
    console.log(arr);

    for (let i = 0; i < possibelresult.length; i++) {
        let arrindex = possibelresult[i];
        console.log(arr[arrindex[0]], arr[arrindex[1]], arr[arrindex[2]]);

        if (arr[arrindex[0]] != "" && arr[arrindex[1]] != "" && arr[arrindex[2]] != "") {
            if (arr[arrindex[0]] == arr[arrindex[1]] && arr[arrindex[1]] == arr[arrindex[2]]) {

                // setTimeout(()=>
                // {
                console.log("return 1");
                showWinner(arr[arrindex[0]]);
                console.log("return 1");
                return 1;
                // },200)

                // console.log("Game X");
                // alert("Game X");
                // btn.forEach((button) => {
                //     button.innerHTML = "";
                //     button.clicked = 0;
                //     a = 1;
                // })
                // console.log("Game Restarted");
                // alert("Game Restarted");
                // break;
            }

        }



        // else if (arr[arrindex[0]] == arr[arrindex[1]] && arr[arrindex[1]] == arr[arrindex[2]] && arr[arrindex[1]] == "0") {
        // console.log("Game 0");
        // alert("Game 0");
        // btn.forEach((button) => {
        //     button.innerHTML = "";
        //     button.clicked = 0;
        //     a = 1;
        // })
        // console.log("Game Restarted");
        // alert("Game Restarted");



        // }
    }
    return 0;

}









let a = 1;//counter for whose turn it is X or 0

btn.forEach((button) => {
    // let a=1;  //block me scope every button has its own a you can check by clicking on same
    //Use this to check if pressed once before
    // let clicked=0;
    button.clicked = 0;
    button.addEventListener("click", (e) => {
        // working-->console.log(`Button pressed with id:${button.getAttribute("id")}`);
        //not necessary here
        let id = button.id;
        console.log(`Button pressed with id:${id} `)

        console.log("click:", button.clicked);
        if (a % 2 == 0) {
            if (button.clicked == 0) {
                button.innerHTML = "<p>X</p>";
                a++;
                button.clicked = 1;
            }
        }
        else {

            if (button.clicked == 0) {
                button.innerHTML = "<p>0</p>";;
                button.clicked = 1;

                a++;//need to update only when 1st cliked kyuki same ko click kiya to a=2 means X ho jayega
                //another altrnative is to disable the button
            }

        }


        setTimeout(() => {
            console.log("Over:", checkifover(btn));
        }, 20);

        console.log(a);

        //the value of X/0 was not being printed uske pehele alert aa jata draw hone ka so draw ko thoda rukke call kiya
        setTimeout(() => {
            if (a === 10 && checkifover(btn) === 0) {
                // btn.forEach((button) => {
                //     button.innerHTML = "";
                //     button.clicked = 0;
                //     a = 1;
                // })
                disableButton();
                console.log("Game Restarted");
                drawGame();

            }
        }, 20)

        //this.id doesent work might be this dosent refer to particular button


    });
})

reset.onclick = function () {
    btn.forEach((button) => {
        button.innerHTML = "";
        button.clicked = 0;
    })
    console.log("Game Restarted");
    alert("Game Restarted");
    msgContainer.classList.add("hide");
    enableButton();
    a = 1;
}

newgame.addEventListener("click", () => {
    btn.forEach((button) => {
        button.innerHTML = "";
        button.clicked = 0;
    })
    console.log("New Button Clicked");
    msgContainer.classList.add("hide");
    enableButton();
    a = 1;

})


// // Better Method
// turn0=false;
// btn.forEach((button)=>
// {
//     let a=1;
//     button.addEventListener("click",()=>
//     {
//         console.log("a",a);
//         a++; //only once increase kyuki ek bar hi execute hoga
//         console.log("box was clicked");
//         if(turn0)
//         {
//             button.innerText="0";
//             turn0=false;
//         }
//         else
//         {
//             button.innerText="X";
//             turn0=true;
//         }

//         button.disabled=true;

//     })
// })