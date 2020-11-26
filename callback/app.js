const countries = [];

function newCountry(country, callback) {
    countries.push(country);
    console.log(`attche: ${country}`);
    callback();
}

function printCountries() {
    console.log(countries);
}

function startCallbackHell() {
    setTimeout(() => {
        newCountry('Colombia', printCountries);

        setTimeout(() => {
            newCountry('Mexico', printCountries);

            setTimeout(() => {
                newCountry('Argentina', printCountries);
            }, 3000);
        }, 2000);
    }, 3000);
}

startCallbackHell();