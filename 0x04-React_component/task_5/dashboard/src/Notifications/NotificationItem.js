import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

export default class NotificationItem extends PureComponent {
    static propTypes = {
        html: PropTypes.shape({
            __html: PropTypes.string,
        }),
        value: PropTypes.string,
        type: PropTypes.string.isRequired,
        markAsRead: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        if (this.props.html) {
            return <li onClick={this.props.markAsRead} data-priority={this.props.type} dangerouslySetInnerHTML={this.props.html}></li>
        } else {
            return <li onClick={this.props.markAsRead} data-priority={this.props.type}>{this.props.value}</li>
        }
    }

    render() {
        return this.renderList();
    }
}

NotificationItem.defaultProps = {
    type: 'default',
};
