import TechnologyCard from "../components/TechnologyCard";
import PageHeader from "../components/PageHeader";

const technologyItems = [
  {
    name: "Verse Jumping",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6497/6497416_sd.jpg",
    description:
      "Technology that acts as connection from main verse to another allowing a user to gain skills from alternate versions of themselves",
  },
  {
    name: "Lifepath Map",
    image:
      "https://static.wikia.nocookie.net/everythingeverywhere/images/7/73/Multiverse.jpg",
    description:
      "Map that shows all the decision that a persons has made in their life.",
  },
];

const TechnologyPage = () => {
  return (
    <>
      <PageHeader title="Technology" last_update={new Date(2024, 3, 26)} />
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
