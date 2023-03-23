import { Box } from "@chakra-ui/react";
import { Phrase } from "../../styles/Phrase";
import { TextS } from "../../styles/Text";

const Header = () => {
    return(
        <Box>
            <TextS>Let's Connect</TextS>
            <Phrase>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla augue ex, iaculis non magna sit amet, posuere fermentum magna.
                Praesent tempus risus mauris, ac pharetra mi sagittis id.
            </Phrase>
        </Box>
    );
}

export default Header;