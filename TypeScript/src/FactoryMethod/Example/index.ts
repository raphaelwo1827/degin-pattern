interface FactoryProduct {
    name:string;
    price:number;
    getName():string;
    getPrice():number;
}

interface ProductFactory {
    createProduct():FactoryProduct;
}


class Book implements FactoryProduct {
    name:string;
    price:number;
    page: number
    constructor(name:string, price:number, page:number){
        this.name = name;
        this.price = price;
        this.page = page;
    }

    getName = () => this.name;

    getPrice = () => this.price;

    getPage = () => 100;
}

class BookFactory implements ProductFactory {
    createProduct = () => new Book('《JavaScript 高級程序設計》', 99 , 200);
}

class Music implements FactoryProduct {
    name:string;
    price:number;
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

    getName = () => this.name;

    getPrice = () => this.price;
}

class MusicFactory implements ProductFactory {
    createProduct = () => new Music('《炎》', 99);
}

class Movie implements FactoryProduct {
    name:string;
    price:number;
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

    getName = () => this.name;

    getPrice = () => this.price;
}

class MovieFactory implements ProductFactory {
    createProduct = () => new Movie('《鬼滅之刃》', 99);
}

function createProduct(factory: ProductFactory) {
    return factory.createProduct();
  }

const book = createProduct(new BookFactory());
const music = createProduct(new MusicFactory());
const movie = createProduct(new MovieFactory());

console.log(book.getName(), book.getPrice());
console.log(music.getName(), music.getPrice());
console.log(movie.getName(), movie.getPrice());