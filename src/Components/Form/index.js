import {FormControl, FormLabel, Input, VStack,Stack} from '@chakra-ui/react';
import ButtonForm from '../Button';

const Form = () => {
  return (
    <form>

        {/* Alinhar os elementos na vertical */}
        <VStack spacing="4" align="stretch" p="10" bg="white">
            
            {/* Alinhar os elementos na horizontal */}
            <Stack direction={["column", "column", "column", "row"]} spacing={10}>

                {/* Input Name */}
                <FormControl id="name">
                    <FormLabel>Name:</FormLabel>
                    <Input type="text" required/>
                </FormControl>

                {/* Input Company Name */}
                <FormControl id="companyName">
                    <FormLabel>Company Name:</FormLabel>
                    <Input type="text" required />
                </FormControl>

            </Stack>

            {/* Alinhar os elementos na horizontal */}
            <Stack direction={["column", "row"]} spacing={10}>

                {/* Input Email */}
                <FormControl id="email">
                    <FormLabel>E-mail:</FormLabel>
                    <Input type="email" required/>
                </FormControl>

                {/* Input Phone Number */}
                <FormControl id="phoneNumber">
                    <FormLabel>Phone Number:</FormLabel>
                    <Input type="number" required />
                </FormControl>
            </Stack>

            <FormControl id="message">
                <FormLabel>Subject:</FormLabel>
                <Input rows="6" required/>
            </FormControl>

            <FormControl id="message">
                <FormLabel>Your Message:</FormLabel>
                <Input as="textarea" rows="6" required/>
            </FormControl>

            <ButtonForm/>

        </VStack>
    </form>
  );
}

export default Form;