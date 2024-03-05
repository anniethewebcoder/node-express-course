const { writeFile, readFile } = require("fs").promises

const writer = async () => {
    //writes three lines to temp.txt
    const first = await writeFile('temp.txt')
}