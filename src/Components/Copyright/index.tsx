import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';

interface CopyrightProps {
  color?: string;
  sx?: SxProps;
  mt?: number;
  mb?: number;
}

const Copyright: React.FC<CopyrightProps> = ({ color = 'text.secondary', sx = {}, mt, mb, ...props }) => {
  return (
    <Typography 
      variant="body2" 
      color={color} 
      align="center" 
      sx={{ mt, mb, ...sx }} 
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://tommdaniel.github.io/ProjetoRocketseat">
        TommDaniel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
