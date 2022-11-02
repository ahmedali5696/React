import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = [
    {
      id: 'i1',
      title: 'Book',
      price: 5,
      description: 'This is a first product - amazing!'
    },
    {
      id: 'i2',
      title: 'Book2',
      price: 6,
      description: 'This is a second product - amazing!'
    }
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(item => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
