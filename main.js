
const navbarToggle = document.querySelector(".toggle-btn");
const contactMe = document.querySelector(".contact-me");
const navLinks = document.querySelector(".nav__links");

const firstNavlink = document.querySelector(".nav__links");
const secondNavlink = document.querySelector(".nav__links");
const thirdNavlink = document.querySelector(".nav__links");
const contactMelink = document.querySelector(".nav__links");

const hy = document.querySelector(".hy");
const myName = document.querySelector(".myName");
const whatIdo = document.querySelector(".whatIdo");

const resumeSection = document.querySelector(".resume-section");
const resumeList = document.querySelector(".resumeList");
const resumeDetails = document.querySelector(".resume_details");

const contactSection = document.querySelector(".contact-section");
const moreAboutMe = document.querySelector(".moreAboutMe_section");
const aboutMe_img = document.querySelector(".aboutMe_img");
const textAboutMe = document.querySelector(".text-aboutMe");
const welcomeSection = document.querySelector("#welcome-section");
const welcome = document.querySelector(".welcome");
const main = document.querySelector(".main");

// const contactMe_mobile = document.querySelector('.contact-me mobile')
const burgerBars = document.querySelector(".burger-bars");
const screenWidth = window.innerWidth;
const screenHeight = `${screen.height}`;

const usrlang = navigator.language
|| navigator.userLanguage;
checkBrowserLanguage(usrlang)
// checking if all images in the DOM are loaded before calling resizeElements function
let imgList = document.images;
let len = imgList.length;
let imgCounter = 0;

[].forEach.call(imgList, function (img) {
  if (img.complete) {
    incrementImgCounter();
  }
  else {
    img.addEventListener('load', incrementImgCounter, false);
  }
});

function incrementImgCounter() {
  imgCounter++;
  if (imgCounter === len) {
    console.log('All images loaded!');
    responsiveElements(screenWidth);
    textAutoWriting()

  }
}

 // Displaying mobile design on the first loading

function checkBrowserLanguage(usrlang){
  	
if(usrlang.includes('fr')){
  console.log(
    "User's preferred language is: "
    + usrlang);
    [...document.querySelectorAll(".english")].forEach(element => {
      element.style.display="none"
    });
    
}else{
  console.log(
    "User's preferred language is not French ");
    [...document.querySelectorAll(".french")].forEach(element => {
      element.style.display="none"
    });
}

}
function adjustMainWelcomeResumeContactSections(screenWidth) {
  // Adjusting textAbout-Me top size
  let welcomeSIze = aboutMe_img.clientHeight.toString().concat("px");
  console.log("aboutMe_img.clientHeight 😻 "+aboutMe_img.clientHeight)
  welcome.style.height = welcomeSIze;
  
  console.log("adjustMainWelcomeResumeContactSections " + welcomeSIze+ "\nscreenWidth "+screenWidth);

  if (screenWidth < 700) {
    textAboutMe.style.top = welcomeSIze;
    moreAboutMe.style.top = (
      aboutMe_img.clientHeight + textAboutMe.clientHeight
    )
      .toString()
      .concat("px");

    const resumeTop =
      welcome.clientHeight +
      moreAboutMe.clientHeight +
      textAboutMe.clientHeight +
      20;

    resumeSection.style.top = resumeTop.toString().concat("px");
    resumeList.style.height = resumeDetails.clientHeight
      .toString()
      .concat("px");

    let contactTop = resumeTop + resumeSection.clientHeight + 20;

    contactSection.style.top = contactTop.toString().concat("px");

    let mainHeight = contactTop + contactSection.clientHeight + 20;

    console.log("screenWidth < 700px ");
    main.style.height = mainHeight.toString().concat("px");
  } else {
    
    console.log("screenWidth > 700px ");
    textAboutMe.style.top = "20px";

    textAboutMe.style.left = "0";
    moreAboutMe.style.top = aboutMe_img.clientHeight.toString().concat("px");

    const resumeTop = welcome.clientHeight + moreAboutMe.clientHeight + 20;

    resumeSection.style.top = resumeTop.toString().concat("px");
    resumeList.style.height = resumeDetails.clientHeight
      .toString()
      .concat("px");

    let contactTop = resumeTop + resumeSection.clientHeight + 20;

    contactSection.style.top = contactTop.toString().concat("px");

    let mainHeight = contactTop + contactSection.clientHeight + 20;

    console.log("mainHeight " + mainHeight);
    main.style.height = mainHeight.toString().concat("px");
  }
}

