import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { format } from 'date-fns';

function Dashboard() {
  const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const date = longEnUSFormatter.format(new Date());

  return (
    <>
      <Box
        sx={{
          height: 718,
          width: 635,
          border: '1px solid #e8e8e8',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '25px',
              paddingBottom: '10px',
            }}
          >
            8 task completed out of 10
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '25px',
              paddingBottom: '10px',
            }}
          >
            Show:{' '}
            <FormControl>
              <NativeSelect
                defaultValue={1}
                disableUnderline
                sx={{
                  marginTop: '-4px',
                  fontWeight: 600,
                  fontSize: '18px',
                  color: '#109CF1',
                }}
              >
                <option value={1}>This week</option>
                <option value={2}>This months</option>
                <option value={3}>This year</option>
              </NativeSelect>
            </FormControl>
          </Typography>
        </Box>
        <LinearProgress
          variant='buffer'
          value={80}
          color='success'
          sx={{
            width: '100%',
          }}
        />
        <br />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '25px',
            paddingBottom: '10px',
          }}
        >
          {date}
        </Typography>
      </Box>
    </>
  );
}

export default Dashboard;
