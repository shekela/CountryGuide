let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div style="margin-bottom: 1em; letter-spacing: 0.3px;">
            <div style="margin-bottom: 1em; letter-spacing: 0.3px; display:flex;">
                <h4>Capital:</h4>
                <h5 style="font-size:15px;">${data[0].capital[0]}</h5>
            </div>
        </div>
        <div style="margin-bottom: 1em; letter-spacing: 0.3px;">
            <div style="margin-bottom: 1em; letter-spacing: 0.3px; display:flex;">
                <h4>Capital:</h4>
                <h5 style="font-size:15px;">${data[0].continents[0]}</h5>
            </div>
        </div>
         <div style="margin-bottom: 1em; letter-spacing: 0.3px;">
            <div style="margin-bottom: 1em; letter-spacing: 0.3px; display:flex;">
                <h4>Capital:</h4>
                <h5 style="font-size:15px;">${data[0].population}</h5>
            </div>
        </div>
        <div style="margin-bottom: 1em; letter-spacing: 0.3px;">
            <div style="margin-bottom: 1em; letter-spacing: 0.3px; display:flex;">
                <h4>Capital:</h4>
                <h5 style="font-size:15px;">${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</h5>
            </div>
        </div>
         <div class="wrapper">
            <div style="margin-bottom: 1em; letter-spacing: 0.3px; display:flex;">
                <h4>Common Languages:</h4>
                <h5 style="font-size:15px;">${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</h5>
            </div>
        </div>
      `
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});