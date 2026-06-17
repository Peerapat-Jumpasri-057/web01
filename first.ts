let fname: string = "Peerapat";
let lname: string = "Jumpasri";
let course: string = "Object-oriented Programming"
let mark1: number = 80;
let mark2: number = 70;
let total: number = mark1 + mark2;
let pass: boolean = true;

console.log("Name: %s %s \n Course: %s Total: %d",fname,lname,course,total);
console.log("Pass: ",pass);
let courses:string[] = ["Database", "Programming", "Web"];
let marks: number[] = [75, 72, 81] ;
console.log(marks);
console.log("\n");
console.log(courses[0],marks[0]);
console.log(courses[1],marks[1]);
console.log(courses[2],marks[2]);
total = marks[0] + marks[1] + marks[2];
console.log("Totalmark: ",total);
let avg: number = total / 3 ;
console.log("Average",avg);
