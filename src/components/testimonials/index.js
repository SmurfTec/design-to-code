import { Box, Typography } from '@mui/material';
import React from 'react';

import TestimonialCard from './testimonialCard';
import { SectionRoot, SmallBackEllipse } from '../custom';

import { sliderSettings } from './carouselSettings';
import { ArrowStyled, SliderRoot } from './styled';

import { testimonialList } from '../../data';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <ArrowStyled className={className} onClick={onClick}>
      <ArrowBackIosIcon sx={{ color: '#fff', fontSize: '1.6rem' }} />
    </ArrowStyled>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <ArrowStyled className={className} onClick={onClick}>
      <ArrowForwardIosIcon sx={{ color: '#fff', fontSize: '1.6rem' }} />
    </ArrowStyled>
  );
};

const Testimonials = () => {
  return (
    <Box sx={{ marginBottom: '9em !important' }}>
      <SectionRoot
        sx={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          position: 'relative',
        }}
      >
        <SmallBackEllipse sx={{ left: 20, opacity: 0.1 }} />
        <Box className='dispFlexColAlgnCen'>
          <Typography variant='h2' gutterBottom align='center'>
            What Customer Say About Us
          </Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            className='sectionMaxWid'
            align='center'
          >
            Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm,
            emedan semis. Härat rär par.
          </Typography>
        </Box>
      </SectionRoot>
      <Box width='100%' mt={5}>
        <SliderRoot
          {...sliderSettings}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
        >
          {testimonialList.map((el, i) => (
            <Box key={`${el.username}-${i + 1}`} sx={{ padding: '10px' }}>
              <TestimonialCard {...el} />
            </Box>
          ))}
        </SliderRoot>
      </Box>
    </Box>
  );
};

export default Testimonials;
