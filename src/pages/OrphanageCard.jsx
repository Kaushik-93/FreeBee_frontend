import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import profile1 from '../images/orphpro1.jpg'
import axios from 'axios'
import { toast } from "react-toastify";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


function OrphanageCard({ mobile, name, email }) {
  const [donorInfo, setDonorInfo] = useState(localStorage.getItem("donor_info"))
  const EMAIL_SERVICES = "http://127.0.0.1:8000/donation/external_email_service/"
  const notifyError = (message) => toast.error(message);
  const notify = (message) => toast.success(message);

  const handleDonate=()=>{
    
      var donor_data = {
        name:donorInfo.name,
        address: donorInfo.address,
        city: donorInfo.city,
        state: donorInfo.state,
        pincode: donorInfo.pincode,
        mobile_no: donorInfo.mobile_no,
        alt_mobile_no: donorInfo.alt_mobile_no,
        email: donorInfo.email,
        items: donorInfo.items,
        vehicle_type: donorInfo.vechiles,
        orphanage_email:email
      };
    console.log(donorInfo)
    axios
      .post(EMAIL_SERVICES, donor_data)
      .then(function (response) {
        if (response.data.status === "success") {
          notify("Email Sent Successfully");
        } else {
          notifyError(response.data.errorMessage);
        }
      })
      .catch(function (err) {
        notifyError(err.response.status + " - " + err.response.statusText);
      })
  }
  return (
    <Grid item>
      <Box>
        <Paper elevation={3} sx={{p:0.3}}>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item md={4}>

              <img src={profile1} alt="img" style={{ width: "300px", height: "170px" }} />
            </Grid>
            <Grid item md={8}>

              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="stretch"
              >
                <Grid item><Typography variant="h4" gutterBottom>
                  {name}
                </Typography></Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                      >
                        <Grid item><b>
                          Email
                        </b></Grid>
                        <Grid item> <Typography variant="body2" gutterBottom>
                          {email}
                        </Typography></Grid>
                      </Grid>

                    </Grid>
                    <Grid item><Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item><b>Phone Number</b>

                      </Grid>
                      <Grid item> <Typography variant="body2" gutterBottom>
                        {mobile}
                      </Typography></Grid>
                    </Grid></Grid>
                    <Grid item
                    sx={{pr:1}}
                    ><Button variant='contained' onClick={handleDonate}>Donate</Button></Grid>

                  </Grid>
                </Grid>

              </Grid>


            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  )
}

export default OrphanageCard