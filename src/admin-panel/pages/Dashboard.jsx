import React, { useEffect } from "react";

import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import { db } from "../../firebase";

import ClipLoader from "react-spinners/ClipLoader";

import axios from "axios";
import cogoToast from "cogo-toast";

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

const Dashboard = () => {
  const [allUser, setAllUser] = React.useState([]);
  const [customUser, setCustomUsers] = React.useState([]);
  const [adminUser, setAdminUsers] = React.useState([]);
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);
  const [businessCount, setBusinessCounts] = React.useState(null);

  const businessCounts = [
    {
      icon: "bx bx-hotel",
      count: businessCount && businessCount?.hotels,
      title: "Total Hotels",
    },
    {
      icon: "bx bx-restaurant",
      count: businessCount && businessCount?.resturants,
      title: "Total Resturants",
    },
    {
      icon: "bx bx-moon",
      count: businessCount && businessCount?.hospitals,
      title: "Total Hospitals",
    },
    {
      icon: "bx bx-cart",
      count: businessCount && businessCount?.barbers,
      title: "Total Barbers",
    },
  ];

  React.useEffect(() => {
    axios
      .get("/api/businessCounts")
      .then(({ data }) => {
        setBusinessCounts(data);
      })
      .catch((err) => {
        cogoToast.error(err);
      });
  }, []);

  const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

  const renderCusomerBody = (item, index) => (
    <tr key={index}>
      <td>{item.username}</td>
      <td>{item.email}</td>
    </tr>
  );

  const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

  const renderOrderBody = (item, index) => (
    <tr key={index}>
      <td>{item.provider}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>
        <Badge type={"danger"} content="Delete" />
      </td>
    </tr>
  );
  React.useEffect(() => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setAllUser(documents);
        documents.map((doc) => {
          if (doc.role === "admin") {
            setAdminUsers((prevUsers) => [
              ...prevUsers,
              { username: doc.name, email: doc.email },
            ]);
          } else {
            setCustomUsers((prevUsers) => [
              ...prevUsers,
              {
                username: doc.name,
                email: doc.email,
                provider: doc.authProvider,
              },
            ]);
          }
        });
      });
  }, []);

  const customUsers = {
    header: ["Provider", "Name", "Email", "Action"],
    body: customUser,
  };

  const adminUsers = {
    head: ["Name", "Email"],
    body: adminUser,
  };

  return (
    <div style={{ marginTop: "-20px" }}>
      <h2 className="page-header">Admin Panel</h2>
      <div className="row mx-auto w-100">
        <div className="col-12">
          <div className="row">
            {businessCounts.map((item, index) => (
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
      <div className="row px-2 d-flex justify-content-center">
        <div className="col-6 ">
          {/* chart */}
          <div className="card" style={{ height: "320px" }}>
            {" "}
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
        </div>

        <div className="col-6  ">
          <div className="card" style={{ height: "320px" }}>
            {" "}
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
      </div>
      <div className="row px-2">
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>Admin Users</h3>
            </div>
            <div className="card__body">
              <Table
                headData={adminUsers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={adminUser}
                renderBody={(item, index) => renderCusomerBody(item, index)}
                type={"admin"}
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
                bodyData={customUser}
                renderBody={(item, index) => renderOrderBody(item, index)}
                type={"custom"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
