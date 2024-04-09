import { Grid, Typography } from "@mui/material";

const SplashPage: React.FC = () => {
    return (<div style={{ padding: '20px' }}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h2" component="h1">
                    EVERYTHING EVERYWHERE ALL AT ONCE
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Social Implications of Computing Movie Analysis Project
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    5.02.2024
                </Typography>
            </Grid>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/wxN1T1uxQ2g?si=tgl1VNELTxPhALXC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Grid>
    </div>

    )
};

export default SplashPage;