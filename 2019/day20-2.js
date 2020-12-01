let test = [
`             Z L X W       C
             Z P Q B       K
  ###########.#.#.#.#######.###############
  #...#.......#.#.......#.#.......#.#.#...#
  ###.#.#.#.#.#.#.#.###.#.#.#######.#.#.###
  #.#...#.#.#...#.#.#...#...#...#.#.......#
  #.###.#######.###.###.#.###.###.#.#######
  #...#.......#.#...#...#.............#...#
  #.#########.#######.#.#######.#######.###
  #...#.#    F       R I       Z    #.#.#.#
  #.###.#    D       E C       H    #.#.#.#
  #.#...#                           #...#.#
  #.###.#                           #.###.#
  #.#....OA                       WB..#.#..ZH
  #.###.#                           #.#.#.#
CJ......#                           #.....#
  #######                           #######
  #.#....CK                         #......IC
  #.###.#                           #.###.#
  #.....#                           #...#.#
  ###.###                           #.#.#.#
XF....#.#                         RF..#.#.#
  #####.#                           #######
  #......CJ                       NM..#...#
  ###.#.#                           #.###.#
RE....#.#                           #......RF
  ###.###        X   X       L      #.#.#.#
  #.....#        F   Q       P      #.#.#.#
  ###.###########.###.#######.#########.###
  #.....#...#.....#.......#...#.....#.#...#
  #####.#.###.#######.#######.###.###.#.#.#
  #.......#.......#.#.#.#.#...#...#...#.#.#
  #####.###.#####.#.#.#.#.###.###.#.###.###
  #.......#.....#.#...#...............#...#
  #############.#.#.###.###################
               A O F   N
               A A D   M                     `,
`                                       I           N S       T       Q     I         K
                                       W           P J       E       O     K         E
  #####################################.###########.#.#######.#######.#####.#########.#######################################
  #.#.#.....#...#.#...........#.#.#.....#.#.........#.......#...#.........#.#.....#...#.......#.........#.......#.......#...#
  #.#.#####.###.#.###.#.#.###.#.#.#####.#.#####.#####.#####.#.#.###.#####.#.#.###.#.###.#.###.#.###.#######.###.###.#######.#
  #...........#...#.#.#.#.#.........#...#.....#.....#...#...#.#.#.#...#...#.....#.#.....#...#.#.#.#...#.#...#.#.#.#.........#
  ###########.#.###.#######.###.###.###.#.#.###.###########.###.#.###.#########.#.#######.#####.#.#.#.#.#.###.###.#.###.###.#
  #...#.#.#.......#...#.#...#...#.#...#.#.#.#.....#.#.....#...#...#...#.#.....#.#.#.......#.......#.#.#...#.#...#.#...#.#...#
  ###.#.#.###.###.#.###.#########.###.#.#.#####.###.#####.#.###.#.#.###.###.#.###.#.#########.###.#####.###.#.#.#.#.#######.#
  #...#.#.....#...#.....#.#.....#...........#.#.........#.....#.#.#.#.....#.#.....#.............#.#.......#.#.#.#.#.......#.#
  ###.#.#########.###.###.#.#.#.#.###.#####.#.#.#.#######.#####.#.#.#.#.###.###.#########.#.#.#.#####.#####.###.#.#.#####.#.#
  #.......#...............#.#.#...#.#.#...#...#.#.....#.....#.#.#.#.#.#...#.#.#.#...#...#.#.#.#.#.....#.......#.........#.#.#
  #####.###########.#.#.###########.#####.###.###.###.#####.#.###.#.#.###.#.#.#.###.###.#.#######.#.#####.#####.#############
  #.....#...#...#.#.#.#.#.#.#.........#.......#.....#.#.......#.#.#...#...#...#.#.....#...#.......#.....#.#.#.........#.....#
  #####.###.###.#.###.###.#.#######.###.#######.#.#.#######.###.#.###.#.#####.#####.#.#.###.#####.#.###.#.#.#.#####.#####.###
  #.#...........#.............................#.#.#.......#.#.....#...#.....#.....#.#.#.....#...#.#...#.........#.#...#.....#
  #.#.#.#.#.###.#.#.#####.###.#.#.#####.#####.#.###.#######.#.###.#.#.###.#####.#.#.#.###.#.#.###.#######.#.#.###.#######.###
  #.#.#.#.#...#.#.#.#.....#.#.#.#.#.......#...#...#...#.....#...#.#.#.#.#...#...#.#.#.....#.....#.#...#...#.#.........#.....#
  #.#######.#######.###.###.###.#####.###.###.#.#####.#.#.#.#.#####.###.#.#######.#.#.#.#######.###.#####.###.#####.###.#.#.#
  #.#...#...#.#.#.#...#.#.......#.....#...#.#.#.#.#.#.#.#.#.#.....#.#.#.#.#.......#.#.#.......#.........#.#...#.......#.#.#.#
  #.#.#####.#.#.#.###############.###.#####.#.#.#.#.###.###.#.#####.#.#.#.###.#.#.#.#####.#.###.#.#####.#################.#.#
  #...#.#...#.....#.#.#.....#.#.....#.#.......#.....#...#...#.....#.#.....#.#.#.#.#...#...#...#.#...#.....#...#...#.#.#.#.#.#
  ###.#.###.###.###.#.#.###.#.###.#######.###.###.#.#######.#.###########.#.#####.#.#########.###.#########.#####.#.#.#.###.#
  #.#.....#.#...#.....#.#.#...........#.#.#.#...#.#.#...#...#.....#...#...#.....#.#...#.....#.#.#.#.......#.#.#...#...#.#...#
  #.###.###.#.###.#.#####.#######.#.###.###.#.###.#.###.###.#.#.#.#.#####.###.###.#.#######.###.#####.#.###.#.#.###.###.###.#
  #.............#.#.#.#.....#.....#.#.........#...#.#.......#.#.#.#.....#.#.....#.#...#...#.....#.#.#.#.....#.#.#...#...#...#
  ###.#.#####.#####.#.#.###################.###.#########.###.#####.#.#.#.#.###.#.###.#.###.#####.#.###.#####.#.###.###.###.#
  #...#...#.#.#.......#.#...#.#...#.....#.#...#...#.#.......#.....#.#.#...#.#...#...#.......#.#.#.....#...#...#...#...#...#.#
  #####.#.#.#.#####.#.#.###.#.#.#######.#.###.#.###.#.#####.#.###########.#.#.###.###.###.###.#.#.#####.#####.###.#.###.###.#
  #...#.#...#.#.....#.#...#.................#.#.....#.#...#.#.....#...#...#.#.....#...#...#.#.#.....#.#...#.....#.....#.#...#
  #.#####.#######.#.#.#.###.###########.###.#.###.#######.#.#.#####.#####.#.###.#.#.#.#.#.#.#.#.###.#.#.#####.###.#.###.###.#
  #...#.#.#.#...#.#.#.#...#.#.....#.#.....#.....#...#...#...#...#.#.....#.#.#.#.#.#.#.#.#.........#.#...#.......#.#.......#.#
  ###.#.#.#.###.###.###.###.#####.#.#####.###.#####.###.###.#.###.#.#.###.#.#.#.#.###.###.###.#.#######.###.#########.#####.#
  #.....#...#.#.#.#...#.#.#.#.....#.........#.#.....#.......#.#.....#.....#.#...#.#...#.....#.#.#.#...#...#...#.#.........#.#
  ###.#.#.#.#.#.#.###.#.#.#######.#####.#########.#######.###.#####.#######.###########.#####.###.#.###.###.###.###.###.###.#
  #...#.#.#.#.#...........#...#...#    N         P       N   C     I       D           K    #.#.#...#.......#.#...#.#.#.....#
  ###.###.###.#.#####.#####.#.###.#    K         E       P   J     E       B           N    ###.###.###.#####.#.#####.###.#.#
NW....#.........#.#.#...#...#.#...#                                                         #...#.....#.....#.....#.#...#.#.#
  ###.#.#####.###.#.#######.#####.#                                                         #.#.###.#.#.#.#####.#.#.#.#####.#
  #.....#.....#.#.#.#.#.#.#.#.#....DF                                                       #.#.#.#.#...#...#...#.#.....#....ZM
  #####.#.#####.#.#.#.#.#.#.#.###.#                                                         ###.#.#.#####.#####.###.#######.#
  #.....#.#...#.....#.....#.#.#...#                                                       VI....#...#.#...#.#.......#.#.#.#.#
  #######.#.#.#.###.###.#.#.#.###.#                                                         #.#.#.###.#.###.###.###.#.#.#.#.#
  #.#.#.....#...#.......#.........#                                                         #.#...#.#.............#.........#
  #.#.#.###.#.#.#.#####.#####.#####                                                         #####.#.###.#.###.#.###.#########
RY....#.#.#.#.#.#.#...#.#.#.#.#....TE                                                       #...#.#...#.#.#...#.#...#.......#
  #.#####.#########.#####.#.###.#.#                                                         #.#.###.###########.#######.###.#
  #...#.....#.....#.#.#.......#.#.#                                                       CN..#.........#.....#.#.#.....#...#
  #.#.#.###.###.###.#.#.###.#####.#                                                         #####.###########.###.#.#.###.###
  #.#...#.................#.......#                                                         #.#.#...#.#...#.#...#...#.#...#..AS
  #####################.#.#######.#                                                         #.#.#.###.#.###.#.#####.###.###.#
CT....#.....#.......#...#...#.#.#.#                                                         #.........................#.....#
  ###.#.###.###.#.#.#######.#.#.###                                                         ###.#.#############.#.#.###.#.###
  #...#...#...#.#.#.#.#...#.#......DN                                                       #...#.#.......#.#...#.#.#...#.#.#
  #.#####.###.#.#.###.###.###.#####                                                         #########.###.#.#####.#########.#
  #.....#.#...#.#...........#.#...#                                                         #...#.#.....#...#...#...#...#.#..CJ
  ###.###.###.#.#.#.###.#.#.#.###.#                                                         ###.#.#####.#.#####.#.#####.#.#.#
  #.......#.....#.#...#.#.#...#...#                                                       NW....#.....#.#.#.....#.#.........#
  ###############.#####.#######.###                                                         #.#.#.###.#.#.#####.#####.#####.#
  #...........#.#...#.#...#.....#.#                                                         #.#...#.#...#...............#.#.#
  #.###.#.#####.#####.#####.###.#.#                                                         #######.#####################.###
QW..#...#...#...#.#.........#...#..IK                                                       #.............#.....#...........#
  #.#.#######.#.#.#####.#####.###.#                                                         #.#####.#.###.#.#.###.#########.#
  #.#.#.....#.#.#...#.......#...#..RY                                                       #.#...#.#...#...#...#.......#...#
  #.#.#.#.###.###.#######.#####.#.#                                                         #.#######.###.#####.#####.###.###
BM..#...#...................#.....#                                                         #.......#.#.....#.......#.#......GM
  #################.#.#.###########                                                         ###.#.#############.#.#.#.#.###.#
  #.#.............#.#.#...#.#.....#                                                       IW....#.#...#.#...#...#.#...#...#.#
  #.#.#########.#.#.#######.###.###                                                         #######.###.#.###########.#######
VI..#.......#...#.#.#.#...#.......#                                                         #...#.#.....#...#...#...#.#.#.#..KN
  #.#######.#####.###.#.###.#.#.###                                                         #.###.#.#####.###.#.###.###.#.#.#
  #.......#.#.......#.....#.#.#...#                                                       ZM..#.....#.#.#...#.#.#............ZZ
  ###.#####.#######.#.###.###.#.###                                                         #.#.#.###.#.#.###.#.#.#.#####.#.#
  #.........#.#.#.......#.....#....GM                                                       #...#.............#...#.#.#.#.#.#
  ###########.#.###.#############.#                                                         #############.#.#########.#.#####
  #.....#.........#...#.#.......#.#                                                       QW........#.#...#.#.........#...#..GZ
  #.#.#####.#####.#####.###.###.###                                                         #####.###.#####.###.#####.#.#.#.#
  #.#...#.....#.#.#.....#...#.....#                                                         #...........#...#.....#...#.#...#
  #.###.#.#.#.#.#.#####.#.#.###.#.#                                                         ###.#####.###########.###.#.###.#
  #...#...#.#.#.....#.#...#.#.#.#..GZ                                                       #.....#.#.#.....#.#.#.#...#...#.#
  ###.###.#.#.#.#.#.#.#.###.#.#.#.#                                                         #.#.#.#.#####.###.#.#.###.#.###.#
DN......#.#.#.#.#.#.....#.#.#...#.#                                                         #.#.#.................#.......#.#
  #.#.#.#.#######.#####.#.###.#.#.#        Q   P     A     K         B       S         C    ###.#.#.#.#####.#.#.###.#.#.#.###
  #.#.#.#.#...........#...#...#.#.#        O   M     S     E         M       J         T    #...#.#.#...#...#.#.#.#.#.#.#...#
  #.#.#.#.###.#.#.#.###.#.###.#############.###.#####.#####.#########.#######.#########.#####.#.#.###.#.#.#.###.#.#.#.#.#.#.#
  #.#.#.#...#.#.#.#...#.#.#.....#.#.#.#.....#...#.#.....#.........#.#.......#...#.....#.#.#...#.#...#.#.#.#.#.#...#.#.#.#.#.#
  #.###.#####.#####.#####.###.###.#.#.###.###.###.#####.###.#######.###.#####.#.#####.#.#.#######.#.#####.###.#.###.###.#####
  #...#.#...#...#.#.....#.#.....#.......#.#.#.....#.#...#.....#...........#.#.#.#...#.......#.....#.#...#...#.....#.#.....#.#
  #.#.#.###.#.#.#.###.###.###.#######.###.#.#####.#.#.#.#.###.###.###.#####.###.#.#.#.###########.#.###.#.###.#.###.#.###.#.#
  #.#.#.#.....#.#.#.#.#.#.#.....#.#.........#.......#.#.#.#.....#...#.#.#...#...#.#.....#.#.....#.#...#...#.#.#...#.#...#...#
  #.#.#######.###.#.#.#.#.#.#.#.#.###.#.###.#.#########.###.###.###.###.#.#.#.###.#######.###.#.#.#.###.#.#.###.###.#.###.#.#
  #.#...#.#.#.#.#.....#...#.#.#.#.....#.#.#.#...#...#...#...#.#.#.#.....#.#...#...#...........#.#.#.#...#.....#...#.#...#.#.#
  ###.#.#.#.#.#.###.#####.###.#####.###.#.#.###.###.###.#.#.#.###.#####.#.###.###.#.###.#.#######.#####.#.#.###.#######.#.#.#
  #...#.#.........#...#...#.....#.....#.#.#.#...#.....#.#.#.#.......#...#...#.#...#...#.#.......#...#...#.#.#.#.....#...#.#.#
  ###.#.#.###.###########.###.#.#.#######.#.#.###.#.#.#.#.###.#.#######.###.#####.###.#.#########.#####.###.#.#.#.#.#######.#
  #.#.#.#...#.........#.....#.#.#.#...#.....#.....#.#.#.#.....#.#...#...#...#.........#.#...#...#.#.#.....#.#...#.#.......#.#
  #.#.#####.#.#.#####.###############.#####.#######.###.#######.#.###.#.#.#######.#.#.#.###.#.###.#.#.#.#.###.#.#.#.###.#####
  #...#.#...#.#...#...#.....#.......#.........#.......#.....#.......#.#.#.......#.#.#.#.........#.#.#.#.#...#.#.#.#...#.....#
  ###.#.#.#####.#.#####.#.#####.#.#.#.#####.#####.#####.#.#####.#.#####.#.###########.#.###.#.###.#.#.###########.###.###.###
  #.....#.#.....#.#...#.#...#.#.#.#.#.#.#.....#.....#...#.#.....#.#.....#.#...#...#.#.#...#.#...#.#.#.#...#.......#...#.....#
  #.###.###.###.#####.###.###.###.#####.#.###.#####.###.#####.#.#####.###.#.###.###.###.#####.#####.###.#######.#.#######.###
  #.#.#.#...#...#.........#.#...#.#.......#...#.....#...#...#.#.#.#.....#.........#.......#.#.#...#.#.....#.#...#.....#.....#
  ###.###################.#.#.###.#.#####.#.#######.###.###.###.#.###.###.#.###.###.#######.###.###.###.#.#.###.#.###.#####.#
  #.........#.#.#.........#.#.#...#.#.....#.#.........#.......#.#.......#.#.#.#.#.....#.................#.....#.#.#.#.....#.#
  #####.#####.#.#########.#.#.#.#.#####.###########.###.#######.#.#####.#.###.#####.#.###.#.#.#.#####.###########.#.#.#.###.#
  #.#.#.....#.#.#.#...#.........#...#.#.......#.#...#...#.#...#.#.....#.#.........#.#...#.#.#.#.....#.......#.....#...#.#...#
  #.#.###.###.#.#.###.#####.#.#.###.#.#.###.###.###.#.###.###.#.#####.#####.#.#.#######.#.#######.###.#.#####.###.#.#.#.###.#
  #.......#.#.....#.#...#.#.#.#.#.#.#.....#.#.....#.#.....#.....#.......#...#.#.#.#.#.......#...#...#.#...#.#...#.#.#.#.#...#
  #.#.###.#.###.###.###.#.#######.#.#.#######.#####.#.#.###.#.###.#.#####.#######.#.###.###.###.#######.###.###.#.###.#####.#
  #.#.#.#...............#.....#.#.#.........#...#...#.#...#.#.#...#.....#.#...#...#.#.....#.......#...........#.#...#.#.....#
  #####.#.###.#.#.#####.###.###.#.#######.###.#.#.###.#####.#####.#####.#.#.#####.#.###.#######.#.###.#.#.#.###.#.###.#.###.#
  #.......#...#.#.#.....#...............#...#.#.#.#.....#.......#.#...#.#.....#.#.....#.....#.#.#.#.#.#.#.#.#.#.#.#...#...#.#
  #.###.#####.#.#.###.#.#####.#######.#.###.#.#.#.#.###.#######.#.###.#####.###.#.###.#.#####.#####.#########.#.#####.###.#.#
  #.#.......#.#.#.#...#.........#.#.#.#.#...#.#...#.#...#.#.....#.#.....#...#...#.#.#.........................#.#...#.#.#.#.#
  #######.###.###.#####.#########.#.#.#.#.###.#######.###.#.###.#.#.###.#.###.#.#.#.#.###.###.#.###.#.#.#.#.#####.#.#.#.#####
  #.......#...#.....#...#.............#...#.........#.....#.#...#...#...#.....#.#.#.#...#...#.#...#.#.#.#.#.......#.#.......#
  ###################################.###########.###.#.###.###########.#######.#.###########################################
                                     P           N   P A   D           C       D I
                                     M           K   E A   F           N       B E                                             `
]

