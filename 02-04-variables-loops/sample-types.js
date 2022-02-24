var found1 = true;
var grade2 = 78;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var total = 0;
// number array always dynamic
var reviews = [5, 5, 6, 7, 8, 2];
console.log("\n");
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("The total number is ".concat(total));
reviews.push(100);
var sports = ["soccer", "football", "tennis"];
sports.push("baseball");
sports.push("golf");
sports.push("fishing");
console.log(sports.length);
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var teamsport = sports_1[_i];
    if (teamsport == "tennis") {
        console.log("".concat(teamsport, "  is my favorite sport"));
    }
    else {
        console.log(teamsport);
    }
}
