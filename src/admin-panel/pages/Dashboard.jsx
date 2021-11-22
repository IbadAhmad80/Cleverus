import React, { useEffect } from "react";

import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import statusCards from "../assets/JsonData/status-card-data.json";

const chartOptions = {
  series: [
    {
      name: "Total Resturants",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Total Hotels",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const chartOptions1 = {
  series: [
    {
      name: "Total Barbers",
      data: [40, 30, 70, 120, 80, 44, 10, 70, 20, 100],
    },
    {
      name: "Total Hospitals",
      data: [10, 20, 30, 80, 40, 45, 40, 10, 61, 100],
    },
  ],
  options: {
    color: ["green", "maroon"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};
const adminUsers = {
  head: ["Name", "Email"],
  body: [
    {
      username: "john doe",
      email: "john@gmail.com",
    },
    {
      username: "frank iva",
      email: "john@gmail.com",
    },
    {
      username: "anthony baker",
      email: "john@gmail.com",
    },
    {
      username: "frank iva",
      email: "john@gmail.com",
    },
    {
      username: "anthony baker",
      email: "john@gmail.com",
    },
  ],
};

const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCusomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.email}</td>
  </tr>
);

const customUsers = {
  header: ["ID", "Name", "Email", "Action"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      email: "john@gmail.com",
      status: "delete",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      email: "john@gmail.com",
      status: "delete",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      email: "john@gmail.com",
      status: "delete",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      email: "john@gmail.com",
      status: "delete",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      email: "john@gmail.com",
      status: "delete",
    },
  ],
};

const orderStatus = {
  delete: "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.email}</td>
    <td>
      <Badge
        type={orderStatus[item.status]}
        content={item.status.toUpperCase()}
      />
    </td>
  </tr>
);

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div style={{ marginTop: "-20px" }}>
      <h2 className="page-header">Admin Panel</h2>
      <div className="row mx-auto w-100">
        <div className="col-12">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="row d-flex justify-content-center"
        style={{ height: "350px" }}
      >
        <div className="col-5 card full-height">
          {/* chart */}
          <Chart
            options={
              themeReducer === "theme-mode-dark"
                ? {
                    ...chartOptions.options,
                    theme: { mode: "dark" },
                  }
                : {
                    ...chartOptions.options,
                    theme: { mode: "light" },
                  }
            }
            series={chartOptions.series}
            type="line"
            height="100%"
          />
        </div>

        <div className="col-5 offset-1 card full-height">
          {/* chart */}
          <Chart
            options={
              themeReducer === "theme-mode-dark"
                ? {
                    ...chartOptions1.options,
                    theme: { mode: "dark" },
                  }
                : {
                    ...chartOptions1.options,
                    theme: { mode: "light" },
                  }
            }
            series={chartOptions1.series}
            type="line"
            height="100%"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>Admin Users</h3>
            </div>
            <div className="card__body">
              <Table
                headData={adminUsers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={adminUsers.body}
                renderBody={(item, index) => renderCusomerBody(item, index)}
              />
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>Custom Users</h3>
            </div>
            <div className="card__body">
              <Table
                headData={customUsers.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={customUsers.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