let version = process.argv[2] || 0

let map = test[version].split('\n').map(l => l.split(''))

function getElement(x, y) {
  if (y < 0 || y >= map.length || x < 0 || x >= map[y].length) return ' ';
  else return map[y][x]
}

function isLetter(current) {
  return (current >= 'A' && current <= 'ZZ')
}

function isInner(x, y, xmax, ymax) {
  return (x > 3 && y > 3 && x < xmax - 3 && y < ymax )
}

function findLabels(map) {
  let labels = []
  for (let y = 0; y < map.length; y++) {
    let inner = false;
    for (let x = 0; x < map[y].length; x++) {
      if (isLetter(map[y][x])) {
        if (getElement(x - 1, y) === '.' && isLetter(getElement(x + 1, y))) { // Label à gauche
          let label = map[y][x] + map[y][x+1]
          map[y][x] = label
          labels.push({ label, x: x - 1, y, inner: isInner(x, y, map[y].length, map.length) })
        }
        if (getElement(x + 1, y) === '.' && isLetter(getElement(x - 1, y))) { // Label à droite
          let label = map[y][x-1] + map[y][x]
          map[y][x] = label
          labels.push({ label, x: x + 1, y, inner: isInner(x, y, map[y].length, map.length) })
        }
        if (getElement(x, y - 1) === '.' && isLetter(getElement(x, y + 1))) { // Label en dessous
          let label = map[y][x] + map[y + 1][x]
          map[y][x] = label
          labels.push({ label, x, y: y - 1, inner: isInner(x, y, map[y].length, map.length) })
        }
        if (getElement(x, y + 1) === '.' && isLetter(getElement(x, y - 1))) { // Label au dessus
          let label = map[y - 1][x] + map[y][x]
          map[y][x] = label
          labels.push({ label, x, y: y + 1, inner: isInner(x, y, map[y].length, map.length) })
        }
      }
    }
  }
  return labels
}

