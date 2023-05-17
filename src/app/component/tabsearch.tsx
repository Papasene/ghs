"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { Bai_Jamjuree } from "@next/font/google";
import * as React from "react";
import { MdOutlineAccountBox } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import TabSearchBox from "./tabsearchbox";

const jam = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabSearch = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "170%" }}>
      <Box sx={{ borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="w-full flex "
        >
          <Tab
            label="Rechercher"
            {...a11yProps(0)}
            icon={<MdOutlineAccountBox className="" />}
            iconPosition="start"
            className={`${jam.className} bg-white font-bold border border-r-2`}
          />
          <Tab
            label="Tracker"
            {...a11yProps(1)}
            icon={<TbFileInvoice />}
            iconPosition="start"
            className={`${jam.className} font-bold bg-gray-100 `}
          />
          <Tab
            label="Devis"
            {...a11yProps(0)}
            icon={<MdOutlineAccountBox className="" />}
            iconPosition="start"
            className={`${jam.className} bg-gray-100 font-bold border-r-2`}
          />
          <Tab
            label="Retraits & Livraisons"
            {...a11yProps(0)}
            icon={<MdOutlineAccountBox className="" />}
            iconPosition="start"
            className={`${jam.className} bg-gray-100 font-bold border-r-2`}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TabSearchBox />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </Box>
  );
};

export default TabSearch;
