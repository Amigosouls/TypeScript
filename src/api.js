function show() {
    function productDetails() {
        return fetch('/src/product.json').then(function (out) { return out.json(); })
            .then(function (out) { return out; });
    }
    productDetails().then(function (prod) {
        document.write(prod.map(function (p) { return "Product ID:" + p.ProductId + '<br>' + "Product Name:" + p.ProductName + '<br>' + "Price:" + p.Price + '<br>' + "Quantity:" + p.Quantity; }).toString());
    });
}
function showFakeApi() {
    function FakeDetails() {
        return fetch('https://jsonplaceholder.typicode.com/posts').then(function (out) { return out.json(); })
            .then(function (out) { return out; });
    }
    FakeDetails().then(function (det) {
        document.write(det.map(function (d) { return "UserID:" + d.userId + '<br>' + "ID:" + d.id + '<br>' + "Title:" + d.title + '<br>' + "Body:" + d.body + "<br>"; }).toString());
    });
}
