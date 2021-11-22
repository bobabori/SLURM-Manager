import { useState, useEffect } from "react";
import { Fade, Form, NavItem } from "react-bootstrap";
import Select from "react-select";
import useInputState from "./hooks/useInputState";
import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Modal} from 'react-bootstrap';

var checkMan;
const EmailTypes = ["BEGIN", "END", "FAIL", "REQUEUE"];


const cluster = [
  { value: "CARYA", label: "CARYA" },
  { value: "OPUNTIA", label: "OPUNTIA" },
  { value: "SABINE", label: "SABINE" },
];

const optionNodes = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
];

const optionGPU = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
];

const optionGPUcarya = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
];

const optionCoresCarya = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },
  { value: "32", label: "32" },
  { value: "33", label: "33" },
  { value: "34", label: "34" },
  { value: "35", label: "35" },
  { value: "36", label: "36" },
  { value: "37", label: "37" },
  { value: "38", label: "38" },
  { value: "39", label: "39" },
  { value: "40", label: "40" },
  { value: "41", label: "41" },
  { value: "42", label: "42" },
  { value: "43", label: "43" },
  { value: "44", label: "44" },
  { value: "45", label: "45" },
  { value: "46", label: "46" },
  { value: "47", label: "47" },
  { value: "48", label: "48" },
];

const optionCoresSabine = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },
  { value: "32", label: "32" },
  { value: "33", label: "33" },
  { value: "34", label: "34" },
  { value: "35", label: "35" },
  { value: "36", label: "36" },
  { value: "37", label: "37" },
  { value: "38", label: "38" },
  { value: "39", label: "39" },
  { value: "40", label: "40" },
];

const optionCoresOpuntia = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
];

const minSecSet = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },
  { value: "32", label: "32" },
  { value: "33", label: "33" },
  { value: "34", label: "34" },
  { value: "35", label: "35" },
  { value: "36", label: "36" },
  { value: "37", label: "37" },
  { value: "38", label: "38" },
  { value: "39", label: "39" },
  { value: "40", label: "40" },
  { value: "41", label: "41" },
  { value: "42", label: "42" },
  { value: "43", label: "43" },
  { value: "44", label: "44" },
  { value: "45", label: "45" },
  { value: "46", label: "46" },
  { value: "47", label: "47" },
  { value: "48", label: "48" },
  { value: "49", label: "49" },
  { value: "50", label: "50" },
  { value: "51", label: "51" },
  { value: "52", label: "52" },
  { value: "53", label: "53" },
  { value: "54", label: "54" },
  { value: "55", label: "55" },
  { value: "56", label: "56" },
  { value: "57", label: "57" },
  { value: "58", label: "58" },
  { value: "59", label: "59" },
];

const hourSet = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
];

const daySet = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
];

const optionGPUsc = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
];

const memoryOptions = [
  { value: "1GB", label: "1GB" },
  { value: "2GB", label: "2GB" },
  { value: "4GB", label: "4GB" },
  { value: "8GB", label: "8GB" },
  { value: "16GB", label: "16GB" },
  { value: "32GB", label: "32GB" },
];

const memoryOptions2 = [
  { value: "1GB", label: "1GB" },
  { value: "2GB", label: "2GB" },
  { value: "4GB", label: "4GB" },
  { value: "8GB", label: "8GB" },
  { value: "16GB", label: "16GB" },
  { value: "32GB", label: "32GB" },
  { value: "64GB", label: "64GB" },
];

