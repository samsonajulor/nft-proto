/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface INFTProtoInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "burnNFT"
      | "checkExists"
      | "getBalance"
      | "getOwner"
      | "getTokenIdTotal"
      | "mintNFT"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burnNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkExists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenIdTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintNFT",
    values: [AddressLike, string]
  ): string;

  decodeFunctionResult(functionFragment: "burnNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenIdTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintNFT", data: BytesLike): Result;
}

export interface INFTProto extends BaseContract {
  connect(runner?: ContractRunner | null): INFTProto;
  waitForDeployment(): Promise<this>;

  interface: INFTProtoInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  burnNFT: TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;

  checkExists: TypedContractMethod<[_tokenId: BigNumberish], [boolean], "view">;

  getBalance: TypedContractMethod<[_owner: AddressLike], [bigint], "view">;

  getOwner: TypedContractMethod<[_tokenId: BigNumberish], [string], "view">;

  getTokenIdTotal: TypedContractMethod<[], [bigint], "view">;

  mintNFT: TypedContractMethod<
    [recipient: AddressLike, _tokenURI: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "burnNFT"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkExists"
  ): TypedContractMethod<[_tokenId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "getBalance"
  ): TypedContractMethod<[_owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getOwner"
  ): TypedContractMethod<[_tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getTokenIdTotal"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mintNFT"
  ): TypedContractMethod<
    [recipient: AddressLike, _tokenURI: string],
    [void],
    "nonpayable"
  >;

  filters: {};
}
