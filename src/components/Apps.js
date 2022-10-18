import React from "react";

// UI
import { Flex, Text, Icon } from "@chakra-ui/react";

function Apps(pIcon, pBg, pText, pHover = "purple.400", pColor = "white") {
  return (
    <Flex
      color={pColor}
      rounded="10%"
      direction="column"
      bg={pBg}
      boxSize={{ base: "16rem", lg: "19rem" }}
      justify="flex-end"
      _hover={{ bg: pHover }}
    >
      <Icon p="1rem" as={pIcon} w="6rem" h="6rem" />
      <Text p="1rem" fontSize="xl" fontWeight="700">
        {pText}
      </Text>
    </Flex>
  );
}

export default Apps;
