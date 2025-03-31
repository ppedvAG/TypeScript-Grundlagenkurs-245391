enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

// Keine Enums verwenden weil sie sind komisch...
let i = 0;
for (let direction in Direction) {
    // es wird 8x ueber das enum Direction iteriert was komsich ist
    console.log(++i + ': ' + direction);
}

// Bessere Alternative zu Enums
type DirectionType = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
let direction: DirectionType = 'UP';

// Weitere Alternative zu Enums
const directionObj = {
    Up: 1,
    Down: 2,
    Left: 3,
    Right: 4,
} as const;

// directionObj.Down = 32; // as const verhindert Zuweisung

type ObjectValues<T> = T[keyof T];
type DirectionType2 = ObjectValues<typeof directionObj>;

let down: DirectionType2 = 2;
