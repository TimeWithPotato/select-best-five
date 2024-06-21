//common function for disable the select button
function disableButton(button, text, color, padding) {
    button.disabled = true;
    button.textContent = text;
    button.style.backgroundColor = color;
    button.style.paddingRight = padding;
    button.style.paddingLeft = padding;
}

//common function for calculate player expanse
function calculatePlayerExpenses(perPlayerCost, numberOfPlayers) {
    return perPlayerCost * numberOfPlayers;
}

//common function for calculate total expanse
function calculateTotalExpenses(playerExpenses, managerExpenses, coachExpenses) {
    return playerExpenses + managerExpenses + coachExpenses;
}
