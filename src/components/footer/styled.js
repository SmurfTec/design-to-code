import { Box, styled } from '@mui/material';

export const FooterContainerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  paddingBlock: '4rem',
  flexWrap: 'wrap',
  [theme.breakpoints.down('1000')]: {
    flexDirection: 'column-reverse',
    gap: '3rem',
  },
}));

export const CompInfoCont = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  [theme.breakpoints.down('1000')]: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const LinkContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  gap: '1.5rem',
  flex: 2,
  alignItems: 'baseline',
  justifyContent: 'space-around',

  [theme.breakpoints.down('600')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: '0.75rem',
    flex: 1,
    minWidth: 115,
    [theme.breakpoints.down('600')]: {
      alignItems: 'center',
    },
  },
}));