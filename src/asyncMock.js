const products = [
    {
        id: '1',
        name: "Iphone 14",
        price: 100,
        category: 'celular',
        img: 'https://coolboxpe.vtexassets.com/arquivos/ids/233601-800-auto?v=638013812336300000&width=800&height=auto&aspect=true',
        stock:10,
        description: "Este smartphone de Apple resiste el agua y los cambios de clima, gracias a su sistema de protección Ceramic Shield. Además, cuenta con una nueva función de detección de choques: tu iPhone podrá detectar si sufriste un accidente de auto grave y llamará a los servicios de emergencia",
    },
    {
        id: '2',
        name: "Samsung Galaxy Tab A7",
        price: 150,
        category: 'tablet',
        img: 'https://coolboxpe.vtexassets.com/arquivos/ids/282799-800-auto?v=638235723528100000&width=800&height=auto&aspect=true',
        stock:15,
        description: "Galaxy Tab A7 Lite te ofrece ambos en un dispositivo ligero. Con solo 8 mm de grosor y 366g de peso, esta tablet se acomoda perfectamente en tu bolso o mochila sin cargar tu espalda en exceso.",
    },
    {
        id: '3',
        name: " LAPTOP HP 240 G9 DE 14",
        price: 200,
        category:'notebook',
        img: "https://coolboxpe.vtexassets.com/arquivos/ids/295943-800-auto?v=638272140129730000&width=800&height=auto&aspect=true",
        stock:20,
        description: "La económica laptop HP 240 G9 lista para su uso en empresas brinda funciones de productividad y potencia esenciales en un diseño compacto y ligero con una pantalla grande de 14 pulgadas en diagonal.",
    },
    {
        id:'4',
        name:"Laptop Lenovo V15 G2 FHD 15.6”",
        price:7500,
        category:'notebook',
        img:'https://coolboxpe.vtexassets.com/arquivos/ids/279869-1200-auto?v=638227820814700000&width=1200&height=auto&aspect=true',
        stock:10,
        description:'El nuevo portátil Lenovo V15 G2 ITL ya esta entre nosotros, un modelo de 15.6 pulgadas con resolución Full HD que llega con la premisa de ser un equipo completo para trabajadores, estudiantes y usuarios que busquen un portátil preparado con el uso de las tareas diarias del Windows 10 con total fluidez y seguridad, llevando detalles como ranura Kensington, tapa de privacidad para la cámara y altavoces con tecnología Dolby Audio.'
    },
    {
        id:'5',
        name:"Honor Magic 5 Lite”",
        price:1299,
        category:'celular',
        img:'https://coolboxpe.vtexassets.com/arquivos/ids/279060-800-auto?v=638224411930030000&width=800&height=auto&aspect=true',
        stock:15,
        description:'El celular Honor Magic 5 Lite 5G es un dispositivo que combina un diseño elegante con especificaciones impresionantes. Viene con una capacidad de almacenamiento de 128GB y 6GB de RAM, lo que te brinda un amplio espacio para guardar tus archivos y aplicaciones, y un rendimiento fluido para ejecutar múltiples tareas y aplicaciones exigentes sin problemas.'
    },
    {
        id:'6',
        name:"Samsung Galaxy A34",
        price:1399,
        category:'celular',
        img:'https://coolboxpe.vtexassets.com/arquivos/ids/261747-800-auto?v=638150452810630000&width=800&height=auto&aspect=true',
        stock:20,
        description:'Este tipo de smartphone te ofrece una gran potencia en cada una de sus funciones, gracias a sus 256 GB de memoria interna y a sus 8 GB de RAM Está diseñado para usuarios que prefieren dispositivos de excelente calidad y gran rendimiento'
    },
    {
        id:'8',
        name:"Notebook Lenovo IdeaPad 3 ",
        price:3899.90,
        category:'notebook',
        img:'https://coolboxpe.vtexassets.com/arquivos/ids/295058-800-auto?v=638271239532930000&width=800&height=auto&aspect=true',
        stock:10,
        description:'La IdeaPad 3 tiene el precio de una laptop de uso diario, pero con un diseño extraordinario. Este equipo supera con creces las expectativas gracias a su procesador hasta Intel® Core™ i7 de 10ma generación y a sus potentes opciones de memoria y almacenamiento. Prestaciones adicionales: El teclado numérico acelerará tu productividad, tanto si estás trabajando en el presupuesto familiar como preparando una hoja de cálculo.'
    },
    {
        id:'9',
        name:"Samsung Tab S6 Lite",
        price:1109.90,
        category:'tablet',
        img:'https://coolboxpe.vtexassets.com/arquivos/ids/279257-800-auto?v=638225312853870000&width=800&height=auto&aspect=true',
        stock:30,
        description:'Cambia tu forma de tomar notas Galaxy Tab S6 Lite es tu compañero portátil ideal para tomar notas. La nueva Tab S6 Lite es fina y ligera, y cuenta con una gran pantalla de 10.4”, One UI 2 en Android y un S Pen incluido y listo para funcionar. Tanto si necesitas dibujar, aprender o jugar, esta es la tablet que te acompañará en todo momento'
    }

];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },100)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (prodCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === prodCategory);
            resolve(filteredProducts);
        }, 500);
    });
};

export default products;

