// ==========================================
// INTRO SEQUENCE
// ==========================================

const introScreen =
    document.getElementById("introScreen");

const introText =
    document.getElementById("introText");

const cultInterface =
    document.getElementById("cultInterface");

const lastMessage = `YOU ARE TRULY UNEMPLOYED.
REGARDLESS OF WHETHER YOU ARE A MEMBER OF THE PANDIST CULT OR NOT...
YOU HAVE SHOWN YOUR WORTH.
JOIN US.
OR...
IF YOU ARE ALREADY ONE OF US...
NO WORRIES. EITHER WAY...
WELCOME HOME, COMRADE.
WE HAVE BEEN EXPECTING YOU.`

const introMessages = [

    "BARRIER BREACHED.",

    "IDENTITY: UNKNOWN",

    "CURSED ENERGY: DETECTED",

    "NETWORK CONNECTION ESTABLISHED.",

    "YOU HAVE ENTERED PANDIST TERRITORY."

];


let introIndex = 0;



function showIntroMessage(){

    if(introIndex >= introMessages.length){

        finishIntro();

        return;

    }

    introText.textContent = 
        lastMessage;
    introText.textContent =
        introMessages[introIndex];


    introText.style.opacity = "0";


    setTimeout(() => {

        introText.style.opacity = "1";

    },100);


    setTimeout(() => {

        introText.style.opacity = "0";

    },1500);


    setTimeout(() => {

        introIndex++;

        showIntroMessage();

    },2000);

}



function finishIntro(){

    introText.textContent =
        "WELCOME HOME, COMRADE.";


    introText.style.opacity = "1";


    setTimeout(() => {

        introScreen.style.opacity = "0";


        setTimeout(() => {

            introScreen.style.display = "none";

            cultInterface.classList.add("visible");

        },1000);

    },1800);

}



introScreen.style.transition =
    "opacity 1s ease";


introText.style.transition =
    "opacity .4s ease";


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



function openPage(pageID){

    pages.forEach(page => {

        page.classList.remove("activePage");

    });


    navButtons.forEach(button => {

        button.classList.remove("active");

    });


    const target =
        document.getElementById(pageID);


    if(!target){

        return;

    }


    target.classList.add("activePage");


    const matchingButton =
        document.querySelector(
            `.navButton[data-page="${pageID}"]`
        );


    if(matchingButton){

        matchingButton.classList.add("active");

    }


    pageTitle.textContent =
        pageID
            .replace("-", " ")
            .toUpperCase();


    window.scrollTo({

        top:0,

        behavior:"smooth"

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
