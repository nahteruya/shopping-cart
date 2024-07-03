import Card from "./_components/Card";
import Header from "./_components/Header";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const productList = await prisma.product.findMany();
  return (
    <main>
      <Header />
      <div className="relative top-14 mx-auto grid w-full max-w-6xl grid-cols-4 gap-4 px-4 pt-10">
        {productList.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
