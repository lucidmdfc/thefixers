import type { FC } from 'react';
import EyeIcon from '@untitled-ui/icons-react/build/esm/Eye';
import LayoutBottomIcon from '@untitled-ui/icons-react/build/esm/LayoutBottom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';

import { HomeCodeSamples } from './home-code-samples';
import FileDownloadButton from '../components/forms/FileDownloadButton';

export const HomeHero: FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '120px',
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="sm">
          <Typography
            variant="h1"
            sx={{ mb: 2 }}
          >
            Empowering{' '}
            <Typography
              component="span"
              variant="inherit"
              color="primary.main"
            >
              engineers
            </Typography>{' '}
            to{' '}
            <Typography
              component="span"
              variant="inherit"
            >
              solve
            </Typography>
            <Typography
              component="p"
              color="primary.main"
              variant="inherit"
            >
              {"tomorrow's"}{' '}
            </Typography>
            challenges
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Le programme the Fixers cible les ingénieurs créatifs qui ont besoin de faire évoluer
            une solution technique propre, soit techniquement soit commercialement, dans
            l’écosystème des secteurs textile et/ou cuir.
          </Typography>

          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ my: 3 }}
          >
            <FileDownloadButton />

            <Button
              // color="inherit"
              variant="contained"
              component={RouterLink}
              href={'#form-section'}
              startIcon={
                <SvgIcon fontSize="small">
                  <LayoutBottomIcon />
                </SvgIcon>
              }
            >
              Postuler
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            pt: '60px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              width: '100%',
              fontSize: 0,

              '& img': {
                borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2.5,
                borderTopRightRadius: (theme) => theme.shape.borderRadius * 2.5,
                boxShadow: 16,
                width: '100%',
              },
            }}
          >
            <img src={'/assets/main-hero.jpg'} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
