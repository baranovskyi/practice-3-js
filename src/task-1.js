
const NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west";
    let directions;
    let count;
class Rover {
    constructor(x = 0, y = 0, direction = NORTH) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        directions = [NORTH, EAST, SOUTH, WEST];
        
        if (!directions.includes(direction)) {
            console.log(direction);
            throw new TypeError(`Incorrect args ${direction}`)
        } else if (directions.includes(direction)) {
            count = directions.indexOf(direction)
        }
        if (parseInt(this.x, 10) !== this.x || parseInt(this.y, 10) !== this.y) {
            throw new TypeError(`Incorrect args ${x} ${y}`);
        }
    }
    move(n) {
        if (parseInt(n, 10) !== n) {
            throw new TypeError(`Not relevant ${n}"`);
        }
        switch(this.direction){
            case (NORTH):
                this.y +=n
                break;
            case (EAST):
                this.x += n
                break;
            case (SOUTH):
                this.y -= n
                break;
            case (WEST):
                this.x -= n
                break;
            default:
                break;
        }
        return this;
    }
    left() {
        if (count == 0) {
            count = 4
        }
        count--
        this.direction = directions[count];
        return this;
    }
    right() {
        count++
        if (count == 4) {
            count = 0;
        }
        this.direction = directions[count];
        return this;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }

    getDirection() {
        return this.direction;
    }
}

export { NORTH, EAST, SOUTH, WEST, Rover };
