


// rendor windows



const arrForPosY = [0.2, 3, 5.8, 8.6, 11.4, 14.2]

const posAbsolute = [  
    {x: 19.6,y: 60}, 
    {x: 32.0,y: 80},
    {x: 6.2,y: 75},
    {x: 8.5,y: 68.9},
    {x: 9.6,y: 53}, //+
    {x: 28.2,y: 48},
    {x: 35.1,y: 56},//+
    {x: 51.2,y: 48},// +
    {x: 72.2,y: 41},//+
]



// console.log(arrForModal)



for (let i = 0; i < arrForModal.length; i++) {
    let currentCuntent
    for (let k = 0; k < arrForModal[i].length; k++) {
        var heightAuto;


        switch (arrForModal[i].length) {
            case 4:
                heightAuto = 3
                break;

            case 5:
                heightAuto = 5
                break;

            case 5:
                heightAuto = 7
                break;


                default:
                    heightAuto = 7
                    
                    break;


        }


        currentCuntent += `  
    <g id="_1239615184" style="transform: translate(-0.6%, ${arrForPosY[k]}%);">
    <g style="clip-path:url(#id0)">
        <image xmlns:xlink="http://www.w3.org/1999/xlink" x="225.95" y="766.63" width="806.4" height="469.33" xlink:href="componentWindow/${arrForModal[i][k].icoUrl}.svg"/>
    </g>
    <text x="985.18" y="1187.06" class="fil1asdgfsgfdgsdgsgsdgsdg fnt0asgfhtyukuuisdgfasdqw">${arrForModal[i][k].nameCategory} - ${arrForModal[i][k].num}</text>
    <rect class="fil2asfgasdgsdfgsdgadgsdgsdgsdg" x="856.46" y="730.32" width="1067.93" height="254"/>
    </g>
    `
    }

    var item = `
    <g xmlns="http://www.w3.org/2000/svg" class="REgionTextComponent" id="sloiBox1" style="&#10;    transform: translate(${posAbsolute[i].x}%, ${posAbsolute[i].y}%) scale(0.6);&#10;">
    <polygon style="transform: scaleX(1.4) scaleY(1.${heightAuto}) translate(-100px, -400px);" class="fil0asdgdfhgsdgassvbvtrbt" points="9.81,3105.51 5380.85,3105.51 5380.85,724.26 856.47,724.26 406.68,36.34 406.68,724.26 9.81,724.26 "/>
    ${currentCuntent}
    </g>`


    document.getElementById("renderWindows").innerHTML += item
}

currentCuntent = null










for (let i = 0; i < document.querySelectorAll("#MaskMap > g").length; i++) {
    document.querySelectorAll("#MaskMap > g")[i].addEventListener("mouseover", function () {
        document.querySelectorAll("#indexMap > g")[i].classList.add("boxACative")
        document.getElementsByClassName("REgionTextComponent")[i]? document.getElementsByClassName("REgionTextComponent")[i].classList.add("activBox") : ";"
    })

    document.querySelectorAll("#MaskMap > g")[i].addEventListener("mouseout", function () {
        document.querySelectorAll("#indexMap > g")[i].classList.remove("boxACative")
        document.getElementsByClassName("REgionTextComponent")[i]? document.getElementsByClassName("REgionTextComponent")[i].classList.remove("activBox") : ";"
    })



}