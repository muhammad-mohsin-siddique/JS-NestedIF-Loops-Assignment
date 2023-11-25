/*
1. *Print Numbers:*
   Write a loop that prints numbers from 1 to 10 and while loop
*/

document.write("<hr/>Loops Assignmnet:")
//code
{
    // for loop

    document.write("<br/> For Loop");

    for(let i = 1; i <= 10; i++)
    {
        document.write("<br/>" + i );
    }

    // while loop
    document.write("<br/> While Loop");

    let i = 1;
    while(i <= 10 )
    {
        document.write("<br/>" + i );
        i++;
    }
}

/*
2. *Sum of Numbers:*
   Calculate and print the sum of numbers from 1 to 50 using a for loop and while loop
*/

//code 
{
    let sum = 0;

    document.write("<br/> For Loop");


    for(let i = 1; i <= 50; i++)
    {
        sum += i;
    }
    
    document.write("<br/> Sum = " + sum );

    sum = 0;

    // while loop
    document.write("<br/> While Loop");

    let i = 1;
    while(i <= 50 )
    {
        sum += i;
        i++;
    }

    document.write("<br/> Sum = " + sum );

}

/*
  3. *Even Numbers:*
   Print all even numbers between 20 and 30 using a for loop and while loop
*/

// code

{

    // for loop

    document.write("<br/> For Loop");

    for(let i = 20; i <= 30; i++)
    {
        if( i % 2 == 0)
            document.write("<br/>" + i );
    }
    
    // while loop
    document.write("<br/> While Loop");
    
    let i = 20;
    while(i <= 30 )
    {
        if( i % 2 == 0)
            document.write("<br/>" + i );
        i++;
    }

}

/*
4. *Reverse Order:*
   Print numbers from 10 to 1 in reverse order using a for loop and while loop
*/

// code

{

    // for loop

    document.write("<br/> For Loop");

    for(let i = 10; i > 0; i--)
    {
        document.write("<br/>" + i );
    }
    
    // while loop
    document.write("<br/> While Loop");
    
    let i = 10;
    while(i > 0 )
    {
        document.write("<br/>" + i );
        i--;
    }

}

/**
 * 5. *Multiplication Table:*
   Display the multiplication table (up to 10) for a given number using a for loop and while loop
*/


// code
{
    // for loop

    let number = 5; // this number you can get from the user right now i am using hardcoded Value

    document.write("<br/> For Loop");

    for(let i = 1; i <= 10; i++)
    {
        document.write("<br/>"+ number + " x " + i + " = " + i * number );
    }

    // while loop
    document.write("<br/> While Loop");

    let i = 1;
    while(i <= 10 )
    {
        document.write("<br/>"+ number + " x " + i + " = " + i * number );
        i++;
    }
}


// Jumping Statement


/**
 1. *Even Number Skip:*
   Write a loop that prints all even numbers between 1 and 10, but use the `continue` keyword to skip printing the number 6.
*/


// code

{

    // for loop

    document.write("<br/> For Loop");

    for(let i = 1; i <= 10; i++)
    {
        if( i % 2 == 0)
            if(i === 6)
                continue;
            else
                document.write("<br/>" + i );
    }
    
    // while loop
    document.write("<br/> While Loop");
    
    let i = 1;

    while(i <= 10 )
    {
        if( i % 2 == 0)
            if(i === 6)
            {
                i++;
                continue;
            }
            else
                document.write("<br/>" + i );

        i++;
    }

}


/**
 2. *Number Search:*
   Write a loop that iterates from 1 to 5, and use the `break` keyword to stop the loop when it finds the number 3.
*/


// code
{
    // for loop

    document.write("<br/> For Loop");

    for(let i = 1; i <= 5; i++)
    {
        if(i === 3)
        {
            document.write("<br/>Number 3 is Found");
            break;
        }

        document.write("<br/>" + i );
    }

    // while loop
    document.write("<br/> While Loop");

    let i = 1;
    while(i <= 10 )
    {
        if(i === 3)
        {
            document.write("<br/>Number 3 is Found");
            break;
        }
        document.write("<br/>" + i );
        i++;
    }
}