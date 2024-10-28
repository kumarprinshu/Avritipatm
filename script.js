// Generate a unique hash for each payment session
function generateUniqueHash() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

document.getElementById('generateLinkBtn').addEventListener('click', function() {
    const freelancerName = document.getElementById('freelancerName').value;
    const serviceDetails = document.getElementById('serviceDetails').value;
    const description = document.getElementById('description').value;
    const deadline = document.getElementById('deadline').value;
    const email = document.getElementById('email').value;
    const price = document.getElementById('price').value;
    const currency = document.getElementById('currency').value;
    const uniqueHash = generateUniqueHash();

    if (freelancerName === '' || serviceDetails === '' || description === '' || deadline === '' || email === '' || price === '' || currency === '') {
        alert('Please fill in all fields.');
        return;
    }

    const paymentLink = `checkout.html?freelancer=${encodeURIComponent(freelancerName)}&service=${encodeURIComponent(serviceDetails)}&description=${encodeURIComponent(description)}&deadline=${encodeURIComponent(deadline)}&email=${encodeURIComponent(email)}&price=${encodeURIComponent(price)}&currency=${encodeURIComponent(currency)}&hash=${uniqueHash}`;
    
    const copyBtn = document.getElementById('copyLinkBtn');
    copyBtn.style.display = 'block';
    copyBtn.setAttribute('data-link', paymentLink);
});

document.getElementById('copyLinkBtn').addEventListener('click', function() {
    const paymentLink = this.getAttribute('data-link');

    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = `${window.location.origin}/${paymentLink}`;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    const copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
});
