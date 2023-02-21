import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../firebase';
// import { useNavigate } from 'react-router-dom';
import { signUpInputs } from 'services/signUpFormSource';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

function SignUpForm() {
  //   const dispatch = useDispatch();
  // const [username, setUsername] = useState('');
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  // const navigate = useNavigate();

  const handleInput = e => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(auth.currentUser, {
        displayName: data.username,
      });

      await setDoc(doc(db, 'users', res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>

      <form onSubmit={handleLogin}>
        {signUpInputs.map(({ id, label, type, placeholder }) => (
          <div key={id}>
            <label>
              {label}
              <input
                id={id}
                onChange={handleInput}
                type={type}
                value={data.id}
                placeholder={placeholder}
                required
              />
            </label>
          </div>
        ))}

        <button type="submit">Sign Up</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </>
  );
}

export default SignUpForm;
