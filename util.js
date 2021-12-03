export const version = process.argv[2] || 0

export function getTab(test) {
    if (version == 'last') {
        return test[test.length-1];
    }
    return test[version];
}

export function getTabLine(test) {
    return getTab(test).split('\n').map(line => line.trim())
}

export function log(...message) {
    version != 'last' && console.log(...message);
}