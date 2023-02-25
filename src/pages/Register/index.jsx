import InputFormAuth from "@/Components/Form/InputFormAuth";
import Link from "next/link";
import style from '../../Components/LayoutAuth/style.module.css'
import AuthLayout from "@/Components/LayoutAuth";


const Register = () => {


  return (
    <AuthLayout title="Halo, Pewpeople!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.">
    
      <InputFormAuth title="Name" name="name" type="text"  />
      <InputFormAuth title="Email Address" name="email" type="text"  />
      <InputFormAuth title="Phone Number" name="phone_number" type="number"  />
      <InputFormAuth title="Password" name="password" type="password"  />
      <InputFormAuth title="Confirm Password" name="confirmPassword" type="password"/>
      <InputFormAuth title="Confirm Password" name="confirmPassword" type="password"/>

      <InputFormAuth title="Confirm Password" name="confirmPassword" type="password"/>
      <InputFormAuth title="Confirm Password" name="confirmPassword" type="password"/>


      <div className="form-check mb-3 customCheck">
        <input className="form-check-input" type="checkbox" value=""  id={style.flexCheckDefault} />
        <label className={`form-check-label ${style.formLabel}`} for={style.flexCheckDefault}>
          I agree to terms & conditions
        </label>
      </div>
      <div className="d-grid mb-2 mt-3">
        <button className={`btn ${style.btn} text-light`} type="button" /* disabled={!(checkTerms && data.name && data.email && data.password && data.phone_number)} */>
          Register
        </button>
      </div>
      <div className={`loginLink text-center mt-3 ${style.formLabel}`}>
        <p>
          Already have account?{' '}
          <Link href={'/Login'} style={{ textDecoration: 'none', color: 'rgb(239, 200, 26)' }}>
            {' '}
            Log in Here
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
