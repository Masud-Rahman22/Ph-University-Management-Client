import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParam } from "../../../types";

export type TTableData = Pick<TAcademicSemester, "_id" | "name" | "year" | "endMonth" | "startMonth">

const AcademicSemester = () => {
  const [params,setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: semesterData , isFetching} = useGetAllSemestersQuery(params);
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
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      filters: [
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2027",
          value: "2027",
        },
        {
          text: "2030",
          value: "2030",
        },
      ],
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
    {
      title: "Action",
      key: "x",
      render : ()=>{
        return <div><Button>Update</Button></div>
      }
    }
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if(extra.action=="filter"){
      const queryParams : TQueryParam[]= [];

      filters.name?.forEach((item)=>
        queryParams.push({name:"name",value:item})
      )
      filters.year?.forEach((item)=>
        queryParams.push({name:"year",value:item})
      )

      setParams(queryParams)
    }
  };

  return (
    <Table<TTableData>
      columns={columns}
      loading={isFetching}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
