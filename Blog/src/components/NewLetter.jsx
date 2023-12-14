const NewLetter = () => {
  return (
    <div className="signup-card p-3 mb-5">
      <h3 className="text-center font-sans">Sign up for the newsletter</h3>
      <div className="d-flex justify-content-center">
      <p className="text-s px-2 col-md-8 text-center">
        If you want relevant updates occasionally, sign up for the private
        newsletter. Your email is never shared.
      </p></div>
      <div className="d-flex justify-content-center">
        <div className="">
            <input type="text" className="w-100 px-2 py-1 input-signup" />
        </div>
        <div className="">
            <button className="sign-up">SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
