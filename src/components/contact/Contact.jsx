import { useForm, ValidationError } from '@formspree/react';
import './contact.css';

const Contact = () => {
    const [state, handleSubmit] = useForm("mleyregk");
    if(state.succeeded){
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
  return (
    <div className='contact-container'>
        <h2>Contact me 🖋️​ __ </h2><br/> 
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"> 
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <label>Message</label>
                <textarea
                    rows="10"
                    cols="50" 
                    rezise
                    id="message"
                    name="message"
                />
                <button type="submit" disabled={state.submitting} className='btn-form btn-bg' style={{width: '100%'}}>
                    Submit
                </button>
                {
                    (state.succeeded)?
                        <div style={{color:"green", background: "white", width: "20rem", marginTop: "1rem"}}>* Submitted successfully</div>
                    :
                    <div style={{background:"yellow",  width: "20rem", marginTop: "1rem"}}>* You haven't sent any information yet
                    </div>
                } 
            </form>  
       </div>
    </div>
  );
}
 
export default Contact;