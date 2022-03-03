// Loop through Array of Objects
var avengers = [{ // Object @ 0 index
        mentorname: "Hulk",
        mentorpassword: "Marvel"
    },
    { // Object @ 1 index
        mentorname: "Captain America",
        mentorpassword: "Marvel"
    },
    { // Object @ 2 index
        mentorname: "Thor",
        mentorpassword: "Marvel"
    },
    { // Object @ 3 index
        mentorname: "Black Widow",
        mentorpassword: "Marvel"
    },
    { // Object @ 4 index
        mentorname: "Vision",
        mentorpassword: "Marvel"
    },
    { // Object @ 5 index
        mentorname: "Scarlet Witch",
        mentorpassword: "Marvel"
    },
    { // Object @ 6 index
        mentorname: "Iron Man",
        mentorpassword: "Marvel"
    },
    { // Object @ 7 index
        mentorname: "Hawkeye",
        mentorpassword: "Marvel"
    }
]

function myFunction() {
    alert("Welcome to the New Avenger Registration page be sure to Choose a Mentor from the below Avengers Before registering the Password is Marvel.");
}

function getInfo() {
    var mentorname = document.getElementById('mentorname').value
    var mentorpassword = document.getElementById('mentorpassword').value

    for (var i = 0; i < avengers.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if (mentorname == avengers[0].mentorname && mentorpassword == avengers[0].mentorpassword) {
            alert("Congratulations " + username.value + " " + mentorname + " is your New Mentor Create your New Avenger");
            window.location.href = "https://spiderman.marvelhq.com/games/create-your-own-web-warrior";
            // stop the function if this is found to be true
            return

        } else if (mentorname == avengers[1].mentorname && mentorpassword == avengers[1].mentorpassword) {
            alert("Congratulations " + username.value + " " + mentorname + " is your New Mentor Create your New Avenger");
            window.location.href = "https://spiderman.marvelhq.com/games/create-your-own-web-warrior";
            return
        } else if (mentorname == avengers[2].mentorname && mentorpassword == avengers[2].mentorpassword) {
            alert("Congratulations " + username.value + " " + mentorname + " is your New Mentor Create your New Avenger");
            window.location.href = "https://spiderman.marvelhq.com/games/create-your-own-web-warrior";
            return
        } else if (mentorname == avengers[3].mentorname && mentorpassword == avengers[3].mentorpassword) {
            alert("Congratulations " + username.value + " " + mentorname + " is your New Mentor Create your New Avenger");
            window.location.href = "https://spiderman.marvelhq.com/games/create-your-own-web-warrior";
            return
        } else if (mentorname == avengers[4].mentorname && mentorpassword == avengers[4].mentorpassword) {
            alert("Congratulations " + username.value + " " + mentorname + " is your New Mentor Create your New Avenger");
            window.location.href = "https://spiderman.marvelhq.com/games/create-your-own-web-warrior";
            return
        } else if (mentorname == avengers[5].mentorname && mentorpassword == avengers[5].mentorpassword) {
            alert("Congratulations " + username.value + " " + mentorname + " is your New Mentor Create your New Avenger");
            window.location.href = "https://spiderman.marvelhq.com/games/create-your-own-web-warrior";
            return
        } else if (mentorname == avengers[6].mentorname && mentorpassword == avengers[6].mentorpassword) {
            alert("Congratulations " + username.value + " " + mentorname + " is your New Mentor Create your New Avenger");
            window.location.href = "https://spiderman.marvelhq.com/games/create-your-own-web-warrior";
            return
        } else if (mentorname == avengers[7].mentorname && mentorpassword == avengers[7].mentorpassword) {
            alert("Congratulations " + username.value + " " + mentorname + " is your New Mentor Create your New Avenger");
            window.location.href = "https://spiderman.marvelhq.com/games/create-your-own-web-warrior";
            return
        }


    }

    alert("Incorrect Mentor Name or Password Access Denied. " + " Shield Agents will be at your Door in 2 Minutes " + firstname.value + " we have your Location.")
    window.location.href = "https://www.ip-tracker.org/";
}