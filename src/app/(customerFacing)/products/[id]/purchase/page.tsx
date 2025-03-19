import db from "@/db/db";
import { notFound } from "next/navigation";

const PurchasePage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await db.product.findUnique({ where: { id } });

  if (product === null) return notFound();
  
  return <div>PurchasePage</div>;
};

export default PurchasePage;
