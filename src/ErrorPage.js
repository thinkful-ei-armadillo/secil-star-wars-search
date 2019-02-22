import React, {Component} from 'react';

export default class ErrorPage extends Component {
    state = {
        error: null
    }

    // static getDerivedStateFromError (error){
    //     this.setState({error});
    // }

    componentDidCatch (error){
        this.setState({error});
    }


    render(){
        if(this.state.error){
            return (
                <main className="error-page">
                    <h1>Something seems to have gone wrong</h1>
                    <p>Try refreshing the page</p>
                </main>
            );
        }
        return this.props.children;
    }
}