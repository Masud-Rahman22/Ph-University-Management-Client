import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";

export type TTableData = Pick<TAcademicSemester, "_id" | "name" | "year" | "endMonth" | "startMonth">

const AcademicSemester = () => {
  const [params,setParams] = useState([]);
  const { data: semesterData } = useGetAllSemestersQuery(params);
  const tableData = semesterData?.data?.data?.map(
    ({ _id, name, year, endMonth, startMonth }:TTableData) => ({
      key: _id,
      name,
      year,
      endMonth,
      startMonth,
    })
  )
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if(extra.action=="filter"){
      const queryParams = [];

      filters.name?.forEach((item)=>
        queryParams.push({name:"name",value:item})
      )

      setParams(queryParams)
    }
  };

  return (
    <Table<TTableData>
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
