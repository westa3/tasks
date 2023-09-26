import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";
import { addOption } from "./objects";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    //make a deep copy first
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const QuesAfter = QuesCopy.filter(
        (question: Question): boolean => question.published
    );
    return QuesAfter;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const QuesEmpty = QuesCopy.filter(
        (question: Question): boolean =>
            !(question.body == "") ||
            !(question.options.length == 0) ||
            !(question.expected == "")
    );
    return QuesEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    //deep copy first
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const QuesAfter = QuesCopy.filter(
        (question: Question): boolean => question.id == id
    );
    if (QuesAfter.length == 0) {
        return null;
    }
    return QuesAfter[0];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const QuesAfter = QuesCopy.filter(
        (question: Question): boolean => question.id == id
    );
    const QuesFinal = QuesCopy.filter(
        (question: Question): boolean => !(question.id == QuesAfter[0].id)
    );
    return QuesFinal;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    //look at deep copy example, like there return an array
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const QuesName = QuesCopy.map(
        (question: Question): string => question.name
    );
    return QuesName;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    //don't need to map
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const QuesSum = QuesCopy.reduce(
        (accumulator, currentValue) => accumulator + currentValue.points,
        0
    );
    return QuesSum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    //call the first function to get the array of published questions
    //then do reduce
    //deep copy first
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem (call two functions)
    const QuesFunc = getPublishedQuestions(QuesCopy);
    const QuesFinal = sumPoints(QuesFunc);
    return QuesFinal;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    //map( string => ${q.id},${q.name},${q.options}, etc. )
    //or .join them all
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const QuesComma = QuesCopy.map(
        (question: Question): string =>
            `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
    ).join("\n");
    const ResultString = "id,name,options,points,published" + "\n" + QuesComma;
    return ResultString;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const Ans = QuesCopy.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return Ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    //deep copy and actual problem
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
            published: true
        })
    );
    return QuesCopy;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const QuesS = QuesCopy.every(
        (question: Question): boolean =>
            question.type == "short_answer_question"
    );
    const QuesM = QuesCopy.every(
        (question: Question): boolean =>
            question.type == "multiple_choice_question"
    );
    if (QuesS == true || QuesM == true) {
        return true;
    }
    return false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const BlankQues = makeBlankQuestion(id, name, type);
    QuesCopy.push(BlankQues);
    return QuesCopy;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const QuesRes = QuesCopy.map(
        (question: Question): Question =>
            question.id == targetId
                ? { ...question, options: [...question.options], name: newName }
                : { ...question, options: [...question.options] }
    );
    return QuesRes;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const QuesRes = QuesCopy.map(
        (question: Question): Question =>
            question.id == targetId
                ? // eslint-disable-next-line prettier/prettier
                { ...question, options: [...question.options], type: newQuestionType }
                : { ...question, options: [...question.options] }
    );
    const QuesRes2 = QuesRes.map(
        (question: Question): Question =>
            question.type != "multiple_choice_question"
                ? { ...question, options: [] }
                : { ...question, options: [...question.options] }
    );
    return QuesRes2;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const idx = QuesCopy.map((ques) => ques.id).indexOf(targetId);
    const targetQues = QuesCopy[idx];
    const addOptionTarget = addOption(targetQues, newOption);
    if (targetOptionIndex == -1) {
        QuesCopy[idx] = addOptionTarget;
    } else {
        QuesCopy[idx].options[targetOptionIndex] = newOption;
    }
    return QuesCopy;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    //deep copy
    const QuesCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //actual problem
    const idx = QuesCopy.map((ques) => ques.id).indexOf(targetId);
    const duped = duplicateQuestion(newId, QuesCopy[idx]);
    QuesCopy.splice(idx + 1, 0, duped);
    return QuesCopy;
}
