import "./Product.css";
function Product({ title, price, features, features1 }) {
    let style={background:price>=5000?"yellow":null}
  return (
    
    <div className="product" style={style}>
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
      <h3>{price>=3000?<p>Discount of 50%</p>:<p>No discount</p>}</h3>
    </div>
  );
}
export default Product;
