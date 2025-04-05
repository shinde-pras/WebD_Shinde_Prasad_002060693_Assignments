import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const CategoryComponent = () => {
  // Sample array of category data
  const categories = [
    {
      id: 1,
      name: "Business",
      imageUrl:
        "https://images.inc.com/uploaded_files/image/1920x1080/getty_180152187_970679970450042_64007.jpg",
    },
    {
      id: 2,
      name: "Software",
      imageUrl:
        "https://assets-global.website-files.com/65393b768d06ee4c16d24a33/65a6b4ffc850fe7edcde8b9d_best-business-to-start-from-home-for-women.jpg",
    },
    {
      id: 3,
      name: "Data Analytics",
      imageUrl:
        "https://res.cloudinary.com/jerrick/image/upload/v1691319822/64cf7e0d2f1407001d5f6c11.jpg",
    },
    {
      id: 4,
      name: "Architecture",
      imageUrl:
        "https://blog.architizer.com/wp-content/uploads/Heydar-ALiyev-Center-in-Baku_cropped.jpg",
    },
    {
      id: 5,
      name: "Teaching",
      imageUrl:
        "https://blog.allviaedu.com/wp-content/uploads/2023/09/Guide-To-Teaching-Large-Classes-Of-Children_AllviA_230926.jpg",
    },
    {
      id: 6,
      name: "Hardware",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7GUn2dxrp8Q2g9qfFeIivv/0c127a422129562a004cca5c74dfc7fd/GettyImages-607925974.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
    },
    {
      id: 7,
      name: "Economics",
      imageUrl:
        "https://st.depositphotos.com/1010683/2986/i/450/depositphotos_29863775-Business-building.jpg",
    },
    {
      id: 8,
      name: "Accounting",
      imageUrl:
        "https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=",
    },
  ];

  return (
    <div
      className="category-container"
      style={{
        marginTop: "100px",
        marginLeft: "150px",
        marginRight: "150px",
      }}
    >
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <Card
              className="category-card"
              style={{
                height: "70%",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxHeight: "60%",
                }}
              />
              <CardContent
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  component="h2"
                  align="center"
                  style={{ marginBottom: "auto" }}
                >
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default CategoryComponent;
