import { Grid, Paper, Stack, Typography } from "@mui/material";

const moviePostersList = [
  {
    src: "https://d135u4jtzauizi.cloudfront.net/EEAAO_BY_JAMESJEAN_FINAL_Compressed_220301_161017.jpg",
  },
  { src: "https://d135u4jtzauizi.cloudfront.net/EEAAOPayoff.jpg" },
];

const SplashPage: React.FC = () => {
  const movie_poster_index = Math.floor(
    Math.random() * moviePostersList.length,
  );

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h1">
          EVERYTHING EVERYWHERE ALL AT ONCE
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
          <Typography variant="subtitle1" color="text.secondary">
            5.02.2024
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={6}>
            <Stack
              direction="column"
              alignItems="stretch"
              justifyContent="space-between"
              height={"100%"}
            >
              <Paper style={{ padding: 4 }}>
                <Typography
                  variant="subtitle1"
                  component="h1"
                  color="text.secondary"
                >
                  WRITTEN AND DIRECTED BY
                </Typography>
                <Typography variant="h4">
                  Daniel Kwan and Daniel Scheinert
                </Typography>
              </Paper>
              <Paper style={{ padding: 4 }}>
                <Typography
                  variant="subtitle1"
                  component="h1"
                  color="text.secondary"
                >
                  YEAR
                </Typography>
                <Typography variant="h4">2022</Typography>
              </Paper>
              <Paper style={{ padding: 4 }}>
                <Typography
                  variant="subtitle1"
                  component="h1"
                  color="text.secondary"
                >
                  STARRING
                </Typography>
                <Typography variant="h4">Michelle Yeoh</Typography>
                <Typography variant="h4">Stephanie Hsu</Typography>
                <Typography variant="h4">Ke Huy Quan</Typography>
                <Typography variant="h4">Jenny Slate</Typography>
                <Typography variant="h4">Harry Shum Jr.</Typography>
                <Typography variant="h5" color="text.secondary">
                  with James Hong
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  and Jamie Lee Curtis
                </Typography>
              </Paper>
              <Paper style={{ padding: 4 }}>
                <Typography
                  variant="subtitle1"
                  component="h1"
                  color="text.secondary"
                >
                  Description
                </Typography>
                <Typography variant="body1">
                  Directed by Daniel Kwan and Daniel Scheinert, collectively
                  known as Daniels, the film is a hilarious and big-hearted
                  sci-fi action adventure about an exhausted Chinese American
                  woman (Michelle Yeoh) who can't seem to finish her taxes.
                </Typography>
              </Paper>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <img
              src={moviePostersList[movie_poster_index].src}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SplashPage;
