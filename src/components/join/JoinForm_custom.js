<div className="container-fluid">
  <div className="row">
    <div className="col-md-10" id="joinForm">
      <p>
        At Online Casino Share we take pride in building and maintaining
        relationships with our affiliate partners. Please ensure that all your
        contact details are entered correctly so we can work together every step
        of the way.
      </p>
      <p>
        <a href="<?= registerURL(); ?>">Sign up</a>
      </p>
      <h2 className="mb-4 mt-4">CREATE AFFILIATE ACCOUNT</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => onChange(e)}
            required
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => onChange(e)}
            required
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="text"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Confirm password</label>
          <input
            className="form-control"
            type="text"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
            placeholder="Repeat your password"
          />
        </div>
        <button className="btn btn-info mt-1 mb-4" type="submit">
          Register
        </button>
      </form>
    </div>
  </div>
</div>;
