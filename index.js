// code for getting the numbers on both score counters for home and guest
let guestScoreCounter = document.getElementById("guest-score")
let homeScoreCounter = document.getElementById("home-score")
// code that stores the score for HOME and GUEST
let homeScoreValue = 0
let guestScoreValue = 0

// code for incrementing score
function incrementHome(homeScoreIncrease) {
    /* homeScoreIncrease (the number we add to homeScoreValue, which stores how many points HOME has,) is determined by the number inside the parentheses in incrementHome(x). this also goes for guestScoreIncrease. */
    homeScoreValue += homeScoreIncrease
    homeScoreCounter.textContent = homeScoreValue
}

function incrementGuest(guestScoreIncrease){
    guestScoreValue += guestScoreIncrease
    guestScoreCounter.textContent = guestScoreValue
}

function newgame() {
    homeScoreValue = 0
    guestScoreValue = 0
    guestScoreCounter.textContent = 0
    homeScoreCounter.textContent = 0
}