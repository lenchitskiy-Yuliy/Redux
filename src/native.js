import './styles.css'

const counter = document.querySelector('#counter')
const btnAdd = document.querySelector('#add')
const btnSub = document.querySelector('#sub')
const btnAsync = document.querySelector('#async')
const btnTheme = document.querySelector('#theme')

let state = 0

function render() {
    counter.textContent = state.toString()
}

btnAdd.addEventListener('click', () => {
    state++
    render()
})

btnSub.addEventListener('click', () => {
    state--
    render()
})

btnAsync.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    }, 2000)
})

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

render()