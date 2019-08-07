//this array contains the content to be displayed 
//the content is mostly descriptions about the game
var content = ["Genre:  Interactive, Adventure Characters: Young King (the user) Setting: Modern Environment, Factories, (Possibly around the year 1800?)"
    , "The interactive story begins with the user playing as the “Young King”, who rules a country. The story takes place somewhere around the year 1800, when the industrial revolution was a huge thing. The Young King has so much power that the king is able to make people follow the king’s order such as building massive factories or creating many farm places. Based on the King’s order (the user’s decision), the user will follow a path that will eventually lead to a good or bad ending. Each decision will affect how strong the King is, in terms of power. If the King makes many bad decisions, the King will fail the people and will be kicked out. If the King makes many good decision for a certain amount of time, the King will receive a good ending."
    , "We want to use Twine(Maybe not Twine) to create a choice-based story game that helps decides what kind of ending the main character gets depending on the path and decisions that the user makes. With the coding as a tool for variable, it could help us create a health-like value that could help measure the effectiveness of the King’s decisions. Our group could also utilize the coding feature of random values in order to give random events to the King. "
    , "Although climate change isn’t the main theme of our choice-based story, it does play a role in how long the King can last until it will fail to rule the country. If the King fails to keep the environment clean through bad choices, the King will eventually fail to rule. Not only will the King fail to rule, but the user will witness the mess that user created in the story."
    , "This choice-based story is based off the game “Reigns”, where the King must make decisions in order to remain in power the longest. The idea is also based off of many different choice-based games such as The Walking Dead, Corpse Party, and Fallout. Our group might include some factual information in the game so that the audience learn about cause of climate change, based off the article."]
//this variable is used to change the content inside the display block
var displayText = document.getElementById("text");"Welcome, click next for more information";
displayText.innerHTML = "Welcome, click next for more information";
//this variable is used to keep track of which content is to be displayed 
var i = -1;

//these things will respond to the mouse clicks
document.getElementById("next").addEventListener("click", goFoward);
document.getElementById("previous").addEventListener("click", goBack);

function goFoward() {
    if (i < content.length - 1) {
        i++;
        displayText.innerHTML = content[i];
    }
}

function goBack() {
    if (i > 0) {
        i--;
        displayText.innerHTML = content[i];
    }
    else if(i == 0){
        displayText.innerHTML = "Welcome, click next for more information";
        i = 0;
    }
}