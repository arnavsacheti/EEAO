import { Box, Grid, Stack, Typography } from "@mui/material";

const PresentationPage = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Presentation
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
      <Box sx={{ width: "960px", margin: "auto" }}>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRY7FDr9edUwafn1qc7R-ymbl-MZLEBGl29n2WTRYt4KhT4H_hPR4AM1IGRpyVRhHlr6qO8kucRiu0A/embed?start=true&loop=true&delayms=30000"
          frameBorder="0"
          width="960"
          height="569"
          allowFullScreen={true}
        />
      </Box>
    </>
  );
};

export default PresentationPage;
