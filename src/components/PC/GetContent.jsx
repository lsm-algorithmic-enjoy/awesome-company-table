import { Table, Input } from "antd";
import { EMPLOYEE_LISTS, EMPLOYEE_TABLE_COLUMNS } from "../../datacollections";
import React from "react";

const GetContent = ({ menuKey }) => {
  let content;
  switch (menuKey) {
    case "-1":
      content = (
        <div>
          디자인 변경 및 각각의 기능별로 함수형 컴포넌트를 분리해서 진행한
          프로젝트 입니다.
        </div>
      );
      break;
    case "0":
      content = (
        <div style={{ textAlign: "left" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Team Member</h2>
            <Input.Search style={{ width: "200px" }} placeholder="이름" />
          </div>
          <Table dataSource={EMPLOYEE_LISTS} columns={EMPLOYEE_TABLE_COLUMNS} />
        </div>
      );
      break;
    case "1":
    case "2":
    case "3":
    default:
      content = <div>개발중입니다!</div>;
  }
  return <div style={{ marginLeft: "200px", padding: "20px" }}>{content}</div>;
};

export default GetContent;
