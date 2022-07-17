import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Text, Tag, Spacer, Flex } from "@chakra-ui/react";
import * as API from '../services/launches';

export function LaunchDetails(){

    const [launch, setLaunch] = useState({});

    const {launchId} = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId).then(setLaunch);
    }, [launchId]);

    return (<Box bg = "gray.100" p = {4} m = {4} borderRadius = "lg">
                
                <Text fontSize="24">
                    Mission <strong>{launch.mission_name}</strong>( {launch.launch_year})
                </Text>
                <Spacer />
                <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? "Exitosa" : "Fallido"}
                </Tag>
                <Box>
                    Rocket: {" "} 
                    <Link to = {`/rockets/${launch.rocket?.rocket_id}`}>
                        {launch.rocket?.rocket_name}
                    </Link>
                </Box>
             
     
  
            </Box>
        )
    
    
}