import  React from 'react';

import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/'
class Search extends React.Component{
    render(){
        const params = this.props.params;
        console.log(params);
        return(
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.type}/>
            </div>
        )
    }
}

export default Search;