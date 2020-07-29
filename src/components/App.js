import React, {useState, useEffect} from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import youtube from '../apis/youtube';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selected, setSelected] = useState(null);
    const [searchExamples, setSearchExamples] = useState(['happiness', 'anxiety', 'self-esteem', 'dream']);

    //request하고 state 두 개 업데이트 : 1. 첫 로딩 시 & 2. 서치바에서 키워드 submit 되었을 때 
    //업뎃 할 state: videos, selected
    const onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                part: 'snippet',
                key: 'AIzaSyDy7p__vv_-LggwKKdxKVhPMvdqQk9_mzc',
                type: 'video',
                maxResults: 5,
                channelId: 'UCzfKXReow3r5n1JR5nVlJZw',
                q: term,
            }
        }).then((response) => {
            if (response.data.items.length !== 0) {
                setSelected(response.data.items[0]); // videoDetail 위해
                setVideos(response.data.items); // videoList 위해
            } else {
                console.log(response);
            }
        })
    }

    useEffect(()=>{
        const randomExample = searchExamples[Math.floor(Math.random() * searchExamples.length)];
        onTermSubmit(randomExample);
    },[]);


    return (
        <div className="ui container">
            <SearchBar onTermSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selected} />
                    </div>
                    <div className="five wide column">
                        <VideoList className="four wide column" onVideoSelect={setSelected} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;