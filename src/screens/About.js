import React from "react";

// UI
import { Flex, Box, Text, Image, Button, useColorMode } from "@chakra-ui/react";

function About() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      justify="space-evenly"
      direction={{ base: "column-reverse", lg: "row" }}
    >
      <Box
        my={{ base: "1rem", lg: "3rem" }}
        align="flex-start"
        w={{ lg: "40rem" }}
      >
        <Text
          fontSize={{ base: "1.5rem", sm: "2.5rem", md: "5xl" }}
          fontWeight="600"
        >
          Hi, I am
        </Text>
        <Text
          fontSize={{ base: "2.3rem", sm: "3.5rem", md: "7xl" }}
          fontWeight="700"
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text"
        >
          Ulykbekov Talant
        </Text>
        <Text fontSize="rem" color={isDark ? "gray.200" : "gray.600"}>
          I'm beginner to web programming. At the moment I am studying React JS
          and Chakra UI library. In the future, I wish to become a Front-end
          developer.
        </Text>
        <Button
          mt={{ base: "1rem", lg: "1rem" }}
          colorScheme="blue"
          onClick={() =>
            window.open(
              "mailto:ulykbek.talant2@gmail.com?subject=Приглашение%20на%20работу&body=Номер%20для%20связи:%20%0D%0AНаименование%20компании:%20"
            )
          }
        >
          Hire Me
        </Button>
      </Box>
      <Box
        display={{ base: "flex" }}
        justifyContent={{ base: "space-evenly", lg: "center" }}
        alignItems="center"
      >
        <Image
          src="https://github.com/talikou.png"
          mt={{ base: "1rem", lg: "0" }}
          boxSize={{ base: "13rem", sm: "15rem", md: "17rem", lg: "19rem" }}
          borderRadius="50%"
          boxShadow="lg"
          backgroundColor="transparent"
        />
      </Box>
    </Flex>
  );
}

export default About;
