import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const ComputerReliabilityPage = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Computer Reliability
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
            Computer Reliability relates heavily to the techniques of
            multiversal travel, or "verse jumping", displayed in Everything
            Everywhere All At Once. For starters, the technology used to travel
            is not at all safe or intuitive. Easily and often misused, if the
            user does not wait for the ear set to turn green, they will split
            their mind, and if done enough, can cause irreversible damage. This
            is the side effect of using the device only slightly too soon.
            Another obvious reliability issue with the headset (and the
            multiversal travel itself) is that it causes the user to do a
            ridiculous act that they would never do to activate. This causes
            problems because it sometimes makes the device borderline unusable
            for the person trying to use it, and can cause the person to put
            themselves in great harms way. Below I will identify the five moral
            components of Kantianism for this case.
            <li>
              <ul>
                <b>1. Identify Moral Agents:</b> The moral agents are the person
                doing the action and the creators of the rules of verse jumping,
                as well as anyone who may also be put in harms way as a result.
              </ul>
              <ul>
                <b>2. Identify the rule:</b> The rule is that the main moral
                agent must do an insane action to jump from one multiverse to
                another.
              </ul>
              <ul>
                <b>3. Universalize the Rule.</b> In order to jump from one
                multi-verse to another, an action must be done that the jumper
                would never actually do.
              </ul>
              <ul>
                <b>4. Examine the consequences and contradictions: </b> The
                consequences of this rule are that the jumper has to do
                something likely entirely outside of their comfort zone in order
                to jump from multiverse to multiverse.
              </ul>
              <ul>
                <b>5. How is the primary moral agent treating others: </b> The
                primary moral agent is the jumper, who is sometimes violating
                the space and comfort of others in order to do the jumping.
              </ul>
            </li>
            Through this analysis, we can see that a rule that forces the jumper
            to do things well outside of their comfort zone that could
            potentially cause themselves or others significant hurt is not
            particularly moral.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default ComputerReliabilityPage;
