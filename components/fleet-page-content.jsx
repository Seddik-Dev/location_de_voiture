"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { ArrowLeft, SlidersHorizontal, LayoutGrid, Rows } from "lucide-react";
import { FleetCarCard } from "./fleet-car-card";

export default function FleetPageContent({ initialCars = [], loadError = false }) {
  const [city, setCity] = useState("all");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [daysInput, setDaysInput] = useState("1");
  const [viewMode, setViewMode] = useState("grid");

  const cars = initialCars;

  const days = useMemo(() => {
    const n = parseInt(daysInput, 10);
    return Number.isFinite(n) && n >= 1 ? n : 1;
  }, [daysInput]);

  const cities = useMemo(
    () => [...new Set(cars.map((car) => car.city).filter(Boolean))].sort(),
    [cars],
  );
  const categories = useMemo(
    () => [...new Set(cars.map((car) => car.category).filter(Boolean))].sort(),
    [cars],
  );

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchCity = city === "all" || car.city === city;
      const matchCategory = category === "all" || car.category === category;
      const matchMin = minPrice === "" || car.priceMAD >= Number(minPrice);
      const matchMax = maxPrice === "" || car.priceMAD <= Number(maxPrice);

      return matchCity && matchCategory && matchMin && matchMax;
    });
  }, [cars, city, category, minPrice, maxPrice]);

  return (
    <>
      <section className="pt-24 pb-8 px-4 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost" asChild className="mb-6 -ml-2">
              <Link href="/" className="gap-2 flex items-center">
                <ArrowLeft className="w-4 h-4" />
                Retour à l&apos;accueil
              </Link>
            </Button>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Notre flotte au Maroc
            </h1>
            {loadError ? (
              <p className="text-destructive text-sm max-w-2xl">
                Impossible de joindre la base de données. Vérifiez{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">MONGODB_URI</code> dans{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">.env.local</code>, puis relancez le serveur.
              </p>
            ) : null}
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-4 bg-secondary/40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24 self-start">
            <div className="bg-background rounded-2xl shadow-lg border border-border p-6 space-y-6">
              <div className="flex items-center gap-2 text-foreground">
                <SlidersHorizontal
                  className="w-5 h-5 text-accent"
                  aria-hidden
                />
                <h2 className="text-lg font-semibold">Filtres</h2>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fleet-city">Ville de retrait</Label>
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger id="fleet-city" className="w-full">
                      <SelectValue placeholder="Choisir une ville" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les villes</SelectItem>
                      {cities.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fleet-category">Type de véhicule</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="fleet-category" className="w-full">
                      <SelectValue placeholder="Choisir une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les catégories</SelectItem>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fleet-min">Budget minimum (MAD / jour)</Label>
                  <Input
                    id="fleet-min"
                    type="number"
                    min={0}
                    inputMode="numeric"
                    placeholder="Ex. : 250"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fleet-max">Budget maximum (MAD / jour)</Label>
                  <Input
                    id="fleet-max"
                    type="number"
                    min={0}
                    inputMode="numeric"
                    placeholder="Ex. : 800"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fleet-days">
                    Durée de la location (jours)
                  </Label>
                  <Input
                    id="fleet-days"
                    type="number"
                    min={1}
                    inputMode="numeric"
                    placeholder="Ex. : 3 ou 7 pour une semaine"
                    value={daysInput}
                    onChange={(e) => setDaysInput(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <p className="text-sm text-muted-foreground">
                {filteredCars.length} véhicule
                {filteredCars.length !== 1 ? "s" : ""} correspond
                {filteredCars.length !== 1 ? "ent" : ""} à vos critères
                {" · "}
                total estimé sur{" "}
                <span className="font-medium text-foreground">{days}</span> jour
                {days > 1 ? "s" : ""}
              </p>

              <div className="flex items-center gap-2 bg-background border border-border rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition ${
                    viewMode === "grid"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="Vue grille"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setViewMode("row")}
                  className={`p-2 rounded-md transition ${
                    viewMode === "row"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="Vue liste"
                >
                  <Rows className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "flex flex-col gap-6"
              }
            >
              {!loadError && cars.length === 0 ? (
                <p className="text-muted-foreground col-span-full">
                  Aucun véhicule enregistré pour le moment. Ajoutez des documents dans la collection{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs">cars</code> (via l&apos;API{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs">POST /api/cars</code> ou MongoDB
                  Compass).
                </p>
              ) : null}
              {filteredCars.map((car, index) => (
                <FleetCarCard
                  key={car.id}
                  car={car}
                  layout={viewMode === "grid" ? "grid" : "row"}
                  index={index}
                  totalPrice={car.priceMAD * days}
                  days={days}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
