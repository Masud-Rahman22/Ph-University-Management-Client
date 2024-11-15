import { Button } from "antd"
import PHForm from "../../../components/form/PHFrom"
import PHInput from "../../../components/form/PHInput"
import { FieldValues, SubmitHandler } from "react-hook-form"

const CreateStudent = () => {
  const onSubmit : SubmitHandler<FieldValues> = (data)=>{
    console.log(data)
  }
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput name="name" type="text" label="Name"></PHInput>
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  )
}

export default CreateStudent
