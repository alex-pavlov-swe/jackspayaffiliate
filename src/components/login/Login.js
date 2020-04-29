import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  document.title = 'JacksPay Affiliate - Log In';

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    setTimeout(() => {
      var url = '/user';
      window.location = url;
    }, 2000);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center" id="login-affiliate">
          <h1>LOG IN</h1>
          <form
            className="mt-3"
            method="post"
            action="https://affil-adm.casinocontroller.com/affiliate/login?group=103"
          >
            <input type="hidden" name="_group_" value="103" />
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
                required
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                required
                minLength="6"
                placeholder="Password"
              />
            </div>
            <button
              className="btn btn-info bg-dark w-100 mt-3 mb-4"
              type="submit"
              name="submit"
              onSubmit={(e) => onSubmit(e)}
            >
              Sign in
            </button>
          </form>
          <a className="text-dark" href="#">
            I forgot my password
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
