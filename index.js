// ყველა სტუდენტი ერთ ობიექტში
const students = {
    // სტუდენტი 1
    jan: {
        personalInfo: {
            firstName: 'ჟან',
            lastName: 'რენო',
            age: '26'
        },
        scores: {

            frontEnd: {
                javaScript: 62,
                react: 57
            },

            backEnd: {
                python: 88,
                java: 90
            }
        }
    },

    // სტუდენტი 2
    klod: {
        personalInfo: {
            firstName: 'კლოდ',
            lastName: 'მონე',
            age: '19'
        },
        scores: {

            frontEnd: {
                javaScript: 77,
                react: 52
            },

            backEnd: {
                python: 92,
                java: 67
            }
        }
    },

    // სტუდენტი 3
    van: {
        personalInfo: {
            firstName: 'ვან',
            lastName: 'გოგი',
            age: '21'
        },
        scores: {

            frontEnd: {
                javaScript: 51,
                react: 98
            },

            backEnd: {
                python: 65,
                java: 70
            }
        }
    },

    // სტუდენტი 4
    dam: {
        personalInfo: {
            firstName: 'დამ',
            lastName: 'სქვეარი',
            age: '36'
        },
        scores: {

            frontEnd: {
                javaScript: 82,
                react: 53
            },

            backEnd: {
                python: 80,
                java: 65
            }
        }
    }
}

// ქულების ჯამი - ჟან
const janScoresSum =
    students.jan.scores.frontEnd.javaScript +
    students.jan.scores.frontEnd.react +
    students.jan.scores.backEnd.python +
    students.jan.scores.backEnd.java

students.jan.scores.sumOfScores = janScoresSum

// ქულების ჯამი - კლოდ
const klodScoresSum =
    students.klod.scores.frontEnd.javaScript +
    students.klod.scores.frontEnd.react +
    students.klod.scores.backEnd.python +
    students.klod.scores.backEnd.java

students.klod.scores.sumOfScores = klodScoresSum

// ქულების ჯამი - ვან
const vanScoresSum =
    students.van.scores.frontEnd.javaScript +
    students.van.scores.frontEnd.react +
    students.van.scores.backEnd.python +
    students.van.scores.backEnd.java


students.van.scores.sumOfScores = vanScoresSum

// ქულების ჯამი - დამ
const damScoresSum =
    students.dam.scores.frontEnd.javaScript +
    students.dam.scores.frontEnd.react +
    students.dam.scores.backEnd.python +
    students.dam.scores.backEnd.java

students.dam.scores.sumOfScores = damScoresSum


// ქულების საშუალო - ჟან
const janScoresAvg =
    (students.jan.scores.frontEnd.javaScript +
        students.jan.scores.frontEnd.react +
        students.jan.scores.backEnd.python +
        students.jan.scores.backEnd.java) / 4

students.jan.scores.avgOfScores = janScoresAvg

// ქულების საშუალო - კლოდ
const klodScoresAvg =
    (students.klod.scores.frontEnd.javaScript +
        students.klod.scores.frontEnd.react +
        students.klod.scores.backEnd.python +
        students.klod.scores.backEnd.java) / 4

students.klod.scores.avgOfScores = klodScoresAvg

// ქულების საშუალო - ვან
const vanScoresAvg =
    (students.van.scores.frontEnd.javaScript +
        students.van.scores.frontEnd.react +
        students.van.scores.backEnd.python +
        students.van.scores.backEnd.java) / 4

students.van.scores.avgOfScores = vanScoresAvg

// ქულების საშუალო - დამ
const damScoresAvg =
    (students.dam.scores.frontEnd.javaScript +
        students.dam.scores.frontEnd.react +
        students.dam.scores.backEnd.python +
        students.dam.scores.backEnd.java) / 4

students.dam.scores.avgOfScores = damScoresAvg


// GPA - ჟან
const gpaJan = (1 * 4 + 0.5 * 7 + 3 * 6 + 3 * 3) / 20

students.jan.scores.GPA = gpaJan

// GPA - კლოდ
const gpaKlod = (2 * 4 + 0.5 * 7 + 4 * 6 + 1 * 3) / 20

students.klod.scores.GPA = gpaKlod

// GPA - ვან
const gpaVan = (0.5 * 4 + 4 * 7 + 1 * 6 + 1 * 3) / 20

students.van.scores.GPA = gpaVan

// GPA - დამ
const gpaDam = (3 * 4 + 0.5 * 7 + 2 * 6 + 1 * 3) / 20

students.dam.scores.GPA = gpaDam


// ქულების საშუალო
const avgOfAllScores =
    (students.jan.scores.janScoresAvg +
        students.klod.scores.klodScoresAvg +
        students.van.scores.vanScoresAvg +
        students.dam.scores.damScoresAvg) / 4

// სტატუსის მინიჭება - ჟან
const statusJan =
    (students.jan.scores.janScoresAvg > avgOfAllScores) ?
    (students.jan.personalInfo.status = 'წითელი დიპლომის მქონე') :
    (students.jan.personalInfo.status = 'ვრაგ ნაროდა')

// სტატუსის მინიჭება - კლოდ
const statusKlod =
    (students.klod.scores.klodScoresAvg > avgOfAllScores) ?
    (students.klod.personalInfo.status = 'წითელი დიპლომის მქონე') :
    (students.klod.personalInfo.status = 'ვრაგ ნაროდა')

