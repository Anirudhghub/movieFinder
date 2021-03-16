import React from 'react';
import { AutoComplete , Input } from 'antd';
import './index.css'

const SearchBar = props => {
        return (
            <div className="searchBar-main">
                <AutoComplete  onSearch={props.onSearch} onPressEnter={props.onChange} style={{ width: "80%" }} >
                <Input.Search placeholder={props.placeholder}  onPressEnter={props.onChange}/>
                </AutoComplete>
                
            </div>
        );
    }
 

export default SearchBar;