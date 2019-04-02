import React from 'react';

class ErrorPage extends React.Component { 
    static defaultProps ={
        history:{
            push:() => {},
        },
    }   
    state = {error: null};
    componentDidCatch(error) {
        this.setState({ error });
    }

    handleClick= ()=>{ 
        this.setState({error: null})
    }

    render() {
        if (this.state.error) {
            return (
                <section className="error container">
                    <p>Sorry, that thing does not exist in Star Wars API!</p>
                    <p>Try searching for something else.</p>
                    <button onClick={this.handleClick}>Go Back!</button>
                </section>
            );
        }
        return this.props.children;
    }
}
export default ErrorPage;