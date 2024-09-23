// Global Variables
const totalBalanceElement = getElements('total-balance');
const totalDonationFirstElement = getElements('c1-total-donation');
const totalDonationSecondElement = getElements('c2-total-donation');
const totalDonationThirdElement = getElements('c3-total-donation');
//const totalDonationElement = getElements('c1-total-donation');
const donationListElement = getElements('list-of-donations');
const cardOneTitleElement = getElements('card-1-title');
const cardTwoTitleElement = getElements('card-2-title');
const cardThreeTitleElement = getElements('card-3-title');
//storing the list of donations
let donationsList = []; 

// ****************CARD-1 DONATION FUNCTIONALITIES *************************
const cardOneDonationBtn = getElements('c1-button');
cardOneDonationBtn.addEventListener('click', function () {
    const donationOne = parseFloat(getInputFieldByValue('c1-input-field'));
    const totalBalanceValue = parseFloat(totalBalanceElement.innerText);

    // Validate donation input
    if (isNaN(donationOne) || donationOne <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    // Update remaining balance
    const remainingBalance = calculateRemainingBalance(totalBalanceValue, donationOne);
    totalBalanceElement.innerText = remainingBalance.toFixed(2);

    // Update total donation (remove 'BDT' text and parse number)
    const currentTotalDonation = parseFloat(totalDonationFirstElement.innerText);
    const newTotalDonation = addDonations(currentTotalDonation, donationOne);
    totalDonationFirstElement.innerText = newTotalDonation.toFixed(2);

    // Add donation to history
    donationsList.push({
        amount: donationOne,
        title: cardOneTitleElement.innerText,
        date: new Date().toLocaleString()
    });

    // adding all the donations in the history list dynamically
    addDonationsIntoHistory();
});
// ****************CARD-2 DONATION FUNCTIONALITIES *************************
const cardTwoDonationBtn = getElements('c2-button');
cardTwoDonationBtn.addEventListener('click', function () {
    const donationTwo = parseFloat(getInputFieldByValue('c2-input-field'));
    const totalBalanceValue = parseFloat(totalBalanceElement.innerText);

    // Validate donation input
    if (isNaN(donationTwo) || donationTwo <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    // Update remaining balance
    const remainingBalance = calculateRemainingBalance(totalBalanceValue, donationTwo);
    totalBalanceElement.innerText = remainingBalance.toFixed(2);

    // Update total donation
    const currentTotalDonation = parseFloat(totalDonationSecondElement.innerText);
    const newTotalDonation = addDonations(currentTotalDonation, donationTwo);
    totalDonationSecondElement.innerText = newTotalDonation.toFixed(2);

    // Add donation to history (fix the object structure)
    donationsList.push({
        amount: donationTwo, // Use the same key as Card-1
        title: cardTwoTitleElement.innerText, // Use the same key as Card-1
        date: new Date().toLocaleString()
    });

    // Update donation history
    addDonationsIntoHistory();
});
// ****************CARD-3 DONATION FUNCTIONALITIES *************************
const cardThreeDonationBtn = getElements('c3-button');
cardThreeDonationBtn.addEventListener('click', function () {
    const donationThree = parseFloat(getInputFieldByValue('c3-input-field'));
    const totalBalanceValue = parseFloat(totalBalanceElement.innerText);

    // Validate donation input
    if (isNaN(donationThree) || donationThree <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    // Update remaining balance
    const remainingBalance = calculateRemainingBalance(totalBalanceValue, donationThree);
    totalBalanceElement.innerText = remainingBalance.toFixed(2);

    // Update total donation
    const currentTotalDonation = parseFloat(totalDonationThirdElement.innerText);
    const newTotalDonation = addDonations(currentTotalDonation, donationThree);
    totalDonationThirdElement.innerText = newTotalDonation.toFixed(2);

    // Add donation to history (fix the object structure)
    donationsList.push({
        amount: donationThree, // Use the same key as Card-1
        title: cardThreeTitleElement.innerText, // Use the same key as Card-1
        date: new Date().toLocaleString()
    });

    // Update donation history
    addDonationsIntoHistory();
});
