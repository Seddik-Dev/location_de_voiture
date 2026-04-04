import { getCars } from "@/lib/get-cars";
import dbConnect from "@/lib/mongodb";
import Car from "@/models/Car";

export async function GET() {
  try {
    const cars = await getCars();
    return Response.json(cars);
  } catch (err) {
    console.error("GET /api/cars", err);
    return Response.json(
      { error: "Impossible de charger les véhicules." },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    // Crée directement la voiture
    const car = await Car.create(body);

    // Retourner directement les champs souhaités
    return Response.json({
      id: String(car._id),
      name: car.name,
      category: car.category,
      city: car.city,
      priceMAD: car.priceMAD,
      image: car.image,
      features: car.features || [],
    });
  } catch (err) {
    console.error("POST /api/cars", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
