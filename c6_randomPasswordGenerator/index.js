

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!?_()/&%+^'=*_[]{}:;";

    let allowedChars = "";
    let pswd = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 1){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(at least 1 set of character needs to be selected )`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex =Math.floor(Math.random() * allowedChars.length);
        pswd += allowedChars[randomIndex];
    }

    return pswd;

}

const pswdLength = 18;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const pswd = generatePassword(pswdLength,
                            includeLowercase,
                            includeUppercase,
                            includeNumbers,
                             includeSymbols);

console.log(`Generated password: ${pswd}`);                             