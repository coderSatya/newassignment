import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment/moment';


const Home = () => {
    const intialState={
        pickupdate:'',
        pickuptime:'',
        dropoffdate:'',
        dropofftime:''
    };
    // const [startDate, setStartDate] = useState();
    const [form, setUser] = useState(intialState);
    const [errMsg, setErrMsg] = useState();
  

const handleChange = (e)=>{
   setUser({
    ...form,
    [e.target.name] : e.target.value
   })
};

const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form);
    alert('Submitted Succesfully');
    if(form.pickupdate == form.dropoffdate){
        setErrMsg('pick Time is more than drop off time');
    }else{
        setErrMsg('');
    }
    };

  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Pick up date : </label>
            <input 
            required
            value={form.pickupdate}
            name='pickupdate'
            placeholder='Pick up date'
            onChange={handleChange}
            type='date'
            />
            </div>
            <div>
            <label>Pick up Time : </label>
            <input 
            required
            value={form.pickuptime}
            name="pickuptime"
            onChange={handleChange}
            placeholder='Pick up Time'
            type='time'
            />
            </div>
            <div>
            <label>dropOff date : </label>
            <input 
            value={form.dropoffdate}
            required
            name="dropoffdate"
            onChange={handleChange}
            placeholder='Pick up date'
            type='date'
            />
            </div>
            <div>
            <label>dropOff Time : </label>
            <input 
            value={form.dropofftime}
            required
            name="dropofftime"
            onChange={handleChange}
            placeholder='drop off Time'
            type='time'
            />
            </div>
            <button onSubmit={handleSubmit}>Submit</button>
        </form>
        <h1>{errMsg}</h1>
    </div>
  )
}

export default Home