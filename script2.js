const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDIzODEwNDUsImV4cCI6MTcwMzU5MDY0NX0.Wvr8SPMdWxQykwRQl35BgC_kPcdMUU_eQoGapB6yprU";
const uri = "https://striveschool-api.herokuapp.com/api/product/";
//che schifo
let cardContainer = document.querySelector(".row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-lg-5.g-3");
let btnDetails = document.querySelector(".btn.btn-danger.details");
console.log(cardContainer);

// console.log(createData(oggetto2, uri))
// console.log(getData(uri))

document.addEventListener("DOMContentLoaded", async () => {
    //createData(oggetto, uri)
    getData(uri)
    // displayProduct(data)
    deleteData(uri+"/6578937f26761400183c351f") //"657892d426761400183c350a"
});

btnDetails.addEventListener("click",()=>{
    const goToDetails = id => {
        window.location.assign("./details.html?picId=" + id);
      };
})

if(window.location.pathname === "/index.html"){}

function getData(uri) {
    fetch(uri, {
        method: "GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDIzOTQwMDUsImV4cCI6MTcwMzYwMzYwNX0.WJr9UazWO8io_XzYLfa7li7no3YGH4gOtGRG29kFEFg",
        }
    })
    .then(response => response.json())
    .then(data => {
        displayProduct(data);
        console.log(data);
    })
}

function createData(data, uri) {
    fetch(uri+productId, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDIzOTQwMDUsImV4cCI6MTcwMzYwMzYwNX0.WJr9UazWO8io_XzYLfa7li7no3YGH4gOtGRG29kFEFg",
            "Content-Type": "application/json"
        }
    })
    .catch(err => console.log(err));
}

function deleteData(uri){
    //nell'URL probabilmente ci sarà un id dell'oggetto da cancellare
    fetch(uri,{                
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDIzOTQwMDUsImV4cCI6MTcwMzYwMzYwNX0.WJr9UazWO8io_XzYLfa7li7no3YGH4gOtGRG29kFEFg",
        }
        }
    )
}
// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDIzOTQwMDUsImV4cCI6MTcwMzYwMzYwNX0.WJr9UazWO8io_XzYLfa7li7no3YGH4gOtGRG29kFEFg"
// }
// })
function displayProduct(obj){

    obj.forEach(element => {
        cardContainer.innerHTML += `
        <div class="col">
            <div class="card shadow-sm h-100 ">
            <img src="${element.imageUrl}" class="img-fluid card-img-top" alt="${element.name}">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text badge rounded-pill bg-dark mb-2">${element.brand}</p>
                <p class="card-text">${element.description}</p>
                <p class="fs-4">${element.price}$</p>
                <div>
                    <button class="btn btn-danger">Modifica</button>
                    <button class="btn btn-danger details">Scopri di più</button>
                </div>
            </div>
            </div>
        </div>`
    });
}

// pagina dettaglio
// const goToDetails = id => {
//     window.location.assign("./details.html?picId=" + id);
//   };