// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

interface ICwdFund {
    struct CrowdFund {
        string title;
        uint256 fundingGoal;
        address owner;
        uint256 durationTime;
        bool isActive;
        uint256 fundingBalance;
        address[] contributors;
    }

    function proposeCampaign(string memory _title, uint256 _fundingGoal, uint256 _durationTime) external;

    function contributeEth(uint256 _ID) external payable;

    function campaignEnds(uint256 _ID) external;

    function refundContributors(uint256 _ID) external;

    function markSuccessful(uint256 _ID) external;

    function id() external view returns (uint256);

    function crowd(uint256) external view returns (CrowdFund memory);

    function contribute(uint256, address) external view returns (uint256);
}
