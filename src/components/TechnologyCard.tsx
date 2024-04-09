import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface TechnologyCardProps {
    name: string,
    image: string,
    image_alt: string,
    description: string,
};

const TechnologyCard: React.FC<TechnologyCardProps> = (props: TechnologyCardProps) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={props.image}
                alt={props.image_alt}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.description}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default TechnologyCard;