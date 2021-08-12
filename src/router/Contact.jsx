
import React, { useState } from 'react';

const Contact = () => {


    const [data, setdata] = useState({
        fullname: "",
        mobile: "",
        email: "",
        message: ""

    })

    const changeevent = (event) => {
        const { name, value } = event.target;
        setdata((preval) => {

            return {
                ...preval,
                [name]: value,
            }

        })


    }

    const formsub = (e) => {
        e.preventDefault();
        alert(`Nane is: ${data.fullname} Moblie no is: ${data.mobile}
 Email-id is: ${data.email} message is: ${data.message} `)
 setdata({
    fullname: "",
    mobile: "",
    email: "",
    message: ""

})
    }
    return (
        <>

            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-10 mx-auto">
                        <form onSubmit={formsub}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={changeevent} placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Mobile no</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="mobile" value={data.mobile} onChange={changeevent} placeholder="mobile no." />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={changeevent} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={changeevent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;