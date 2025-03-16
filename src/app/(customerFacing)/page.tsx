import db from "@/db/db";

function getNewestProducts() {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { orders: { _count: "desc" } },
    take: 6,
  });

}


const HomePage = () => {
  return <h1>Hi</h1>;
};

export default HomePage;
