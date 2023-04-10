// 商品介面
interface IProduct {
    name: string;
    price: number;
  }
  
  // 抽象工廠介面
  interface ProductAbstractFactory {
    createProduct(): IProduct;
  }
  
  // 書籍商品
  class IBook implements IProduct {
    constructor(public name: string, public price: number) {}
  }
  
  // 書籍工廠
  class IBookFactory implements ProductAbstractFactory {
    createProduct() {
      return new IBook('《JavaScript 高級程序設計》', 99);
    }
  }
  
  // 音樂商品
  class IMusic implements IProduct {
    constructor(public name: string, public price: number) {}
  }
  
  // 音樂工廠
  class IMusicFactory implements ProductAbstractFactory {
    createProduct() {
      return new IMusic('《青花瓷》', 10);
    }
  }
  
  // 電影商品
  class IMovie implements IProduct {
    constructor(public name: string, public price: number) {}
  }
  
  // 電影工廠
  class IMovieFactory implements ProductAbstractFactory {
    createProduct() {
      return new IMovie('《霸王別姬》', 20);
    }
  }
  
  // 客戶端代碼
  const bookFactory = new IBookFactory();
  const musicFactory = new IMusicFactory();
  const movieFactory = new IMovieFactory();
  
  const iBook = bookFactory.createProduct();
  const iMusic = musicFactory.createProduct();
  const iMovie = movieFactory.createProduct();
  
  console.log(iBook); // Book { name: '《JavaScript 高級程序設計》', price: 99 }
  console.log(iMusic); // Music { name: '《青花瓷》', price: 10 }
  console.log(iMovie); // Movie { name: '《霸王別姬》', price: 20 }