import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterEditor } from "./SemesterEditor";
import { MultipleSemesterTable } from "./MultipleSemesterTable";
import "../styleSheets/multipleSemesterTable.css";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";

export function SemesterView({
    semester,
    editSemester,
    deleteSemester,
    plan,
    updateEditedSemester,
    updateEditedCourse,
    updateDeletedCourse,
    plans,
    setPlans
}: {
    semester: Semester;
    editSemester: (id: string, newSemester: Semester) => void;
    deleteSemester: (id: string) => void;
    plan: Plan;
    updateEditedSemester: (
        planId: string,
        semId: string,
        newSeason: string,
        newYear: number
    ) => void;
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
    //determines whether we're in editing mode for semesters
    const [editing, setEditing] = useState<boolean>(false);

    //will update the usestate editing
    function changeSemesterEditing() {
        setEditing(!editing);
    }

    //if in editing mode, will call semesterEditor
    //else, will call semesterTable which will pass in a single semester - this is okay becuase semesterLIST is already mapping
    //through a list of semesters, meaning we don't have to pass in a whole plan or list of semesters
    //add edit semester button
    return editing ? (
        <div>
            <SemesterEditor
                planID={plan.id}
                show={editing}
                changeSemesterEditing={changeSemesterEditing}
                semester={semester}
                editSemester={editSemester}
                deleteSemester={deleteSemester}
                updateEditedSemester={updateEditedSemester}
            ></SemesterEditor>
        </div>
    ) : (
        <div>
            <MultipleSemesterTable
                plans={plans}
                setPlans={setPlans}
                plan={plan}
                semester={semester}
                updateEditedCourse={updateEditedCourse}
                updateDeletedCourse={updateDeletedCourse}
            ></MultipleSemesterTable>
            <div>
                <Button variant="info" onClick={changeSemesterEditing}>
                    Edit Semester
                </Button>
            </div>
        </div>
    );
}
