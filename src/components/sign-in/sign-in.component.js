import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleOnChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Ya tengo una cuenta</h2>
                <span>Inicia sesi&oacute;n con tu correo electr&oacute;nico y contrase&ntilde;a</span>

                <form onSubmit={this.handleOnSubmit}>
                    <FormInput type='email' name='email' label='Correo electrónico' value={this.state.email} handleOnChange={this.handleOnChange} required />
                    <FormInput type='password' name='password' label='Contraseña' value={this.state.password} handleOnChange={this.handleOnChange} required />

                    <div className='buttons'>
                        <CustomButton type='submit'>Entrar</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Entrar con Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;