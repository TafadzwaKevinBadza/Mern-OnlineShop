import React from 'react'
import { ListGroup, Row, Col, Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'


const ProductScreen = ({ match }) => {
    const product = products.find((p) => p._id === match.params.id)
    return (
        <>
        <Link className ='btn btn-light my-3' to='/' >
            Go Back
        </Link>

        <Row>
            <Col md={6}>
                <Image src = {product.image} alt ={product.name} />
            </Col>
            <Col md={3}></Col>
        </Row>
        </>
    )
}

export default ProductScreen
