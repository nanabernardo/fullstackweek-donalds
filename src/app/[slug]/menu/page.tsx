import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantCategories from "./component/categories";
import RestauranteHeader from "./component/header";

interface RestauranteMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const RestauranteMenuPage = async ({
  params,
  searchParams,
}: RestauranteMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: { menuCategories: { include: { products: true } } },
  });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div>
      <RestauranteHeader restaurant={restaurant} />
      <RestaurantCategories restaurant={restaurant} />
    </div>
  );
};

export default RestauranteMenuPage;

// http://localhost:3000/fsw-donalds/menu?consumptionMethod=dine_in
