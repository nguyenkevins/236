var contentAbout = ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5"];
var displayTextAbout = document.getElementById("text-about");
displayTextAbout.innerHTML = contentAbout[0];
var j = -1;
document.getElementById("next").addEventListener("click", goFoward);
document.getElementById("previous").addEventListener("click", goBack);

function goFoward() {
    if (j < contentAbout.length - 1) {
        j++;
        displayTextAbout.innerHTML = contentAbout[j];
    }
}

function goBack() {
    if (j > 0) {
        j--;
        displayTextAbout.innerHTML = contentAbout[j];
    }
}