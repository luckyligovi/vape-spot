import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import About from "./About";
import exp from "./image/b.jpg";

const cardsData = [
  {
    title: "YUOTO LUSCIOUS Grape Ice",
    description: "ksh 2000",
    image: "https://storage.googleapis.com/vapelab/products/yuoto-luscious-grape-ice_shz.webp"
  },
  {
    title: "YUOTO LUSCIOUS Grape Ice",
    description: "YUOTO LUSCIOUS Grape Ice",
    image: exp,
  },
  {
    title: "Lizard",
    description: "Lizards are a widespread group...",
    image: exp,
  },
  {
    title: "Lizard",
    description: "Lizards are a widespread group...",
    image: exp,
  },
  {
    title: "Lizard",
    description: "Lizards are a widespread group...",
    image: exp,
  },
  {
    title: "Lizard",
    description: "Lizards are a widespread group...",
    image: exp,
  },
  {
    title: "Lizard",
    description: "Lizards are a widespread group...",
    image: exp,
  },
  {
    title: "Lizard",
    description: "Lizards are a widespread group...",
    image: exp,
  },
  {
    title: "Lizard",
    description: "Lizards are a widespread group...",
    image: exp,
  },
  {
    title: "Lizard",
    description: "Lizards are a widespread group...",
    image: exp,
  },
  {
    title: "Lizard",
    description: "Lizards are a widespread group...",
    image: exp,
  },
  {
    title: "Lizard",
    description: "Lizards are a widespread group...",
    image: exp,
  },
  // Add more card data as needed
];

const Home = () => {
  return (
    <div className="products-content">
      <h1>vape-spot.ke</h1>

      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300, width: 500 }}
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">buy</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>

    
      <About />
    </div>
  );
};

export default Home;
