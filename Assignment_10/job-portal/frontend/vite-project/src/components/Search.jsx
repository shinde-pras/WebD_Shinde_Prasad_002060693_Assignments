import React from "react";
import { TextField, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBar = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "0 auto",
  };

  return (
    <div style={containerStyle}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        sx={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton aria-label="search" edge="end">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
