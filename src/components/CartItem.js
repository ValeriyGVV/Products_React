import {Badge, ListGroup, Button} from "react-bootstrap";

function CartItem({product, removeFromCart, changeCount}) {
  return <ListGroup.Item className={'d-flex align-items-center justify-content-between'}
      key={product.id}>
    <div>{product.brand} {product.title}
      &nbsp;(<span className={'text-danger'}>${product.price}</span>)
    </div>
    <div>
      <Button variant="danger" size={'sm'} disabled={product.count === 1} className={'ml-2 mr-1 text-white cart-item-remove'}
              onClick={() => changeCount(product.id, product.count - 1)}>-</Button>
      {product.count}
      <Button variant="success" size={'sm'} className={'mr-2 ml-1 text-white cart-item-remove'}
              onClick={() => changeCount(product.id, product.count + 1)}>+</Button>

      <Badge bg="danger" className={'ml-2 text-white cart-item-remove'}
             onClick={() => removeFromCart(product.id)}>Remove</Badge>
    </div>

  </ListGroup.Item>
}

export default CartItem;