import { Box, Image, Stack } from "@chakra-ui/react";
import { PhraseRow } from "../../styles/PhraseRow";
import { TextRow } from "../../styles/TextRow";

import tel from '../../image/telefone.svg'
import email from '../../image/email.svg'
import local from '../../image/local01.svg'

const RowSecond = () => {
    return(
        <Box marginLeft="15px" borderRadius="3px" marginBottom={["20%"]}>
            <TextRow>Art Directing</TextRow>
            <Box 
                marginTop="12px" 
                p="10px 20px" 
                bg="white"
                w="95%" 
                boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                borderRadius="4px">

                <PhraseRow marginTop="20px">
                    Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit nulla
                .</PhraseRow>
                
                <Stack marginTop="20px" direction="row" spacing={3}>
                    <Image src={tel}/>
                    <PhraseRow marginTop="20px">+123 (4567) 8910</PhraseRow>
                </Stack>

                <Stack marginTop="20px" direction="row" spacing={3}>
                    <Image src={email}/>
                    <PhraseRow marginTop="20px">hello@example.com</PhraseRow>
                </Stack>

                <Stack marginTop="20px" direction="row" spacing={3}>
                    <Image src={local}/>
                    <PhraseRow marginTop="20px">120 Street Lorem Ipsum Sit Amet</PhraseRow>
                </Stack> 
            </Box>
        </Box>
    );
}

export default RowSecond;