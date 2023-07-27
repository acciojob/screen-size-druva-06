const resizeHeader = document.getElementsByTagName('h1')[0]

let x = innerWidth
let y = innerHeight
resizeHeader.innerHTML = `Width: ${x} and Height: ${y}`

window.addEventListener('resize',() => {
    let x = innerWidth
    let y = innerHeight
    resizeHeader.innerHTML = `Width: ${x} and Height: ${y}`
})

