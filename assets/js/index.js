import {traerTienda,Producto} from "./utils";

const containerLista1 = document.querySelector(".container");

const render = async () => {
    const data = await traerTienda();
    console.log(data);

    for (let item of data) {
        let cloth = new Producto (item.image, item.title);
        const RenderItem = cloth.render ();
        containerLista1.appendChild(RenderItem);
    }
}

render();