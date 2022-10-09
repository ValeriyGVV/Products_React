import {Button, Col, Form} from 'react-bootstrap';
import {useEffect, useRef, useState} from "react";
import {Navigate} from "react-router-dom";

function Profile({user, setUser}) {
  const loginRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const [flag, setFlag] = useState(false);

  console.log(user, setUser);

  function saveLogin() {
    const newLogin = {
      login: loginRef.current.value,
      email: emailRef.current.value,
      age: ageRef.current.value
    }
    setUser(newLogin);
    setFlag(true);
  }

  return <Col xs={12}>
    <Form.Group>
      <Form.Label className={'mt-3'}>Login</Form.Label>
      <Form.Control defaultValue={user?.login} ref={loginRef}
                    type="text" placeholder="Enter login"/>
      <Form.Label className={'mt-3'}>Email</Form.Label>
      <Form.Control defaultValue={user?.email} ref={emailRef}
                    type="email" placeholder="Enter email" />
      <Form.Label className={'mt-3'}>Age</Form.Label>
      <Form.Control defaultValue={user?.age} ref={ageRef}
                    type="number" placeholder="Enter age" />
      <Button variant={'primary'}
              size={'lg'} className={'mt-4'} onClick={saveLogin}>Save</Button>
    </Form.Group>
    {flag ? <Navigate to={'/products'} /> : ''}
  </Col>
}

export default Profile;


//
// const newForm = new FormData();
// newForm.append('login', loginRef.current.value);
// newForm.append('email', emailRef.current.value);
// newForm.append('age', ageRef.current.value);
// newForm.append('photo', photoRef.current.files[0]);
// axios.post({
//   method: "post",
//   url: "myurl",
//   data: newForm,
//   headers: { "Content-Type": "multipart/form-data" },
// })
///*<Form.Control className={'mt-3'} type={'file'} placeholder={'Load your photo'} ref={photoRef} accept="image/*"></Form.Control>*/