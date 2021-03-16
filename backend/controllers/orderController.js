import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'

// @desc        Create New Order
// @route       POST /api/orders
// @access      Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippindAddress,
    paymentmethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = res.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No Order Items')
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippindAddress,
      paymentmethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    })

    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }
})

export { addOrderItems }
