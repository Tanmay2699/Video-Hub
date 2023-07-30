import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions = {
  pos:'absolute',
  left:'50%',
  top:'50%',
  transform:'translate(-50%,-50%)',
  textTransform:'uppercase',
  p:'4',
  size:'4xl',
}

const Home = () => {
  return <Box>

    <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading 
        textTransform={'uppercase'} 
        py='2'
         w={'fit-content'} 
         borderBottom={'2px solid'}
         m="auto"
         alignItems={'center'}
         >
          Services
          </Heading>

          <Stack h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column','row']}
          >

            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />

              <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4','16']}
              textAlign={'center'} 
              >
              Welcome to VideoHub!

Are you ready to immerse yourself in a world of captivating videos and endless entertainment? Look no further than VideoHub - your one-stop destination for all things video!

At VideoHub, we believe that videos have the power to inspire, educate, and entertain like no other medium. Whether you're seeking heartwarming stories, informative documentaries, hilarious comedy sketches, thrilling adventures, or the latest music videos, we've got you covered. Our carefully curated collection of videos caters to a diverse audience, ensuring there's something for everyone.

Navigating VideoHub is a breeze! Our user-friendly interface allows you to effortlessly explore our vast library of content and discover new favorites. Our team of passionate curators works tirelessly to bring you the best videos from across the internet, making sure your viewing experience is nothing short of exceptional.

Are you an aspiring creator? VideoHub is not just a platform for viewers; it's a nurturing space for creators too! Share your talent with the world and be part of our growing community. Whether you're an established artist or a budding filmmaker, VideoHub provides a platform for your creativity to shine.

We take your experience seriously, which is why VideoHub is designed to be accessible on various devices, from your desktop to your smartphone, so you can enjoy your favorite videos on the go.

Join us on this exciting journey through the world of video content. Whether you're looking to unwind after a long day, learn something new, or simply have a good laugh, VideoHub has it all. Sit back, relax, and let the videos transport you to a world of endless possibilities.

VideoHub - Where the world of videos comes to life!
              </Text>

          </Stack>
      </Container>

  </Box>
};

const MyCarousel = () =>(
  <Carousel
  autoPlay
  infiniteLoop
  interval={1000}
  showStatus={false}
  showThumbs={false}
  showArrows={false} >
  
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        watch The Future
        </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
        Future is Gaming
        </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Gaming on Console
        </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
      Games don't make you violent, lag does.
        </Heading>
    </Box>
    </Carousel>
);

export default Home;

