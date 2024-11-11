const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images\firefox.jpg") {
    myImage.setAttribute("src", "images\edge.jpg");
  } else {
    myImage.setAttribute("src", "images\firefox.jpg");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");



  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  myButton.onclick = () => {
    setUserName();
  };

