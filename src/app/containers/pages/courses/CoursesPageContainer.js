import React, { Component } from 'react';
import { connect } from 'react-redux';

import { coursesOperations } from 'appAPI/courses';

import { CoursesPage } from 'appPages/courses';

class CoursesPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const { getCourses } = this.props;

        if (getCourses) {
            getCourses();
        }
    }
    
    render() {
        const { courses } = this.props;

        console.log(courses);

        return (
            <CoursesPage courses={courses} />
        );
    }
}

const mapStateToProps = state => ({
    courses: state.courses.courses
});

const mapDispatchToProps = {
    getCourses: coursesOperations.getCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPageContainer);