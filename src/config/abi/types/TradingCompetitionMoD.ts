/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type CompetitionRewardsStruct = {
  userCampaignId: [
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish
  ];
  cakeRewards: [
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish
  ];
  darRewards: [
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish
  ];
  pointUsers: [
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish
  ];
};

export type CompetitionRewardsStructOutput = [
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
] & {
  userCampaignId: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
  cakeRewards: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
  darRewards: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
  pointUsers: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
};

export interface TradingCompetitionMoDInterface extends utils.Interface {
  functions: {
    "bunnyId()": FunctionFragment;
    "bunnyMintingStation()": FunctionFragment;
    "bunnyTokenURI()": FunctionFragment;
    "cakeToken()": FunctionFragment;
    "claimCakeRemainder(uint256)": FunctionFragment;
    "claimDarRemainder(uint256)": FunctionFragment;
    "claimInformation(address)": FunctionFragment;
    "claimReward()": FunctionFragment;
    "competitionId()": FunctionFragment;
    "currentStatus()": FunctionFragment;
    "darToken()": FunctionFragment;
    "numberTeams()": FunctionFragment;
    "owner()": FunctionFragment;
    "pancakeProfile()": FunctionFragment;
    "register()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateCompetitionStatus(uint8)": FunctionFragment;
    "updateTeamRewards(uint256,uint256[5],uint256[5],uint256[5],uint256[5])": FunctionFragment;
    "updateUserStatusMultiple(address[],uint256)": FunctionFragment;
    "updateWinningTeamAndTokenURIAndBunnyId(uint256,string,uint8)": FunctionFragment;
    "userTradingStats(address)": FunctionFragment;
    "viewRewardTeams()": FunctionFragment;
    "winningTeamId()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bunnyId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bunnyMintingStation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bunnyTokenURI",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cakeToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimCakeRemainder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimDarRemainder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimInformation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "competitionId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentStatus",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "darToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "numberTeams",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pancakeProfile",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "register", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCompetitionStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTeamRewards",
    values: [
      BigNumberish,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateUserStatusMultiple",
    values: [string[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWinningTeamAndTokenURIAndBunnyId",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userTradingStats",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewRewardTeams",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "winningTeamId",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "bunnyId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bunnyMintingStation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bunnyTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cakeToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimCakeRemainder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimDarRemainder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimInformation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "competitionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "darToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numberTeams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pancakeProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCompetitionStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTeamRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateUserStatusMultiple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateWinningTeamAndTokenURIAndBunnyId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userTradingStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewRewardTeams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "winningTeamId",
    data: BytesLike
  ): Result;

  events: {
    "NewCompetitionStatus(uint8,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TeamRewardsUpdate(uint256,uint256)": EventFragment;
    "UserRegister(address,uint256,uint256)": EventFragment;
    "UserUpdateMultiple(address[],uint256,uint256)": EventFragment;
    "WinningTeam(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewCompetitionStatus"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TeamRewardsUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserRegister"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserUpdateMultiple"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WinningTeam"): EventFragment;
}

export type NewCompetitionStatusEvent = TypedEvent<
  [number, BigNumber],
  { status: number; competitionId: BigNumber }
>;

export type NewCompetitionStatusEventFilter =
  TypedEventFilter<NewCompetitionStatusEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TeamRewardsUpdateEvent = TypedEvent<
  [BigNumber, BigNumber],
  { teamId: BigNumber; competitionId: BigNumber }
>;

export type TeamRewardsUpdateEventFilter =
  TypedEventFilter<TeamRewardsUpdateEvent>;

export type UserRegisterEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { userAddress: string; teamId: BigNumber; competitionId: BigNumber }
>;

export type UserRegisterEventFilter = TypedEventFilter<UserRegisterEvent>;

export type UserUpdateMultipleEvent = TypedEvent<
  [string[], BigNumber, BigNumber],
  { userAddresses: string[]; rewardGroup: BigNumber; competitionId: BigNumber }
>;

export type UserUpdateMultipleEventFilter =
  TypedEventFilter<UserUpdateMultipleEvent>;

export type WinningTeamEvent = TypedEvent<
  [BigNumber, BigNumber],
  { teamId: BigNumber; competitionId: BigNumber }
>;

export type WinningTeamEventFilter = TypedEventFilter<WinningTeamEvent>;

export interface TradingCompetitionMoD extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TradingCompetitionMoDInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bunnyId(overrides?: CallOverrides): Promise<[number]>;

    bunnyMintingStation(overrides?: CallOverrides): Promise<[string]>;

    bunnyTokenURI(overrides?: CallOverrides): Promise<[string]>;

    cakeToken(overrides?: CallOverrides): Promise<[string]>;

    claimCakeRemainder(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimDarRemainder(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimInformation(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ]
    >;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    competitionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentStatus(overrides?: CallOverrides): Promise<[number]>;

    darToken(overrides?: CallOverrides): Promise<[string]>;

    numberTeams(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pancakeProfile(overrides?: CallOverrides): Promise<[string]>;

    register(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateCompetitionStatus(
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateTeamRewards(
      _teamId: BigNumberish,
      _userCampaignIds: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _cakeRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _darRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _pointRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateUserStatusMultiple(
      _addressesToUpdate: string[],
      _rewardGroup: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateWinningTeamAndTokenURIAndBunnyId(
      _winningTeamId: BigNumberish,
      _tokenURI: string,
      _bunnyId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userTradingStats(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { hasClaimed: boolean }>;

    viewRewardTeams(
      overrides?: CallOverrides
    ): Promise<[CompetitionRewardsStructOutput[]]>;

    winningTeamId(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  bunnyId(overrides?: CallOverrides): Promise<number>;

  bunnyMintingStation(overrides?: CallOverrides): Promise<string>;

  bunnyTokenURI(overrides?: CallOverrides): Promise<string>;

  cakeToken(overrides?: CallOverrides): Promise<string>;

  claimCakeRemainder(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimDarRemainder(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimInformation(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [
      boolean,
      boolean,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean
    ]
  >;

  claimReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  competitionId(overrides?: CallOverrides): Promise<BigNumber>;

  currentStatus(overrides?: CallOverrides): Promise<number>;

  darToken(overrides?: CallOverrides): Promise<string>;

  numberTeams(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pancakeProfile(overrides?: CallOverrides): Promise<string>;

  register(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateCompetitionStatus(
    _status: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateTeamRewards(
    _teamId: BigNumberish,
    _userCampaignIds: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    _cakeRewards: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    _darRewards: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    _pointRewards: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateUserStatusMultiple(
    _addressesToUpdate: string[],
    _rewardGroup: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateWinningTeamAndTokenURIAndBunnyId(
    _winningTeamId: BigNumberish,
    _tokenURI: string,
    _bunnyId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userTradingStats(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  viewRewardTeams(
    overrides?: CallOverrides
  ): Promise<CompetitionRewardsStructOutput[]>;

  winningTeamId(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    bunnyId(overrides?: CallOverrides): Promise<number>;

    bunnyMintingStation(overrides?: CallOverrides): Promise<string>;

    bunnyTokenURI(overrides?: CallOverrides): Promise<string>;

    cakeToken(overrides?: CallOverrides): Promise<string>;

    claimCakeRemainder(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimDarRemainder(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimInformation(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ]
    >;

    claimReward(overrides?: CallOverrides): Promise<void>;

    competitionId(overrides?: CallOverrides): Promise<BigNumber>;

    currentStatus(overrides?: CallOverrides): Promise<number>;

    darToken(overrides?: CallOverrides): Promise<string>;

    numberTeams(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pancakeProfile(overrides?: CallOverrides): Promise<string>;

    register(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCompetitionStatus(
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTeamRewards(
      _teamId: BigNumberish,
      _userCampaignIds: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _cakeRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _darRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _pointRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<void>;

    updateUserStatusMultiple(
      _addressesToUpdate: string[],
      _rewardGroup: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateWinningTeamAndTokenURIAndBunnyId(
      _winningTeamId: BigNumberish,
      _tokenURI: string,
      _bunnyId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    userTradingStats(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    viewRewardTeams(
      overrides?: CallOverrides
    ): Promise<CompetitionRewardsStructOutput[]>;

    winningTeamId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "NewCompetitionStatus(uint8,uint256)"(
      status?: null,
      competitionId?: null
    ): NewCompetitionStatusEventFilter;
    NewCompetitionStatus(
      status?: null,
      competitionId?: null
    ): NewCompetitionStatusEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TeamRewardsUpdate(uint256,uint256)"(
      teamId?: null,
      competitionId?: null
    ): TeamRewardsUpdateEventFilter;
    TeamRewardsUpdate(
      teamId?: null,
      competitionId?: null
    ): TeamRewardsUpdateEventFilter;

    "UserRegister(address,uint256,uint256)"(
      userAddress?: null,
      teamId?: null,
      competitionId?: null
    ): UserRegisterEventFilter;
    UserRegister(
      userAddress?: null,
      teamId?: null,
      competitionId?: null
    ): UserRegisterEventFilter;

    "UserUpdateMultiple(address[],uint256,uint256)"(
      userAddresses?: null,
      rewardGroup?: null,
      competitionId?: null
    ): UserUpdateMultipleEventFilter;
    UserUpdateMultiple(
      userAddresses?: null,
      rewardGroup?: null,
      competitionId?: null
    ): UserUpdateMultipleEventFilter;

    "WinningTeam(uint256,uint256)"(
      teamId?: null,
      competitionId?: null
    ): WinningTeamEventFilter;
    WinningTeam(teamId?: null, competitionId?: null): WinningTeamEventFilter;
  };

  estimateGas: {
    bunnyId(overrides?: CallOverrides): Promise<BigNumber>;

    bunnyMintingStation(overrides?: CallOverrides): Promise<BigNumber>;

    bunnyTokenURI(overrides?: CallOverrides): Promise<BigNumber>;

    cakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    claimCakeRemainder(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimDarRemainder(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimInformation(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    competitionId(overrides?: CallOverrides): Promise<BigNumber>;

    currentStatus(overrides?: CallOverrides): Promise<BigNumber>;

    darToken(overrides?: CallOverrides): Promise<BigNumber>;

    numberTeams(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pancakeProfile(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateCompetitionStatus(
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateTeamRewards(
      _teamId: BigNumberish,
      _userCampaignIds: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _cakeRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _darRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _pointRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateUserStatusMultiple(
      _addressesToUpdate: string[],
      _rewardGroup: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateWinningTeamAndTokenURIAndBunnyId(
      _winningTeamId: BigNumberish,
      _tokenURI: string,
      _bunnyId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userTradingStats(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewRewardTeams(overrides?: CallOverrides): Promise<BigNumber>;

    winningTeamId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bunnyId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bunnyMintingStation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bunnyTokenURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimCakeRemainder(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimDarRemainder(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimInformation(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    competitionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    darToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numberTeams(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pancakeProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    register(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateCompetitionStatus(
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateTeamRewards(
      _teamId: BigNumberish,
      _userCampaignIds: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _cakeRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _darRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _pointRewards: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateUserStatusMultiple(
      _addressesToUpdate: string[],
      _rewardGroup: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateWinningTeamAndTokenURIAndBunnyId(
      _winningTeamId: BigNumberish,
      _tokenURI: string,
      _bunnyId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userTradingStats(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewRewardTeams(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    winningTeamId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
