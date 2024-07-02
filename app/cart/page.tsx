import Header from "../components/Header";

export default function Cart() {
  return (
    <main>
      <Header />
      <div className="relative top-14 mx-auto w-full max-w-6xl px-4 pt-10">
        <table className="w-full table-fixed border-collapse rounded-lg bg-white">
          <thead>
            <tr className="border-b-[1px] border-solid border-b-gray-300">
              <th className="w-auto p-4 text-left">Product</th>
              <th className="w-40 p-4 text-center">Quantity</th>
              <th colSpan={2} className="w-40 p-4 text-center">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[1px] border-solid border-b-gray-300">
              <td className="p-4">Notebook 1</td>
              <td className="p-4 text-center">1</td>
              <td className="p-4 text-center">$4000</td>
              <td className="text-pink p-4 text-right">X</td>
            </tr>
            <tr className="border-b-[1px] border-solid border-b-gray-300">
              <td className="p-4">Notebook 2</td>
              <td className="p-4 text-center">1</td>
              <td className="p-4 text-center">$4000</td>
              <td className="text-pink p-4 text-right">X</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end p-4">
          <span>
            Total: <strong>$8000.00</strong>
          </span>
        </div>
      </div>
    </main>
  );
}
