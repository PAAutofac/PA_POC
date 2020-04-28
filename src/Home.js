import React from "react"
import { Servicedesk } from "./Servicedesk"
import Typography from '@material-ui/core/Typography';

const Home = () => {
    return (
        <div style={{ border: "2px solid #78a02e", fontFamily: "Arial, sans-serif" }}>
            <Typography paragraph variant="h5" style={{ color: '#78a02e' }}>
                Welcome to the NaturalONE QAT environment.
        </Typography>

            <Typography paragraph variant="h6" >
                Please select the application you require from the menu.
</Typography>
            <br />

            <Typography paragraph variant="h6" >
                If there is any problems getting into the required application please email  <Servicedesk />
            </Typography>
        </div>

    )
}
export default Home;

