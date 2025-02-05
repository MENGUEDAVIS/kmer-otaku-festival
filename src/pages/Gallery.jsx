import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { XMarkIcon } from '@heroicons/react/24/outline';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 5rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ContentWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: ${props => props.theme.fonts.manga};
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.neonPink};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-family: ${props => props.theme.fonts.cyber};
  font-size: 0.875rem;
  background-color: ${props => 
    props.active ? props.theme.colors.neonPurple : props.theme.colors.cyberLight};
  color: ${props => 
    props.active ? props.theme.colors.white : props.theme.colors.gray[400]};
  transition: all 0.3s;

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;

const ImageGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageCard = styled(motion.div)`
  position: relative;
  cursor: pointer;
`;

const ImageAspectRatio = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.3s;

  ${ImageCard}:hover & {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  opacity: 0;
  transition: opacity 0.3s;

  ${ImageCard}:hover & {
    opacity: 1;
  }
`;

const ImageTitle = styled.h3`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-family: ${props => props.theme.fonts.cyber};
  color: ${props => props.theme.colors.white};
  font-size: 1.25rem;
`;

const Modal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${props => props.theme.colors.white};
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.neonPink};
  }
`;

const ModalImage = styled(motion.img)`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const ModalTitle = styled.h3`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-family: ${props => props.theme.fonts.cyber};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
`;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'cosplay', 'gaming', 'events', 'backstage'];

  const images = [
    {
      id: 1,
      src: '/images/cosplay1.jpg',
      category: 'cosplay',
      title: 'Concours Cosplay 2024',
    },
    {
      id: 2,
      src: '/images/gaming1.jpg',
      category: 'gaming',
      title: 'Tournoi Gaming',
    },
    {
      id: 3,
      src: '/images/event1.jpg',
      category: 'events',
      title: 'Concert J-Pop',
    },
    // Ajoutez plus d'images ici
  ];

  const filteredImages = images.filter(
    (image) => activeFilter === 'all' || image.category === activeFilter
  );

  return (
    <PageContainer>
      <ContentWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Title>Galerie</Title>

        <FilterContainer>
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </FilterButton>
          ))}
        </FilterContainer>

        <ImageGrid layout>
          {filteredImages.map((image) => (
            <ImageCard
              layout
              key={image.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(image)}
            >
              <ImageAspectRatio>
                <Image src={image.src} alt={image.title} />
                <ImageOverlay>
                  <ImageTitle>{image.title}</ImageTitle>
                </ImageOverlay>
              </ImageAspectRatio>
            </ImageCard>
          ))}
        </ImageGrid>

        <AnimatePresence>
          {selectedImage && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <CloseButton onClick={() => setSelectedImage(null)}>
                <XMarkIcon className="h-8 w-8" />
              </CloseButton>
              <ModalImage
                src={selectedImage.src}
                alt={selectedImage.title}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
              <ModalTitle>{selectedImage.title}</ModalTitle>
            </Modal>
          )}
        </AnimatePresence>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Gallery;
