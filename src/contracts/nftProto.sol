// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;
// create an nft contract conforming to the openzeppelin ERC721 standard

// import the openzeppelin ERC721 contract
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract NFTProto is ERC721URIStorage {
    constructor() ERC721("NFTProto", "NFTP") {}

    uint256 private tokenId;

    function mintNFT(address recipient, string memory _tokenURI) public {
        tokenId++;
        _safeMint(recipient, tokenId);
        _setTokenURI(tokenId, _tokenURI);
    }

    function burnNFT(uint _tokenId) public {
        _burn(_tokenId);
        tokenId--;
    }

    function getTokenIdTotal() public view returns (uint256) {
        return tokenId;
    }

    function getOwner(uint _tokenId) public view returns (address) {
        return ownerOf(_tokenId);
    }

    function checkExists(uint256 _tokenId) public view returns (bool) {
        return _exists(_tokenId);
    }
    function getBalance(address _owner) public view returns (uint) {
        return balanceOf(_owner);
    }
}
