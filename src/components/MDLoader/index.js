import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default function GradientCircularProgress({ size = 20 }) {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress 
        sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} 
        size={size}
      />
    </React.Fragment>
  );
}

