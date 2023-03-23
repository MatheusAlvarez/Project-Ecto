import { Box } from "@chakra-ui/react";
import { PhraseRow } from "../../styles/PhraseRow";
import { TextRow } from "../../styles/TextRow";

const RowFirst = () => {
    return(
        <Box marginLeft="15px"borderRadius="3px" paddingTop={{sm: '64px', md: '10px', lg: '10%', }}>
            <TextRow>Our Commitment</TextRow>
            <Box 
                marginTop="12px" 
                p="28px" 
                bg="white" 
                w="95%" 
                boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                borderRadius="4px">
                <PhraseRow>
                    Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius 
                    dictum
                </PhraseRow>
            </Box>
        </Box>
    );
}

export default RowFirst;