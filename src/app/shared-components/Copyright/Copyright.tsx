import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link
          color="inherit"
          href="https://www.ynov.com/formation/ynov-masteres/expert-developpement-web/"
        >
          Ybook
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }