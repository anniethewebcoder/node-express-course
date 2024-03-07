const { writeFile, readFile } = require("fs").promises

const writer = async () => {
    try {
        //writes three lines to temp.txt
        const line_one = 'Alex loves Complete Breakfast'
        const line_two = 'Alex also loves Salmon Dinner'
        const line_three = 'You\'ll know if he loves it when he say, "Hey, Awesome! I love this stuff!"'


        await writeFile("temp.txt", `${line_one}\n${line_two}\n${line_three}`, { flag: 'a'} )
    

    } catch (err) {
        console.log(err)
    }
}

writer()

const reader = async () => {
    try {
        //read files
        const text = await readFile('temp.txt', 'utf8')
        console.log(text)
    } catch (err) {
        console.log(err)
    }
}

reader()