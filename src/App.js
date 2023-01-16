import { ThemeProvider, BaseStyles, Box } from '@primer/react'
import ActionList from './components/ActionList'

function App() {
    return (
        <ThemeProvider colorMode="light">
            <BaseStyles>
                <Box m={4}>
                    <ActionList />
                </Box>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
