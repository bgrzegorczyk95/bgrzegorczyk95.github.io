function game(){
    const buttonStone = document.querySelector(".stone");
    const buttonPaper = document.querySelector(".paper");
    const buttonScissors = document.querySelector(".scissors");
    const playerPoints = document.querySelector(".pointsPlayer");
    const computerPoints = document.querySelector(".pointsComputer")
    const playerImg = document.querySelector(".player-image");
    const computerImg = document.querySelector(".computer-image");
    
    let player = 0;
    let computer = 0;

    playerPoints.textContent = "0:";
    computerPoints.textContent = "0";
    
    function rand( min, max ){
        return Math.floor(Math.random()*(max-min+1)+min);
    };
    
    function choice(image,addItem,removeItem1,removeItem2){
        playerImg.src = "img/" + image + ".png";
        playerImg.alt = "image";
        playerImg.classList.add("added");
        playerImg.classList.add(addItem);
        playerImg.classList.remove(removeItem1);
        playerImg.classList.remove(removeItem2);
    };

    buttonStone.addEventListener("click", function(){choice("kamien","addedStone","addedPaper","addedScissors")}, false);
    buttonPaper.addEventListener("click", function(){choice("papier","addedPaper","addedStone","addedScissors")}, false);
    buttonScissors.addEventListener("click", function(){choice("nozyce","addedScissors","addedStone","addedPaper")}, false);

    const startButton = document.querySelector(".start");
        
    startButton.addEventListener("click", function(){
        if(playerImg.classList.contains("added")){
            const images = ["kamien", "papier", "nozyce"];
            let randImg = rand(0,2);
            computerImg.src = "img/" + images[randImg] + ".png";
            computerImg.alt = images[randImg];
            
            function fight(imageTab,className,className2){
                if(randImg === imageTab){
                    if(playerImg.classList.contains(className)){
                        player++;
                        playerPoints.textContent = player + ":";            
                    }
                    if(playerImg.classList.contains(className2)){
                        computer++;
                        computerPoints.textContent = computer;
                    }
                }
                
                const winner = document.querySelector(".winner");
                const pointsToWin = 3;
                
                if(player === pointsToWin){
                    winner.classList.add("winner-box");
                    winner.textContent = "You win!";
                }else if(computer === pointsToWin){
                    winner.classList.add("winner-box");
                    winner.textContent = "You lose!";
                }
                
                if(player === pointsToWin || computer === pointsToWin){
                    const resetDiv = document.createElement("div");
                    resetDiv.classList.add("reset");
                    resetDiv.textContent = "Play again";
                    winner.appendChild(resetDiv);
                    
                    
                    const resGame = document.querySelector(".reset");
                    resGame.classList.add("resetGame");
                    resGame.addEventListener("click", function(){
                        location.reload();
                    });
                }
            };
            
            fight(0,"addedPaper","addedScissors")
            fight(1,"addedScissors","addedStone")
            fight(2,"addedStone","addedPaper")
        }
    }, false);
};

game();