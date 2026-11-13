import { Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledToolbar = styled(Toolbar)({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

type HeaderProps = {
  signedIn: boolean;
  onSignOut?: () => void;
};

export default function Header({ signedIn, onSignOut }: HeaderProps) {
  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <Fragment>
      <StyledAppBar
        position="static"
        color="default"
        elevation={0}
      >
        <StyledToolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
            style={{ textDecoration: 'none' }}
          >
            App
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            component={RouterLink}
            to={signedIn ? '/' : '/auth/signin'}
            onClick={onClick}
            sx={{ mx: 1.5 }}
          >
            {signedIn ? 'Logout' : 'Login'}
          </Button>
        </StyledToolbar>
      </StyledAppBar>
    </Fragment>
  );
}