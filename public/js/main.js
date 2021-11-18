function getComplementaryColor(color) {
    let c = color.toString();
    c = c.split(",");
    var colors = [];
    for (var i = 0; i < c.length; i++) {
        colors[i] = c[i].match(/(\d+)/);
    }

    const compColors = [];
    for (var i = 0; i < 3; i++) {
        compColors[i] = (255 - parseInt(colors[i])).toString(16);
    }
    let result = "#";
    result += compColors[0].concat(compColors[1], compColors[2]);
    return result;
}


function childNodes(node) {
    var allEl = node.getElementsByTagName("*");
    for (var i = 0; i < allEl.length; i++) {
        if (allEl[i].hasChildNodes()) {
            childNodes(allEl[i]);
        } else {
           // changeMode1(allEl[i]);
        }
    }
}

function changeMode1(element) {
    var style = window.getComputedStyle(element, "");
    var textColor = style.getPropertyValue("color");
    var itemColor = style.getPropertyValue("background-color");
    var color = getComplementaryColor(itemColor);
    element.style.setProperty('color', getComplementaryColor(textColor), 'important');
    element.style.setProperty('background-color', color);
}

function changeMode() {
    changeMode1(document.body);
    childNodes(document.body);
    if ((window.getComputedStyle(document.body, "").getPropertyValue("background-color").toString()).includes("0")) {
        document.getElementById("change-mode").className = "fa fa-sun";
        document.getElementsByClassName("main-container")[0].style.border = "1px solid white";
    } else {
        document.getElementById("change-mode").className = "fa fa-moon";
        document.getElementsByClassName("main-container")[0].style.border = "1px solid black";
    }
}