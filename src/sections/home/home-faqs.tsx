import type { FC } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DotsVertical from '@untitled-ui/icons-react/build/esm/DotsVertical';

interface FaqType {
  question: string;
  answer: any;
}

const faqs: FaqType[] = [
  {
    question: "Qu'est-ce que le programme The FIXERS ? Qui peut participer?",
    answer: (
      <>
        {
          " Le programme The FIXERS est un programme d'innovation collaborative qui vise à encourager le développement de solutions innovantes par des ingénieurs dans les secteurs du textile, du cuir et des activités annexes."
        }
        <br />
        <br />
        <strong>Tous les ingénieurs</strong> porteurs de projets innovants en activité dans des
        entreprises des secteurs du textile, du cuir ou dans des secteurs transverses.
      </>
    ),
  },
  {
    question: 'Quels sont les objectifs du programme The FIXERS ?',
    answer: (
      <List>
        <ListItem>
          <ListItemText primary="Encourager l'émergence de projets innovants et d'amélioration de la compétitivité des entreprises." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Favoriser le développement de solutions 'in situ' plutôt que l'importation de technologies." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Renforcer les capacités des ingénieurs en matière de 'problem solving'" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Développer des prototypes de produits, de composantes ou d'améliorer l'existant." />
        </ListItem>
      </List>
    ),
  },
  {
    question: 'Quels sont les types de projets éligibles ?',
    answer: (
      <List>
        <ListItem>
          <ListItemText primary="Des systèmes informatisés qui simplifient la performance de l'entreprise." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Des projets liés au tri et au recyclage." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Des projets de diminution de consommation d'eau ou d'énergie." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Des techniques d'amélioration de la qualité de vie au sein de l'entreprise." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Des techniques d'amélioration de la qualité, aspect visuels ou sensoriel d'un produit." />
        </ListItem>
      </List>
    ),
  },
  {
    question: 'Quelles sont les récompenses du programme The FIXERS ?',
    answer: (
      <List>
        <ListItem>
          <ListItemText primary="1er prix : 35 000 dhs net en prix monétaire et 100 000 dhs de prise en charge de frais de services liés au développement du projet." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2ème prix : 15 000 dhs net en prix monétaire et 70 000 dhs de prise en charge de frais de services liés au développement du projet." />
        </ListItem>
      </List>
    ),
  },
  {
    question: 'Y a-t-il des dates importantes à retenir ?',
    answer: (
      <List>
        <ListItem>
          <ListItemText primary="Lancement du programme : 07/03/2024" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Date limite de dépôt de candidature 1ère phase : 04/04/2024" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Réponse aux candidats retenus dans la sélection lors de la première phase : 15/04/2024" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Date limite de dépôt des documents pour la deuxième phase : 30/04/2024" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Pitchs des dossiers déposés : entre le 06/05/2024 ET LE 12/05/2024" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Réponse de la dernière sélection : Semaine du 13/05/2024" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Remise des prix et contractualisation : Le 23/05/2024" />
        </ListItem>
      </List>
    ),
  },
];

interface FaqProps {
  answer: string;
  question: string;
}

const Faq: FC<FaqProps> = (props) => {
  const { answer, question } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <Stack
      onClick={() => setIsExpanded((prevState) => !prevState)}
      spacing={2}
      sx={{ cursor: 'pointer' }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="subtitle1">{question}</Typography>
        <SvgIcon>{isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}</SvgIcon>
      </Stack>
      <Collapse in={isExpanded}>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {answer}
        </Typography>
      </Collapse>
    </Stack>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export const HomeFaqs: FC = () => {
  return (
    <Box
      sx={{ py: '120px' }}
      id="faq-section"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
        >
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={2}>
              <Typography variant="h3">Tout ce que vous devez savoir</Typography>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Foire aux questions
              </Typography>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={4}>
              {faqs.map((faq, index) => (
                <Faq
                  key={index}
                  {...faq}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
