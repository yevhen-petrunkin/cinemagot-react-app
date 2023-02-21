import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { signUpInputs } from 'services/signUpFormSource';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { close } from 'redux/modalSlice';

function SignUpForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const handleInput = e => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleSignUp = async e => {
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

      await setDoc(doc(db, 'favorites', res.user.uid), {});
      await setDoc(doc(db, 'watchlist', res.user.uid), {});
      await setDoc(doc(db, 'seen', res.user.uid), {});
      dispatch(close());
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>

      <form onSubmit={handleSignUp}>
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
