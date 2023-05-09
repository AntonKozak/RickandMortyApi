const main = document.querySelector("main");

const displayCharacterDetails = (data) => {
  const detailContent = document.createElement("div");
  detailContent.classList.add("detail-content");

  const divContainer = document.createElement("div");
  divContainer.classList.add("container");

  const personName = document.createElement("h2");
  personName.textContent = `${data.name}`;

  const personImage = document.createElement("img");
  personImage.setAttribute("src", `${data.image}`);

  const personGender = document.createElement("h3");
  personGender.textContent = `Gender: ${data.gender}, Status: ${data.status}`;

  const personLocation = document.createElement("h3");
  personLocation.textContent = `Location: ${data.location.name}`;

  const personOrigin = document.createElement("h3");
  personOrigin.textContent = `Species: ${data.species}, Origin: ${data.origin.name}`;

  detailContent.appendChild(divContainer);
  divContainer.appendChild(personImage);
  divContainer.appendChild(personName);
  divContainer.appendChild(personGender);
  divContainer.appendChild(personOrigin);
  divContainer.appendChild(personLocation);

  main.appendChild(detailContent);
};

export default displayCharacterDetails;
