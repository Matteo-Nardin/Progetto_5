const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDIzODEwNDUsImV4cCI6MTcwMzU5MDY0NX0.Wvr8SPMdWxQykwRQl35BgC_kPcdMUU_eQoGapB6yprU";
const uri = "https://striveschool-api.herokuapp.com/api/product/";
let listData =[];

document.addEventListener("DOMContentLoaded", async () => {
    getData(uri);
});

let btnNew = document.querySelector(".btn.btn-primary");
let btnDelete = document.querySelector(".btn.btn-danger");
let btnModify = document.querySelector(".btn.btn-info");
let btnReset = document.querySelector(".btn.btn-warning");

let array = [];
let productId;
console.log(array.length)

btnNew.addEventListener("click", ()=>{

    let nameValue = document.querySelector("#name").value;
    let descriptionValue = document.querySelector("#description").value;
    let brandValue = document.querySelector("#brand").value;
    let imageValue = document.querySelector("#image").value;
    let priceValue = document.querySelector("#price").value;

    let oggetto = {
        name: nameValue.trim(),
        description: descriptionValue,
        brand: brandValue,
        imageUrl: imageValue,
        price: priceValue,
    };
    
    createData(oggetto, uri);
    console.log(listData)
})

btnDelete.addEventListener("click", ()=>{
    let nameValue = document.querySelector("#name").value;
    let obj = listData.find((element) => element.name === nameValue);

    if(obj){
        console.log("eliminato")
        console.log(obj._id);
        deleteData(uri + obj._id)
    }else{
        console.log("non trovato")
    }
})

btnModify.addEventListener("click", ()=>{
    let nameValue = document.querySelector("#name").value;
    let obj = listData.find((element) => element.name === nameValue);

    if(obj){

        let nameValue = document.querySelector("#name").value;
        let descriptionValue = document.querySelector("#description").value;
        let brandValue = document.querySelector("#brand").value;
        let imageValue = document.querySelector("#image").value;
        let priceValue = document.querySelector("#price").value;

        let oggetto = {
            name: nameValue.trim(),
            description: descriptionValue,
            brand: brandValue,
            imageUrl: imageValue,
            price: priceValue,
        };

        console.log("modificato")
        console.log(obj._id);
        modifyData(oggetto ,uri + obj._id)
    }else{
        console.log("non trovato")
    }
})

btnReset.addEventListener("click", ()=>{
    document.getElementById("myForm").reset();
})

// ------------------------------FETCH-------------------
function getData(uri) {
    let nameValue = document.querySelector("#name").value;
    fetch(uri, {
        method: "GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDIzOTQwMDUsImV4cCI6MTcwMzYwMzYwNX0.WJr9UazWO8io_XzYLfa7li7no3YGH4gOtGRG29kFEFg",
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log( data.find((element) => element.name === nameValue) );
        listData = data;
        //console.log(listData);
    })
}

function createData(data, uri) {
    fetch(uri, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDIzOTQwMDUsImV4cCI6MTcwMzYwMzYwNX0.WJr9UazWO8io_XzYLfa7li7no3YGH4gOtGRG29kFEFg",
            "Content-Type": "application/json"
        }
    })
    .catch(err => console.log(err));
}

//aggiungere l'id generato dal server _id, quindi prima bisogna prelevarlo
function deleteData(uri){
    //nell'URL probabilmente ci sarà un id dell'oggetto da cancellare
    fetch(uri,{                
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDIzOTQwMDUsImV4cCI6MTcwMzYwMzYwNX0.WJr9UazWO8io_XzYLfa7li7no3YGH4gOtGRG29kFEFg",
        }
    })
}

function modifyData(data, uri){
    fetch(uri,{                //nell'URL probabilmente ci sarà un id dell'oggetto
        method: "PUT",
        body: JSON.stringify(data), //oggetto modificato
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDIzOTQwMDUsImV4cCI6MTcwMzYwMzYwNX0.WJr9UazWO8io_XzYLfa7li7no3YGH4gOtGRG29kFEFg",
            "Content-Type": "application/json"
        }
    })
}
