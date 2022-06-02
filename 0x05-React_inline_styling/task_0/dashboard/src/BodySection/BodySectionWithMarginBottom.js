import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BodySection from './BodySection';

import './BodySection.css';

export default class BodySectionWithMarginBottom extends Component {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='bodySectionWithMargin'>
                <BodySection {...this.props} />
            </div>
        )
    }
}
