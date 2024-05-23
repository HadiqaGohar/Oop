#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Class representing a student with a name property
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
// Class representing a person with a list of students
class Person {
    students = [];
    //Method to add a student to the list
    addStudent(obj) {
        this.students.push(obj);
    }
}
// Creating an instance of the Person class
const person = new Person();
// Function to start the program
const programStart = async (person) => {
    console.log(chalk.bold.rgb(204, 204, 204)(`\t\t<<< ========================================================= >>> `));
    console.log(chalk.magentaBright.bold("\n\t\t          Welcome to OOP Project created by Hadiqa Gohar\n"));
    console.log(chalk.bold.cyanBright.bold("\n\t\t                    Welcome guest!  \n"));
    console.log(chalk.bold.rgb(204, 204, 204)(`\t\t<<< ========================================================= >>> `));
    do {
        // Asking user which person to talk to
        const { select } = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Which person do you want to talk to or exit?",
            choices: ["Teacher", "Student", "Exit"]
        });
        if (select === "Teacher") {
            console.log(chalk.green("You are chatting with Teacher"));
            console.log(chalk.magenta("Hope you are doing well!"));
        }
        // If user chooses Student
        if (select === "Student") {
            const { student } = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which student do you want to talk?"
            });
            // Finding the student
            let selectedStudent = person.students.find((value) => value.name === student);
            // If student not found, add new student to the list
            if (!selectedStudent) {
                selectedStudent = new Student(student);
                person.addStudent(selectedStudent);
                console.log(chalk.underline.yellow(`I am ${chalk.bold.green(selectedStudent.name)}, and I'm good.`));
            }
            else {
                console.log(chalk.yellow(`I am ${chalk.bold.cyan(selectedStudent.name)}, and I'm doing well.`));
            }
        }
        // If user chooses Exit
        if (select === "Exit") {
            console.log(chalk.bold.yellow("Goodbye!"));
            process.exit();
        }
    } while (true);
};
programStart(person);
