
const main = document.querySelector("main");

const displayLocationPage = (data) => {
    data.forEach((location) => {
    const contentLocationDiv = document.createElement('div');
    contentLocationDiv.innerHTML = `
        <div class="content"> 
        <div class="container">
        <h2>Planet name: ${location.namn}</h2>
        <h4>Type of planet: ${location.type}</h4>
        <h5>Some Dimension:${location.dimension}</h5>
        </div>
        </div>
    `;
    main.appendChild(contentLocationDiv);});
    
};

export default displayLocationPage;