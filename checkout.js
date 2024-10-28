// checkout.js

document.addEventListener("DOMContentLoaded", function() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const freelancer = urlParams.get('freelancer');
    const service = urlParams.get('service');
    const amount = urlParams.get('amount');

    // Set the freelancer and service details on the checkout page
    document.getElementById("freelancerName").value = freelancer;
    document.getElementById("serviceDetails").value = service;
    document.getElementById("amount").value = amount;
});

document.getElementById("payBtn").addEventListener("click", function(e) {
    e.preventDefault();

    const customerEmail = document.getElementById("customerEmail").value;
    const amount = document.getElementById("amount").value;

    // Initialize Razorpay options
    const options = {
        key: "rzp_test_paymentid_123456", // Replace with your Razorpay key ID
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: document.getElementById("freelancerName").value,
        description: document.getElementById("serviceDetails").value,
        handler: function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
            email: customerEmail,
        },
        theme: {
            color: "#3399cc"
        }
    };
    
    const rzp = new Razorpay(options);
    rzp.open();
});
