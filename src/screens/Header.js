// UI
import { IconButton, Flex, Center, useColorMode } from "@chakra-ui/react";

// icons
import {
  FaSun as SunIcon,
  FaMoon as MoonIcon,
  FaInstagram as InstagramIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";

function headerIcon(pIcon, url, label) {
  return (
    <IconButton icon={pIcon} isRound="true" onClick={url} aria-label={label} />
  );
}

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex w="100%" justifyContent="space-between">
      <Center
        fontSize={{ base: "1.5rem" }}
        size="md"
        fontWeight="700"
        color="cyan.400"
      >
        portfolio
      </Center>
      <Flex gap={{ base: "1rem", sm: "1.5rem" }}>
        <Flex gap={{ base: "0.5rem" }}>
          {headerIcon(
            <InstagramIcon />,
            () => window.open("https://www.instagram.com/talikou/"),
            "instagram"
          )}
          {headerIcon(
            <GithubIcon />,
            () => window.open("https://www.github.com/talikou/"),
            "github"
          )}
        </Flex>
        {headerIcon(
          isDark ? <SunIcon /> : <MoonIcon />,
          toggleColorMode,
          "sunOrMoon"
        )}
      </Flex>
    </Flex>
  );
}

export default Header;
