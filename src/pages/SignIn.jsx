import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth';

export default function SignIn()
{
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
    }

    return (
        <div className='sign-in'>
            <h1>Sign in with Google to continue!</h1>
            <button onClick={signInWithGoogle}>
                <i className='fa-brands fa-google'></i>
                Sign In 
            </button>
        </div>
    );
}
