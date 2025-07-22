import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Импортируем Swiper и необходимые модули
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Импорт изображений из assets
import image4 from "/assets/image 4.svg";
import image8 from "/assets/image 8.svg";
import image10 from "/assets/image 10.svg";
import image11 from "/assets/image 11.svg";
import image12 from "/assets/image 12.svg";
import image13 from "/assets/image 13.svg";

// Импорт SVG элементов
import star1 from "/assets/Star 1.svg";
import star2 from "/assets/Star 2.svg";
import star3 from "/assets/Star 3.svg";
import star4 from "/assets/Star 4.svg";
import star5 from "/assets/Star 5.svg";
import star6 from "/assets/Star 6.svg";
import star7 from "/assets/Star 7.svg";
import star8 from "/assets/Star 8.svg";
import star9 from "/assets/Star 9.svg";
import vector2 from "/assets/Vector 2.svg";
import vector3 from "/assets/Vector 3.svg";
import rectangle1 from "/assets/Rectangle 1.svg";
import rectangle2 from "/assets/Rectangle 2.svg";
import rectangle3 from "/assets/Rectangle 3.svg";
import rectangle4 from "/assets/Rectangle 4.svg";
import ellipse1 from "/assets/Ellipse 1.svg";
import xIcon from "/assets/X.svg";

// Анимационные варианты
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: "backOut" }
  }
};

// Добавляем стили для Swiper с адаптивностью
const swiperStyles = `
  .swiper {
    width: 100%;
    height: 100%;
    padding: 0 40px;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 483px;
    width: auto !important;
    transition: transform 0.3s;
  }
  
  .swiper-slide-active {
    transform: scale(1.02);
  }
  
  .swiper-slide img {
    height: 100%;
    width: auto;
    max-width: 100%;
    object-fit: contain;
  }
  
  .custom-swiper-button-prev,
  .custom-swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
    width: 37px;
    height: 45px;
    background: none;
    border: none;
  }
  
  .custom-swiper-button-prev {
    left: 40px;
  }
  
  .custom-swiper-button-next {
    right: 40px;
  }
  
  .swiper-wrapper {
    align-items: center;
  }

  /* Мобильные стили для слайдера */
  @media (max-width: 768px) {
    .swiper {
      padding: 0 15px;
    }
    
    .swiper-slide {
      height: 250px;
    }
    
    .swiper-slide img {
      height: 100%;
      width: auto;
      max-width: 90vw;
    }
    
    .custom-swiper-button-prev,
    .custom-swiper-button-next {
      width: 30px;
      height: 30px;
    }
    
    .custom-swiper-button-prev {
      left: 10px;
    }
    
    .custom-swiper-button-next {
      right: 10px;
    }
    
    .custom-swiper-button-prev img,
    .custom-swiper-button-next img {
      width: 25px;
      height: 30px;
    }
  }
`;

