import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function Product({product, addToCart, removeFromCart}) {
  return <Col sm={6} md={4} lg={3} xs={12} className={'d-flex'}>
    <Card className={'flex-grow-1'}>
      <Card.Img variant="top" src={product.thumbnail} style={{height: '10rem', objectFit: 'contain'}} />
      <Card.Body className={'d-flex flex-column justify-content-between'}>
        <div>
          <Card.Title>
            <Link to={`/products/${product.id}`}>
              {product.brand} {product.title}
            </Link>
          </Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </div>
        <div className={'mt-4'}>
          <Card.Title className={'text-danger'}>
            ${product.price}
          </Card.Title>
          {product.addedToCart ? <Button variant="danger"
                                         className={'mt-3'}
                                         onClick={() => removeFromCart(product.id)}>Remove from Cart</Button> :
              <Button variant="success"
                      className={'mt-3'}
                      onClick={() => addToCart(product.id)}>Add to Cart</Button>}
        </div>

      </Card.Body>
    </Card>
  </Col>
}

export default Product;