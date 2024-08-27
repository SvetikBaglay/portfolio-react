import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const urlPhotot = " https://i.pravatar.cc/150?img=7"

const Card = ({ title, description, imageSrc }) => {

  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // <VStack>
  return (
    <HStack>
      <Box>
        <Image src={imageSrc} ></Image>
        <Box>
          <Heading as="h4" size="md">
            {title}
          </Heading>
            <Text>{description}</Text>
            <Text>See more
            <FontAwesomeIcon icon={faArrowRight} size="1x" style={{ paddingLeft: '10px'}} />
            </Text>
        </Box>
      </Box>
    </HStack>

   )
};

export default Card;
