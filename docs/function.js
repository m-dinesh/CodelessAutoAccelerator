// Defined Functions

// $(".carousel").on("touchstart", function(event){
//     var xClick = event.originalEvent.touches[0].pageX;
// $(this).one("touchmove", function(event){
//     var xMove = event.originalEvent.touches[0].pageX;
//     if( Math.floor(xClick - xMove) > 5 ){
//         $(this).carousel('next');
//     }
//     else if( Math.floor(xClick - xMove) < -5 ){
//         $(this).carousel('prev');
//     }
// });
// $(".carousel").on("touchend", function(){
//         $(this).off("touchmove");
// });
// });


// Preloading SVG
setTimeout(function(){   
$(document).ready(function() {
    //Preloader
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
 });
}, 400); // Preload SVG delay time

// Delay for Loading Html
$(document).ready(function() {
    $("#html").delay(4000);
    $("html").delay(4000);
    $("#mybody").delay(4000);
});

 //Set Default Zoom Size


// get height of input box

var isMobile = false;
var hambugerOn = false;

function testfn()
{
    console.log("jjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkksadf");
}


document.addEventListener("DOMContentLoaded", function() {
    orientationDetectFunction();
  });

window.addEventListener("orientationchange", function() {
    orientationChangeDetect();
  });

function orientationDetectFunction()
{
    if (window.innerHeight > window.innerWidth*0.8)   // Some kind of potrait mode 
    {
        // alert("Device is in Potrait mode, Please change it to landscape mode");
        isMobile  = true;
        document.getElementById("modules_tspan_head2").setAttribute('x',260);
        // document.getElementById("modules_tspan_head1").setAttribute('x',289);
        
    }   

    else{
        isMobile = false;
    }

    
}

function orientationChangeDetect()
{
    if(window.innerHeight <  window.innerWidth*0.8) {
        // alert("Device is in Potrait mode, Please change it to landscape mode");
        sectionOneOptions = {
            rootMargin: "-200px 0px 0px 0px"
        };
        isMobile  = true;
    }
    else {
        isMobile = false;
       sectionOneOptions = {
            rootMargin: "-200px 0px 0px 0px"
        };
    }
}

var ModuletimeDelay = 7000;
function loadMore() {
    window.setTimeout( function() { 
        document.getElementById("hidden").style.display = "block";
        document.getElementById("hidden").style.opacity = 1; 
        document.getElementById("btnLoadMore").style.display = "none";
        document.getElementById("btnShowLess").style.display = "flex";
    
    } , 100 );

}

function showLess() {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("btnLoadMore").style.display = "flex";
    document.getElementById("btnShowLess").style.display = "none";
}

function learnMore() {
    document.getElementById("sec2-content1").style.display = "none";
    document.getElementById("sec2-content2").style.display = "flex";
}

function mainContent() {
    document.getElementById("sec2-content1").style.display = "flex";
    document.getElementById("sec2-content2").style.display = "none";
}

//regex for email validation

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    

