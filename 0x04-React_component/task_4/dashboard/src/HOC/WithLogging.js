import React, { Component } from 'react';
import PropTypes from 'prop-types';


class WithLogging extends Component {
    static propTypes = {
        children: PropTypes.node,
    };
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(this.props);
        let compName = this.props.children.type.name || 'Component';
        console.log(`Component ${compName} is mounted`);
    }

    componentWillUnmount() {
        let compName = this.props.children.type.name || 'Component';
        console.log(`Component ${compName} is going to unmount`);
    }

    render() {
        return (this.props.children);
    }
}

export default WithLogging;
