const version = process.argv[2] || 0

export function getTab(test) {
    if (version == 'last') {
        return test[test.length-1];
    }
    return test[version];
}

export function log(...message) {
    version == 0 && console.log(...message);
}