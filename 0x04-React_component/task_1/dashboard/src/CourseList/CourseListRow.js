import React from "react";
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    const table = () => {
        if (isHeader) {
            if (textSecondCell) {
                return (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                )
            }
            return <th colSpan="2">{textFirstCell}</th>
        }
        return (
            <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </>
        )
    }
    return (
        <>
            <tr>
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
