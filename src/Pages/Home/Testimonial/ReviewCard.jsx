import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';

const ReviewCard = (props) => {
    const {name, photo, place, text} = props.review
    return (
        <Grid style={{padding: '20px'}} item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 3, border: 0, m: 3 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 15, textAlign: 'center' }}
                  color="text.secondary"
                  gutterBottom
                >
                  {text}
                </Typography>
                
              </CardContent>
              <CardActions>
                  <img style={{width: '50px'}} src={photo} alt="" />
                <Box sx={{m: 3}}>
                    <Typography sx={{color: '#11d0da', fontWeight: 'bold'}}>{name}</Typography>
                    <Typography sx={{color: 'gray', fontSize: '12px'}}>{place}</Typography>
                </Box>
              </CardActions>
            </Card>
          </Grid>
    );
};

export default ReviewCard;