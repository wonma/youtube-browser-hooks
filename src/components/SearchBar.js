import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = ({onTermSubmit}) => {
    const [input, setInput] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onTermSubmit(input); // App으로부터 받아온 기능으로, 키워드검색 request를 보내게 된다
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a Subject"
                        className="search-bar__input"
                    />
                    <button className="ui button primary">Submit</button>
                </div>
                <div className="results"></div>
            </form>
        </div>
    );
}

export default SearchBar;