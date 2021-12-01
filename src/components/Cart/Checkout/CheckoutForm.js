import useInput from "../../../hooks/use-input";
import classes from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
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

  const {
    value: enteredStreet,
    isValueValid: enteredStreetIsValid,
    hasError: streetInputIsInvalid,
    valueChangeHandler: streetChangedHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreetInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPostal,
    isValueValid: enteredPostalIsValid,
    hasError: postalInputIsInvalid,
    valueChangeHandler: postalChangedHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetPostalInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCity,
    isValueValid: enteredCityIsValid,
    hasError: cityInputIsInvalid,
    valueChangeHandler: cityChangedHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredStreetIsValid &&
    enteredPostalIsValid &&
    enteredCityIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredStreetIsValid ||
      !enteredPostalIsValid ||
      !enteredCityIsValid
    )
      return;

    // submit data
    //console.log(enteredName, enteredEmail);
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal,
    });

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput();
    resetStreetInput();
    resetPostalInput();
    resetCityInput();
  };

  const nameInputClass = `${classes.control} ${
    nameInputIsInvalid ? classes.invalid : ""
  }`;

  const emailInputClass = `${classes.control} ${
    emailInputIsInvalid ? classes.invalid : ""
  }`;
  const streetInputClass = `${classes.control} ${
    streetInputIsInvalid ? classes.invalid : ""
  }`;
  const postalInputClass = `${classes.control} ${
    postalInputIsInvalid ? classes.invalid : ""
  }`;
  const cityInputClass = `${classes.control} ${
    cityInputIsInvalid ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={formSubmissionHandler}>
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
          <p className={classes["error-text"]}>Name must be non-empty</p>
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
          <p className={classes["error-text"]}>Email must have @ in email Id</p>
        )}
      </div>

      <div className={streetInputClass}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangedHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
        {streetInputIsInvalid && (
          <p className={classes["error-text"]}>Street must be non-empty</p>
        )}
      </div>

      <div className={postalInputClass}>
        <label htmlFor="postal">Postal</label>
        <input
          type="text"
          id="postal"
          onChange={postalChangedHandler}
          onBlur={postalBlurHandler}
          value={enteredPostal}
        />
        {postalInputIsInvalid && (
          <p className={classes["error-text"]}>Postal must be non-empty</p>
        )}
      </div>

      <div className={cityInputClass}>
        <label htmlFor="city">city</label>
        <input
          type="text"
          id="city"
          onChange={cityChangedHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityInputIsInvalid && (
          <p className={classes["error-text"]}>City must be non-empty</p>
        )}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