function sendEmail() {
    var name = document.getElementById("name").value;
    var mailId = document.getElementById("mailId").value;
    var phoneNumber = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("msg").value;
    var policy = document.getElementById("policy").checked;

    var response = grecaptcha.getResponse();


    var sendParametersValidation = true;  // responsible for checks on all fields of input from user. 

    // console.log("hjsdffffffffff");

    if(!validateEmail(mailId) || !mailId.length || mailId.length>108) 
    {
        if(name.length > 108)
        {
            console.log("Mail ID  Length Greater than expected");
            document.getElementById("mailId").placeholder ="e-mail id should be less than 108 charecters";
        }
        else
        {
            console.log("Invalid Email if provided");
            document.getElementById("mailId").placeholder ="invalid email id format";
        }
 
        document.getElementById("mailId").value = "";
        // add error class list
        document.getElementById("mailId").classList.add('input_error');
        document.getElementById("mailId").classList.remove('input_noerror');
        sendParametersValidation = false;

    }

    var phonepattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if( phoneNumber.length < 7 || phoneNumber.length > 20 )
    {
        sendParametersValidation = false;
        console.log(" INvalid Phone number pattern");
        ssendParametersValidation = false;
        document.getElementById("phone").classList.add('input_error');
        document.getElementById("phone").classList.remove('input_noerror');
        document.getElementById("phone").placeholder ="Invalid Phone Number ( 7 to 20 digits only ) ";
        document.getElementById("phone").value = "";
    } 

    if(!name.length || name.length > 52) 
    {
        if(name.length > 52)
        {
            console.log("Name  Length Greater than expected");
            document.getElementById("name").placeholder ="Name should not be greater than 52 charecters";

        }
        else
        {
            document.getElementById("name").placeholder ="Name cannot be empty";
            console.log("Empty Name in Console");

        }
        sendParametersValidation = false;
        document.getElementById("name").classList.add('input_error');
        document.getElementById("name").classList.remove('input_noerror');
        document.getElementById("name").value = "";
    }

    if(!subject.length || subject.length > 1024) 
    {
        if(subject.length > 1024)
        {
            console.log("subject Length Greater than expected");
            document.getElementById("subject").placeholder ="Subject length cannot exceed 1024 charecters";

        }
        else{
            document.getElementById("subject").placeholder ="Subject cannot be empty";

        }

        console.log("Empty Name in Console");
        sendParametersValidation = false;
        document.getElementById("subject").classList.add('input_error');
        document.getElementById("subject").classList.remove('input_noerror');
        document.getElementById("subject").value = "";
    }

    if(!message.length || message.length > 2048) 
    {
        if(message.length > 2048)
        {
            console.log("Mesage Length Greater than expected");
            document.getElementById("msg").placeholder ="Message length exceeds 2048 charecters";

        }
        else{
            document.getElementById("msg").placeholder ="Message cannot be empty";

        }

        console.log("Empty Name in Console");
        sendParametersValidation = false;
        document.getElementById("msg").classList.add('input_error');
        document.getElementById("msg").classList.remove('input_noerror');
        document.getElementById("msg").value = "";
    }


    if(!policy) 
    {
        sendParametersValidation = false;
        alert("Please accept Terms and Conditions");
    }
    

    if (sendParametersValidation) {
        const url = "https://api.codelessauto.io/send";

        // const data = JSON.stringify({
        //     "email": mailId,
        //     "phone": phoneNumber,
        //     "name": name,
        //     "subject": subject,
        //     "text": message,
        //     "captcha": response
        //   })

        const data = {
            "email": mailId,
            "phone": phoneNumber,
            "name": name,
            "subject": subject,
            "text": message,
            "captcha": response
        }

        const otherParams = {
            headers: {"Content-Type": "application/json"},
            body: data,
            method: "POST"
        };

        $.ajax({
            url: url,
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(data),
            success: function(data){
                return data;
            }
        });

        // $.post(url, data, function(data, status) {
        //     console.log(data + "status:" + status);
        // });
        document.getElementById("name").value = "";
        document.getElementById("mailId").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("msg").value = "";
        document.getElementById("policy").checked = "";

        document.getElementById("name").placeholder = "Name";
        document.getElementById("mailId").placeholder = "Email";
        document.getElementById("phone").placeholder = "Phone";
        document.getElementById("subject").placeholder = "Subject";
        document.getElementById("msg").placeholder = "Message";

        alert(" Message has been sent ")
    }
}


const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".firstSession");
const sectionTwo = document.querySelector(".section2");
const sectionThree = document.querySelector(".lower");
const sectionFour = document.querySelector(".section5");
const sectionFive = document.querySelector(".section6");
const sectionSix = document.querySelector(".section7");
const heading_underline = document.querySelector(".heading-underline");


var sectionTitleOptions;
var sectionOneOptions = 
{

};



// hide the fHamburger on Scroll
window.addEventListener('scroll', function() {
    document.getElementById('hamburgerList').style.display = 'none';
    document.getElementById('modulesPopUp-containerId').style.visibility = 'hidden';
    document.getElementById('modulesPopUp-containerId').style.opacity = '0';
    hambugerOn = false;
  });

window.addEventListener('click', function() {
    console.log(hambugerOn);
    if(hambugerOn)
    {
        document.getElementById('hamburgerList').style.display = 'none';
        hambugerOn = false;
    }

    document.getElementById('modulesPopUp-containerId').style.visibility = 'hidden';
    document.getElementById('modulesPopUp-containerId').style.opacity = '0';
    
  });



/////--------- Observation for Nav Bar to change color upon Scrolling --------------  ////// 
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {

        if(!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
            document.getElementById("color-img").style.display = "block";
            document.getElementById("white-img").style.display = "none";
            document.getElementById("colorButton").style.display = "block";
            document.getElementById("whiteButton").style.display = "none";
        } 
        
        else 
        {
            header.classList.remove("nav-scrolled");
            document.getElementById("color-img").style.display = "none";
            document.getElementById("white-img").style.display = "block";
            if (!isMobile) {
                document.getElementById("nav-title").style.display = "block";
            }
            else {
                document.getElementById("nav-title").style.display = "block";

                document.getElementById("colorButton").style.display = "none";
                document.getElementById("whiteButton").style.display = "block";
            }
            // if (!isMobile) {
            //     document.getElementById("nav-title").style.display = "block";
            // }    
            // else {
            //     document.getElementById("nav-title").style.display = "none";
            // }
        // if (isMobile) {
        //     document.getElementById("nav-title").style.display = "block";
        // }
        // else {
        //     document.getElementById("nav-title").style.display = "none";
        // }
        }
    })
},sectionOneOptions);
// Observation call Function    
sectionOneObserver.observe(sectionOne);

////// - END -- ///////////

