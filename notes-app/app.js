import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import { addNote, removeNote, listNotes, readNote } from './notes.js'

// set up yargs 
const _yargs = yargs( hideBin(process.argv) )

// create add, remove, read, list all notes commands
_yargs
    .command(
        'add',
        'Add a new note',
        (yargs) => {
            return yargs
                .option('title', {
                    describe: 'Note Title',
                    type: 'string',
                    demandOption: true 
                })
                .option('body', {
                    describe: 'Note Body',
                    type: 'string',
                    demandOption: true
                })
        },
        (argv) => {
            addNote(argv.title, argv.body)
        } 
    )
    .command(
        'remove',
        'Remove a new note',
        (yargs) => {
            return yargs
                .option('title', {
                    describe: 'Note Title',
                    type: 'string',
                    demandOption: true
                })
        },
        (argv) => {
            removeNote(argv.title)
        } 
    )
    .command(
        'read',
        'Reading one note',
        (yargs) => {
            return yargs
                .option('title', {
                    describe: 'Note Title',
                    type: 'string',
                    demandOption: true
                })
        },
        (argv) => {
            readNote(argv.title)
        } 
    )
    .command(
        'list',
        'List all notes',
        (argv) => {
            listNotes()
        } 
    )
    .demandCommand(4)
    .parse()
