/*
*Simple Mark Sheet Assignment in JavaScript*

*Objective:* Create a basic program using hardcoded values to determine a student's grade.

*Task:*
Write a JavaScript program that uses hardcoded marks in three subjects (Math, English, and Science) and assigns a grade based on the average percentage.

*Steps:*
1. Hardcode values for Math, English, and Science marks.
2. Calculate the average percentage using the formula: `(Math + English + Science) / 3`.
3. Implement a grading system using logical operators:
   - If the average is greater than or equal to 90%, assign an 'A' grade.
   - If the average is between 80% and 89%, assign a 'B' grade.
   - If the average is between 70% and 79%, assign a 'C' grade.
   - If the average is between 60% and 69%, assign a 'D' grade.
   - If the average is below 60%, assign an 'F' grade.
4. Display the calculated percentage and assigned grade.

*/

{
    // Subjects Marks 

    let Maths = 300;
    let Science = 90;
    let English = 20;

    let obtainMarks = Maths + Science + English;

    // Check the User Input 

    if (obtainMarks > 300) {
        document.write("Obtained Makrs Greater Than Total Marks...");
        process.exit(1); // it terminate the process, rest of the code will not execute

    }
    // Calculate the Average Percentage Of the above Subjects

    let average = (Maths + Science + English) / 3;

    if (average >= 90) {
        document.write("Subject Marks: <hr /><br />Maths = " + Maths + "<br />English = " + English + "<br />Science = " + Science);
        document.write("<br />Average Percentage = " + average + "%" + " => Grade = " + 'A');
        document.write("<br />Obtained Marks = " + obtainMarks + "<br />Total Marks = " + 300);
    }
    else if (average >= 80 && average < 90) {
        document.write("Subject Marks: <hr /><br />Maths = " + Maths + "<br />English = " + English + "<br />Science = " + Science);
        document.write("<br />Average Percentage = " + average + "%" + " => Grade = " + 'B');
        document.write("<br />Obtained Marks = " + obtainMarks + "<br />Total Marks = " + 300);
    }
    else if (average >= 70 && average < 80) {
        document.write("Subject Marks: <hr /><br />Maths = " + Maths + "<br />English = " + English + "<br />Science = " + Science);
        document.write("<br />Average Percentage = " + average + "%" + " => Grade = " + 'C');
        document.write("<br />Obtained Marks = " + obtainMarks + "<br />Total Marks = " + 300);
    }
    else if (average >= 60 && average < 70) {
        document.write("Subject Marks: <hr /><br />Maths = " + Maths + "<br />English = " + English + "<br />Science = " + Science);
        document.write("<br />Average Percentage = " + average + "%" + " => Grade = " + 'D');
        document.write("<br />Obtained Marks = " + obtainMarks + "<br />Total Marks = " + 300);
    }
    else {
        document.write("Subject Marks: <hr /><br />Maths = " + Maths + "<br />English = " + English + "<br />Science = " + Science);
        document.write("<br />Average Percentage = " + average + "%" + " => Grade = " + 'F');
        document.write("<br />Obtained Marks = " + obtainMarks + "<br />Total Marks = " + 300);
    }
}

/*

*Compound Expressions Assignment in JavaScript*

*Objective:* Develop a program that utilizes compound expressions to make decisions based on multiple conditions.

*Task:*
Write a JavaScript program that takes hardcoded values for a student's marks in two subjects (Math and English) and determines eligibility for an advanced placement course.

*Steps:*
1. Hardcode values for Math and English marks.
2. Implement a compound expression using logical operators:
   - To be eligible for the advanced placement course, the student must have:
     - A Math mark greater than or equal to 80%.
     - An English mark greater than or equal to 75%.
3. Display a message indicating whether the student is eligible for the advanced placement course.

This assignment focuses on the use of compound expressions to make decisions based on multiple conditions, reinforcing the understanding of logical operators and their combination in programming.

*/

// code
{
    
    let Maths = 50;
    let English = 60;

    if(Maths > 79 && English > 74 )
    {
        document.write("You are eligible for the advacned placement course: ");
    }
    else
        document.write("You are not eligible for the advacned placement course: ");

    // try with Nested if

    if(Maths > 79)
    {
        if(English > 74)
            document.write("You are eligible for the advacned placement course: ");
        else
            document.write("You are not eligible for the advacned placement course: ");

    }
    else
        document.write("You are not eligible for the advacned placement course: ");


}

/*

Nested IF Assignment in JavaScript*

*Objective:* Create a program using nested if statements to determine a person's eligibility to vote based on age and nationality.

*Task:*
Write a JavaScript program that takes hardcoded values for a person's age and nationality and determines whether they are eligible to vote.

*Steps:*
1. Hardcode values for the person's age and nationality.
2. Use a nested if statement to check the age:
   - If the person is 18 years or older, proceed to the next step.
   - If the person is younger than 18, display a message indicating they are not eligible to vote.
3. Within the nested block for age, use another if statement to check nationality:
   - If the person is of a specific nationality (you can choose), display a message indicating they are eligible to vote.
   - If the person is not of the specified nationality, display a message indicating they are not eligible to vote.

This assignment emphasizes the use of nested if statements to handle multiple conditions and decisions in a structured manner. It also introduces the concept of eligibility for voting based on age and nationality.

*/

//code

{
    let age = 18;
    let nationality = "pakistani";

    if(agr >= 18)
    {
        if(nationality === "pakistani")

            document.write("Congratulation! <br /> you are Eligible For vote");
        else
            document.write("unfortunately! <br /> you are not Eligible For vote");
    }
    else
    document.write("unfortunately! <br /> you are not Eligible For vote");

    // Let's Try With Compound Statement

    if(age > 17 && nationality === "pakistani")
        document.write("Congratulation! <br /> you are Eligible For vote");
    else
    document.write("unfortunately! <br /> you are not Eligible For vote");

}