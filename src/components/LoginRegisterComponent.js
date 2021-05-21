// eslint-disable-next-line
import { Tab } from 'bootstrap/dist/js/bootstrap';

function LoginRegister() {

    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <ul className="nav nav-tabs" id="myTab">
                        <li className="nav-item">
                            <a href="#login" className="nav-link active" role="tab" data-toggle="tab">LOGIN</a>
                        </li>
                        <li className="nav-item">
                            <a href="#register" className="nav-link" role="tab" data-toggle="tab">REGISTER</a>
                        </li>
                    </ul>
                
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade show active" id="login">
                            <div className="col-12 col-md-9">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="firstname" className="col-md-2 col-form-label">Email</label>
                                        <div className="col-md-10">
                                            <input type="text" name="email" id="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="firstname" className="col-md-2 col-form-label">Password</label>
                                        <div className="col-md-10">
                                            <input type="text" name="password" id="password" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="offset-md-2 col-md-10">
                                            <button type="submit" className="btn btn-primary">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade show" id="register">
                            <div className="col-12 col-md-9">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="firstname" className="col-md-2 col-form-label">Username</label>
                                        <div className="col-md-10">
                                            <input type="text" name="username" id="username" className="form-control" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="firstname" className="col-md-2 col-form-label">Email</label>
                                        <div className="col-md-10">
                                            <input type="text" name="email" id="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="firstname" className="col-md-2 col-form-label">Password</label>
                                        <div className="col-md-10">
                                            <input type="text" name="password" id="password" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="offset-md-2 col-md-10">
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;