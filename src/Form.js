import React, { useState, useEffect } from 'react';

const Form = () => {
  const [checkboxes, setCheckboxes] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,

    gender:"" // radio
  });

  const handleOnChange = (day) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [day]: !prevCheckboxes[day],
    }));
  };

  const initialData = {
    name: '',
    email: '',
    contact: '',
    weekday: '',
    gender:'',
    dob:''
  }

  const [formdata, setFormdata] = useState(initialData)
  const [status, setStatus] = useState(false);

  const updateData = (e) => {
    console.log(e.target.id, e.target.value);
    let tempObj = {};  
    tempObj[e.target.id] = e.target.value.trim();
    setFormdata({
      ...formdata, ...tempObj
    });
  }

  const registerFn = () => {
    setStatus(true);
  }

   // edit button
  const[edit, setEdit]=useState(false);
  const openEdit = () => {
    setEdit(!edit);
  }

  useEffect(() => {
    console.log(formdata);
  })

  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="card-body p-5">
          
          <label className="form-label">Name</label>
          <input type="text" id="name" className="form-control" onChange={updateData} />

          <label className="form-label">Email</label>
          <input type="email" id="email" className="form-control" onChange={updateData} />

          <label className="form-label">Contact</label>
          <input type="text" id="contact" className="form-control" onChange={updateData} />

          <label className="form-label">Weekdays</label>
            <div className="form-check">
            
                {Object.keys(checkboxes).map((day) => (
                <div key={day}>
                    <input
                    type="checkbox" className="form-check-input"
                    checked={checkboxes[day]}
                    onChange={() => handleOnChange(day)}
                    />
                    {day}
                </div>
                ))}
            </div>
            
            <label className="form-label">Gender</label>
            <div className="form-check">
              <input type="radio" name="gender" id="gender" value="male" className="form-check-input" onChange={updateData} />
              <label className="form-check-label">Male</label>
            </div>  
            <div className="form-check">
              <input type="radio" name="gender" id="gender" value="female" className="form-check-input" onChange={updateData} />
              <label className="form-check-label">Female</label>
            </div>
            

            <label className="form-label">DOB </label>
            <input type="date" id="dob" className="form-control" onChange={updateData} />

            <div className="text-center">
              <button className="btn btn-primary  mt-3" onClick={registerFn} >Submit</button>
            </div>

            {
                status && 
                <div>
                    <table className="table table-striped table-hover table-bordered mt-4">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>contact</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{formdata.name}</td>
                            <td>{formdata.email}</td>
                            <td>{formdata.contact}</td>
                            <td>{formdata.gender}</td>
                            <td>{formdata.dob}</td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>openEdit(true)}>Edit</button>
                                
                                <button className="btn btn-primary mx-3">Delete</button>
                            </td>
                        </tr>
                        
                    </tbody>
                    </table>

                    {
                        edit &&
                        <div onClick={openEdit} className="card" >
                          <div className="card-body">
                            <button onClick={openEdit} className="" >Close</button>
                            <br/>
                            <label className="form-label">Name</label>
                            <input type="text" id="name" className="form-control" onChange={updateData} />

                            <label className="form-label">Email</label>
                            <input type="email" id="email" className="form-control" onChange={updateData} />

                            <label className="form-label">Contact</label>
                            <input type="text" id="contact" className="form-control" onChange={updateData} />

                            <label className="form-label">Weekdays</label>
                              <div className="form-check">
                              
                                  {Object.keys(checkboxes).map((day) => (
                                  <div key={day}>
                                      <input
                                      type="checkbox" className="form-check-input"
                                      checked={checkboxes[day]}
                                      onChange={() => handleOnChange(day)}
                                      />
                                      {day}
                                  </div>
                                  ))}
                              </div>
                              
                              <label className="form-label">Gender</label>
                              <div className="form-check">
                                <input type="radio" name="gender" id="gender" value="male" className="form-check-input" onChange={updateData} />
                                <label className="form-check-label">Male</label>
                              </div>  
                              <div className="form-check">
                                <input type="radio" name="gender" id="gender" value="female" className="form-check-input" onChange={updateData} />
                                <label className="form-check-label">Female</label>
                              </div>
                              

                              <label className="form-label">DOB </label>
                              <input type="date" id="dob" className="form-control" onChange={updateData} />

                              <div className="text-center">
                                <button className="btn btn-primary  mt-3" onClick={registerFn} >Submit</button>
                              </div>
                          </div>
                        </div>
                    }

                  
                </div>
            }
          </div>
        </div>
    </div>
  );
};

export default Form;
