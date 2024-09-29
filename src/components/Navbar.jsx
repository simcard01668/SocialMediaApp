import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: "20px",
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: "10px",
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: 'none'
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: 'block' } }}>Facebook</Typography>
                <Pets sx={{ display: { xs: "block", sm: 'none' } }} />
                <Search><InputBase placeholder='search...'></InputBase></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30, cursor:"pointer" }} onClick={e=>setOpen(true)} src="https://images.pexels.com/photos/14904976/pexels-photo-14904976.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </Icons>
                <UserBox onClick={e=>setOpen(true)} sx={{cursor:"pointer"}}>
                    <Avatar sx={{ width: 30, height: 30 }}  src="https://images.pexels.com/photos/14904976/pexels-photo-14904976.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Typography variant="span" sx={{ display: { xs: "none", sm: 'block' } }}>John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar