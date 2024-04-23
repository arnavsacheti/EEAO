import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const IntellectualPropertyPage = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Intelectual Property
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
              Alexander Kraemling
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Paper sx={{ padding: "4px", textIndent: "40px" }}>
          <Typography variant="body1" color={"text.primary"}>
            Intellectual Property does not have particularly strong ties to the
            movie Everything Everywhere all at once (EEAO). In the movie, there
            is no point in which trademarked symbols play a significant role, or
            copyrights stop characters from doing something, or patents protect
            some sort of mechanism or device, or trade secrets stop the
            characters from learning something they needed to know. In fact, the
            ultimate everything bagel that forms the main structure of the movie
            is fully revealed to the protagonist by the villain. So although
            there is no mention of these topics in the movie, in the spirit of
            multiverses, we can pretend that there is a multiverse in the movie
            in which the device the protagonists use to jump bodies into
            different multiverses is given intellectual rights by its makers.
            Deconstructing the property rights it may have had, it would likely
            have been a trade secret; they would not want just anyone getting
            their hands on the technology that allows you to jump into different
            universes and gain the skills of that multiverses version of you.
            Because it would be a trade secret, it likely would not have been
            patented or copyrighted. In order to copyright or patent something,
            great details need to be provided on that thing, so that it can be
            determined whether or not a copyright or patent on said thing has
            been broken. For a trade secret, the protagonists likely would have
            wanted to preserve as much information on their techniques as
            possible. On the other hand, the antagonists in this story are
            depicted by a circle shape on their foreheads. This symbol could be
            trade marked by the antagonists, if they so pleased.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default IntellectualPropertyPage;
