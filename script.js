// ===================================== EXERCICE 1 ====================================================
let x = 10;
let y = 15;
if (x > y) {
    console.log("x is the biggest number");
} else {
    console.log("y is the biggest number")
}

// ======================================EXERCICE 2 ===================================================
let NewDog = "Chihuahua";
    console.log(NewDog.length);

    console.log(NewDog.toUpperCase());
    console.log(NewDog.toLowerCase());

    if (NewDog == "Chihuahua") {
        console.log('I love Chihuahuas, it’s my favorite dog breed');
    } else {
        console.log('I dont care, I prefer cats');
    }

// ====================================== EXERCICE 3 =================================================

let number = prompt("Enter a number");
let recupNumber = parseInt(number);

if (recupNumber % 2 == 0) {
    console.log(recupNumber + ' is an even number')
} else {
    console.log(recupNumber + ' is an odd number')
}

// +=================================== EXERCICE 4 ====================================================

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if(users.length == 0)
{
    console.log("no one is online")
}else if(users.length == 1)
{
    console.log(users[0] + " is online")
}else if(users.length == 2){
    console.log(users[0] +" and " +users[1] + " are online")
}else {
    console.log(users[0] +" , " +users[1] + " and " + (users.length - 2) +" more are online")
}