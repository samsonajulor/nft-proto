/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMultiSigWura,
  IMultiSigWuraInterface,
} from "../../interfaces/IMultiSigWura";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_admins",
        type: "address[]",
      },
    ],
    name: "createMultisig",
    outputs: [
      {
        internalType: "contract MultiSig",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllMultisig",
    outputs: [
      {
        internalType: "contract MultiSig[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IMultiSigWura__factory {
  static readonly abi = _abi;
  static createInterface(): IMultiSigWuraInterface {
    return new Interface(_abi) as IMultiSigWuraInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMultiSigWura {
    return new Contract(address, _abi, runner) as unknown as IMultiSigWura;
  }
}