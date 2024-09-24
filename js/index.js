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
//card-1 errors
const emptyError = getElements('empty-error-c1');
const nanError = getElements('nan-error-c1');
const balanceError = getElements('balance-error-c1');
cardOneDonationBtn.addEventListener('click', function () {
    const donationOne = parseFloat(getInputFieldByValue('c1-input-field'));
    const totalBalanceValue = parseFloat(totalBalanceElement.innerText);
    if (!donationOne) {
        emptyError.classList.remove('hidden');
        alert("⚠️ Donation amount cannot be empty.");
        return false;
    }
    else if (isNaN(donationOne) || donationOne <= 0) {
        emptyError.classList.add('hidden');
        nanError.classList.remove('hidden');
        alert("⚠️ Please enter a valid donation amount.");
        return false;
    }
    else if (donationOne > totalBalanceValue) {
        nanError.classList.add('hidden');
        balanceError.classList.remove('hidden');
        alert("⚠️ Donation amount cannot exceed your available balance.");
        return false;
    }
    else {
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
    }
    // adding all the donations in the history list dynamically
    addDonationsIntoHistory();

    const modalInputOne = document.getElementById('my_modal_1');
    modalInputOne.showModal();
    document.getElementById('c1-input-field').value = "";
});
document.getElementById('continue-btn').addEventListener('click', function () {
    const modal = document.getElementById('my_modal_1');
    modal.close();
});
// ****************CARD-2 DONATION FUNCTIONALITIES *************************
//card-2 errors
const emptyError2 = getElements('empty-error-c2');
const nanError2 = getElements('nan-error-c2');
const balanceError2 = getElements('balance-error-c2');
const cardTwoDonationBtn = getElements('c2-button');
cardTwoDonationBtn.addEventListener('click', function () {
    const donationTwo = parseFloat(getInputFieldByValue('c2-input-field'));
    const totalBalanceValue = parseFloat(totalBalanceElement.innerText);

    if (!donationTwo) {
        emptyError2.classList.remove('hidden');
        alert("⚠️ Donation amount cannot be empty.");
        return false;
    }
    else if (isNaN(donationTwo) || donationTwo <= 0) {
        emptyError2.classList.add('hidden');
        nanError2.classList.remove('hidden');
        alert("⚠️ Please enter a valid donation amount.");
        return false;
    }
    else if (donationTwo > totalBalanceValue) {
        nanError2.classList.add('hidden');
        balanceError2.classList.remove('hidden');
        alert("⚠️ Donation amount cannot exceed your available balance.");
        return false;
    }
    else {
        // Update remaining balance
        const remainingBalance = calculateRemainingBalance(totalBalanceValue, donationTwo);
        totalBalanceElement.innerText = remainingBalance.toFixed(2);

        // Update total donation
        const currentTotalDonation = parseFloat(totalDonationSecondElement.innerText);
        const newTotalDonation = addDonations(currentTotalDonation, donationTwo);
        totalDonationSecondElement.innerText = newTotalDonation.toFixed(2);

        // Add donation to history (fix the object structure)
        donationsList.push({
            amount: donationTwo,
            title: cardTwoTitleElement.innerText,
            date: new Date().toLocaleString()
        });

        // Update donation history
        addDonationsIntoHistory();
        const modalInputTwo = getElements('my_modal_1');
        modalInputTwo.showModal();
        document.getElementById('c2-input-field').value = "";
    }


});
// ****************CARD-3 DONATION FUNCTIONALITIES *************************
//card-2 errors
const emptyError3 = getElements('empty-error-c3');
const nanError3 = getElements('nan-error-c3');
const balanceError3 = getElements('balance-error-c3');
const cardThreeDonationBtn = getElements('c3-button');
cardThreeDonationBtn.addEventListener('click', function () {
    const donationThree = parseFloat(getInputFieldByValue('c3-input-field'));
    const totalBalanceValue = parseFloat(totalBalanceElement.innerText);


    if (!donationThree) {
        emptyError3.classList.remove('hidden');
        alert("⚠️ Donation amount cannot be empty.");
        return false;
    }
    else if (isNaN(donationThree) || donationThree <= 0) {
        emptyError3.classList.add('hidden');
        nanError3.classList.remove('hidden');
        alert("⚠️ Please enter a valid donation amount.");
        return false;
    }
    else if (donationThree > totalBalanceValue) {
        nanError3.classList.add('hidden');
        balanceError3.classList.remove('hidden');
        alert("⚠️ Donation amount cannot exceed your available balance.");
        return false;
    }
    else {

        // Update remaining balance
        const remainingBalance = calculateRemainingBalance(totalBalanceValue, donationThree);
        totalBalanceElement.innerText = remainingBalance.toFixed(2);

        // Update total donation
        const currentTotalDonation = parseFloat(totalDonationThirdElement.innerText);
        const newTotalDonation = addDonations(currentTotalDonation, donationThree);
        totalDonationThirdElement.innerText = newTotalDonation.toFixed(2);
        donationsList.push({
            amount: donationThree, 
            title: cardThreeTitleElement.innerText, 
            date: new Date().toLocaleString()
        });

        // Update donation history
        addDonationsIntoHistory();
        const modalInputThree = getElements('my_modal_1');
        modalInputThree.showModal();
        document.getElementById('c3-input-field').value = "";
    }

});
//***********Toggled Donation and History Button ************
const donationButtonElement = getElements('donation-btn');
const historyButtonElement = getElements('history-btn');
const cardContainer = getElements('card-container');
const transactionHistory = getElements('transaction-history');

historyButtonElement.addEventListener('click', function () {
    transactionHistory.classList.remove('hidden');
    historyButtonElement.classList.remove('bg-white');
    historyButtonElement.classList.add('bg-lime-400');
    donationButtonElement.classList.remove('bg-lime-400');
    cardContainer.classList.add('hidden');
})

donationButtonElement.addEventListener('click', function () {
    cardContainer.classList.remove('hidden');
    transactionHistory.classList.add('hidden');
    historyButtonElement.classList.remove('bg-lime-400');
    donationButtonElement.classList.add('bg-lime-400');
})