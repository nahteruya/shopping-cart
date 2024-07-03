const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const productList = [
  {
    name: "Notebook",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sollicitudin metus. Suspendisse et eros eu nunc pulvinar pellentesque quis malesuada nunc. Donec luctus dolor lacus, nec eleifend nunc efficitur vel.",
    imageUrl:
      "https://img.global.news.samsung.com/br/wp-content/uploads/2022/12/galaxyBook2_KV1000-e1670419330814.png",
    price: 4000,
    discountPercentage: 5,
  },
  {
    name: "Smartphone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sollicitudin metus. Suspendisse et eros eu nunc pulvinar pellentesque quis malesuada nunc. Donec luctus dolor lacus, nec eleifend nunc efficitur vel.",
    imageUrl:
      "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-plus-sm-s926bzvkzto-thumb-539292540",
    price: 1200,
  },
];

const createProducts = async () => {
  for (const item of productList) {
    const product = await prismaClient.product.create({
      data: item,
    });
    console.log(`Created ${product.name}`);
  }
};
