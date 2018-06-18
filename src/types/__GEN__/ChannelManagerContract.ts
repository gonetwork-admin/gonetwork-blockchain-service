import { BN } from 'bn.js'
import { Address } from 'eth-types'

// ⚠ !IMPORTANT! THIS FILE WAS AUTO-GENERATED - DO NOT MODIFY BY HAND ⚠

export type ManagerIO = {
  transferOwnership: [
    {
      newOwner: Address
    },
    void
  ],
  collectFees: [
    null,
    void
  ],
  newChannel: [
    {
      partner: Address,
      settle_timeout: BN
    },
    {
      anon_0: Address
    }
  ]
}

export const ManagerOrdIO = {
  transferOwnership: [
    'newOwner'
  ],
  collectFees: [],
  newChannel: [
    'partner',
    'settle_timeout'
  ]
}

export const ManagerTypesIO = {
  transferOwnership: [
    'address'
  ],
  collectFees: [],
  newChannel: [
    'address',
    'uint256'
  ]
}

export type ManagerConstIO = {
  contractExists: [
    {
      channel: Address
    },
    {
      anon_0: boolean
    }
  ],
  owner: [
    null,
    {
      anon_0: Address
    }
  ],
  contract_version: [
    null,
    {
      anon_0: string
    }
  ],
  fee: [
    null,
    {
      anon_0: BN
    }
  ],
  getChannelsAddresses: [
    null,
    {
      anon_0: Address[]
    }
  ],
  tokenAddress: [
    null,
    {
      anon_0: Address
    }
  ],
  getChannelWith: [
    {
      partner: Address
    },
    {
      anon_0: Address
    }
  ],
  nettingContractsByAddress: [
    {
      node_address: Address
    },
    {
      anon_0: Address[]
    }
  ],
  getChannelsParticipants: [
    null,
    {
      anon_0: Address[]
    }
  ]
}

export const ManagerConstOrdIO = {
  contractExists: [
    'channel'
  ],
  owner: [],
  contract_version: [],
  fee: [],
  getChannelsAddresses: [],
  tokenAddress: [],
  getChannelWith: [
    'partner'
  ],
  nettingContractsByAddress: [
    'node_address'
  ],
  getChannelsParticipants: []
}

export const ManagerConstTypesIO = {
  contractExists: [
    'address'
  ],
  owner: [],
  contract_version: [],
  fee: [],
  getChannelsAddresses: [],
  tokenAddress: [],
  getChannelWith: [
    'address'
  ],
  nettingContractsByAddress: [
    'address'
  ],
  getChannelsParticipants: []
}

// ⚠ !IMPORTANT! THIS FILE WAS AUTO-GENERATED - DO NOT MODIFY BY HAND ⚠

export interface ManagerConstructorParams {
  gotoken: Address
  token_address: Address
}

// ⚠ !IMPORTANT! THIS FILE WAS AUTO-GENERATED - DO NOT MODIFY BY HAND ⚠

export type ManagerEvents = 'ChannelNew' | 'ChannelDeleted' | 'FeesCollected' | 'OwnershipTransferred'

export type ManagerEventsToArgs = {
  ChannelNew: {
    _type: 'ChannelNew'
    netting_channel: Address
    participant1: Address
    participant2: Address
    settle_timeout: BN
  }
  ChannelDeleted: {
    _type: 'ChannelDeleted'
    caller_address: Address
    partner: Address
  }
  FeesCollected: {
    _type: 'FeesCollected'
    block: BN
    balance: BN
  }
  OwnershipTransferred: {
    _type: 'OwnershipTransferred'
    previousOwner: Address
    newOwner: Address
  }
}

// ⚠ !IMPORTANT! THIS FILE WAS AUTO-GENERATED - DO NOT MODIFY BY HAND ⚠