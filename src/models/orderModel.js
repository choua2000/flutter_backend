import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      orderDate: {
        type: Date,
        default: Date.now
      },
      orderStatus: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
      },
      items: [
        {
          productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
          },
          productName: {
            type: String,
            required: true
          },
          quantity: {
            type: Number,
            required: true
          },
          price: {
            type: Number,
            required: true
          },
          variant: {
            type: String,
          },
        }
      ],
      totalPrice: {
        type: Number,
        required: true
      },
      shippingAddress: {
        phone: String,
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
      },
    
      paymentMethod: {
        type: String,
        enum: ['cod', 'prepaid']
      },
    
      couponCodeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupon'
    },
      orderTotal: {
        subtotal: Number,
        discount: Number,
        total: Number
      },
      trackingUrl: {
        type: String
      }
},{
    timestamps: true
});

export default mongoose.model("Order", orderSchema)