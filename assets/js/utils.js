export const traerTienda = async () => {
    const response = await fetch ("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};

// export class producto

export class producto {
    imagen = ""
    title = ""

    constructor(imagen, title) {
        this.imagen = image;
        this.title = title;
    }

    render() {
        const div = document.createElement ('div')
        const jpg = document.createElement ('img')
        const titulo = document.createElement ('p')
        jpg.src = this.imagen;

        div.appendChild(jpg);
        div.appendChild(titulo);
        return div;
    }
}