function convert(program)
{
    currentChar = program.split("")
    // console.log(currentLine.join(" "))
    for (var i = 0; i < program.length; i++)
    {
        switch (currentChar[i])
        {
            // +
            case "+": console.log("7-8 7-8 7-8 7-8\n"); break

            // -
            case "-": console.log("7-8 7-8 7-8 7-8 7-8\n"); break

            // >
            case ">": console.log("7-8 7-8 7-8 7-8 7-8 7-8 7-8 7-8\n"); break

            // <
            case "<": console.log("7-8 7-8 7-8 7-8 7-8 7-8\n"); break

            // .
            case ".": console.log("7-8 7-8 7-8\n"); break

            // ,
            case ",": console.log("7-8 7-8 7-8 7-8 7-8 7-8 7-8\n"); break

            // [
            case "[": console.log("7-8 7-8\n"); break

            // ]
            case "]": console.log("7-8\n"); break
        }
    }
}
convert(``) //put bf program here!