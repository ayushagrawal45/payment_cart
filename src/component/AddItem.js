import React from 'react'

class AddItem extends React.Component {
    render() { 
        return <div>
            <form className='row'>
  <div className="mb-3 col-6">
    <label htmlFor="Name">Name</label>
    <input
      type="text"
      className="form-control"
      id="inputName"
      aria-describedby="name"
    />
    
  </div>
  <div className="mb-3 col-4">
    <label htmlFor="inputPrice">Price</label>
    <input
      type="number"
      className="form-control"
      id="price"
    />
  </div>
  
  <button type="submit" className="btn btn-primary col-4">
    Add
  </button>
</form>
        </div>;
    }
}
 
export default AddItem;