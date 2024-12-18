const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/shopApp')
  .then(() => {
    console.log('CONNECTION OPEN!!!')
  })
  .catch((err) => {
    console.log('OH NO ERROR!!!!')
    console.log(err)
  })

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive ya dodo!'],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L'],
  },
})

const Product = mongoose.model('Product', productSchema)

// const bike = new Product({
//   name: 'Tire Pump',
//   price: 19.5,
//   categories: ['Cycling'],
// })
// bike
//   .save()
//   .then((data) => {
//     console.log('IT WORKED!')
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log('OH NO ERROR!')
//     console.log(err)
//   })
Product.findOneAndUpdate(
  { name: 'Cycling Jersey' },
  { price: 28.5, categories: ['Cycling'], size: 'XS' },
  { new: true, runValidators: true }
)
  .then((data) => {
    console.log('IT WORKED!')
    console.log(data)
  })
  .catch((err) => {
    console.log('OH NO ERROR!')
    console.log(err)
  })
