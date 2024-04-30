import { Grid, Stack, Typography } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  author: string;
  last_update: Date;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h1">
          {props.title}
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
            {props.author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {props.last_update.toDateString()}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} />
    </Grid>
  );
};

export default SectionHeader;
