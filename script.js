let entrancesFound = 0; 
const messages = [

    "YOU THINK YOU HAVE FOUND US...NOT YET.",

    "HMMMMMMMM...WE SEE YOU.",

    "YOU MIGHT BE WORTHY. KEEP SEARCHING.",

    "ARE YOU ONE OF US? OR ARE YOU ONLY CURIOUS?",

    `YOU ARE TRULY UNEMPLOYED.
    REGARDLESS OF WHETHER YOU ARE A MEMBER OF THE PANDIST CULT OR NOT...
    YOU HAVE SHOWN YOUR WORTH.
    JOIN US.
    OR...
    IF YOU ARE ALREADY ONE OF US...
    NO WORRIES. EITHER WAY...
    WELCOME HOME, COMRADE.
    WE HAVE BEEN EXPECTING YOU.`

];        
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
    
const found = {
    join: false,
    navbar: false,
    portrait: false,
    copyright: false,
    hoodies: false
};

function discover(trigger){

    if(found[trigger]) return;

    found[trigger] = true;

    const message =
        messages[entrancesFound];

    entrancesFound++;

    showMessage(message);

};

function showMessage(message){

    const screen =
        document.getElementById("glitchScreen");

    const text =
        document.getElementById("glitchText");

    screen.style.display = "flex";

    text.textContent = message;

    setTimeout(() => {

        screen.style.display = "none";

        if(entrancesFound === 5){

            window.location.href = "cult/";

        }

    },5000);

};
document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
});

const joinButton = document.getElementById("joinButton");
const navbarSecret = document.getElementById("navbarSecret");
const portrait = document.getElementById("aaravPortrait");
const copyrightSecret = document.getElementById("copyrightSecret");
const hoodieSecret = document.getElementById("hoodieSecret");

joinButton.addEventListener("click", () => {

    joinButton.classList.add("awaken");

    discover("join");

});
    
navbarSecret.addEventListener("click", () => {

    discover("navbar");

});

portrait.addEventListener("click", () => {

    discover("portrait");

});

copyrightSecret.addEventListener("click", () => {

    discover("copyright");

});

hoodieSecret.addEventListener("click", () => {

    discover("hoodies");

});

joinButton.addEventListener("click", () => {

    joinButton.classList.add("awaken");

    discover("join");

    setTimeout(() => {
        secretButton.style.pointerEvents = "auto";
    }, 800); 
});
