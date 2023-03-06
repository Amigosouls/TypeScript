interface Product{
    ProductId : string;
    ProductName:string;
    Price:string;
    Quantity:string;
}
interface Fake{
    userId: string;
    id:string;
    title:string;
    body:string;
}

function show(){
    function productDetails():Promise<Product[]>{
        return fetch('/src/product.json').then(out =>out.json())
        .then(out =>{ return out as Product[]})
    }
    productDetails().then(prod=>{
    
        document.write(prod.map(p=>"Product ID:"+ p.ProductId +'<br>'+"Product Name:"+p.ProductName+'<br>'+"Price:"+p.Price+'<br>'+"Quantity:"+p.Quantity).toString())
    })
}




    function showFakeApi() {
        function FakeDetails():Promise<Fake[]>{
            return fetch('https://jsonplaceholder.typicode.com/posts').then(out =>out.json())
            .then(out =>{ return out as Fake[]})
        }
        FakeDetails().then(det=>{
            document.write(det.map(d=>"UserID:"+d.userId +'<br>'+"ID:"+d.id+'<br>'+"Title:"+d.title+'<br>'+"Body:"+d.body+"<br>").toString())
        })
    }
   