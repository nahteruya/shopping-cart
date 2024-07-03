import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Notebook",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sollicitudin metus.",
    imageUrl:
      "https://img.global.news.samsung.com/br/wp-content/uploads/2022/12/galaxyBook2_KV1000-e1670419330814.png",
    price: 4000,
    discountPercentage: 5,
  },
  {
    id: 2,
    name: "Smartphone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sollicitudin metus.",
    imageUrl:
      "https://img.global.news.samsung.com/br/wp-content/uploads/2022/12/galaxyBook2_KV1000-e1670419330814.png",
    price: 1200,
  },
  {
    id: 3,
    name: "Headphone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sollicitudin metus.",
    imageUrl:
      "https://img.global.news.samsung.com/br/wp-content/uploads/2022/12/galaxyBook2_KV1000-e1670419330814.png",
    price: 500,
  },
  {
    id: 4,
    name: "Tablet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sollicitudin metus.",
    imageUrl:
      "https://img.global.news.samsung.com/br/wp-content/uploads/2022/12/galaxyBook2_KV1000-e1670419330814.png",
    price: 3200,
    discountPercentage: 3,
  },
  {
    id: 5,
    name: "Airpods",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sollicitudin metus.",
    imageUrl:
      "https://img.global.news.samsung.com/br/wp-content/uploads/2022/12/galaxyBook2_KV1000-e1670419330814.png",
    price: 80,
  },
  {
    id: 6,
    name: "Monitor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sollicitudin metus.",
    imageUrl:
      "https://img.global.news.samsung.com/br/wp-content/uploads/2022/12/galaxyBook2_KV1000-e1670419330814.png",
    price: 230,
    discountPercentage: 2,
  },
  {
    id: 7,
    name: "CPU",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sollicitudin metus.",
    imageUrl:
      "https://img.global.news.samsung.com/br/wp-content/uploads/2022/12/galaxyBook2_KV1000-e1670419330814.png",
    price: 8600,
    discountPercentage: 7,
  },
  {
    id: 8,
    name: "Mouse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sollicitudin metus.",
    imageUrl:
      "https://img.global.news.samsung.com/br/wp-content/uploads/2022/12/galaxyBook2_KV1000-e1670419330814.png",
    price: 60,
  },
];

export async function GET() {
  return NextResponse.json(
    {
      products,
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
