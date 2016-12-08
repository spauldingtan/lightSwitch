/* Today was just a review day.  We talkeed about the following things (all of which you need to study!!!)

* 1: typescript
* 2: Promises
* 3: Data Structures
* 4: Ajax

 */

var count = 0;

function lightSwitch() {



    if (count < 1) {
        // document.getElementById("switch").innerText = "On";
        count = 1;
        console.log(count);
        document.getElementById("lightSwitch").innerHTML = '<img src="Images/on.jpg"/>';
        var x = document.getElementsByTagName("BODY")[0];
        x.style.backgroundColor = "yellow";
    }
    else if (count = 1) {
        // document.getElementById("switch").innerText = "Off";
        count = 0;
        console.log(count);
        document.getElementById("lightSwitch").innerHTML = '<img src="Images/off.jpg"/>';
        var x = document.getElementsByTagName("BODY")[0];
        x.style.backgroundColor = "black";
    }
}
