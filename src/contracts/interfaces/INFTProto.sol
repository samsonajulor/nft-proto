// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

interface INFTProto {
    function mintNFT(address recipient, string memory _tokenURI) external;
    function burnNFT(uint _tokenId) external;
    function getTokenIdTotal() external view returns (uint256);
    function checkExists(uint256 _tokenId) external view returns (bool);
    function getBalance(address _owner) external view returns (uint);
    function getOwner(uint _tokenId) external view returns (address);
}
