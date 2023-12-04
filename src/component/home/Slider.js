
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Slider() {
  return (
    <>
    <div>
        <h2 className='header-section'>التقيمات</h2>
    </div>
 <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    <SwiperSlide>
         <div class="swiper-slide testimonial-content   d-flex flex-column ">
                        <p>"عروض التخفيض المستمرة تجعل الشراء مغريًا دائمًا. أنا دائمًا متحمس للحصول على صفقات رائعة عند كل طلب."</p>
                            <div>
                                <div class="d-flex align-items-center flex-column">
                                <h5>التقيم:- 5</h5>
                                <div>

                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>

                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
         <div class="swiper-slide testimonial-content   d-flex flex-column ">
                        <p>"خدمة العملاء استثنائية، تلقيت دعمًا سريعًا وفعّالًا عندما كان لدي استفسارات حول المنتجات. فريق الدعم يبدو أنه ملتزم براحة العملاء."</p>
                            <div>
                                <div class="d-flex align-items-center flex-column">
                                <h5>التقيم:- 5</h5>
                                <div>

                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>

                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
         <div class="swiper-slide testimonial-content   d-flex flex-column ">
                        <p>"تجربة تصفح مريحة وواجهة مستخدم مبتكرة. يسهل البحث عن المنتجات وقراءة التقييمات من قبل المستخدمين الآخرين."</p>
                            <div>
                                <div class="d-flex align-items-center flex-column">
                                <h5>التقيم:- 5</h5>
                                <div>

                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>

                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>  <SwiperSlide>
         <div class="swiper-slide testimonial-content   d-flex flex-column ">
                        <p>"الجودة لا تضاهى! المنتجات التي اشتريتها كانت عالية الجودة، وأعتقد أن هذا الموقع يفرض معايير صارمة على المنتجات التي يعرضها."</p>
                            <div>
                                <div class="d-flex align-items-center flex-column">
                                <h5>التقيم:- 5</h5>
                                <div>

                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>

                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> 
                     <SwiperSlide>
                        <div class="swiper-slide testimonial-content   d-flex flex-column ">
                        <p>"التواصل الفعّال والسريع مع العملاء. رأيت استجابة سريعة لاستفساراتي واهتمامًا حقيقيًا بتحسين تجربتي كعميل."</p>
                            <div>
                                <div class="d-flex align-items-center flex-column">
                                <h5>التقيم:- 5</h5>
                                <div>

                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>
                                <FontAwesomeIcon icon={faStar} className='rate'/>

                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
   
  </Swiper> 

            
           
          
    </>
  )
}

export default Slider