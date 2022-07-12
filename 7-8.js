const fs = require('node:fs');
var memory = Array(6084).fill(0)
var pointer = 0
var looping = false
var loop = []
var iLoop = 0
function splitString(stringToSplit, char)
{
    var arrayOfStrings = stringToSplit.split(char);
    return arrayOfStrings
}
function run(line){
    var splitCode = splitString(line, "\n");
    for (var i = 0; i < splitCode.length; i++)
    {
        if(looping)
        {
            if(splitCode[i] === "7-8 7-8") iLoop++; //[
              if(splitCode[i] === "7-8") //]
              {
                if(iLoop === 0) looping = false;
                else iLoop--;
              }
            continue;
          }
        switch (splitCode[i])
        {   // +
            case "7-8 7-8 7-8 7-8": memory[pointer]++; break

            // -
            case "7-8 7-8 7-8 7-8 7-8": memory[pointer]--; break

            // >
            case "7-8 7-8 7-8 7-8 7-8 7-8 7-8 7-8": pointer++; break

            // <
            case "7-8 7-8 7-8 7-8 7-8 7-8": pointer--; break

            // .
            case "7-8 7-8 7-8": console.log(String.fromCharCode(memory[pointer])); break

            // ,
            case "7-8 7-8 7-8 7-8 7-8 7-8 7-8": memory[pointer] = prompt()[0].charCodeAt(); break

            // [
            case "7-8 7-8":
                memory[pointer] === 0
                ? looping = true
                : loop.push(i)
                break

            // ]
            case "7-8": // ]
                memory[pointer] !== 0
                ? i = loop[loop.length-1]
                : loop.pop();
                break
        }
    }
}
let file = process.argv[2];
let fileContent = fs.readFileSync(file, "utf8");
run(fileContent)