import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link as RouterLink } from "react-router-dom";

type Tier = {
  title: string;
  subheader?: string;
  price: string;
  description: string[];
  buttonText: string;
  buttonVariant: "outlined" | "contained";
};

type FooterSection = {
  title: string;
  description: string[];
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link component={RouterLink} to="/" color="inherit" underline="hover">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const tiers: Tier[] = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const footers: FooterSection[] = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function Pricing() {
  return (
    <Box
      sx={{
        "& ul": {
          margin: 0,
          padding: 0,
          listStyle: "none",
        },
      }}
    >
      {/* Hero */}
      <Container
        maxWidth="sm"
        component="main"
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default Material UI components
          with little customization.
        </Typography>
      </Container>

      {/* Pricing cards */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} sx={{ alignItems: "flex-end" }}>
          {tiers.map((tier) => (
            <Grid
              key={tier.title}
              size={{
                xs: 12,
                sm: tier.title === "Enterprise" ? 12 : 6,
                md: 4,
              }}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  action={
                    tier.title === "Pro" ? (
                      <StarBorderIcon aria-label="Most popular plan" />
                    ) : undefined
                  }
                  slotProps={{
                    title: {
                      align: "center",
                    },
                    subheader: {
                      align: "center",
                    },
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />

                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>

                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>

                  <Box component="ul">
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>

                <CardActions>
                  <Button
                    component={RouterLink}
                    to="/auth/signup"
                    variant={tier.buttonVariant}
                    fullWidth
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: 1,
          borderColor: "divider",
          mt: 8,
          pt: {
            xs: 3,
            sm: 6,
          },
          pb: {
            xs: 3,
            sm: 6,
          },
        }}
      >
        <Grid container spacing={4} sx={{ justifyContent: "space-evenly" }}>
          {footers.map((footer) => (
            <Grid
              key={footer.title}
              size={{
                xs: 6,
                sm: 3,
              }}
            >
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>

              <Box component="ul">
                {footer.description.map((item) => (
                  <Box component="li" key={item}>
                    <Link
                      href="#"
                      variant="subtitle1"
                      color="text.secondary"
                      underline="hover"
                    >
                      {item}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}
