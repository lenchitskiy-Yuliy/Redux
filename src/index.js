import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {decrement, increment, acyncIncrement, changeTheme} from './redux/actions'
import {rootReducer} from './redux/rootReducer'
import './styles.css'

const counter = document.querySelector('#counter')
const btnAdd = document.querySelector('#add')
const btnSub = document.querySelector('#sub')
const btnAsync = document.querySelector('#async')
const btnTheme = document.querySelector('#theme')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk, logger)
    )
)

btnAdd.addEventListener('click', () => {
    store.dispatch(increment())
})

btnSub.addEventListener('click', () => {
    store.dispatch(decrement())
})

btnAsync.addEventListener('click', () => {
    store.dispatch(acyncIncrement())
})

btnTheme.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
    store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
    const state = store.getState()

    counter.textContent = state.counter.toString()
    document.body.className = state.theme.value;

    [btnAdd, btnSub, btnAsync, btnTheme].forEach(btn => {
        btn.disabled = state.theme.disabled
    })
})

store.dispatch({type: 'INIT_APLICATION'})