var options1;
// Observation function to Change the color of heading of nav bar based on position
const sectionTitleObserver = new IntersectionObserver(function(entries, sectionTitleObserver) {
    entries.forEach(entry => {
        // get the bounding rect of the current Class
        const className = entry.target.className;
        // console.log(className);
        // console.log(entry);
        const activeAnchor = document.querySelector(`[data-page=${className}]`); // selects the li item from Nav bar based on className
        const width = activeAnchor.getBoundingClientRect().width;
        const left = activeAnchor.getBoundingClientRect().left;

        
        // for MOmentum Scrolling
        // Update : Not gonna be implemented for this project.
        $(window).bind('mousewheel DOMMouseScroll', function(event){
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // console.log("Wheelup");
            }
            else {
                // console.log("WheelDown");

            }
        });
        if(entry.isIntersecting)
        {
            activeAnchor.classList.add("item-active");
            // heading_underline.style.setProperty('width' , `${width}vh`);
            // heading_underline.style.setProperty('left' , `${left}vh`);

        }
        else{
            activeAnchor.classList.remove("item-active");
            // heading_underline.style.setProperty('width' , `10px`);

        }
    })
}, {rootMargin: '-300px'}   );

sectionTitleObserver.observe(sectionTwo);
sectionTitleObserver.observe(sectionThree);
sectionTitleObserver.observe(sectionFour);
sectionTitleObserver.observe(sectionFive);
sectionTitleObserver.observe(sectionSix);







// Variables needed for Modukes Popup size

var d_mod_height ;
var d_mod_width ;
var m_mod_height;
var m_mod_width;


var prevActiveModuleId ="modules_Mobile";
var prevActiveModule = document.getElementById("Mobile");
var isPopupActive = false;
var currentActiveModule = document.getElementById("API");
var currentActiveModuleId = "modules_API"
var modulesCenterCircleHover = false;
var slideIndex = 1;
var modulesArrayElements = [];
var modulesArrayInnerCircleText = [];
var modulesArrayInnerCircleHeading = [];
var N_modulesArrayText = 7;
var N_modulesArrayHeading = 2;


var modulesArray = ["Mainframe", "Mobile", "Cloud",  "API", "WebUI" , "Desktop" , "Companion" ,
                    "Accessibility", "Security", "Infrastructure", "Batch", "integration", 
                    "elastic", "AI" , "Performance", "Database"];



function modulesArrayLoader()
{
    for ( i = 0 ; i < modulesArray.length ; i++)
        modulesArrayElements[i] = document.getElementById(modulesArray[i]);
}


var i = 0;
var modsize = modulesArray.length;

window.setInterval(function(){
    if(isPopupActive == false)
        if( modulesCenterCircleHover == false) 
        {
            var mod  = document.getElementById(modulesArray[i]);
            i = i+1; 
            changeModuleText(mod);
            if(i > modulesArray.length - 1) i=0;
        }
            
    
    // plusSlides(1);

    },ModuletimeDelay );

