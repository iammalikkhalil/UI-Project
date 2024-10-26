import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Table } from "../../components";

export default function OrderLists() {
  const headings = ["Name", "Age", "Email", "Occupation", "Actions"];
  const bodyData = [
    [
      "John Doe",
      "25",
      "johndohghgge@example.com",
      "Engineer",
      [
        {
          label: "Edit",
          color: "success",
          onClick: () => console.log("Edit John"),
        },
      ],
    ],
    [
      "Jane Smith",
      "30",
      "janesmith@domain.com",
      "Designer",
      [
        {
          label: "Delete",
          color: "danger",
          onClick: () => console.log("Delete Jane"),
        },
        {
          label: "Edit",
          color: "success",
          onClick: () => console.log("Edit Jane"),
        },
      ],
    ],
    [
      "Alex Johnson",
      "28",
      "alexj@example.com",
      "Doctor",
      [
        {
          label: "View",
          color: "info",
          onClick: () => console.log("View Alex"),
        },
      ],
    ],
    [
      "Michael Brown",
      "35",
      "michael@domain.com",
      "Lawyer",
      [
        {
          label: "Edit",
          color: "success",
          onClick: () => console.log("Edit Michael"),
        },
      ],
    ],
  ];

  return (
    <SafeAreaView>
      <Table
        headings={headings}
        bodyData={bodyData}
        emailColumnIndex={[2, 3]}
        actionColumnIndex={4}
        tableTitle={"Orders List"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
