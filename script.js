// Set max date to today
document.getElementById('dob').max = new Date().toISOString().split('T')[0];

function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');
    if (!dobInput) {
        resultDiv.textContent = 'Please select your date of birth.';
        resultDiv.classList.add('show');
        return;
    }
    const dob = new Date(dobInput);
    const today = new Date();
    if (dob > today) {
        resultDiv.textContent = 'Date of birth cannot be in the future!';
        resultDiv.classList.add('show');
        return;
    }
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    resultDiv.textContent = `You are ${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}, and ${days} day${days !== 1 ? 's' : ''} old.`;
    resultDiv.classList.add('show');
} 