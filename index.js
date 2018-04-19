function scrollFn(section) {
    section.scrollIntoView()
}

function setBackgroundFn(color){
    document.body.style.backgroundColor = color
}

let color = ''

function pinkOrangeFn(){
    color = color == 'pink' && color !== '' ? 'orange' : 'pink'
    let text = color == 'pink' ? 'orange' : 'pink'
    document.getElementById('pinkOrange').firstChild.data = 'Click for ' + text + '!';
    return document.body.style.backgroundColor = color
}

function input(){
    let userInput = document.getElementById('input').value
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput));
    document.getElementById('list').appendChild(li);
}

function remove(element){
    element.parentNode.removeChild(element)
}

function highlightElement(element){
    element.parentNode.childNodes.forEach((c) => {
        if(c.style)
            c.style.backgroundColor = 'lightgray'
    })

    element.style.backgroundColor = 'yellow'
}