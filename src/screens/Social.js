import React from "react";

// UI
import { Flex, Icon } from "@chakra-ui/react";

// icons
import {
  FaFacebook as FaceBookIcon,
  FaGoogle as GoogleIcon,
  FaInstagram as InstagramIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";

function Social() {
  const icons = [FaceBookIcon, GoogleIcon, InstagramIcon, GithubIcon];

  return (
    <Flex
      w={{ base: "100%", sm: "30rem" }}
      justify="space-between"
      pb={{ base: "3rem" }}
    >
      {icons.map((icon) => (
        <Icon boxSize={{ base: "3rem" }} as={icon} key={icon} />
      ))}
    </Flex>
  );
}

export default Social;
