import React from 'react';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

interface Props {
  handleClose: any;
  open: any;
}

const AddPost: React.FC<Props> = ({ handleClose, open }) => {
  return (
    <Dialog onClose={handleClose} open={open} sx={{ width: '100vw' }}>
      <div className="p-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
              alt=""
            />

            <p className="ml-2">Ali Chamass</p>
          </div>
        </div>

        <TextField
          id="standard-multiline-static"
          label="What's on your mind"
          multiline
          rows={4}
          variant="standard"
          sx={{ marginTop: '15px', width: '100%' }}
        />

        <div className="flex flex-row items-center mt-6 justify-between">
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Stack>

          <Button variant="contained">Publier</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddPost;
