// Defined Functions

var ModuletimeDelay = 6000;
function loadMore() {
    document.getElementById("hidden").style.display = "block";
    document.getElementById("btnLoadMore").style.display = "none";
    document.getElementById("btnShowLess").style.display = "flex";
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

function sendEmail() {
    var name = document.getElementById("name").value;
    var mailId = document.getElementById("mailId").value;
    var phoneNumber = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("msg").value;
    var policy = document.getElementById("policy").checked;

    var response = grecaptcha.getResponse();

    if (response.length > 0 && name.length > 0 && mailId.length > 0 && phoneNumber.length > 0 && subject.length > 0 && message.length > 0 && policy == true) {
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
    }
}

const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".firstSession");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
            document.getElementById("color-img").style.display = "block";
            document.getElementById("white-img").style.display = "none";

        } else {
            header.classList.remove("nav-scrolled");
            document.getElementById("color-img").style.display = "none";
            document.getElementById("white-img").style.display = "block";
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

document.addEventListener("DOMContentLoaded", function() {
    orientationLockFunction();
  });

window.addEventListener("orientationchange", function() {
    orientationChangeDetect();
  });

function orientationLockFunction()
{
    if (window.innerHeight > window.innerWidth*0.8)   // Some kind of potrait mode 
    {
        alert("Device is in Potrait mode, Please change it to landscape mode");
        screen.orientation = "landscape";
    }   screen.rotate = 90;
    
}

function orientationChangeDetect()
{
    if(window.innerHeight <  window.innerWidth*0.8)
        alert("Device is in Potrait mode, Please change it to landscape mode");
}

var prevActiveModuleId = "modules_Database";
var isPopupActive = false;
var currentActiveModuleId = "modules_Mainframe";
var modulesCenterCircleHover = false;
var slideIndex = 1;
var modulesArrayElements = [];
var modulesArrayInnerCircleText = [];
var modulesArrayInnerCircleHeading = [];
var N_modulesArrayText = 7;
var N_modulesArrayHeading = 2;


var modulesArray = ["modules_Mainframe", "modules_Mobile", "modules_Cloud",  "modules_API", "modules_WebUI" , "modules_Desktop" , "modules_Companion" ,
                    "modules_Accessibility", "modules_Security", "modules_Infrastructure", "modules_Batch", "modules_integration", 
                    "modules_elastic", "modules_AI" , "modules_Performance", "modules_Database"];



function modulesArrayLoader()
{
    for ( i = 0 ; i < modulesArray.length ; i++)
        modulesArrayElements[i] = document.getElementById(modulesArray[i]);
}


var i = 0;
var modsize = modulesArray.length;
window.setInterval(function(){

    // console.log(i);
    
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

    prevActiveModuleId = currentActiveModuleId ;
    currentActiveModuleId = id_name;

    if(prevActiveModuleId != e.id)
        document.getElementById(prevActiveModuleId).className.baseVal = "modulesSvgCircleBack";

    // alert(id_name);
    if (id_name === "modules_Mainframe")
   {
        document.getElementById("tspan_head1").textContent = "MainFrame";
        document.getElementById("tspan_head2").textContent = "";
        document.getElementById("tspan1").textContent = "\xa0 Used for larger scale";
        document.getElementById("tspan2").textContent = "\xa0 computing purposes that ";
        document.getElementById("tspan3").textContent = "\xa0 requires great availability  ";
        document.getElementById("tspan4").textContent = "\xa0 and security. This make   ";
        document.getElementById("tspan5").textContent = "\xa0 mainframe automation  ";
        document.getElementById("tspan6").textContent = "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0      a reality. ";
        document.getElementById("tspan7").textContent = " ";

    } 

    if (id_name === "modules_Infrastructure")
    {
         document.getElementById("tspan_head1").textContent = "";
         document.getElementById("tspan_head2").textContent = "Infrastructure ";
         document.getElementById("tspan1").textContent = "Running on multi-cloud  ";
         document.getElementById("tspan2").textContent = "infrastructure, automation   ";
         document.getElementById("tspan3").textContent = "infrastructure is designed to   ";
         document.getElementById("tspan4").textContent = "support different cloud  ";
         document.getElementById("tspan5").textContent = "platforms. ";
         document.getElementById("tspan6").textContent = " ";
         document.getElementById("tspan7").textContent = " ";
     } 

    if (id_name === "modules_Mobile")
    {
        document.getElementById("tspan_head1").textContent = " \xa0 Mobile";
        document.getElementById("tspan_head2").textContent = "";
        document.getElementById("tspan1").textContent = "Android, IOS and Windows  ";
        document.getElementById("tspan2").textContent = "APP automation and WEB ";
        document.getElementById("tspan3").textContent = "browser automation testing  ";
        document.getElementById("tspan4").textContent = "across all mobile devices and  ";
        document.getElementById("tspan5").textContent = "tablets available in the market. ";
        document.getElementById("tspan6").textContent = " ";
        document.getElementById("tspan7").textContent = " ";
    }

    if (id_name === "modules_API")
    {
        document.getElementById("tspan_head1").textContent = "   \xa0 \xa0 API &";
        document.getElementById("tspan_head2").textContent = " Microservices  ";
        document.getElementById("tspan1").textContent = "This supports all types  ";
        document.getElementById("tspan2").textContent = "of APIs such as SOAP, REST,";
        document.getElementById("tspan3").textContent = "XML, JSON and Response ";
        document.getElementById("tspan4").textContent = "Validations including modern  ";
        document.getElementById("tspan5").textContent = "cloud microservices.  ";
        document.getElementById("tspan6").textContent = " ";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_WebUI")
    {
        document.getElementById("tspan_head1").textContent = " \xa0\xa0 WebUI";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "Developed with a view   ";
        document.getElementById("tspan2").textContent = "to support all kinds of web ";
        document.getElementById("tspan3").textContent = "applications across various ";
        document.getElementById("tspan4").textContent = "web browsers, operating  ";
        document.getElementById("tspan5").textContent = "systems and cloud platforms. ";
        document.getElementById("tspan6").textContent = "";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Desktop")
    {   
        document.getElementById("tspan_head1").textContent = " Desktop ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "Nurtures the development ";
        document.getElementById("tspan2").textContent = "of desktop applications";
        document.getElementById("tspan3").textContent = "by supporting opensource  ";
        document.getElementById("tspan4").textContent = "Microsoft WinAppDriver &  ";
        document.getElementById("tspan5").textContent = "UI Automation , library Sikuli,   ";
        document.getElementById("tspan6").textContent = "AutoIT and licensed SmartBear  ";
        document.getElementById("tspan7").textContent = "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  TestLeft. ";
    }
    
    if (id_name === "modules_Companion")
    {
        document.getElementById("tspan_head1").textContent = "Companion ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "Individuals can carry out all";
        document.getElementById("tspan2").textContent = "required actions to script,";
        document.getElementById("tspan3").textContent = "maintain and execute test cases";
        document.getElementById("tspan4").textContent = "from the simplicity of one     ";
        document.getElementById("tspan5").textContent = "centralized application.";
        document.getElementById("tspan6").textContent = "";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Accessibility")
    {
        document.getElementById("tspan_head1").textContent = "Accessibility ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "Allows universal access of the";
        document.getElementById("tspan2").textContent = "web, especially to those who";
        document.getElementById("tspan3").textContent = "have difficulty in understanding,";
        document.getElementById("tspan4").textContent = "navigating and interacting with";
        document.getElementById("tspan5").textContent = "the web due to disabilities.";
        document.getElementById("tspan6").textContent = "";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Security")
    {
        document.getElementById("tspan_head1").textContent = " Security ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "\xa0 Detection of security risks";
        document.getElementById("tspan2").textContent = "\xa0 in the system which allows";
        document.getElementById("tspan3").textContent = "\xa0 developers to address these";
        document.getElementById("tspan4").textContent = "\xa0 issues through code.";
        document.getElementById("tspan5").textContent = "";
        document.getElementById("tspan6").textContent = "";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Batch")
    {
        document.getElementById("tspan_head1").textContent = "  Batch/SSH ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "Focuses automation of";
        document.getElementById("tspan2").textContent = "multi-machines, cross-platform";
        document.getElementById("tspan3").textContent = "batch processes in distributed";
        document.getElementById("tspan4").textContent = "networks and the most efficient";
        document.getElementById("tspan5").textContent = "and simple module that heavily";
        document.getElementById("tspan6").textContent = " relies on shell commands.";
        document.getElementById("tspan7").textContent = "        ";
    }
    if (id_name === "modules_integration")
    {
        document.getElementById("tspan_head1").textContent = "Integration ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "\xa0 This adaptor already built";
        document.getElementById("tspan2").textContent = "\xa0 (via APIs) and available for";
        document.getElementById("tspan3").textContent = "\xa0 common tools and products";
        document.getElementById("tspan4").textContent = "\xa0 like Jira, Confluence, ALM,";
        document.getElementById("tspan5").textContent = "\xa0 QTest, GIT and e-mailer";
        document.getElementById("tspan6").textContent = "\xa0 services to save upfront time";
        document.getElementById("tspan7").textContent = "\xa0 on    automation.";
    }

    if (id_name === "modules_elastic")
    {
        document.getElementById("tspan_head1").textContent = "Elastic Stack";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "\xa0 Helps to reduce the time";
        document.getElementById("tspan2").textContent = "\xa0 in building/generating";
        document.getElementById("tspan3").textContent = "\xa0 the real-time reports and";
        document.getElementById("tspan4").textContent = "\xa0 dashboards in today's";
        document.getElementById("tspan5").textContent = "\xa0 competitive world.";
        document.getElementById("tspan6").textContent = "";
        document.getElementById("tspan7").textContent = "";
    }


    if (id_name === "modules_AI")
    {
        document.getElementById("tspan_head1").textContent = " \xa0 \xa0 \xa0     AI    ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "\xa0  Provides integration to AI ";
        document.getElementById("tspan2").textContent = "\xa0 and ML algorithms empowering ";
        document.getElementById("tspan3").textContent = "\xa0  users with  tools to get value";
        document.getElementById("tspan4").textContent = "\xa0   and insights from their ";
        document.getElementById("tspan5").textContent = " \xa0 Elasticsearch data and view  ";
        document.getElementById("tspan6").textContent = "\xa0  machine learning. ";
        document.getElementById("tspan7").textContent = "  ";
    }

    if (id_name === "modules_Performance")
    {
        document.getElementById("tspan_head1").textContent = " ";
        document.getElementById("tspan_head2").textContent = "Performance   ";
        document.getElementById("tspan1").textContent = " Implemented to test Rest";
        document.getElementById("tspan2").textContent = " API Performance and Web";
        document.getElementById("tspan3").textContent = " Application load test by";
        document.getElementById("tspan4").textContent = " enabling testers to calculate";
        document.getElementById("tspan5").textContent = " the performance time of test";
        document.getElementById("tspan6").textContent = " cases using this module.";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Database")
    {
        document.getElementById("tspan_head1").textContent = "Database ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = " This supports Java JDBC, ";
        document.getElementById("tspan2").textContent = "SQL server, Oracle database,";
        document.getElementById("tspan3").textContent = " MariaDB, My SQL. It additionally";
        document.getElementById("tspan4").textContent = " supports AWS database such  ";
        document.getElementById("tspan5").textContent = " as AWS Aurora DB and RDS. ";
        document.getElementById("tspan6").textContent = " ";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Cloud")
    {
        document.getElementById("tspan_head1").textContent = " \xa0 Cloud ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "A breeze via native support  ";
        document.getElementById("tspan2").textContent = "to integrate with cloud providers";
        document.getElementById("tspan3").textContent = "its advanced features like";
        document.getElementById("tspan4").textContent = "autoscaling, containerization , ";
        document.getElementById("tspan5").textContent = "orchestration infrastructure   ";
        document.getElementById("tspan6").textContent = "provisioning and so on.";
        document.getElementById("tspan7").textContent = "";
    }

    window.setTimeout( function() { e.className.baseVal = "modulesSvgCircleBack_Active" } , 100 );

}




function modulesPopupClose(e)
{
    var className_1 = "modulesPopUp-container";
    document.getElementsByClassName(className_1)[0].style.visibility = "hidden";
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
    // alert(currentActiveModuleId);

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
        document.getElementById("modulesPopup-content").innerHTML = "The batch & SSH automation accelerator module focuses on the automation of multi-machines and cross-platform batch processes in distributed networks. The module enables sophisticated automation development, without the need for writing and managing code. This substantially reduces development costs and timelines thus ensuring easy maintenance and management of automated tasks. The batch & SSH automation accelerator module is highly efficient simple and inordinately rely upon shell commands. A set of shell commands are executed as shell scripts to run batch automation process and thus results in saving a lot of time.";
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

    
    var className_1 = "modulesPopUp-container";
    document.getElementsByClassName(className_1)[0].style.visibility = "visible";

}