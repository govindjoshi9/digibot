// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="#"  underline="hover">
      aifx
    </Typography>
    <Typography variant="subtitle2" component={Link} href="#"  underline="hover">
      &copy; aifx 
    </Typography>
  </Stack>
);

export default AuthFooter;
