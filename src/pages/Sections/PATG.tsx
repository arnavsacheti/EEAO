import React from 'react';
import { Grid, Box, Stack, Typography, Paper } from "@mui/material";

const PATGPage: React.FC = () => {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h2" component="h1">
                        Privacy and the Government
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
                            Arnav Sacheti
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} />
            </Grid>
            <Box sx={{ width: '90%', margin: 'auto' }} >
                <Paper sx={{ padding: '4px', textIndent: '40px' }}>
                    <Typography variant='body1' color={'text.primary'}>
                        In the United States we have a clear precedent for the protections we have in regards to the collection of public data, stemming from the 1967 Katz V US case, stating that people have a reasonable expectation of privacy in their telephone conversations. This has been upheld to extend past telephone conversations, now it is understood as individuals have a reasonable expectation of privacy when in public.
                    </Typography>
                    <Typography variant='body1' color={'text.primary'}>
                        The film “Everything Everywhere All at Once” introduces the Alphaverse, portrayed as the best versions of everyone. Being the best, they have not only discovered the multiverse but also developed the technology to jump between them, coined as ‘Verse Jumping’. As pointers of this technology, the Alphaverse takes the onus of preserving the balance of the multiverse; assuming the position of authority to govern/influence other verses.
                    </Typography>
                    <Typography variant='body1' color={'text.primary'}>
                        One of the technologies the Alphaverse developed is a tool to track a persons ‘lifepaths’, the cumulative outcomes of a person's decisions across various realities. Using this technology the Alphaverse is able to single out Evelyn as the best candidate to combat Jobu Tupaki. While this ability to survey a population can have positives as is seen here, it also highlights the comprehensive surveillance on persons actions, both actual and potential. This raises privacy concerns regarding modern data collection and surveillance practices. The idea that decisions in your future and/or in alternative universes impact you are beyond our current privacy regulations, questioning to what extent surveillance is permissible.
                    </Typography>
                    <Typography variant='body1' color={'text.primary'}>
                        Another technology developed with the goal of scientific progress is the verse jumping headset, a device that allows a user to communicate and influence their counterparts in other universes. The Alphaverse uses this technology to assert control over Evelyn’s actions, guiding her quest to stop Jobu Tupaki. An implication of this tool being that it can manipulate decisions across realities; shown in a verse jump to the ‘Raccacoonie’ verse, where Evelyn uncovers a fellow chef that is being controlled by a raccoon. While not presented as nefarious, the lack of regulation could prompt nefarious use leading to potential butterfly effects.
                    </Typography>
                    <Typography variant='body1' color={'text.primary'}>
                        Everything Everywhere All at Once mirrors ongoing debates regarding the use of technology for government surveillance, highlighting the need for safeguards and policies governing the use of advanced technologies that intrude into personal privacy and autonomy.
                    </Typography>
                </Paper>
            </Box>
        </>
    );
};

export default PATGPage;