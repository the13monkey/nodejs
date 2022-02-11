// const square = function (x) {
//     return x * x
// }


// const square = (x) => {
//     return x * x
// }


const square = (x) => x * x

console.log( square( 4 ) )

// arrow function this doesn't bind its own value, but bind its context value 

const party = {
    name: 'Birthday Party',
    guestList: ['Dinah Chen', 'Kai Chen', 'Damon Bielesch'],
    printGuestList() {
        console.log('Guest list for '+ this.name)
        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending the '+this.name)
        } )
    }
}

party.printGuestList()