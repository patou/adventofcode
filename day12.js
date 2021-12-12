let test = [
    `start-A
    start-b
    A-c
    A-b
    b-d
    A-end
    b-end`,
    `dc-end
    HN-start
    start-kj
    dc-start
    dc-HN
    LN-dc
    HN-end
    kj-sa
    kj-HN
    kj-dc`,
    `fs-end
    he-DX
    fs-he
    start-DX
    pj-DX
    end-zg
    zg-sl
    zg-pj
    pj-he
    RW-he
    fs-DX
    pj-RW
    zg-RW
    start-pj
    he-WI
    zg-he
    pj-fs
    start-RW`,
    `ln-nr
    ln-wy
    fl-XI
    qc-start
    qq-wy
    qc-ln
    ZD-nr
    qc-YN
    XI-wy
    ln-qq
    ln-XI
    YN-start
    qq-XI
    nr-XI
    start-qq
    qq-qc
    end-XI
    qq-YN
    ln-YN
    end-wy
    qc-nr
    end-nr`
];

import { getTabLine, log} from './util.js';

let tab = getTabLine(test).map(line => line.split('-')).map(t => ({from: t[0], to: t[1]}))

log(tab);

class Node {
    constructor(name) {
        this.name = name;
        this.small = isSmallCave(name)
        this.edge = []
    }

    add(name) {
        this.edge.push(name)
    }
}

function isSmallCave(name) {
    return name.toLowerCase() === name;
}

function addNode(graph, name) {
    if (!graph.has(name)) {
        graph.set(name, new Node(name))
    }
}

function addEdge(graph, from, to) {
    graph.get(from).add(to)
    graph.get(to).add(from)
}

function visiting(graph, visited, name) {
    if (name === 'end') {
        return 1;
    }
    else {
        let node = graph.get(name);
        if (node.small && visited.has(name)) {
            return 0;
        }
        let res = 0;
        if (node.small) {
            visited.add(name)
        }
        for (let edge of node.edge) {
            res += visiting(graph, visited, edge)
        }
        visited.delete(name)
        return res;
    }
}

let graph = new Map()
for (let edge of tab) {
    addNode(graph, edge.from)
    addNode(graph, edge.to)
    addEdge(graph, edge.from, edge.to)
}
log(graph)

function compute(graph) {
    
    let visited = new Set()
    let count = visiting(graph, visited, 'start')

    return count;
}

function visitingTwinceOneCave(name, visited) {
    if (isSmallCave(name)) {
        if (visited.get(name) >= 2) {
            return true
        }
        else {
            let countTwince = 0;
            for (const [key, value] of visited.entries()) {
                if ((isSmallCave(key) && key !== 'start' && value > 1)
                || (key === name && value > 0)) {
                    countTwince++;
                }
            }
            if (countTwince > 1) log(`${name} : ${countTwince}`)
            return countTwince > 1
        }
    }
    return false;
}

function visiting2(graph, visited, name, path, paths) {
    const builtPath = [...path, name]
    if (name === 'end') {
        paths.push(builtPath)
        return 1;
    }
    else {
        let node = graph.get(name);
        let visitedTime = visited.get(name)
        
        if (node.small && visitingTwinceOneCave(name, visited, path)) {
            return 0;
        }
        let res = 0;
        visited.set(name, visitedTime + 1)
        for (let edge of node.edge) {
            if (edge !== 'start')
                res += visiting2(graph, visited, edge, builtPath, paths)
        }
        visited.set(name, visitedTime)
        return res;
    }
}

function compute2(graph) {
    
    let visited = new Map()
    for (let node of graph.values()) {
        visited.set(node.name, 0)
    }
    visited.set('end', 1)
    let paths = []
    let count = visiting2(graph, visited, 'start', [], paths)
    
    paths.forEach(line => log(line.join(',')))

    return paths.length;
}

console.log('Résultat 1: ', compute(graph));
console.log('Résultat 2: ', compute2(graph));

