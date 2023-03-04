interface Product{
    productId : string;
    productName:string;
    price:string;
    quantity:string;
}

// function show(){
//     function productDetails():Promise<Product[]>{
//         return fetch('/src/product.json').then(out =>out.json())
//         .then(out =>{ return out as Product[]})
//     }
//     productDetails().then(prod=>{
    
//         console.log(prod.map(p=> p.productId +'\n'+p.productName+'\n'+p.price+'\n'+p.quantity).toString())
//     })
// }

function getUsers(): Promise<Product[]> {

    // For now, consider the data is stored on a static `users.json` file
    return fetch('/src/product.json')
        // the JSON body is taken from the response
        .then(res => res.json())
        .then(res => {
            // The response has an `any` type, so we need to cast
            // it to the `User` type, and return it from the promise
            return res as Product[]
        })
}

//When we call the getUsers function, 
//Typescript knows that we’re supposed to get back a list of User types, 
//and so we can make use of type annotations:

getUsers()
    .then(users => {
        //map- to loop through all the elements from the json
        console.log(users.map(u => u.productName + ' ' + u.productId + '\n'+u.price + '\n'+ u.quantity + '\n').toString())
        console.log(users);
    })


    function showFakeApi() {
        //Access data from fakeAPI
        //https://jsonplaceholder.typicode.com/posts
        fetch('https://jsonplaceholder.typicode.com/posts')
        //fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json.userId+"   "+json.id+'   '+json.title+'   '+json.body))
    }
    showFakeApi();