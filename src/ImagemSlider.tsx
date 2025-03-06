import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Dialog, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const ImageSlider: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>('');

  const images = import.meta.glob<{default: string}>('/src/assets/car/*.jpg', { eager: true });
  const imageList = Object.values(images).map((img) => img.default);

  const handleOpen = (imgUrl: string) => {
    setCurrentImage(imgUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage('');
  };

  const scrollToSlider = () => {
    const sliderElement = document.getElementById('slider');
    if (sliderElement) {
        setTimeout(() => sliderElement.scrollIntoView({ behavior: 'smooth', block: 'center'}), 500);
    }
  };

  return (
    <div id="slider">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ type: 'bullets' }}
        navigation
        effect="fade"
        autoHeight
        onSlideChange={() => scrollToSlider()} 
      >
        {imageList.map((img, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img 
                src={img} 
                alt={`Imagem ${index + 1}`} 
                style={{ display: 'block', width: '100%' }} 
              />
              {/* Ícone de lupa sobre a imagem */}
              <IconButton
                onClick={() => handleOpen(img)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(255,255,255,0.7)',
                }}
              >
                <ZoomInIcon />
              </IconButton>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal para exibir a imagem ampliada */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <img 
          src={currentImage} 
          alt="Imagem ampliada" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </Dialog>
    </div>
  );
};

export default ImageSlider;
