const AddtoCart = document.querySelectorAll(".add_to_cart");

AddtoCart.forEach((button) =>{
    button.addEventListener("click",() =>{
        const id =button.getAttribute("data-id");
        const title =button.getAttribute("data-title");
        const image =button.getAttribute("data-image");
        const price =button.getAttribute("data-price");
        alert("Add Success");
        const cartItem ={id,title,image,price};
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartItem);
        localStorage.setItem("cart",JSON.stringify(cart));
    });
});

const CartContents = document.querySelector(".cart_contents");

function showCartContents(){
    const contents = JSON.parse(localStorage.getItem("cart"));
    contents.forEach((content) =>{
        const cartContent = document.createElement("div");
        cartContent.className = "content_cart";
        cartContent.innerHTML = `
            <div class="id_item_cart">${content.id}</div>
            <div class="title_item_cart">${content.title}</div>
            <img src="${content.image}" alt="${content.title}" class="img_cart">
            <div class="price_item_cart">${content.price}</div>
            <button style="padding:0.5rem 1rem;" class="delete_item">Delete</button>
        `;
        CartContents.appendChild(cartContent);
        
    });
}


showCartContents();