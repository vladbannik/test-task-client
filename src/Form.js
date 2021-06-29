import './App.css';
import { useForm } from 'react-hook-form'
import * as axios from 'axios'


function Form(props) {

  const { colors } = props
  let colorOption = []
  if (colors) {
    colorOption = colors.map(color => <option key={color}>{color}</option>)
  }

  const { register,
    handleSubmit,
    formState: { errors, submitCount },
    watch
  } = useForm({ mode: 'onChange' })

  const onSubmit = data => {
    const apiUrl = "http://localhost:8080/"
    axios.post(apiUrl, data).then((resp) => {
      if (resp.status === 200)
        alert("Added")
    }).catch(() => {
      alert("Oops, something went wrong")
    })
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>User aplication form</h1>
      <input defaultValue="UserName" {...register('user', { required: true })} />
      {errors.user && <i>Required field</i>}
      <br />
      <select  {...register('color', { required: true })}>
        {colorOption}
      </select>
      {errors.color && <i>Required field</i>}
      <br />
      <input type='submit' />
    </form>
  );
}

export default Form;
