import "./Product.css";
function Product({ title, price, features, features1 }) {
  return (
    <div className="product">
      <h1>{title}</h1>
      <h3>Price : {price}</h3>
      <div style={{border:"2px solid black", margin:"2px"}}>
        <ul>
          {features.map((items) => (
            <li>{items}</li>
          ))}
        </ul>
        <hr />
        <p>{features1.a}</p>
        <p>{features1.b}</p>
      </div>
    </div>
  );
}
export default Product;
