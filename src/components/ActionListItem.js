import React, { useState } from 'react'
import { ActionList, Box } from '@primer/react'
import { CheckIcon } from '@primer/octicons-react'

const ActionListItem = (props) => {
    const [selected, setSelected] = useState(false)
    const [alert, setAlert] = useState(false)

    return (
        <ActionList.Item>
            <ActionList.LeadingVisual>
                {selected && <CheckIcon />}
            </ActionList.LeadingVisual>
            {props.name || 'Item'}
        </ActionList.Item>
    )
}

export default ActionListItem
