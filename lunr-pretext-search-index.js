var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "intro_activity",
  "level": "1",
  "url": "intro_activity.html",
  "type": "Section",
  "number": "1.1",
  "title": "Warmup Problems",
  "body": " Warmup Problems   You should try to do the following activity right away.   Solve:    Draw a graph of the solution set of the equation: .   If a solution has , what is or viceversa?   Draw a graph of the solution set of the equation: .  Graph the solution sets from the two previous steps together. How does your answer to part compare to your graph?  Solve:   Solve:   Wait, what just happened? Explain the results of the previous two parts. What do the graphs of the corresponding solution sets look like in relation to the graphs of the equations?  What are the possible intersections of two lines? Clearly state your conjecture which adresses ALL possibilities.   Throughout this course we will be doing many of the same things you did in the previous questions, but we will do them in a more general setting that will allow us to solve many new and old problems.    Application Warmup Problem  Here is an application problem where you can see the relevence of your work you just did.   Introduction to Traffic Flow   Consider the following diagram of a network with the flows indicated:   A network with directions of flow    If all the flows, , , , , and , are all nonnegative, what is the largest possible value for ?    To answer this consider the following:  For each node (A, B, C, D) set up a conservation equation. Remember the flow in must equal the flow out.  How many linear equations do you have? How many unknowns?  Use your conservation equations for A and D to solve for in terms of and . How might we solve for and in terms of and ?  Is our solution unique?       "
},
{
  "id": "intro_activity-2-2",
  "level": "2",
  "url": "intro_activity.html#intro_activity-2-2",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": " Solve:    Draw a graph of the solution set of the equation: .   If a solution has , what is or viceversa?   Draw a graph of the solution set of the equation: .  Graph the solution sets from the two previous steps together. How does your answer to part compare to your graph?  Solve:   Solve:   Wait, what just happened? Explain the results of the previous two parts. What do the graphs of the corresponding solution sets look like in relation to the graphs of the equations?  What are the possible intersections of two lines? Clearly state your conjecture which adresses ALL possibilities.  "
},
{
  "id": "intro_activity-3-3",
  "level": "2",
  "url": "intro_activity.html#intro_activity-3-3",
  "type": "Activity",
  "number": "1.1.2",
  "title": "Introduction to Traffic Flow.",
  "body": " Introduction to Traffic Flow   Consider the following diagram of a network with the flows indicated:   A network with directions of flow    If all the flows, , , , , and , are all nonnegative, what is the largest possible value for ?    To answer this consider the following:  For each node (A, B, C, D) set up a conservation equation. Remember the flow in must equal the flow out.  How many linear equations do you have? How many unknowns?  Use your conservation equations for A and D to solve for in terms of and . How might we solve for and in terms of and ?  Is our solution unique?     "
},
{
  "id": "solving_linear_systems",
  "level": "1",
  "url": "solving_linear_systems.html",
  "type": "Section",
  "number": "1.2",
  "title": "Solving Linear Systems",
  "body": " Solving Linear Systems   Elementary Operations     To understand the language and tools of efficently solving linear systems of equations    To understand how to use matrices to store information about and solve linear systems    To understand how echelon forms will give a form for equivalent systems of equations that will allow us to characterize the types of solutions to the system     Our first discussion of linear algebra will cover the ideas of efficiently solving a system of linear equations and matrix operations.  A system of linear equations in variables can be written: The term is the coefficient of the -th variable (denoted ) in the -th equation. In these notes, we will only consider real values for the coefficients of our linear systems, i.e. . A solution is a choice of variable values that satisfies all equations in the system. A solution is not a particular variable value but must include a choice for all variables in the system. The solution set for a system of equations is the set of all possible solutions. We will have many ways to describe solutions to a system this semester but they all specify the values of , , ..., and , typically as an ordered -tuple ( , , …, ).   Is a solution to the following system?    The previous problem shows how easy it is to check if a set of variable values is a solution. However, finding a solution or the set of all solutions is harder but very important to many problems. Generally speaking, the process of finding the solution set for a system of equations is to trade the system of equations you have for an equivalent system (a system with the same solution set).    For each pair of equations given, state whether is equivalent to .   and  and  and   Hopefully it will be easier to explicitly write the solution set of the new equivalent system.    An elementary operation on a system of equations is an operation of the form:  multiplying an equation by a non-zero scalar  switching two equations  adding a multiple of one equation to another equation        For this question, we will consider the following system of linear equations:    Multiply the second equation in our system by negative three and state the new system of equations.  Write a few sentences about why the new system of equations given in the previous part is equivalent to the original system.   Write out the equation obtained by multiplying the second equation in the original system by a non-zero scalar (which we will call ) and adding to the first equation.  Replace the second equation in the original system with your answer to the previous part, which we will call System 2. Prove that System 2 is equivalent to the original system. In other words, you need to show that is a solution of the equations :  if and only if  is a solution to System 2.     Solve the following systems just using elementary operations. Remember to show your work.             A system of equations is consistent if there exists at least one solution to the system. In other words, a consistent system of equations has a nonempty solution set. A system that is not consistent is said to be inconsistent .  In , note that you didn't change anything but the coefficients in the system of equations as you traded one system for another. Some of the coefficients probably became zero, but you didn't really eliminate any variables or consider a totally different problem. We will use matrices to efficiently store, and manipulate the coefficients in a system of linear equations, since they are all that matter for now. Matrices will have many uses in this and other courses, and we will use capital letters like and to denote matrices. Matrices will be rectangular arrays with the same number of entries in each row and the same number of entries in each column. The size of a matrix is given (in order) as the number of rows by the number of columns, so a by matrix has rows and columns.  In order to specify what entry we are referring to in a matrix, we need an ordered pair of indices telling us the number of the row and number of the column to look in respectively. For instance, if , then the entry of is in the third row and 2nd column. You could also write this as . The -th row of a matrix will be denoted and the -th column will be denoted .  In order to distinguish vectors (as being more than just by matrices), we will use the arrow notation and lower case symbols like and to denote vectors. Unless otherwise stated, we will use column vectors. For instance, if , then the second component of is the scalar . The size of a vector in is the number of components the vector has. In later work, we will deal with a much more general notion of vectors that will not have components like vectors in .  The coefficient matrix of a linear system of equations in variables is a by matrix whose entry is the coefficient of the -th variable, , in the -th equation of the system. The augmented matrix of a linear system of equations in variables is a by matrix whose first columns are the coefficient matrix of the system and the last column is the constant terms from the right side of each equation.  The system has a coefficient matrix and an augmented matrix of   For some properties of the system of equations, we need only look at the coefficient matrix but others will need the augmented matrix. It is important to know the difference and be able to state which corresponding matrix you are using in your work.    For each system given, write the coefficent matrix.                        For each system given, write the corresponding augmented matrix.                       The elementary operations on equations outlined above will correspond to elementary row operations on matrices as well. Specifically, an elementary row operation on a matrix is an operation of the form:  multiplying a row by a non-zero scalar  switching two rows  adding a multiple of one row to another row      Using the matrix given below, perform each of the following row operations:                 We now have operations to trade our system of equations for an equivalent system, but we have not stated a way to make sure that the solution set will be easy to explicitly state from our new equivalent system. The following matrix forms will be useful for determining solution sets and various other properties of the corresponding system of equations.    A rectangular matrix is in row echelon form if it has the following three properties:  All nonzero rows are above any rows of all zeros.  Each leading entry (being the first non-zero entry) of a row is in a column to the right of the leading entry of the row above it.  All entries in a column below a leading entry are zeros.    If a matrix in row echelon form satisfies the following additional properties, then we say the matrix is in reduced row echelon form :  The leading entry in each nonzero row is 1.  Each leading 1 is the only nonzero entry in its column.      The leading entry in a nonzero row of the row echelon form is called a pivot . The column in which a pivot occurs is called a pivot column and the corresponding variable is a basic variable or pivot variable . A variable corresponding to a column in which the coefficient matrix does not have a pivot are called free variables . While the echelon form is needed to find where pivots will occur, we will sometimes refer to pivot positions of a matrix even when the matrix is not in echelon form.    For each of the following matrices, determine if the matrix is in row echelon form, reduced row echelon form, or neither. If the matrix is in row echelon or reduced row echelon form, treat the matrix like an augmented matrix and describe each variable as either a free variable or a pivot variable.                       The reduced row echelon form of a rectangular matrix is unique.    It is important to note that the row echelon form of a matrix is not unique.    Give an example of a matrix that has the following properties. If such a matrix cannot exist, explain why.    satisfies the first two properties of row echelon form but does not satisfy the third.   satisfies the first and third properties of row echelon form but does not satisfy the second.   satisfies the second and third properties of row echelon form but does not satisfy the first.   satisfies the three properties of row echelon form but does not satisfy the first property of reduced row echelon form.   satisfies the properties of row echelon form and the first property of reduced row echelon form but does not satisfy the second property of reduced row echelon form.    In this example, we will list out ALL of the possible row echelon forms of a two by two matrix. We will use the symbols for a non-zero entry and for an entry that can be any real number. We will also use and for entries that must be and . You should think carefully to see if there are any possibilities missing here.  In this example, we will list out ALL of the possible reduced row echelon forms of a two by two matrix. We will use the symbols for a non-zero entry and for an entry that can be any real number. We will also use and for entries that must be and . You should think carefully to see if there are any possibilities missing here.     List out all possible row echelon forms of 3 by 4 matrices using the symbols for a pivot, for a non-pivot entry (possibly ), and (when an entry must be ). For each of these, list out which variables are pivot variables and which are free variables.   There are 15 possible.     List out all possible reduced row echelon forms of 3 by 4 matrices using the symbols for a pivot, for a non-pivot entry (possibly ), and (when an entry must be ). What value must the entries be? For each of these, list out which variables are pivot variables and which are free variables.      Solve each of the following systems by converting to an augmented matrix and using elementary row operations to reduce the augmented matrix to reduced row echelon form. With each reduced row echelon form, put a box around all pivot entries. Use the system of equations corresponding to the reduced row echelon form to write out the solution set for each system.                     Once you have the augmented matrix for a system of linear equations in reduced row-echelon form, how do you use it to determine the solution set for the system? Write a step-by-step procedure that is general enough to be used on any system of linear equations. Be aware of any implicit assumptions you're making (and try to avoid them).    Two of the most important questions we will consider this semester are:  Is the system consistent?  If a solution exists, is the solution unique?      Look back at your results so far and try to figure out what properties of the system (or corresponding matrices) will help us answer question 1 and which properties of the system will help us answer question 2. Write a conjecture about each question.     "
},
{
  "id": "solving_linear_systems-2-2",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-2",
  "type": "Objectives",
  "number": "1.2.1",
  "title": "",
  "body": "   To understand the language and tools of efficently solving linear systems of equations    To understand how to use matrices to store information about and solve linear systems    To understand how echelon forms will give a form for equivalent systems of equations that will allow us to characterize the types of solutions to the system    "
},
{
  "id": "solving_linear_systems-2-4",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient solution solution set "
},
{
  "id": "solving_linear_systems-2-5",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-5",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": " Is a solution to the following system?   "
},
{
  "id": "solving_linear_systems-2-6",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent "
},
{
  "id": "solving_linear_systems-2-7",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-7",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "  For each pair of equations given, state whether is equivalent to .   and  and  and  "
},
{
  "id": "solving_linear_systems-2-9",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-9",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  An elementary operation on a system of equations is an operation of the form:  multiplying an equation by a non-zero scalar  switching two equations  adding a multiple of one equation to another equation     "
},
{
  "id": "solving_linear_systems-2-10",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-10",
  "type": "Activity",
  "number": "1.2.3",
  "title": "",
  "body": "  For this question, we will consider the following system of linear equations:    Multiply the second equation in our system by negative three and state the new system of equations.  Write a few sentences about why the new system of equations given in the previous part is equivalent to the original system.   Write out the equation obtained by multiplying the second equation in the original system by a non-zero scalar (which we will call ) and adding to the first equation.  Replace the second equation in the original system with your answer to the previous part, which we will call System 2. Prove that System 2 is equivalent to the original system. In other words, you need to show that is a solution of the equations :  if and only if  is a solution to System 2.  "
},
{
  "id": "ex_solve_sys_prac",
  "level": "2",
  "url": "solving_linear_systems.html#ex_solve_sys_prac",
  "type": "Activity",
  "number": "1.2.4",
  "title": "",
  "body": "  Solve the following systems just using elementary operations. Remember to show your work.            "
},
{
  "id": "solving_linear_systems-2-12",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent inconsistent "
},
{
  "id": "solving_linear_systems-2-14",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "entry -th row -th column "
},
{
  "id": "solving_linear_systems-2-15",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vectors component "
},
{
  "id": "solving_linear_systems-2-16",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix augmented matrix "
},
{
  "id": "question-coefmatrix",
  "level": "2",
  "url": "solving_linear_systems.html#question-coefmatrix",
  "type": "Question",
  "number": "1.2.2",
  "title": "",
  "body": "  For each system given, write the coefficent matrix.                     "
},
{
  "id": "question-augmatrix",
  "level": "2",
  "url": "solving_linear_systems.html#question-augmatrix",
  "type": "Question",
  "number": "1.2.3",
  "title": "",
  "body": "  For each system given, write the corresponding augmented matrix.                     "
},
{
  "id": "solving_linear_systems-2-21",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operation "
},
{
  "id": "solving_linear_systems-2-22",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-22",
  "type": "Question",
  "number": "1.2.4",
  "title": "",
  "body": "  Using the matrix given below, perform each of the following row operations:                "
},
{
  "id": "solving_linear_systems-2-24",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-24",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "  A rectangular matrix is in row echelon form if it has the following three properties:  All nonzero rows are above any rows of all zeros.  Each leading entry (being the first non-zero entry) of a row is in a column to the right of the leading entry of the row above it.  All entries in a column below a leading entry are zeros.    If a matrix in row echelon form satisfies the following additional properties, then we say the matrix is in reduced row echelon form :  The leading entry in each nonzero row is 1.  Each leading 1 is the only nonzero entry in its column.     "
},
{
  "id": "solving_linear_systems-2-25",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot pivot column basic variable pivot variable free variables "
},
{
  "id": "solving_linear_systems-2-26",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-26",
  "type": "Question",
  "number": "1.2.6",
  "title": "",
  "body": "  For each of the following matrices, determine if the matrix is in row echelon form, reduced row echelon form, or neither. If the matrix is in row echelon or reduced row echelon form, treat the matrix like an augmented matrix and describe each variable as either a free variable or a pivot variable.                    "
},
{
  "id": "solving_linear_systems-2-27",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-27",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "",
  "body": "  The reduced row echelon form of a rectangular matrix is unique.   "
},
{
  "id": "solving_linear_systems-2-29",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-29",
  "type": "Activity",
  "number": "1.2.5",
  "title": "",
  "body": "  Give an example of a matrix that has the following properties. If such a matrix cannot exist, explain why.    satisfies the first two properties of row echelon form but does not satisfy the third.   satisfies the first and third properties of row echelon form but does not satisfy the second.   satisfies the second and third properties of row echelon form but does not satisfy the first.   satisfies the three properties of row echelon form but does not satisfy the first property of reduced row echelon form.   satisfies the properties of row echelon form and the first property of reduced row echelon form but does not satisfy the second property of reduced row echelon form.  "
},
{
  "id": "solving_linear_systems-2-30",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-30",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": " In this example, we will list out ALL of the possible row echelon forms of a two by two matrix. We will use the symbols for a non-zero entry and for an entry that can be any real number. We will also use and for entries that must be and . You should think carefully to see if there are any possibilities missing here.  In this example, we will list out ALL of the possible reduced row echelon forms of a two by two matrix. We will use the symbols for a non-zero entry and for an entry that can be any real number. We will also use and for entries that must be and . You should think carefully to see if there are any possibilities missing here.  "
},
{
  "id": "ex_3x4_REF",
  "level": "2",
  "url": "solving_linear_systems.html#ex_3x4_REF",
  "type": "Activity",
  "number": "1.2.6",
  "title": "",
  "body": "  List out all possible row echelon forms of 3 by 4 matrices using the symbols for a pivot, for a non-pivot entry (possibly ), and (when an entry must be ). For each of these, list out which variables are pivot variables and which are free variables.   There are 15 possible.  "
},
{
  "id": "ex_3x4_RREF",
  "level": "2",
  "url": "solving_linear_systems.html#ex_3x4_RREF",
  "type": "Activity",
  "number": "1.2.7",
  "title": "",
  "body": "  List out all possible reduced row echelon forms of 3 by 4 matrices using the symbols for a pivot, for a non-pivot entry (possibly ), and (when an entry must be ). What value must the entries be? For each of these, list out which variables are pivot variables and which are free variables.   "
},
{
  "id": "ex_five_systems",
  "level": "2",
  "url": "solving_linear_systems.html#ex_five_systems",
  "type": "Activity",
  "number": "1.2.8",
  "title": "",
  "body": "  Solve each of the following systems by converting to an augmented matrix and using elementary row operations to reduce the augmented matrix to reduced row echelon form. With each reduced row echelon form, put a box around all pivot entries. Use the system of equations corresponding to the reduced row echelon form to write out the solution set for each system.                  "
},
{
  "id": "solving_linear_systems-2-34",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-34",
  "type": "Investigation",
  "number": "1.2.9",
  "title": "",
  "body": "  Once you have the augmented matrix for a system of linear equations in reduced row-echelon form, how do you use it to determine the solution set for the system? Write a step-by-step procedure that is general enough to be used on any system of linear equations. Be aware of any implicit assumptions you're making (and try to avoid them).   "
},
{
  "id": "solving_linear_systems-2-36",
  "level": "2",
  "url": "solving_linear_systems.html#solving_linear_systems-2-36",
  "type": "Investigation",
  "number": "1.2.10",
  "title": "",
  "body": "  Look back at your results so far and try to figure out what properties of the system (or corresponding matrices) will help us answer question 1 and which properties of the system will help us answer question 2. Write a conjecture about each question.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
