import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/AcademicSemesterApi";

const AcademicSemester = () => {
    const {data} = useGetAllSemestersQuery(undefined)
    console.log(data)
  return (
    <div>AcademicSemester component</div>
  )
}

export default AcademicSemester;