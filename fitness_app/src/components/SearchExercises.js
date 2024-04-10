import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {}, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetch('https://gym-fit.p.rapidapi.com/exercises/search/bodyPart', exerciseOptions);
      console.log(exercisesData);

      // const searchedExercises = exercisesData.filter();

      // setSearch("");
      // setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
        <Button
         className='search-btn' sx={{ bgcolor: "#FF2625", color: "#fff", transform: "none", width: { lg: "173px", xs: "80px" }, height: "56px", position: "absolute", right: "0px", fontSize: { lg: "20px", xs: "14px" } }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises;