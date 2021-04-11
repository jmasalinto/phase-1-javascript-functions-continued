function saturdayFun(activitySat = "roller-skate") {
    return `This Saturday, I want to ${activitySat}!`;
}

const mondayWork = function(activityMon = "go to the office") {
    return `This Monday, I will ${activityMon}.`;
}

function wrapAdjective(highlight = "*") {
    return function(adj = "special") {
        return `You are ${highlight}${adj}${highlight}!`;
    }
}

