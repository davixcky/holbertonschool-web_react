import React from "react";
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import { CourseShape } from "./CourseShape";

const CourseList = ({ listCourses }) => {

    return (
        <>
            <table id="CourseList">
                <thead>
                    <CourseListRow isHeader textFirstCell="Available courses" />
                    <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
                </thead>
                <tbody>
                    {
                        listCourses.length === 0
                            ? <CourseListRow textFirstCell="No courses available yet" />
                            : listCourses.map(course => <CourseListRow
                                key={course.id}
                                textFirstCell={course.name}
                                textSecondCell={course.credit} />)
                    }
                </tbody>
            </table>
        </>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(
        PropTypes.shape(CourseShape)
    )
}

CourseList.defaultProps = {
    listCourses: []
}

export default CourseList;
