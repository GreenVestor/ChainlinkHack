// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoanContract {
    struct Loan {
        address lender;
        address borrower;
        uint256 loanAmount;
        uint256 interestRate;
        uint256 repaymentAmount;
        uint256 repaymentTerm;
        uint256 remainingAmount;
        bool isClosed;
    }

    mapping(address => uint256) public balances;
    Loan[] public loans;

    event LoanCreated(
        address indexed lender,
        address indexed borrower,
        uint256 loanAmount,
        uint256 interestRate,
        uint256 repaymentAmount,
        uint256 repaymentTerm
    );
    event LoanRepaid(address indexed borrower, uint256 repaymentAmount);

    function createLoan(
        address _borrower,
        uint256 _loanAmount,
        uint256 _interestRate,
        uint256 _repaymentTerm
    ) external {
        require(_borrower != address(0), "Invalid borrower address.");
        require(_loanAmount > 0, "Loan amount must be greater than zero.");
        require(_interestRate > 0, "Interest rate must be greater than zero.");
        require(
            _repaymentTerm > 0,
            "Repayment term must be greater than zero."
        );

        uint256 repaymentAmount = (_loanAmount * (100 + _interestRate)) / 100;

        Loan memory newLoan = Loan({
            lender: msg.sender,
            borrower: _borrower,
            loanAmount: _loanAmount,
            interestRate: _interestRate,
            repaymentAmount: repaymentAmount,
            repaymentTerm: _repaymentTerm,
            remainingAmount: repaymentAmount,
            isClosed: false
        });

        loans.push(newLoan);

        emit LoanCreated(
            msg.sender,
            _borrower,
            _loanAmount,
            _interestRate,
            repaymentAmount,
            _repaymentTerm
        );
    }

    function repayLoan(uint256 _loanIndex) external payable {
        require(_loanIndex < loans.length, "Invalid loan index.");
        Loan storage loan = loans[_loanIndex];
        require(
            loan.borrower == msg.sender,
            "Only the borrower can repay the loan."
        );
        require(!loan.isClosed, "Loan is already closed.");
        require(
            msg.value == loan.repaymentAmount,
            "Incorrect repayment amount."
        );

        loan.remainingAmount -= msg.value;
        if (loan.remainingAmount == 0) {
            loan.isClosed = true;
        }

        balances[loan.lender] += msg.value;

        emit LoanRepaid(msg.sender, msg.value);
    }

    function withdraw() external {
        require(balances[msg.sender] > 0, "No funds available for withdrawal.");

        uint256 amountToWithdraw = balances[msg.sender];
        balances[msg.sender] = 0;

        payable(msg.sender).transfer(amountToWithdraw);
    }

    // Getter function to retrieve the balance of a specific lender
    function getLenderBalance(address lender) external view returns (uint256) {
        return balances[lender];
    }

    // Getter function to check if a loan is closed
    function isLoanClosed(uint256 loanIndex) external view returns (bool) {
        require(loanIndex < loans.length, "Invalid loan index.");
        return loans[loanIndex].isClosed;
    }

    // Setter function to mark a loan as closed
    function markLoanAsClosed(uint256 loanIndex) external {
        require(loanIndex < loans.length, "Invalid loan index.");
        require(!loans[loanIndex].isClosed, "Loan is already closed.");
        loans[loanIndex].isClosed = true;
    }
}