import { ethers } from 'hardhat';

async function main() {
  const ICwdFundAddress = '0x46f44F2D1af04D54ab5BCbEF9F4D0Df9baDc1B8C';

  const CwdFundContract = await ethers.getContractAt('ICwdFund', ICwdFundAddress);

  const data = create1000CampaignsWithRandomTitles(1000, 60 * 60 * 24 * 7);

  console.log(data.length, '<<<<data>>>>');

  for(let i = 0; i < data.length; i++) {
    const campaign = data[i];
    await CwdFundContract.proposeCampaign(campaign.title, campaign.amount, campaign.seconds);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

function create1000CampaignsWithRandomTitles(amount: number, seconds: number) {
  const loops = 500;
  let data: {
    title: string;
    amount: number;
    seconds: number;
  }[] = [];

  for(let i = 0; i < loops; i++) {
    const randomTitle = Math.random().toString(36).substring(7);
    data = [...data, {
      title: randomTitle,
      amount,
      seconds,
    }];
  }
  return data;
}
