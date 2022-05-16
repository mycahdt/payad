//semesterEditor: modal
//two textboxes
//save button
//cancel button
//delete button
import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterEditor } from "./semesterEditor";
import semesterPlan from "../data/semesterPlan.json";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { Semesterer } from "../semesterer";
import { Plan } from "../interfaces/plan";
import { PlanView } from "./PlanView";
import { PlanList } from "./PlanList";
import { MultipleSemesterTable } from "./multipleSemesterTable";
import { SemesterView } from "./semesterView";
import { SemesterList } from "./semesterList";

const plan = semesterPlan[0];
const plans = semesterPlan.map((plan: Plan): Plan => plan);
const semester = plan.semesters[0];

test("There is one input Box", () => {
    render(
        <SemesterEditor
            show={true}
            changeSemesterEditing={function (): void {
                throw new Error("Function not implemented.");
            }}
            semester={semester}
            editSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
            deleteSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    const inputBox = screen.getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
});
test("There is one number Box", () => {
    render(
        <SemesterEditor
            show={true}
            changeSemesterEditing={function (): void {
                throw new Error("Function not implemented.");
            }}
            semester={semester}
            editSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
            deleteSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    const numBox = screen.getByRole("spinbutton");
    expect(numBox).toBeInTheDocument();
});
test("There are 4 Buttons", () => {
    render(
        <SemesterEditor
            show={true}
            changeSemesterEditing={function (): void {
                throw new Error("Function not implemented.");
            }}
            semester={semester}
            editSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
            deleteSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    const buttons = screen.queryAllByRole("button");
    expect(buttons).toHaveLength(4);
});
test("There is a button labeled Save", () => {
    render(
        <SemesterEditor
            show={true}
            changeSemesterEditing={function (): void {
                throw new Error("Function not implemented.");
            }}
            semester={semester}
            editSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
            deleteSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    const saveButton = screen.getByRole("button", { name: /Save/i });
    expect(saveButton).toBeInTheDocument();
});
test("There is a Cancel Button", () => {
    render(
        <SemesterEditor
            show={true}
            changeSemesterEditing={function (): void {
                throw new Error("Function not implemented.");
            }}
            semester={semester}
            editSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
            deleteSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    expect(cancelButton).toBeInTheDocument();
});
test("There is a Delete Semester Button", () => {
    render(
        <SemesterEditor
            show={true}
            changeSemesterEditing={function (): void {
                throw new Error("Function not implemented.");
            }}
            semester={semester}
            editSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
            deleteSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    const deleteSem = screen.getByRole("button", { name: /Delete Semester/i });
    expect(deleteSem).toBeInTheDocument();
});
test("Edit a semester is on Screen", () => {
    render(
        <SemesterEditor
            show={true}
            changeSemesterEditing={function (): void {
                throw new Error("Function not implemented.");
            }}
            semester={semester}
            editSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
            deleteSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    expect(screen.getByText(/Edit a Semester/i)).toBeInTheDocument();
});
test("Semester Season is on Screen", () => {
    render(
        <SemesterEditor
            show={true}
            changeSemesterEditing={function (): void {
                throw new Error("Function not implemented.");
            }}
            semester={semester}
            editSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
            deleteSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    expect(screen.getByText(/Semester Season/i)).toBeInTheDocument();
});
test("Semester Year is on Screen", () => {
    render(
        <SemesterEditor
            show={true}
            changeSemesterEditing={function (): void {
                throw new Error("Function not implemented.");
            }}
            semester={semester}
            editSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
            deleteSemester={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    expect(screen.getByText(/Semester Year/i)).toBeInTheDocument();
});
//test:
//you can edit a semester and save changes
//you can delete a semester
//Cancel works (does nothing)
test("You Can Edit a Semester (Save Changes Button Works)", () => {
    render(<App />);
    const addNewPlanBtn = screen.getByRole("button", { name: /Add New Plan/i });
    addNewPlanBtn.click();
    //const sem1 = screen.getByText("Summer 2020");
    //expect(sem1).toBeInTheDocument();
    //const modal = screen.getByRole("dialog");
    //expect(modal).toBeInTheDocument();
    const newPlanId = screen.getByRole("textbox", { name: /ID of New Plan:/i });
    //expect(newPlanId).toBeInTheDocument();
    userEvent.type(newPlanId, "testing-2022");
    const nameNewPlan = screen.getByRole("textbox", {
        name: /Name of New Plan:/i
    });
    //expect(nameNewPlan).toBeInTheDocument();
    userEvent.type(nameNewPlan, "Tester Plan");
    const saveChangesBtn = screen.getByRole("button", {
        name: /Save Changes/i
    });
    //expect(saveChangesBtn).toBeInTheDocument();
    saveChangesBtn.click();
    const editSemBtn = screen.getByRole("button", { name: /Edit Semester/i });
    //expect(editSemBtn).toBeInTheDocument();
    editSemBtn.click();
    const semSeasonTb = screen.getByRole("textbox", {
        name: /Semester Season:/i
    });
    //expect(semSeasonTb).toBeInTheDocument();
    //userEvent.type(semSeasonTb, "");
    // semSeasonTb.userEvent.type(semSeasonTb, "Winter");
    userEvent.type(semSeasonTb, "{selectall}Winter");
    const semYear = screen.getByRole("spinbutton", { name: /Semester Year:/i });
    //expect(semYear).toBeInTheDocument();
    //userEvent.type(semYear, "");
    //semYear.value = "";
    userEvent.type(semYear, "{selectall}2028");
    const saveBtn = screen.getAllByRole("button", { name: /Save/i });
    //expect(saveBtn).toHaveLength(2);
    //save[0].click();
    userEvent.click(saveBtn[1]);
    /*render(
        <PlanList
            plans={plans}
            setPlans={function (p: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
            deletePlan={function (id: string): void {
                throw new Error("Function not implemented.");
            }}
            editPlan={function (id: string, newPlan: Plan): void {
                throw new Error("Function not implemented.");
            }}
            setData={function (d: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    render(
        <PlanView
            plan={plan}
            editPlan={function (id: string, newPlan: Plan): void {
                throw new Error("Function not implemented.");
            }}
            deletePlan={function (id: string): void {
                throw new Error("Function not implemented.");
            }}
            plans={plans}
            setPlans={function (p: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
            setData={function (d: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    render(
        <Semesterer
            plan={plan}
            plans={plans}
            setPlans={function (p: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
            setData={function (d: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    render(
        <SemesterList
            semesters={[]}
            deleteSemester={function (id: string): void {
                throw new Error("Function not implemented.");
            }}
            editSemester={function (id: string, newSemester: Semester): void {
                throw new Error("Function not implemented.");
            }}
            plan={plan}
            plans={plans}
            setPlans={function (p: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
            setSemesters={function (s: Semester[]): void {
                throw new Error("Function not implemented.");
            }}
            setData={function (d: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    render(
        <SemesterView
            semester={semester}
            editSemester={function (id: string, newSemester: Semester): void {
                throw new Error("Function not implemented.");
            }}
            deleteSemester={function (id: string): void {
                throw new Error("Function not implemented.");
            }}
            plan={plan}
            plans={plans}
            setPlans={function (p: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
            setSemesters={function (s: Semester[]): void {
                throw new Error("Function not implemented.");
            }}
            setData={function (d: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
        />
    );*/
    render(
        <MultipleSemesterTable
            plan={plan}
            semester={semester}
            plans={[]}
            setPlans={function (p: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
            setSemesters={function (s: Semester[]): void {
                throw new Error("Function not implemented.");
            }}
            setData={function (d: Plan[]): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    expect(screen.getByText(/Winter 2028/i)).toBeInTheDocument();
});
