import React, {useEffect}from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AOS from 'aos';
import "aos/dist/aos.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 200
  },
  media: {
    height: 140,
  },
});

const Styles = styled.div`
    padding-bottom: 5%;

    h1{
        text-align: center;
        padding-bottom: 7%;
    }
    p{
        color: grey;
        font-size: 14px;

    }
`;

export const Gallery1 =({info})=> {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
      <>
      <Styles>
      <h1>Portfolio</h1>
      
      <Box mb={15} ml={5} style={{display: 'inline-block'}}>
      <Grid container spacing={4} >
      {info.map((data)=>{
        return( 
      <Grid item >
    <Card className={classes.root} data-aos={data.animation} >

      <CardActionArea>
      {/* <ButtonBase
          focusRipple
          key={data.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: data.width,
          }}
        > */}
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.heading}
        />
            
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {data.heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.paragraphOne}
          </Typography>
        </CardContent>

        {/* </ButtonBase> */}
      </CardActionArea>

      <CardActions>
        <p>
          {data.technologies}
        </p>
      </CardActions>
    </Card>
    
    </Grid>
        )})}
    </Grid>
    </Box>
    </Styles>
    </>
  );
}
