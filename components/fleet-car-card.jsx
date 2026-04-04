"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FleetCarCard({
  car,
  layout = "scroll",
  index = 0,
  days = 1,
  totalPrice,
}) {
  const isScroll = layout === "scroll";
  const isRow = layout === "row";

  const formattedDaily = `${car.priceMAD.toLocaleString("fr-MA")} MAD / jour`;
  const formattedTotal =
    totalPrice !== undefined
      ? `${totalPrice.toLocaleString("fr-MA")} MAD`
      : null;

  return (
    <motion.div
      className={
        isScroll
          ? "min-w-[280px] md:min-w-[320px] snap-start flex-shrink-0 group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          : isRow
            ? "group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
            : "group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
      }
      initial={{ opacity: 0, x: isScroll ? 30 : 0, y: isScroll ? 0 : 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: isScroll ? 0 : index * 0.05 }}
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div
        className={
          isRow
            ? "relative h-56 md:h-auto md:w-72 overflow-hidden bg-muted shrink-0"
            : "relative h-56 overflow-hidden bg-muted shrink-0"
        }
      >
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`p-5 flex flex-col ${
          isRow ? "flex-1 justify-between" : !isScroll ? "flex-1" : ""
        }`}
      >
        <p className="text-sm font-semibold text-accent mb-1">{car.category}</p>
        <p className="text-xs text-muted-foreground mb-2">
          Base {car.city}, Maroc
        </p>

        <h3 className="text-lg font-bold text-foreground mb-3">{car.name}</h3>

        {/* Features */}
        <div className="space-y-2 mb-5">
          {car.features.map((feature, i) => (
            <div
              key={i}
              className="text-sm text-muted-foreground flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        {/* Price Section */}
        <div
          className={`border-t border-border pt-4 ${
            !isScroll ? "mt-auto" : ""
          }`}
        >
          <p className="text-xs text-muted-foreground">À partir de</p>
          <p className="text-xl font-bold text-primary mb-2">
            {formattedDaily}
          </p>

          {/* Total Price (Dynamic) */}
          {formattedTotal && days > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-accent/10 text-accent rounded-lg p-3 text-sm font-semibold"
            >
              Total pour {days} jour{days > 1 ? "s" : ""} :
              <span className="ml-1 font-bold text-primary">
                {formattedTotal}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
