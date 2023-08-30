import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { Link, chakra } from "@chakra-ui/react";
import {
  defaultMenuItem,
  directoryMenuState,
} from "../../atoms/directoryMenuAtom";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory";
import RightContent from "./RightContent";
import SearchInput from "./SearchInput";
import router from "next/router";
import useDirectory from "../../hooks/useDirectory";

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);

  // Use <Link> for initial build; implement directory logic near end
  const { onSelectMenuItem } = useDirectory();

  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justifyContent={{ md: "space-between" }}
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
        onClick={() => onSelectMenuItem(defaultMenuItem)}
      >
        <Image src="/images/logo_image_1.jpg" height="30px" alt="my_logo" />
        <Image
          display={{ base: "none", md: "unset" }}
          src="/images/genesis.png"
          height="40px"
          alt="genesis_text"
          ml="4"
        />
      </Flex>

      <Flex align="center" mx="4">
        <chakra.h1
          fontWeight={{ base: "normal", md: "semibold" }}
          fontSize={{ base: "sm", md: "xl" }}
          color="green.300"
        >
          A RedditClone - Developed by{" "}
          <Link
            href="#" // Replace with portfolio website URL
            fontWeight="bold"
            color="cyan.400"
          >
            Ankit John
          </Link>
        </chakra.h1>
      </Flex>

      {user && <Directory />}

      <SearchInput user={user as User} />

      <RightContent user={user as User} />
    </Flex>
  );
};
export default Navbar;