function responsiveElements(screenWidth) {
  adjustMainWelcomeResumeContactSections(screenWidth);
  console.log("adjustMainWelcomeResumeContactSections dans responsiveElements "+screenWidth);

  if (screenWidth < 400) {
    hy.style.fontSize = "7vw";
    myName.style.fontSize = "5.5vw";
    // whatIdo.style.fontSize = '15px'
  }

  if (screenWidth < 681) {
    navbarToggle.style.display = "flex";
    contactMe.style.display = "none";
    navLinks.style.display = "none";
  } else {
    navbarToggle.style.display = "none";
    contactMe.style.display = "flex";
    let contactME_mobile = document.querySelector("#contactME-mobile");
    console.log("type of contactME_mobile = " + contactME_mobile);
    if (contactME_mobile) {
      navLinks.removeChild(contactME_mobile); // remove contact-me button added
    }
    navLinks.style.display = "flex";
    navbarToggle.classList.remove("open");
    // contactMe_mobile.style.display = 'none'
  }
}

let menuOpen = false;
  window.addEventListener("resize", function () {
    responsiveElements(window.innerWidth);
  });


navbarToggle.addEventListener("click", () => {
  if (menuOpen === false) {
    navbarToggle.classList.add("open");
    menuOpen = true;
    console.log("menuOpen " + menuOpen);
    //mobile menu
    navLinks.style.display = "flex";
    navLinks.classList.remove("desactivate");
    navLinks.classList.add("active");

    // creating enchor element with class="contact-me" and id="contactME-mobile"
    let node = document.createElement("a");
    let textnode = document.createTextNode("Contact Me");
    node.appendChild(textnode);
    node.classList.add("contact-me"); // adding contact-me button on mobile menu sidebar
    node.setAttribute("id", "contactME-mobile");
    node.setAttribute("href", "#contact");
    navLinks.appendChild(node);

    // Add CloseSideBar Event in case of link clicking
    firstNavlink.addEventListener("click", closeSideBarMenu);
    secondNavlink.addEventListener("click", closeSideBarMenu);
    thirdNavlink.addEventListener("click", closeSideBarMenu);
    contactMe.addEventListener("click", closeSideBarMenu);
  } else {
    console.log("débogage ya kafou kafou");

    closeSideBarMenu();
  }
});

function closeSideBarMenu() {
  menuOpen = false;
  console.log("menuOpen else " + menuOpen);
  navbarToggle.classList.remove("open");

  navLinks.classList.remove("active");
  navLinks.classList.add("desactivate");
  let contactME_mobile = document.querySelector("#contactME-mobile");
  if (contactME_mobile) {
    navLinks.removeChild(contactME_mobile); // remove contact-me button added
    setTimeout(() => {
      console.log("C'est ici le");
      navLinks.style.display = "none";
    }, 800);
  }
}

