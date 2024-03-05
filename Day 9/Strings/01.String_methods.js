let name="arun"
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let text = "Apple, Banana, Kiwi";
console.log(text.length)

console.log(text.slice(7, 13));
console.log(text.slice(-12, -6));

// The difference is that start and end values less than 0 are treated as 0 in substring().
console.log(text.substring(1, 13));
//The difference is that the second parameter specifies the length of the extracted part
console.log(text.substr(7, 6));



let str="Please visit  The Google and The Google SErvices!"
console.log(str.replace("Google", "Microsoft"))
console.log(str.replace(/services/i, "products"))//for case insensitive
console.log(str.replace(/Google/g, "Microsoft"))//for all occurence
// console.log(str.replace(/the/g/i, "my"))//we cant use both error

// to replace all we can use like this 
let str1="had a good meal and good day";
console.log(str1.replaceAll("good","bad"));

let friend = "Naman"
name="Deva"
console.log(name.concat(" is a friend of ", friend, " Ok"))
let friend2 = "      Meena        "
console.log(friend2)
console.log(friend2.trim())
console.log(friend2.trimStart())
console.log(friend2.trimEnd())
let fr = "Raman" + "Shivika" + "Harry"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
fr[4]= "o" // This is not possible beacuse string are immutable
console.log(fr)
