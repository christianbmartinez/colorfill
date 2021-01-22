/*

Author: Christian B. Martinez

Website: www.christianbmartinez.com

Date: 12/29/20

Purpose: Create an app that visualizes and creates css hover animations and outputs code to user.

Features: Copy to clipboard, reset independent values, color picker, custom scrollbar and range sliders, css vars. Some support for other browsers besides chrome, not optimized for mobile.

License: You are free to use, edit, or build upon this code commercially under the premise you credit my name and website above. Ps- i'm looking to join a team. I can build more things like this. Hint hint! 

*/

var generatedText = document.getElementById('generated-text');
var wordInput = document.getElementById('word');
var word = wordInput.value;
var tagInput = document.getElementById('tag');
var tag = tagInput.value;
var colorInput = document.getElementById('color');
var color = colorInput.value;
var fillColorInput = document.getElementById('fill-color');
var fillColor = fillColorInput.value;
var cursorInput = document.getElementById('cursor');
var cursor = cursorInput.value;
var durationInput = document.getElementById('duration');
var duration = durationInput.value;
var durationOutput = document.getElementById('duration-output');
var timingInput = document.getElementById('timing');
var timing = timingInput.value;
var htmlOutput = document.getElementById('html-output');
var cssOutput = document.getElementById('css-output');
var outputContainer = document.querySelector('.output-container');
var positionOne = document.getElementById('position-one');
var getPositionOne = positionOne.value;
var positionOneOutput = document.getElementById('position-one-output');
var positionTwo = document.getElementById('position-two');
var getPositionTwo = positionTwo.value;
var positionTwoOutput = document.getElementById('position-two-output');
var positionThree = document.getElementById('position-three');
var axis = document.getElementById('axis');
var getAxis = axis.value;
var getPositionThree = positionThree.value;
var positionThreeOutput = document.getElementById('position-three-output');
var resetOne = document.getElementById('reset-one');
var resetTwo = document.getElementById('reset-two');
var resetThree = document.getElementById('reset-three');
var copy = document.getElementById('copy');

