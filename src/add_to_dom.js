

function addToDom(tagName, text){
    const newElement = document.createElement(tagName);

    newElement.innerText = text;

    const root = document.getElementById('root');

    root.appendChild(newElement);
}

export default addToDom;
