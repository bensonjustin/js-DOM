/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

document.getElementById("name1").innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

document.getElementById("position2").innerHTML = "Project Manager";


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

document.getElementById("alias3").innerHTML = "Concatenation";

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

document.getElementsByClassName("profile")[0].innerHTML = "\"You don't have to be cool to rule my world\"";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

document.getElementsByClassName("profile")[1].innerHTML = "\"Be like water\"";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

document.getElementsByClassName("alias")[2].innerHTML = "Hitman";

/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var nameBox7 = document.createElement("div");
nameBox7.id = "name7";
nameBox7.innerHTML = "David Ige";
nameParent.appendChild(nameBox7);
//or
//document.getElementById("nameParent").appendChild(nameBox7);
 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/

var alias8Box = document.createElement("div");
alias8Box.id = "alias8";
alias8Box.innerHTML = "Stay Thirsty My Friends";
aliasParent.appendChild(alias8Box);

//Final Boss
/*9. Create your own profile.*/

var img9 = document.getElementsByClassName("pic9");
img9.src = "https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/bb/8b/eb/bb8beb7b-a7c6-ce90-ef4a-b81cd10d1524/AppIcon-0-1x_U007emarketing-0-85-220-6.png/246x0w.jpg";
//document.getElementsByClassName("block3 col-sm-4").appendChild(img9);


var nameBox9 = document.createElement("div");
nameBox9.className = "name9";
nameBox9.innerHTML = "Mario";
document.getElementsByClassName("row")[2].appendChild(nameBox9);

var positionBox9 = document.createElement("div");
positionBox9.className = "position9";
positionBox9.innerHTML = "Runner";
document.getElementsByClassName("row")[2].appendChild(positionBox9);

var aliasBox9 = document.createElement("div");
aliasBox9.className = "alias9";
aliasBox9.innerHTML = "Savior";
document.getElementsByClassName("row")[2].appendChild(aliasBox9);

var bioBox9 = document.createElement("div");
bioBox9.className = "bio9";
bioBox9.innerHTML = "\"Mama Mia\"";
document.getElementsByClassName("row")[2].appendChild(bioBox9);