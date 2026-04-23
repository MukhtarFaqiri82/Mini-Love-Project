
const noBtn = document.querySelector('button[name = "no"]')
const yesBtn = document.querySelector('button[name = "yes"]')
const body = document.querySelector("body")


noBtn.addEventListener("mouseover", () => {
    let top = Math.floor(Math.random() * 30)
    let left = Math.floor(Math.random() * 30)

    noBtn.style.top = `${top}vh`
    noBtn.style.left = `${left}vh`
})

yesBtn.addEventListener('click', () => {
    alert('It Is On The Verge Of Happening')
    setTimeout(() => {
        body.innerHTML = `<h1>❤I Love You❤</h1>`
        body.style.backgroundImage = "linear-gradient(45deg , rgb(209, 62, 86))"
    }, 2000);
})