import React from "react";

// UI
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

// icons
import {
  DiAndroid as AndroidIcon,
  DiCodeigniter as CodeigniterIcon,
  DiWebplatform as WebplatformIcon,
} from "react-icons/di";

// components
import Apps from "../components/Apps";

function Profile() {
  return (
    <Flex
      direction={{ base: "column" }}
      justifyContent={{ base: "none", lg: "center" }}
      alignItems={{ base: "none", lg: "center" }}
    >
      <Flex direction="column">
        <Heading fontWeight="800" color="cyan.500" size="2xl">
          1+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Flex>
      <Box>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "1rem" }}
          mt="3rem"
        >
          {Apps(AndroidIcon, "blue.400", "Android Apps")}
          {Apps(
            CodeigniterIcon,
            "gray.100",
            "Flutter Apps",
            "red.400",
            "black"
          )}
          {Apps(WebplatformIcon, "gray.100", "Web Apps", "green.400", "black")}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
