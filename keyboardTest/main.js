const typeKB = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6',
'Digit7', 'Digit8' , 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', '', 'Tab', 'KeyQ', 
'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft',
'BracketRight', 'Backslash', '', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 
'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', '', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 
'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', '', 'ControlLeft', 
'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'menu', 'ControlRight'];

function highlightD(keyInput, keyHistory) {
    document.querySelector("div.key:nth-child("+ keyInput +")").style.backgroundColor = "#D6D6D6";
    document.querySelector("div.key:nth-child("+ keyInput +")").style.color = "#212225";
    inputHistory(keyHistory);
}

function highlightU(keyInput) {
    document.querySelector("div.key:nth-child("+ keyInput +")").style.backgroundColor = "#212225";
    document.querySelector("div.key:nth-child("+ keyInput +")").style.color = "whitesmoke";
}


function getElHistory(__get) {
    return document.querySelector("div.inputHistory>div:nth-child(" + __get + ")");
}

function inputHistory(keyHistory) { 
    
    for (let i = 5; i >= 2; i--) {
        getElHistory(i).textContent = getElHistory(i-1).textContent;       
    }
    getElHistory(1).textContent = keyHistory; 
}


let stopKey = "event.code == 'Tab' || event.code == 'MetaLeft' || event.code =='AltLeft' || event.code =='AltRight'";

addEventListener('keydown', (event) => {
    if (stopKey)
        event.preventDefault();
    for (let i = 0; i <= typeKB.length; i++) {
        if (typeKB[i] == event.code)
            highlightD(i+1, event.code)}});
addEventListener('keyup', (event) => {
    for (let i = 0; i <= typeKB.length; i++) {
        if (typeKB[i] == event.code)
            highlightU(i+1)}});
