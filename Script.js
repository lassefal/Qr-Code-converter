const qrText = document.getElementById("qrText");

const generateBtn = document.getElementById("generateBtn");

const clearBtn = document.getElementById("clearBtn");

const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.getElementById("qrcode");

const message = document.getElementById("message");


// Generate QR Code
generateBtn.addEventListener("click", function () {

  const text = qrText.value.trim();

  // Check if input is empty
  if (text === "") {

    alert("Please enter text or a URL.");

    return;
  }


  // Remove previous QR code
  qrContainer.innerHTML = "";


  // Create new QR code
  new QRCode(qrContainer, {

    text: text,

    width: 220,

    height: 220,

    colorDark: "#000000",

    colorLight: "#ffffff",

    correctLevel: QRCode.CorrectLevel.H

  });


  message.textContent = "QR code generated successfully.";

  downloadBtn.style.display = "block";

});


// Clear everything
clearBtn.addEventListener("click", function () {

  qrText.value = "";

  qrContainer.innerHTML = "";

  message.textContent = "Your QR code will appear here.";

  downloadBtn.style.display = "none";

});


// Download QR Code
downloadBtn.addEventListener("click", function () {

  const qrImage = qrContainer.querySelector("img");

  if (!qrImage) {

    alert("Generate a QR code first.");

    return;
  }


  const link = document.createElement("a");

  link.href = qrImage.src;

  link.download = "my-qr-code.png";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

});
