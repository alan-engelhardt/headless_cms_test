const url = "https://test1-e198.restdb.io/rest/medlemmer";

const person = {
    fornavn: "Niels",
    email: "nil@kea.dk",
    billede: "123"
};

const postData = JSON.stringify(person);

fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "5f7ee1835799e648a5a8edf9",
            "cache-control": "no-cache"
        },
        body: postData
    })
    .then(res => res.json())
    .then(data => console.log(data));