function findLinks(node, x, y, size, links) {
  if (y < 0 || y >= map.length || x < 0 || x >= map[y].length) return;
  //console.log(`${node.label}: ${x} ${y} = ${size} ${map[y][x]}`)
  //display(x, y)
  let current = map[y][x]
  if (current === '#' || current === ' ') return;
  if (current === '.') {
    map[y][x] = ' '
    findLinks(node, x - 1 , y, size + 1, links)
    findLinks(node, x + 1, y, size + 1, links)
    findLinks(node, x , y - 1, size + 1, links)
    findLinks(node, x , y + 1, size + 1, links)
    map[y][x] = current
  }
  else if (isLetter(current) && current.length == 2){
    let level = isInner(x, y, map[y].length, map.length) ? 1 : - 1
    let step = links[node.label][current] ? Math.min(size, links[node.label][current].step) : size
    links[node.label][current] = { step, level }
  }
}

function display(x = 0, y = 0) {
  let save = map[y][x]
  map[y][x] = "X"
  console.log(map.map(l => l.map(e => e.substring(0, 1)).join('')).join('\n'))
  map[y][x] = save
}

let minSteps = Number.MAX_SAFE_INTEGER;

function parc(labels, links, label, visited, steps, level, paths) {
  //console.log(`${label} ${steps}`)
  visited.add(label);
  for (let [key, value] of Object.entries(links[label])) {
    if (!visited.has(key) && level + value.level > 0) {
      parc(labels, links, key, visited, steps + value.step, level + value.level, [...paths, {key,step:value.step, steps: steps + value.step, level: level + value.level}])
    }
    else if (key == 'ZZ' && level + value.level == 0) {
      minSteps = Math.min(minSteps, steps)
      console.log(paths)
      return;
    }
  }
  visited.delete(label);
}

function run() {
  let labels = findLabels(map);
  let links = {}
  console.log(labels)
  display()
  for( let node of labels) {
    links[node.label] = links[node.label] || {}
    findLinks(node, node.x, node.y, 0, links);
    if (node.isKey) nbKey++;
  }
  console.log(links)
  let visited = new Set()
  parc(labels, links, 'AA', visited, 0, 0, [])
  console.log(minSteps - 1)
}

run()