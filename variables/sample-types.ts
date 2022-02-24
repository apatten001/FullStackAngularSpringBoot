let found1: boolean  = true;
let grade2: number  = 78;

for (let i = 0; i <10; i++ ){
    console.log(i);
    
}

let total: number = 0;

// number array always dynamic
let reviews: number[] = [5,5,6,7,8,2];
console.log("\n");
for(let i=0; i <reviews.length; i++){

    console.log(reviews[i]);
    total += reviews[i];
}
console.log(`The total number is ${total}`)
reviews.push(100);

let sports: string[] = ["soccer", "football", "tennis"];
sports.push("baseball");
sports.push("golf");
sports.push("fishing");

console.log(sports.length);

for(let teamsport of sports){
    if (teamsport == "tennis"){
        console.log(`${teamsport}  is my favorite sport`);
    } else {
        console.log(teamsport);
    }
}