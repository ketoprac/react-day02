import React from 'react'
import Button from '../Button'
import Input from '../Input'

const RegionForm = ({onSubmit, value, onChange}) => {
  return (
    <>
    <h2 className="text-3xl font-bold">Add Region</h2>
    <form onSubmit={onSubmit} className="mb-6 flex flex-col gap-y-2 w-4/12">
      <label htmlFor="region-name">Region Name:</label>
      <Input
        type="text"
        name="region-name"
        onChange={onChange}
        value={value}
      />
      <Button>Add</Button>
    </form>
    </>
  )
}

export default RegionForm