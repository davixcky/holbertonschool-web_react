import React from "react";
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

    const elementStyles = {
        backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    }

    const table = () => {
        if (isHeader) {
            if (textSecondCell) {
                return (
                    <>
                        <th style={elementStyles}>{textFirstCell}</th>
                        <th style={elementStyles}>{textSecondCell}</th>
                    </>
                )
            }
            return <th style={elementStyles} colSpan="2">{textFirstCell}</th>
        }
        return (
            <>
                <td style={elementStyles}>{textFirstCell}</td>
                <td style={elementStyles}>{textSecondCell}</td>
            </>
        )
    }
    return (
        <>
            <tr style={elementStyles}>
                {table()}
            </tr>
        </>
    )
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

export default CourseListRow;
