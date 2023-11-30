
function calculate() {

    let totalwatt = parseInt(document.getElementById("tot-watt").value);
    let tothour = parseInt(document.getElementById("tot-hour").value);
    let unitrate = parseInt(document.getElementById("watt-cost").value);

    let panelno = Math.round((totalwatt * tothour) / 1500);
    panelno = panelno.toString();
    let saving = (totalwatt * 30 * 12 * 10 * unitrate) - (panelno * 13000);
    saving = saving.toString();
    document.getElementById("saving-details01").innerText = panelno;
    document.getElementById("saving-details02").innerText = saving;

    document.getElementById("saving-details01").style.backgroundColor = "#FFD700";
    document.getElementById("saving-details02").style.backgroundColor = "#FFD700";
}

function clearentries() {

    document.getElementById("tot-watt").value = "";
    document.getElementById("tot-hour").value = "";
    document.getElementById("watt-cost").value = "";

    document.getElementById("saving-details01").innerText = "X";
    document.getElementById("saving-details02").innerText = "XXXX";

    document.getElementById("saving-details01").style.backgroundColor = "rgb(222, 49, 222)";
    document.getElementById("saving-details02").style.backgroundColor = "rgb(222, 49, 222)";
}

function findkeyname() {
    const websiteText = document.querySelector('body').textContent;
    let word = document.getElementById("search").value;

    if (websiteText.toLowerCase().includes(word.toLowerCase())) {
        // Do something if the word is found.
        console.log("found");
        // console.log(document.querySelector('body').textContent.slice(websiteText.indexOf(word[0]), websiteText.indexOf(word[word.length-1])));
        // console.log(document.querySelector('body').textContent.replace(word, "<font color='red'>"+word+"</font>"));
    } else {
        // Do something if the word is not found.
        console.log("not found");
    }
}
