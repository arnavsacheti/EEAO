import React from "react";
import { Grid, Box, Stack, Typography, Paper } from "@mui/material";

const NCPage: React.FC = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Networked Communications
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
              Jan Pilja
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Paper sx={{ padding: "4px", textIndent: "40px" }}>
          <Typography variant="body1" color={"text.primary"}>
            "Everything Everywhere All at Once" is a movie that dives deep into
            the huge potential of the power of technology. The main theme
            revolves around Evelyn's ability to "verse-jump" and tap into the
            memories and skills of her alternate selves from different
            dimensions. This can be seen as a metaphor for the vast expansion of
            human capabilities and knowledge facilitated by modern computing and
            digital networks. Much like how the film explores various aspects of
            social media, mobile apps, and the internet, it showcases how Evelyn
            is able to tap into the skills and experiences of her alternate
            selves such as cooking, Kung Fu, and empathy thanks to the internet.
            This reflects how the internet has made sharing knowledge and
            abilities widespread and efficient. The movie vividly depicts
            Evelyn's ability to jump between verses, reminding us of the special
            qualities of digital technology discussed in the chapter. The film's
            kaleidoscopic and nonlinear structure mirrors the dynamic and
            decentralized nature of the internet, where information and
            connections can spread in unexpected ways. Moreover, the vastness of
            the digital realm - with its rapid expansion of data and devices
            making it challenging to control or censor completely - is
            reminiscent of the immense size and intricacy of the multiverse.
            Additionally, the film's exploration of Evelyn's struggle to protect
            her loved ones and identity amidst this technological "breakthrough"
            serves as a reminder of the risks associated with unrestricted
            connectivity and access to information."Everything Everywhere" shows
            how Evelyn's exploration of multiple universes can disrupt her sense
            of self and put her important relationships at risk, mirroring the
            chapter's exploration of the perils of "echo chambers" and the
            breakdown of shared reality on social media. The character Jobu
            Tupaki, depicted in the film, serves as a cautionary tale about how
            easily technology can dominate a person's life and create chaos.
            Jobu's skill in understanding and manipulating the endless
            possibilities of the multiverse mirrors the chapter's discussion of
            how the internet can undermine democracy by spreading misinformation
            and weakening agreement. In the end, Ultimately, the movie
            "Everything Everywhere All At Once" offers a deeply personal
            exploration of the ways in which advanced technologies can
            profoundly affect human life. Through its imaginative science
            fiction storyline, it presents a compelling visual depiction of key
            technological concepts such as the democratization of information
            and the changing nature of identity.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default NCPage;
