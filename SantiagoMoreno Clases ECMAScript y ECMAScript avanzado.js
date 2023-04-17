class ProductManager {
    #id = 0;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = this.products.find((p) => p.code === code);
        if (product) {
            console.error(`Product code ${code} already exists`)
            return
        } else {
            const product = { title, description, price, thumbnail, code, stock };
            product.id = this.#getId();        
            this.products.push(product)
        }
    }

    #getId() {
        const oldId = this.#id;
        this.#id += 1;
        return oldId;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
            return product
        } else {
            console.error(`Product id ${id} not found`)
        }
    }
}

// Test
const pm = new ProductManager;
console.log(pm.getProducts())
pm.addProduct('producto prueba', 'Este es un producto prueba',200, 'Sin imagen', 'abc123', 25);
console.log(pm.getProducts())
pm.addProduct('producto prueba', 'Este es un producto prueba',200, 'Sin imagen', 'abc123', 25);
console.log(pm.getProducts())
console.log(pm.getProductById(0));
pm.getProductById(10);


