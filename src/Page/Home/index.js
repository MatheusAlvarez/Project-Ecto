import { Box, Center, Stack } from "@chakra-ui/react";
import Form from "../../Components/Form";
import Header from "../../Components/Header";
import RowFirst from "../../Components/RowFirst";
import RowSecond from "../../Components/RowSecond";


const Home = () => {
    return(
        <Center>
            <Stack direction={["column", "column", "column", "row"]} spacing={10} margin="0 auto">
                <Box 
                    borderRadius="3px" 
                    bg={['white', 'white', 'transparent']} 
                    p="5px" 
                    width={{ md: '50%', lg: '50%', sm: '100%'}}
                    marginLeft={{sm: '2%', md: '10%', lg: '10%', }}
                    marginTop="3%"
                    boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)">
                    <Header/>
                    <Form/>
                </Box>

                <Box width={{sm: '90%%', md: '50%', lg: '25%'}}>
                    <RowFirst/>
                    <RowSecond/>
                </Box>
            </Stack>
        </Center>
    );
}

export default Home;