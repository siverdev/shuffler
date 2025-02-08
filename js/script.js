const input = document.getElementById("input-text");
const output = document.getElementById("output-text");

function shuffle(originalArray) {
    let array = [...originalArray];

    //Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function shuffleText() {
    const inputText = input.value;
    const lines = inputText.split("\n").filter(line => line.trim() !== "");
    console.log(lines)
    if (lines.length < 2) {
        output.innerText = inputText; // No need to shuffle if there's only one or zero lines
        return;
    }

  
    let shuffledLines;
    
    // Shuffle until the result is different
    do {
        shuffledLines = shuffle(lines);
    } while (shuffledLines.join("\n") === lines.join("\n")); 

    output.innerText = shuffledLines.join("\n");
};

function copyOutput() {
    const outputText = output.innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Текст скопійовано!")
    })
};