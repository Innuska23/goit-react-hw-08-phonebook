// theme.js

// 1. import `extendTheme` function
import { extendTheme, } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,

}

// 3. extend the theme
const theme = extendTheme({
    config, shadows: {
        purple: '0 10px 25px -3px #285E61'
    }
})

export default theme