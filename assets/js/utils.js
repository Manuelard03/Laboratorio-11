export const traerTienda = async () => {
    const response = await fetch ("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};

// export class producto

export class producto {
    
}