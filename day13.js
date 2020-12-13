var test = [
`939
7,13,x,x,59,x,31,19`,
`1000066
13,x,x,41,x,x,x,37,x,x,x,x,x,659,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,23,x,x,x,x,x,29,x,409,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17`
];

import {getTab, log} from './util.js';

let res = getTab(test).split('\n');
let input = {time: parseInt(res[0]), bus: res[1].split(',').map(id => id == 'x' ? 0 : parseInt(id))};
log(input);

function findNextDeparture(time, id) {
    let nbDepartBefore = Math.floor(time / id);
    let nearDepart = nbDepartBefore * id;
    let nextDepart = nearDepart + id;
    let waitMinutes = nextDepart - time;
    log(`bus ${id} : ${nearDepart} > ${nextDepart} wait ${waitMinutes}`);
    return waitMinutes;
}

function findBus(input) {
    let min = input.time;
    let minId = 0;
    for (let id of input.bus) {
        if (id > 0) {
            let waitMinutes = findNextDeparture(input.time, id);
            if (waitMinutes < min) {
                min = waitMinutes;
                minId = id;
            } 
        }
    }

    return min * minId;
}

console.log(`Result 1: ${findBus(input)}`);