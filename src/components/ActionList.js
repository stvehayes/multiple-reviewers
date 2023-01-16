import React from 'react'
import { ActionList, Box, Button, Text } from '@primer/react'

const SelectFields = () => {
    const [options, setOptions] = React.useState([
        { text: 'Jared Goff', selected: false },
        { text: 'Justin Jackson', selected: false },
        { text: 'Jeff Okudah', selected: false },
        { text: 'Calvin Johnson', selected: false },
        { text: 'Jamaal Williams', selected: false },
        { text: 'Dan Campbell', selected: false },
    ])

    const selectedOptions = options.filter((option) => option.selected)

    const toggle = (selected) => {
        setOptions(
            options.map((option) => {
                if (option.text === selected) option.selected = !option.selected
                return option
            })
        )
    }

    return (
        <Box
            maxWidth="400px"
            border="1px solid"
            borderColor="border.default"
            borderRadius={6}
            m="0 auto"
        >
            <ActionList selectionVariant="single">
                <Box
                    display="flex"
                    alignItems="center"
                    borderBottom="1px solid"
                    borderColor="border.default"
                    pb={2}
                    px={3}
                >
                    <Box width="100%">
                        <Text
                            fontSize="small"
                            fontWeight="500"
                            color="fg.muted"
                        >
                            {selectedOptions.length > 1
                                ? 'Add multiple reviewers'
                                : 'Reviewers'}
                        </Text>
                    </Box>
                    {selectedOptions.length > 1 && (
                        <Button size="small">Upgrade</Button>
                    )}
                </Box>
                <ActionList.Group>
                    {options.map((option) => (
                        <ActionList.Item
                            key={option.text}
                            selected={option.selected}
                            onSelect={() => toggle(option.text)}
                        >
                            {option.text}
                        </ActionList.Item>
                    ))}
                </ActionList.Group>
            </ActionList>
        </Box>
    )
}

export default SelectFields
