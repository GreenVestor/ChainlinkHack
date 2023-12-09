import { ethers } from "ethers";
import { greenVestorContract } from "../config";
import greenVestorAbi from "../artifacts/contracts/GreenVestor.json";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { WagmiConfig, useWalletClient } from "wagmi";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

export default function GreenVestor() {
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [capital, setCapital] = useState("");
  const [projectAddress, setProjectAddress] = useState("");
  const [investAmount, setInvestAmount] = useState("");
  const [payoutAddress, setPayoutAddress] = useState("");
  const [withdrawAddress, setWithdrawAddress] = useState("");
  const [approveAddress, setApproveAddress] = useState("");
  const [detailsAddress, setDetailsAddress] = useState("");
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    creator: "",
    description: "",
    capital: "",
    isApproved: bool,
  });
  const [investCountAddress, setInvestCountAddress] = useState("");
  const [investAmountAddress, setInvestorAmountAddress] = useState("");
  const [investorAddress, setInvestorAddress] = useState("");
  const [investorCount, setInvestorCount] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [projectAddresses, setProjectAddresses] = useState([]);
  const [projectAddress2, setProjectAddress2] = useState("");

  const { address } = useAccount();
  // signer
  const { data } = useWalletClient();

  const provider = new ethers.providers.JsonRpcProvider();

  const createProject = async () => {
    const greenVestor = new ethers.Contract(
      greenVestorContract,
      greenVestorAbi.abi,
      data
    );

    const run = await greenVestor.createProject(
      projectName,
      projectDesc,
      capital,
      { from: address }
    );
    //returns (address)
  };

  // invest(address _project, uint256 _amount)
  const invest = async () => {
    const greenVestor = new ethers.Contract(
      greenVestorContract,
      greenVestorAbi.abi,
      data
    );

    const run = await greenVestor.invest(projectAddress, investAmount);
  };

  // payoutProfits(address _project)
  const payoutProfits = async () => {
    const greenVestor = new ethers.Contract(
      greenVestorContract,
      greenVestorAbi.abi,
      data
    );

    const run = await greenVestor.payoutProfits(payoutAddress);
  };

  // withdrawFunds(address _project)
  const withdrawFunds = async () => {
    const greenVestor = new ethers.Contract(
      greenVestorContract,
      greenVestorAbi.abi,
      data
    );

    const run = await greenVestor.withdrawFunds(withdrawAddress);
  };

  // approveProject(address _project)
  const approveProject = async () => {
    const greenVestor = new ethers.Contract(
      greenVestorContract,
      greenVestorAbi.abi,
      data
    );

    const run = await greenVestor.approveProject(approveAddress);
  };

  const getProjectDetails = async () => {
    const greenVestor = new ethers.Contract(
      greenVestorContract,
      greenVestorAbi.abi,
      data
    );

    const run = await greenVestor.getProjectDetails(detailsAddress);
    const details = await run;
    projectDetails;
    setProjectDetails.name(details.details.toString());
    setProjectDetails.creator(details.creator.toString());
    setProjectDetails.description(details.description.toString());
    setProjectDetails.capital(details.capitalNeeded.toNumber());
    setProjectDetails.isApproved(details.isApproved);
  };

  // function getInvestorCount(address _project) external view returns (uint256)
  const getInvestorCount = async () => {
    const greenVestor = new ethers.Contract(
      greenVestorContract,
      greenVestorAbi.abi,
      data
    );

    const run = await greenVestor.getInvestorCount(investCountAddress);
    const count = await run;
    setInvestorCount(count.toNumber());
  };

  // function getInvestmentAmount( address _project, address _investor) returns (uint256)
  const getInvestmentAmount = async () => {
    const greenVestor = new ethers.Contract(
      greenVestorContract,
      greenVestorAbi.abi,
      data
    );

    const run = await greenVestor.getInvestmentAmount(
      projectAddress2,
      investorAddress
    );
    const amount = await run;
    setInvestmentAmount(amount.toNumber());
  };

  // function getAllProjects() returns (address[] memory)
  const getAllProjects = async () => {
    const greenVestor = new ethers.Contract(
      greenVestorContract,
      greenVestorAbi.abi,
      data
    );

    const projects = await greenVestor.getAllProjects();

    setProjectAddresses(projects);
  };
  return (
    <div>
      <head>
        <title>GreenVestor </title>
        <meta
          name="description"
          content=" GreenVestor: investing in the green projects, powered by DEFI"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <section>
          <h2>Create Project</h2>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
          />
          <input
            type="text"
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
            placeholder="Project Description"
          />
          <input
            type="number"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
            placeholder="Capital"
          />
          <button onClick={createProject}>Create Project</button>

          <h2>Invest</h2>
          <input
            type="text"
            value={projectAddress}
            onChange={(e) => setProjectAddress(e.target.value)}
            placeholder="Project Address"
          />
          <input
            type="number"
            value={investAmount}
            onChange={(e) => setInvestAmount(e.target.value)}
            placeholder="Investment Amount"
          />
          <button onClick={invest}>Invest</button>

          <h2>Payout Profits</h2>
          <input
            type="text"
            value={payoutAddress}
            onChange={(e) => setPayoutAddress(e.target.value)}
            placeholder="Payout Address"
          />
          <button onClick={payoutProfits}>Payout Profits</button>

          <h2>Withdraw Funds</h2>
          <input
            type="text"
            value={withdrawAddress}
            onChange={(e) => setWithdrawAddress(e.target.value)}
            placeholder="Withdraw Address"
          />
          <button onClick={withdrawFunds}>Withdraw Funds</button>

          <h2>Approve Project</h2>
          <input
            type="text"
            value={approveAddress}
            onChange={(e) => setApproveAddress(e.target.value)}
            placeholder="Approve Address"
          />
          <button onClick={approveProject}>Approve Project</button>

          <h2>Get Project Details</h2>
          <input
            type="text"
            value={detailsAddress}
            onChange={(e) => setDetailsAddress(e.target.value)}
            placeholder="Details Address"
          />
          <button onClick={getProjectDetails}>Get Project Details</button>

          <h2>Get Investor Count</h2>
          <input
            type="text"
            value={investCountAddress}
            onChange={(e) => setInvestCountAddress(e.target.value)}
            placeholder="Invest Count Address"
          />
          <button onClick={getInvestorCount}>Get Investor Count</button>

          <h2>Get Investment Amount</h2>
          <input
            type="text"
            value={projectAddress2}
            onChange={(e) => setProjectAddress2(e.target.value)}
            placeholder="Project Address"
          />
          <input
            type="text"
            value={investorAddress}
            onChange={(e) => setInvestorAddress(e.target.value)}
            placeholder="Investor Address"
          />
          <button onClick={getInvestmentAmount}>Get Investment Amount</button>

          <h2>Get All Projects</h2>
          <button onClick={getAllProjects}>Get All Projects</button>
        </section>
      </body>
    </div>
  );
}
