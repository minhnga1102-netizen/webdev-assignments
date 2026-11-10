"use strict";

const numberOfCandidates = parseInt(prompt("How many candidates: "))
// declare array outside of loop to save all data
const listArray = [];

for (let i = 0; i<numberOfCandidates; i++) {
    const name = prompt(`Name for candidate ${i+1}`)
    // create object inside loop so each one has own object
    const candidate = {
        name: name,
        votes: 0
    }
    //use push to push each object into array
    listArray.push(candidate);
}
console.log(listArray)
const voters = parseInt(prompt("The number of voters: "))

for (let i = 0; i<voters;i++){  
    const votedCandidate = prompt("Who do you vote for: ");
    if (votedCandidate === "") {continue;}
    else { 
        for (const candidate of listArray) {
            if (votedCandidate === candidate.name) {
                candidate.votes ++
            }
        }
    }
}

// arrange the votes descending
// a: 1st object, b: 2nd object as listArray has many objects
listArray.sort((a,b)=> b.votes-a.votes);

// winner as the first one in array
const winner = listArray[0];

// print to console log
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`)
console.log("results:")
for (const candidate of listArray) {
    console.log(`${candidate.name}: ${candidate.votes} votes`)
}
