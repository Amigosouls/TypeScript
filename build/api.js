"use strict";
function show() {
    function productDetails() {
        return fetch('/src/product.json').then(out => out.json())
            .then(out => { return out; });
    }
    productDetails().then(prod => {
        document.write(prod.map(p => "Product ID:" + p.ProductId + '<br>' + "Product Name:" + p.ProductName + '<br>' + "Price:" + p.Price + '<br>' + "Quantity:" + p.Quantity).toString());
    });
}
function showFakeApi() {
    //Access data from fakeAPI
    //https://jsonplaceholder.typicode.com/posts
    fetch('https://jsonplaceholder.typicode.com/posts')
        //fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => document.getElementById("fake").innerHTML = "<tr><td>" + json.userId + "</td><td>" + json.id + "</td><td>" + json.title + "</td><td>" + json.body + "</td>");
}
