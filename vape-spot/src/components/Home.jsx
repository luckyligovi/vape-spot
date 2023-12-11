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
    title: "Double Apple ISGO Bar",
    description: "YUOTO LUSCIOUS Grape Ice",
    image: "https://storage.googleapis.com/vapelab/products/double-apple-isgo-bar.webp",
  },
  {
    title: "Yuoto Grape Ice",
    description: "Lizards are a widespread group...",
    image: "https://storage.googleapis.com/vapelab/products/yuoto-grape-ice.webp",
  },
  {
    title: "KK Energy Lush Ice",
    description: "Lizards are a widespread group...",
    image: "https://storage.googleapis.com/vapelab/products/kk-energy-lush-ice.webp",
  },
  {
    title: "Strawberry Kiwi Elf Bar",
    description: "Lizards are a widespread group...",
    image: "https://storage.googleapis.com/vapelab/products/strawberry-kiwi-elf-bar.webp",
  },
  {
    title: "Blue Raspberry Nic Salt by Vintage",
    description: "Lizards are a widespread group...",
    image: "https://storage.googleapis.com/vapelab/products/blue-raspberry-nic-salt-by-vintage.webp",
  },
  {
    title: "KK Energy Mango Strawberry Ice 5000 Puffs",
    description: "Lizards are a widespread group...",
    image: "https://storage.googleapis.com/vapelab/products/kk-energy-mango-strawberry-ice-3JKC2.webp",
  },
  {
    title: "Purple Rain TUGBOAT ULTRA",
    description: "Lizards are a widespread group...",
    image: "https://storage.googleapis.com/vapelab/products/purple-rain-tugboat-ultra_vAZ.webp",
  },
  {
    title: "Green Apple Ice",
    description: "Lizards are a widespread group...",
    image: "https://storage.googleapis.com/vapelab/offers/green-apple-ice-offer.webp",
  },
  {
    title: "Cool Mint Tugboat",
    description: "Lizards are a widespread group...",
    image: "https://storage.googleapis.com/vapelab/products/cool-mint-tugboat.webp",
  },
  {
    title: "Sweet Menthol Elf Bar",
    description: "Lizards are a widespread group...",
    image: "https://storage.googleapis.com/vapelab/products/sweet-menthol-elf-bar.webp",
  },
  {
    title: "Blue Raspberry Nic Salt by Vintage",
    description: "Lizards are a widespread group...",
    image: "https://storage.googleapis.com/vapelab/products/blue-raspberry-nic-salt-by-vintage.webp",
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
