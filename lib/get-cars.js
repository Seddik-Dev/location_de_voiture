import dbConnect from '@/lib/mongodb'
import Car from '@/models/Car'

/**
 * Returns plain car objects for the UI (id = MongoDB _id string).
 */
export async function getCars() {
  await dbConnect()
  const docs = await Car.find()


  return docs.map((doc) => ({
    id: String(doc._id),
    name: doc.name ?? '',
    category: doc.category ?? '',
    city: doc.city ?? '',
    priceMAD: Number(doc.priceMAD) || 0,
    image: doc.image || '/car-1.jpg',
    features: Array.isArray(doc.features) ? doc.features : [],
  }))
}
