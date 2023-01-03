import {Box, Button} from '@chakra-ui/react';
import React from 'react';
import {useNavigate} from "react-router-dom";


const StartPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Box>
               <Button onClick={() => navigate("/pko")}>PKO</Button>
               <Button onClick={() => navigate("/dmo")}>DMO</Button>

            </Box>
        </div>
    );
};

export default StartPage;
