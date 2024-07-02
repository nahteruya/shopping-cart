import Image from "next/image";

export default function Card() {
  return (
    <div className="flex h-96 w-full flex-col overflow-hidden rounded-lg shadow">
      <div className="w-full p-5">
        <Image
          src="/notebook.jpg"
          alt="notebook"
          width={236}
          height={160}
          className="object-contain"
        />
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <div className="flex w-full flex-col gap-2 p-4">
        <h3 className="text-pink text-center text-lg font-bold">Notebook 1</h3>
        <p className="text-xs">
          This is a notebook description. This is a notebook description.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex justify-start">
            <strong className="text-sm font-bold">$4000.00</strong>
            <span className="text-[10px] line-through">$5000.00</span>
          </div>
          <div className="flex flex-col">
            <span className="text-green text-xs">in cart</span>
            <button className="bg-pink rounded p-1 text-xs font-semibold text-gray-100">
              add to cart +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