const moduleListSabine = [
  {
    value: "GROMACS/2018-intel-2018-GPU-enabled",
    label: "GROMACS/2018-intel-2018-GPU-enabled",
  },
  
  {
    value: "GROMACS/4.6.7-intel-2018-GPU-enabled",
    label: "GROMACS/4.6.7-intel-2018-GPU-enabled",
  },
  {
    value: "GROMACS/2016-intel-2018-GPU-enabled",
    label: "GROMACS/2016-intel-2018-GPU-enabled",
  },
  {
    value: "GROMACS/2018-intel-2018-GPU-enabled",
    label: "GROMACS/2018-intel-2018-GPU-enabled",
  },
  {
    value: "GROMACS/2018.3-intel-2017b-PLUMED-2.4.3",
    label: "GROMACS/2018.3-intel-2017b-PLUMED-2.4.3",
  },
  { value: "GROMACS/2018.3-intel-2017b", label: "GROMACS/2018.3-intel-2017b" },
  {
    value: "GROMACS/2018.3-intelcuda-2017b",
    label: "GROMACS/2018.3-intelcuda-2017b",
  },
  {
    value: "GROMACS/2018.6-intel-2017b-PLUMED-2.5.1",
    label: "GROMACS/2018.6-intel-2017b-PLUMED-2.5.1",
  },
  {
    value: "GROMACS/2018.8-intelcuda-2017b-PLUMED-2.6.1",
    label: "GROMACS/2018.8-intelcuda-2017b-PLUMED-2.6.1",
  },
  {
    value: "GROMACS/2018.8-intelcuda-2017b",
    label: "GROMACS/2018.8-intelcuda-2017b",
  },
  {
    value: "GROMACS/2019.6-intelcuda-2017b",
    label: "GROMACS/2019.6-intelcuda-2017b",
  },
  {
    value: "GROMACS/2020-intel-2019-GPU-enabled",
    label: "GROMACS/2020-intel-2019-GPU-enabled",
  },
  { value: "R/3.4.0-iomkl-2017b-bare", label: "R/3.4.0-iomkl-2017b-bare" },
  { value: "R/3.4.1/gcc", label: "R/3.4.1/gcc" },
  {
    value: "R/3.5.1-intel-2017b-X11-20171023",
    label: "R/3.5.1-intel-2017b-X11-20171023",
  },
  { value: "R/3.5.1-intel-2018b", label: "R/3.5.1-intel-2018b" },
  { value: "R/3.6.1-intel-2018b", label: "R/3.6.1-intel-2018b" },

  { value: "python/2.7", label: "python/2.7" },
  { value: "python/3.5", label: "python/3.5" },
  { value: "python/3.6", label: "python/3.6" },
  { value: "python/3.7", label: "python/3.7" },
  { value: "matlab/r2017b", label: "matlab/r2017b" },
  { value: "matlab/r2018a", label: "matlab/r2018a" },
  { value: "matlab/r2018b ", label: "matlab/r2018b " },
  { value: "matlab/r2019a", label: "matlab/r2019a" },
  { value: "matlab/r2019b", label: "matlab/r2019b" },
  { value: "matlab/r2020a", label: "matlab/r2020a" },
  { value: "matlab/r2020b", label: "matlab/r2020b" },
];

const moduleListCarya = [
 
  { value: "matlab/r2020a", label: "matlab/r2020a" },
  { value: "matlab/r2020b", label: "matlab/r2020b" },
  { value: "GROMACS/2018.8-intelcuda-2019b-PLUMED-2.6.1",label: "GROMACS/2018.8-intelcuda-2019b-PLUMED-2.6.1"},
  { value: "GROMACS/2020.4-intel-2020u2-PLUMED-2.7.0", label: "GROMACS/2020.4-intel-2020u2-PLUMED-2.7.0" },
  { value: "GROMACS/2020.4-intelcuda-2019b", label: "GROMACS/2020.4-intelcuda-2019b"},
  { value: "R/4.0.2-intel-2019b", label: "R/4.0.2-intel-2019b" },
  { value: "python/3.7", label: "python/3.7" },
];

