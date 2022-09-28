import { resourceLimits } from "worker_threads";

interface api_response{
    text : string
}


function fetchAPIData() {
    return fetch('http://numbersapi.com/random/math').then(r => r.text());
}

async function apiCall() {
    const result : api_response = { text: await fetchAPIData() };
    console.log(result)
    const element = document.getElementById("api-data") as HTMLDivElement | null;
    if (element != null){
        element.innerHTML = result.text;
   }
}


((e) => {
    console.log("running");
    setInterval(apiCall, 5000);
})();