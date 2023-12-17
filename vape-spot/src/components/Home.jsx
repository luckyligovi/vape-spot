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
// import exp from "./image/vape-logo.png";
import CardsData from "./CardsData.json";

const Home = () => {
  return (
    <div>
      <div className="products-content">
        <div className="warning">
          <h1>Warning: </h1>
          <h2>
            This product contains Nicotine.Nicotine is an addictive chemical
          </h2>
        </div>

        <div className="categories">
          <h1>categories</h1>
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
                <ImageListItem
                  key={index}
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
                    style={{ width: "80%", height: "100%" }}
                  />
                  <ImageListItemBar title={category.name} position="below" />
                </ImageListItem>
              )
            )}
          </ImageList>
        </div>
        <Button
          sx={{
            // border: "2px solid #0c0b0b;",
            backgroundColor: "rgba(30, 28, 28, 0.991)",
            color: "rgba(234, 242, 242, 0.935)",
            "&:hover": {
              backgroundColor: "", // Set hover styles to be the same as default
            },
            textAlign:'left'
          }}
          className="buy-btn"
          size="large"
          
        >
          buy
        </Button>
        <div className="card-container">
          {CardsData.map((card, index) => (
            <Card
              className="card"
              key={index}
              sx={{
                maxWidth: 345,
                backgroundColor: "#191919",
                fontFamily: "roboto",
                fontSize: "medium",
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
                  variant="h9"
                  color="white"
                  component="div"
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="div"
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
                    backgroundColor: "rgba(30, 28, 28, 0.991)",
                    color: "rgba(234, 242, 242, 0.935)",
                    "&:hover": {
                      backgroundColor: "", // Set hover styles to be the same as default
                    },
                  }}
                  className="buy-btn"
                  size="small"
                >
                  buy
                </Button>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
