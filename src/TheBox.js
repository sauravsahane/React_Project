import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import './App.css'

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 375 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
          Course fees
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
            ₹5000
        </Typography>
        <Typography sx={{ fontSize: 14, marginBottom: '7px', fontWeight: 'bold', marginTop: '10px'  }}>
          What's Included
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
            <div className='lists'><OndemandVideoIcon style={{ fontSize: '15px' }}/>&nbsp; 10 hours on-demand video</div>
            <div className='lists'><OndemandVideoIcon style={{ fontSize: '15px' }}/>&nbsp; 10 downloadable resources</div>
            <div className='lists'><QuestionAnswerOutlinedIcon style={{ fontSize: '15px' }}/>&nbsp; Full lifetime access</div>
            <div className='lists'><QuestionAnswerOutlinedIcon style={{ fontSize: '15px' }}/>&nbsp; Certificate of completion</div>
        </Typography>
      </CardContent>
      <CardActions style={{ textAlign: 'center' }}>
        <Button variant="contained" style={{
            borderRadius: '50px',
            backgroundColor: '#800080',
            color: '#fff',
            padding: '10px 20px',
            width: '100%',
            margin: '5%',
            marginTop: 0,
        }}>Register today</Button>
      </CardActions>
    </Card>
  );
}
