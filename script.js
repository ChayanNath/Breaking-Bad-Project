import elementsList from "./elementsList.js";

const breakifyButtonElement = document.getElementById("breakify");

// Function to break the text
const breakify = (string) => {
  let result = [];
  const length = string.length;

  for (let i = 0; i < length; i++) {
    const oneChar = string[i].toUpperCase();
    const twoChar = `${oneChar}${string[i + 1]}`;

    if (elementsList.includes(twoChar)) {
      result = [string.slice(0, i), twoChar, string.slice(i + 2, length)];
      break;
    }

    if (elementsList.includes(oneChar)) {
      result = [string.slice(0, i), oneChar, string.slice(i + 1, length)];
    }
  }

  if (!result.length) {
    return [string, "", ""];
  }

  return result;
};

// Function to create a span element with a class
const createSpanWithClass = (text) => {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
};

breakifyButtonElement.addEventListener("click", () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const breakifiedFirstName = breakify(firstName);
  const breakifiedLastName = breakify(lastName);
  const breakifiedContainer = document.getElementById("breakifiedContainer");

  // Clear any existing content in the breakifiedContainer
  breakifiedContainer.innerHTML = "";

  // Create spans for breakifiedFirstName and append to div
  const firstNameDiv = document.createElement("div");
  firstNameDiv.className = "breakified-label";
  breakifiedFirstName.forEach((name) => {
    const span = createSpanWithClass(name);
    firstNameDiv.appendChild(span);
  });

  // Create spans for breakifiedLastName and append to div
  const lastNameDiv = document.createElement("div");
  lastNameDiv.className = "breakified-label";
  breakifiedLastName.forEach((name) => {
    const span = createSpanWithClass(name);
    lastNameDiv.appendChild(span);
  });

  // Append the first and last name divs to the breakifiedContainer
  breakifiedContainer.appendChild(firstNameDiv);
  breakifiedContainer.appendChild(lastNameDiv);
});
