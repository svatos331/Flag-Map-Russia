
let countWord = 300
for (let i = 0; i < document.getElementsByClassName('buttonLinkOpen').length; i++) {
    let spanEl;
    
    for (let z = 0; z < document.getElementsByClassName('buttonLinkOpen')[i].parentElement.children[1].innerText.length; z++) {
        if(z>= countWord){
            spanEl += document.getElementsByClassName('buttonLinkOpen')[i].parentElement.children[1].innerText[z]
        }  
    }
    document.getElementsByClassName('buttonLinkOpen')[i].parentElement.children[1].innerHTML += '<span>'+spanEl+'</span>'

    // document.getElementsByClassName('buttonLinkOpen')[i].addEventListener('click', function(){
    //     console.log(this.parentElement.children[1])
    // })
}
 