$(document).ready(onReady);

let playerAP = 100
let fungusHP = 100



// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log('ready')

    $('.arcane-scepter').on('click', arcaneScepter);
    $('.entangle').on('click', entangle);
    $('.dragon-blade').on('click', dragonBlade);
    $('.star-fire').on('click', starFire);
    
    setInterval(fungusHealthGain, 1000)
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function fungusHealthGain() {
    if (fungusHP < 50) {
        fungusHP += 1;
        render();
    }
}

function arcaneScepter(event){
    event.preventDefault()
    console.log('inside arcaneScepter')
        playerAP -= 12
        fungusHP -= 14
    console.log("playerAP=", playerAP, "fungusHP=", fungusHP)
    render()
}

function entangle(event){
    event.preventDefault()
    console.log('inside entangle')
        playerAP -= 23
        fungusHP -= 9
    console.log("playerAP=", playerAP, "fungusHP=", fungusHP)
    render()
}

function dragonBlade(event){
    event.preventDefault()
    console.log('inside dragonBlade')
        playerAP -= 38
        fungusHP -= 47
    console.log("playerAP=", playerAP, "fungusHP=", fungusHP)
    render()
}

function starFire(event){
    event.preventDefault()
    console.log('inside starFire')
        playerAP -= 33
        fungusHP -= 25
    console.log("playerAP=", playerAP, "fungusHP=", fungusHP)
    render()
}

function render(){
    if (playerAP <= 0){
        playerAP = 0
        console.log('player out of AP')
        $('.freaky-fungus').toggleClass("walk jump")
        $('.arcane-scepter').prop('disabled', true)
        $('.entangle').prop('disabled', true)
        $('.dragon-blade').prop('disabled', true)
        $('.star-fire').prop('disabled', true)
        // disable all buttons
    }
    if (fungusHP <= 0){
        fungusHP = 0
        console.log('player out of AP')
        $('.freaky-fungus').toggleClass("walk dead")
    }
    $('.ap-text').empty()
    $('#ap-meter').val(playerAP)
    $('.ap-text').text(playerAP)
    
    $('.hp-text').empty()
    $('#hp-meter').val(fungusHP)
    $('.hp-text').text(fungusHP)
}