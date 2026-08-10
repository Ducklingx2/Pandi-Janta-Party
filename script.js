const entranceSounds = [

    document.getElementById("entranceSound1"),
    document.getElementById("entranceSound2"),
    document.getElementById("entranceSound3"),
    document.getElementById("entranceSound4")
];


// ==========================================
// SCROLL FADE
// ==========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});


document
    .querySelectorAll(".fade")
    .forEach(element => {

        observer.observe(element);

    });



// ==========================================
// SECRET ENTRANCES
// ==========================================

const messages = [

    "YOU THINK YOU HAVE FOUND US... NOT YET.",

    "HMMMMMMMM... WE SEE YOU.",

    "YOU MIGHT BE WORTHY. KEEP SEARCHING.",

    "ARE YOU ONE OF US? OR ARE YOU ONLY CURIOUS?",

];


const found = {

    join:false,

    navbar:false,

    portrait:false,

    copyright:false,

    hoodies:false

};


let entrancesFound = 0;



// ==========================================
// ELEMENTS
// ==========================================

const joinButton =
    document.getElementById("joinButton");


const secretButton =
    document.getElementById("secretButton");


const navbarSecret =
    document.getElementById("navbarSecret");


const portrait =
    document.getElementById("aaravPortrait");


const copyrightSecret =
    document.getElementById("copyrightSecret");


const hoodieSecret =
    document.getElementById("hoodieSecret");



// ==========================================
// DISCOVER ENTRANCE
// ==========================================

function discover(trigger){

    if(found[trigger]) return;

    found[trigger] = true;


    // Sound is based on discovery order
    const sound =
        entranceSounds[
            entrancesFound % entranceSounds.length
        ];

    sound.currentTime = 0;
    sound.volume = 0.45;

    sound.play().catch(() => {});


    // Message is also based on discovery order
    const message =
        messages[entrancesFound];

    entrancesFound++;

    showMessage(message);

}


// ==========================================
// SHOW MESSAGE
// ==========================================

function showMessage(message){

    const screen =
        document.getElementById("glitchScreen");

    const text =
        document.getElementById("glitchText");


    // ==========================================
    // NORMAL ENTRANCES
    // ==========================================

    if(entrancesFound < 5){

        screen.classList.remove("cultReveal");

        text.textContent = message;

        screen.style.display = "flex";


        setTimeout(() => {

            screen.style.display = "none";


        }, 5000);


        return;

    }


    // ==========================================
    // FINAL ENTRANCE
    // ==========================================

    screen.classList.add("cultReveal");

    screen.style.display = "flex";

    setTimeout(() => {

        window.location.href = "cult/";

    }, 500);

}


// ==========================================
// ENTRANCE #1
// JOIN THE MOVEMENT
// ==========================================

joinButton.addEventListener("click", () => {

    console.log("JTM entrance discovered.");


    joinButton.classList.add("awaken");


    discover("join");


    setTimeout(() => {

        secretButton.classList.add("revealed");

    },800);

});



// ==========================================
// SECRET AREA UNDER JTM
// ==========================================

secretButton.addEventListener("click", () => {

    console.log("Hidden JTM area clicked.");

});



// ==========================================
// ENTRANCE #2
// NAVBAR
// ==========================================

navbarSecret.addEventListener("click", () => {

    discover("navbar");

});



// ==========================================
// ENTRANCE #3
// PORTRAIT
// ==========================================

portrait.addEventListener("click", () => {

    discover("portrait");

});



// ==========================================
// ENTRANCE #4
// COPYRIGHT
// ==========================================

copyrightSecret.addEventListener("click", () => {

    discover("copyright");

});



// ==========================================
// ENTRANCE #5
// HOODIE
// ==========================================

hoodieSecret.addEventListener("click", () => {

    discover("hoodies");

});
