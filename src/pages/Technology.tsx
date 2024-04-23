import { Grid, Stack, Typography } from "@mui/material";
import TechnologyCard from "../components/TechnologyCard";

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
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Technology
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="stretch"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              Social Implications of Computing Movie Analysis Project
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary">
            Everything Everywhere All at Once
          </Typography> */}
          </Stack>
        </Grid>
        <Grid item xs={12} />
      </Grid>
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
