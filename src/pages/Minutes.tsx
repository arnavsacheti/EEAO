import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

const groupMembers = [
  {
    name: 'Shawn Greenwood',
    role: 'Information Privacy, Work and Wealth',
    image: '/path/to/image-shawn.jpg' // Path to Shawn's image
  },
  {
    name: 'Arnav Sacheti',
    role: 'Privacy and The Government, Website',
    image: '/path/to/image-arnav.jpg' // Path to Arnav's image
  },
  {
    name: 'Alexander Kraemling',
    role: 'Intellectual Property, Computer Reliability',
    image: '/path/to/image-alexander.jpg' // Path to Alexander's image
  },
  {
    name: 'Jan Pilja',
    role: 'Network Communications, Computer & Network Security',
    image: '/path/to/image-jan.jpg' // Path to Jan's image
  }
];

const MinutesPage = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Minutes
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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5" gutterBottom>
          Group Members:
        </Typography>
        {groupMembers.map(member => (
          <Card key={member.name} sx={{ display: 'flex' }}>
            {/* <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={member.image}
              alt={member.name}
            /> */}
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h6">{member.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default MinutesPage;
