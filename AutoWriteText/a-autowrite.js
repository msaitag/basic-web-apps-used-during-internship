const auto = document.getElementById('auto');
const text = "Wake Up Neo...";

let index = 0;

function autoText() {
    auto.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    };
};

setInterval(autoText, 200);