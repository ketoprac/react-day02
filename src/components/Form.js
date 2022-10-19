import React from 'react'

export default function Form({onSubmitForm, setDisplay, handleOnChange}) {
  return (
    <div>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label>Name : </label>
                    <input type="text" placeholder='Name' onChange={handleOnChange('name')}></input>
                </div>
                <div>
                    <label>Salary : </label>
                    <input type="text" placeholder='Salary' onChange={handleOnChange('salary')}></input>
                </div>
                <div>
                    <button type='submit'>Save</button>
                    <button onClick={() => setDisplay(false)}>Cancel</button>
                </div>

            </form>
    </div>
  )
}
