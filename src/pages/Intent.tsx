import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const IntentPage = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Movie Makers Intent
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
          </Stack>
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Paper sx={{ padding: "4px", textIndent: "40px" }}>
          <Typography variant="body1" color={"text.primary"}>
            The movie "Everything Everywhere All at Once" uses the idea of
            traveling between parallel universes as a metaphor to explore deeper
            themes about humanity rather than just looking at the technology
            itself. While it is hard to wrap your head around seeing someone
            exist as different versions of themselves across the “multiverse”,
            the writer wasn't really focused on the technology. The
            “verse-jumping” aspect highlights a core conflict in life: the
            reluctance to accept the chaotic, unpredictable nature of life and
            humans desire to control our surroundings. At its heart, the movie
            touches on our individual and societal control issues. Evelyn must
            confront how much she relies on her identity, going through an
            existential crisis as she jumps between wildly different universe
            extremes like having hot dogs for fingers or literally becoming a
            rock. Ultimately, the writer uses this philosophical concept to pose
            an universal question to the characters and audience: Do we hold
            onto what's comfortable and familiar, even if it means if it comes
            at the price of your life’s journey? Or do we have the courage to
            embrace the unknown, which could open new doors for growth? The
            author intends to highlight the human struggle combined with the
            philosophical questions about “verse-jumping”. Even though universe
            traveling is fictional, the story resonates by depicting core
            tensions that define our existence - the constant tug-of-war between
            control and unpredictability. The writer wields imaginative sci-fi
            ideas to hold up an honest mirror to our own reality.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default IntentPage;
