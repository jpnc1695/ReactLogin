import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { openCenteredPopup } from '../../services/nativePopup';


const supportedSocialLoginTypes = [
  { name: 'LinkedIn', icon: LinkedInIcon },
  { name: 'Github', icon: GitHubIcon },
];
const SERVER_URI = '#'

export default function LoginWithSSO() {
  // const { loginWithText, socialLoginButton } = useStyles();

  const handleSocialLoginSubmit = async (provider: string) => {
    openCenteredPopup(`${SERVER_URI}/api/auth/${provider.toLowerCase()}`, `login with ${provider}`, 500, 500);
  };

  return (
    <Box mt={2} width={'100%'}>
      <Typography variant="caption" color="textSecondary" align="center">
        Or login with
      </Typography>
      {supportedSocialLoginTypes.map(({ name, icon: Icon }) => (
        <Button
          key={name}
          startIcon={<Icon />}
          variant={'outlined'}
          color={'primary'}
          onClick={() => handleSocialLoginSubmit(name)}
          fullWidth
        >
          {`Login with ${name}`}
        </Button>
      ))}
    </Box>
  );
}