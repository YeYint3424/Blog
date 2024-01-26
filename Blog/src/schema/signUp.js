import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        'Password must contain at least one letter and one number'
      )
    .required('Password is required'),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default SignUpSchema;
export const signInUser = Yup.object().shape({
    username: Yup.string().required('Name is required'),
    confirm_password: Yup.string().notRequired(),
  });
  export const createBlogSchema= Yup.object().shape({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
    category: Yup.string().required('Category is required'),
    url_list: Yup.array().of(
      Yup.object().shape({
        img: Yup.string().url('Image URL is not valid').required('Image URL is required'),
      })
    ),
  })