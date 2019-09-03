import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleOnSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword)
            return alert('Las constraseñas no coinciden.');

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error.message);
        }
    }

    handleOnChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-7 col-md-offset-1'>
                <div className='sign-up'>
                    <h2 className='title'>Crea una nueva cuenta.</h2>
                    <span>Reg&iacute;strate con tu correo electr&oacute;nico y contrase&ntilde;a</span>
                    <form className='sign-up-form' onSubmit={this.handleOnSubmit}>
                        <FormInput type='text' name='displayName' label='Nombre completo' value={displayName} handleOnChange={this.handleOnChange} required />
                        <FormInput type='email' name='email' label='Correo electrónico' value={email} handleOnChange={this.handleOnChange} required />
                        <FormInput type='password' name='password' label='Contraseña' value={password} handleOnChange={this.handleOnChange} required />
                        <FormInput type='password' name='confirmPassword' label='Repetir contraseña' value={confirmPassword} handleOnChange={this.handleOnChange} required />

                        <CustomButton type='submit'>Registrarme</CustomButton>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;