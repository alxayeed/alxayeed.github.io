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
}