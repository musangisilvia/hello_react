import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Silvia', 'Geo', 'Nila']
    const persons = [
        {
            id: 1,
            name: 'Silvia',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Geo',
            age: 35,
            skill: 'Politics'
        },
        {
            id: 3,
            name: 'Nila',
            age: 3,
            skill: 'Laughing'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    // const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
           {nameList}
           {/* {personList} */}
        </div>
    )
}

export default NameList
