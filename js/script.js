document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.getElementsByClassName('select-button');
    const maxPlayer = 5;

    for (const button of buttons) {
        button.addEventListener('click', function () {
            const ul = document.getElementById('selected-list');
            const liNumber = ul.getElementsByTagName('li').length;

            if (liNumber < maxPlayer) {
                // Remove the N/A element
                const blank = document.getElementById('n/a');
                if (blank) {
                    blank.style.display = 'none';
                }
            
                // Disable the button
                disableButton(button, 'Selected', 'green', '3.5rem');

                // Get the card and player name
                const card = button.parentNode;
                const playerNameElement = card.querySelector('.player-name');
                const playerName = playerNameElement.textContent;

                // Create and add the new list item
                const li = document.createElement('li');
                li.textContent = playerName;
                li.style.color = 'white';
                li.style.listStyle = 'visible';
                li.style.marginLeft = '2rem';
                ul.appendChild(li);
            } else {
                alert('You cannot add more than five players');
            }
        });
    }

    // Calculate Player Expenses
    document.getElementById('player-expanse-calculate').addEventListener('click',function(){
        const perPlayer = parseFloat(document.getElementById('per-player').value);
        const ul = document.getElementById('selected-list');
        const liNumber = ul.getElementsByTagName('li').length;
        const playerExpenses = calculatePlayerExpenses(perPlayer, liNumber);
        console.log(playerExpenses);
        document.getElementById('player-expanses-amount').textContent = playerExpenses.toFixed(2);
    });

    // Calculate Total Expenses
    document.getElementById('calculate-total').addEventListener('click',function(){
        const playerExpenses = parseFloat(document.getElementById('player-expanses-amount').textContent);
        const managerExpenses = parseFloat(document.getElementById('manager-expanses').value);
        const coachExpenses = parseFloat(document.getElementById('coach-expanses').value);
        const totalExpenses = calculateTotalExpenses(playerExpenses, managerExpenses, coachExpenses);
        document.getElementById('total-amount').textContent = totalExpenses.toFixed(2);
    });
});
