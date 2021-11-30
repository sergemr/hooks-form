import React from 'react';
import { cleanup, render,screen,fireEvent, act  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainForm from './MainForm';

describe('<MainForm />', () => {
  afterEach(cleanup);
 
  test('it should mount', () => {
    const { getByTestId } = render(<MainForm />);
    const mainForm = getByTestId('MainForm');

    expect(mainForm).toBeInTheDocument();
  });
 
  
  test('password cannot have numbers', async () => {
    const onClick = jest.fn()
    
    const {getByRole,findByRole, findByText,findByLabelText, getByLabelText}=   render(<MainForm onSubmit={onClick}/>)
    const pwdInput  = await findByLabelText('password')
    await  act(async () => {
     
      /* fire events that update state */
      fireEvent.input(pwdInput, { target: { value: '123' } });  
      fireEvent.submit(await findByRole('button'))
      const error  = await findByText('cannot have numbers')
      expect(error).toBeInTheDocument();
  });   

  });
  
  
  test('age range', async () => {
    const onClick = jest.fn()
    
    const {getByRole,findByRole, findByText,findByLabelText, getByLabelText}=   render(<MainForm onSubmit={onClick}/>)
    const ageInput  = await findByLabelText('age')
    await  act(async () => {
     
      /* fire events that update state */
      fireEvent.input(ageInput, { target: { value: '1000' } });  
      fireEvent.submit(await findByRole('button'))
      const error  = await findByText('Max is 99')
      expect(error).toBeInTheDocument();
  });   

  });

  
});