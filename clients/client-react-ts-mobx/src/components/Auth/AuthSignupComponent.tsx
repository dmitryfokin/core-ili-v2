import React from 'react'
import { Formik, FormikHelpers, Form, Field } from 'formik'
import { AuthSignupType } from '../../store/authStore'
import { TextField } from 'formik-material-ui'
import { Button, LinearProgress, Box } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import * as Yup from 'yup'

const useStyles = makeStyles( ( theme: Theme ) => ({
    textField: {
      width: '95%',
      marginBottom: theme.spacing( 3 ),
    },
  })
)

const SignupSchema = Yup.object().shape( {
  name: Yup.string()
    .min( 2, 'Too Short!' )
    .max( 50, 'Too Long!' )
    .required( 'Required' ),
  password: Yup.string()
    .min( 2, 'Too Short!' )
    .required( 'Required' ),
  email: Yup.string()
    .email( 'Invalid email' )
    .required( 'Required' ),
} )

export const AuthSignupComponent: React.FC = () => {
  const classes = useStyles()

  const initialFormicValues: AuthSignupType = {
    name: '',
    email: '',
    password: '',
  }

  const submitHandler = (
    values: AuthSignupType,
    actions: FormikHelpers<AuthSignupType> ) => {
    actions.setSubmitting( false )
  }

  return (
    <Formik initialValues={initialFormicValues}
            onSubmit={submitHandler}
            validationSchema={SignupSchema}
    >
      {( {submitForm, isSubmitting} ) => (
        <Form>
          <Box pt={5}
               display="flex"
               flexDirection="column"
               alignItems="center"
          >
            <Field
              component={TextField}
              className={classes.textField}
              name="email"
              type="email"
              label="Email"
              fullWidth
              autoFocus
            />
            <Field
              component={TextField}
              className={classes.textField}
              name="name"
              type="name"
              label="Name"
              fullWidth
            />
            <Field
              component={TextField}
              className={classes.textField}
              type="password"
              label="Password"
              name="password"
              fullWidth
            />
            {isSubmitting && <LinearProgress/>}
            <Box mt={5}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Sign up
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  )
}
