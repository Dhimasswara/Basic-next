import InputFormAuth from '@/Components/Form/InputFormAuth';
import Link from 'next/link';
import style from '../../Components/LayoutAuth/style.module.css'
import LayoutAuth from '@/Components/LayoutAuth';

const Login = () => {

  return (
      <LayoutAuth title="Welcome" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.">
            <InputFormAuth title="Email" name="email" type="email" />
            <InputFormAuth title="Password" name="password" type="password" />

            <div className="d-grid mb-2 mt-3 text-light">
              <button className={`btn ${style.btn} text-light`} type="button">
                Login
              </button>
            </div>
            <div className="forgotPassword text-end mb-3">
              <Link to={'/forgot-password'} className={`link-dark text-decoration-none ${style.formLabel}`} style={{ fontSize: '14px' }} href="">
                Forgot Password?
              </Link>
            </div>
            <div className={`loginLink text-center mt-3 ${style.formLabel}`}>
              <p>
                Don’t have an account?{' '}
                <Link href={'/Register'} style={{ textDecoration: 'none', color: 'rgb(88, 85, 173)' }}>
                  {' '}
                  Sign Up
                </Link>
              </p>
            </div>
      </LayoutAuth>
  );
};

export default Login;
