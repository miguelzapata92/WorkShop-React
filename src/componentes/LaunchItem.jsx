import { FcCalendar } from "react-icons/fc";
import { Box, Text, Spacer, Tag, Flex, Button } from '@chakra-ui/react';


export function LaunchItem(launch){
    return(
        <Box 
        
            bg = "gray.100"
            p = {4}
            m = {4}
            borderRadius = "lg"
            >

            <Box display="flex">
            <Text fontSize="2x1">
                Mission <strong>{launch.mission_name}</strong>(
                {launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Exitosa" : "Fallido"}
            </Tag>
            </Box>
            <Flex align="center">
                <FcCalendar/>
                <Text fontSize="lg" m1={5} p={1}>
                    {launch.launch_date_local.split("T")[0]}
                </Text>
            </Flex>
            <Button colorScheme="blue">Detalle de Misión</Button>
        </Box>
    )
}
