import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{
                height: '70px',
                bgcolor: palette.secondary.midNightBlue,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box component='span' sx={{ color: palette.primary.main }}>
    © {new Date().getFullYear()} Job Portal. All rights reserved. Your gateway to career success.
</Box>

            </Box>
        </>
    )
}

export default Footer