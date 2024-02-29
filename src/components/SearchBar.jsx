import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ searchValue, setSearchValue, handleSearch }) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <FormControl
        sx={{ m: 1, width: "-webkit-fill-available" }}
        variant="outlined"
      >
        <InputLabel htmlFor="searchInput">Search User</InputLabel>
        <OutlinedInput
          id="searchInput"
          type="text"
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="search a user"
                onClick={handleSearch}
                edge="end"
              >
                {<SearchIcon />}
              </IconButton>
            </InputAdornment>
          }
          label="Search User"
        />
      </FormControl>
    </Box>
  );
}

export default SearchBar;
