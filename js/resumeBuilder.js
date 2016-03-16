'use strict';

// Bio

var bio = {
    "name": "Wes Reed",
    "role": "Web Developer",
    "contacts": {
        "mobile": "202-734-8067",
        "email": "wesley.a.reed@gmail.com",
        "github": "wesareed",
        "githuburl": "https://github.com/wesareed",
        "twitter": "@none",
        "location": "Washington, DC"
    },
    "welcomeMessage": "The sun shines as clearly in the darkest day as it does in the brightest. The difference is not in the sun, but in some clouds which hinder the manifestation of light thereof.",
    "skills": [
        "Javascript", "CSS3", "HTML5", "Git/GitHub"
    ],
    "biopic": "images/me_2.png"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (var skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("#", bio.contacts.githuburl);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
};



//Education

var education = {
    "schools": [{
        "name": "General Assembly",
        "location": "Washington, DC",
        "degree": "Certificate",
        "majors": ["Web Development Immersive"],
        "dates": "March 2016",
        "url": "http://ga.co/19F19iL"
    }, {
        "name": "Virginia Commonwealth University",
        "location": "Richmond, VA",
        "degree": "BS",
        "majors": ["Forensic Science"],
        "dates": "2007",
        "url": "http://bit.ly/19q3Bj9"
    }, ],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/nanodegree"
    }],
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
    });

    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append("<br>");
        });
    }
};



//Work

var work = {
    "jobs": [{
        "employer": "Keller Williams Realty",
        "title": "Realtor",
        "location": "Washington, DC",
        "dates": "April 2014 - March 2016",
        "description": "Analyzed market trends to determine market place values and prices. Cultivated and maintained relationships with local developers, contractors, and the Realtor community. Continuous preview of market inventory. Developed an effective prospecting strategy. Stayed informed through continuing educations. Provided fiduciary service to all sellers from the time their home goes on the market up until it goes to contract and beyond. Provided regular communication with buyers and sellers to include progress reports and feedback. Managed a listings' lifecycle with attention to detail and providing outstanding service.",
        "url": "http://bit.ly/1Qf2Dr8"
    }, {
        "employer": "Zip Realty, Inc.",
        "title": "Realtor",
        "location": "Vienna, VA",
        "dates": "June 2013 - April 2014",
        "description": "Provided first-rate service to clients, begginning with swift follow-up and systematic prospecting. Acted as intermediary in negotiations between buyers and sellers. Coordinated property closings, overseeing signing of documents and disbursement of funds. Performed market studies and previewed properties to remain well informed.",
        "url": "http://bit.ly/1ZNdD6Z"
    }, {
        "employer": "H&R Retail, Inc.",
        "title": "Intern",
        "location": "Bethesda, MD",
        "dates": "June 2012 - June 2013",
        "description": "Represented landlords and tenants in retail leasing transactions on a wide range of retail property types. Evaluated prospective retailers to achieve optimal tenant mix. Built relationships with developers and owners to understand and contribute to project design. Duties also included pro-forma valuations, modeling, due-dilligence and market analysis.",
        "url": "http://bit.ly/1Ucsv8a"
    }],
};

work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last")
            .append(formattedworkEmployer + formattedworkTitle)
            .append(formattedworkLocation, formattedworkDates, formattedworkDescription);
    };
};



//Projects

var projects = {
    "projects": [{
        "title": "Arcade Game Clone",
        "dates": "2016",
        "description": "Clone of the classic game Frogger. Coded player, enemies, and other game entities in JavaScript's object oriented classical style. Created enemy subclasses with different movement patterns.",
        "images": ["images/arcade.png"],
        "url": "http://arcadegameclone.bitballoon.com/"
    }, {
        "title": "PDF Mockup",
        "dates": "2015",
        "description": "Provided with a design mockup as a PDF file - I replicated that design in HTML and CSS. Developed a responsive website that displays images with descriptions.",
        "images": ["images/img1.png", "images/img2.png"],
        "url": "http://mockuppdf.bitballoon.com/"
    }],
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(images) {
                var formattedprojectImgages = HTMLprojectImage.replace("%data%", images);
                $(".project-entry:last").append(formattedprojectImgages);
            });
        }
    });
};


//Locationizer

function locationizer(work_obj) {
    var locationArray = [];

    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

console.log(locationizer(work));


//Internationalize Name

function inName(name) {
    name = bio.name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


//Click Log

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


bio.display();
education.display();
work.display();
projects.display();
