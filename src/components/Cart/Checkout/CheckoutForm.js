import useInput from "../../../hooks/use-input";

const CheckoutForm = () => {
  const {
    value: enteredName,
    isValueValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValueValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) return;

    //console.log(enteredName, enteredEmail);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must be non-empty</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Your email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must have @ in email Id</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
