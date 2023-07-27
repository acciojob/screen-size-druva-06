const sizeInfoDiv = document.getElementById('sizeInfo')

const resizeHeader = sizeInfoDiv.appendChild(document.createElement('h1'))

let x = innerWidth
let y = innerHeight
resizeHeader.innerHTML = `Width: ${x} and Height: ${y}`

window.addEventListener('resize',() => {
    x = innerWidth
    y = innerHeight
    resizeHeader.innerHTML = `Width: ${x} and Height: ${y}`
})