const moduleListOpuntia = [
  { value: "matlab/r2017b", label: "matlab/r2017b" },
  { value: "matlab/r2020b", label: "matlab/r2020b" },
  { value: "matlab/r2018a", label: "matlab/r2018a" },
  { value: "matlab/r2018b", label: "matlab/r2018b" },
  { value: "matlab/r2019a", label: "matlab/r2019a" },
  { value: "matlab/r2019b", label: "matlab/r2019b" },
  { value: "matlab/r2020a", label: "matlab/r2020a" },
  {
    value: "GROMACS/4.6.7-intel-2018-GPU-enabled",
    label: "GROMACS/4.6.7-intel-2018-GPU-enabled",
  },
  {
    value: "GROMACS/2016-intel-2018-GPU-enabled",
    label: "GROMACS/2016-intel-2018-GPU-enabled",
  },
  {
    value: "GROMACS/2018-intel-2018-GPU-enabled",
    label: "GROMACS/2018-intel-2018-GPU-enabled",
  },
  {
    value: "GROMACS/2018.3-intel-2017b-PLUMED-2.4.3",
    label: "GROMACS/2018.3-intel-2017b-PLUMED-2.4.3",
  },
  { value: "GROMACS/2018.3-intel-2017b", label: "GROMACS/2018.3-intel-2017b" },
  {
    value: "GROMACS/2018.3-intelcuda-2017b",
    label: "GROMACS/2018.3-intelcuda-2017b",
  },
  {
    value: "GROMACS/2018.6-intel-2017b-PLUMED-2.5.1",
    label: "GROMACS/2018.6-intel-2017b-PLUMED-2.5.1",
  },
  {
    value: "GROMACS/2018.8-intelcuda-2017b-PLUMED-2.6.1",
    label: "GROMACS/2018.8-intelcuda-2017b-PLUMED-2.6.1",
  },
  {
    value: "GROMACS/2018.8-intelcuda-2017b",
    label: "GROMACS/2018.8-intelcuda-2017b",
  },
  {
    value: "GROMACS/2019.6-intelcuda-2017b",
    label: "GROMACS/2019.6-intelcuda-2017b",
  },
  {
    value: "GROMACS/2020-intel-2019-GPU-enabled",
    label: "GROMACS/2020-intel-2019-GPU-enabled",
  },
  { value: "R/3.4.0-iomkl-2017b-bare", label: "R/3.4.0-iomkl-2017b-bare" },
  { value: "R/3.4.1/gcc", label: "R/3.4.1/gcc" },
  { value: "R/3.5.1-intel-2017b-X11-20171023", label: "R/3.5.1-intel-2017b-X11-20171023"},
  { value: "R/3.5.1-intel-2018b", label: "R/3.5.1-intel-2018b" },
  { value: "R/3.6.1-intel-2018b", label: "R/3.6.1-intel-2018b" },
  { value: "python/2.7", label: "python/2.7" },
  { value: "python/3.5", label: "python/3.5" },
  { value: "python/3.6", label: "python/3.6" },
  { value: "python/3.7", label: "python/3.7" },
];
const moduleListDef = [{ value: "ERROR", label: "ERROR" }];

