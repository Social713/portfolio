import React, { useEffect } from "react";
import styled from "styled-components";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 200,
  },
  media: {
    height: 140,
  },
  
});

const Styles = styled.div`
  padding-bottom: 5%;

  h1 {
    color: black;
    text-align: center;
    padding-bottom: 7%;
  }
  p {
    color: grey;
    font-size: 14px;
  }
  a {
    text-decoration: none;
  }
  a:link, a:visited {
    color: black;
  }
`;

// For the Chips
const useStyles1 = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export const PortfolioSection = ({ info }) => {

  const classes = useStyles();
  const classes1 = useStyles1();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Styles>
      <Styles>
        <h1 id="portfolioSection">Portfolio</h1>

        <Box mb={15} ml={5} style={{ display: "inline-block" }}>
          <Grid container spacing={4}>
            {info.map((data, index) => {
              return (
                <Grid item>
                  <Card
                    key={index}
                    className={classes.root}
                    data-aos={data.animation}
                  >
                    <CardActionArea>
                      <a
                        href={data.link}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                      >
                        <CardMedia
                          className={classes.media}
                          image={data.image}
                          title={data.heading}
                        />

                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {data.heading}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {data.paragraphOne}
                          </Typography>
                        </CardContent>
                      </a>
                    </CardActionArea>

                        <CardActions>
                          <div className={classes1.root}>
                    {data.technologies.map((tech) => {
                      return (
                            <Chip label={tech} variant="outlined" />
                      );
                    })}
                          </div>
                        </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Styles>
      ;
    </Styles>
  );
};