function changeModuleText(e)
{
    var id_name;
    id_name = e.id;
    id_name = "modules_" + id_name;
    var vecName = id_name + "_vector";
    var textName = id_name + "_text";

    prevActiveModule = currentActiveModule;
    currentActiveModuleId = id_name;
    currentActiveModule = e;

    // modulesCenterCircleHover = true;
    // console.log("Current Vec name  "  , vecName);
    // console.log("Current text name  "  , textName);
    // console.log("Current id name  "  , currentActiveModuleId);
    // console.log("Prev  id name  "  , prevActiveModule.id);

    var prevActiveModuleId = "modules_" + prevActiveModule.id;
    var prevVecName     = prevActiveModuleId + "_text";
    var prevtextName    = prevActiveModuleId + "_vector";
    // console.log("Prev  vec name  "  , prevVecName);
    // console.log("Prev  text name  "  , prevtextName);
    window.setTimeout( function() {
        document.getElementById("modInnerText").className.baseVal = "";
        document.getElementById("modInnerTextHead1").className.baseVal = "";
        document.getElementById("modInnerTextHead2").className.baseVal = "";
    },50);

    window.setTimeout( function() {document.getElementById(prevActiveModuleId).className.baseVal = "modulesSvgCircleBack";} , 100 );
    window.setTimeout( function() {document.getElementById(prevVecName).className.baseVal = "";} , 100 );
    window.setTimeout( function() {document.getElementById(prevtextName).className.baseVal = "";} , 100 );

    window.setTimeout( function() { document.getElementById(currentActiveModuleId).className.baseVal = "modulesSvgCircleBack_Active" } , 100 );
    window.setTimeout( function() { document.getElementById(currentActiveModuleId).setAttribute("stroke-dashoffset", "0px") } , 100 );
    window.setTimeout( function() { document.getElementById(vecName).className.baseVal = "modulesSvgVector_Active" } , 100 );
    window.setTimeout( function() { document.getElementById(textName).className.baseVal = "modulesSvgText_Active" } , 100 );

    window.setTimeout( function() {
        document.getElementById("modInnerText").className.baseVal = "modulesInnerCircleText";
        document.getElementById("modInnerTextHead1").className.baseVal = "modulesInnerCircleText-heading";
        document.getElementById("modInnerTextHead2").className.baseVal = "modulesInnerCircleText-heading";
    },50);
        

    window.setTimeout( function() {
       // alert(id_name);
    if (id_name === "modules_Mainframe")
   {
        document.getElementById("modules_tspan_head1").textContent = "";
        document.getElementById("modules_tspan_head2").textContent = "\xa0\xa0\xa0\xa0\xa0 MainFrame";
        document.getElementById("modules_tspan1").textContent = "\xa0\xa0Used for larger scale purposes ";
        document.getElementById("modules_tspan2").textContent = "\xa0\xa0that requires great availability";
        document.getElementById("modules_tspan3").textContent = "\xa0\xa0and security. This make  ";
        document.getElementById("modules_tspan4").textContent = "\xa0\xa0mainframe automation a reality.   ";
        document.getElementById("modules_tspan5").textContent = " ";
        document.getElementById("modules_tspan6").textContent = " ";
//         document.getElementById("tspan7").textContent = " ";

    } 

    if (id_name === "modules_Infrastructure")
    {
         document.getElementById("modules_tspan_head1").textContent = "";
         document.getElementById("modules_tspan_head2").textContent = "\xa0\xa0\xa0\xa0 Infrastructure";
         document.getElementById("modules_tspan1").textContent = "    Running on multi-cloud  ";
         document.getElementById("modules_tspan2").textContent = "    infrastructure, automation   ";
         document.getElementById("modules_tspan3").textContent = "    infrastructure is designed to   ";
         document.getElementById("modules_tspan4").textContent = "    support different cloud  ";
         document.getElementById("modules_tspan5").textContent = "    platforms. ";
         document.getElementById("modules_tspan6").textContent = " ";
//          document.getElementById("tspan7").textContent = " ";
     } 

    if (id_name === "modules_Mobile")
    {
        document.getElementById("modules_tspan_head1").textContent = " ";
        document.getElementById("modules_tspan_head2").textContent = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Mobile";
        document.getElementById("modules_tspan1").textContent = "Android, IOS and Windows APP ";
        document.getElementById("modules_tspan2").textContent = "APP automation and WEB ";
        document.getElementById("modules_tspan3").textContent = "browser automation testing  ";
        document.getElementById("modules_tspan4").textContent = "across all mobile devices and  ";
        document.getElementById("modules_tspan5").textContent = "tablets available in the market. ";
        document.getElementById("modules_tspan6").textContent = " ";
//         document.getElementById("tspan7").textContent = " ";
    }

    if (id_name === "modules_API")
    {
        document.getElementById("modules_tspan_head1").textContent = "API &";
        document.getElementById("modules_tspan_head2").textContent = "\xa0\xa0\xa0\xa0 Microservices  ";
        document.getElementById("modules_tspan1").textContent = "\xa0\xa0 This supports all types  ";
        document.getElementById("modules_tspan2").textContent = "\xa0\xa0 of APIs such as SOAP, REST,";
        document.getElementById("modules_tspan3").textContent = "\xa0\xa0 XML, JSON and Response ";
        document.getElementById("modules_tspan4").textContent = "\xa0\xa0Validations including modern  ";
        document.getElementById("modules_tspan5").textContent = "\xa0\xa0cloud microservices.  ";
        document.getElementById("modules_tspan6").textContent = " ";
//         document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_WebUI")
    {
        document.getElementById("modules_tspan_head1").textContent = "";
        document.getElementById("modules_tspan_head2").textContent = " \xa0\xa0\xa0\xa0\xa0 \xa0\xa0 WebUI   ";
        document.getElementById("modules_tspan1").textContent = "\xa0\xa0 Developed with a view   ";
        document.getElementById("modules_tspan2").textContent = "\xa0\xa0 to support all kinds of web ";
        document.getElementById("modules_tspan3").textContent = "\xa0\xa0 applications across various ";
        document.getElementById("modules_tspan4").textContent = "\xa0\xa0 web browsers, operating  ";
        document.getElementById("modules_tspan5").textContent = "\xa0\xa0 systems and cloud platforms. ";
        document.getElementById("modules_tspan6").textContent = "";
//         document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Desktop")
    {   
        document.getElementById("modules_tspan_head1").textContent = " ";
        document.getElementById("modules_tspan_head2").textContent = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0   Desktop  ";
        document.getElementById("modules_tspan1").textContent = "\xa0  Nurtures the development ";
        document.getElementById("modules_tspan2").textContent = "\xa0  of desktop applications";
        document.getElementById("modules_tspan3").textContent = "\xa0  by supporting Microsoft  ";
        document.getElementById("modules_tspan4").textContent = "\xa0  WinAppDriver & UI Automation ";
        document.getElementById("modules_tspan5").textContent = "\xa0  Sikuli, AutoIT and licensed";
        document.getElementById("modules_tspan6").textContent = "\xa0\xa0\xa0\xa0\xa0 SmartBear.  ";
//         document.getElementById("tspan7").textContent = "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  TestLeft. ";
    }
    
    if (id_name === "modules_Companion")
    {
        document.getElementById("modules_tspan_head1").textContent = "";
        document.getElementById("modules_tspan_head2").textContent = " \xa0\xa0\xa0\xa0\xa0\xa0Companion   ";
        document.getElementById("modules_tspan1").textContent = "\xa0\xa0 Individuals can carry out all";
        document.getElementById("modules_tspan2").textContent = "\xa0\xa0 required actions to script,";
        document.getElementById("modules_tspan3").textContent = "\xa0\xa0 maintain and execute test cases";
        document.getElementById("modules_tspan4").textContent = "\xa0\xa0 from the simplicity of one     ";
        document.getElementById("modules_tspan5").textContent = "\xa0\xa0 centralized application.";
        document.getElementById("modules_tspan6").textContent = "";
//         document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Accessibility")
    {
        document.getElementById("modules_tspan_head1").textContent = ""; 
        document.getElementById("modules_tspan_head2").textContent = "\xa0\xa0\xa0\xa0\xa0 Accessibility    ";
        document.getElementById("modules_tspan1").textContent = "Allows universal access of the";
        document.getElementById("modules_tspan2").textContent = "web, especially to those who";
        document.getElementById("modules_tspan3").textContent = "have difficulty in understanding,";
        document.getElementById("modules_tspan4").textContent = "navigating and interacting with";
        document.getElementById("modules_tspan5").textContent = "the web due to disabilities.";
        document.getElementById("modules_tspan6").textContent = "";
//         document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Security")
    {
        document.getElementById("modules_tspan_head1").textContent = "  ";
        document.getElementById("modules_tspan_head2").textContent = " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Security ";
        document.getElementById("modules_tspan1").textContent = "\xa0 Detection of security risks";
        document.getElementById("modules_tspan2").textContent = "\xa0 in the system which allows";
        document.getElementById("modules_tspan3").textContent = "\xa0 developers to address these";
        document.getElementById("modules_tspan4").textContent = "\xa0 issues through code.";
        document.getElementById("modules_tspan5").textContent = "";
        document.getElementById("modules_tspan6").textContent = "";
//         document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Batch")
    {
        document.getElementById("modules_tspan_head1").textContent = "";
        document.getElementById("modules_tspan_head2").textContent = " \xa0\xa0\xa0\xa0\xa0\xa0Batch/SSH    ";
        document.getElementById("modules_tspan1").textContent = "\xa0 Focuses automation of";
        document.getElementById("modules_tspan2").textContent = "\xa0 multi-machines, cross-platform";
        document.getElementById("modules_tspan3").textContent = "\xa0 batch processes in distributed";
        document.getElementById("modules_tspan4").textContent = "\xa0 networks and the most efficient";
        document.getElementById("modules_tspan5").textContent = "\xa0 and simple module that heavily";
        document.getElementById("modules_tspan6").textContent = "\xa0\xa0\xa0\xa0  relies on shell commands.";
//         document.getElementById("tspan7").textContent = "        ";
    }
    if (id_name === "modules_integration")
    {
        document.getElementById("modules_tspan_head1").textContent = "";
        document.getElementById("modules_tspan_head2").textContent = " \xa0\xa0\xa0\xa0\xa0 Integration   ";
        document.getElementById("modules_tspan1").textContent = "\xa0 This adaptor already built";
        document.getElementById("modules_tspan2").textContent = "\xa0 (via APIs) and available for";
        document.getElementById("modules_tspan3").textContent = "\xa0 common tools and products";
        document.getElementById("modules_tspan4").textContent = "\xa0 like Jira, Confluence, ALM,";
        document.getElementById("modules_tspan5").textContent = "\xa0 QTest, GIT and e-mailer";
        document.getElementById("modules_tspan6").textContent = "\xa0\xa0\xa0 services to save upfront time.";
//         document.getElementById("tspan7").textContent = "\xa0 on    automation.";
    }

    if (id_name === "modules_elastic")
    {
        document.getElementById("modules_tspan_head1").textContent = "";
        document.getElementById("modules_tspan_head2").textContent = "\xa0\xa0\xa0\xa0Elastic Stack   ";
        document.getElementById("modules_tspan1").textContent = "\xa0   Helps to reduce the time";
        document.getElementById("modules_tspan2").textContent = "\xa0   in building/generating";
        document.getElementById("modules_tspan3").textContent = "\xa0   the real-time reports and";
        document.getElementById("modules_tspan4").textContent = "\xa0   dashboards in today's";
        document.getElementById("modules_tspan5").textContent = "\xa0   competitive world.";
        document.getElementById("modules_tspan6").textContent = "";
//         document.getElementById("tspan7").textContent = "";
    }


    if (id_name === "modules_AI")
    {
        document.getElementById("modules_tspan_head1").textContent = " ";
        document.getElementById("modules_tspan_head2").textContent = "  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0AI ";
        document.getElementById("modules_tspan1").textContent = "\xa0  Provides integration to AI ";
        document.getElementById("modules_tspan2").textContent = "\xa0  and ML algorithms empowering ";
        document.getElementById("modules_tspan3").textContent = "\xa0  users with  tools to get value";
        document.getElementById("modules_tspan4").textContent = "\xa0  and insights from their ";
        document.getElementById("modules_tspan5").textContent = " \xa0 Elasticsearch data and view  ";
        document.getElementById("modules_tspan6").textContent = "\xa0\xa0\xa0\xa0\xa0machine learning. ";
        // document.getElementById("tspan7").textContent = "  ";
    }

    if (id_name === "modules_Performance")
    {
        document.getElementById("modules_tspan_head1").textContent = "";
        document.getElementById("modules_tspan_head2").textContent = "\xa0\xa0\xa0\xa0\xa0Performance  ";
        document.getElementById("modules_tspan1").textContent = "\xa0\xa0\xa0Implemented to test Rest";
        document.getElementById("modules_tspan2").textContent = "\xa0\xa0\xa0API Performance and Web";
        document.getElementById("modules_tspan3").textContent = "\xa0\xa0\xa0Application load test by";
        document.getElementById("modules_tspan4").textContent = "\xa0\xa0\xa0enabling testers to calculate";
        document.getElementById("modules_tspan5").textContent = "\xa0\xa0\xa0the performance time of test";
        document.getElementById("modules_tspan6").textContent = "\xa0\xa0\xa0\xa0\xa0\xa0cases using this module.";
        // document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Database")
    {
        document.getElementById("modules_tspan_head1").textContent = "";
        document.getElementById("modules_tspan_head2").textContent = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Database ";
        document.getElementById("modules_tspan1").textContent = "\xa0\xa0This supports Java JDBC, ";
        document.getElementById("modules_tspan2").textContent = "\xa0\xa0SQL server, Oracle database,";
        document.getElementById("modules_tspan3").textContent = "\xa0\xa0MariaDB, MySQL.It additionally";
        document.getElementById("modules_tspan4").textContent = "\xa0\xa0supports AWS database such  ";
        document.getElementById("modules_tspan5").textContent = "\xa0\xa0as AWS Aurora DB and RDS. ";
        document.getElementById("modules_tspan6").textContent = "";
        // document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Cloud")
    {
        document.getElementById("modules_tspan_head1").textContent = "";
        document.getElementById("modules_tspan_head2").textContent = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Cloud " ;
        document.getElementById("modules_tspan1").textContent = "\xa0  A breeze via native support  ";
        document.getElementById("modules_tspan2").textContent = "\xa0  to integrate with cloud providers";
        document.getElementById("modules_tspan3").textContent = "\xa0 its advanced features like";
        document.getElementById("modules_tspan4").textContent = "\xa0 autoscaling, containerization , ";
        document.getElementById("modules_tspan5").textContent = "\xa0 orchestration infrastructure   ";
        document.getElementById("modules_tspan6").textContent = "\xa0\xa0\xa0\xa0\xa0 provisioning and so on.";
//         document.getElementById("tspan7").textContent = "";
    }

    },100);


}


function modulesPopupClose(e)
{
    var className_1 = "modulesPopUp-container";
    var className_header = "modulesPopUp-heading";
    var className_content = "modulesPopUp-content";
    
    
    window.setTimeout( function() {
        document.getElementsByClassName(className_content)[0].style.opacity = "0";
        document.getElementsByClassName(className_header)[0].style.opacity = "0";
        document.getElementsByClassName(className_1)[0].style.visibility = "hidden";
        document.getElementById("modulesPopUp-heading").innerHTML = "";
        document.getElementById("modulesPopup-content").innerHTML = "";
    } , 100 );
    
    
    window.setTimeout( function() {
        document.getElementsByClassName(className_content)[0].style.opacity = "0";
        document.getElementsByClassName(className_header)[0].style.opacity = "0";
        document.getElementsByClassName(className_1)[0].style.visibility = "hidden";
        document.getElementsByClassName(className_1)[0].style.opacity = "0";
        document.getElementsByClassName(className_1)[0].style.height = "0vh";
        document.getElementsByClassName(className_1)[0].style.width = "0vw";
        document.getElementsByClassName(className_1)[0].style.borderRadius = "80vh";
        document.getElementsByClassName(className_1)[0].style.backgroundColor = "#e54e57";
        
    } , 100 );

}


function mainCircleMouseEnter(e)
{
    modulesCenterCircleHover = true;
}


function mainCircleMouseLeave(e)
{
    modulesCenterCircleHover = false;
}


function moduleCenterButton(e)
{
    isPopupActive = true;
    var id_name = currentActiveModuleId;
    var className_header = "modulesPopUp-heading";
    var className_content = "modulesPopUp-content";
    // alert(currentActiveModuleId);
    var className_1 = "modulesPopUp-container";

        document.getElementById("modulesPopUp-heading").innerHTML = "";
        document.getElementById("modulesPopup-content").innerHTML = ""; 


    window.setTimeout( function() { 

        if(!isMobile)
        {
            document.getElementsByClassName(className_1)[0].style.visibility = "visible";
            document.getElementsByClassName(className_1)[0].style.opacity = "1";
            document.getElementsByClassName(className_1)[0].style.height = "40vh";
            document.getElementsByClassName(className_1)[0].style.width = "40vw";
            document.getElementsByClassName(className_1)[0].style.borderRadius = "2vh";
            document.getElementsByClassName(className_1)[0].style.backgroundColor = "white";
            document.getElementsByClassName(className_content)[0].style.opacity = "1";
            document.getElementsByClassName(className_header)[0].style.opacity = "1";
        }

        else{
            document.getElementsByClassName(className_1)[0].style.visibility = "visible";
            document.getElementsByClassName(className_1)[0].style.opacity = "1";
            document.getElementsByClassName(className_1)[0].style.height = "45%";
            document.getElementsByClassName(className_1)[0].style.width = "80%";
            document.getElementsByClassName(className_1)[0].style.borderRadius = "2vh";
            document.getElementsByClassName(className_1)[0].style.backgroundColor = "white";
            document.getElementsByClassName(className_content)[0].style.opacity = "1";
            document.getElementsByClassName(className_header)[0].style.opacity = "1";
        }



    }, 100 );  

    document.getElementById("modulesPopUp-heading").innerHTML = "";
    document.getElementById("modulesPopup-content").innerHTML = ""; 


    window.setTimeout( function() { 

        if(id_name === "modules_Mainframe" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Mainframe Module";
            document.getElementById("modulesPopup-content").innerHTML = "The mainframe is a high performance and a high-speed computer system. It is used for large scale computing purposes that requires longevity and apex level of security. Mainframe testing is the validation and verification of software applications and services that are based on mainframe systems. The mainframe automation accelerator module has been contrived to make mainframe automation a reality and tremendously valuable investment to all organisations.";
        }


        if(id_name === "modules_Mobile" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Mobile & Tablets Module";
            document.getElementById("modulesPopup-content").innerHTML = "Mobile application testing is a process by which an application software developed for handheld mobile devices and tablets are tested for its functionality, usability and consistency.";
        }


        if(id_name === "modules_Cloud" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Cloud Integration Adaptors";
            document.getElementById("modulesPopup-content").innerHTML = "All small to large organisations are currently using cloud providers and service such as AWS, Google and Azure, where its features accelerate software development. One of biggest challenge in the test automation space is that most opensource frameworks and licensed products are not cloud friendly. ";
        }


        if(id_name === "modules_API" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "API & Microservices Module";
            document.getElementById("modulesPopup-content").innerHTML = "API automation is the heart of modern testing and substantial for many product quality and CI/CD processes. API tests can cope with short release cycles and frequent changes. Therefore, the API module is pivotal in all framework development. The major insights of the API & Microservices automation accelerator module is that it boosts all types of APIs such as SOAP, REST, XML, JSON and response validations, including modern cloud microservices.";
        }


        if(id_name === "modules_WebUI" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "WEB UI Module";
            document.getElementById("modulesPopup-content").innerHTML = "As most organizations focus on the innovation of digital technology, whilst upgrading the scale of web development, web applications are commonly used in the digital sector. The Web UI automation accelerator module has been developed with a view to support all kinds of web applications across various web browsers, operating systems and cloud platforms."
        }


        if(id_name === "modules_Desktop" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Desktop Module";
            document.getElementById("modulesPopup-content").innerHTML = "The desktop automation accelerator module is designed to vivify desktop automation. Most legacy applications are desktop based and automation around this is a tiring task, with significant costs involved. The desktop automation accelerator module ruptures this myth and nurtures the development of desktop applications by supporting opensource frameworks such as Microsoft WinAppDriver , UI Automation, Sikuli ,AutoIT library, as well as licenced SmartBear TestLeft.";
        }


        if(id_name === "modules_Companion" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Companion WebUI App";
            document.getElementById("modulesPopup-content").innerHTML = "The Companion WebUI is an independent web UI platform that streamlines all actions required to maintain the end to end lifecycle of a test, whilst allowing for codeless automation. This compelling application captivates testers to create projects, script test cases without any background knowledge in coding and to capture & store XPaths, debug, execute tests and view test execution report summaries. In doing so, individuals can carry out all required actions to script, maintain and execute test cases from the simplicity of one centralised application. ";
        }


        if(id_name === "modules_Accessibility" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Accessibility Module";
            document.getElementById("modulesPopup-content").innerHTML = "The motive of web accessibility testing module is to allow universal access of the web, especially to those who have difficulty in understanding, navigating and interacting with the web due to disabilities. Such disabilities include auditory, cognitive, speech, neurological and physical. Consequently, it is important to test web applications for its accessibility, to ensure that any barriers are addressed and removed, so that we allow a seamless experience to all users, irrespective of their personal circumstances.Coming soon ";
        }


        if(id_name === "modules_Security" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Security Testing Module";
            document.getElementById("modulesPopup-content").innerHTML = "The objective of security testing is to identify and measure potential threats in the system to ensure it is not compromised. Security testing assists the detection of security risks in the system which allows developers to address these issues through code.Coming Soon";
        }

        if(id_name === "modules_Batch" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "BATCH/SSH Module";
            document.getElementById("modulesPopup-content").innerHTML = "The batch & SSH automation accelerator module focuses on the automation of multi-machines and cross-platform batch processes in distributed networks. The module enables sophisticated automation development, without the need for writing and managing code. This substantially reduces development costs and timelines thus ensuring easy maintenance and management of automated tasks. A set of shell commands are executed as shell scripts to run batch automation process and thus results in saving a lot of time.";
        }
        

        if(id_name === "modules_integration" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Integration Adaptors";
            document.getElementById("modulesPopup-content").innerHTML = "In the modern software development industry, all application to application and product to product communication happens over rest APIs. When a project starts, the automation journey requires time upfront to develop integration adaptors between other software development and management tools. With the CodelessAuto accelerator this upfront development time can be saved, as integration adaptors already built (via APIs) and available for common tools and products like Jira, Confluence, ALM, QTest, GIT service providers and e-mailer services.";
        }

        if(id_name === "modules_elastic" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "The Elastic Stack (ELK) Analytics Module";
            document.getElementById("modulesPopup-content").innerHTML = "In today's competitive world, Quality engineers, DevOps engineers and other project members invest more time in analysing automated test failures and building the reports and metrics manually. The Elastic Stack (ELK) analytics accelerator module helps to reduce the time invested in building and generating real-time reports and dashboards.";
        }


        if(id_name === "modules_AI" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Artificial Intelligence Module";
            document.getElementById("modulesPopup-content").innerHTML = "AI and ML are currently two of the most overloaded terms in the modern software industry. It is fundamentally used to describe a broad range of algorithms and methods for data driven prediction, decision making, and modelling. It is therefore important to cut through the noise and describe specifically what we are doing.";
        }

        if(id_name === "modules_Performance" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Performance Test Module";
            document.getElementById("modulesPopup-content").innerHTML = "The performance test accelerator module supports performance testing by enabling testers to calculate the performance time of test cases using CodelessAuto accelerator’s core features. It is implemented to test the Rest API Performance test and Web Application load via integration with Jmeter library. Another advantage of this module is its ability to reuse/run already created Jmeter tests via the CodelessAuto accelerator enabling access to all cloud infrastructure provisioning and autoscaling.";
        }

        if(id_name === "modules_Database" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Database Module";
            document.getElementById("modulesPopup-content").innerHTML = "The database automation accelerator module revolves and focuses on the integration around almost all database servers. This module supports Java JDBC, SQL server, Oracle database, MariaDB and My SQL. It additionally supports AWS databases such as AWS Aurora DB and RDS. The focus point of this module is the comparison of large set of data to provide result within the fraction of a second.";
        }

        if(id_name === "modules_Infrastructure" )
        {
            document.getElementById("modulesPopUp-heading").innerHTML = "Infrastructure";
            document.getElementById("modulesPopup-content").innerHTML = "Automation Infrastructure and processes are based on a multi-layer infrastructure like Orchestration engine - CI/CD Engine, Base Infrastructure Support Services - Supports the provisioners, Infrastructure Provisioner and Template Creators.";
        }
    
    }, 100 ); 
  

}   




function changeClassform(e)
{
    e.classList.remove("input_error");
    e.placeholder = "";


    var array = ["name","phone","mailId", "subject","msg"];
    var arrayVal = ["Name","Phone","Email", "Subject","Message"];


    var formid = "form_" + e.id;
    console.log(formid);
    
    for (  i=0 ; i < array.length ; i++)
    {
        if(array[i] != e.id)
        {
            document.getElementById(array[i]).placeholder = arrayVal[i];
            // window.setTimeout( function() { document.getElementById(formid).classList.add("form-slider"); }, 50);
            // window.setTimeout( function() { document.getElementById(formid).classList.remove("form-slider-active"); }, 100);
        }
    }


        

}

function hamburger() {
    if (document.getElementById('hamburgerList').style.display == "flex") {
        document.getElementById("hamburgerList").style.display = "none";
    }
    else {
        document.getElementById("hamburgerList").style.display = "flex";
    }
}