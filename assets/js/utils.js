export const traerTienda = async () => {
    const response = await fetch ("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};

// export class producto

export class Producto {
    #imagen = ""
    #id = ""
}
    constructor(id, imagen) {
        this.#id = id;
        this.#imagen = imagen;
    }

    render() {
        const image = document.createElement ("img");
        image.id ="image"+ this.#id;
        image.src = this.#imagen;
        image.classList.add("image");
        
        return image;
    }

    addClickListener() {
        const image = document.querySelector("#image"+this.#id);
        image.addEventListener("click", () => {
            window.location = "/product.html?productId="+this.#id
        })
    }