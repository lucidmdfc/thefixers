import type { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Logo } from 'src/components/logo';
import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';

interface Section {
  title: string;
  items: {
    external?: boolean;
    title: string;
    path: string;
  }[];
}

const sections: Section[] = [
  {
    title: 'Menu',
    items: [
      {
        title: 'Browse Components',
        path: paths.components.index,
      },
      {
        title: 'Documentation',
        external: true,
        path: paths.docs,
      },
    ],
  },
  {
    title: 'Legal',
    items: [
      {
        title: 'Terms & Conditions',
        path: '#',
      },
      {
        title: 'License',
        path: '#',
      },
      {
        title: 'Contact',
        path: '#',
      },
    ],
  },
  {
    title: 'Social',
    items: [
      {
        title: 'Instagram',
        path: '#',
      },
      {
        title: 'LinkedIn',
        path: '#',
      },
    ],
  },
];

export const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50'),
      borderTopColor: 'divider',
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      pb: 6,
      pt: {
        md: 10,
        xs: 6,
      },
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
        justifyContent={'center'}
      >
        <Grid
          xs={12}
          sm={4}
          md={3}
          sx={{
            order: {
              xs: 4,
              md: 1,
            },
          }}
        >
          <Stack
            spacing={1}
            alignItems={'center'}
          >
            <Stack
              alignItems="center"
              component={RouterLink}
              direction="row"
              display="inline-flex"
              href={paths.index}
              spacing={1}
              sx={{ textDecoration: 'none' }}
            >
              <Logo />
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              By Moroccan Fashion Cluster ©2024
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
