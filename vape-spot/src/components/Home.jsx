import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import About from "./About";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CardsData from "./CardsData.json";

const Home = () => {
  return (
    <div>
      <div className="products-content">
        <Paper className="warning" elevation={1}>
          <Typography variant="h3">Warning: </Typography>
          <Typography variant="body1" color="grey">
            This product contains Nicotine. Nicotine is an addictive chemical
          </Typography>
        </Paper>

        <div className="categories">
          <Typography variant="h2" sx={{fontSize: "18", color:"#444", p: 2}}>Categories</Typography>
          <ImageList
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "auto",
              width: "100%",
              gap: 10,
              
            }}
          >
            {CardsData[CardsData.length - 1].categories.map(
              (category, index) => (
                <Link to={`/category/${category.name}`} key={index}>
                  <ImageListItem
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      style={{ width: "100%", height: 300 }}
                    />
                    <ImageListItemBar title={category.name} />
                  </ImageListItem>
                </Link>
              )
            )}
          </ImageList>
        </div>
        <Paper elevation={1}>
          
          <Typography variant="h2" sx={{fontSize: "18", color:"#444",}}>Products</Typography>
          <Grid container spacing={4} sx={{p: 3}}>
            {CardsData.map((card, index) => (
              <Grid item xs={12} py={2} md={6} lg={3}>

                <Card
                  className="card"
                  key={index}
                  sx={{
                    maxWidth: 345,
                    backgroundColor: "#191919",
                    fontFamily: "roboto",
                    fontSize: "medium",
                    maxHeight: 450,
                  }}
                  style={{ transition: "transform 0.3s", cursor: "pointer" }}
                >
                  <CardMedia
                    sx={{ height: 300, width: "100%" }}
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent sx={{ textAlign: "start" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      color="#fefefe"
                      component="div"
                      noWrap
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="h7"
                      color="rgba(182, 170, 11, 0.928)"
                      sx={{ fontStyle: "italic" }}
                    >
                      {card.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        // border: "2px solid #0c0b0b;",
                        backgroundColor: "#36454F",
                        color: "rgba(234, 242, 242, 0.935)",
                        "&:hover": {
                          backgroundColor: "", // Set hover styles to be the same as default
                        },
                        width: "100%",
                      }}
                      className="buy-btn"
                      size="large"
                    >
                      buy
                    </Button>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>             
      </div>
      <About />
    </div>
  );
};

export default Home;
