//top level await en e consumo de una api

import fetch from "node-fetch";
//conectar a la api
const response = await fetch("https://api.escuelajs.co/api/v1/products");
// transformarlo en un objeto json
const products = await response.json();

export { products };
