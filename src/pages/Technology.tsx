import TechnologyCard from "../components/TechnologyCard";

const technologyItems = [
  {
    name: "Verse Jumping",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6497/6497416_sd.jpg",
    description:
      "Technology that acts as connection from main verse to another allowing a user to gain skills from alternate versions of themselves",
  },
];

const TechnologyPage = () => {
  return (
    <>
      {technologyItems.map((item) => (
        <TechnologyCard
          name={item.name}
          image={item.image}
          image_alt={item.name}
          description={item.description}
        />
      ))}
    </>
  );
};

export default TechnologyPage;
