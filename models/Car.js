import mongoose from 'mongoose'

const CarSchema = new mongoose.Schema({
  name: String,
  category: String,
  city: String,
  priceMAD: Number,
  image: String,
  features: [String],
  available: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true })

export default mongoose.models.Car || mongoose.model('Car', CarSchema)