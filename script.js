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

    if(found[trigger]){

        return;

    }


    found[trigger] = true;


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


    text.innerHTML = `

        <div class="cultGlitch">

            <div class="cultGlitchTitle">
                PANDIST CULT
            </div>


            <div class="cultGlitchClassification">
                CLASSIFICATION: RESTRICTED
            </div>


            <div class="cultGlitchLine"></div>


            <div class="cultGlitchOptions">

                <span>THE ORDER</span>

                <span>THE FOUNDER</span>

                <span>THE DOCTRINE</span>

                <span>THE RITES</span>

                <span>THE ARCHIVE</span>

            </div>


            <div class="cultGlitchMessage">

                YOU HAVE CROSSED<br>
                THE BARRIER.

            </div>


            <div class="cultGlitchWarning">

                YOU HAVE BEEN EXPECTED.

            </div>

        </div>

    `;


    setTimeout(() => {

        window.location.href = "cult/";

    }, 6500);

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
