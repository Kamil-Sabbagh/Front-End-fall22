function fetchAPIData() {
    return fetch('http://numbersapi.com/random/math').then(r => r.text());
}

async function apiCall() {
    result = await fetchAPIData();
    console.log(result)
    document.getElementById("api-data").innerHTML = result;

    return result;
}

function updateHTML() {
    text = apiCall();
}

((e) => {
    updateHTML();
})();