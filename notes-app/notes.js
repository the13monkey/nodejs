import fs from 'fs'
import chalk from 'chalk'

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title == title) // return undefined if no match
    
    if (!duplicateNote) {
        notes.push({
            title: title, 
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    // Dinah's approach 
    // const noteToRemove = notes.filter(function(note){
    //     return note.title == title 
    // })

    // if ( noteToRemove.length > 0 ) {
    //     const finalNotes = notes.filter(x => noteToRemove.indexOf(x) === -1)
    //     saveNotes(finalNotes)
    //     console.log('Note removed')
    // } else {
    //     console.log('No note to remove')
    // }
    
    // Instructor's approach 
    const notesToKeep = notes.filter( (note) => note.title !== title )
    if (notesToKeep.length == notes.length) {
        console.log(chalk.red.inverse('Nothing to remove'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed'))
    }
}

const saveNotes = (notes) => {
    try {
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json', dataJSON)
    } catch (err) {
        throw "Error saving notes"
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const theNote = notes.find((note) => note.title == title)
    if (theNote) {
        console.log(chalk.yellow.inverse(theNote.title))
        console.log(theNote.body)
    } else {
        console.log(chalk.red.inverse('No matching note.'))
    }
}


const listNotes = () => {
    const notes = loadNotes()

    if (notes.length > 0) {
        console.log(chalk.blue.inverse('Your Notes'))
        notes.forEach( (note) => console.log(note.title) )
    } else {
        console.log(chalk.red.inverse('There is 0 notes to list'))
    }
}

const _getNotes = getNotes
const _addNote = addNote
const _removeNote = removeNote
const _readNote = readNote
const _listNotes = listNotes
export { _getNotes as getNotes, _addNote as addNote, _removeNote as removeNote, _readNote as readNote, _listNotes as listNotes }