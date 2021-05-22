// FACT:- If it works , don't touch it.

// Utils
function createCopyButton() {
    let copyButton = document.createElement('button')
    copyButton.textContent = 'Copy'
    copyButton.style.fontSize = "1rem";
    copyButton.style.backgroundColor = "white";
    copyButton.style.float = "right";
    copyButton.style.color = "#100f0fab";
    copyButton.style.cursor = "pointer";
    copyButton.style.border = "1px solid rgb(185, 185, 185)";
    copyButton.style.padding = "3px";
    copyButton.style.margin = "1px";
    copyButton.style.lineHeight = "1.1rem";
    copyButton.style.textTransform = "None";
    copyButton.style.fontFamily = "Helvetica,sans-serif;";

    return copyButton;

}


// Task to perfrom when input and output are given under single element.
// NOTE : Not every codechef problem adhers to this type.

function pre_mathjax_1() {
    var node = document.querySelector('pre.mathjax-support')

    const CopyInputButton = createCopyButton();
    CopyInputButton.id = 'copy_input_button';

    const CopyOutputButton = createCopyButton();
    CopyOutputButton.id = 'copy_output_button';

    CopyInputButton.addEventListener('click', () => {
        const input_text = document.querySelector('pre.mathjax-support').childNodes[2].textContent;
        navigator.clipboard.writeText(input_text);
        document.getElementById('copy_input_button').textContent = 'Copied!';
    });


    CopyOutputButton.addEventListener('click', () => {
        const output_text = document.querySelector('pre.mathjax-support').childNodes[5].textContent;
        navigator.clipboard.writeText(output_text);
        document.getElementById('copy_output_button').textContent = 'Copied!'
    });

    node.insertBefore(CopyInputButton, node.childNodes[1]);
    node.insertBefore(CopyOutputButton, node.childNodes[4]);
}


// Task to perfrom when input and output are given as two different element.
// NOTE : Not every codechef problem adhers to this type.

function pre_mathjax_2() {
    const nodeList = document.querySelectorAll('pre.mathjax-support');

    const CopyInputButton = createCopyButton();
    CopyInputButton.id = 'copy_input_button';

    const CopyOutputButton = createCopyButton();
    CopyOutputButton.id = 'copy_output_button';


    CopyInputButton.addEventListener('click', () => {
        const input_text = document.querySelectorAll('code.mathjax-support')[0].textContent;
        navigator.clipboard.writeText(input_text);
        document.getElementById('copy_input_button').textContent = 'Copied!';

    });


    CopyOutputButton.addEventListener('click', () => {
        const output_text = document.querySelectorAll('code.mathjax-support')[1].textContent;
        navigator.clipboard.writeText(output_text);
        document.getElementById('copy_output_button').textContent = 'Copied!'
    });

    nodeList[0].insertBefore(CopyInputButton, nodeList[0].childNodes[0]);
    nodeList[1].insertBefore(CopyOutputButton, nodeList[1].childNodes[0]);

}


// Main Code starts here
setTimeout(function () {
    try {
        const len = document.querySelectorAll('pre.mathjax-support').length
        if (len === 2) {
            pre_mathjax_2();
        }
        else if (len == 1) {
            pre_mathjax_1();
        }
        else {
            throw "New DOM Type"
        }

    } catch (err) {
        alert(err + ".Send this problem link to developer.");
    }
}, 2000);
