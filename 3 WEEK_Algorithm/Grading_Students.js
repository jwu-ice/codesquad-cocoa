let grades = [73, 67, 38, 33];
// output : `76 67 40 33`

function gradingStudents(grades) {
  const newGrades = grades.map((v, i) => {
    const calculate = 5 - (v % 5);
    if (v % 5 > 2 && v > 37) return v + calculate;
    else return v;
  });
  return newGrades;
}

gradingStudents(grades);
