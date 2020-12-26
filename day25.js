
import { log } from './util';

function solve(carte, porte) {
    let key = 1;
    let subject = 1;
    while(subject != porte) {
        subject = (subject * 7) % 20201227;
        key = (key * carte) % 20201227;
    }
    return key;
}
log(`Result test : ${solve(5764801, 17807724)}`)
console.log(`Result 1 : ${solve(12090988, 240583)}`)
