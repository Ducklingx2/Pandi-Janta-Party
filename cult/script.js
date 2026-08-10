// ==========================================
// INTRO SEQUENCE
// ==========================================

const ominousSound =
    document.getElementById("ominousSound");

const introScreen =
    document.getElementById("introScreen");

const introText =
    document.getElementById("introText");

const cultInterface =
    document.getElementById("cultInterface");


// ==========================================
// FINAL MESSAGE FROM THE FIVE ENTRANCES
// ==========================================

const introMessages = [

    "YOU ARE TRULY UNEMPLOYED.",

    "REGARDLESS OF WHETHER YOU ARE A MEMBER OF THE PANDIST CULT OR NOT...",

    "YOU HAVE SHOWN YOUR WORTH.",

    "JOIN US.",

    "OR...",

    "IF YOU ARE ALREADY ONE OF US...",

    "NO WORRIES. EITHER WAY...",

    "WELCOME HOME, COMRADE.",

    "WE HAVE BEEN EXPECTING YOU."

];


// ==========================================
// CULT INTRO
// ==========================================

const endMessages = [

    "BARRIER BREACHED.",

    "NETWORK CONNECTION ESTABLISHED."

];

let introIndex = 0;


// ==========================================
// SOUND
// ==========================================

if (ominousSound) {

    ominousSound.volume = 0.35;

}


// ==========================================
// SHOW INTRO MESSAGE
// ==========================================

function showIntroMessage() {

    if (introIndex >= introMessages.length) {

        finishIntro();

        return;

    }


    introText.style.opacity = "0";


    setTimeout(() => {

        introText.textContent =
            introMessages[introIndex];

        introText.style.opacity = "1";

    }, 300);


    setTimeout(() => {

        introText.style.opacity = "0";

    }, 1700);


    setTimeout(() => {

        introIndex++;

        showIntroMessage();

    }, 2200);

}


// ==========================================
// FINISH INTRO
// ==========================================

function finishIntro() {

    let lineIndex = 0;


    function showNextLine() {

        if (lineIndex >= endMessages.length) {

            setTimeout(() => {

                introScreen.style.opacity = "0";


                setTimeout(() => {

                    introScreen.style.display = "none";

                    cultInterface.classList.add("visible");

                }, 1000);

            }, 2000);

            return;

        }


        introText.style.opacity = "0";


        setTimeout(() => {

            introText.textContent =
                endMessages[lineIndex];

            introText.style.opacity = "1";

            lineIndex++;

        }, 300);


        setTimeout(() => {

            showNextLine();

        }, 1800);

    }


    showNextLine();

}


// ==========================================
// START INTRO
// ==========================================

introScreen.style.transition =
    "opacity 1s ease";

introText.style.transition =
    "opacity .4s ease";


// Start ambience

if (ominousSound) {

    ominousSound.play().catch(() => {

        console.log(
            "Autoplay blocked. Sound will start after interaction."
        );

    });

}


// Fallback for browser autoplay restrictions

document.addEventListener("click", () => {

    if (!ominousSound) return;

    if (ominousSound.paused) {

        ominousSound.play().catch(() => {});

    }

}, { once: true });


showIntroMessage();


// ==========================================
// NAVIGATION
// ==========================================

const navButtons =
    document.querySelectorAll(".navButton");

const archiveCards =
    document.querySelectorAll(".archiveCard");

const pages =
    document.querySelectorAll(".page");

const pageTitle =
    document.getElementById("pageTitle");


// ==========================================
// OPEN PAGE
// ==========================================

function openPage(pageID) {

    pages.forEach(page => {

        page.classList.remove("activePage");

    });


    navButtons.forEach(button => {

        button.classList.remove("active");

    });


    const target =
        document.getElementById(pageID);


    if (!target) {

        return;

    }


    target.classList.add("activePage");


    const matchingButton =
        document.querySelector(
            `.navButton[data-page="${pageID}"]`
        );


    if (matchingButton) {

        matchingButton.classList.add("active");

    }


    if (pageTitle) {

        pageTitle.textContent =
            pageID
                .replace("-", " ")
                .toUpperCase();

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ==========================================
// SIDEBAR BUTTONS
// ==========================================

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const page =
            button.dataset.page;

        openPage(page);

    });

});


// ==========================================
// ARCHIVE CARDS
// ==========================================

archiveCards.forEach(card => {

    card.addEventListener("click", () => {

        const page =
            card.dataset.page;

        openPage(page);

    });

});
