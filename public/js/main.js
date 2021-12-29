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

$(document).ready(function () {
    $("#first-image").click(function () {
        let currentImage = $('#first-image')[0];
        let images = new Array(3);
        for (let i = 0; i < images.length; i++) {
            images[i] = new Image();
        }
        images[0].src = 'public/images/hafezieh.jpg';
        images[1].src = 'public/images/Shiraz1.jpg';
        images[2].src = 'public/images/Shiraz2.jpg';
        for (let i = 0; i < images.length; i++) {
            console.log(currentImage.src.includes(images[i].src));
            if (currentImage.src.includes(images[i].src)) {
                let index = (i + 1) % 3;
                $(this).fadeOut(1000);
                console.log(currentImage.src);
                currentImage = images[index];
                setTimeout(function () {
                    $('#first-image').attr("src", currentImage.src);
                }, 1000);
                $(this).fadeIn(1000);
                break;
            }
        }
    });
});


