import { Box, Button, Text } from '@primer/react'

const Upgrade = () => {
    return (
        <Box
            p={3}
            fontWeight="bold"
            border="1px solid"
            borderColor="border.default"
            borderRadius={6}
            display="flex"
            alignItems="center"
        >
            <Box width="100%">
                <Text>Add multiple reviewers</Text>
            </Box>
            <Button>Upgrade</Button>
        </Box>
    )
}

export default Upgrade
