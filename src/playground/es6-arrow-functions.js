function square(a) {
    return a * a;
}
console.log(square(2));

// const squareArrow = (a) => {
//     return a*a;
// };
const squareArrow = (a) => a * a;
console.log(squareArrow(3));

const user = {
    name: 'decksterr',
    songs: ['foo', 'bar'],
    newSongs: [],
    printSongs() {
        this.songs.forEach((song) => {
            console.log(song);
        });
    },
    mapSongs() {
        this.newSongs = this.songs.map((song) => {
            return `${song}!`;
        });
    }
}
console.log(user.printSongs());
console.log(user.mapSongs());
console.log(user);
