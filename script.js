// Initialize EmailJS
emailjs.init("FppOxlPMpUnGjkYZN"); // Replace with your EmailJS public key
emailjs.send("service_xa80oqc", "template_fnw8v28", {...});

let selectedProduct = "";
let selectedPrice = "";

function order(product, price) {
  selectedProduct = product;
  selectedPrice = price;

  document.getElementById("orderText").innerText =
    `Ordering ${product} - ₦${price}`;

  document.getElementById("orderBox").classList.remove("hidden");
}

function sendOrder() {
  const phone = document.getElementById("phone").value;
  const quantity = document.getElementById("quantity").value;

  if (!phone || quantity <= 0) {
    alert("Please enter a valid phone number and quantity");
    return;
  }

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    product: selectedProduct,
    price: selectedPrice,
    phone: phone,
    quantity: quantity
  });

  alert("Order sent successfully! We will contact you.");
  document.getElementById("phone").value = "";
  document.getElementById("quantity").value = 1;
}
