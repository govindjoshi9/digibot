import React from 'react';
import { CircularProgress, Backdrop, Typography } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//     backgroundColor: 'rgba(0, 0, 0, 0.8)'
//   },
//   loadingContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   spinner: {
//     marginBottom: theme.spacing(2)
//   },
//   loadingText: {
//     marginTop: theme.spacing(2),
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     letterSpacing: 1
//   }
// }));

const LoadingScreen = () => {
  return (
    <Backdrop open={true}>
      <div>
        <CircularProgress color="primary" />
        <Typography variant="h4" color="#fff">
          Loading...
        </Typography>
      </div>
    </Backdrop>
  );
};

export default LoadingScreen;
