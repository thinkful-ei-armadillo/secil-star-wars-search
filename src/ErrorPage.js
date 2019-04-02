import React from 'react';

class ErrorPage extends React.Component {  
    state = {error: null};
    componentDidCatch(error) {
        console.error(error);
        this.setState({ error });
    }

    render() {
        if (this.state.error) {
            return (
                <section className="error container">
                    <p>Sorry, that thing does not exist in Star Wars API!</p>
                    <p>Try searching for another thing!</p>
                </section>
            );
        }
        return this.props.children;
    }
}
export default ErrorPage;