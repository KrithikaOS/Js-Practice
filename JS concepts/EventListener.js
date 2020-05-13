let clickButton = document.getElementById("btn");
console.log(clickButton);
if (clickButton)
    clickButton.addEventListener('click', popOneTimeAlert);

function popOneTimeAlert() {
    alert('Thanks for clicking!');
    clickButton.removeEventListener('click', popOneTimeAlert);
}