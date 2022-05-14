import React, { useState } from "react";
import { Semester } from "./interfaces/semester";
import { Plan } from "./interfaces/plan";
import { SemesterList } from "./components/semesterList";
import { Button } from "react-bootstrap";
import { AddSemesterModal } from "./components/AddSemesterModal";
import "./styleSheets/plan.css";

export function Semesterer({
    plan,
    plans,
    setPlans
}: {
    plan: Plan;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
}): JSX.Element {
    //list of degree requirements: base plan, cs BS major

    //list of semesters
    const sems = plan.semesters.map((sem: Semester) => ({ ...sem }));
    //the useState for the semesters so that everything will stay changed
    const [semesters, setSemesters] = useState<Semester[]>(sems);
    const [showAddModal, setShowAddModal] = useState(false);

    //editSemesters function
    function editSemester(id: string, newSemester: Semester) {
        setSemesters(
            semesters.map(
                (semester: Semester): Semester =>
                    semester.id === id ? newSemester : semester
            )
        );
    }

    //deleteSemester function
    function deleteSemester(id: string) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.id !== id
            )
        );
        updateDelSem(plan.id, id);
    }

    function updateDelSem(planId: string, semId: string) {
        const currPlan = plans.find(
            (plan: Plan): boolean => plan.id === planId
        );
        let updatePlan = { ...plans };
        if (currPlan !== undefined) {
            const currSems = currPlan.semesters.map(
                (sem: Semester): Semester => sem
            );
            const deletedSem = currSems.filter(
                (sem: Semester): boolean => sem.id !== semId
            );

            updatePlan = plans.map(
                (plan: Plan): Plan =>
                    plan.id === planId
                        ? { ...plan, semesters: deletedSem }
                        : { ...plan }
            );
        }
        setPlans(updatePlan);
    }

    //will add a new semester
    function addSemester(newSemester: Semester) {
        const existing = semesters.find(
            (sem: Semester): boolean => sem.id === newSemester.id
        );
        if (existing === undefined) {
            setSemesters([...semesters, newSemester]);
        }
    }

    function clearSemesters(id: string) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.id === id
            )
        );
        updateClearSems(plan.id, id);
    }

    function updateClearSems(planId: string, semId: string) {
        const currPlan = plans.find(
            (plan: Plan): boolean => plan.id === planId
        );
        let updatePlan = { ...plans };

        if (currPlan !== undefined) {
            const currSems = currPlan.semesters.filter(
                (sem: Semester): boolean => sem.id !== semId
            );
            updatePlan = plans.map(
                (plan: Plan): Plan =>
                    plan.id === planId
                        ? { ...plan, semesters: currSems }
                        : { ...plan }
            );
        }
        setPlans(updatePlan);
    }

    //will generate the pop up box in the case that we were adding a semester
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
    //will call semesterList
    return (
        <div className="mySems">
            <div className="mySemList">
                <SemesterList
                    plans={plans}
                    setPlans={setPlans}
                    semesters={semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                    plan={plan}
                ></SemesterList>
            </div>
            <div>
                <Button
                    variant="danger"
                    className="m-4"
                    onClick={() =>
                        clearSemesters("4da3fa04-5724-4223-a8ba-40f4a296b3b3")
                    }
                >
                    Clear All Semesters
                </Button>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add Semester
                </Button>
                <AddSemesterModal
                    planId={plan.id}
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addSemester={addSemester}
                    plans={plans}
                    setPlans={setPlans}
                ></AddSemesterModal>
            </div>
        </div>
    );
}
