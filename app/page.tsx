import Card from "./_components/Card";
import Header from "./_components/Header";

import { Product } from "./_contexts/CartProvider";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/products", {
    next: {
      revalidate: 120,
    },
  });

  if (!response.ok) return <p>Failed to lead products</p>;

  const { products }: { products: Product[] } = await response.json();

  return (
    <main>
      <Header />
      <div className="relative top-14 mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
