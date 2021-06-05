const sm = window.document.getElementById("small")
//обращение к окну в котором находится документ, с котром мы находим нужный нам элемент по id, window. можно не писать
console.dir(sm)
const newDiv = document.createElement("div")
//newDiv.style.height = "50px"
//newDiv.style.backgroundColor = "black"
//newDiv.style.cssText = 'height: 50px; backgroundColor: black;'
sm.append(newDiv)

function onClickHandler(e) {
    e.stopPropagation()
    if (e.target.tagName === "BUTTON") {
        console.log(e.target.name)
    }
    //console.log(e)
    //alert("yo!")
}

sm.onclick = onClickHandler
//sm.onclick = null - отписаться от события
//document.body.onclick = onClickHandler
document.body.onclick = () => alert("yo!")

// e.currentTarget - элеиент , который вызвал обработчик в процессе всплытия
// e.target - элемент, который сгенерировал событие (первый получил клик)