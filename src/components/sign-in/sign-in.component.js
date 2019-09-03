import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
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

    handleOnSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.error(error.message);
        }
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-0'>
                <div className='sign-in'>
                    <h2 className='title'>Ya tengo una cuenta</h2>
                    <span>Inicia sesi&oacute;n con tu correo electr&oacute;nico y contrase&ntilde;a</span>

                    <form onSubmit={this.handleOnSubmit}>
                        <FormInput type='email' name='email' label='Correo electrónico' value={email} handleOnChange={this.handleOnChange} required />
                        <FormInput type='password' name='password' label='Contraseña' value={password} handleOnChange={this.handleOnChange} required />

                        <div className='row around-xs'>
                            <CustomButton size='col-xs-12 col-sm-12 col-md-12' type='submit'>Entrar</CustomButton>
                            <CustomButton size='col-xs-12 col-sm-12 col-md-12' isGoogleSignIn onClick={signInWithGoogle}>Entrar con Google</CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;