import React, { Component } from 'react';
import { 
    FundraiserShowcase,
} from '../compontents'
import { Flex, Heading, Button, Link } from 'rebass';

class Showcase extends Component {

    constructor(props) {
        super(props);
    }
  
    render() {

        return (
            <Flex 
            alignItems='center'
            flexDirection={'column'}
            >
                <Heading fontSize={[4, 6]} m={3}>Featured Fundraisers</Heading>
                <FundraiserShowcase 
                    title="Test Fundraiser"
                    description="This is a test fundraiser. Funds do not go to a legitimate recipeint."
                    address="0x7674CDe839a2B0Ab3805Eff5f8426f258c58c891"
                />
                <Heading fontSize={[2, 3]} m={3}>- OR -</Heading>
                <Link href="/create-fundraiser"><Button variant='primary' fontWeight={500}>Create Fundraiser</Button></Link>
            </Flex>
        );
    }
}


export default Showcase;