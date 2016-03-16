import React from 'react'
import uuid from 'node-uuid'
import Notes from './Notes'
import NoteActions from '../actions/NoteActions'
import NoteStore from '../stores/NoteStore'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
        id: uuid.v4(),
        task: ''
        }
      ]
    }
    this.findNote = this.findNote.bind(this)
    this.addNote = this.addNote.bind(this)
    this.editNote = this.editNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.storeChanged = this.storeChanged.bind(this)
    this.state = NoteStore.getState()
  }

  componentDidMount() {
    NoteStore.listen(this.storeChanged)
  }
  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged)
  }
  storeChanged(state) {
    this.setState(state)
  }

  render() {
    const notes = this.state.notes
    return (
      <div id="list-div">
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.editNote} onDelete={this.deleteNote}/>
      </div>
    )
  }

  editNote(id, task) {
    let notes = this.state.notes;
    const noteIndex = this.findNote(id)
    if(noteIndex < 0) {
      return
    }
    notes[noteIndex].task = task
    this.setState({notes})
  }

  findNote(id) {
    const notes = this.state.notes
    const noteIndex = notes.findIndex((note) => note.id === id)

    if(noteIndex < 0 ) {
    console.log("couldn't find note", notes, id)
  }
  return noteIndex
  }

  addNote() {
    NoteActions.create({task: 'New task'})
  }
  editNote(id, task) {
    NoteActions.update({id, task})
  }
  deleteNote(id) {
    NoteActions.delete(id)
  }    
}
