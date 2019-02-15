import React from 'react';

export default function SearchResultsForm (props) {
    return (
        <div>
            <ul>
                {props.results.map((result,index) => <li key={index}>{result}</li>)}
            </ul>
        </div>
    )
}

