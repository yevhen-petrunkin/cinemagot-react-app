import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from 'redux/selectors';
import { signUp } from 'redux/redux-operations/firebaseOperations';
import { signUpInputs } from 'services/sources/signUpFormSource';
import { closeModal } from 'redux/redux-slices/modalSlice';

function SignUpForm() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleInput = e => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleSignUp = async e => {
    e.preventDefault();
    dispatch(signUp(data));
    setData({});
    sessionStorage.removeItem('mute');
    if (!isError && !isLoading) {
      dispatch(closeModal());
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
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
          {isError && (
            <span>Oops... Something went wrong. Please try again!</span>
          )}
        </form>
      )}
    </>
  );
}

export default SignUpForm;
