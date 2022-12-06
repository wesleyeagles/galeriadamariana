import { Box, Container, Heading, Image, Skeleton } from '@chakra-ui/react'
import { useGetImagesQuery } from '../graphql/generated'

import '../main.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";



export function Home() {

    const { data, loading, error } = useGetImagesQuery()

    console.log(data)
        return (
            <Box bg='#0a0a23' w='100%' h={{sm: "100%", md: '100vh'}} overflow='hidden'>
                <Container maxW={{lg: '5xl', '2xl': '7xl'}} h='100%'>
                    <Heading color='#FFF' paddingTop={6}>
                        Galeria de fotos da Mariana
                    </Heading>
                    <Box w="100%" h="100%">
                    <Swiper
        breakpoints={{
            680: {
                slidesPerView: 3
            }
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        navigation
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.assets.map((asset) => {
            return <SwiperSlide>
                <Image w='100%' h="100%" src={asset.url} />
                </SwiperSlide>
        })}
      </Swiper>
      </Box>
                </Container>
            </Box>
        )
    } {
        
    }
    