export const Frame = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  // Массивы изображений для слайдеров
  // Импорт изображений для слайдеров автоматически из папок
  const detailedImages = Object.values(
    import.meta.glob('/portfolio/detailed/*.{svg,png,jpg,jpeg}', { eager: true, as: 'url' })
  );
  const chibiImages = Object.values(
    import.meta.glob('/portfolio/chibi/*.{svg,png,jpg,jpeg}', { eager: true, as: 'url' })
  );

  useEffect(() => {
    setIsVisible(true);
    
    // Добавляем стили для Swiper в head
    const styleElement = document.createElement('style');
    styleElement.textContent = swiperStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Функция для скролла к секции
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="frame">
      <div className="div">
        {/* Hero Section */}
        <div className="overlap">
          <img className="image" src={image4} />
          <div className="text-wrapper">Price</div>
          <img className="ellipse" src={ellipse1} />
          <p className="p">приветик, моя сладуся.<br />Здесь ты сможешь ознакомиться с ценами</p>
          <motion.a 
            href="https://t.me/cottsug"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wrapper-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
          >
            тгк: @cottsug
          </motion.a>
          <motion.a 
            href="https://t.me/Cottsugnya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wrapper-3"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
          >
            лс: @cottsugnya
          </motion.a>
          <motion.a 
            href="https://www.tiktok.com/@cottsug?_t=ZN-8xrgrzox3sE&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wrapper-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
          >
            тт: @cottsug
          </motion.a>
          <div className="text-wrapper-5">это я<br />хе-хе</div>
        </div>

        {/* Navigation */}
        <div className="text-wrapper-6">навигация</div>
        
        {/* Price Section */}
        <div className="text-wrapper-7" id="prices">цены</div>
        
        {/* Условия */}
        <div className="text-wrapper-8" id="conditions">УСЛОВИЯ</div>
        
        {/* Портфолио */}
        <div className="text-wrapper-9" id="portfolio">ПОРТФОЛИО</div>
        
        {/* Детализированный */}
        <div className="overlap-group">
          <div className="text-wrapper-10">ПО ПЛЕЧИ</div>
          <div className="text-wrapper-11">ПО ПОЯС</div>
          <div className="text-wrapper-12">ФУЛЛ</div>
          <div className="text-wrapper-13">10000 РУБ</div>
          <div className="text-wrapper-14">10000 РУБ</div>
          <div className="text-wrapper-15">10000 РУБ</div>
          <div className="text-wrapper-16">детализированный</div>
        </div>
        
        {/* Дополнительно */}
        <div className="overlap-2">
          <div className="text-wrapper-17">ДОП ПЕРСОНАЖ +100%</div>
          <p className="text-wrapper-18">ФОН ОТ 1000 ДО 10000</p>
          <div className="text-wrapper-19">ДОПОЛНИТЕЛЬНО</div>
        </div>
        
        {/* Чиби арт */}
        <div className="overlap-3">
          <div className="text-wrapper-20">ПО ПЛЕЧИ</div>
          <div className="text-wrapper-21">ПО ПОЯС</div>
          <div className="text-wrapper-22">ФУЛЛ</div>
          <div className="text-wrapper-23">10000 РУБ</div>
          <div className="text-wrapper-24">10000 РУБ</div>
          <div className="text-wrapper-25">10000 РУБ</div>
          <div className="text-wrapper-26">ЧИБИ АРТ</div>
        </div>
        
        {/* Navigation labels - теперь кликабельные */}
        <motion.div 
          className="text-wrapper-27"
          onClick={() => scrollToSection('#prices')}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        >
          цены
        </motion.div>
        <motion.div 
          className="text-wrapper-28"
          onClick={() => scrollToSection('#prices')}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        >
          цены
        </motion.div>
        <motion.div 
          className="text-wrapper-29"
          onClick={() => scrollToSection('#conditions')}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        >
          Условия
        </motion.div>
        <motion.div 
          className="text-wrapper-30"
          onClick={() => scrollToSection('#conditions')}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        >
          Условия
        </motion.div>
        
        {/* Условия текст */}
        <p className="element">
          <span className="span">
            - 100% предоплата на КАРТУ МИР<br />
            - Я начинаю рисовать только после получения оплаты<br />
            - Я не возвращаю деньги, если уже приступила к работе<br />
            - Пожалуйста, имейте в виду, что у меня может быть очередь и вам придется
          </span>
          <span className="text-wrapper-31">подождать некоторое время<br /></span>
          <span className="span">
            - Я покажу вам эскиз, плоские цвета и другие этапы работы<br />
            - Срочные заказы удваиваются в цене<br />
            - Вы можете размещать мои работы где угодно, только указывайте автора!<br />
            - Запрещено продавать или изменять мои работы<br />
            - Я оставляю за собой право размещать или не размещать свою работу для вас в
          </span>
          <span className="text-wrapper-32">соц.сетях<br /></span>
          <span className="span">- Будет здорово, если вы пришлете референсы и подробно опишите свою идею для </span>
          <span className="text-wrapper-31">работы!<br /></span>
          <span className="span">Вышеуказанные условия и цены на мои работы предназначены только для личных </span>
          <span className="text-wrapper-31">
            заказов. Если у вас есть деловые вопросы, пожалуйста, свяжитесь со мной для получения более подробной информации!
          </span>
        </p>
        
        {/* Portfolio section labels */}
        <div className="text-wrapper-33">ДЕТАЛИЗИРОВАННЫЙ</div>
        <div className="text-wrapper-34">ЧИБИ АРТ</div>
        <motion.div 
          className="text-wrapper-35"
          onClick={() => scrollToSection('#portfolio')}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        >
          портфолио
        </motion.div>
        <motion.div 
          className="text-wrapper-36"
          onClick={() => scrollToSection('#portfolio')}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        >
          портфолио
        </motion.div>
        <motion.div 
          className="text-wrapper-37"
          onClick={() => scrollToSection('#order')}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        >
          заказать
        </motion.div>
        <motion.div 
          className="text-wrapper-38"
          onClick={() => scrollToSection('#order')}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        >
          заказать
        </motion.div>
        
        {/* Звезды - теперь кликабельные с плавными анимациями */}
        <motion.img 
          className="star" 
          src={star1}
          onClick={() => scrollToSection('#prices')}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ cursor: 'pointer' }}
        />
        <motion.img 
          className="star-2" 
          src={star6}
          onClick={() => scrollToSection('#prices')}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ cursor: 'pointer' }}
        />
        <motion.img 
          className="star-3" 
          src={star2}
          onClick={() => scrollToSection('#conditions')}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ cursor: 'pointer' }}
        />
        <motion.img 
          className="star-4" 
          src={star7}
          onClick={() => scrollToSection('#conditions')}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ cursor: 'pointer' }}
        />
        <motion.img 
          className="star-5" 
          src={star3}
          onClick={() => scrollToSection('#portfolio')}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ cursor: 'pointer' }}
        />
        <motion.img 
          className="star-6" 
          src={star8}
          onClick={() => scrollToSection('#portfolio')}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ cursor: 'pointer' }}
        />
        <img className="star-7" src={star5} />
        <motion.img 
          className="star-8" 
          src={star4}
          onClick={() => scrollToSection('#order')}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ cursor: 'pointer' }}
        />
        <motion.img 
          className="star-9" 
          src={star9}
          onClick={() => scrollToSection('#order')}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* НЕ РИСУЮ */}
        <p className="text-wrapper-39">НЕ РИСУЮ: ГУРО, ЖЕСТКИЕ ФЕТИШИ, СКЕТЧИВЫЕ АРТЫ</p>
        
        {/* X вместо Vector 1 */}
        <div className="group"><img className="vector" src={xIcon} /></div>
        
        {/* СЛАЙДЕР ДЕТАЛИЗИРОВАННЫЙ - используем Swiper */}
        <div style={{
          position: 'absolute',
          top: '3517px',
          left: '0',
          right: '0',
          height: '483px',
          width: '100%'
        }}>
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={50}
            centeredSlides={true}
            loop={true}
            loopAdditionalSlides={3}
            loopFillGroupWithBlank={true}
            speed={600}
            slideToClickedSlide={true}
            watchSlidesProgress={true}
            grabCursor={true}
            navigation={{
              prevEl: '.detailed-prev',
              nextEl: '.detailed-next',
            }}
            style={{ height: '100%', width: '100%' }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 30,
                centeredSlides: true
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 50,
                centeredSlides: true
              }
            }}
          >
            {[...detailedImages, ...detailedImages, ...detailedImages].map((image, index) => (
              <SwiperSlide key={`detailed-${index}`}>
                <div style={{
                  padding: '0 15px',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img 
                    src={image} 
                    alt={`Detailed work ${index % detailedImages.length + 1}`}
                    onClick={() => setModalImage(image)}
                    style={{ 
                      cursor: 'pointer',
                      height: '100%',
                      width: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Кастомные стрелки для детализированного слайдера */}
          <button className="custom-swiper-button-prev detailed-prev">
            <img src={vector3} alt="Previous" style={{ width: '37px', height: '45px' }} />
          </button>
          <button className="custom-swiper-button-next detailed-next">
            <img src={vector2} alt="Next" style={{ width: '37px', height: '45px' }} />
          </button>
        </div>
        
        {/* СЛАЙДЕР ЧИБИ АРТ - используем Swiper */}
        <div style={{
          position: 'absolute',
          top: '4106px',
          left: '0',
          right: '0',
          height: '483px',
          width: '100%'
        }}>
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={50}
            centeredSlides={true}
            loop={true}
            loopAdditionalSlides={3}
            loopFillGroupWithBlank={true}
            speed={600}
            slideToClickedSlide={true}
            watchSlidesProgress={true}
            grabCursor={true}
            navigation={{
              prevEl: '.chibi-prev',
              nextEl: '.chibi-next',
            }}
            style={{ height: '100%', width: '100%' }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 30,
                centeredSlides: true
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 50,
                centeredSlides: true
              }
            }}
          >
            {[...chibiImages, ...chibiImages, ...chibiImages].map((image, index) => (
              <SwiperSlide key={`chibi-${index}`}>
                <div style={{
                  padding: '0 15px',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img 
                    src={image} 
                    alt={`Chibi work ${index % chibiImages.length + 1}`}
                    onClick={() => setModalImage(image)}
                    style={{ 
                      cursor: 'pointer',
                      height: '100%',
                      width: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Кастомные стрелки для чиби слайдера */}
          <button className="custom-swiper-button-prev chibi-prev">
            <img src={vector3} alt="Previous" style={{ width: '37px', height: '45px' }} />
          </button>
          <button className="custom-swiper-button-next chibi-next">
            <img src={vector2} alt="Next" style={{ width: '37px', height: '45px' }} />
          </button>
        </div>
        
        {/* Заказать - полностью через CSS, с цветом #9D182B, скруглением 87.5px и анимацией */}
        <motion.div
          className="div-wrapper"
          id="order"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: '635px',
            height: '106px',
            top: '4682px',
            left: '402px',
            background: '#9D182B',
            cursor: 'pointer',
            zIndex: 10,
            borderRadius: '87.5px',
            boxShadow: '0 0 0px #ff94af',
            overflow: 'hidden'
          }}
          whileHover={{
            scale: 1.04,
            boxShadow: '0 0 40px 0 #ff94af'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          <a
            href="https://t.me/Cottsugnya"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              fontFamily: 'Borsok-Regular, Helvetica',
              fontSize: '45px',
              fontWeight: 400,
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: 0,
              lineHeight: '42px'
            }}
          >
            ЗАКАЗАТЬ АРТ
          </a>
        </motion.div>
        
        {/* Модальное окно для портфолио - исправленное позиционирование крестика */}
        {modalImage && (
          <div 
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              zIndex: 1000
            }}
            onClick={() => setModalImage(null)}
          >
            <div 
              style={{ 
                position: 'relative',
                maxWidth: '98vw',
                maxHeight: '98vh',
                width: 'auto',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={modalImage} 
                alt="Portfolio detail" 
                style={{ 
                  maxWidth: '96vw',
                  maxHeight: '96vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  boxShadow: '0 0 40px 0 rgba(0,0,0,0.7)'
                }}
              />
              <button 
                onClick={() => setModalImage(null)}
                style={{ 
                  position: 'absolute', 
                  top: '10px', 
                  right: '10px', 
                  background: 'rgba(0, 0, 0, 0.5)', 
                  border: 'none', 
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1001
                }}
              >
                <img src={xIcon} alt="Close" style={{ width: '24px', height: '24px' }} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 