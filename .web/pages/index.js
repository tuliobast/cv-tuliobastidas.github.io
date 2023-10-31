import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa-Medium", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`tulio`}
</Text>
  <Text as={`span`} sx={{"color": "#087ec4"}}>
  {`bast`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "700px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`Tulio Bastiddas`} size={`xl`} src={`tulio.jpg`} sx={{"color": "#C3C7CB", "bg": "#171F26", "padding": "2px", "border": "4px", "borderColor": "#14A1F0"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Medium"}}>
  {`Tulio Bastidas`}
</Heading>
  <Text sx={{"marginTop": "px !important", "color": "#14A1F0"}}>
  {`@tuliobast`}
</Text>
  <HStack spacing={`1em`}>
  <Link as={NextLink} href={`https://www.linkedin.com/in/tulio-bastidas-alvarez-60209036`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/linkedin.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://github.com/tuliobast`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/github.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/tuliobast/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/instagram.svg`} sx={{"width": "1.5em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+15`}
</Text>
  {` años de experiencia en RF`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+5`}
</Text>
  {` años de experiencia en Programación`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+11`}
</Text>
  {` años de experiencia en Fotografia`}
</Box>
  <Spacer/>
</Flex>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Soy un ingeniero de telecommunicaciones con mas de 15 años de esperiencia.
            Actualmente estoy desarrollandome como desarrollador full stack con Python desde hace 5 años, trabajo freelancer.
            Acá podras encontrar todos los enlaces a mis proyectos. ¡Bienvenidos! 
            `}
</Text>
</VStack>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins-Medium"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://www.twitch.tv/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/linkedin.svg`} sx={{"widht": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Directos de lunes a viernes`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/linkedin.svg`} sx={{"widht": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`YouTube`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Tutoriales semanales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.gg`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/linkedin.svg`} sx={{"widht": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`El chat de la comunidad`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins-Medium"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`mailto:tuliobast@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/linkedin.svg`} sx={{"widht": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Email`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`tuliobast@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/linkedin.svg`} sx={{"widht": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`YouTube`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Tutoriales semanales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.gg`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/linkedin.svg`} sx={{"widht": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`El chat de la comunidad`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginTop": "0.8em", "paddingBottom": "2em"}}>
  <Image src={`favicon.ico`}/>
  <Text sx={{"fontSize": "0.8em", "marginTop": "px !important", "color": "#A3ABB2"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Powered by Tuliobast 2021-2023`}
</Text>
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`CV | Tulio Bastidas`}
</title>
  <meta content={`Esto es una prueba del framework reflex, para crear sitios web con python puro`} name={`description`}/>
  <meta content={`favicon_TB.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
