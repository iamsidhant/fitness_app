import React from 'react';
import { Box } from '@mui/material';
import { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
        <HeroBanner />
        <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home;