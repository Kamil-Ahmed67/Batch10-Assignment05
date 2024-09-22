// Global Variables
const totalBalanceElement = getElements('total-balance');

// ****************CARD-1 DONATION FUNCTIONALITIES *************************
const cardOneDonationBtn = getElements('c1-button');
cardOneDonationBtn.addEventListener('click', function() {
    const donationOne = getInputFieldByValue('c1-input-field');
    const totalBalanceValue = parseFloat(totalBalanceElement.innerText); 
    const remainingBalance = totalBalanceValue - donationOne;
    totalBalanceElement.innerText = remainingBalance.toFixed(2);
});
