import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

export default function ListadoNoticias() {
  const { noticias, totalNoticias, handleChangePagina, page } = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h3" component="h2">
        Últimas Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) =>
          noticia.author === null ? null : (
            <Noticia key={noticia.url} noticia={noticia} />
          )
        )}
      </Grid>
      <Stack 
      sx={{
        marginY: 5
      }}
      spacing={2}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      >
        <Pagination 
        onChange={handleChangePagina}
        page={page}
        count={totalPaginas} 
        color="primary" />
      </Stack>
    </>
  );
}
