const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bunny_reading.jpeg") {
    myImage.setAttribute("src", "images/ultraviolence.jpeg");
  } else {
    myImage.setAttribute("src", "images/bunny_reading.jpeg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name to enter Taylor's website.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `My name is Taylor! Nice to meet you, ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `My name is Taylor! Nice to meet you, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
      