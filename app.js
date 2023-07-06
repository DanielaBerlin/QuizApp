//CREATE A QUIZ CLASS
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

//QUESTION CLASS
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

//DISPLAY QUESTION

function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //show question
    let questionElement = document.getElementById('question');
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    //show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById('choice' + i);
      choiceElement.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }

    showProgress();
  }
}

//GUESS FUNCTION

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

//SHOW quiz progress

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById('progress');
  progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

//SHOW SCORE
function showScores() {
  let quizEndHTML = `
        <h1>Quiz Completed</h1> 
        <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length} </h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>
        </div>
    `;
  let quizElement = document.getElementById('quiz');
  quizElement.innerHTML = quizEndHTML;
}

//CREATE QUIZ QUESTIONS
let questions = [
  new Question(
    'What does the Boolean operator OR evaluate?',
    [
      'two values, m and n, to 1, if both values are 0',
      'a 1-digit operator',
      'two values, x and y, to 1, if any value is 1',
      'two values, i and j, to 0, if only one of the two values is 1',
    ],
    'two values, x and y, to 1, if any value is 1'
  ),
  new Question(
    'The functions (protocols) of which layer in the ISO OSI and TCP/IP reference model ensure that all data packets that have been sent arrive at the recipient?',
    [
      'internet/network layer',
      'presentation layer',
      'transport layer',
      'data link layer',
    ],
    'transport layer'
  ),
  new Question(
    'What does the acronym FAIS stand for?',
    [
      'feature aware information systems',
      'future aspect information systems',
      'functional area information systems',
      'full access information systems',
    ],
    'functional area information systems'
  ),
  new Question(
    'What does the acronym ALU stand for?',
    [
      'algorithmic link unit',
      'arithmetical logical unit',
      'arbitrary logic unit',
      'alternating list unit',
    ],
    'arithmetical logical unit'
  ),
  new Question(
    'Which of the following is not one of the four classes of information systems?',
    [
      'cross-cutting systems',
      'functional area information systems',
      'management information systems',
      'communication systems',
    ],
    'cross-cutting systems'
  ),
  new Question(
    'Which of the following is not a quality requirement according to ISO/IEC 25010?',
    [
      'fault tolerance',
      'functional suitability',
      'sustainability',
      'reliability',
    ],
    'sustainability'
  ),
  new Question(
    'Software Engineers apply systematic, disciplined, quantifiable approaches to the development, operation, and …',
    [
      '… testing of software.',
      '… maintenance of software.',
      '… implementation of software.',
      '… shutdown of software.',
    ],
    '… maintenance of software.'
  ),
  new Question(
    'Which of the following is a typical driver for software project risks?',
    [
      'usage of object-oriented pattern',
      'excessive training',
      'complex development environment tools',
      'immateriality of software',
    ],
    'immateriality of software'
  ),
  new Question(
    'Which of the following is not a challenge in software engineering?',
    [
      'communication',
      'conflicting goals',
      'technological uncertainty',
      'ecological uncertainty',
    ],
    'ecological uncertainty'
  ),
  new Question(
    'Which of the following is not a reason that a software project can fail?',
    [
      'the cost of the project',
      'many stakeholders involved',
      'unrealizable central requirements',
      'conflicting opinions between members',
    ],
    'many stakeholders involved'
  ),
  new Question(
    'Which of the following is not a reason that a software project can fail?',
    [
      'the cost of the project',
      'many stakeholders involved',
      'unrealizable central requirements',
      'conflicting opinions between members',
    ],
    'many stakeholders involved'
  ),
  new Question(
    'Which of the following is a typical planning phase activity?',
    [
      'specification',
      'quality assurance',
      'determination of needs',
      'provisioning',
    ],
    'determination of needs'
  ),
  new Question(
    'Which of the following is a typical development phase activity?',
    [
      'upkeep',
      'software architecture and implementation',
      'provisioning',
      'make-or-buy decision',
    ],
    'software architecture and implementation'
  ),
  new Question(
    'Which of the following is not a typical reason for shutdown?',
    [
      'giving up business areas or outsourcing activities from the company',
      'replacement of existing legacy systems with new systems',
      'missing functionality concerning fundamental stakeholder requirements',
      'consolidation or standardization of applications when merging IT organizations',
    ],
    'missing functionality concerning fundamental stakeholder requirements'
  ),
  new Question(
    'After the need for a new software system has been identified, it must be decided whether …',
    [
      '… the need can be customized using in-house-developed software.',
      '… software solutions are already available that cover the need (e.g., content management systems, e-mail systems, word processing).',
      '… new standard software needs to be developed and then customized.',
      '… there are standard products that can be implemented from scratch to comply with company-specific requirements.',
    ],
    '… software solutions are already available that cover the need (e.g., content management systems, e-mail systems, word processing).'
  ),
  new Question(
    'Which of the following is not a quality requirement that must be ensured by operations?',
    ['usability', 'availability.', 'security', 'scalability'],
    'usability'
  ),
  new Question(
    'Which of the following is not a core activity of requirements engineering?',
    [
      'requirements application',
      'requirements elicitation.',
      'requirements validation',
      'requirements documentation',
    ],
    'requirements application'
  ),
  new Question(
    'According to the Certified Professional for Requirements Engineering Glossary, what is a goal of requirements engineering?',
    [
      'specifying and managing software solutions',
      'understanding and documenting the stakeholders’ desires and needs',
      'minimizing the risk of delivering a system that meets the stakeholders’ desires and needs',
      'designing and implementing business needs',
    ],
    'understanding and documenting the stakeholders’ desires and needs'
  ),
  new Question(
    'A typical element of a specification is a …',
    [
      '… requirement.',
      '… source code excerpt.',
      '… business function.',
      '… stakeholder need.',
    ],
    '… business function.'
  ),
  new Question(
    'What is the first step when specifying system structure and behavior?',
    [
      'identification and specification of functional components',
      'specification of business rules',
      'specification of technical interfaces for data exchange',
      'specification of business data models',
    ],
    'identification and specification of functional components'
  ),
  new Question(
    'Which of the following is not a step of the first three core requirements engineering activities?',
    ['validation', 'documentation', 'specification', 'elicitation'],
    'specification'
  ),
  new Question(
    'The term “architecture” does not describe …',
    ['… a process.', '… a system.', '… a professional field.', '… a typology.'],
    '… a system..'
  ),
  new Question(
    'Architectures can be described …',
    ['… a priori.', '… a post.', '… a posteriori.', '… ex priori.'],
    '… a priori.'
  ),
  new Question(
    'The architecture describes the transfer from …',
    [
      '… solution to problem.',
      '… implementation to design.',
      '… problem to solution.',
      '… design to implementation.',
    ],
    '… problem to solution.'
  ),
  new Question(
    'In large projects, each individual developer must be able to generate a current version of the program under development to test the changes that they have made. This requires …',
    [
      '… support for writing program code.',
      '… program code generation.',
      '… continuous build and integration.',
      '… integration of code libraries and frameworks.',
    ],
    '… continuous build and integration.'
  ),
  new Question(
    'Which of the following is not a function of a development environment?',
    [
      'support for writing program code',
      'version control',
      'continuous build and integration',
      'acceptance test integration',
    ],
    'acceptance test integration'
  ),
  new Question(
    'Software quality is the degree to which the system satisfies the stated and implied needs of its various stakeholders, and thus provides …',
    ['… requirements.', '… value.', '… code.', '… solutions.'],
    '… value.'
  ),
  new Question(
    'Which of the following is a good example of organizational measures?',
    ['development environment', 'training.', 'team building', 'checklist'],
    'checklist'
  ),
  new Question(
    'Which of the following is usually the third test stage?',
    ['unit test', 'system test.', 'acceptance test', 'integration test'],
    'system test'
  ),
  new Question(
    'Which of the following describes the concept of DevOps?',
    [
      'unit DevOps provides definition of specific dates on which changes to software systems are implemented and put into operation. This way, business departments, application development and operations can internally plan and carry out the tasks required to import a new software version.',
      'DevOps enables intensive cooperation between application development and operation, the organizational and technical ability to carry out regular automatic tests, and the organizational and technical ability to automate the commissioning activities.',
      'To avoid the disadvantages of few and large releases, but at the same time not to endanger operational reliability, daily and weekly releases of software systems are increasingly being created and automatically tested through automation and tool support.',
      'DevOps provides provisioning and orchestration of data networks, server systems (hardware), operating systems, storage systems, and backup solutions. In other words, services that are required for the development and operation of software systems',
    ],
    'DevOps enables intensive cooperation between application development and operation, the organizational and technical ability to carry out regular automatic tests, and the organizational and technical ability to automate the commissioning activities.'
  ),
  new Question(
    'Which of the following is not a challenge of system evolution?',
    [
      'lack of knowledge about the system’s architecture',
      'incomplete and out-of-date documentation',
      'degenerating architecture after every code change',
      'technological uncertainty',
    ],
    'technological uncertainty'
  ),
  new Question(
    'Which of the following can an individual carrying out the role of a developer not do?',
    [
      'also carry out the role of a tester',
      'also carry out any other role',
      'Carry out no additional role',
      'also carry out the role of an architect',
    ],
    'Carry out no additional role'
  ),
  new Question(
    'Which of the following can an individual carrying out the role of a developer not do?',
    [
      'also carry out the role of a tester',
      'also carry out any other role',
      'Carry out no additional role',
      'also carry out the role of an architect',
    ],
    'Carry out no additional role'
  ),
  new Question(
    'Which answer makes the following sentence incorrect? Projects work and can be completed successfully if the right people work properly with each other using the appropriate',
    [
      '… tools.',
      '… development environment.',
      '… methods.',
      '… modeling and programming languages.',
    ],
    '… development environment.'
  ),
  new Question(
    'The tasks of the project manager typically includes …',
    [
      '… control of the results achieved.',
      '… observing and ensuring customer satisfaction.',
      '… development of strategies for risk resolution or risk mitigation.',
      '… ensuring compliance with quality requirements.',
    ],
    '… control of the results achieved.'
  ),
  new Question(
    'The tasks of the system manager typically includes …',
    [
      '… integration of individual modules into an overall system.',
      '… performing tests at various test levels.',
      '… establishment, operation, and maintenance of systems to ensure the availability of the operating infrastructure.',
      '… examination of the integrability of the system in individual components of the operating infrastructure.',
    ],
    '… establishment, operation, and maintenance of systems to ensure the availability of the operating infrastructure.'
  ),
  new Question(
    'Which of the following is not a typical role in software engineering?',
    [
      'tester',
      'risk architect',
      'project manager',
      'software architect',
    ],
    'risk architect'
  ),
];

let quiz = new Quiz(questions);

//display question
displayQuestion();

//ADD A COUNTDOWN

let time = 10;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
        quizTime--;
        let sec = Math.floor(quizTime % 60);
        let min = Math.floor(quizTime / 60) % 60;
        counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000)
}

startCountdown();
