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
  "id": "Conunique",
  "level": "1",
  "url": "Conunique.html",
  "type": "Section",
  "number": "1.3",
  "title": "Consistency and Uniqueness Theorems",
  "body": " Consistency and Uniqueness Theorems     To understand when a system of equations will be consistent in terms of the number of pivot variables    To understand when a system of equations will have a unique solution in terms of the number of pivot variables    To understand how to use the reduced row echelon form of the augmented matrix for a linear system to easily write out the solution set      In class, we came up with statements of the following two theorems:   Consistency Theorem   A system of equations is consistent if and only if the row echelon form of its augmented matrix has no pivot entries in the rightmost column. Equivalently, a system of equations is inconsistent if and only if the row echelon form of its augmented matrix has a pivot entry in the rightmost column.     Uniqueness Theorem   A system of equations with variables has a unique solution if and only if its augmented matrix has pivot entries and no pivot entry in the rightmost column.      Writing Solution Sets    For the matrix below, verify that the matrix is in rref (reduced row echelon form) and treat the matrix as an augmented matrix for a system of linear equations. Write out the corresponding system of equations. Use this system of equations to write each variable in terms of just free variables and constants.      Under what conditions would your process for the previous activity not work? In other words, when would it not be possible to write each variable in terms of just free variables and constants.     Determining Consistency\/Uniqueness of Solutions    Give an example matrix that fits each of the following conditions:  A 3 by 4 augmented matrix corresponding to a linear system with a unique solution  A 3 by 4 augmented matrix corresponding to a consistent linear system of equations that does NOT have a unique solution  A 3 by 4 augmented matrix corresponding to an inconsistent system of linear equations        Using the statement of the and , treat each of your answers to as an augmented matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.        Using the statement of the and , treat each of your answers to as a coefficient matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.      You will probably need to restate the theorems or think about how coefficient matrices are different to augmented matrices!     "
},
{
  "id": "Conunique-2",
  "level": "2",
  "url": "Conunique.html#Conunique-2",
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
  "id": "Conunique-4-3",
  "level": "2",
  "url": "Conunique.html#Conunique-4-3",
  "type": "Question",
  "number": "1.3.3",
  "title": "",
  "body": " Under what conditions would your process for the previous activity not work? In other words, when would it not be possible to write each variable in terms of just free variables and constants.  "
},
{
  "id": "Conunique-5-2",
  "level": "2",
  "url": "Conunique.html#Conunique-5-2",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "  Give an example matrix that fits each of the following conditions:  A 3 by 4 augmented matrix corresponding to a linear system with a unique solution  A 3 by 4 augmented matrix corresponding to a consistent linear system of equations that does NOT have a unique solution  A 3 by 4 augmented matrix corresponding to an inconsistent system of linear equations     "
},
{
  "id": "Conunique-5-3",
  "level": "2",
  "url": "Conunique.html#Conunique-5-3",
  "type": "Activity",
  "number": "1.3.3",
  "title": "",
  "body": "  Using the statement of the and , treat each of your answers to as an augmented matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.     "
},
{
  "id": "Conunique-5-4",
  "level": "2",
  "url": "Conunique.html#Conunique-5-4",
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
  "id": "Geo_App-3-3",
  "level": "2",
  "url": "Geo_App.html#Geo_App-3-3",
  "type": "Activity",
  "number": "1.4.1",
  "title": "",
  "body": "   List out all the possible ways two planes can intersect in a three dimensional space.  List out all the possible ways three planes can intersect in a three dimensional space.  List out all the possible ways four planes can intersect in a three dimensional space.  List out all the possible ways five planes can intersect in a three dimensional space.    "
},
{
  "id": "Geo_App-3-9",
  "level": "2",
  "url": "Geo_App.html#Geo_App-3-9",
  "type": "Investigation",
  "number": "1.4.2",
  "title": "",
  "body": " Does your answer to make sense with this plot? Explain.  "
},
{
  "id": "Geo_App-3-10",
  "level": "2",
  "url": "Geo_App.html#Geo_App-3-10",
  "type": "Question",
  "number": "1.4.1",
  "title": "",
  "body": "  For each of the systems in , use SageMath to draw a plot of each of the equations in the system and write a sentence for each system about why the plot and your answer to make sense.    You can edit the code block above and click the button again, and it will update the graph.   "
},
{
  "id": "Geo_App-4-5",
  "level": "2",
  "url": "Geo_App.html#Geo_App-4-5",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": " Consider the electrical network shown here   An electrical circuit  We can set up the equations for the three currents using our voltage and current law in conjunction with Ohm's Law. This yields   The first equation is using our conservation of flow. The second equation is using Ohm's law with our voltage law around the circuit CABC. The third equation is similar, but around the circuit DABD.  The rref of the corresponding augmented matrix is Thus we have a unique solution of .  "
},
{
  "id": "Geo_App-4-6",
  "level": "2",
  "url": "Geo_App.html#Geo_App-4-6",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "  For this activity, we will be considering the following circuit   An electrical circuit     Write out the current equations for each of the four junctions  Write out the voltage drop equations for three of the basic circuits.  Use Python to input the corresponding augmented matrix and solve the system based on the rref. Explain the meaning of your solution.  "
},
{
  "id": "Geo_App-4-8",
  "level": "2",
  "url": "Geo_App.html#Geo_App-4-8",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": " Let's look at the simple chemical equation for creating water from hydrogen and oxygen. We want to know how many molecules of each type are needed to go into the reaction and how many will come out. Note that the coefficents in this setting must be positive integers since we cannot have a fraction of a molecule.  If we consider the number of hydrogen atoms in the reaction, we get If we consider the number of oxygen atoms in the reaction, we get Thus we get the following system which has augmented form which can be reduced to   Notice that there is NOT a unique solution to system of equations, but rather we can have solutions of the form Therefore, the smallest integer solution is when , which gives the following chemical reaction   "
},
{
  "id": "Geo_App-4-9",
  "level": "2",
  "url": "Geo_App.html#Geo_App-4-9",
  "type": "Activity",
  "number": "1.4.4",
  "title": "",
  "body": "  Consider the chemical reaction    Write out equations for nitrogen, hydrogen, and oxygen atoms  Input the corresponding augmented matrix into Python and use the rref to write out the solution set  Write out the simplest form of the chemical reaction equation.  "
},
{
  "id": "Geo_App-4-10",
  "level": "2",
  "url": "Geo_App.html#Geo_App-4-10",
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
  "id": "sec_vector_calc-2-1",
  "level": "2",
  "url": "sec_vector_calc.html#sec_vector_calc-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vectors component "
},
{
  "id": "sec_vector_calc-3-2",
  "level": "2",
  "url": "sec_vector_calc.html#sec_vector_calc-3-2",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  Let , then the dot product of with is the scalar value given by    "
},
{
  "id": "sec_vector_calc-3-3",
  "level": "2",
  "url": "sec_vector_calc.html#sec_vector_calc-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "magnitude unit vector "
},
{
  "id": "sec_vector_calc-3-4",
  "level": "2",
  "url": "sec_vector_calc.html#sec_vector_calc-3-4",
  "type": "Definition",
  "number": "1.5.2",
  "title": "",
  "body": "  Let , then the vectors and are orthogonal if .   "
},
{
  "id": "sec_vector_calc-3-5",
  "level": "2",
  "url": "sec_vector_calc.html#sec_vector_calc-3-5",
  "type": "Activity",
  "number": "1.5.1",
  "title": "",
  "body": "  Use the Desmos interact embeded below to change the end points of our two vectors. Based on what you see about the value of the dot product for different configurations of vectors, answer the questions below    How does changing the length of the vectors change the value of the dot product?  How does changing the angle of the vectors change the value of the dot product?  "
},
{
  "id": "sec_vector_calc-3-6",
  "level": "2",
  "url": "sec_vector_calc.html#sec_vector_calc-3-6",
  "type": "Definition",
  "number": "1.5.3",
  "title": "",
  "body": "  The projection of a vector  onto a vector gives the vector part of that is parallel to and is computed as This is sometimes called the vector projection. The right most part of the definition of the projection vector shows that the projection of onto will be a scalar ( )times the unit vector in the direction of . The scalar is referred to as the scalar projection of onto .  The vector projection of onto measures the vector part of that is parallel to , where as the scalar projection of onto measures the length of that is parallel to . If you subtract the projection of onto from ( ), the result will the part of that is orthogonal to because has subtracted out ALL of that is parallel to .   "
},
{
  "id": "sec_vector_calc-3-7",
  "level": "2",
  "url": "sec_vector_calc.html#sec_vector_calc-3-7",
  "type": "Theorem",
  "number": "1.5.4",
  "title": "",
  "body": " If is the angle between two vectors and , then   "
},
{
  "id": "sec_vector_calc-3-8",
  "level": "2",
  "url": "sec_vector_calc.html#sec_vector_calc-3-8",
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
  "id": "sec_vector_eqns-2",
  "level": "2",
  "url": "sec_vector_eqns.html#sec_vector_eqns-2",
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
  "id": "sec_vector_eqns-7",
  "level": "2",
  "url": "sec_vector_eqns.html#sec_vector_eqns-7",
  "type": "Question",
  "number": "1.6.2",
  "title": "",
  "body": " Give the parametric form of the solution set for the system given by the augmented matrix below.   "
},
{
  "id": "sec_vector_eqns-8",
  "level": "2",
  "url": "sec_vector_eqns.html#sec_vector_eqns-8",
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
  "id": "span-2-2",
  "level": "2",
  "url": "span.html#span-2-2",
  "type": "Definition",
  "number": "1.7.1",
  "title": "",
  "body": "  Let be a set of vectors, . We define the span of , denoted , as the set of all linear combinations of vectors from . That is,    "
},
{
  "id": "span-2-3",
  "level": "2",
  "url": "span.html#span-2-3",
  "type": "Activity",
  "number": "1.7.1",
  "title": "",
  "body": " Look back at and and restate each of the questions in terms of span. For instance, part 1 of could be stated as \"Show that is in the span of .\"  "
},
{
  "id": "span-2-5",
  "level": "2",
  "url": "span.html#span-2-5",
  "type": "Activity",
  "number": "1.7.2",
  "title": "",
  "body": "    How many vectors are in ?  Is there any vector in that is not in ?  How many vectors are in ?  Is there any vector in that is not in ?  Try to write out the set of vectors in ? Hint: write the corresponding system of equations, then use the solution set of this system to write out the exact vector form of .  Is there any vector in that is not in ?     "
},
{
  "id": "span-3-2",
  "level": "2",
  "url": "span.html#span-3-2",
  "type": "Definition",
  "number": "1.7.2",
  "title": "",
  "body": "  A set of vectors spans a vector space if . In other words, spans a vector space if every vector in can be written as a linear combination from the set .   "
},
{
  "id": "span-3-3",
  "level": "2",
  "url": "span.html#span-3-3",
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
  "id": "lin_indep-5",
  "level": "2",
  "url": "lin_indep.html#lin_indep-5",
  "type": "Activity",
  "number": "1.8.1",
  "title": "",
  "body": " Give a set of two vectors from , and , such that has more than one solution. Justify your answer.  Give a set of two vectors from , and , such that has only one solution. How do you know there is only one solution?  "
},
{
  "id": "lin_indep-6",
  "level": "2",
  "url": "lin_indep.html#lin_indep-6",
  "type": "Definition",
  "number": "1.8.1",
  "title": "",
  "body": "  A set of vectors is linearly independent if the only linear combination of elements of that equals the zero vector is the trivial linear combination. In other words, being a linear independent set implies that if where , then all .  A set of vectors is linearly dependent if the set is not linearly independent. More specifically, there exists a solution to where and at least one of the .   "
},
{
  "id": "lin_indep-7",
  "level": "2",
  "url": "lin_indep.html#lin_indep-7",
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
  "id": "MatrixProdEq-2",
  "level": "2",
  "url": "MatrixProdEq.html#MatrixProdEq-2",
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
  "id": "MatrixProdEq-3-3",
  "level": "2",
  "url": "MatrixProdEq.html#MatrixProdEq-3-3",
  "type": "Investigation",
  "number": "2.1.1",
  "title": "",
  "body": " If is a by matrix, then for what value of ?  "
},
{
  "id": "MatrixProdEq-3-5",
  "level": "2",
  "url": "MatrixProdEq.html#MatrixProdEq-3-5",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  Let          Write out the matrix vector product of and as a linear combination of the columns of .    Find     Compute all of the other matrix vector products that will be allowed with the matrices and .   "
},
{
  "id": "MatrixProdEq-3-7",
  "level": "2",
  "url": "MatrixProdEq.html#MatrixProdEq-3-7",
  "type": "Investigation",
  "number": "2.1.3",
  "title": "",
  "body": "  Write out the -th component of the resulting vector of the product       How can you express the result of the matrix-vector product in terms of and the rows of ?   The -th component of the matrix-vector product is the dot product of row of with .    How can you express the result of the matrix-vector product in terms of and the columns of ?   One way to view this is as a linear combination of the columns of with the coefficient on the -th column of being .   "
},
{
  "id": "MatrixProdEq-4-3",
  "level": "2",
  "url": "MatrixProdEq.html#MatrixProdEq-4-3",
  "type": "Investigation",
  "number": "2.1.4",
  "title": "",
  "body": "  Write each of the following as a matrix equation, a vector equation, and system of equations. You need to write out the exact corresponding vector equation, matrix equation, and system of equations, not some equivalent form.            "
},
{
  "id": "MatrixProdEq-4-4",
  "level": "2",
  "url": "MatrixProdEq.html#MatrixProdEq-4-4",
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
  "id": "MatrixProdEq-5-6",
  "level": "2",
  "url": "MatrixProdEq.html#MatrixProdEq-5-6",
  "type": "Activity",
  "number": "2.1.6",
  "title": "",
  "body": "  Let .    The linear transformation takes to for what values of and ?    Compute .    Compute .    Compute .    Compute for any other vectors you might want to and write a few sentences about how vectors are transformed by .   "
},
{
  "id": "MatrixProdEq-5-7",
  "level": "2",
  "url": "MatrixProdEq.html#MatrixProdEq-5-7",
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
  "body": " Matrix Operations     To compute matrix opertions like addition, subtraction, scalar multiplication, transpose, and matrix multiplication    To understand how to compute matrix operations for an entry, row, or column    To determine if matrices fir specific forms like upper triangular, lower triangular, symmetric, skew symmetric, or identity      Addition and Transposition    Finish the following sentences.    Vectors are equal if…    Matrices are equal if…    A scalar is…    Just as you can add two vectors in componentwise, you can add two matrices entry-wise. For this reason, it only makes sense to add two matrices if they are the same size. You can also define scalar multiplication of a matrix entry-wise.   Let , , and .   Is a scalar multiple of ? Why or why not?              Symbolically, and       Let be a by matrix. The transpose of , denoted , is a by matrix such that .    There are a couple of ways to think about the transpose. First, you can think about flipping the matrix across the main diagonal (the elements of the form ). You can also view the transpose of a matrix as switching the rows and columns (but preserving the order). In other words, the -th row of is the -th column of .    Let and                   Let , , and .            If and are by matrices, then .      What dimensions should have in order to be able to add to ?      For all matrices , .    A matrix is symmetric if .    The sum of two symmetric by matrices is symmetric.      If is a symmetric matrix, then is symmetric.      Matrix Multiplication  Earlier we saw how to multiply a by matrix by a vector from . We will discuss how to define matrix multiplication with multiple interpretations.  Let be an by matrix and let and be vectors from . Earlier we defined what and meant. If we build a by matrix using and as the columns, then we can define , read as times , to be The above definition is just distributing our matrix-vector product across the columns of . In a similar fashion, given any by matrix where is the -th column of , we can define In particular, this means that if makes sense, then we can calculate just the -th column of without calculating all of . Namely, the -th column of is , which is written symbolically as .    Let and .    Write out the columns of as vectors where .    Compute the following:       Use the results of your previous work to compute     Take a moment to look back on exactly what calculation you had to do to get the value of . Write out exactly which parts of and are used in your calculation.    Formally, we can define the product of a by matrix with a by matrix to be the by matrix such that   This formula looks difficult, but what it really tells us is that the entry of is really the dot product of the -th row of with the -th column of . Remember the dot product of and is just the sum of the products of the components. Namely, This idea lets us calculate the matrix product one entry at a time. Continuing this idea will lead us to see that the -th row of the product can be calculated as .  Note that in general , even when both products make sense.   What sizes of matrices can you add to a by matrix?  What sizes of matrices can you multiply on the right of a by matrix?  What sizes of matrices can you multiply on the left of a by matrix?     If , when does it make sense to multiply by ?      Let and .   What is the size of ?  Compute just the first column of .  Write the first column of as a linear combination of the columns of A. Be sure to check your work.  Solve the matrix equation .  Compute just the second row of      Let and                      Let and . Compute and .      Let and . Compute and .    You can approach proving the following theorem by showing matrix equality entry-wise or column-wise or row-wise.    For all matrices , , and such that the addition and multiplication of matrices below makes sense, .      Give 2 different examples of 3 by 3 matrices and such that .      Give 2 different examples of 3 by 3 matrices and such that .      For all matrices such that is defined, .      Special Types of Matrices  A square matrix is a matrix that has the same number of rows and columns. A by matrix is said to be upper triangular if whenever . Similarly, a matrix is lower triangular if whenever . We usually consider square matrices when we talk about upper or lower triangular, but it may be helpful to consider non-square cases.    Give an example of a matrix that is upper triangular but is not in echelon form. If one does not exist, explain why.      Give an example of a matrix that is in echelon form but is not upper triangular. If one does not exist, explain why.      Can a matrix be upper and lower triangular? Either give an example or explain why there cannot exist one.     Diagonal matrices are matrices whose only nonzero entries are on the diagonal. Specifically, a matrix is diagonal if whenever .    Give an example of a matrix that is diagonal but not in echelon form.    The by  identity matrix , denoted , is the unique matrix such that for every . In fact the entries of are easily computed in terms of the Dirac delta function. Specifically , where     Write out and use it to prove that for any the product of and will always be .     Superstar Bonus Question   Prove that is the only matrix that has the property from the problem above.     "
},
{
  "id": "sec_matrix_ops-2",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "   To compute matrix opertions like addition, subtraction, scalar multiplication, transpose, and matrix multiplication    To understand how to compute matrix operations for an entry, row, or column    To determine if matrices fir specific forms like upper triangular, lower triangular, symmetric, skew symmetric, or identity    "
},
{
  "id": "sec_matrix_ops-3-2",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-2",
  "type": "Investigation",
  "number": "2.2.1",
  "title": "",
  "body": "  Finish the following sentences.    Vectors are equal if…    Matrices are equal if…    A scalar is…   "
},
{
  "id": "sec_matrix_ops-3-4",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-4",
  "type": "Investigation",
  "number": "2.2.2",
  "title": "",
  "body": " Let , , and .   Is a scalar multiple of ? Why or why not?           "
},
{
  "id": "sec_matrix_ops-3-5",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-5",
  "type": "Investigation",
  "number": "2.2.3",
  "title": "",
  "body": "  Symbolically, and    "
},
{
  "id": "sec_matrix_ops-3-6",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-6",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Let be a by matrix. The transpose of , denoted , is a by matrix such that .   "
},
{
  "id": "sec_matrix_ops-3-8",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-8",
  "type": "Investigation",
  "number": "2.2.4",
  "title": "",
  "body": "  Let and                "
},
{
  "id": "sec_matrix_ops-3-9",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-9",
  "type": "Investigation",
  "number": "2.2.5",
  "title": "",
  "body": "  Let , , and .         "
},
{
  "id": "sec_matrix_ops-3-10",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-10",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "",
  "body": "  If and are by matrices, then .   "
},
{
  "id": "sec_matrix_ops-3-11",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-11",
  "type": "Investigation",
  "number": "2.2.6",
  "title": "",
  "body": "  What dimensions should have in order to be able to add to ?   "
},
{
  "id": "sec_matrix_ops-3-12",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-12",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "",
  "body": "  For all matrices , .   "
},
{
  "id": "sec_matrix_ops-3-13",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "sec_matrix_ops-3-14",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-14",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "",
  "body": "  The sum of two symmetric by matrices is symmetric.   "
},
{
  "id": "sec_matrix_ops-3-15",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-15",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "",
  "body": "  If is a symmetric matrix, then is symmetric.   "
},
{
  "id": "sec_matrix_ops-4-4",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-4",
  "type": "Activity",
  "number": "2.2.7",
  "title": "",
  "body": "  Let and .    Write out the columns of as vectors where .    Compute the following:       Use the results of your previous work to compute     Take a moment to look back on exactly what calculation you had to do to get the value of . Write out exactly which parts of and are used in your calculation.   "
},
{
  "id": "sec_matrix_ops-4-6",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "sec_matrix_ops-4-8",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-8",
  "type": "Investigation",
  "number": "2.2.8",
  "title": "",
  "body": " What sizes of matrices can you add to a by matrix?  What sizes of matrices can you multiply on the right of a by matrix?  What sizes of matrices can you multiply on the left of a by matrix?  "
},
{
  "id": "sec_matrix_ops-4-9",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-9",
  "type": "Investigation",
  "number": "2.2.9",
  "title": "",
  "body": "  If , when does it make sense to multiply by ?   "
},
{
  "id": "sec_matrix_ops-4-10",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-10",
  "type": "Investigation",
  "number": "2.2.10",
  "title": "",
  "body": "  Let and .   What is the size of ?  Compute just the first column of .  Write the first column of as a linear combination of the columns of A. Be sure to check your work.  Solve the matrix equation .  Compute just the second row of   "
},
{
  "id": "sec_matrix_ops-4-11",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-11",
  "type": "Investigation",
  "number": "2.2.11",
  "title": "",
  "body": "  Let and                   "
},
{
  "id": "sec_matrix_ops-4-12",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-12",
  "type": "Investigation",
  "number": "2.2.12",
  "title": "",
  "body": "  Let and . Compute and .   "
},
{
  "id": "sec_matrix_ops-4-13",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-13",
  "type": "Investigation",
  "number": "2.2.13",
  "title": "",
  "body": "  Let and . Compute and .   "
},
{
  "id": "sec_matrix_ops-4-15",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-15",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "",
  "body": "  For all matrices , , and such that the addition and multiplication of matrices below makes sense, .   "
},
{
  "id": "sec_matrix_ops-4-16",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-16",
  "type": "Investigation",
  "number": "2.2.14",
  "title": "",
  "body": "  Give 2 different examples of 3 by 3 matrices and such that .   "
},
{
  "id": "sec_matrix_ops-4-17",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-17",
  "type": "Investigation",
  "number": "2.2.15",
  "title": "",
  "body": "  Give 2 different examples of 3 by 3 matrices and such that .   "
},
{
  "id": "sec_matrix_ops-4-18",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-18",
  "type": "Theorem",
  "number": "2.2.7",
  "title": "",
  "body": "  For all matrices such that is defined, .   "
},
{
  "id": "sec_matrix_ops-5-2",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square upper triangular lower triangular "
},
{
  "id": "sec_matrix_ops-5-3",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-5-3",
  "type": "Investigation",
  "number": "2.2.16",
  "title": "",
  "body": "  Give an example of a matrix that is upper triangular but is not in echelon form. If one does not exist, explain why.   "
},
{
  "id": "sec_matrix_ops-5-4",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-5-4",
  "type": "Investigation",
  "number": "2.2.17",
  "title": "",
  "body": "  Give an example of a matrix that is in echelon form but is not upper triangular. If one does not exist, explain why.   "
},
{
  "id": "sec_matrix_ops-5-5",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-5-5",
  "type": "Investigation",
  "number": "2.2.18",
  "title": "",
  "body": "  Can a matrix be upper and lower triangular? Either give an example or explain why there cannot exist one.   "
},
{
  "id": "sec_matrix_ops-5-6",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-5-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Diagonal "
},
{
  "id": "sec_matrix_ops-5-7",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-5-7",
  "type": "Investigation",
  "number": "2.2.19",
  "title": "",
  "body": "  Give an example of a matrix that is diagonal but not in echelon form.   "
},
{
  "id": "sec_matrix_ops-5-8",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-5-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "sec_matrix_ops-5-9",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-5-9",
  "type": "Investigation",
  "number": "2.2.20",
  "title": "",
  "body": "  Write out and use it to prove that for any the product of and will always be .   "
},
{
  "id": "sec_matrix_ops-5-10",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-5-10",
  "type": "Investigation",
  "number": "2.2.21",
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
  "id": "InverseMatrices-2-2",
  "level": "2",
  "url": "InverseMatrices.html#InverseMatrices-2-2",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": " A matrix is invertible if there exists a matrix such that and . The inverse matrix of is denoted .  "
},
{
  "id": "InverseMatrices-2-3",
  "level": "2",
  "url": "InverseMatrices.html#InverseMatrices-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular matrix non-singular matrix "
},
{
  "id": "InverseMatrices-3-2",
  "level": "2",
  "url": "InverseMatrices.html#InverseMatrices-3-2",
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
  "id": "InverseMatrices-3-6",
  "level": "2",
  "url": "InverseMatrices.html#InverseMatrices-3-6",
  "type": "Activity",
  "number": "2.3.3",
  "title": "",
  "body": " Use the result of the previous investigation to find the inverse of the matrix . Check your work by computing and for the matrix you think is the inverse of .  Use the result of the previous investigation to find the inverse of the matrix . Check your work by computing and for the matrix you think is the inverse of .  Use the idea above to compute the inverse of . Be sure to note any assumptions you will need to make in order to reduce to .  If , find and check that .  "
},
{
  "id": "InverseMatrices-3-7",
  "level": "2",
  "url": "InverseMatrices.html#InverseMatrices-3-7",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "",
  "body": " If , find and use your answer to solve if:  "
},
{
  "id": "InverseMatrices-3-8",
  "level": "2",
  "url": "InverseMatrices.html#InverseMatrices-3-8",
  "type": "Investigation",
  "number": "2.3.4",
  "title": "",
  "body": " Your friend Nick, who thinks he knows everything, claims that because that's how exponents work. Is he right? Justify your answer like you are going to have to convince Nick.   Mulitply Nick's Result on both sides by the matrix and simplify.   "
},
{
  "id": "InverseMatrices-3-9",
  "level": "2",
  "url": "InverseMatrices.html#InverseMatrices-3-9",
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
  "id": "IvertibleMatrixThm-2",
  "level": "2",
  "url": "IvertibleMatrixThm.html#IvertibleMatrixThm-2",
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
  "id": "IvertibleMatrixThm-5",
  "level": "2",
  "url": "IvertibleMatrixThm.html#IvertibleMatrixThm-5",
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
  "id": "determinants-3-2",
  "level": "2",
  "url": "determinants.html#determinants-3-2",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "  The determinant is a function from by matrices to the real numbers ( ).  If is a 1 by 1 matrix, , then .  For , the determinant of a by matrix is given by the following formula in terms of determinants of by matrices: where is the by matrix obtained by deleting the -th row and -th column of . The term is called the  cofactor of .   "
},
{
  "id": "determinants-3-4",
  "level": "2",
  "url": "determinants.html#determinants-3-4",
  "type": "Investigation",
  "number": "2.5.1",
  "title": "",
  "body": "  In this question, we will unpack the determinant formula above for a 2 by 2 matrix .   Rather than using the summation notation of the formula above, write out the two terms in .         "
},
{
  "id": "determinants-3-6",
  "level": "2",
  "url": "determinants.html#determinants-3-6",
  "type": "Theorem",
  "number": "2.5.2",
  "title": "",
  "body": "  The determinant can be computed by cofactor expansion along any row or column. Specifically the cofactor expansion along the -th row is given by and the cofactor expansion along the -th column is given by .   "
},
{
  "id": "determinants-3-7",
  "level": "2",
  "url": "determinants.html#determinants-3-7",
  "type": "Checkpoint",
  "number": "2.5.3",
  "title": "",
  "body": " Use cofactor expansion along the first column of to compute .  "
},
{
  "id": "determinants-3-8",
  "level": "2",
  "url": "determinants.html#determinants-3-8",
  "type": "Checkpoint",
  "number": "2.5.4",
  "title": "",
  "body": "Use cofactor expansion along the second row of to compute . Did you get the same answer as the previous question? "
},
{
  "id": "determinants-3-9",
  "level": "2",
  "url": "determinants.html#determinants-3-9",
  "type": "Checkpoint",
  "number": "2.5.5",
  "title": "",
  "body": "Compute the determinant of . How does your answer compare with the previous problem? "
},
{
  "id": "determinants-3-10",
  "level": "2",
  "url": "determinants.html#determinants-3-10",
  "type": "Checkpoint",
  "number": "2.5.6",
  "title": "",
  "body": "Compute the determinant of . "
},
{
  "id": "determinants-3-11",
  "level": "2",
  "url": "determinants.html#determinants-3-11",
  "type": "Checkpoint",
  "number": "2.5.7",
  "title": "",
  "body": "Compute the determinant of . "
},
{
  "id": "determinants-3-12",
  "level": "2",
  "url": "determinants.html#determinants-3-12",
  "type": "Checkpoint",
  "number": "2.5.8",
  "title": "",
  "body": " Compute the determinant of the following matrices:      "
},
{
  "id": "determinants-3-13",
  "level": "2",
  "url": "determinants.html#determinants-3-13",
  "type": "Activity",
  "number": "2.5.2",
  "title": "",
  "body": " Find when   Find when   Find when   Find when   "
},
{
  "id": "determinants-4-2",
  "level": "2",
  "url": "determinants.html#determinants-4-2",
  "type": "Investigation",
  "number": "2.5.3",
  "title": "",
  "body": "  Prove that if has a row of zeros, then .   "
},
{
  "id": "determinants-4-3",
  "level": "2",
  "url": "determinants.html#determinants-4-3",
  "type": "Investigation",
  "number": "2.5.4",
  "title": "",
  "body": "  Prove that .   "
},
{
  "id": "determinants-4-5",
  "level": "2",
  "url": "determinants.html#determinants-4-5",
  "type": "Theorem",
  "number": "2.5.9",
  "title": "",
  "body": "  The determinants of elementary matrices have the following values:  If multiplies a row by a scalar , then .  If adds times a row to another row, then .  If swaps two rows, then .     "
},
{
  "id": "determinants-4-6",
  "level": "2",
  "url": "determinants.html#determinants-4-6",
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
  "id": "NatureofaMatrix-2",
  "level": "2",
  "url": "NatureofaMatrix.html#NatureofaMatrix-2",
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
  "id": "EigenvaluesEigenvectors-2",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-2",
  "type": "Definition",
  "number": "2.7.1",
  "title": "",
  "body": "  An eigenvector of a matrix is a nonzero vector such that for some scalar . The scalar is called an eigenvalue of if there exists a nonzero solution to .   "
},
{
  "id": "EigenvaluesEigenvectors-3",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-3",
  "type": "Investigation",
  "number": "2.7.1",
  "title": "",
  "body": "  Which of the following vectors are an eigenvector of ? For any vectors that are eigenvectors of , give the eigenvalue.         "
},
{
  "id": "EigenvaluesEigenvectors-5",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-5",
  "type": "Investigation",
  "number": "2.7.2",
  "title": "",
  "body": "  Let . Try to find an eigenvector with eigenvalue . In other words, find a vector such that .   "
},
{
  "id": "EigenvaluesEigenvectors-6",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-6",
  "type": "Investigation",
  "number": "2.7.3",
  "title": "",
  "body": "  Let . Try to find an eigenvector with eigenvalue . In other words, find a vector such that .   "
},
{
  "id": "EigenvaluesEigenvectors-8",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-8",
  "type": "Theorem",
  "number": "2.7.2",
  "title": "",
  "body": "  Let be a square matrix. We have that iff is an eigenvalue of .   "
},
{
  "id": "EigenvaluesEigenvectors-9",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic polynomial of "
},
{
  "id": "EigenvaluesEigenvectors-10",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-10",
  "type": "Investigation",
  "number": "2.7.4",
  "title": "",
  "body": "  For each of the following matrices:  write out the characteristic polynomial  give all eigenvalues  for each eigenvalue, find an eigenvector  You should do the first two by hand to get a feel for finding the characteristic polynomial. After that, I have provided a SageMath cell you can modify to get the characteristic polynomial quickly, but you will need to work from there to find eigenvalues and eigenvectors.          Work smarter, not harder, on this part!   A root of a polynomial (in ) has (algebraic) multiplicity  if is the largest integer such that is a factor. Which, if any, of the eigenvalues you found above have algebraic multiplicity greater than ?   "
},
{
  "id": "EigenvaluesEigenvectors-11",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-11",
  "type": "Investigation",
  "number": "2.7.5",
  "title": "",
  "body": "  Prove that a nonzero vector, , is an eigenvector of with eigenvalue if and only if is in the null space of .     If is an eigenvector of with eigenvalue , then . By algebra, this means that , and hence . Thus, is in the null space of .   If , then . Hence, , or . Thus, is an eigenvector of with eigenvalue .   "
},
{
  "id": "EigenvaluesEigenvectors-12",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-12",
  "type": "Investigation",
  "number": "2.7.6",
  "title": "",
  "body": "  Prove that if is an eigenvector of , then is also an eigenvector of (when ).    Since is an eigenvector of , there is a scalar such that . By properties of matrix multiplication, we thus have . As , this shows that is an eigenvector with the same eigenvalue.   "
},
{
  "id": "EigenvaluesEigenvectors-13",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-13",
  "type": "Investigation",
  "number": "2.7.7",
  "title": "",
  "body": "  Prove that if and are eigenvectors of with the same eigenvalue, then is also an eigenvector of . What is the eigenvalue of ?    Let be the associated eigenvalue. We have that and . Thus, we have . Therefore, is an eigenvector with the same eigenvalue.   "
},
{
  "id": "EigenvaluesEigenvectors-14",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-14",
  "type": "Definition",
  "number": "2.7.3",
  "title": "",
  "body": "  If is an eigenvalue of , then the eigenspace of , , is the set of vectors such that .   "
},
{
  "id": "EigenvaluesEigenvectors-15",
  "level": "2",
  "url": "EigenvaluesEigenvectors.html#EigenvaluesEigenvectors-15",
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
  "id": "DiscreteDS",
  "level": "1",
  "url": "DiscreteDS.html",
  "type": "Section",
  "number": "3.1",
  "title": "Discrete Dynamical Systems",
  "body": " Discrete Dynamical Systems   A dynamical system is a pair where is the set of states a system can be in and is a rule for how the system evolves or changes. This can feel like a really abstract and general statement, so let's look at some real life examples and some simple math examples that we can easily work with.   Let our state space be the set of all possible collections of position, velocities, and times of the sun and nine planets (Pluto is still a planet to me...). You might store each planet's position, velocity, and time as a vector then we would say that the ten vectors are the current state of the system and the rule for evolution would be the the force of gravity. In this way, each state leads to the next by following the dynamical rule.  The field of dynamical systems would study questions like 1)if this system always has a solution, 2)what properties solutions typically have, or 3) what is the long term behavior of solution? Another important part of the system above would be an initial condition, or the state of the system at beginning.  You often label this as time zero and state the values for the different planets' position and velocity at time zero. This leads to even more questions like \"If the initial configuration of planets was a bit different, would the long term behavior still be the same?\" This example is a continuous dynamical system since we look how the states of the system evolve in terms of a continuous variable (time in this case). This particular system is quite complicated and has been a focus of science, philosophy, and religion for quite some time.    Let us look at a much simplier example and do some calculations. Let our dynamical system be . This means that our state space is the set of real numbers and our current state evolves according to the rule .  Notice here that we can only apply our rule (apply the function ) in discrete amounts. So if we start with the initial value , then our next state will be . Our study really becomes about the sequence . This is called a discrete dynamical system because we can measure the state of the system (and it's evolution) only at discrete values.  Take a few minutes to find the solution sequence for . Try to write out what the long term behavior of this solution sequence is. Will all initial values have this same long term behavior? How many different long term behaviors can you find?    You may think a game like chess is also a dynamical system but that is not the case. You could consider all the different ways that pieces could be configured on the board as a state space for the game, there is no rule for how the configuration must change. This is what makes chess an interesting game.     Predator-Prey Systems  In this section we will look at a basic type of two dimensional discrete dynamical system that models the populations of a predator and a prey, which we will call foxes ( ) and rabbits, . We will construct a discrete dynamcial system that describe the amount of foxes and rabbits in the next year based on the amount of foxes and rabbits in the current year. In other words,    Let's figure out reasonable functions for and under the following ideas:  If there are no rabbits, then some of the foxes will die in the next year (starvation)  If there are rabbits, then the fox populations grows in the next year based on the interaction of the species (predation)  If there are no foxes, the rabbit population will grow by some proportion in the next year  If there are foxes, then the rabbit population will decrease based on the interaction of the species (being eaten)  Functions that fit these simple rules might be of the form  So choosing coefficients would give the relative weight of each of these rules on the change in each population. For instance,  Note here that we can use linear algebra to analyse this type of problem because our sequence now looks like where . In other words, the solution to this two dimensional, discrete dynamical system is of the form .    Difference Equations and Linear Algebra  A dynamical system with an n-dimensional vector for the state and dynamical rule given by is called a linear difference equation .  Let examine how eigenvalues and eigenvectors could help us easily understand the long term behavior of a linear difference equation. In particular, we will assume that we have a difference equation given by a by matrix and that we can find a set of linearly independent eigenvectors, , with eigenvalues . This is actually a really big assumption and is NOT true in general, so the discussion below will not be enough to analyze the general case. Because we have a set of linearly independent vectors from , we can put them as columns of a matrix and apply the Invertible Matrix Theorem to demonstrate that this set will also span all of . This means that no matter what initial values we take for our system, we can write that initial value as a linear combination of the set . In other words, there is a solution to the vector equation for every . Because these vectors in our spanning set are not just some vectors, but rather are eigenvectors of , we will be able to write out the rest of the sequence and understand the long term behavior regardless of initial values of our system.  Looking at we get the following:  Since each of the are eigenvectors, . Thus,   In this same way, we can look at the -th iteration of our system and get    Notice that the only thing changing under iteration is the power of the eigenvalue. Once we figure out how much of our inital value vector is in the direction of each of our eigenvectors, then that amount does NOT change during the evolution of our system! The only thing changing is that each eigenvector direction is getting stretched or shrunk by the eigenvalue at each step. So when will these different parts grow or shrink?    In this activity, we want to go through all of the parts of the argument above and its geometric meaning for the difference equation described by .   What are the eigenvalues and eigenvectors of ?  How can we write the vector as a linear combination of the eigenvectors of ?  How can we write the vector as a linear combination of the eigenvectors of ?  Show that if , then .  What is the long term behavior of the solution with initial value ?     In this activity, we want to go through all of the parts of the argument above and its geometric meaning for the difference equation described by .   What are the eigenvalues and eigenvectors of ?  How can we write the vector as a linear combination of the eigenvectors of ?  Show that if , then .  What is the long term behavior of the solution with initial value ?     Types of Solutions to Two Dimensional Linear Difference Equations   What are the fixed points of the difference equation where .    What are the fixed points of the difference equation where .   Since the long term behavior of these type of systems depends on the eigenvalues, we wil try to talk about all of the possible cases of eigenvalues and the corresponding behaviors. Remember that we need to pay attention to how changes as increases.  and  and  and  and  and  and  and  What other possibilities are there?      Use your new found appreaciation of eigenvalues and eigenvectors to describe the general solution and behavior of solutions to the difference equation with each of the following .                             An attractor or attracting fixed point is a fixed point of a dynamical system where all nearby points converge to the fixed point. These are also called sinks .  A repeller or repelling fixed point is a fixed point of a dynamical system where all nearby points move away from the fixed point. These are also called sources .  A saddle fixed point is a fixed point of a dynamical system where some nearby points converge to the fixed point and other nearby points move away from the fixed point.    If we consider the dynamical system given by , what are the fixed points of this system and what behaviors do they exhibit?     Use your work from the earlier activity to describe the fixed points and thier behavior for the difference equation with each of the following .                             "
},
{
  "id": "DiscreteDS-2-1",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dynamical system "
},
{
  "id": "DiscreteDS-2-2",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-2-2",
  "type": "Example",
  "number": "3.1.1",
  "title": "",
  "body": " Let our state space be the set of all possible collections of position, velocities, and times of the sun and nine planets (Pluto is still a planet to me...). You might store each planet's position, velocity, and time as a vector then we would say that the ten vectors are the current state of the system and the rule for evolution would be the the force of gravity. In this way, each state leads to the next by following the dynamical rule.  The field of dynamical systems would study questions like 1)if this system always has a solution, 2)what properties solutions typically have, or 3) what is the long term behavior of solution? Another important part of the system above would be an initial condition, or the state of the system at beginning.  You often label this as time zero and state the values for the different planets' position and velocity at time zero. This leads to even more questions like \"If the initial configuration of planets was a bit different, would the long term behavior still be the same?\" This example is a continuous dynamical system since we look how the states of the system evolve in terms of a continuous variable (time in this case). This particular system is quite complicated and has been a focus of science, philosophy, and religion for quite some time.  "
},
{
  "id": "DiscreteDS-2-3",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-2-3",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": " Let us look at a much simplier example and do some calculations. Let our dynamical system be . This means that our state space is the set of real numbers and our current state evolves according to the rule .  Notice here that we can only apply our rule (apply the function ) in discrete amounts. So if we start with the initial value , then our next state will be . Our study really becomes about the sequence . This is called a discrete dynamical system because we can measure the state of the system (and it's evolution) only at discrete values.  Take a few minutes to find the solution sequence for . Try to write out what the long term behavior of this solution sequence is. Will all initial values have this same long term behavior? How many different long term behaviors can you find?  "
},
{
  "id": "DiscreteDS-2-4",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-2-4",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": " You may think a game like chess is also a dynamical system but that is not the case. You could consider all the different ways that pieces could be configured on the board as a state space for the game, there is no rule for how the configuration must change. This is what makes chess an interesting game.  "
},
{
  "id": "DiscreteDS-4-2",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "difference equation "
},
{
  "id": "DiscreteDS-4-7",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-4-7",
  "type": "Activity",
  "number": "3.1.1",
  "title": "",
  "body": "  In this activity, we want to go through all of the parts of the argument above and its geometric meaning for the difference equation described by .   What are the eigenvalues and eigenvectors of ?  How can we write the vector as a linear combination of the eigenvectors of ?  How can we write the vector as a linear combination of the eigenvectors of ?  Show that if , then .  What is the long term behavior of the solution with initial value ?  "
},
{
  "id": "DiscreteDS-4-8",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-4-8",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": "  In this activity, we want to go through all of the parts of the argument above and its geometric meaning for the difference equation described by .   What are the eigenvalues and eigenvectors of ?  How can we write the vector as a linear combination of the eigenvectors of ?  Show that if , then .  What is the long term behavior of the solution with initial value ?  "
},
{
  "id": "DiscreteDS-5-2",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-5-2",
  "type": "Question",
  "number": "3.1.4",
  "title": "",
  "body": " What are the fixed points of the difference equation where .  "
},
{
  "id": "DiscreteDS-5-3",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-5-3",
  "type": "Question",
  "number": "3.1.5",
  "title": "",
  "body": " What are the fixed points of the difference equation where .  "
},
{
  "id": "DiscreteDS-5-5",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-5-5",
  "type": "Activity",
  "number": "3.1.3",
  "title": "",
  "body": "  Use your new found appreaciation of eigenvalues and eigenvectors to describe the general solution and behavior of solutions to the difference equation with each of the following .                           "
},
{
  "id": "DiscreteDS-5-6",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-5-6",
  "type": "Definition",
  "number": "3.1.6",
  "title": "",
  "body": " An attractor or attracting fixed point is a fixed point of a dynamical system where all nearby points converge to the fixed point. These are also called sinks .  A repeller or repelling fixed point is a fixed point of a dynamical system where all nearby points move away from the fixed point. These are also called sources .  A saddle fixed point is a fixed point of a dynamical system where some nearby points converge to the fixed point and other nearby points move away from the fixed point.  "
},
{
  "id": "DiscreteDS-5-7",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-5-7",
  "type": "Question",
  "number": "3.1.7",
  "title": "",
  "body": " If we consider the dynamical system given by , what are the fixed points of this system and what behaviors do they exhibit?  "
},
{
  "id": "DiscreteDS-5-8",
  "level": "2",
  "url": "DiscreteDS.html#DiscreteDS-5-8",
  "type": "Activity",
  "number": "3.1.4",
  "title": "",
  "body": "  Use your work from the earlier activity to describe the fixed points and thier behavior for the difference equation with each of the following .                           "
},
{
  "id": "ChangeofCoordinates",
  "level": "1",
  "url": "ChangeofCoordinates.html",
  "type": "Section",
  "number": "3.2",
  "title": "Change of Coordinates",
  "body": " Change of Coordinates   In the previous section, we saw how advantageous our use of eigenvalues and eigenvectors was to describing the long term behavior of the linear discrete dynamical systems. We will take a few minutes here to set up the algebra of what was going on more fully.    Same Eigenvalues, Different Eigenvectors   Find the eigenvalues for the matrices and . For each of the eigenvalues of these matrices, you need to find an eigenvector.  Hopefully you noticed that these matrices have the same eigenvalues but different eigenvectors. Let be the eigenvector of corresponding to and be the eigenvector of corresponding to . Let be the eigenvector of corresponding to and be the eigenvector of corresponding to . Find a matrix such that and .  Find a matrix such that and .  Compute the matrix .  Explain what just happened with matrix product ...    Let's try to reverse engineer what just happened in the previous activity. Can we come up with the matrix that has eigenvalues and with eigenvectors of and ? Think about what parts of the corresponding matrix parts are given by the information above. Once you have guessed at how to write the corresponding matrix. Test your answer by checking what the eigenvalues and eigenvectors are.    "
},
{
  "id": "ChangeofCoordinates-3-2",
  "level": "2",
  "url": "ChangeofCoordinates.html#ChangeofCoordinates-3-2",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": " Find the eigenvalues for the matrices and . For each of the eigenvalues of these matrices, you need to find an eigenvector.  Hopefully you noticed that these matrices have the same eigenvalues but different eigenvectors. Let be the eigenvector of corresponding to and be the eigenvector of corresponding to . Let be the eigenvector of corresponding to and be the eigenvector of corresponding to . Find a matrix such that and .  Find a matrix such that and .  Compute the matrix .  Explain what just happened with matrix product ...  "
},
{
  "id": "ChangeofCoordinates-3-3",
  "level": "2",
  "url": "ChangeofCoordinates.html#ChangeofCoordinates-3-3",
  "type": "Activity",
  "number": "3.2.2",
  "title": "",
  "body": " Let's try to reverse engineer what just happened in the previous activity. Can we come up with the matrix that has eigenvalues and with eigenvectors of and ? Think about what parts of the corresponding matrix parts are given by the information above. Once you have guessed at how to write the corresponding matrix. Test your answer by checking what the eigenvalues and eigenvectors are.  "
},
{
  "id": "ContinuousDynamicalSystems",
  "level": "1",
  "url": "ContinuousDynamicalSystems.html",
  "type": "Section",
  "number": "3.3",
  "title": "Continuous Dynamical Systems",
  "body": " Continuous Dynamical Systems   A dynamical system is a pair where is the set of states a system can be in and is a rule for how the system evolves or changes. We will look at some dynamical systems where the rule of evolution will describe how the state of the system changes in terms of a continuous parameter. Let's look at some examples.   When examining an electrical circuit with a resistor, capacitor, and an inductor, it is useful to look at how the current (a measure of the flow of electricity) changes as a function of time. The dynamical system in this case would consist of where is the set of possible functions with input and is the rule given by the differential equation . In this equation the current is and the constants , , and are the resistance, inductance, and capacitance of the individual components of the circuit.    If you are looking at the position of an object moving under the force of gravity and under air-resistence, your dynamical system would consist of where  is the set of vectors of the form where are continuous functions of  is the rule of evolution given by      Wave Equation  Many different physical phenomena satisfy a very famous differential equation: The state of the system is given by some function that may vary in both space and time coordinates. This kind of system is called a partial differential equation since there is not A derivative for a multivariable function and the change in our system depends on the various partial derivatives of our function.    Heat Equation  Many different physical phenomena satisfy another very famous differential equation: The state of the system is given by some function that may vary in both space and time coordinates. This is another partial differential equation.      For this activity, we want to look at the following 2D continuous dynamical system.     What would a solution look like to this system?  Give a solution to this system.  Give all possible solutions to this system.  What is the solution with and ?   None of the stuff in the previous problem seems like linear algebra, so why are we doing this stuff? The answer is that we can expand our notion of what a vector is and use the idea that we would like to express solutions to these systems as linear combinations of our nice solutions.   Linear Systems of Ordinary Differential Equations  In this subsection, we will look at systems of Linear ODEs of the form: with initial values given by .  Notice that this system has the following properties:  no forcing term (the right hand side of the system does not explicitly depend on )  constant coefficients  linear solutions (solutions are linear combinations of each other)    If you look around at other books and online resources, you will see that the solution to the system given by where , will be of the form: . The term is called the matrix exponential of .  The solution to a linear continuous dynamical system involves evaluating a matrix exponential. This is not a straightforward task and the evaluation algorithm is highly suspect in many situations. In fact, one of the most cited papers in all of applied mathematics is written by Van Loan and Moler (founder of Matlab) titled 19 Dubious Ways to Compute the Exponential of a Matrix written in 1978. This paper and idea was so important in computational science and applied mathematics that it was revised by the same authors and updated 25 years later titled appropriately 19 Dubious Ways to Compute the Exponential of a Matrix, Twenty-Five Years Later . In short, the papers primary contribution is to show that there is no accepted way to evaluate a matrix exponential for all matrices and the algorithm choice is matrix dependent. Dr. Beauregard's research takes a particular interest in symplectic approximations as they preserve fundamental physical quantities.  Let's start with the same assumption we did for discrete dynamical systems: We will assume that we have continuous dynamical system given by a by matrix (with rule given by ) and that we can find a set of linearly independent eigenvectors of , , with eigenvalues . Further, let's define two matrices and . From our work on change of coordinates, you should recognize that . So, where . We can use our knowledge of power series to write exponentials using Notice that all this requires to apply to a matrix is that powers of the matrices have to make sense and the scalar multiplication by also needs to make sense. So we can define the matrix exponential as Note here that will be a vector (by matrix vector product) and thus our solution to is given by .  This looks a bit like our solutions to the discrete dynamical systems but still different. The vector is a solution to what matrix equation? If , then is the solution to !!! You should recognize that is the vector of coefficients for the vector equation ! The vector comes from writing the initial condition of our system as a linear combination of the eigenvectors of !  Our solutions to are of the form Look at how much of this is determined by the algebra of problems you already know how to do. Which parts of this will determine the long term behavior of solutions? When will you have fixed point(s)? When will the fixed point(s) be attractors? repellors? saddles?   Let . As we have seen in our previous work, has eigenvalues of and with a choice of eigenvectors given by and . The system of differential equations that corresponds to this matrix is given by:   Using our tools from earlier, we can see that the solutions of this system can be written in the vector form   If we wanted to find the particular solution with , then we need to solve , which has a solution of and . So the particular solution with is .    To arouse a deeper interest into the study of linear systems, let us borrow from a classic example of relationships, first presented by Steven Strogatz in 1988 and then further illustrated by J.C. Sprott in 2004.  Now we know the story of Romeo and Juliet. In our situation, Romeo is desperately in love with Juliet, but Juliet is more fickle than what Shakespeare had in mind. In fact, the more Romeo loves Juliet, the more Juliet wants to run away and hide. This discourages Romeo and he starts to love Juliet less, strangely this is exactly the moment that Juliet finds Romeo more attractive and she begins to love him. On the other hand, Romeo notices again that Juliet is warming up to Romeo and he begins to warm up to her as well. Will the eager beaver (Romeo) ever find true love with the ever fickle and cautious lover (Juliet)?  Let and be the love (or hate, when negative) that each person has for each other, respectively, at time . Let . The love\/hate relationship is governed by the dynamical system: Consider the case where , and answer the following:  Determine the eigenvalues and eigenvectors for the coefficient matrix.  Write down the general solution using the eigenvalues and eigenvectors.  Use Euler's formula to simplify the result completely to determine the real-valued solution to the position function.  Plot and over time. Plot versus . Contrast this to a phase portrait.  How does the situation change if ? What of ?      For each of the matrices below, state the general solution for the system of differential equations given by and find the particular solution with            Converting Higher Order DEs to Systems  Since we have such a nice description and clean algebra to solve systems of differential equations of the form , it is common to write other types of questions in terms of a system of first order differential equations. For example, if we consider the damped harmonic oscillator (an object moving on a spring with friction), then the system follows the differential equation where is the function of time that measures the position of the object (as measured from the rest length of the spring), is the mass of the object, is the spring constant, and is the coefficent of friction for the object. This is called a second order differential equation because it involves a second derivative of the objective function, but we can rewrite this as first order differential equation of the vector . In particular, Which takes the form for . Thus by analyzing the second component of our solution, , we can give the solution to    If we consider the second-order, ordinary differential equation given by then we are trying to find a scalar function that satisfies the second order equation. The corresponding first-order, vector differential equation will be The corresponding matrix ( ) has eigenvalues of which will have eigenvectors of . So the general solution to our vector equation will be The solution to will be the second component of our vector solution, namely . You can write this a little more simply because you can absorb the constants into the and to get .  What is the long term behavior of these solutions? Does the behavior depend on and ?   asdf "
},
{
  "id": "ContinuousDynamicalSystems-2-1",
  "level": "2",
  "url": "ContinuousDynamicalSystems.html#ContinuousDynamicalSystems-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dynamical system "
},
{
  "id": "ContinuousDynamicalSystems-2-2",
  "level": "2",
  "url": "ContinuousDynamicalSystems.html#ContinuousDynamicalSystems-2-2",
  "type": "Example",
  "number": "3.3.1",
  "title": "",
  "body": " When examining an electrical circuit with a resistor, capacitor, and an inductor, it is useful to look at how the current (a measure of the flow of electricity) changes as a function of time. The dynamical system in this case would consist of where is the set of possible functions with input and is the rule given by the differential equation . In this equation the current is and the constants , , and are the resistance, inductance, and capacitance of the individual components of the circuit.  "
},
{
  "id": "ContinuousDynamicalSystems-2-3",
  "level": "2",
  "url": "ContinuousDynamicalSystems.html#ContinuousDynamicalSystems-2-3",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": " If you are looking at the position of an object moving under the force of gravity and under air-resistence, your dynamical system would consist of where  is the set of vectors of the form where are continuous functions of  is the rule of evolution given by    "
},
{
  "id": "ContinuousDynamicalSystems-2-4",
  "level": "2",
  "url": "ContinuousDynamicalSystems.html#ContinuousDynamicalSystems-2-4",
  "type": "Example",
  "number": "3.3.3",
  "title": "Wave Equation.",
  "body": " Wave Equation  Many different physical phenomena satisfy a very famous differential equation: The state of the system is given by some function that may vary in both space and time coordinates. This kind of system is called a partial differential equation since there is not A derivative for a multivariable function and the change in our system depends on the various partial derivatives of our function.  "
},
{
  "id": "ContinuousDynamicalSystems-2-5",
  "level": "2",
  "url": "ContinuousDynamicalSystems.html#ContinuousDynamicalSystems-2-5",
  "type": "Example",
  "number": "3.3.4",
  "title": "Heat Equation.",
  "body": " Heat Equation  Many different physical phenomena satisfy another very famous differential equation: The state of the system is given by some function that may vary in both space and time coordinates. This is another partial differential equation.  "
},
{
  "id": "ContinuousDynamicalSystems-3",
  "level": "2",
  "url": "ContinuousDynamicalSystems.html#ContinuousDynamicalSystems-3",
  "type": "Activity",
  "number": "3.3.1",
  "title": "",
  "body": "  For this activity, we want to look at the following 2D continuous dynamical system.     What would a solution look like to this system?  Give a solution to this system.  Give all possible solutions to this system.  What is the solution with and ?  "
},
{
  "id": "ContinuousDynamicalSystems-5-9",
  "level": "2",
  "url": "ContinuousDynamicalSystems.html#ContinuousDynamicalSystems-5-9",
  "type": "Example",
  "number": "3.3.5",
  "title": "",
  "body": " Let . As we have seen in our previous work, has eigenvalues of and with a choice of eigenvectors given by and . The system of differential equations that corresponds to this matrix is given by:   Using our tools from earlier, we can see that the solutions of this system can be written in the vector form   If we wanted to find the particular solution with , then we need to solve , which has a solution of and . So the particular solution with is .  "
},
{
  "id": "ContinuousDynamicalSystems-5-10",
  "level": "2",
  "url": "ContinuousDynamicalSystems.html#ContinuousDynamicalSystems-5-10",
  "type": "Activity",
  "number": "3.3.2",
  "title": "",
  "body": " To arouse a deeper interest into the study of linear systems, let us borrow from a classic example of relationships, first presented by Steven Strogatz in 1988 and then further illustrated by J.C. Sprott in 2004.  Now we know the story of Romeo and Juliet. In our situation, Romeo is desperately in love with Juliet, but Juliet is more fickle than what Shakespeare had in mind. In fact, the more Romeo loves Juliet, the more Juliet wants to run away and hide. This discourages Romeo and he starts to love Juliet less, strangely this is exactly the moment that Juliet finds Romeo more attractive and she begins to love him. On the other hand, Romeo notices again that Juliet is warming up to Romeo and he begins to warm up to her as well. Will the eager beaver (Romeo) ever find true love with the ever fickle and cautious lover (Juliet)?  Let and be the love (or hate, when negative) that each person has for each other, respectively, at time . Let . The love\/hate relationship is governed by the dynamical system: Consider the case where , and answer the following:  Determine the eigenvalues and eigenvectors for the coefficient matrix.  Write down the general solution using the eigenvalues and eigenvectors.  Use Euler's formula to simplify the result completely to determine the real-valued solution to the position function.  Plot and over time. Plot versus . Contrast this to a phase portrait.  How does the situation change if ? What of ?    "
},
{
  "id": "ContinuousDynamicalSystems-5-11",
  "level": "2",
  "url": "ContinuousDynamicalSystems.html#ContinuousDynamicalSystems-5-11",
  "type": "Activity",
  "number": "3.3.3",
  "title": "",
  "body": " For each of the matrices below, state the general solution for the system of differential equations given by and find the particular solution with         "
},
{
  "id": "ContinuousDynamicalSystems-6-3",
  "level": "2",
  "url": "ContinuousDynamicalSystems.html#ContinuousDynamicalSystems-6-3",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": " If we consider the second-order, ordinary differential equation given by then we are trying to find a scalar function that satisfies the second order equation. The corresponding first-order, vector differential equation will be The corresponding matrix ( ) has eigenvalues of which will have eigenvectors of . So the general solution to our vector equation will be The solution to will be the second component of our vector solution, namely . You can write this a little more simply because you can absorb the constants into the and to get .  What is the long term behavior of these solutions? Does the behavior depend on and ?  "
},
{
  "id": "Graphics",
  "level": "1",
  "url": "Graphics.html",
  "type": "Section",
  "number": "3.4",
  "title": "Graphics and Linear Algebra",
  "body": " Graphics and Linear Algebra  Graphics and computer-based image generation are a large class of problems that utilize a lot of the tools we have discussed in this course. We will be (over)simplifying many of these ideas but you can understand the basics now and learn the linear algebra tools about the more sophisticated approaches needed to work on these ideas later.   Example 1: Transforming Basic 2D Images It is vital to know a little about how images are created\/stored. The long and the short of it is that the different image file types correspond to a different method of storing data about how to create the image. This is by no means a comprehensive list of relevant ideas but enough to get you to see how broadly applicable the elements we have talked about are.  SVG\/Scalable Vector Graphics : Instead of pixel based descriptions of an image, SVG files store the image with curves, lines, and other mathematical graphs relative to a grid.  PS\/Postscript: is simplified instructions on how to create a figure  Fonts: instructions on how to create the shape and width of each part of a character. This is like parameterizations of the curves to make the character along with an idea of width as you move along the curve of the character.  Fourier Transform of an image: Images might not be stored as an array of colors but might be more efficiently stored as the frequencies involved in the wave that describes how the intensity changes across the elements in an array.     Example 2: Transforming 2D graphics to 3D space\/Textures and Lighting Think about you would use the instructions for a font on a curved object in 3D. This amounts to transforming or thinking about how the lighting\/reflections would look on a curved object in 3D. Key to this is translated 2D information like font definitions to an element in 3D or looking at vector transformations relative to a camera location\/orientation.   Example 3: Medical imaging or inverse image problems in geology Think about trying to create an image of the materials inside a patient or of the different geologic structures like water or crude oil inside some rock structure. These images are created by measuring signal strengths that correspond to density changes along a path then reorienting and getting data on a new set of points. The big idea is to create an image of the 3D structure from these linear measurements. Rotation transformations and projections are key tools here and create a host of other problems when you need to select an slice of the 3D model to display on a 2D computer screen (for diagnostic purposes). In particular, it is a difficult question to figure out how best to fill in between measurements and retain accuracy. AI tools for sharpening pictures are an example of another linear algebra application of how to interpolate data related to these imaging problems. Sonar data is the opposite from a perspective approach. Your signal and detector are not moving; instead you are looking at your surroundings with respect to relative orientation.    We will be looking at some simple examples of transformations in 2 and 3 dimensions that can give you an idea of how different kinds of transformations can be built. We will look at what the smiley face image below would look like under the following transformations. As a point of information, there are about 230 points involved in creating this image, so you would need to tranform each of these 230 poins individiaully to create the new image.   The base image for transformations in      Expansion: What would the smile image look like under the transformation given by ?        Expansion: What would the smile image look like under the transformation given by ?        Contraction: What would the smile image look like under the transformation given by ?        Rotation: What would the smile image look like under the transformation given by ?        Rotation: What would the smile image look like under the transformation given by ?      In general, the rotation transformation by is given by .    Shear: What would the smile image look like under the transformation given by ?        Shear: What would the smile image look like under the transformation given by ?        Projection: What would the smile image look like under the transformation given by ?        Reflection: What would the smile image look like under the transformation given by ?          Create a transformation that would expand by a factor of 2 in the direction?    Create a transformation that would reflect the image across the line y=-x.    Create a transformation that shears by 1\/2 in the direction .      We would like to find a transformation that will map our smiley face image onto the plane given by .    In order to make this transformation, we need to think about where and will go under this transformation. We will need to find a 3 by 2 matrix such and .   The smiley face in space     Show how to take a x,y problem and project onto the plane x+2y+3z=0 Remember that you want generalizable (no exceptions), algorithmic (easily stated, repeatable rules) ways to change location data. Remember that we can describe a vector with points of location data, so we can transform vectors with these same tools.  "
},
{
  "id": "graphics_transformations",
  "level": "2",
  "url": "Graphics.html#graphics_transformations",
  "type": "Activity",
  "number": "3.4.1",
  "title": "",
  "body": "  We will be looking at some simple examples of transformations in 2 and 3 dimensions that can give you an idea of how different kinds of transformations can be built. We will look at what the smiley face image below would look like under the following transformations. As a point of information, there are about 230 points involved in creating this image, so you would need to tranform each of these 230 poins individiaully to create the new image.   The base image for transformations in      Expansion: What would the smile image look like under the transformation given by ?        Expansion: What would the smile image look like under the transformation given by ?        Contraction: What would the smile image look like under the transformation given by ?        Rotation: What would the smile image look like under the transformation given by ?        Rotation: What would the smile image look like under the transformation given by ?      In general, the rotation transformation by is given by .    Shear: What would the smile image look like under the transformation given by ?        Shear: What would the smile image look like under the transformation given by ?        Projection: What would the smile image look like under the transformation given by ?        Reflection: What would the smile image look like under the transformation given by ?       "
},
{
  "id": "Graphics-7",
  "level": "2",
  "url": "Graphics.html#Graphics-7",
  "type": "Activity",
  "number": "3.4.2",
  "title": "",
  "body": "  Create a transformation that would expand by a factor of 2 in the direction?    Create a transformation that would reflect the image across the line y=-x.    Create a transformation that shears by 1\/2 in the direction .   "
},
{
  "id": "Graphics-8",
  "level": "2",
  "url": "Graphics.html#Graphics-8",
  "type": "Activity",
  "number": "3.4.3",
  "title": "",
  "body": "  We would like to find a transformation that will map our smiley face image onto the plane given by .    In order to make this transformation, we need to think about where and will go under this transformation. We will need to find a 3 by 2 matrix such and .   The smiley face in space     "
},
{
  "id": "Operators",
  "level": "1",
  "url": "Operators.html",
  "type": "Section",
  "number": "3.5",
  "title": "Operators",
  "body": " Operators   In our work for continuous dynamical systems and inner products, we have started to see how scalar valued functions can act just like the vectors from . For the rest of our course, we will think about a vector space of functions (and will give a precise definition of vector space a little later). Let's look at some examples of these kinds of spaces.   Let be the set of all -th degree polynomials. In other words, . Notice that linear combinations of -th degree polynomials will give you other -th degree polynomials. A set like will span .    Let be the set of all polynomials. Notice that linear combinations of polynomials will give you other polynomials. A set like will span . In fact, there is no finite set you can give that will span , which means this space is inifinite dimensional.    Let be the set of smooth functions with domain of . A function is smooth if all of its derivatives are continuous. This set contains more than and would include functions like .  Let be the set of functions with domain and whose first derivatives are continuous. The set would be the set of continuous functions on (and includes functions that are not necessarily differentiable).   All of these examples work on the idea that if we take functions from these sets, , then linear combinations and vector equations make sense ( ). What would the zero vector look like for these kinds of vectors\/functions?   So what would the analog be of matrices with vector spaces of functions?     Linear Operators  Recall how we defined the Matrix-Vector Product in and the associated transformation defined by a matrix .  A linear operator is linear transformation between vector spaces. A linear transformation is a map that respects linear combinations. In other words, if is a linear transformation, then .   Let's consider the operator from the space to . In first semester calculus, you saw how you could factor out constant coefficents from derivatives and split up derivatives into different terms in a sum ( ). The other thing to note here is that this operator takes differentiable functions to continuous functions (the domain and range of this function are a bit different).  We can also define the integral operator as going from to by considering . Integration is another operation that will perserve linear combinations.  Let's consider the mapping from to where . You should take couple of minutes to show that . This shows that the set of solutions to is a vector space. This kind of idea shows how we can find a set with a couple of different solutions that will span the set of all solutions to a differential equation.   Linear operators (or simply operators) will be the analogs of matrices, so as important and useful as eigenvalues\/eigenvectors have been for studying vectors from , what would it look like to find eigenvalues for a linear operator?   Let's look at , the derivative operator from to . What kinds of functions and scalars would satisfy ?  Let's look at , the integral operator from to . What kinds of functions and scalars would satisfy ?  Let's look at , the operator from to with . What kinds of functions and scalars would satisfy ?   As you saw in the previous activity, there are infinite number of eigenvalues for many of these differential operators. An eigenpair is a a eigenvalue and corresponding eigenfunction for a linear operator. For example is an example of an eigenpair for the derivative operator since . As With many problems related to physical situations there are often some boundary conditions (since we usually study different physical properties in a confined setting). Let's look at an example with a basic version of boundary conditions.    Boundary Value Problems   Let's consider smooth functions on the domain and define a linear operator such that with . Can you give an example of an eigenpair of this operator that also satisfies this boundary condition?  If you had two eigenfunctions, and , that satisfy your boundary conditions for the previous task, would also satisfy your constraint  If you had two eigenfunctions, and , that satisfy a boundary condition of , would also satisfy this new boundary condition?    "
},
{
  "id": "Operators-2-2",
  "level": "2",
  "url": "Operators.html#Operators-2-2",
  "type": "Example",
  "number": "3.5.1",
  "title": "",
  "body": " Let be the set of all -th degree polynomials. In other words, . Notice that linear combinations of -th degree polynomials will give you other -th degree polynomials. A set like will span .  "
},
{
  "id": "Operators-2-3",
  "level": "2",
  "url": "Operators.html#Operators-2-3",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": " Let be the set of all polynomials. Notice that linear combinations of polynomials will give you other polynomials. A set like will span . In fact, there is no finite set you can give that will span , which means this space is inifinite dimensional.  "
},
{
  "id": "Operators-2-4",
  "level": "2",
  "url": "Operators.html#Operators-2-4",
  "type": "Example",
  "number": "3.5.3",
  "title": "",
  "body": " Let be the set of smooth functions with domain of . A function is smooth if all of its derivatives are continuous. This set contains more than and would include functions like .  Let be the set of functions with domain and whose first derivatives are continuous. The set would be the set of continuous functions on (and includes functions that are not necessarily differentiable).  "
},
{
  "id": "Operators-2-6",
  "level": "2",
  "url": "Operators.html#Operators-2-6",
  "type": "Question",
  "number": "3.5.4",
  "title": "",
  "body": " So what would the analog be of matrices with vector spaces of functions?  "
},
{
  "id": "Operators-3-3",
  "level": "2",
  "url": "Operators.html#Operators-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear operator linear transformation "
},
{
  "id": "Operators-3-4",
  "level": "2",
  "url": "Operators.html#Operators-3-4",
  "type": "Example",
  "number": "3.5.5",
  "title": "",
  "body": " Let's consider the operator from the space to . In first semester calculus, you saw how you could factor out constant coefficents from derivatives and split up derivatives into different terms in a sum ( ). The other thing to note here is that this operator takes differentiable functions to continuous functions (the domain and range of this function are a bit different).  We can also define the integral operator as going from to by considering . Integration is another operation that will perserve linear combinations.  Let's consider the mapping from to where . You should take couple of minutes to show that . This shows that the set of solutions to is a vector space. This kind of idea shows how we can find a set with a couple of different solutions that will span the set of all solutions to a differential equation.  "
},
{
  "id": "Operators-3-6",
  "level": "2",
  "url": "Operators.html#Operators-3-6",
  "type": "Activity",
  "number": "3.5.1",
  "title": "",
  "body": " Let's look at , the derivative operator from to . What kinds of functions and scalars would satisfy ?  Let's look at , the integral operator from to . What kinds of functions and scalars would satisfy ?  Let's look at , the operator from to with . What kinds of functions and scalars would satisfy ?  "
},
{
  "id": "Operators-3-7",
  "level": "2",
  "url": "Operators.html#Operators-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eigenpair "
},
{
  "id": "Operators-4-2",
  "level": "2",
  "url": "Operators.html#Operators-4-2",
  "type": "Activity",
  "number": "3.5.2",
  "title": "",
  "body": " Let's consider smooth functions on the domain and define a linear operator such that with . Can you give an example of an eigenpair of this operator that also satisfies this boundary condition?  If you had two eigenfunctions, and , that satisfy your boundary conditions for the previous task, would also satisfy your constraint  If you had two eigenfunctions, and , that satisfy a boundary condition of , would also satisfy this new boundary condition?  "
},
{
  "id": "C3-7",
  "level": "1",
  "url": "C3-7.html",
  "type": "Section",
  "number": "3.6",
  "title": "Vector Spaces: The Big Idea",
  "body": " Vector Spaces: The Big Idea  Vector spaces are the primary objects that we study in linear algebra. Generally speaking, a vector space is a collection of objects (called vectors) that preserves linear relationships; that is, the objects work well under vector addition and scalar multiplication. As you will see shortly, vectors are not always going to be the column vectors we have seen so far or viewed geometrically as arrows from one point to another.    A vector space , , is a nonempty set of objects called vectors with two operations called addition and scalar multiplication such that the following hold for all and :  If , then .      There exists a vector such that .  For each , there is a vector such that .  If and , then .          You can refer to these properties as  closure of vector addition  commutativity of vector addition  associativity of vector addition  existence of the zero vector  existence of the additive inverse  closure of scalar multiplication  distributive property of scalar multiplication across vector addition  distributive property of scalar addition across scalar multiplication (of a vector)  associativity of scalar multiplication  existence of scalar multiplicative identity      This is the definition for a real vector space since the scalars come from , the real numbers. Sometimes it will be useful for us to consider complex vector spaces (scalars come from ), but unless otherwise stated, you should assume that you are working with a real vector space.  In order to gain an appreciation of definitions, use only the above definition to prove the following results:  The zero vector is unique. You can begin this by supposing that there exists some such that for every , then you need to show that must equal .  The additive inverse of a vector is unique.    The real numbers, , are a vector space since all of the above properties hold.    Real valued vectors, , are a vector space since all of the above properties hold when vector addition and scalar multiplication are done componentwise. We can think of the vectors in as a directed line segment (an arrow) or as a point in -dimensional space.   Show why , the set of vectors with integer components is not a vector space.  Is a real vector space? Why or why not?  Is a complex vector space? Why or why not?  The set of by matrices over the real numbers, or simply , is a vector space since all of the above properties hold when vector addition and scalar multiplication are done entry wise. The quotes are around vector in the previous sentence because you may not always think of matrices as being vectors but using the properties from , you can treat matrices as vectors in the general sense.  The set of polynomials (in variable ) of degree at most is denoted by .    Is ?    Is ?    Is ?    Write as a set using set builder notation. Be sure you have a statement that you can use to verify if an object is in your set or not.    Prove that is a real vector space.    The following sets are also vector spaces:  The set of all polynomials (in variable ) denoted .   , the set of functions from a set to the real numbers. We will take a closer look at this vector space in the next problem.   , the trivial vector space .     We are going to take a look at the vector space to get used to our more general way of thinking about vectors and vector spaces. You should think of the vector space as the set of functions with domain and codomain . In other words, we are looking at the set of functions that only use , , and as inputs and have outputs of real numbers.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.        Fill in the blank:   Fill in the blank:  Fill in the blank:      Does it make sense to add the inputs of these functions? Explain.    Does it make sense to add the outputs of these functions? Explain.    Let be the function that takes , , and to , , and respectively. Is ?    Describe the function . In other words, give the outputs for all possible inputs and write a sentence about how you built in terms of and .    Describe the function .    What function when added to will give ?    Can you write as a linear combination of the set ? Explain why or why not.    Can you write as a linear combination of the set ? Explain why or why not.      Write a sentence or two about what property makes a vector the zero vector for , called .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    "
},
{
  "id": "C3-7-3",
  "level": "2",
  "url": "C3-7.html#C3-7-3",
  "type": "Definition",
  "number": "3.6.1",
  "title": "",
  "body": "  A vector space , , is a nonempty set of objects called vectors with two operations called addition and scalar multiplication such that the following hold for all and :  If , then .      There exists a vector such that .  For each , there is a vector such that .  If and , then .          You can refer to these properties as  closure of vector addition  commutativity of vector addition  associativity of vector addition  existence of the zero vector  existence of the additive inverse  closure of scalar multiplication  distributive property of scalar multiplication across vector addition  distributive property of scalar addition across scalar multiplication (of a vector)  associativity of scalar multiplication  existence of scalar multiplicative identity     "
},
{
  "id": "C3-7-5",
  "level": "2",
  "url": "C3-7.html#C3-7-5",
  "type": "Investigation",
  "number": "3.6.1",
  "title": "",
  "body": "In order to gain an appreciation of definitions, use only the above definition to prove the following results:  The zero vector is unique. You can begin this by supposing that there exists some such that for every , then you need to show that must equal .  The additive inverse of a vector is unique.  "
},
{
  "id": "C3-7-6",
  "level": "2",
  "url": "C3-7.html#C3-7-6",
  "type": "Example",
  "number": "3.6.2",
  "title": "",
  "body": " The real numbers, , are a vector space since all of the above properties hold.  "
},
{
  "id": "C3-7-7",
  "level": "2",
  "url": "C3-7.html#C3-7-7",
  "type": "Example",
  "number": "3.6.3",
  "title": "",
  "body": " Real valued vectors, , are a vector space since all of the above properties hold when vector addition and scalar multiplication are done componentwise. We can think of the vectors in as a directed line segment (an arrow) or as a point in -dimensional space.  "
},
{
  "id": "C3-7-8",
  "level": "2",
  "url": "C3-7.html#C3-7-8",
  "type": "Investigation",
  "number": "3.6.2",
  "title": "",
  "body": "Show why , the set of vectors with integer components is not a vector space. "
},
{
  "id": "C3-7-9",
  "level": "2",
  "url": "C3-7.html#C3-7-9",
  "type": "Investigation",
  "number": "3.6.3",
  "title": "",
  "body": "Is a real vector space? Why or why not? "
},
{
  "id": "C3-7-10",
  "level": "2",
  "url": "C3-7.html#C3-7-10",
  "type": "Investigation",
  "number": "3.6.4",
  "title": "",
  "body": "Is a complex vector space? Why or why not? "
},
{
  "id": "C3-7-11",
  "level": "2",
  "url": "C3-7.html#C3-7-11",
  "type": "Example",
  "number": "3.6.4",
  "title": "",
  "body": "The set of by matrices over the real numbers, or simply , is a vector space since all of the above properties hold when vector addition and scalar multiplication are done entry wise. The quotes are around vector in the previous sentence because you may not always think of matrices as being vectors but using the properties from , you can treat matrices as vectors in the general sense. "
},
{
  "id": "vse",
  "level": "2",
  "url": "C3-7.html#vse",
  "type": "Investigation",
  "number": "3.6.5",
  "title": "",
  "body": "The set of polynomials (in variable ) of degree at most is denoted by .    Is ?    Is ?    Is ?    Write as a set using set builder notation. Be sure you have a statement that you can use to verify if an object is in your set or not.    Prove that is a real vector space.   "
},
{
  "id": "C3-7-13",
  "level": "2",
  "url": "C3-7.html#C3-7-13",
  "type": "Example",
  "number": "3.6.5",
  "title": "",
  "body": "The following sets are also vector spaces:  The set of all polynomials (in variable ) denoted .   , the set of functions from a set to the real numbers. We will take a closer look at this vector space in the next problem.   , the trivial vector space .  "
},
{
  "id": "C3-7-14",
  "level": "2",
  "url": "C3-7.html#C3-7-14",
  "type": "Investigation",
  "number": "3.6.6",
  "title": "",
  "body": "  We are going to take a look at the vector space to get used to our more general way of thinking about vectors and vector spaces. You should think of the vector space as the set of functions with domain and codomain . In other words, we are looking at the set of functions that only use , , and as inputs and have outputs of real numbers.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.        Fill in the blank:   Fill in the blank:  Fill in the blank:      Does it make sense to add the inputs of these functions? Explain.    Does it make sense to add the outputs of these functions? Explain.    Let be the function that takes , , and to , , and respectively. Is ?    Describe the function . In other words, give the outputs for all possible inputs and write a sentence about how you built in terms of and .    Describe the function .    What function when added to will give ?    Can you write as a linear combination of the set ? Explain why or why not.    Can you write as a linear combination of the set ? Explain why or why not.   "
},
{
  "id": "C3-7-15",
  "level": "2",
  "url": "C3-7.html#C3-7-15",
  "type": "Investigation",
  "number": "3.6.7",
  "title": "",
  "body": "  Write a sentence or two about what property makes a vector the zero vector for , called .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .   "
},
{
  "id": "C3-8",
  "level": "1",
  "url": "C3-8.html",
  "type": "Section",
  "number": "3.7",
  "title": "Subspaces",
  "body": " Subspaces  As shows, it can be very tedious to prove that a set is indeed a vector space. A subspace of a vector space is a subset that is itself a vector space. Since most of the properties of the vector spaces we look at get inherited from some larger vector space, it is often easier to show that a set is a vector space by showing it is a subspace of the appropriate parent vector space.    A subset of a vector space is a subspace if and only if the following are true:  The zero vector of is in ; .  H is closed under vector addition; if , then .  H is closed under scalar multiplication; if and , then .      We first assume that is a subspace of . Item (a) of the theorem follows from axiom 4 of being a vector space. Item (b) of the theorem follows from axiom 1 of being a vector space. Item (c) of the theorem follows from axiom 6 of being a vector space.  For the converse, we assume that and the three items of the theorem satement are satisfied. We must verify the 10 vector space axioms:  This follows from item (b) of the theorem statement.  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  This follows from item (a) of the theorem statement.  This requires proof. Since , item (c) of the theorem statement tells us that for all , . Thus, this axiom is verified.  This follows from item (c) of the theorem statement.  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .     This theorem is so useful because we can prove a set is a vector space by checking only three properties instead of the ten that are involved in the definition. The reason that we do not need to check these other properties is that by using this subspace, we already have proven the proper rules of arithmetic from the parent space. Additionally, since we are using the same rules for scalar multiplication and vector addition as the parent space, we must also have the same scalars as the parent space.  Use the preceding theorem to prove that is a subspace of .   Is a subspace of ? Why or why not?  Is a subspace of ? Why or why not?  Is the set of points on the plane given by a subspace of ? Why or why not?  Is the set of points on the plane given by a subspace of ? Why or why not?  Draw a plot of the points in given by . Is a subspace of ? Why or why not?  Is , the set of symmetric by matrices a subspace of ? Why or why not?  Prove or disprove: The set of odd functions on (i.e., those for which for every ) a subspace of .   The statement is true. We use Theorem 3.6 to prove this. First note that the function is the zero vector for this vector space, as for any function , . To see that is odd, we have . Now suppose that are odd functions. We have , verifying the second part of the theorem is satisfied. Finally, let . Now . Thus, the set of odd functions are a subspace of the vector space of functions from to .   If is a by matrix, the solution set to the homogeneous equation is a subspace of .  If and are subspaces of some vector space , then the set is a subspace of as well.  Prove or Disprove: the set of by matrices with at least one zero entry is a subspace of .  Prove or Disprove: the set of matrices of the form is a subspace of .  Prove or disprove: The set of quadratic polynomials of the form is a subspace of the vector space of polynomials.  "
},
{
  "id": "C3-8-2",
  "level": "2",
  "url": "C3-8.html#C3-8-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace "
},
{
  "id": "C3-8-3",
  "level": "2",
  "url": "C3-8.html#C3-8-3",
  "type": "Theorem",
  "number": "3.7.1",
  "title": "",
  "body": "  A subset of a vector space is a subspace if and only if the following are true:  The zero vector of is in ; .  H is closed under vector addition; if , then .  H is closed under scalar multiplication; if and , then .      We first assume that is a subspace of . Item (a) of the theorem follows from axiom 4 of being a vector space. Item (b) of the theorem follows from axiom 1 of being a vector space. Item (c) of the theorem follows from axiom 6 of being a vector space.  For the converse, we assume that and the three items of the theorem satement are satisfied. We must verify the 10 vector space axioms:  This follows from item (b) of the theorem statement.  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  This follows from item (a) of the theorem statement.  This requires proof. Since , item (c) of the theorem statement tells us that for all , . Thus, this axiom is verified.  This follows from item (c) of the theorem statement.  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .    "
},
{
  "id": "C3-8-5",
  "level": "2",
  "url": "C3-8.html#C3-8-5",
  "type": "Investigation",
  "number": "3.7.1",
  "title": "",
  "body": "Use the preceding theorem to prove that is a subspace of .  "
},
{
  "id": "C3-8-6",
  "level": "2",
  "url": "C3-8.html#C3-8-6",
  "type": "Investigation",
  "number": "3.7.2",
  "title": "",
  "body": "Is a subspace of ? Why or why not? "
},
{
  "id": "C3-8-7",
  "level": "2",
  "url": "C3-8.html#C3-8-7",
  "type": "Investigation",
  "number": "3.7.3",
  "title": "",
  "body": "Is a subspace of ? Why or why not? "
},
{
  "id": "C3-8-8",
  "level": "2",
  "url": "C3-8.html#C3-8-8",
  "type": "Investigation",
  "number": "3.7.4",
  "title": "",
  "body": "Is the set of points on the plane given by a subspace of ? Why or why not? "
},
{
  "id": "C3-8-9",
  "level": "2",
  "url": "C3-8.html#C3-8-9",
  "type": "Investigation",
  "number": "3.7.5",
  "title": "",
  "body": "Is the set of points on the plane given by a subspace of ? Why or why not? "
},
{
  "id": "C3-8-10",
  "level": "2",
  "url": "C3-8.html#C3-8-10",
  "type": "Investigation",
  "number": "3.7.6",
  "title": "",
  "body": "Draw a plot of the points in given by . Is a subspace of ? Why or why not? "
},
{
  "id": "C3-8-11",
  "level": "2",
  "url": "C3-8.html#C3-8-11",
  "type": "Investigation",
  "number": "3.7.7",
  "title": "",
  "body": "Is , the set of symmetric by matrices a subspace of ? Why or why not? "
},
{
  "id": "C3-8-12",
  "level": "2",
  "url": "C3-8.html#C3-8-12",
  "type": "Investigation",
  "number": "3.7.8",
  "title": "",
  "body": "Prove or disprove: The set of odd functions on (i.e., those for which for every ) a subspace of .   The statement is true. We use Theorem 3.6 to prove this. First note that the function is the zero vector for this vector space, as for any function , . To see that is odd, we have . Now suppose that are odd functions. We have , verifying the second part of the theorem is satisfied. Finally, let . Now . Thus, the set of odd functions are a subspace of the vector space of functions from to .  "
},
{
  "id": "C3-8-13",
  "level": "2",
  "url": "C3-8.html#C3-8-13",
  "type": "Theorem",
  "number": "3.7.2",
  "title": "",
  "body": "If is a by matrix, the solution set to the homogeneous equation is a subspace of . "
},
{
  "id": "C3-8-14",
  "level": "2",
  "url": "C3-8.html#C3-8-14",
  "type": "Theorem",
  "number": "3.7.3",
  "title": "",
  "body": "If and are subspaces of some vector space , then the set is a subspace of as well. "
},
{
  "id": "C3-8-15",
  "level": "2",
  "url": "C3-8.html#C3-8-15",
  "type": "Investigation",
  "number": "3.7.9",
  "title": "",
  "body": "Prove or Disprove: the set of by matrices with at least one zero entry is a subspace of . "
},
{
  "id": "C3-8-16",
  "level": "2",
  "url": "C3-8.html#C3-8-16",
  "type": "Investigation",
  "number": "3.7.10",
  "title": "",
  "body": "Prove or Disprove: the set of matrices of the form is a subspace of . "
},
{
  "id": "C3-8-17",
  "level": "2",
  "url": "C3-8.html#C3-8-17",
  "type": "Investigation",
  "number": "3.7.11",
  "title": "",
  "body": "Prove or disprove: The set of quadratic polynomials of the form is a subspace of the vector space of polynomials. "
},
{
  "id": "C3-9",
  "level": "1",
  "url": "C3-9.html",
  "type": "Section",
  "number": "3.8",
  "title": "Motivating Activity",
  "body": " Motivating Activity    Let's look at the vector as a vector in .   How much does move horizontally?  How much does move vertically?  Calculate the dot product of with . How does this relate to your previous answers?  Calculate the dot product of with . How does this relate to your previous answers?  How can you write as a linear combination of and ?  How much does move in the direction?  How much does move in the direction?  Calculate the dot product of with . How does this relate to your previous answers?  Calculate the dot product of with . How does this relate to your previous answers?  How can you write as a linear combination of and ?  How much does move in the direction?  How much does move in the direction?  Calculate the dot product of with . How does this relate to your previous answers?  Calculate the dot product of with . How does this relate to your previous answers?  How can you write as a linear combination of and ?  What is different about the different sets we considered different sets to span ? Be specific about what aspects will make answering the linear combination question easier to answer.   "
},
{
  "id": "C3-9-2",
  "level": "2",
  "url": "C3-9.html#C3-9-2",
  "type": "Activity",
  "number": "3.8.1",
  "title": "",
  "body": "  Let's look at the vector as a vector in .   How much does move horizontally?  How much does move vertically?  Calculate the dot product of with . How does this relate to your previous answers?  Calculate the dot product of with . How does this relate to your previous answers?  How can you write as a linear combination of and ?  How much does move in the direction?  How much does move in the direction?  Calculate the dot product of with . How does this relate to your previous answers?  Calculate the dot product of with . How does this relate to your previous answers?  How can you write as a linear combination of and ?  How much does move in the direction?  How much does move in the direction?  Calculate the dot product of with . How does this relate to your previous answers?  Calculate the dot product of with . How does this relate to your previous answers?  How can you write as a linear combination of and ?  What is different about the different sets we considered different sets to span ? Be specific about what aspects will make answering the linear combination question easier to answer.  "
},
{
  "id": "C3-10",
  "level": "1",
  "url": "C3-10.html",
  "type": "Section",
  "number": "3.9",
  "title": "Fourier Series",
  "body": " Fourier Series  We will formalize some of the work done in Project 3, specifically the generalization of the dot product to vector spaces in general.   Inner Product  An inner product is a bilinear operation (denoted ) from a vector space to that satisifies the following: if and then         , iff  A vector space with a choice of inner product is called an inner product space .    and the dot product  The dot product ( ) is an inner product for our first example of a vector space, .    As we developed in Project 3, we can define an inner product of for . because integrals are lienar with respect to the functions being integrated.  There is not just one inner product that we could define on . We could give a weighting of the the points in our region of integration and define a weighted integral which will still give an inner product. Specifically, we could define for . For instance, if and , then but the unweighted inner product will not be defined for and . The weighted inner product with exists for and because converges to a finite value.   If we look at a set of of functions, , we can still consider the span of that set, While the span of this set is unlikely to be all of our vector space , we can still ask what function from the span is closest to a given function. The inner product (like the dot product) gives us a way to measure how much functions move together, so we can try to find the function from that will maximize it's inner product with a given . If this sounds like a projection vector problem, good news, it is!  Let's consider our set as a subset of functions\/vectors from . What kind of functions can we write as a linear combination from ? For one thing, all of the linear combinations of functions from will be periodic and will have zeros at 0 and .   Let's consider , a function that has zeros at 0 and 1 as shown in the graph below.   A plot of     How well can we approximate this function with a linear combination from our set ?   A very useful fact about our set is that each of the functions, , is orthogonal to any other element of . If , then . Here we are using the unweighted inner product. Note here that we will consider so that our region of interest is the interval from .  What does it mean for our functions to be \"orthogonal\"? Let's look at the graph of (with ) on the interval from 0 to 1. Change the and values to see how the function we are integrating changes.   For our set , we should also look at what would be. Let's calculate .   Let be the approximation of using . For instance, when , So to figure out each of the coefficents, let's take the inner product with on both sides of our linear combination. We get But since each of the functions is orthogonal to all of the other functions ( ), we will get Thus our coefficents can be found by   The following sage commands will calculate the coefficents for our approximation of using a linear combination of functions from . You can see how we get successively better approximations of as we increase the number of terms in the linear combination.   If you noticed, the function we used above for was actually a linear combination from . What if we considered the same problem but with a function NOT in . Consider .   A plot of    Let's see what the coefficients will be for our approximation of with a linear combination from .   What do you notice about where the approximations are getting better and where the approximations are awful? Why do you think this is the case?  Let's consider a larger set of functions, . Will this set still have the property that each element is orthogonal to all of the others (except itself)?   So we probably shouldn't use both the sine and cosine functions unless we have a good way to split up our coefficents since for . For now, let's consider just the cosine functions (with ) for our problem because our target function does not have a zero output at the boundaries of our interval.  Let be the approximation of using . For instance, when , So to figure out each of the coefficents, let's take the inner product with on both sides of our linear combination. We get But since each of the functions is orthogonal to all of the other functions ( ), we will get Thus our coefficents can be found by   Let's see what the coefficients will be for our approximation of with a linear combination from .   While our function is not in the span of our set , our linear combination approximiation is the closest function to (where closest is measured using the inner product!).  We should take a bit of time to list all of the tools we have learned about this semester that are involved in the previous problems: vectors (the bigger idea of vectors as objects that you can work with linear combinations), linear combinations, span, inner products\/orthogonality, efficiently solving linear algebraic systems. What others?  "
},
{
  "id": "C3-10-3",
  "level": "2",
  "url": "C3-10.html#C3-10-3",
  "type": "Definition",
  "number": "3.9.1",
  "title": "Inner Product.",
  "body": " Inner Product  An inner product is a bilinear operation (denoted ) from a vector space to that satisifies the following: if and then         , iff  A vector space with a choice of inner product is called an inner product space .  "
},
{
  "id": "C3-10-4",
  "level": "2",
  "url": "C3-10.html#C3-10-4",
  "type": "Example",
  "number": "3.9.2",
  "title": "<span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span> and the dot product.",
  "body": " and the dot product  The dot product ( ) is an inner product for our first example of a vector space, .  "
},
{
  "id": "C3-10-5",
  "level": "2",
  "url": "C3-10.html#C3-10-5",
  "type": "Example",
  "number": "3.9.3",
  "title": "",
  "body": " As we developed in Project 3, we can define an inner product of for . because integrals are lienar with respect to the functions being integrated.  There is not just one inner product that we could define on . We could give a weighting of the the points in our region of integration and define a weighted integral which will still give an inner product. Specifically, we could define for . For instance, if and , then but the unweighted inner product will not be defined for and . The weighted inner product with exists for and because converges to a finite value.  "
},
{
  "id": "C3-10-10",
  "level": "2",
  "url": "C3-10.html#C3-10-10",
  "type": "Figure",
  "number": "3.9.4",
  "title": "",
  "body": " A plot of   "
},
{
  "id": "C3-10-11",
  "level": "2",
  "url": "C3-10.html#C3-10-11",
  "type": "Question",
  "number": "3.9.5",
  "title": "",
  "body": " How well can we approximate this function with a linear combination from our set ?  "
},
{
  "id": "C3-10-21",
  "level": "2",
  "url": "C3-10.html#C3-10-21",
  "type": "Figure",
  "number": "3.9.6",
  "title": "",
  "body": " A plot of   "
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
