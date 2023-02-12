var btnAddItem = document.querySelector('.btnAddItem') 
var inputNewTask = document.querySelector('.enterTask input')
var btnClearItems = document.querySelector('.btnClearItems')


btnAddItem.addEventListener('click', ()=>{
    var newTaskText = inputNewTask.value
    var task = `<div class="task"><h2>${newTaskText}</h2><div class="taskImg"><img src="галочка.png" alt=""><img src="крестик.png" alt=""></div></div>`
    btnClearItems.insertAdjacentHTML('beforebegin', task)
    inputNewTask.value = ''
    addActionForIcon()
})

btnClearItems.addEventListener('click', ()=>{
    let tasks = document.querySelectorAll('.task')
    tasks.forEach(el=>{
        el.remove()
    })
})

function addActionForIcon() {
    let imgCross = document.querySelectorAll("img[src='крестик.png'")
    imgCross.forEach(element => {
            element.addEventListener('click', event =>{
            event.target.parentNode.parentNode.remove()
        }) 
    })
    let imgTick = document.querySelectorAll("img[src='галочка.png'")
    imgTick.forEach(element => {
        element.addEventListener('click', event =>{
        event.target.parentNode.parentNode.querySelector('h2').style.cssText = 'font-weight: bold; color: #1CA600;'
        }) 
    })
}