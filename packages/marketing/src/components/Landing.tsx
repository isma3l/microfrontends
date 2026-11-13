import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <MuiLink component={RouterLink} to="/" color="inherit" underline="hover">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  return (
    <>
      <Box component="main">
        {/* Hero */}
        <Box
          sx={{
            backgroundColor: "background.paper",
            py: {
              xs: 6,
              sm: 8,
            },
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Home Page
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>

            <Grid
              container
              spacing={2}
              sx={{ mt: 4, justifyContent: "center" }}
            >
              <Grid>
                <Button
                  component={RouterLink}
                  to="/pricing"
                  variant="contained"
                  color="primary"
                >
                  Pricing
                </Button>
              </Grid>

              <Grid>
                <Button
                  component={RouterLink}
                  to="/pricing"
                  variant="outlined"
                  color="primary"
                >
                  Pricing
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Cards */}
        <Container
          maxWidth="md"
          sx={{
            py: 8,
          }}
        >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid
                key={card}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={`https://picsum.photos/seed/${card}/600/400`}
                    alt={`Card ${card}`}
                  />

                  <CardContent
                    sx={{
                      flexGrow: 1,
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading {card}
                    </Typography>

                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>

                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "background.paper",
          p: 6,
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>

        <Copyright />
      </Box>
    </>
  );
}
