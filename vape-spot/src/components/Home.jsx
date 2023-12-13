import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import About from "./About";
import exp from "./image/vape-logo.png";
import CardsData from "./CardsData.json";

const Home = () => {
  return (
    <div>
      <div className="products-content">
        {/* <h1></h1> */}
        <img
          src={exp}
          alt="someone using vape"
          style={{ height: 100, paddingTop: 100 }}
        />

        <div className="card-container">
          {CardsData.map((card, index) => (
            <Card className="card" key={index} sx={{ maxWidth: 345, backgroundColor:'#191919' }}>
              <CardMedia
                sx={{ height: 200, width: 500 }}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h9" color= 'white' component="div">
                  {card.title}
                </Typography>
                <Typography variant="div" color="white">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    // border: "2px solid #0c0b0b;",
                    backgroundColor: "rgba(30, 28, 28, 0.991)",
                    color: 'rgba(234, 242, 242, 0.935)',
                    '&:hover': {
                      backgroundColor: '', // Set hover styles to be the same as default
                    },
                  }}
                  className="buy-btn"
                  size="large"
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