/********************** text auto writing animation with GSAP******************/
function textAutoWriting(){

  const words = [
    "Francy Saintrick MALONGA",
    "A cross plateform developper",
    "Vue js/ Ionic-vue dev.",
    " Python (Django + DRF) dev ",
    "Teaching programming.",
  ];
  const wordsFrench = [
    "Francy Saintrick MALONGA",
    "Developpeur web",
    "Developpeur Vue js et Quasar",
    "Developpeur Python (Django)",
  ];
 
  let cursor = gsap.to(".cursor", {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
  }); // cursor animation for auto writting
  
  let textTL = gsap.timeline({ repeat: -1 }); // repat: -1 make the timeline repeating forever
  if (usrlang.includes('fr')) {
    console.log("usrLang "+ usrlang)
    wordsFrench.forEach((wordFrench) => {
      let tl = new gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(".text", { duration: 1, text: wordFrench }); // creating a timeline for each sentence for words table
      textTL.add(tl); // adding each timeline created to the globel timeline
    });
  } else {
    words.forEach((word) => {
      let tl = new gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(".text", { duration: 1, text: word }); // creating a timeline for each sentence for words table
      textTL.add(tl); // adding each timeline created to the globel timeline
    });  
  }

}

/***************** Onclick resume title element ************** */
initialiseResumeContentActive(screenWidth);

function makeProgressBarAnimation(index) {
  if (index === 2) {
    [...document.querySelectorAll(".progress_bar > div")].forEach((element) => {
      let i = 0;
      if (i == 0) {
        i = 1;

        let width = 1;

        setInterval(() => {
          if (width >= parseInt(element.children[0].textContent.slice(0, 2))) {
            clearInterval();
            i = 0;
          } else {
            width++;
            element.style.width = width + "%";
          }
        }, 0.01);
      }
    });
  }
}

function initialiseResumeContentActive(screenWidth) {
  if (screenWidth > 820) {
    console.log("initialiseResumeContentActive test 820"+ screenWidth);
    const lis = [...document.querySelectorAll(".resumeList > li")];
    lis.forEach((li) => {
      li.addEventListener("click", () => {
        let current = document.getElementsByClassName("tabActive");
        console.log("test 2 820");
        current[0].className = current[0].className.replace(" tabActive", "");
        li.className += " tabActive";

        const index = lis.indexOf(li);
        console.log("index of the cliqued zone is => " + index);
        let contentList = [
          ...document.querySelectorAll(".resume_details > div"),
        ]; // creating an array of all div child elements inside .resume_details div
        let currentContent = document.getElementsByClassName("contentActive");
        currentContent[0].className = currentContent[0].className.replace(
          " contentActive",
          ""
        );
        contentList[index].className += " contentActive";

        makeProgressBarAnimation(index);
        responsiveElements(screenWidth)
      });
    });
  } else {
    console.log("test -820");

    let lisTopNav = [...document.querySelectorAll(".topNav > li")];

    lisTopNav.forEach((li) => {
      li.addEventListener("click", () => {
        let current = document.getElementsByClassName("navActive");
        console.log("test 2 -820");
        // console.log("current Nav Active "+current[0].className)

        current[0].className = current[0].className.replace(" navActive", "");
        li.className += " navActive";

        const index = lisTopNav.indexOf(li);
        console.log("index of the cliqued zone is => " + index);
        let contentList = [
          ...document.querySelectorAll(".resume_details > div"),
        ]; // creating an array of all div child elements inside .resume_details div
        let currentContent = document.getElementsByClassName("contentActive");
        currentContent[0].className = currentContent[0].className.replace(
          " contentActive",
          ""
        );
        contentList[index].className += " contentActive";

        makeProgressBarAnimation(index);
        // adjusting position of the contactSection
        responsiveElements(screenWidth)
      });
    });
  }
}
const submit = document.getElementById('id')
let receiver = 'me'
let sender = 'my smtp connectedd email'
let token = 'my api token'
function sendEmail(){
  Email.send({
    SecureToken : token,
    To : receiver,
    From : sender,
    Subject : "Message from my portofolio",
    Body : "Name : "+ document.getElementById('nom').value + 
            "<br> Email : " + document.getElementById('mail').value +
            "<br> Numéro : " + document.getElementById('numero').value +
            "<br> Message : " + document.getElementById('commentaires').value
}).then(
  message => alert(message+" Message bien envoyé. Merci beaucoup 👏")
);
}

