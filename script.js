function performChecks() {
    // valori input
    var pattern = document.getElementById("pattern").value;
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;

    // validare pattern gol
    if (pattern.trim() === "") {
        alert("Pattern-ul nu poate fi gol.");
        return;
    }

    // validare pattern
    try {
        new RegExp(pattern);
    } catch (error) {
        alert("Pattern-ul este invalid: " + error.message);
        return;
    }

    // validare text1
    var regex = new RegExp(pattern);
    var text1Matches = regex.test(text1);

    // afisare mesaj
    if (text1Matches) {
        alert("Text1 corespunde pattern-ului.");
    } else {
        alert("Text1 nu corespunde pattern-ului.");
    }

    // pattern-uri in text2
    var text2Matches = text2.match(new RegExp(pattern, "g"));

    // afisare aparitii
    if (text2Matches) {
        var matchesList = "Pattern-uri gasite in Text2:\n";
        text2Matches.forEach(function(match) {
            matchesList += match + "\n";
        });
        alert(matchesList);
    } else {
        alert("Nu s-au gasit pattern-uri in Text2.");
    }
}