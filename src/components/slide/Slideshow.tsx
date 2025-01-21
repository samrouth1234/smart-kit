import { useState, useEffect } from 'react';

interface Slide {
  id: number;
  image: string;
  caption?: string;
}

interface SlideshowProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ slides, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow">
      <button className="prev" onClick={prevSlide}>❮</button>
      <div className="slide">
        <img src={slides[currentIndex].image} alt={`Slide ${slides[currentIndex].id}`} />
        {slides[currentIndex].caption && <p className="caption">{slides[currentIndex].caption}</p>}
      </div>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slideshow;