var gpuText;
function App() {
  const [jobTitle, SetJobTitle] = useState("");
  const [executableCall, handleExecutableCall] = useState("");
  const [emailAddr, SethandleEmailAddr] = useState("");
  const [allEmail, setAllEmail] = useState(false);
  const [emailNotification, setEmailNotification] = useState("");
  const [numberOfNode, setNumberOfNode] = useState("");
  const [numberOfMemory, setNumberOfMemory] = useState("");
  const [moduleValues, setModuleValues] = useState(null);
  const [numberOfCore, setNumberOfCore] = useState("");
  const [clusterType, setClusterType] = useState("");
  const [GPUNumber, setGPUNumber] = useState("");
  const [adjustGPU, setAdjustGPU] = useState(false);
  const [adjustRunTime, setAdjustRunTime] = useState(false);
  const [days, setDays] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMin] = useState("");
  const [second, setSec] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorCluster, setErrorCluster] = useState(false);
  const [errorModules, setErrorModules] = useState(false);
  const [errorExecutable, setErrorExecutable] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {}, [
    errorEmail,
    errorTitle,
    errorCluster,
    errorModules,
    errorExecutable,
  ]);

 
 function chBackcolor() {
  var f = document.getElementById('scripter');
  var h = document.getElementById('scriptT');
  setTimeout(function() {
     h.style.color = ( f.style.color== "#000000" ? '' : "#000000");
     f.style.background = ( f.style.background == "#fff2b7" ? '' : "#fff2b7");
  }, 600);
  setTimeout(function() {
    h.style.color = ( f.style.color == "#000000" ? '' : "#000000");
    f.style.background = ( f.style.background == "#fff2b7" ? '' : "#fff2b7");
  }, 1200);
  h.style.color = "#c8102e";
  f.style.background = "#d8cd9b";
 }


  const handleJob = (e) => {
    setErrorTitle(false);

    SetJobTitle(e.target.value);
  };
  const handleEmailAddr = (e) => {
    setErrorEmail(false);
    SethandleEmailAddr(e.target.value);
  };

  var email;
  
  const renderEmailType = () => {
    email = "NONE";
    let emailType = null;
    if (emailNotification.length === 0 && allEmail === false) {
      if (emailAddr !== "") {
        emailType = `#SBATCH --mail-type=${email}`;
      } else {
        email = "NONE";
        emailType = `#SBATCH --mail-type=${email}`;
      }
    } else if (emailNotification.length === 4) {
      email = "ALL";
      emailType = `#SBATCH --mail-type=${email}`;
    } else if (allEmail === true) {
      email = "ALL";
      emailType = `#SBATCH --mail-type=${email}`;
    } else {
      email = emailNotification.join(",");
      emailType = `#SBATCH --mail-type=${email}`;
    }
    
    return emailType;
  };

  const renderGPU = () => {
    if (adjustGPU) {
      gpuText = `#SBATCH --gpus-per-node=${GPUNumber}`;
    } else {
      gpuText = "";
    }
    return gpuText;
  };

  const renderCoreNode = () => {
    let ncText = null;
    if (numberOfCore || numberOfNode) {
      ncText = `#SBATCH --ntasks-per-node=${numberOfCore} -N ${numberOfNode}`;
    } else {
      ncText = "";
    }
    return ncText;
  };
  const renderTime = () => {
    let timeText = null;
    if (days || hour || minute || second) {
      timeText = `#SBATCH -t ${days * 24 + hour * 1}:${minute}:${second}`;
    } else {
      timeText = "";
    }
    return timeText;
  };
  const renderMem = () => {
    let memText = null;
    if (numberOfMemory) {
      memText = `#SBATCH --mem-per-cpu=${numberOfMemory}`;
    } else {
      memText = "";
    }
    return memText;
  };

  const getModules = () => {
    return moduleValues?.map((m) => {
      return `module load ${m.value}\n`;
    });
  };

  var codeCopy = `#!/bin/bash\n#SBATCH -J ${jobTitle}\n#SBATCH -o ${jobTitle}.o%j\n#SBATCH --mail-user=${emailAddr}\n${renderEmailType()}\n#SBATCH --ntasks-per-node=${numberOfCore} -N ${numberOfNode}\n#SBATCH -t ${
    days * 24 + hour * 1
  }:${minute}:${second}\n${renderGPU()}\n#SBATCH --mem-per-cpu=${numberOfMemory}\n${getModules()}\n${executableCall}`;
  codeCopy = codeCopy.replaceAll(",m", "m");

  var alertMsg;
  var timeWarn = "";
  var emailWarn = "";
  var jobWarn = "";
  var modWarn = "";
  var clustWarn ="";
  var execWarn = "";
  var etypeWarn = "";

  const emailBox = () => {
    var emailChecker = document.querySelectorAll(".email-checks");
    let array = [];
    emailChecker.forEach((element) => {
      array.push(element.childNodes[0].checked);
    });

    let ans = array.find((e) => e === true);
    if (!ans) {
      document.getElementById("email-checks-all").checked = true;
      setAllEmail(true);
      
      
    }

    

  }


  const Validate = () => {
    
   

    //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
    var regex = /^[A-Za-z0-9]+$/;
    //Validate TextBox value against the Regex.
    var isValid = regex.test(document.getElementById("jobTitle").value);
    if (!isValid && document.getElementById("jobTitle").pattern != "[^s]*") {
      jobWarn ="Error found in Job Title\n";
      setErrorTitle(true);
      alertMsg = true;
      isValid = false;
    
      
    } else {
      isValid = true;
      alertMsg = false;

      if (document.getElementById("executableCall").value === " ") {
        console.log("great");
        alertMsg = true;
      }
      

      return isValid;
    }
    
  };

  function validateEmail() {
    var emailID = document.getElementById("emailAddress").value;

    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || dotpos - atpos < 2) {
      alertMsg = true;
      emailWarn = "Email field is incorrect or empty\n";
      setErrorEmail(true);
    }
   
    if(email == "NONE"){
      etypeWarn = "Select Email Notification Type\n";
      alertMsg = true;
     }

    if (!clusterType) {
      console.log(clusterType);
      setErrorCluster(true);
      clustWarn = "Cluster not selected!\n";
      alertMsg = true;
      
    }
    else{

    if (moduleValues == null||moduleValues =='') {
      setErrorModules(true);
      modWarn = "No modules selected!\n";
      alertMsg = true;
      
    } 

  

    let call = document.getElementById("executableCall").value;
    if (!call) {
      setErrorExecutable(true);
     
        execWarn = "Error in Executable Call field\n";
        alertMsg = true;
      
    }
      if ((days + hour + minute + second) == 0)
         {
        alertMsg = true;
        timeWarn = "Time field must not total zero\n";
      }
  }

    if (alertMsg === true) {
      alert(
         jobWarn + emailWarn + etypeWarn + clustWarn + modWarn + execWarn + timeWarn 
      );
      copyToClipboard("Error found, please return to generator");
    } else {
      alert("Copied");
    }
    return true;
  }

  function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return window.clipboardData.setData("Text", text);
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
    ) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy"); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Single Core and MPI
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>The <em>modules</em> utility sets up your environment paths for particular versions of specified programs. It is possible to use more than one module in your job (just list all the ones you need on separate lines).</p>
        <br></br>
        <p>For example to use version <code>3.2</code> of the application <code>foo</code>, which was compiled with <code>gcc</code> version 4.9.2, you should load the module called: <code>foo/3.2-gcc-4.9.2</code></p>
        <br></br><p>You can list all available modules using the <code>module avail</code> command.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div>
      <div className="script-title" style={{ marginTop: "50px" }}>
        <p>SLURM WORKLOAD MANAGER</p>
      </div>
      <div className="script-titleGen" style={{ marginTop: "-22px" }}>
        <p>SCRIPT GENERATOR</p>
      </div>
      <div className="line"></div>
      <div className="form-container" style={{ marginBottom: "30px" }}>
        <div className="flex">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                value={jobTitle}
                className={`${errorTitle ? "borderColor" : "borderRemove"}`}
                onChange={handleJob}
                type="text"
                placeholder="my_mpi_job"
                id="jobTitle"
                pattern="[^\s]*"
              />

              <Form.Text className="text-muted">
                Create a name for your job (DO NOT USE SPACE OR SPECIAL
                CHARACTERS)
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="emailAddress">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                value={emailAddr}
                className={`${errorEmail ? "borderColor" : "borderRemove"}`}
                onChange={handleEmailAddr}
                type="email"
                placeholder="username@uh.edu"
                id="emailAddress"
              />
              <Form.Text className="text-muted">
                Enter your email address(e.g cougar123@uh.edu)
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="emailNotification">
              <Form.Label>Email Notification</Form.Label>
              <div className="email-check" style={{ fontSize: "11px" }}>
                {EmailTypes.map((type, index) => {
                  const label = type.toLocaleLowerCase();
                  return (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      className="email-checks"
                      // checked={emailNotification.includes(type)}
                      default={1}
                      disabled={allEmail === true}
                      onChange={() => {
                        if (emailNotification.includes(type)) {
                          const emails = emailNotification.filter(
                            (removeType) => removeType !== type
                          );
                          setEmailNotification(emails);
                          return;
                        }
                        setEmailNotification([...emailNotification, type]);
                      }}
                      label={`On Job ${
                        label.charAt(0).toUpperCase() + label.slice(1)
                      }`}
                    />
                  );
                })}
                <Form.Check
                  checked={allEmail}
                  id="email-checks-all"
                  onChange={() => setAllEmail(!allEmail)}
                  type="checkbox"
                  label="ALL"
                />
              </div>
              <Form.Text className="text-muted">
                Please select the type of email notifications about your job,
                you would like to receive.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="clusterType">
              <Form.Label>Cluster Name</Form.Label>
              <Select
                className={`${
                  errorCluster ? "borderColorCluster" : "borderRemove"
                }`}
                onChange={(e) => {
                  setErrorCluster(false);
                  setClusterType(e.value);
                  setAdjustGPU(!adjustGPU);
                  setGPUNumber("1");
                  {
                    gpuText = "";
                  }
                  handleExecutableCall("");
                  setModuleValues(null);
                  setDays("0");
                  setHour("4");
                  setMin("0");
                  setSec("0");
                  setAdjustRunTime(false);
                  setNumberOfCore("1");
                  setNumberOfNode("1");
                  setNumberOfMemory("1GB");
                  setAdjustGPU(false);
                  chBackcolor("#7e6f30");
                }}
                options={cluster}
                moduleValues={("", 0)}
                id="clusterType"
              
          
              />
              <Form.Text className="text-muted">
                Select cluster of choice
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Label>Number of Nodes</Form.Label>
              <Select
                value={{ value: numberOfNode, label: numberOfNode }}
                onChange={(e) => setNumberOfNode(e.value)}
                options={optionNodes}
                isDisabled={clusterType === ""}
                id="numberOfNode"
              />
              <Form.Text className="text-muted">
                Select the number of compute nodes your job will run on.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="numberOfCore">
              <Form.Label>Number of Cores Per Node</Form.Label>
              <Select
                value={{ value: numberOfCore, label: numberOfCore }}
                onChange={(e) => setNumberOfCore(e.value)}
                isDisabled={clusterType === ""}
                id="numberOfCore"
                options={(() => {
                  switch (clusterType) {
                    case "SABINE":
                      return optionCoresSabine;
                    case "CARYA":
                      return optionCoresCarya;
                    case "OPUNTIA":
                      return optionCoresOpuntia;
                    default:
                      return moduleListDef;
                  }
                })()}
              />
              <Form.Text className="text-muted">
                Select the number of processor cores per node your job will run
                on. Total number of cores requested will be the product of the
                number of nodes and this value.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Label>Job Runtime</Form.Label>
              <div className="row-container" style={{ width: "700px" }}>
                <div className="row-container">
                  <Select
                    value={{ value: days, label: days }}
                    onChange={(e) => {
                      setDays(e.value);
                    }}
                    options={daySet}
                    isDisabled={!adjustRunTime}
                    type="text"
                    placeholder="days"
                    id="days"
                  />
                  <label htmlFor="days">Days</label>
                </div>
                <div className="row-container">
                  <Select
                    value={{ value: hour, label: hour }}
                    onChange={(e) => {
                      setHour(e.value);
                    }}
                    options={hourSet}
                    isDisabled={!adjustRunTime}
                    type="text"
                    placeholder="hours"
                    id="hours"
                  />
                  <label htmlFor="days">hours</label>
                </div>
                <div className="row-container">
                  <Select
                    value={{ value: minute, label: minute }}
                    onChange={(e) => {
                      setMin(e.value);
                    }}
                    options={minSecSet}
                    isDisabled={!adjustRunTime}
                    type="text"
                    placeholder="minutes"
                    id="minutes"
                  />
                  <label htmlFor="days">min</label>
                </div>
                <div className="row-container" style={{ width: "300px" }}>
                  <Select
                    value={{ value: second, label: second }}
                    onChange={(e) => {
                      setSec(e.value);
                    }}
                    options={minSecSet}
                    isDisabled={!adjustRunTime}
                    type="text"
                    placeholder="seconds"
                    id="seconds"
                  />
                  <label htmlFor="days">sec</label>
                </div>
              </div>
              <Form.Check
                checked={adjustRunTime}
                onChange={() => setAdjustRunTime(!adjustRunTime)}
                type="checkbox"
                label="Manually Adjust Runtime"
                disabled={clusterType === ""}
              />
              <Form.Text className="text-muted">
                This sets the amount of run time you are requesting to be
                allocated for your job. The default job time is displayed. If
                you want to adjust this manually, just click the checkbox next
                to 'Manually Adjust Runtime' and this will allow you to adjust
                the controls.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="numberOfMemory">
              <Form.Label>Memory Size for Cores</Form.Label>
              <Select
                value={{ value: numberOfMemory, label: numberOfMemory }}
                onChange={(e) => setNumberOfMemory(e.value)}
                options={(() => {
                  switch (clusterType) {
                    case "SABINE":
                      return memoryOptions;
                    case "CARYA":
                      return memoryOptions2;
                    case "OPUNTIA":
                      return memoryOptions;
                    default:
                      return memoryOptions;
                  }
                })()}
                isDisabled={clusterType === ""}
              />
              <Form.Text className="text-muted">
                This sets the amount of memory you want to allocate to each core
                for your job. If you leave this in blank, your job will run with
                the default memory per core.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="checkGPU">
              <Form.Label>GPUs per node:</Form.Label>
              <Form.Check
                style={{ marginBottom: "10px" }}
                type="checkbox"
                checked={adjustGPU}
                disabled={clusterType === ""}
                onChange={() => {
                  setAdjustGPU(!adjustGPU);
                }}
                label="Select for GPU"
              />
              <Select
                value={{ value: GPUNumber, label: GPUNumber }}
                onChange={(e) => {
                  setGPUNumber(e.value);
                }}
                options={(() => {
                  switch (clusterType) {
                    case "SABINE":
                      return optionGPUcarya;
                    case "CARYA":
                      return optionGPUcarya;
                    case "OPUNTIA":
                      return optionGPU;
                    default:
                      return moduleListDef;
                  }
                })()}
                isDisabled={!adjustGPU}
                placeholder="select GPU value"
              />
            </Form.Group>
            <Form.Group controlId="moduleSelect">
              <Form.Label>Modules</Form.Label>
              <Select
                className={`${
                  errorModules ? "borderColorModules" : "borderRemove"
                }`}
                isMulti
                value={moduleValues}
                onChange={(value) => (
                  setModuleValues(value), setErrorModules(false)
                )}
                options={(() => {
                  switch (clusterType) {
                    case "SABINE":
                      return moduleListSabine;
                    case "CARYA":
                      return moduleListCarya;
                    case "OPUNTIA":
                      return moduleListOpuntia;
                    default:
                      return moduleListDef;
                  }
                })()}
                isDisabled={clusterType === ""}
                
              />
              <Form.Text className="text-muted">
              List of modules to load for your job, one per line{" "}
              <Button variant="href" className = "btnLink" onClick={() => setModalShow(true)}>
               (more...)
               </Button>
                <MyVerticallyCenteredModal
                   show={modalShow}
                   onHide={() => setModalShow(false)}
               />
              </Form.Text>
            </Form.Group>
            <Form.Group
              controlId="formBasicPassword"
              style={{ marginBottom: "300px" }}
            >
              <Form.Label>Executable Call</Form.Label>
              <Form.Control
                className={`${
                  errorExecutable ? "borderColorExecutable" : "borderRemove"
                }`}
                value={executableCall}
                onChange={(e) => (
                  handleExecutableCall(e.target.value),
                  setErrorExecutable(false)
                )}
                type="text"
                placeholder="python example.py"
                disabled={clusterType === ""}
                id="executableCall"
              />
              <Form.Text className="text-muted">
                Enter the program or complete command line statement you wish to
                run for your job. If you pipe input or pass argument, include
                those as well.
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
        <div className="space"></div>
        {/*

          Script Code

        */}
        
        <div className="flex2">
          <div id = "scriptT" className="slurm-title" style={{ marginTop: "10px" }}>
            <p>{`Cluster Name:  ${clusterType}`}</p>
          </div>
          <div id = "scripter" className="script-code" style={{ marginTop: "20px" }}>
            <div className="code">
              <span>#!/bin/bash</span>
              <span>{`#SBATCH -J ${jobTitle}`}</span>
              <span>{`#SBATCH -o ${jobTitle}.o%j`}</span>
              <p>{`#SBATCH --mail-user=${emailAddr}`}</p>
              <p>{renderEmailType()}</p>
              <p>{renderCoreNode()}</p>
              <p>{renderTime()}</p>
              <p>{renderGPU()}</p>
              <p>{renderMem()}</p>
            </div>
            <div className="code">
              {moduleValues &&
                moduleValues.map((m, index) => (
                  <p key={index}>{`module load ${m.value}`}</p>
                ))}
            </div>
            <div className="code">
              <p>{executableCall}</p>
            </div>
          </div>
          <div className="btn">
            <p>
              <Button
                id="clickBtn"
                onClick={() => {
                  if (Validate()) {
                    copyToClipboard(codeCopy);
                  }
                  validateEmail();
                }}
              >
                Copy Script
              </Button>
            </p>
          </div>
          <div>
            <p style={{ marginTop: "10px" }}>To use this script</p>
            <div className="submit-script">
              <p>
                1. Copy and paste this script into a new file in your job or
                project directory on the cluster, using an editor like nano or
                vi.
              </p>
              <p>2. Submit your job::</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
