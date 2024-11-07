import { FieldValues, SubmitHandler } from "react-hook-form"
import PHForm from "../../../components/form/PHFrom"
// import PHInput from "../../../components/form/PHInput"
import { Button, Col, Flex } from "antd"
import PHSelect from "../../../components/form/PHSelect"

const nameOptions = [
  {
    value: "01",
    label: "Autumn"
  },
  {
    value: "02",
    label: "Summer"
  },
  {
    value: "03",
    label: "Fall"
  }
]

const CreateAcademicSemester = () => {
    const onSubmit : SubmitHandler<FieldValues> = (data)=>{
        const semesterData = {
          name: data.label,
          code: data.value
        }
        console.log(semesterData)
    } 
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
    <PHForm onSubmit={onSubmit}>
        {/* <PHInput type="text" name="name" label="name"></PHInput>
        <PHInput type="text" name="year" label="year"></PHInput> */}
        <PHSelect label='Name' name='name' options={nameOptions}></PHSelect>
        <Button htmlType="submit">Submit</Button>
    </PHForm>
    </Col>
    </Flex>
  )
}

export default CreateAcademicSemester