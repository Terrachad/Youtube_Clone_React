import React from 'react';
import Grid from '@mui/material/Grid';
import { sizing } from '@mui/system';
import Box from '@mui/material/Box';
import mytube from './api/mytube';

import {SearchBar, VideoDetails, VideoList} from './components'



class App extends React.Component{

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.handleSubmit('01 день війни. Звернення Президента України Володимира Зеленського до українців')
    }

    onVideoSelect= (video) =>{
        this.setState({selectedVideo: video});
    }

    handleSubmit = async (searchTerm) => {
        const response = await mytube.get('search', {params: {q: searchTerm}});

        console.log(response.data.items);
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }
    render(){
        const {selectedVideo, videos} = this.state;
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={2} >
                        <Box
        component="img"
        style={{paddingLeft: '60px',alignContent: 'center'}}
        sx={{

          maxWidth: { xs: 200, md: 120 },
        }}
        alt="The house from the offer."
        src="https://play-lh.googleusercontent.com/nS1FZryN3ZzBq-z_w6AG9HZLQwZERhcSU9rVRNa3K-4zmD3LQLZA3is1tiePncrGEQ"
      />
                        </Grid>
                        <Grid item xs={8}>
                            <SearchBar onFormSubmit={this.handleSubmit}>
                            </SearchBar>
                        </Grid>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo}>

                            </VideoDetails>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}>
                                
                            </VideoList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}



export default App;