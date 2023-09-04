import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";

export default function Noticia({ noticia }) {

  const { urlToImage, url, title, description, source } = noticia;
  return (
    <Grid
    item
    md={6}
    lg={4}
    >
      <Card >
      <CardMedia
        component="img"
        alt={`Imagen de la noticia ${title}`}
        image={urlToImage ?? 'https://media.istockphoto.com/id/1182477852/es/foto/noticias-de-%C3%BAltima-hora-noticias-mundiales-con-mapa-backgorund.jpg?s=612x612&w=0&k=20&c=EJu3Ac4hQNb9zAQzAvPz4uCTcChmj3pZue3Ign_1p5s='}
        height={'250'}
        
        
      />
      <CardContent>
        <Typography variant="body1" color={"error"}>{source.name}</Typography>
        <Typography variant="h5" component={'div'}>{title}</Typography>
        <Typography variant="body2" >{description}</Typography>
        <CardActions>
          <Link 
          href={url} 
          target="_blank"
          variant="button"
          width={"100%"}
          textAlign={"center"}
          sx={{
            textDecoration:"none"
          }}
          >Leer Noticia</Link>
        </CardActions>
      </CardContent>
    </Card>
    </Grid>
    
  );
}
