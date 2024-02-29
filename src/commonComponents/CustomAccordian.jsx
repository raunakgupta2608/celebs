import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { makeStyles } from "@mui/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CustomDialog from "./CustomDialog";

const useStyles = makeStyles((theme) => ({
  profilePic: {
    display: "inline-block",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  accordionSummary: {
    "& .MuiAccordionSummary-content": {
      alignItems: "center",
    },
  },
  boxDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  positiveAction: {
    cursor: "pointer",
    color: "blue",
  },
  negativeAction: {
    cursor: "pointer",
    color: "red",
  },
}));

const CustomAccordian = ({ celebrityDetails, setCelebrityDetails }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [updatedValue, setUpdatedValue] = useState({
    first: "",
    picture: "",
    country: "",
    description: "",
    dob: "",
    email: "",
    gender: "",
    id: "",
    last: "",
  });

  const handleChange = (panel) => (event, isExpanded) => {
    if (activeIndex === null || activeIndex === panel)
      setExpanded(isExpanded ? panel : false);
  };

  const handleEdit = (index) => {
    setActiveIndex(index);
    setUpdatedValue({ ...celebrityDetails[index] });
  };

  const handleDelete = () => {
    setCelebrityDetails(
      celebrityDetails.filter((celeb, index) =>
        deleteIndex === +index ? false : true
      )
    );
    setOpen(false);
    setExpanded(false);
    setDeleteIndex(null);
  };

  const setEditedData = () => {
    const regex = /^[a-zA-Z ]*$/;
    const { first, country, description, gender, last } = updatedValue;
    if (
      country.trim().match(regex) &&
      first.trim().match(regex) &&
      last.trim().match(regex) &&
      gender.trim().match(regex) &&
      description.trim()
    ) {
      setCelebrityDetails(
        celebrityDetails.map((celeb, index) =>
          activeIndex === index ? updatedValue : celeb
        )
      );
      setExpanded(false);
      setActiveIndex(null);
    }
  };

  const calculateAge = useCallback((dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }, []);

  return (
    <>
      <CustomDialog
        open={open}
        setOpen={setOpen}
        handleDelete={handleDelete}
        setDeleteIndex={setDeleteIndex}
      />
      {celebrityDetails.map((celebrity, index) => {
        const {
          first: firstVal,
          picture: pictureVal,
          country: countryVal,
          description: descriptionVal,
          dob: dobVal,
          gender: genderVal,
          id: idVal,
          last: lastVal,
        } = celebrity;

        const {
          first,
          picture,
          country,
          description,
          dob,
          email,
          gender,
          id,
          last,
        } = updatedValue;

        return (
          <Accordion
            expanded={expanded === idVal}
            onChange={handleChange(idVal)}
            key={idVal}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${idVal}bh-content`}
              id={`${idVal}bh-header`}
              className={classes.accordionSummary}
            >
              <img
                src={pictureVal}
                alt="profilePic"
                className={classes.profilePic}
              />
              <Box sx={{ width: "33%", flexShrink: 0 }}>
                {activeIndex === index ? (
                  <Box style={{ display: "flex", width: "max-content" }}>
                    <TextField
                      hiddenLabel
                      id="first"
                      variant="filled"
                      size="small"
                      value={first}
                      style={{ margin: "8px 10px 0" }}
                      onChange={({ target }) => {
                        setUpdatedValue({
                          ...updatedValue,
                          [target.id]: target.value,
                        });
                      }}
                    />
                    <TextField
                      hiddenLabel
                      id="last"
                      variant="filled"
                      size="small"
                      value={last}
                      style={{ margin: "8px 0 0" }}
                      onChange={({ target }) => {
                        setUpdatedValue({
                          ...updatedValue,
                          [target.id]: target.value,
                        });
                      }}
                    />
                  </Box>
                ) : (
                  `${firstVal} ${lastVal}`
                )}
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box className={classes.boxDetails}>
                    <Typography>Age</Typography>
                    <Typography>{calculateAge(dobVal)}</Typography>
                  </Box>
                  <Box className={classes.boxDetails} style={{ width: "14vw" }}>
                    <Typography>Gender</Typography>
                    {activeIndex === index ? (
                      <FormControl fullWidth>
                        <InputLabel id="gender">Gender</InputLabel>
                        <Select
                          labelId="gender"
                          id="genderSelect"
                          value={gender}
                          label="Gender"
                          onChange={({ target }) =>
                            setUpdatedValue({
                              ...updatedValue,
                              gender: target.value,
                            })
                          }
                        >
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                          <MenuItem value="transgender">Transgender</MenuItem>
                          <MenuItem value="rather not say">
                            Rather not say
                          </MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    ) : (
                      // <TextField
                      //   hiddenLabel
                      //   id="gender"
                      //   variant="filled"
                      //   size="small"
                      //   value={gender}
                      //   style={{ margin: "8px 0 0" }}
                      //   onChange={({ target }) =>
                      // setUpdatedValue({
                      //   ...updatedValue,
                      //   [target.id]: target.value,
                      // })
                      //   }
                      // />
                      <Typography>{genderVal}</Typography>
                    )}
                  </Box>
                  <Box className={classes.boxDetails}>
                    <Typography>Country</Typography>
                    {activeIndex === index ? (
                      <TextField
                        hiddenLabel
                        id="country"
                        variant="filled"
                        size="small"
                        value={country}
                        style={{ margin: "8px 0 0" }}
                        onChange={({ target }) => {
                          setUpdatedValue({
                            ...updatedValue,
                            [target.id]: target.value,
                          });
                        }}
                      />
                    ) : (
                      <Typography>{countryVal}</Typography>
                    )}
                  </Box>
                </Box>
                <Box style={{ margin: "20px 0px 0px" }}>
                  <Typography style={{ textAlign: "left" }}>
                    Description
                  </Typography>
                  {activeIndex === index ? (
                    <TextField
                      fullWidth
                      hiddenLabel
                      id="description"
                      multiline
                      minRows={3}
                      value={description}
                      style={{ margin: "8px 0 0" }}
                      onChange={({ target }) =>
                        setUpdatedValue({
                          ...updatedValue,
                          [target.id]: target.value,
                        })
                      }
                    />
                  ) : (
                    <Typography style={{ textAlign: "left" }}>
                      {descriptionVal}
                    </Typography>
                  )}
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "20px 0 0",
                  }}
                >
                  {activeIndex === index ? (
                    <>
                      <CheckCircleOutlineIcon
                        className={classes.positiveAction}
                        onClick={setEditedData}
                      />
                      <CancelIcon
                        className={classes.negativeAction}
                        onClick={() => {
                          setExpanded(false);
                          setActiveIndex(null);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <EditIcon
                        className={classes.positiveAction}
                        onClick={() => handleEdit(index)}
                        disabled={true}
                        // disabled={calculateAge(dobVal) > 21 ? false : true}
                      />
                      <DeleteIcon
                        className={classes.negativeAction}
                        onClick={() => {
                          setDeleteIndex(index);
                          setOpen(true);
                        }}
                      />
                    </>
                  )}
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default CustomAccordian;
