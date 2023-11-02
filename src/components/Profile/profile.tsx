import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

import PropTypes from 'prop-types';

interface IProfile {
  firstName: string;
}

export const Profile: FC<IProfile> = (
  props,
): ReactElement => {
  const { firstName = 'John' } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${firstName.substring(0, 1)}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome, {firstName}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your Personal Task Manager
      </Typography>

      {/* // Welcome Message */}
    </Box>
  );
};

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
};
