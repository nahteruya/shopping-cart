import Image from "next/image";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed z-10 mb-10 flex h-16 w-full items-center border-b border-b-gray-500 bg-gray-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo.png" alt="" width={48} height={48} />
          <h1 className="text-pink text-lg font-semibold">Dev Store</h1>
        </Link>
        <Link href="/cart" className="relative h-10 w-11 cursor-pointer">
          <ShoppingCart size={32} className="absolute bottom-0 left-0" />
          <span className="absolute right-0 top-0 rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-100">
            2
          </span>
        </Link>
      </div>
    </header>
  );
}
