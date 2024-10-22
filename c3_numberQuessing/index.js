let min = 1;
let max = 100;
let answer = Math.floor(Math.random() * (max - min +1)) + min;

let attempts = 0;
let running = true;
let guess;

while(running){

    guess = window.prompt(`Please enter a number between ${max}-${min}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number.");
    }
    else if(guess < min || guess > max){
        window.alert("Please enter a valid number.");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("It is low you need to guess a higher number");
        }
        else if(guess > answer){
            window.alert("It is high you need to guess a lower number");
        }
        else{
            window.alert(`Congratulations you are correct! It takes you ${attempts}.`);
            running = false;
        }
    }

}
