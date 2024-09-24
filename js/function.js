// Function to get input field value by ID
function getInputFieldByValue(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

// Function to get an element by ID
function getElements(id) {
    const element = document.getElementById(id);
    return element;
}
//Add donation
function addDonations(currentTotalDonation, inputDonation) {
    return currentTotalDonation + inputDonation;
}
//Remaining balance
function calculateRemainingBalance(totalBalanceValue, inputDonation) {
    return totalBalanceValue - inputDonation;
}
//Tracking all the transactions after each donation
function addDonationsIntoHistory() {
    donationListElement.innerHTML = '';
    for (let i = 0; i < donationsList.length; i++) {
        const donation = donationsList[i];
        const listItem = document.createElement('li');
        listItem.className ="mx-auto max-w-5xl rounded-lg shadow-md p-4 border border-gray-200";
        listItem.innerHTML = `
        <div>
            <span class="text-xl font-semibold">${donation.amount} Taka ${donation.title}</span><br>
            <span>${donation.date}(Bangladesh)</span>
        
        </div> `;
        donationListElement.appendChild(listItem);
    }
}