function copyToClipboard() {
    var range = document.createRange();
    range.selectNode(outputContainer);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

axis.onchange = () => {
    getAxis = axis.value;
    getAxis === 'X' ? 
        document.documentElement.style.setProperty('--position-one', 'translateX(' + getPositionOne + '%)') : document.documentElement.style.setProperty('--position-one', 'translateY(' + getPositionOne + '%)'); 
    render();
}

wordInput.onchange = () =>{
    word = wordInput.value;
    generatedText.innerHTML =     
    '<' + tag + ' class="text"' + '>' + '<span class="colorfill" data-content="' + word + 
    '" aria-hidden="true"></span>' + word + '<' + '/' + tag + '>';
    render();
}

tagInput.onchange = () => {
    outputContainer.classList.add('fade-out');
    tag = tagInput.value;
    generatedText.innerHTML =     
    '<' + tag + ' class="text"' + '>' + '<span class="colorfill" data-content="' + word + 
    '" aria-hidden="true"></span>' + word + '<' + '/' + tag + '>';
    render();
}

colorInput.onchange = () => {
    color = colorInput.value;
    document.documentElement.style.setProperty('--color', color);
    render();
}

fillColorInput.onchange = () =>{
    fillColor = fillColorInput.value;
    document.documentElement.style.setProperty('--fill-color', fillColor);
    render();
}

cursorInput.onchange = () =>{
    cursor = cursorInput.value;
    document.documentElement.style.setProperty('--cursor', cursor);
    render();
}

durationInput.onmouseup = () =>{
    duration = durationInput.value;
    document.documentElement.style.setProperty('--duration', duration + 's');   
    render();
}

durationInput.onmousemove = () =>{
    durationOutput.innerHTML = durationInput.value + 's';
}

positionOne.onclick = () => {
    resetOne.style.display = 'inline-block';
    resetOne.onclick = () =>{
        positionOne.value = -100;
        positionOneOutput.innerHTML = positionOne.value + '%';
        getPositionOne = positionOne.value;
        resetOne.style.display = 'none';
        getAxis === 'X' ? document.documentElement.style.setProperty('--position-one', 'translateX(' + getPositionOne + '%)') : document.documentElement.style.setProperty('--position-one', 'translateY(' + getPositionOne + '%)');
        render();
    }
    getPositionOne = positionOne.value;
    getAxis === 'X' ? document.documentElement.style.setProperty('--position-one', 'translateX(' + getPositionOne + '%)') : document.documentElement.style.setProperty('--position-one', 'translateY(' + getPositionOne + '%)');
    positionOneOutput.innerHTML = positionOne.value + '%';
    render();
}

positionTwo.onclick = () => {
    resetTwo.style.display = 'inline-block';
    resetTwo.onclick = () =>{
        positionTwo.value = 100;
        positionTwoOutput.innerHTML = positionTwo.value + '%';
        getPositionTwo = positionTwo.value;
        resetTwo.style.display = 'none';
        getAxis === 'X' ? document.documentElement.style.setProperty('--position-two', 'translateX(' + getPositionTwo + '%)') : document.documentElement.style.setProperty('--position-two', 'translateY(' + getPositionTwo + '%)');
        render();
    }
    getPositionTwo = positionTwo.value;
    getAxis === 'X' ? document.documentElement.style.setProperty('--position-two', 'translateX(' + getPositionTwo + '%)') : document.documentElement.style.setProperty('--position-two', 'translateY(' + getPositionTwo + '%)');
    positionTwoOutput.innerHTML = positionTwo.value + '%';
    render();
}

positionThree.onclick = () => {
    resetThree.style.display = 'inline-block';
    resetThree.onclick = () =>{
        positionThree.value = 0;
        positionThreeOutput.innerHTML = positionThree.value + '%';
        getPositionThree = positionThree.value;
        resetThree.style.display = 'none';
        getAxis === 'X' ? document.documentElement.style.setProperty('--position-three', 'translateX(' + getPositionThree + '%)') : document.documentElement.style.setProperty('--position-three', 'translateY(' + getPositionThree + '%)');
        render();
    }
    getPositionThree = positionThree.value;
    getAxis === 'X' ? document.documentElement.style.setProperty('--position-three', 'translateX(' + getPositionThree + '%)') : document.documentElement.style.setProperty('--position-three', 'translateY(' + getPositionThree + '%)');
    positionThreeOutput.innerHTML = positionThree.value + '%';
    render();
}


timingInput.onchange = () =>{
    timing = timingInput.value;
    document.documentElement.style.setProperty('--timing', timing);
    render();
}
    
 function render(){
    copy.innerHTML = 'Copy';
    outputContainer.classList.add('fade-in');
    outputContainer.style.display = 'block';
    copy.style.display = 'block';
    copy.onclick = function(){
        copyToClipboard();
        copy.innerHTML = 'Copied!';
    }
    cssOutput.innerHTML = 
    
    '/* Generated by colorfill.io */<br><br>' +
    
    `-- CSS -- <br><br>
      .text { <br>
        color: ` + color + `;<br>
        cursor: ` + cursor + `; <br>
        width: 100%;<br>
      }<br><br>
      
      span.colorfill {<br>
        position: absolute;<br>
        overflow: hidden;<br>
        transform: translate`+ getAxis +`(` + getPositionOne + `%);<br>
        transition: transform  ` + duration  + 's ' + timing + `;<br>
      }<br><br>
      `+ tag +`:hover span.colorfill {<br>
        transform: translate`+ getAxis +`(` + getPositionThree + `%);<br>
      }<br><br>
      
      span.colorfill::before { <br>
        display: inline-block;<br>
        color: ` + fillColor + `;<br>
        content: attr(data-content);<br>
        transform: translate`+ getAxis +`(` + getPositionTwo + `%);<br>
        transition: transform  ` + duration  + 's ' + timing + `;<br>
      }<br><br>
      
      `+ tag +`:hover span.colorfill::before {<br>
        transform: translate`+ getAxis +`(` + getPositionThree + `%);<br>
      }<br><br>
      
      -- HTML -- <br><br>`;

      htmlOutput.textContent = 
      '<' + tag + ' class="text"' + '>' + '<span class="colorfill" data-content="' + word + 
      '" aria-hidden="true"></span>' + word + '<' + '/' + tag + '>';
    }
