var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
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
  "id": "activity-1",
  "level": "2",
  "url": "intro_activity.html#activity-1",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": " Solve:    Draw a graph of the solution set of the equation: .   If a solution has , what is or viceversa?   Draw a graph of the solution set of the equation: .  Graph the solution sets from the two previous steps together. How does your answer to part compare to your graph?  Solve:   Solve:   Wait, what just happened? Explain the results of the previous two parts. What do the graphs of the corresponding solution sets look like in relation to the graphs of the equations?  What are the possible intersections of two lines? Clearly state your conjecture which adresses ALL possibilities.  "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "intro_activity.html#activity-2",
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
  "id": "objectives-1",
  "level": "2",
  "url": "solving_linear_systems.html#objectives-1",
  "type": "Objectives",
  "number": "1.2.1",
  "title": "",
  "body": "   To understand the language and tools of efficently solving linear systems of equations    To understand how to use matrices to store information about and solve linear systems    To understand how echelon forms will give a form for equivalent systems of equations that will allow us to characterize the types of solutions to the system    "
},
{
  "id": "p-20",
  "level": "2",
  "url": "solving_linear_systems.html#p-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient solution solution set "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "solving_linear_systems.html#activity-3",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": " Is a solution to the following system?   "
},
{
  "id": "p-22",
  "level": "2",
  "url": "solving_linear_systems.html#p-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent "
},
{
  "id": "activity-4",
  "level": "2",
  "url": "solving_linear_systems.html#activity-4",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "  For each pair of equations given, state whether is equivalent to .   and  and  and  "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "solving_linear_systems.html#definition-1",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  An elementary operation on a system of equations is an operation of the form:  multiplying an equation by a non-zero scalar  switching two equations  adding a multiple of one equation to another equation     "
},
{
  "id": "activity-5",
  "level": "2",
  "url": "solving_linear_systems.html#activity-5",
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
  "id": "p-38",
  "level": "2",
  "url": "solving_linear_systems.html#p-38",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent inconsistent "
},
{
  "id": "p-40",
  "level": "2",
  "url": "solving_linear_systems.html#p-40",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "entry -th row -th column "
},
{
  "id": "p-41",
  "level": "2",
  "url": "solving_linear_systems.html#p-41",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vectors component "
},
{
  "id": "p-42",
  "level": "2",
  "url": "solving_linear_systems.html#p-42",
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
  "id": "p-59",
  "level": "2",
  "url": "solving_linear_systems.html#p-59",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operation "
},
{
  "id": "question-3",
  "level": "2",
  "url": "solving_linear_systems.html#question-3",
  "type": "Question",
  "number": "1.2.4",
  "title": "",
  "body": "  Using the matrix given below, perform each of the following row operations:                "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "solving_linear_systems.html#definition-2",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "  A rectangular matrix is in row echelon form if it has the following three properties:  All nonzero rows are above any rows of all zeros.  Each leading entry (being the first non-zero entry) of a row is in a column to the right of the leading entry of the row above it.  All entries in a column below a leading entry are zeros.    If a matrix in row echelon form satisfies the following additional properties, then we say the matrix is in reduced row echelon form :  The leading entry in each nonzero row is 1.  Each leading 1 is the only nonzero entry in its column.     "
},
{
  "id": "p-65",
  "level": "2",
  "url": "solving_linear_systems.html#p-65",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot pivot column basic variable pivot variable free variables "
},
{
  "id": "question-4",
  "level": "2",
  "url": "solving_linear_systems.html#question-4",
  "type": "Question",
  "number": "1.2.6",
  "title": "",
  "body": "  For each of the following matrices, determine if the matrix is in row echelon form, reduced row echelon form, or neither. If the matrix is in row echelon or reduced row echelon form, treat the matrix like an augmented matrix and describe each variable as either a free variable or a pivot variable.                    "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "solving_linear_systems.html#theorem-1",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "",
  "body": "  The reduced row echelon form of a rectangular matrix is unique.   "
},
{
  "id": "activity-7",
  "level": "2",
  "url": "solving_linear_systems.html#activity-7",
  "type": "Activity",
  "number": "1.2.5",
  "title": "",
  "body": "  Give an example of a matrix that has the following properties. If such a matrix cannot exist, explain why.    satisfies the first two properties of row echelon form but does not satisfy the third.   satisfies the first and third properties of row echelon form but does not satisfy the second.   satisfies the second and third properties of row echelon form but does not satisfy the first.   satisfies the three properties of row echelon form but does not satisfy the first property of reduced row echelon form.   satisfies the properties of row echelon form and the first property of reduced row echelon form but does not satisfy the second property of reduced row echelon form.  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "solving_linear_systems.html#example-1",
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
  "id": "investigation-1",
  "level": "2",
  "url": "solving_linear_systems.html#investigation-1",
  "type": "Investigation",
  "number": "1.2.9",
  "title": "",
  "body": "  Once you have the augmented matrix for a system of linear equations in reduced row-echelon form, how do you use it to determine the solution set for the system? Write a step-by-step procedure that is general enough to be used on any system of linear equations. Be aware of any implicit assumptions you're making (and try to avoid them).   "
},
{
  "id": "investigation-2",
  "level": "2",
  "url": "solving_linear_systems.html#investigation-2",
  "type": "Investigation",
  "number": "1.2.10",
  "title": "",
  "body": "  Look back at your results so far and try to figure out what properties of the system (or corresponding matrices) will help us answer question 1 and which properties of the system will help us answer question 2. Write a conjecture about each question.   "
},
{
  "id": "Conunique",
  "level": "1",
  "url": "Conunique.html",
  "type": "Section",
  "number": "1.3",
  "title": "Consistency and Uniqueness Theorems",
  "body": " Consistency and Uniqueness Theorems     To understand when a system of equations will be consistent in terms of the number of pivot variables    To understand when a system of equations will have a unique solution in terms of the number of pivot variables    To understand how to use the reduced row echelon form of the augmented matrix for a linear system to easily write out the solution set      In class, we came up with statements of the following two theorems:   Consistency Theorem   A system of equations is consistent if and only if the row echelon form of its augmented matrix has no pivot entries in the rightmost column. Equivalently, a system of equations is inconsistent if and only if the row echelon form of its augmented matrix has a pivot entry in the rightmost column.     Uniqueness Theorem   A system of equations with variables has a unique solution if and only if its augmented matrix has pivot entries and no pivot entry in the rightmost column.      Writing Solution Sets    For the matrix below, verify that the matrix is in rref (reduced row echelon form) and treat the matrix as an augmented matrix for a system of linear equations. Write out the corresponding system of equations. Use this system of equations to write each variable in terms of just free variables and constants.      Under what conditions would your process for the previous activity not work? In other words, when would it not be possible to write each variable in terms of just free variables and constants.     Determining Consistency\/Uniqueness of Solutions    Give an example matrix that fits each of the following conditions:  A 3 by 4 augmented matrix corresponding to a linear system with a unique solution  A 3 by 4 augmented matrix corresponding to a consistent linear system of equations that does NOT have a unique solution  A 3 by 4 augmented matrix corresponding to an inconsistent system of linear equations        Using the statement of the and , treat each of your answers to as an augmented matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.        Using the statement of the and , treat each of your answers to as a coefficient matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.      You will probably need to restate the theorems or think about how coefficient matrices are different to augmented matrices!     "
},
{
  "id": "objectives-2",
  "level": "2",
  "url": "Conunique.html#objectives-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "   To understand when a system of equations will be consistent in terms of the number of pivot variables    To understand when a system of equations will have a unique solution in terms of the number of pivot variables    To understand how to use the reduced row echelon form of the augmented matrix for a linear system to easily write out the solution set    "
},
{
  "id": "thm_consistency",
  "level": "2",
  "url": "Conunique.html#thm_consistency",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "Consistency Theorem.",
  "body": " Consistency Theorem   A system of equations is consistent if and only if the row echelon form of its augmented matrix has no pivot entries in the rightmost column. Equivalently, a system of equations is inconsistent if and only if the row echelon form of its augmented matrix has a pivot entry in the rightmost column.   "
},
{
  "id": "thm_uniqueness",
  "level": "2",
  "url": "Conunique.html#thm_uniqueness",
  "type": "Theorem",
  "number": "1.3.2",
  "title": "Uniqueness Theorem.",
  "body": " Uniqueness Theorem   A system of equations with variables has a unique solution if and only if its augmented matrix has pivot entries and no pivot entry in the rightmost column.   "
},
{
  "id": "writefreevar",
  "level": "2",
  "url": "Conunique.html#writefreevar",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": "  For the matrix below, verify that the matrix is in rref (reduced row echelon form) and treat the matrix as an augmented matrix for a system of linear equations. Write out the corresponding system of equations. Use this system of equations to write each variable in terms of just free variables and constants.    "
},
{
  "id": "question-5",
  "level": "2",
  "url": "Conunique.html#question-5",
  "type": "Question",
  "number": "1.3.3",
  "title": "",
  "body": " Under what conditions would your process for the previous activity not work? In other words, when would it not be possible to write each variable in terms of just free variables and constants.  "
},
{
  "id": "activity-12",
  "level": "2",
  "url": "Conunique.html#activity-12",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "  Give an example matrix that fits each of the following conditions:  A 3 by 4 augmented matrix corresponding to a linear system with a unique solution  A 3 by 4 augmented matrix corresponding to a consistent linear system of equations that does NOT have a unique solution  A 3 by 4 augmented matrix corresponding to an inconsistent system of linear equations     "
},
{
  "id": "activity-13",
  "level": "2",
  "url": "Conunique.html#activity-13",
  "type": "Activity",
  "number": "1.3.3",
  "title": "",
  "body": "  Using the statement of the and , treat each of your answers to as an augmented matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.     "
},
{
  "id": "activity-14",
  "level": "2",
  "url": "Conunique.html#activity-14",
  "type": "Activity",
  "number": "1.3.4",
  "title": "",
  "body": "  Using the statement of the and , treat each of your answers to as a coefficient matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.      You will probably need to restate the theorems or think about how coefficient matrices are different to augmented matrices!   "
},
{
  "id": "Geo_App",
  "level": "1",
  "url": "Geo_App.html",
  "type": "Section",
  "number": "1.4",
  "title": "Geometric Interpretations and Applications",
  "body": " Geometric Interpretations and Applications   In this section we will look at some examples of geometric interpretation of solutions to a system of linear equations, then we will look at a few examples of common application problems related to our study of linear systems.    Geometric Interpretation of a Solution Set  Recall from earlier, that the solution set of a linear equation in two variables was a line in (the plane) and that the solution set of a system of two equations in two variables was possibly a point, a line, or empty. Similarly, the solution set for a linear equation in three variables will be a plane in 3-space ( ).     List out all the possible ways two planes can intersect in a three dimensional space.  List out all the possible ways three planes can intersect in a three dimensional space.  List out all the possible ways four planes can intersect in a three dimensional space.  List out all the possible ways five planes can intersect in a three dimensional space.     We don't usually draw what a solution set of a linear equation in four variables looks like because drawing in four dimensions is difficult. The graph is a single linear equation in four variables would be called a hyperplane in -space. Although we don't draw hyperplanes in -space, the intersections of hyperplanes will work very similarly to the pictures we can draw in 3-space (also known as ).  We can use the open source computer algebra system SageMath to plot things, and we can even do it right here in the course notes. Click the button to plot a plane below.   Plotting the equations, , , and in red, yellow, and green respectively gives:    Does your answer to make sense with this plot? Explain.     For each of the systems in , use SageMath to draw a plot of each of the equations in the system and write a sentence for each system about why the plot and your answer to make sense.    You can edit the code block above and click the button again, and it will update the graph.    If you remember parametric equations of lines and planes in space from multivariable calculus, then we will return to those ideas soon    Applications and Linear Algebra  Many network or physical problems are diagramed by a figure that displays how different parts are connected and how much of something can flow between different nodes. A particularly common diagram is that of electric circuits. We will look at a couple of laws now that help us set up a system of equations for common circuit types.  An electrical network is a specialized network where we specify the locations of resistors, batteries, devices powered by sources, and others.The goal is often to determine the current through various locations of the network. In balancing a network we use two specific laws: Current and Voltage .  Current Law: sum of the currents flowing into any node is equal to the sum of the currents flowing out of that node. This is often called the conservation of flow.  Voltage Law: The sum of the voltage drops around any circuit is equal to the total voltage around the the circuit, most likely provided by batteries or other power source.    The above laws are attributed to Gustav Kirchhoff and are called Kirchhoff's Laws . We should also mention Ohm's Law, which describes the force, in volts, associated with the current (amps) passing through a resistor (ohms). Namely,    Consider the electrical network shown here   An electrical circuit  We can set up the equations for the three currents using our voltage and current law in conjunction with Ohm's Law. This yields   The first equation is using our conservation of flow. The second equation is using Ohm's law with our voltage law around the circuit CABC. The third equation is similar, but around the circuit DABD.  The rref of the corresponding augmented matrix is Thus we have a unique solution of .     For this activity, we will be considering the following circuit   An electrical circuit     Write out the current equations for each of the four junctions  Write out the voltage drop equations for three of the basic circuits.  Use Python to input the corresponding augmented matrix and solve the system based on the rref. Explain the meaning of your solution.   Another common application of linear systems is balancing a physical system according to conservation of some property. For instance, in chemical reactions, the number of different atoms of an element does not change, rather the way they are arranged in molecules is what changes. Thus the number of each kind of molecule must be the same on the right and left side of a reation equation.   Let's look at the simple chemical equation for creating water from hydrogen and oxygen. We want to know how many molecules of each type are needed to go into the reaction and how many will come out. Note that the coefficents in this setting must be positive integers since we cannot have a fraction of a molecule.  If we consider the number of hydrogen atoms in the reaction, we get If we consider the number of oxygen atoms in the reaction, we get Thus we get the following system which has augmented form which can be reduced to   Notice that there is NOT a unique solution to system of equations, but rather we can have solutions of the form Therefore, the smallest integer solution is when , which gives the following chemical reaction      Consider the chemical reaction    Write out equations for nitrogen, hydrogen, and oxygen atoms  Input the corresponding augmented matrix into Python and use the rref to write out the solution set  Write out the simplest form of the chemical reaction equation.     Find the coefficents for quadratic polynomial of the form that goes through the points (-1,3), (2,2), and (3,5).     "
},
{
  "id": "activity-15",
  "level": "2",
  "url": "Geo_App.html#activity-15",
  "type": "Activity",
  "number": "1.4.1",
  "title": "",
  "body": "   List out all the possible ways two planes can intersect in a three dimensional space.  List out all the possible ways three planes can intersect in a three dimensional space.  List out all the possible ways four planes can intersect in a three dimensional space.  List out all the possible ways five planes can intersect in a three dimensional space.    "
},
{
  "id": "investigation-3",
  "level": "2",
  "url": "Geo_App.html#investigation-3",
  "type": "Investigation",
  "number": "1.4.2",
  "title": "",
  "body": " Does your answer to make sense with this plot? Explain.  "
},
{
  "id": "question-6",
  "level": "2",
  "url": "Geo_App.html#question-6",
  "type": "Question",
  "number": "1.4.1",
  "title": "",
  "body": "  For each of the systems in , use SageMath to draw a plot of each of the equations in the system and write a sentence for each system about why the plot and your answer to make sense.    You can edit the code block above and click the button again, and it will update the graph.   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "Geo_App.html#example-2",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": " Consider the electrical network shown here   An electrical circuit  We can set up the equations for the three currents using our voltage and current law in conjunction with Ohm's Law. This yields   The first equation is using our conservation of flow. The second equation is using Ohm's law with our voltage law around the circuit CABC. The third equation is similar, but around the circuit DABD.  The rref of the corresponding augmented matrix is Thus we have a unique solution of .  "
},
{
  "id": "activity-16",
  "level": "2",
  "url": "Geo_App.html#activity-16",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "  For this activity, we will be considering the following circuit   An electrical circuit     Write out the current equations for each of the four junctions  Write out the voltage drop equations for three of the basic circuits.  Use Python to input the corresponding augmented matrix and solve the system based on the rref. Explain the meaning of your solution.  "
},
{
  "id": "example-3",
  "level": "2",
  "url": "Geo_App.html#example-3",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": " Let's look at the simple chemical equation for creating water from hydrogen and oxygen. We want to know how many molecules of each type are needed to go into the reaction and how many will come out. Note that the coefficents in this setting must be positive integers since we cannot have a fraction of a molecule.  If we consider the number of hydrogen atoms in the reaction, we get If we consider the number of oxygen atoms in the reaction, we get Thus we get the following system which has augmented form which can be reduced to   Notice that there is NOT a unique solution to system of equations, but rather we can have solutions of the form Therefore, the smallest integer solution is when , which gives the following chemical reaction   "
},
{
  "id": "activity-17",
  "level": "2",
  "url": "Geo_App.html#activity-17",
  "type": "Activity",
  "number": "1.4.4",
  "title": "",
  "body": "  Consider the chemical reaction    Write out equations for nitrogen, hydrogen, and oxygen atoms  Input the corresponding augmented matrix into Python and use the rref to write out the solution set  Write out the simplest form of the chemical reaction equation.  "
},
{
  "id": "activity-18",
  "level": "2",
  "url": "Geo_App.html#activity-18",
  "type": "Activity",
  "number": "1.4.5",
  "title": "",
  "body": "  Find the coefficents for quadratic polynomial of the form that goes through the points (-1,3), (2,2), and (3,5).   "
},
{
  "id": "sec_vector_calc",
  "level": "1",
  "url": "sec_vector_calc.html",
  "type": "Section",
  "number": "1.5",
  "title": "Vectors and Vector Calculations",
  "body": " Vectors and Vector Calculations   In order to distinguish vectors (as being more than just by matrices), we will use the arrow notation and lower case symbols like and to denote vectors. Unless otherwise stated, we will use column vectors. For instance, if , then the second component of is the scalar . The size of a vector in is the number of components the vector has. In later work, we will deal with a much more general notion of vectors that will not have components like vectors in . Recall that two vectors in are equal if and only if all of their components are equal.  Geometrically, we will view vectors in as an arrow which change in the -th coordinate being given by the -th component of the vector. For instance, the vector will have a plot in 3-dimensions that looks like    Vectors do not have a particular beginning or ending point so all of the blue vectors in the following plot are representations of .   Vectors can be added together to measure the net change (done by completing one vector, then the other). Algebraically, vector addition is done componentwise. If and , then .   Many other vector operations can be done componentwise, such as scalar multiplication and subtraction. If and , then . If , then . Geometrically, scalar multiplication will stretch (and flip if ) the arrow for a vector.    The Dot Product    Let , then the dot product of with is the scalar value given by     Sometimes we are interested in the total amount of change and not what direction a vector is in. The magnitude (or length) of a vector is given by the following A unit vector is a vector of length 1.    Let , then the vectors and are orthogonal if .      Use the Desmos interact embeded below to change the end points of our two vectors. Based on what you see about the value of the dot product for different configurations of vectors, answer the questions below    How does changing the length of the vectors change the value of the dot product?  How does changing the angle of the vectors change the value of the dot product?     The projection of a vector  onto a vector gives the vector part of that is parallel to and is computed as This is sometimes called the vector projection. The right most part of the definition of the projection vector shows that the projection of onto will be a scalar ( )times the unit vector in the direction of . The scalar is referred to as the scalar projection of onto .  The vector projection of onto measures the vector part of that is parallel to , where as the scalar projection of onto measures the length of that is parallel to . If you subtract the projection of onto from ( ), the result will the part of that is orthogonal to because has subtracted out ALL of that is parallel to .     If is the angle between two vectors and , then     Let , , and .   Find a unit vector that is in the opposite direction of   Can you choose and such that ?  Does make sense? Why or why not?  What angle does make with ?  What angle does make with the -axis?  How much of is parallel to ?  How much of is parallel to ?  How much of is parallel to ?  How much of is orthogonal to ?  Find a unit vector that is orthogonal to . How many such vectors are there?      "
},
{
  "id": "p-130",
  "level": "2",
  "url": "sec_vector_calc.html#p-130",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vectors component "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "sec_vector_calc.html#definition-3",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  Let , then the dot product of with is the scalar value given by    "
},
{
  "id": "p-136",
  "level": "2",
  "url": "sec_vector_calc.html#p-136",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "magnitude unit vector "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "sec_vector_calc.html#definition-4",
  "type": "Definition",
  "number": "1.5.2",
  "title": "",
  "body": "  Let , then the vectors and are orthogonal if .   "
},
{
  "id": "activity-19",
  "level": "2",
  "url": "sec_vector_calc.html#activity-19",
  "type": "Activity",
  "number": "1.5.1",
  "title": "",
  "body": "  Use the Desmos interact embeded below to change the end points of our two vectors. Based on what you see about the value of the dot product for different configurations of vectors, answer the questions below    How does changing the length of the vectors change the value of the dot product?  How does changing the angle of the vectors change the value of the dot product?  "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "sec_vector_calc.html#definition-5",
  "type": "Definition",
  "number": "1.5.3",
  "title": "",
  "body": "  The projection of a vector  onto a vector gives the vector part of that is parallel to and is computed as This is sometimes called the vector projection. The right most part of the definition of the projection vector shows that the projection of onto will be a scalar ( )times the unit vector in the direction of . The scalar is referred to as the scalar projection of onto .  The vector projection of onto measures the vector part of that is parallel to , where as the scalar projection of onto measures the length of that is parallel to . If you subtract the projection of onto from ( ), the result will the part of that is orthogonal to because has subtracted out ALL of that is parallel to .   "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "sec_vector_calc.html#theorem-4",
  "type": "Theorem",
  "number": "1.5.4",
  "title": "",
  "body": " If is the angle between two vectors and , then   "
},
{
  "id": "question-7",
  "level": "2",
  "url": "sec_vector_calc.html#question-7",
  "type": "Question",
  "number": "1.5.5",
  "title": "",
  "body": " Let , , and .   Find a unit vector that is in the opposite direction of   Can you choose and such that ?  Does make sense? Why or why not?  What angle does make with ?  What angle does make with the -axis?  How much of is parallel to ?  How much of is parallel to ?  How much of is parallel to ?  How much of is orthogonal to ?  Find a unit vector that is orthogonal to . How many such vectors are there?    "
},
{
  "id": "sec_vector_eqns",
  "level": "1",
  "url": "sec_vector_eqns.html",
  "type": "Section",
  "number": "1.6",
  "title": "Vector Equations",
  "body": " Vector Equations    A linear combination of a set is a vector of the form where and . Note that will not usually be in even though .     Prove that the system of equations given by has the same set of solutions as the vector equation . In other words, prove that is a solution to the vector equation iff is a solution to the system of linear equations. Make sure you clearly connect the ideas in your proof and do not make an argument that these equations look similar.    Solve the following vector equation:   Give an example of a vector such that the equation has no solution or explain why no such vector exists.  Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.  Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.  Give an example of a vector such that the equation has no solutions or explain why no such vector exists.  Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.    Can you write as a linear combination of and ? Justify your answer.  Can you write as a linear combination of and ? Justify your answer.  Can you write as a linear combination of and ? Justify your answer.  Can you write as a linear combination of and ? Justify your answer.   You can use the idea from to write the solution set as a vector of the variables where each variable is written in terms of the free variables and constants. This vector form in terms of the free variables is called the parametric form of the solution set.   Give the parametric form of the solution set for the system given by the augmented matrix below.     Write each of the locations given by a red dot as a linear combination of and .    Can you write every location in the plane of as a linear combination of and ? Either explain why you can write every point as a linear combination of and or give a point that cannot be written as a linear combination of and .   "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "sec_vector_eqns.html#definition-6",
  "type": "Definition",
  "number": "1.6.1",
  "title": "",
  "body": "  A linear combination of a set is a vector of the form where and . Note that will not usually be in even though .   "
},
{
  "id": "q41",
  "level": "2",
  "url": "sec_vector_eqns.html#q41",
  "type": "Investigation",
  "number": "1.6.1",
  "title": "",
  "body": " Prove that the system of equations given by has the same set of solutions as the vector equation . In other words, prove that is a solution to the vector equation iff is a solution to the system of linear equations. Make sure you clearly connect the ideas in your proof and do not make an argument that these equations look similar.  "
},
{
  "id": "s1act",
  "level": "2",
  "url": "sec_vector_eqns.html#s1act",
  "type": "Activity",
  "number": "1.6.2",
  "title": "",
  "body": " Solve the following vector equation:   Give an example of a vector such that the equation has no solution or explain why no such vector exists.  Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.  Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.  Give an example of a vector such that the equation has no solutions or explain why no such vector exists.  Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.  "
},
{
  "id": "s2act",
  "level": "2",
  "url": "sec_vector_eqns.html#s2act",
  "type": "Activity",
  "number": "1.6.3",
  "title": "",
  "body": " Can you write as a linear combination of and ? Justify your answer.  Can you write as a linear combination of and ? Justify your answer.  Can you write as a linear combination of and ? Justify your answer.  Can you write as a linear combination of and ? Justify your answer.  "
},
{
  "id": "question-8",
  "level": "2",
  "url": "sec_vector_eqns.html#question-8",
  "type": "Question",
  "number": "1.6.2",
  "title": "",
  "body": " Give the parametric form of the solution set for the system given by the augmented matrix below.   "
},
{
  "id": "activity-22",
  "level": "2",
  "url": "sec_vector_eqns.html#activity-22",
  "type": "Activity",
  "number": "1.6.4",
  "title": "",
  "body": " Write each of the locations given by a red dot as a linear combination of and .    Can you write every location in the plane of as a linear combination of and ? Either explain why you can write every point as a linear combination of and or give a point that cannot be written as a linear combination of and .  "
},
{
  "id": "span",
  "level": "1",
  "url": "span.html",
  "type": "Section",
  "number": "1.7",
  "title": "Span (both a noun and a verb)",
  "body": " Span (both a noun and a verb)   Span as a Noun    Let be a set of vectors, . We define the span of , denoted , as the set of all linear combinations of vectors from . That is,      Look back at and and restate each of the questions in terms of span. For instance, part 1 of could be stated as \"Show that is in the span of .\"   Note that the set might not be finite but the number of vectors involved in the summation for a linear combination is finite. Also, remember to treat as a set and not a vector. Remember that the use of span in is a noun.      How many vectors are in ?  Is there any vector in that is not in ?  How many vectors are in ?  Is there any vector in that is not in ?  Try to write out the set of vectors in ? Hint: write the corresponding system of equations, then use the solution set of this system to write out the exact vector form of .  Is there any vector in that is not in ?      The following are equivalent questions:  Is a vector in ?  Does have a solution?  A few other related questions are:  When will there be a solution to ?  When will there be a UNIQUE solution to ?  How can we describe as a collection of vectors?      Span as a Verb    A set of vectors spans a vector space if . In other words, spans a vector space if every vector in can be written as a linear combination from the set .     Does span ?  Does span ?  Does span ?  Does span ?    "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "span.html#definition-7",
  "type": "Definition",
  "number": "1.7.1",
  "title": "",
  "body": "  Let be a set of vectors, . We define the span of , denoted , as the set of all linear combinations of vectors from . That is,    "
},
{
  "id": "activity-23",
  "level": "2",
  "url": "span.html#activity-23",
  "type": "Activity",
  "number": "1.7.1",
  "title": "",
  "body": " Look back at and and restate each of the questions in terms of span. For instance, part 1 of could be stated as \"Show that is in the span of .\"  "
},
{
  "id": "activity-24",
  "level": "2",
  "url": "span.html#activity-24",
  "type": "Activity",
  "number": "1.7.2",
  "title": "",
  "body": "    How many vectors are in ?  Is there any vector in that is not in ?  How many vectors are in ?  Is there any vector in that is not in ?  Try to write out the set of vectors in ? Hint: write the corresponding system of equations, then use the solution set of this system to write out the exact vector form of .  Is there any vector in that is not in ?     "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "span.html#definition-8",
  "type": "Definition",
  "number": "1.7.2",
  "title": "",
  "body": "  A set of vectors spans a vector space if . In other words, spans a vector space if every vector in can be written as a linear combination from the set .   "
},
{
  "id": "activity-25",
  "level": "2",
  "url": "span.html#activity-25",
  "type": "Activity",
  "number": "1.7.3",
  "title": "",
  "body": " Does span ?  Does span ?  Does span ?  Does span ?  "
},
{
  "id": "lin_indep",
  "level": "1",
  "url": "lin_indep.html",
  "type": "Section",
  "number": "1.8",
  "title": "Linear Independence",
  "body": " Linear Independence  We have seen how vector equations relate to a system of equations and how to frame different questions in terms of whether it is possible to find a linear combination from a set that equals a target vector. This was the same as asking if our target vector was in the span of . When we looked at vector equations, we also looked at whether there was a unique linear combination or whether there are many ways to write a target vector as a linear combination.  In this section we will introduce the idea of linear independence and how that relates to the uniqueness of these linear combinations. Let's consider the homogeneous vector equation: Notice that this always has a solution. What is it?  Is it possible to have another solution to this equation? Let's generate a couple of examples.   Give a set of two vectors from , and , such that has more than one solution. Justify your answer.  Give a set of two vectors from , and , such that has only one solution. How do you know there is only one solution?     A set of vectors is linearly independent if the only linear combination of elements of that equals the zero vector is the trivial linear combination. In other words, being a linear independent set implies that if where , then all .  A set of vectors is linearly dependent if the set is not linearly independent. More specifically, there exists a solution to where and at least one of the .      Is the set linearly independent?    Is the set linearly independent?    Choose a vector so that the set is linearly independent, where .    Is your choice of in ? Show why or why not.    "
},
{
  "id": "activity-26",
  "level": "2",
  "url": "lin_indep.html#activity-26",
  "type": "Activity",
  "number": "1.8.1",
  "title": "",
  "body": " Give a set of two vectors from , and , such that has more than one solution. Justify your answer.  Give a set of two vectors from , and , such that has only one solution. How do you know there is only one solution?  "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "lin_indep.html#definition-9",
  "type": "Definition",
  "number": "1.8.1",
  "title": "",
  "body": "  A set of vectors is linearly independent if the only linear combination of elements of that equals the zero vector is the trivial linear combination. In other words, being a linear independent set implies that if where , then all .  A set of vectors is linearly dependent if the set is not linearly independent. More specifically, there exists a solution to where and at least one of the .   "
},
{
  "id": "activity-27",
  "level": "2",
  "url": "lin_indep.html#activity-27",
  "type": "Activity",
  "number": "1.8.2",
  "title": "",
  "body": "  Is the set linearly independent?    Is the set linearly independent?    Choose a vector so that the set is linearly independent, where .    Is your choice of in ? Show why or why not.   "
},
{
  "id": "MatrixProdEq",
  "level": "1",
  "url": "MatrixProdEq.html",
  "type": "Section",
  "number": "2.1",
  "title": "Matrix Products and Equations",
  "body": " Matrix Products and Equations     To compute matrix-vector products and understand how this relates to linear combinations    To understand how to convert between systems of linear equations, vector equations, and matrix equations    To understand how the matrix-vector product gives rise to linear transformations      Matrix-Vector Products    We define a matrix-vector product as follows: If is a by matrix, and , then the matrix-vector product is given by  .     If is a by matrix, then for what value of ?   It should not surprise you that you can multiply a scalar multiple of a vector by a matrix by factoring out the scalar. In mathematical notation, . Additionally, you can apply the scalar multiplication to the matrix. In other words, . These kind of manipulations will be discussed more when we work with matrix operations later, but you may find these facts useful in your work right now. You should take time to write out the details of any of these arithmetic ideas that you think would be useful in your work.    Let          Write out the matrix vector product of and as a linear combination of the columns of .    Find     Compute all of the other matrix vector products that will be allowed with the matrices and .    The matrix can be seen from a column vector form as which means that we can think of the product of and as .    Write out the -th component of the resulting vector of the product       How can you express the result of the matrix-vector product in terms of and the rows of ?   The -th component of the matrix-vector product is the dot product of row of with .    How can you express the result of the matrix-vector product in terms of and the columns of ?   One way to view this is as a linear combination of the columns of with the coefficient on the -th column of being .      The Matrix Equation  Based on the above definition of the matrix vector product, if and , then by , has the same solution set as the system     Write each of the following as a matrix equation, a vector equation, and system of equations. You need to write out the exact corresponding vector equation, matrix equation, and system of equations, not some equivalent form.              Rephrase as matrix equations.     Linear Transformations  Our definition of a matrix vector product suggests that the matrix-vector product of a by matrix will transform vectors from to vectors in . In this way, we can define a function as follows.   Let be a by matrix. Then we define , where .   Using what we know of solving linear systems, vector equations, and thier relationship to matrix vector products, we note the following:  If there is no soltuion to the matrix equation , then we say that is NOT in the range of the linear transformation .  If there is always a solution to the matrix equation , then we say that the map completely covers . In other words, the range of is all of .  If whenever a solution exists, the solution is unique, then we say that the map is one-to-one.    Linear Transformations are very important ways to understand how a vector space is changed under the operation given. Linear transformations are important because they preserve linear combinations. In other words,     Let .    The linear transformation takes to for what values of and ?    Compute .    Compute .    Compute .    Compute for any other vectors you might want to and write a few sentences about how vectors are transformed by .      Let .    The linear transformation takes to for what values of and ?    Compute .    Compute .    Compute .    Compute for any other vectors you might want to and write a few sentences about how vectors are transformed by .     "
},
{
  "id": "objectives-3",
  "level": "2",
  "url": "MatrixProdEq.html#objectives-3",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "   To compute matrix-vector products and understand how this relates to linear combinations    To understand how to convert between systems of linear equations, vector equations, and matrix equations    To understand how the matrix-vector product gives rise to linear transformations    "
},
{
  "id": "MVProd",
  "level": "2",
  "url": "MatrixProdEq.html#MVProd",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  We define a matrix-vector product as follows: If is a by matrix, and , then the matrix-vector product is given by  .   "
},
{
  "id": "investigation-5",
  "level": "2",
  "url": "MatrixProdEq.html#investigation-5",
  "type": "Investigation",
  "number": "2.1.1",
  "title": "",
  "body": " If is a by matrix, then for what value of ?  "
},
{
  "id": "activity-28",
  "level": "2",
  "url": "MatrixProdEq.html#activity-28",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  Let          Write out the matrix vector product of and as a linear combination of the columns of .    Find     Compute all of the other matrix vector products that will be allowed with the matrices and .   "
},
{
  "id": "investigation-6",
  "level": "2",
  "url": "MatrixProdEq.html#investigation-6",
  "type": "Investigation",
  "number": "2.1.3",
  "title": "",
  "body": "  Write out the -th component of the resulting vector of the product       How can you express the result of the matrix-vector product in terms of and the rows of ?   The -th component of the matrix-vector product is the dot product of row of with .    How can you express the result of the matrix-vector product in terms of and the columns of ?   One way to view this is as a linear combination of the columns of with the coefficient on the -th column of being .   "
},
{
  "id": "investigation-7",
  "level": "2",
  "url": "MatrixProdEq.html#investigation-7",
  "type": "Investigation",
  "number": "2.1.4",
  "title": "",
  "body": "  Write each of the following as a matrix equation, a vector equation, and system of equations. You need to write out the exact corresponding vector equation, matrix equation, and system of equations, not some equivalent form.            "
},
{
  "id": "investigation-8",
  "level": "2",
  "url": "MatrixProdEq.html#investigation-8",
  "type": "Investigation",
  "number": "2.1.5",
  "title": "",
  "body": " Rephrase as matrix equations.  "
},
{
  "id": "MatrixTransformation",
  "level": "2",
  "url": "MatrixProdEq.html#MatrixTransformation",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": " Let be a by matrix. Then we define , where .  "
},
{
  "id": "activity-29",
  "level": "2",
  "url": "MatrixProdEq.html#activity-29",
  "type": "Activity",
  "number": "2.1.6",
  "title": "",
  "body": "  Let .    The linear transformation takes to for what values of and ?    Compute .    Compute .    Compute .    Compute for any other vectors you might want to and write a few sentences about how vectors are transformed by .   "
},
{
  "id": "activity-30",
  "level": "2",
  "url": "MatrixProdEq.html#activity-30",
  "type": "Activity",
  "number": "2.1.7",
  "title": "",
  "body": "  Let .    The linear transformation takes to for what values of and ?    Compute .    Compute .    Compute .    Compute for any other vectors you might want to and write a few sentences about how vectors are transformed by .   "
},
{
  "id": "sec_matrix_ops",
  "level": "1",
  "url": "sec_matrix_ops.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix Operations",
  "body": " Matrix Operations   Addition and Transposition    Finish the following sentences.    Vectors are equal if…    Matrices are equal if…    A scalar is…    Just as you can add two vectors in componentwise, you can add two matrices entry-wise. For this reason, it only makes sense to add two matrices if they are the same size. You can also define scalar multiplication of a matrix entry-wise.   Let , , and .   Is a scalar multiple of ? Why or why not?              Symbolically, and       Let be a by matrix. The transpose of , denoted , is a by matrix such that .    There are a couple of ways to think about the transpose. First, you can think about flipping the matrix across the main diagonal (the elements of the form ). You can also view the transpose of a matrix as switching the rows and columns (but preserving the order). In other words, the -th row of is the -th column of .    Let and                   Let , , and .            If and are by matrices, then .      What dimensions should have in order to be able to add to ?      For all matrices , .    A matrix is symmetric if .    The sum of two symmetric by matrices is symmetric.      If is a symmetric matrix, then is symmetric.      Matrix Multiplication  Earlier we saw how to multiply a by matrix by a vector from . We will discuss how to define matrix multiplication with multiple interpretations.  Let be an by matrix and let and be vectors from . Earlier we defined what and meant. If we build a by matrix using and as the columns, then we can define , read as times , to be The above definition is just distributing our matrix-vector product across the columns of . In a similar fashion, given any by matrix where is the -th column of , we can define In particular, this means that if makes sense, then we can calculate just the -th column of without calculating all of . Namely, the -th column of is , which is written symbolically as .  Formally, we can define the product of a by matrix with a by matrix to be the by matrix such that   This formula looks difficult, but what it really tells us is that the entry of is really the dot product of the -th row of with the -th column of . Remember the dot product of and is just the sum of the products of the components. Namely, This idea lets us calculate the matrix product one entry at a time. Continuing this idea will lead us to see that the -th row of the product can be calculated as .  Note that in general , even when both products make sense.   What sizes of matrices can you add to a by matrix?  What sizes of matrices can you multiply on the right of a by matrix?  What sizes of matrices can you multiply on the left of a by matrix?     If , when does it make sense to multiply by ?      Let and .   What is the size of ?  Compute just the first column of .  Write the first column of as a linear combination of the columns of A. Be sure to check your work.  Solve the matrix equation .  Compute just the second row of      Let and                      Let and . Compute and .      Let and . Compute and .    You can approach proving the following theorem by showing matrix equality entry-wise or column-wise or row-wise.    For all matrices , , and such that the addition and multiplication of matrices below makes sense, .      Give 2 different examples of 3 by 3 matrices and such that .      Give 2 different examples of 3 by 3 matrices and such that .      For all matrices such that is defined, .      Special Types of Matrices  A square matrix is a matrix that has the same number of rows and columns. A by matrix is said to be upper triangular if whenever . Similarly, a matrix is lower triangular if whenever . We usually consider square matrices when we talk about upper or lower triangular, but it may be helpful to consider non-square cases.    Give an example of a matrix that is upper triangular but is not in echelon form. If one does not exist, explain why.      Give an example of a matrix that is in echelon form but is not upper triangular. If one does not exist, explain why.      Can a matrix be upper and lower triangular? Either give an example or explain why there cannot exist one.     Diagonal matrices are matrices whose only nonzero entries are on the diagonal. Specifically, a matrix is diagonal if whenever .    Give an example of a matrix that is diagonal but not in echelon form.    The by  identity matrix , denoted , is the unique matrix such that for every . In fact the entries of are easily computed in terms of the Dirac delta function. Specifically , where     Write out and use it to prove that for any the product of and will always be .     Superstar Bonus Question   Prove that is the only matrix that has the property from the problem above.     "
},
{
  "id": "investigation-9",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-9",
  "type": "Investigation",
  "number": "2.2.1",
  "title": "",
  "body": "  Finish the following sentences.    Vectors are equal if…    Matrices are equal if…    A scalar is…   "
},
{
  "id": "investigation-10",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-10",
  "type": "Investigation",
  "number": "2.2.2",
  "title": "",
  "body": " Let , , and .   Is a scalar multiple of ? Why or why not?           "
},
{
  "id": "investigation-11",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-11",
  "type": "Investigation",
  "number": "2.2.3",
  "title": "",
  "body": "  Symbolically, and    "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "sec_matrix_ops.html#definition-12",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Let be a by matrix. The transpose of , denoted , is a by matrix such that .   "
},
{
  "id": "investigation-12",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-12",
  "type": "Investigation",
  "number": "2.2.4",
  "title": "",
  "body": "  Let and                "
},
{
  "id": "investigation-13",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-13",
  "type": "Investigation",
  "number": "2.2.5",
  "title": "",
  "body": "  Let , , and .         "
},
{
  "id": "theorem-5",
  "level": "2",
  "url": "sec_matrix_ops.html#theorem-5",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "",
  "body": "  If and are by matrices, then .   "
},
{
  "id": "investigation-14",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-14",
  "type": "Investigation",
  "number": "2.2.6",
  "title": "",
  "body": "  What dimensions should have in order to be able to add to ?   "
},
{
  "id": "theorem-6",
  "level": "2",
  "url": "sec_matrix_ops.html#theorem-6",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "",
  "body": "  For all matrices , .   "
},
{
  "id": "p-245",
  "level": "2",
  "url": "sec_matrix_ops.html#p-245",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "theorem-7",
  "level": "2",
  "url": "sec_matrix_ops.html#theorem-7",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "",
  "body": "  The sum of two symmetric by matrices is symmetric.   "
},
{
  "id": "theorem-8",
  "level": "2",
  "url": "sec_matrix_ops.html#theorem-8",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "",
  "body": "  If is a symmetric matrix, then is symmetric.   "
},
{
  "id": "p-251",
  "level": "2",
  "url": "sec_matrix_ops.html#p-251",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "investigation-15",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-15",
  "type": "Investigation",
  "number": "2.2.7",
  "title": "",
  "body": " What sizes of matrices can you add to a by matrix?  What sizes of matrices can you multiply on the right of a by matrix?  What sizes of matrices can you multiply on the left of a by matrix?  "
},
{
  "id": "investigation-16",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-16",
  "type": "Investigation",
  "number": "2.2.8",
  "title": "",
  "body": "  If , when does it make sense to multiply by ?   "
},
{
  "id": "investigation-17",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-17",
  "type": "Investigation",
  "number": "2.2.9",
  "title": "",
  "body": "  Let and .   What is the size of ?  Compute just the first column of .  Write the first column of as a linear combination of the columns of A. Be sure to check your work.  Solve the matrix equation .  Compute just the second row of   "
},
{
  "id": "investigation-18",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-18",
  "type": "Investigation",
  "number": "2.2.10",
  "title": "",
  "body": "  Let and                   "
},
{
  "id": "investigation-19",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-19",
  "type": "Investigation",
  "number": "2.2.11",
  "title": "",
  "body": "  Let and . Compute and .   "
},
{
  "id": "investigation-20",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-20",
  "type": "Investigation",
  "number": "2.2.12",
  "title": "",
  "body": "  Let and . Compute and .   "
},
{
  "id": "theorem-9",
  "level": "2",
  "url": "sec_matrix_ops.html#theorem-9",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "",
  "body": "  For all matrices , , and such that the addition and multiplication of matrices below makes sense, .   "
},
{
  "id": "investigation-21",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-21",
  "type": "Investigation",
  "number": "2.2.13",
  "title": "",
  "body": "  Give 2 different examples of 3 by 3 matrices and such that .   "
},
{
  "id": "investigation-22",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-22",
  "type": "Investigation",
  "number": "2.2.14",
  "title": "",
  "body": "  Give 2 different examples of 3 by 3 matrices and such that .   "
},
{
  "id": "theorem-10",
  "level": "2",
  "url": "sec_matrix_ops.html#theorem-10",
  "type": "Theorem",
  "number": "2.2.7",
  "title": "",
  "body": "  For all matrices such that is defined, .   "
},
{
  "id": "p-276",
  "level": "2",
  "url": "sec_matrix_ops.html#p-276",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square upper triangular lower triangular "
},
{
  "id": "investigation-23",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-23",
  "type": "Investigation",
  "number": "2.2.15",
  "title": "",
  "body": "  Give an example of a matrix that is upper triangular but is not in echelon form. If one does not exist, explain why.   "
},
{
  "id": "investigation-24",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-24",
  "type": "Investigation",
  "number": "2.2.16",
  "title": "",
  "body": "  Give an example of a matrix that is in echelon form but is not upper triangular. If one does not exist, explain why.   "
},
{
  "id": "investigation-25",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-25",
  "type": "Investigation",
  "number": "2.2.17",
  "title": "",
  "body": "  Can a matrix be upper and lower triangular? Either give an example or explain why there cannot exist one.   "
},
{
  "id": "p-280",
  "level": "2",
  "url": "sec_matrix_ops.html#p-280",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Diagonal "
},
{
  "id": "investigation-26",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-26",
  "type": "Investigation",
  "number": "2.2.18",
  "title": "",
  "body": "  Give an example of a matrix that is diagonal but not in echelon form.   "
},
{
  "id": "p-282",
  "level": "2",
  "url": "sec_matrix_ops.html#p-282",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "investigation-27",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-27",
  "type": "Investigation",
  "number": "2.2.19",
  "title": "",
  "body": "  Write out and use it to prove that for any the product of and will always be .   "
},
{
  "id": "investigation-28",
  "level": "2",
  "url": "sec_matrix_ops.html#investigation-28",
  "type": "Investigation",
  "number": "2.2.20",
  "title": "Superstar Bonus Question.",
  "body": " Superstar Bonus Question   Prove that is the only matrix that has the property from the problem above.   "
},
{
  "id": "InverseMatrices",
  "level": "1",
  "url": "InverseMatrices.html",
  "type": "Section",
  "number": "2.3",
  "title": "Inverse Matrices",
  "body": " Inverse Matrices   In this section, we will only consider square matrices.   A matrix is invertible if there exists a matrix such that and . The inverse matrix of is denoted .   Be careful that you do not use the notation until you have shown that is invertible. By inverse, we mean the multiplicative inverse for a matrix. A matrix that is not invertible is called a singular matrix . A non-singular matrix is an invertible matrix.  In the next couple of sections we will examine the following two questions:  How can you efficently calculate the inverse matrix for a given ?  How can you determine when a matrix is invertible without finding its inverse?      Computing Inverses    We will look at a way to find the inverse matrix of in terms of the matrix-vector product and how that can be used as a representation of matrix multiplication.   We want to find a matrix such that . So let's expand as columns. Using this perspective on the equation , we get How would we find out if there were any solutions to these matrix equations?  How could you find solutions to all of these matrix equations all at once?   In general computing the inverse of a matrix takes more time and operations than solving a system of equations. For this reason, it is generally easier to find and solve a related system of equations problem than to compute the inverse matrix. We will outline a few ways to find inverse matrices and compute a few small examples.    Any sequence of elementary row operations that reduces to also transforms into .    The previous result shows that computing inverses is equivalent to a row reduction problem. In particular, if is invertible, then reducing to reduced row echelon form will produce the matrix .   Use the result of the previous investigation to find the inverse of the matrix . Check your work by computing and for the matrix you think is the inverse of .  Use the result of the previous investigation to find the inverse of the matrix . Check your work by computing and for the matrix you think is the inverse of .  Use the idea above to compute the inverse of . Be sure to note any assumptions you will need to make in order to reduce to .  If , find and check that .    If , find and use your answer to solve if:    Your friend Nick, who thinks he knows everything, claims that because that's how exponents work. Is he right? Justify your answer like you are going to have to convince Nick.   Mulitply Nick's Result on both sides by the matrix and simplify.     Nick makes another concerning statement about how algebra works with matrices. Specifically, he claims that if the product of two matrices is zero, then one of the two matrices must be the zero matrix. He writes or on the board to justify his idea. Is he wrong again or do matrices work like this?   Come up with an example of matrices and that will demonstrate is claim his false.     "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "InverseMatrices.html#definition-13",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": " A matrix is invertible if there exists a matrix such that and . The inverse matrix of is denoted .  "
},
{
  "id": "p-287",
  "level": "2",
  "url": "InverseMatrices.html#p-287",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular matrix non-singular matrix "
},
{
  "id": "investigation-29",
  "level": "2",
  "url": "InverseMatrices.html#investigation-29",
  "type": "Investigation",
  "number": "2.3.1",
  "title": "",
  "body": "  We will look at a way to find the inverse matrix of in terms of the matrix-vector product and how that can be used as a representation of matrix multiplication.   We want to find a matrix such that . So let's expand as columns. Using this perspective on the equation , we get How would we find out if there were any solutions to these matrix equations?  How could you find solutions to all of these matrix equations all at once?  "
},
{
  "id": "q11",
  "level": "2",
  "url": "InverseMatrices.html#q11",
  "type": "Investigation",
  "number": "2.3.2",
  "title": "",
  "body": "  Any sequence of elementary row operations that reduces to also transforms into .   "
},
{
  "id": "activity-31",
  "level": "2",
  "url": "InverseMatrices.html#activity-31",
  "type": "Activity",
  "number": "2.3.3",
  "title": "",
  "body": " Use the result of the previous investigation to find the inverse of the matrix . Check your work by computing and for the matrix you think is the inverse of .  Use the result of the previous investigation to find the inverse of the matrix . Check your work by computing and for the matrix you think is the inverse of .  Use the idea above to compute the inverse of . Be sure to note any assumptions you will need to make in order to reduce to .  If , find and check that .  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "InverseMatrices.html#exercise-1",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "",
  "body": " If , find and use your answer to solve if:  "
},
{
  "id": "investigation-31",
  "level": "2",
  "url": "InverseMatrices.html#investigation-31",
  "type": "Investigation",
  "number": "2.3.4",
  "title": "",
  "body": " Your friend Nick, who thinks he knows everything, claims that because that's how exponents work. Is he right? Justify your answer like you are going to have to convince Nick.   Mulitply Nick's Result on both sides by the matrix and simplify.   "
},
{
  "id": "investigation-32",
  "level": "2",
  "url": "InverseMatrices.html#investigation-32",
  "type": "Investigation",
  "number": "2.3.5",
  "title": "",
  "body": " Nick makes another concerning statement about how algebra works with matrices. Specifically, he claims that if the product of two matrices is zero, then one of the two matrices must be the zero matrix. He writes or on the board to justify his idea. Is he wrong again or do matrices work like this?   Come up with an example of matrices and that will demonstrate is claim his false.   "
},
{
  "id": "IvertibleMatrixThm",
  "level": "1",
  "url": "IvertibleMatrixThm.html",
  "type": "Section",
  "number": "2.4",
  "title": "Invertible Matrix Theorem",
  "body": " Invertible Matrix Theorem    In many texts there is a long list of equivalent conditions for when a square matrix is invertible. Below is a list of some of these conditions that we have talked about or proven. Go back through your notes and questions and cite when we connected two of the ideas in the list. For instance, parts and are linked by     Before stating this major theorem, we should explain what the phrase the following are equivalent (sometimes written TFAE in scratchwork or on the board) means. A theorem of this type is essentially a giant if and only if theorem. Specifically, each statement in the theorem is true or each statement in the theorem is false. It is not possible for some to be true and some to be false. In a theorem with, say, three statements, we often prove that statement 1 implies statement 2, statement 2 implies statement 3, and statement three implies statement 1. Then you can start at any statement and reach any other statement, showing that if one is true, all the others must be true. However, with longer lists, we sometimes have to prove things a bit more piecemeal.  The Invertible Matrix Theorem   Let be a by matrix. The following are equivalent:  is an invertible matrix.  is row equivalent to .  has pivots.  has only the trivial solution.  The linear transformation is one-to-one.  The linear transformation is onto.  has a solution for every .  The columns of form a linearly independent set.  The columns of span .  The rows of form a linearly independent set.  The rows of span .  is invertible.        Two important ideas in this course that have been tied to many different methods or ideas are 1) consistent systems of linear equations and 2) invertible matrices. These two ideas are a bit different though. Give an example of a consistent system of linear equations (in matrix equation form ) where the coefficient matrix is a non-invertible square matrix.    "
},
{
  "id": "investigation-33",
  "level": "2",
  "url": "IvertibleMatrixThm.html#investigation-33",
  "type": "Investigation",
  "number": "2.4.1",
  "title": "",
  "body": "  In many texts there is a long list of equivalent conditions for when a square matrix is invertible. Below is a list of some of these conditions that we have talked about or proven. Go back through your notes and questions and cite when we connected two of the ideas in the list. For instance, parts and are linked by    "
},
{
  "id": "imt",
  "level": "2",
  "url": "IvertibleMatrixThm.html#imt",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "The Invertible Matrix Theorem.",
  "body": "The Invertible Matrix Theorem   Let be a by matrix. The following are equivalent:  is an invertible matrix.  is row equivalent to .  has pivots.  has only the trivial solution.  The linear transformation is one-to-one.  The linear transformation is onto.  has a solution for every .  The columns of form a linearly independent set.  The columns of span .  The rows of form a linearly independent set.  The rows of span .  is invertible.     "
},
{
  "id": "investigation-34",
  "level": "2",
  "url": "IvertibleMatrixThm.html#investigation-34",
  "type": "Investigation",
  "number": "2.4.2",
  "title": "",
  "body": "  Two important ideas in this course that have been tied to many different methods or ideas are 1) consistent systems of linear equations and 2) invertible matrices. These two ideas are a bit different though. Give an example of a consistent system of linear equations (in matrix equation form ) where the coefficient matrix is a non-invertible square matrix.   "
},
{
  "id": "determinants",
  "level": "1",
  "url": "determinants.html",
  "type": "Section",
  "number": "2.5",
  "title": "Determinants",
  "body": " Determinants   Determinants will be an incredibly useful tool in quickly determining several important properties of square matrices. We will first look at how to compute determinants and later outline the important properties that determinants have. While some of you may have been taught some rules for how to compute determinants of 2 by 2 and 3 by 3 matrices, I encourage you to understand how to compute determinants in general.    Computing Determinants    The determinant is a function from by matrices to the real numbers ( ).  If is a 1 by 1 matrix, , then .  For , the determinant of a by matrix is given by the following formula in terms of determinants of by matrices: where is the by matrix obtained by deleting the -th row and -th column of . The term is called the  cofactor of .    The above definition uses cofactor expansion along the first row.    In this question, we will unpack the determinant formula above for a 2 by 2 matrix .   Rather than using the summation notation of the formula above, write out the two terms in .          Your answer to the previous problem will be useful in calculating determinants of 3 by 3 matrices. We will use the theorem below without proving it.    The determinant can be computed by cofactor expansion along any row or column. Specifically the cofactor expansion along the -th row is given by and the cofactor expansion along the -th column is given by .     Use cofactor expansion along the first column of to compute .   Use cofactor expansion along the second row of to compute . Did you get the same answer as the previous question?  Compute the determinant of . How does your answer compare with the previous problem?  Compute the determinant of .  Compute the determinant of .   Compute the determinant of the following matrices:        Find when   Find when   Find when   Find when      Properties of Determinants    Prove that if has a row of zeros, then .      Prove that .    We will now state several useful properties of determinants. We will defer the proofs until later in the course. You may use these theorems unless a problem specifically asks you to prove one of them , in which case, the problem will note that you may not use the theorem to prove it.    The determinants of elementary matrices have the following values:  If multiplies a row by a scalar , then .  If adds times a row to another row, then .  If swaps two rows, then .          If and are by , then .  If is by and is a scalar, then .  The determinant of an upper or lower triangular matrix is the product of its diagonal entries.   The determinant of a diagonal matrix is the product of its diagonal entries. If is diagonal, then .   If the matrix is invertible, then  A matrix is invertible iff .      The final property of the theorem above should be included in !    Let be an matrix. We have that iff has solutions such that .     "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "determinants.html#definition-14",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "  The determinant is a function from by matrices to the real numbers ( ).  If is a 1 by 1 matrix, , then .  For , the determinant of a by matrix is given by the following formula in terms of determinants of by matrices: where is the by matrix obtained by deleting the -th row and -th column of . The term is called the  cofactor of .   "
},
{
  "id": "investigation-35",
  "level": "2",
  "url": "determinants.html#investigation-35",
  "type": "Investigation",
  "number": "2.5.1",
  "title": "",
  "body": "  In this question, we will unpack the determinant formula above for a 2 by 2 matrix .   Rather than using the summation notation of the formula above, write out the two terms in .         "
},
{
  "id": "theorem-12",
  "level": "2",
  "url": "determinants.html#theorem-12",
  "type": "Theorem",
  "number": "2.5.2",
  "title": "",
  "body": "  The determinant can be computed by cofactor expansion along any row or column. Specifically the cofactor expansion along the -th row is given by and the cofactor expansion along the -th column is given by .   "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "determinants.html#exercise-2",
  "type": "Checkpoint",
  "number": "2.5.3",
  "title": "",
  "body": " Use cofactor expansion along the first column of to compute .  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "determinants.html#exercise-3",
  "type": "Checkpoint",
  "number": "2.5.4",
  "title": "",
  "body": "Use cofactor expansion along the second row of to compute . Did you get the same answer as the previous question? "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "determinants.html#exercise-4",
  "type": "Checkpoint",
  "number": "2.5.5",
  "title": "",
  "body": "Compute the determinant of . How does your answer compare with the previous problem? "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "determinants.html#exercise-5",
  "type": "Checkpoint",
  "number": "2.5.6",
  "title": "",
  "body": "Compute the determinant of . "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "determinants.html#exercise-6",
  "type": "Checkpoint",
  "number": "2.5.7",
  "title": "",
  "body": "Compute the determinant of . "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "determinants.html#exercise-7",
  "type": "Checkpoint",
  "number": "2.5.8",
  "title": "",
  "body": " Compute the determinant of the following matrices:      "
},
{
  "id": "activity-32",
  "level": "2",
  "url": "determinants.html#activity-32",
  "type": "Activity",
  "number": "2.5.2",
  "title": "",
  "body": " Find when   Find when   Find when   Find when   "
},
{
  "id": "investigation-36",
  "level": "2",
  "url": "determinants.html#investigation-36",
  "type": "Investigation",
  "number": "2.5.3",
  "title": "",
  "body": "  Prove that if has a row of zeros, then .   "
},
{
  "id": "investigation-37",
  "level": "2",
  "url": "determinants.html#investigation-37",
  "type": "Investigation",
  "number": "2.5.4",
  "title": "",
  "body": "  Prove that .   "
},
{
  "id": "theorem-13",
  "level": "2",
  "url": "determinants.html#theorem-13",
  "type": "Theorem",
  "number": "2.5.9",
  "title": "",
  "body": "  The determinants of elementary matrices have the following values:  If multiplies a row by a scalar , then .  If adds times a row to another row, then .  If swaps two rows, then .     "
},
{
  "id": "theorem-14",
  "level": "2",
  "url": "determinants.html#theorem-14",
  "type": "Theorem",
  "number": "2.5.10",
  "title": "",
  "body": "    If and are by , then .  If is by and is a scalar, then .  The determinant of an upper or lower triangular matrix is the product of its diagonal entries.   The determinant of a diagonal matrix is the product of its diagonal entries. If is diagonal, then .   If the matrix is invertible, then  A matrix is invertible iff .     "
},
{
  "id": "ee",
  "level": "2",
  "url": "determinants.html#ee",
  "type": "Theorem",
  "number": "2.5.11",
  "title": "",
  "body": "  Let be an matrix. We have that iff has solutions such that .   "
},
{
  "id": "NatureofaMatrix",
  "level": "1",
  "url": "NatureofaMatrix.html",
  "type": "Section",
  "number": "2.6",
  "title": "A Motivating Example",
  "body": " A Motivating Example    We want to look at the effect that a matrix has when we look at the matrix's effect on an entire vector space. Let's start small and look at We want to look at what happens to different directions (measured with unit vectors) when we use the function .   Use Python to construct a bunch of unit vectors centered at the origin. Plot these vectors.  Use Python to calculate for each of your unit vectors. Plot these vectors. What do you notice about these results?  Where does send ? Why should this make sense on your plot?  Where does send ? Why should this make sense on your plot?  How does the area traced out by all unit vectors starting at the origin change under ? Calculate the determinant of and compare to your change in area.  Where does send ? Why should this make sense on your plot?  Are there other directions that work like this?  So and are important directions. Will there be any other directions that are just scalar multiplication under the action of ?  The set spans all of . How can we justify this statement?  We can write any vector in as a linear combination of the set . Use this idea to describe in terms of and .  Can we do all of these steps for other matrices? Great question Dr. Long. You deserve a raise and come cookies. You may proceed to the next section to see the answer.   "
},
{
  "id": "activity-33",
  "level": "2",
  "url": "NatureofaMatrix.html#activity-33",
  "type": "Activity",
  "number": "2.6.1",
  "title": "",
  "body": "  We want to look at the effect that a matrix has when we look at the matrix's effect on an entire vector space. Let's start small and look at We want to look at what happens to different directions (measured with unit vectors) when we use the function .   Use Python to construct a bunch of unit vectors centered at the origin. Plot these vectors.  Use Python to calculate for each of your unit vectors. Plot these vectors. What do you notice about these results?  Where does send ? Why should this make sense on your plot?  Where does send ? Why should this make sense on your plot?  How does the area traced out by all unit vectors starting at the origin change under ? Calculate the determinant of and compare to your change in area.  Where does send ? Why should this make sense on your plot?  Are there other directions that work like this?  So and are important directions. Will there be any other directions that are just scalar multiplication under the action of ?  The set spans all of . How can we justify this statement?  We can write any vector in as a linear combination of the set . Use this idea to describe in terms of and .  Can we do all of these steps for other matrices? Great question Dr. Long. You deserve a raise and come cookies. You may proceed to the next section to see the answer.  "
},
{
  "id": "EigenvaluesEigenvectors",
  "level": "1",
  "url": "EigenvaluesEigenvectors.html",
  "type": "Section",
  "number": "2.7",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors    An eigenvector of a matrix is a nonzero vector such that for some scalar . The scalar is called an eigenvalue of if there exists a nonzero solution to .      Which of the following vectors are an eigenvector of ? For any vectors that are eigenvectors of , give the eigenvalue.          As a hint for the following two problems, it will suffice to try to find an eigenvector of the form . You might first convince yourself that for these matrices, no eigenvector can have first component .    Let . Try to find an eigenvector with eigenvalue . In other words, find a vector such that .      Let . Try to find an eigenvector with eigenvalue . In other words, find a vector such that .    As a hint to proving this, look back to     Let be a square matrix. We have that iff is an eigenvalue of .    If is a by matrix, then will be a -th degree polynomial in , which we call the characteristic polynomial of . The previous theorem shows that finding roots of the characteristic polynomial is the same as finding eigenvalues.    For each of the following matrices:  write out the characteristic polynomial  give all eigenvalues  for each eigenvalue, find an eigenvector  You should do the first two by hand to get a feel for finding the characteristic polynomial. After that, I have provided a SageMath cell you can modify to get the characteristic polynomial quickly, but you will need to work from there to find eigenvalues and eigenvectors.          Work smarter, not harder, on this part!   A root of a polynomial (in ) has (algebraic) multiplicity  if is the largest integer such that is a factor. Which, if any, of the eigenvalues you found above have algebraic multiplicity greater than ?       Prove that a nonzero vector, , is an eigenvector of with eigenvalue if and only if is in the null space of .     If is an eigenvector of with eigenvalue , then . By algebra, this means that , and hence . Thus, is in the null space of .   If , then . Hence, , or . Thus, is an eigenvector of with eigenvalue .      Prove that if is an eigenvector of , then is also an eigenvector of (when ).    Since is an eigenvector of , there is a scalar such that . By properties of matrix multiplication, we thus have . As , this shows that is an eigenvector with the same eigenvalue.      Prove that if and are eigenvectors of with the same eigenvalue, then is also an eigenvector of . What is the eigenvalue of ?    Let be the associated eigenvalue. We have that and . Thus, we have . Therefore, is an eigenvector with the same eigenvalue.      If is an eigenvalue of , then the eigenspace of , , is the set of vectors such that .       Determine all eigenspaces for each matrix.            Let . Show that only has an eigenvalue of 2. What is the algebraic multiplicity of the eigenvalue 2?    Can you pick , , and , so that the eigenspace of 2 has dimension 3? If so, give a choice of , , and that does so.    Can you pick , , and , so that the eigenspace of 2 has dimension 2? If so, give a choice of , , and that does so.    Can you pick , , and , so that the eigenspace of 2 has dimension 1? If so, give a choice of , , and that does so.    "
},
{
  "id": "definition-15",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#definition-15",
  "type": "Definition",
  "number": "2.7.1",
  "title": "",
  "body": "  An eigenvector of a matrix is a nonzero vector such that for some scalar . The scalar is called an eigenvalue of if there exists a nonzero solution to .   "
},
{
  "id": "investigation-38",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#investigation-38",
  "type": "Investigation",
  "number": "2.7.1",
  "title": "",
  "body": "  Which of the following vectors are an eigenvector of ? For any vectors that are eigenvectors of , give the eigenvalue.         "
},
{
  "id": "investigation-39",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#investigation-39",
  "type": "Investigation",
  "number": "2.7.2",
  "title": "",
  "body": "  Let . Try to find an eigenvector with eigenvalue . In other words, find a vector such that .   "
},
{
  "id": "investigation-40",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#investigation-40",
  "type": "Investigation",
  "number": "2.7.3",
  "title": "",
  "body": "  Let . Try to find an eigenvector with eigenvalue . In other words, find a vector such that .   "
},
{
  "id": "theorem-16",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#theorem-16",
  "type": "Theorem",
  "number": "2.7.2",
  "title": "",
  "body": "  Let be a square matrix. We have that iff is an eigenvalue of .   "
},
{
  "id": "p-371",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#p-371",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic polynomial of "
},
{
  "id": "investigation-41",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#investigation-41",
  "type": "Investigation",
  "number": "2.7.4",
  "title": "",
  "body": "  For each of the following matrices:  write out the characteristic polynomial  give all eigenvalues  for each eigenvalue, find an eigenvector  You should do the first two by hand to get a feel for finding the characteristic polynomial. After that, I have provided a SageMath cell you can modify to get the characteristic polynomial quickly, but you will need to work from there to find eigenvalues and eigenvectors.          Work smarter, not harder, on this part!   A root of a polynomial (in ) has (algebraic) multiplicity  if is the largest integer such that is a factor. Which, if any, of the eigenvalues you found above have algebraic multiplicity greater than ?   "
},
{
  "id": "investigation-42",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#investigation-42",
  "type": "Investigation",
  "number": "2.7.5",
  "title": "",
  "body": "  Prove that a nonzero vector, , is an eigenvector of with eigenvalue if and only if is in the null space of .     If is an eigenvector of with eigenvalue , then . By algebra, this means that , and hence . Thus, is in the null space of .   If , then . Hence, , or . Thus, is an eigenvector of with eigenvalue .   "
},
{
  "id": "investigation-43",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#investigation-43",
  "type": "Investigation",
  "number": "2.7.6",
  "title": "",
  "body": "  Prove that if is an eigenvector of , then is also an eigenvector of (when ).    Since is an eigenvector of , there is a scalar such that . By properties of matrix multiplication, we thus have . As , this shows that is an eigenvector with the same eigenvalue.   "
},
{
  "id": "investigation-44",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#investigation-44",
  "type": "Investigation",
  "number": "2.7.7",
  "title": "",
  "body": "  Prove that if and are eigenvectors of with the same eigenvalue, then is also an eigenvector of . What is the eigenvalue of ?    Let be the associated eigenvalue. We have that and . Thus, we have . Therefore, is an eigenvector with the same eigenvalue.   "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#definition-16",
  "type": "Definition",
  "number": "2.7.3",
  "title": "",
  "body": "  If is an eigenvalue of , then the eigenspace of , , is the set of vectors such that .   "
},
{
  "id": "activity-34",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#activity-34",
  "type": "Activity",
  "number": "2.7.8",
  "title": "",
  "body": "  Determine all eigenspaces for each matrix.         "
},
{
  "id": "q92",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#q92",
  "type": "Investigation",
  "number": "2.7.9",
  "title": "",
  "body": "  Let . Show that only has an eigenvalue of 2. What is the algebraic multiplicity of the eigenvalue 2?    Can you pick , , and , so that the eigenspace of 2 has dimension 3? If so, give a choice of , , and that does so.    Can you pick , , and , so that the eigenspace of 2 has dimension 2? If so, give a choice of , , and that does so.    Can you pick , , and , so that the eigenspace of 2 has dimension 1? If so, give a choice of , , and that does so.   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
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
