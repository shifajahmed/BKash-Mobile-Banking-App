document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 1234567890;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const MobileNUmberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  console.log(MobileNUmberValueConverted, pinNumberValueConverted);

  if (
    MobileNUmberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href="./home.html"
    console.log("all value matched");
  } else {
    console.log("invalid credentials");
  }
});
