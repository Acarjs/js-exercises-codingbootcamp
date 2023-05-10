const extractStudentNames = () => {
    const lis = document.querySelectorAll('.student-list li');

    const student_names = [];

    lis.forEach(

        (li) => {
            student_names.push( li.innerHTML )
        }
    )

    console.log(student_names);

    return student_names;
}

const generateStudentHeadlines = (student_names) => {

    const h2s = document.querySelectorAll('h2');
    h2s.forEach( h2 => h2.remove() )

    student_names.forEach(student_name => {
        document.body.innerHTML += '<h2>' + student_name + '</h2>';
    })

}

const addStudent = (name) => {
    const student_names = extractStudentNames();

    student_names.push(name);

    generateStudentHeadlines(student_names);
}




const student_names = extractStudentNames();

generateStudentHeadlines(student_names);

