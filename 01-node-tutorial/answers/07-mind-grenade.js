const damage = Math.floor(Math.random() * 9) + 4
const frequency = 2

function damageValue() {
    console.log(`The damage dealt is per second: ${damage + frequency}`)
}

damageValue()