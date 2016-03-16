import React from 'react'
import uuid from 'node-uuid';
import Notes from './Notes'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
        id: uuid.v4(),
        task: 'Learn Webpack'
        },
        {
        id: uuid.v4(),
        task: 'Learn React'
        },
        {
        id: uuid.v4(),
        task: 'Do laundry'
        }
      ]
    }
    this.findNote = this.findNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }
  render() {
    const notes = this.state.notes
    return (
      <div id="list-div">
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.editNote} />
      </div>
    );
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
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    })
    console.log('added note')
  }
}
