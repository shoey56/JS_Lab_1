//Declare name (string), age (number), birthday (string), detroitGC (boolean), lifeEvents (4 Array)
const name = "Shannon Hoey";
let age = 25;
const birthday = "May 23";
const detroitGC = true;
lifeEvents = ["I grew up in Clarence, NY.", "I went to University of Michigan - Dearborn.", "I competed Nationally for snowboarding.", "I hope to be efficient at JavaScript soon."];

//Write If/Else statement that runs two console.log methods per location
if (detroitGC){
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}else{
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
};

//Write for loop to display items each item in array (start at 0, increment by 1, less than length of life event)
leLen = lifeEvents.length;

for (i=0; i < leLen; i++){
    console.log(lifeEvents[i]);
}

//Declare and initialize a variable names counter to the value of 0
let counter = 0;

//Write a while loop that loops while true
//Declare a variable named randomNumber that is initialized to a random integer between 1 and 10.
while (randomNumber = Math.floor(Math.random() * 10) + 1){
    if (randomNumber !== 5){
        counter++;
        console.log(`${randomNumber} !== 5`);
    }else{
        counter++;
        console.log(`${randomNumber} === 5. It took ${counter} iterations to randomly generate the number 5`);
        break;
    }
}


