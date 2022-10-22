import React from 'react'

const RegionForm = ({onSubmit, value, onChange}) => {
  return (
    <>
    <h2>Add Region</h2>
    <form onSubmit={onSubmit}>
      <label htmlFor="region-name">Region Name:</label>
      <input
        type="text"
        name="region-name"
        onChange={onChange}
        value={value}
      />
      <button>Add</button>
    </form>
    </>
  )
}

export default RegionForm