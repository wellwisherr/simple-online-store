fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
            // document.getElementById('root').innerHTML=json[2].title;

            let data="";
            json.map((values)=>{
                data += ` <div class="card">                               
                <h3 class="price-tag">$ ${values.price}</h3>
                <div class="gradient"></div>
                <img src="${values.image}" class="image-container"/> 
                <div class="row-1">
                  <h2 class="title">${values.title}</h2>
                </div> 
                <div class="row-2">
                  <p class="color-text">${values.category}</p>
                  <div class="available-colors"></div>
                </div>
                
                <div class="row-3">
                  <p>${values.description}</p>
                </div>                
                <button class="add-to-cart-btn">Add to Cart</button>                
              </div> `
            });

            document.getElementById("products").innerHTML=data;

            }).catch((e)=>{
                console.log(e);
            })

