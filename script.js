let themeDots = document.getElementsByClassName('theme-dot')

// console.log(localStorage)
let theme = localStorage.getItem('theme')
console.log(theme)
if (theme == null) {
    changeTheme('light')
} else {
    changeTheme(theme)
}

for (i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        changeTheme(mode)
    })
}

function changeTheme(mode) {
    console.log(mode)
    newMode = mode == 'light' ? 'light.css' : 'dark.css'
    // console.log(`Changing theme to ${newMode}`)
    document.getElementById('theme-style').href = newMode

    localStorage.setItem('theme', mode)
    // onmousemove(mode)
}

onmousemove = function (e) {
    var theme = localStorage.getItem('theme')
    var posDark = Math.floor((Math.random() * 100) + 1);
    var posLight = Math.floor((Math.random() * 30) + 225);
    console.log('posLight', posLight)
    let top = document.getElementById('top')
    // console.log(Math.floor((Math.random() * 100)))

    var rgbLight = "rgba(" + posLight + ", " + 255 + ", " + 255 + ")"
    var rgbDark = "rgba(" + posDark + ", " + 0 + ", " + 0 + ")"

    if (theme == 'dark') {
        top.style.backgroundColor = rgbDark
    } else {
        top.style.backgroundColor = rgbLight
    }
}