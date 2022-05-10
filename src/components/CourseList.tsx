import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseAdd } from "./CourseAdd";
import { CourseView } from "./CourseView";
import { Plan } from "../interfaces/plan";

/**
 * Returns a table that displays all of the courses in a single semester
 * This function updates the list of courses in a semester when needed and calls CourseView to display changes
 */
export function CourseList({
    semester,
    planId,
    updateEditedCourse,
    updateDeletedCourse,
    plans,
    setPlans
}: {
    semester: Semester;
    planId: string;
    updateEditedCourse: (
        planId: string,
        semId: string,
        courseCode: string,
        newCode: string,
        newName: string,
        newCredits: string
    ) => void;
    updateDeletedCourse: (
        planId: string,
        semId: string,
        courseCode: string
    ) => void;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
}): JSX.Element {
    const [courses, setCourses] = useState<Course[]>([...semester.courses]);
    /*
    Function updates the list of courses to include the changes that the user made in CourseEdit
    */
    function editCourse(id: string, newCourse: Course): void {
        setCourses(
            courses.map((course: Course) =>
                course.code === id ? newCourse : course
            )
        );
    }

    function deleteCourse(id: string) {
        setCourses(
            courses.filter((course: Course): boolean => course.code !== id)
        );
    }

    function clearCourses() {
        setCourses([]);
    }

    function addCourse(newCourse: Course): void {
        setCourses([...courses, newCourse]);
    }

    return (
        <div>
            <CourseView
                planId={planId}
                semId={semester.id}
                courses={courses}
                editCourse={editCourse}
                deleteCourse={deleteCourse}
                addCourse={addCourse}
                updateEditedCourse={updateEditedCourse}
                updateDeletedCourse={updateDeletedCourse}
            ></CourseView>
            <CourseAdd
                planId={planId}
                semesterId={semester.id}
                addCourse={addCourse}
                plans={plans}
                setPlans={setPlans}
            ></CourseAdd>
            <Button variant="danger" onClick={clearCourses}>
                Clear All Courses
            </Button>
        </div>
    );
}
