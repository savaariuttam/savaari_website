import React from 'react';
import Input from './Input';
const SignupElement = () => {
    return (
        <>
            {/*.......................................... signup page ......................................................................*/}
            <form>
                <div className="heading-one">
                    <h3>Create an account!</h3>
                    <p>Fill the form to create an account</p>
                </div>
                <Input label="First Name" type="text" name="Firstname" placeholder="First Name" maxLength required />
                <Input label="Last Name" type="text" name="Lastname" placeholder="Last Name" maxLength required />
                <Input label="Email ID" type="email" name="Email" placeholder="Email ID" maxLength required />
                <Input label="Phone Number" type="tel" name="phone" placeholder="Phone Number" maxLength="10" required />
                <Input label="Password" type="password" name="Password" placeholder="Password******" maxLength required />
                <Input label="Confirm Password" type="password" name="Password1" placeholder="******" maxLength required />
                <div className="form-group">
                    <input className="btn btn-block btn-blue form-control" type="submit" value="Create An Account " />
                </div>
            </form >
        </>
    );
}
export default SignupElement;