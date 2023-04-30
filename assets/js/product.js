import{getProducts} from "./utils"

const render = async () => {
    const url = String(window.location);
    console.log (url.split("?"))
    alert(url);
}

render();