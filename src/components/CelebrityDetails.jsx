import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomAccordian from "../commonComponents/CustomAccordian";
import SearchBar from "./SearchBar";
let celebDetails = require("../utils/celebrities.json");

const CelebrityDetails = () => {
  const [searchValue, setSearchValue] = useState("");
  const [celebrityDetails, setCelebrityDetails] = useState(celebDetails);

  const handleSearch = () => {
    const searchedInput = searchValue.trim().toLowerCase();
    if (!searchedInput) {
      setCelebrityDetails(celebDetails);
      return;
    }
    const modifiedResult = celebrityDetails.filter((celeb) =>
      celeb.first.toLowerCase().match(searchedInput) ||
      celeb.last.toLowerCase().match(searchedInput)
        ? true
        : false
    );
    setCelebrityDetails(modifiedResult);
  };

  return (
    <>
      <Typography>List View</Typography>
      <Box>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
        />
        <CustomAccordian
          celebrityDetails={celebrityDetails}
          setCelebrityDetails={setCelebrityDetails}
        />
      </Box>
    </>
  );
};

export default CelebrityDetails;
