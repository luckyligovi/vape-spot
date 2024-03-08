import React from "react";
import categories from "./categories.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import About from "./About";

export default function CategoryPage() {

  return (
    <div>
      {/* Map through each category in the categories array */}
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h1 style={{textAlign: "center"}} >{Object.keys(category)[0]}</h1>

          {/* Map through each item in the current category */}
          <div className="card-container">
            {category[Object.keys(category)[0]].map((item, index) => (
              <Card
                className="card"
                key={index}
                sx={{
                  maxWidth: 345,
                  backgroundColor: "#191919",
                  fontFamily: "roboto",
                  fontSize: "medium",
                }}
                // style={{ transition: "transform 0.3s", cursor: "pointer" }}
              >
                <CardMedia
                  sx={{ height: 300, width: "100%" }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ textAlign: "start" }}>
                  <Typography
                    gutterBottom
                    variant="h9"
                    color="white"
                    component="div"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="div"
                    color="rgba(182, 170, 11, 0.928)"
                    sx={{ fontStyle: "italic" }}
                  >
                    {item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      backgroundColor: "rgba(a30, 28, 28, 0.991)",
                      color: "rgba(234, 242, 242, 0.935)",
                      "&:hover": {
                        backgroundColor: "",
                      },
                    }}
                    className="buy-btn"
                    size="small"
                  >
                    Buy
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <About />
    </div>
  );
}
