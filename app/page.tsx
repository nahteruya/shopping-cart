import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="relative top-14 mx-auto grid w-full max-w-6xl grid-cols-4 gap-4 px-4 pt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
