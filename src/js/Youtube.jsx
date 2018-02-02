import React from 'react';
import ReactDOM from 'react-dom';


export class Youtube extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            band: '',
            video: '',
        };
    }

    componentWillMount() {
        this.setState ({
            band: this.props.band,
        });
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.props.band}&type=video&part=snippet,contentDetails,statistics,statu&key=AIzaSyDCaZeK9ihaPCkzDDtKaAkGwVl_Pq5LktA`;
        fetch(url)
            .then(r => r.json())
            .then (data => {
                console.log( data.items);
                this.setState({
                    video: data.items[0].id.videoId,
                })
            });
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10vh'}}>
                <iframe width="611" height="344" src={`https://www.youtube.com/embed/${this.state.video}`} frameBorder="0" allow="autoplay encrypted-media" allowFullScreen={true}></iframe>
            </div>
        );
    }
}