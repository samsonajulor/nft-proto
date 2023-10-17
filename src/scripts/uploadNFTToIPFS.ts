import upload from './helper/upload';
import path from 'path';

const pathToImage = path.join(__dirname, './assets/samosky.jpg');

const data = {
  nft_image_path: pathToImage,
  nft_name: 'BEARDED SAM',
  nft_description: 'NOT THE REAL ME.',
};
async function main() {
  await upload(data.nft_image_path, data.nft_name, data.nft_description);

  console.log('NFT File upload success!!');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
