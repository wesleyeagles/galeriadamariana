import { Box, Container, Heading, Image, Skeleton } from '@chakra-ui/react'
import { useGetImagesQuery } from '../graphql/generated'

import '../main.css'


export function Home() {

    const { data, loading, error } = useGetImagesQuery()

    if (!data && loading) {

        return (
            <Box bg='#0a0a23' w='100%' h='100vh'>
                <Container maxW={{lg: '5xl', '2xl': '7xl'}} h='100%'>
                    <Heading color='#FFF' paddingTop={6}>
                        Galeria de fotos da Mariana
                    </Heading>
                    <Box w='100%' h='80%' bg='#FFF' marginTop={8} borderRadius='xl' overflow='auto'>
                        <Box  padding={6} bg='#1f1b3d' display='flex' flexWrap='wrap' gap={6}>
                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                            <Skeleton isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src=''/>
                            </Skeleton>

                        </Box>
                    </Box>
                </Container>
            </Box>
        )
    }
         {
        return (
            <Box bg='#0a0a23' w='100%' h='100vh'>
                <Container maxW={{lg: '5xl', '2xl': '7xl'}} h='100%'>
                    <Heading color='#FFF' paddingTop={6}>
                        Galeria de fotos da Mariana
                    </Heading>
                    <Box w='100%' h='80%' bg='#FFF' marginTop={8} borderRadius='xl' overflow='auto'>
                        <Box  padding={6} bg='#1f1b3d' display='flex' flexWrap='wrap' gap={6}>
                           {data?.assets.map(asset => (
                            <Skeleton key={asset.id} isLoaded={!loading}>
                            <Image className='flex-none' borderRadius={10} minW={{sm: '350px', md: '290px'}} w={{sm: '350px', md: 290}} h={400} src={asset.url}/>
                            </Skeleton>
                           ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        )
    } {
        
    }
    
}