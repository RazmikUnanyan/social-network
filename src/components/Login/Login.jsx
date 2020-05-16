import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validation/validation";
import {Input} from "../common/Form/Form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"


const LoginForm = ({handleSubmit, error}) => {

    return (
        <form className={style.login} onSubmit={handleSubmit}>
            <div>
                <Field
                    name={"email"}
                    placeholder={"Email"}
                    component={Input}
                    validate={[required]}/>
            </div>
            <div>
                <Field
                    name={"password"}
                    type={"password"}
                    placeholder={"Password"}
                    component={Input}
                    validate={[required]}/>
            </div>
            <div>
                <Field
                    name={"remenberMe"}
                    type={"checkbox"}
                    component={Input}/>remeber me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>)
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);