// სტატუსის მინიჭება - ვან
const statusVan =
    (students.van.scores.vanScoresAvg > avgOfAllScores) ?
    (students.van.personalInfo.status = 'წითელი დიპლომის მქონე') :
    (students.van.personalInfo.status = 'ვრაგ ნაროდა')

// სტატუსის მინიჭება - დამ
const statusDam =
    (students.dam.scores.damScoresAvg > avgOfAllScores) ?
    (students.dam.personalInfo.status = 'წითელი დიპლომის მქონე') :
    (students.dam.personalInfo.status = 'ვრაგ ნაროდა');


// საუკეთესო სტუდენტი GPA-ს მიხედვით

let bestStudentGpa;

const janGPA = students.jan.scores.GPA
const klodGPA = students.klod.scores.GPA
const vanGPA = students.van.scores.GPA
const damGPA = students.dam.scores.GPA

if (janGPA > klodGPA &&
    janGPA > vanGPA &&
    janGPA > damGPA) {
    bestStudentGpa = `${students.jan.personalInfo.firstName} ${students.jan.personalInfo.lastName}`
} else if (klodGPA > janGPA &&
    klodGPA > vanGPA &&
    klodGPA > damGPA) {
    bestStudentGpa = `${students.klod.personalInfo.firstName} ${students.klod.personalInfo.lastName}`
} else if (vanGPA > janGPA &&
    vanGPA > klodGPA &&
    vanGPA > damGPA) {
    bestStudentGpa = `${students.van.personalInfo.firstName} ${students.van.personalInfo.lastName}`
} else {
    bestStudentGpa = `${students.dam.personalInfo.firstName} ${students.dam.personalInfo.lastName}`
}

console.log(`საუკეთესო GPA-ს მიხედვით: ${bestStudentGpa}`)



// საუკეთესო სტუდენტი 21+ ასაკში

if (students.jan.personalInfo.age > 21 &&
    students.jan.scores.avgOfScores > students.klod.scores.avgOfScores &&
    students.jan.scores.avgOfScores > students.van.scores.avgOfScores &&
    students.jan.scores.avgOfScores > students.dam.scores.avgOfScores) {

    console.log(`საუკეთესო 21+ ასაკში: ${students.jan.personalInfo.firstName} ${students.jan.personalInfo.lastName}`)
} else if (students.klod.personalInfo.age > 21 &&
    students.klod.scores.avgOfScores > students.jan.scores.avgOfScores &&
    students.klod.scores.avgOfScores > students.van.scores.avgOfScores &&
    students.klod.scores.avgOfScores > students.dam.scores.avgOfScores) {

    console.log(`საუკეთესო 21+ ასაკში: ${students.klod.personalInfo.firstName} ${students.klod.personalInfo.lastName}`);
} else if (students.van.personalInfo.age > 21 &&
    students.van.scores.avgOfScores > students.jan.scores.avgOfScores &&
    students.van.scores.avgOfScores > students.klod.scores.avgOfScores &&
    students.van.scores.avgOfScores > students.dam.scores.avgOfScores) {

    console.log(`საუკეთესო 21+ ასაკში: ${students.van.personalInfo.firstName} ${students.van.personalInfo.lastName}`);
} else if (students.dam.personalInfo.age > 21 &&
    students.dam.scores.avgOfScores > students.jan.scores.avgOfScores &&
    students.dam.scores.avgOfScores > students.van.scores.avgOfScores &&
    students.dam.scores.avgOfScores > students.klod.scores.avgOfScores) {

    console.log(`საუკეთესო 21+ ასაკში: ${students.dam.personalInfo.firstName} ${students.dam.personalInfo.lastName}`);
} else {
    console.log('არავინ არაა 21 წელზე ზემოთ!')
}


// საშუალო ქულები Front-End-ის საგნებში

const avgFrontJan =
    (students.jan.scores.frontEnd.javaScript +
        students.jan.scores.frontEnd.react) / 2

const avgFrontKlod =
    (students.klod.scores.frontEnd.javaScript +
        students.klod.scores.frontEnd.react) / 2

const avgFrontVan =
    (students.van.scores.frontEnd.javaScript +
        students.van.scores.frontEnd.react) / 2

const avgFrontDam =
    (students.dam.scores.frontEnd.javaScript +
        students.dam.scores.frontEnd.react) / 2

// საუკეთესო Front-End-ის საგნებში
let bestInFrontEnd;

if (avgFrontJan > avgFrontKlod &&
    avgFrontJan > avgFrontVan &&
    avgFrontJan > avgFrontDam) {
    bestInFrontEnd = students.jan.personalInfo.firstName + ' ' + students.jan.personalInfo.lastName
} else if (avgFrontKlod > avgFrontJan &&
    avgFrontKlod > avgFrontVan &&
    avgFrontKlod > avgFrontDam) {
    bestInFrontEnd = students.klod.personalInfo.firstName + ' ' + students.klod.personalInfo.lastName
} else if (avgFrontVan > avgFrontJan &&
    avgFrontVan > avgFrontKlod &&
    avgFrontVan > avgFrontDam) {
    bestInFrontEnd = students.van.personalInfo.firstName + ' ' + students.van.personalInfo.lastName
} else {
    bestInFrontEnd = students.dam.personalInfo.firstName + ' ' + students.dam.personalInfo.lastName
}

console.log(`საუკეთესო Front-End-ში: ${bestInFrontEnd}`)