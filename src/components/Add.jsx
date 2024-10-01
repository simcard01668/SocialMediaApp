
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Add as AddIcon, DateRange, EmojiEmotions, PersonAdd, Photo, VideoFile } from '@mui/icons-material';
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const UserBox = styled(Box)({
    display: 'flex',
    gap: "10px",
    alignItems: 'center',
    marginBottom: 12
});

const Add = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Tooltip title={"Make a Post"} sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick={e => setOpen(true)} />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3} >
                    <Typography variant='h6' color='grey' textAlign="center" fontWeight="600">Create Post</Typography>
                    <UserBox>
                        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/18518594/pexels-photo-18518594.jpeg?auto=compress&cs=tinysrgb&w=400" />
                        <Typography variant='h6' fontWeight="500">John</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Write Somethings..."
                        variant="standard"
                    />
                    <Stack direction="row" spacing={2} mt={2} mb={2}>
                        <EmojiEmotions color='primary' />
                        <Photo color="secondary" />
                        <VideoFile color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{width: "20%"}}><DateRange/></Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>
        </>
    )
}

export default Add