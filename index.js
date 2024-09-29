// code your solution here
function saturdayFun(activity = 'roller-skate', activity1 = 'go to yhe office'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity1 = 'go to the office', activity2 = 'cook'){
    return `This Monday, I will ${activity1}.`
};

function wrapAdjective(visualFlair = '*'){
    return function(adjective = 'special'){
       return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}
const encouragingPromptFunction = wrapAdjective('%')('a dedicated programmer')