# Hardhat MetaMorphic Upgrades

This is a section of the Javascript Blockchain/Smart Contract FreeCodeCamp Course. This is not a complete repo, but a way to show users how to interact with metamorphic contracts that use create2. 

Video Coming soon...

[Full Repo](https://github.com/smartcontractkit/full-blockchain-solidity-course-js)

- [Hardhat MetaMorphic Upgrades](#hardhat-metamorphic-upgrades)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Quickstart](#quickstart)
  - [Typescript](#typescript)
  - [Version is: 1](#version-is-1)
  - [Version is: 2](#version-is-2)
- [Resources](#resources)
- [Thank you!](#thank-you)

This project is apart of the Hardhat FreeCodeCamp video.

Video coming soon...


# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    - You might need to install it with npm

## Quickstart

```
git clone https://github.com/PatrickAlphaC/hardhat-metamorphic-upgrades-fcc
cd hardhat-metamorphic-upgrades-fcc
yarn
```

## Typescript

COMING SOON...

<!-- For the typescript edition, run:

```
git checkout typescript
``` -->


# Usage

Deploy:

```
yarn hardhat deploy
```

You should see an output similar to this:

```
----------------------------------------------------
Box address is: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Proxy address is: 0xa7D9Bf84f60248DfBb0ab5512e1eAbBf12c9a4b2
Value is: 77
Version is: 1
----------------------------------------------------
----------------------------------------------------
Box address is: 0x0165878A594ca255338adfa4d48449f69242Eb8F
Proxy address is: 0xa7D9Bf84f60248DfBb0ab5512e1eAbBf12c9a4b2
Value is: 1
Version is: 2
----------------------------------------------------
```

The important thing to note, is that the `Proxy` address stayed the same, while the `Box` address changed. By deleting our proxy contract, we destroyed storage, and started over with our `BoxV2` contract, but kept the same address!

You'll want to check for function and storage clashes when working with something like this!


# Linting

To check linting / code formatting:
```
yarn lint
```
or, to fix: 
```
yarn lint:fix
```


# Formatting

```
yarn format
```

# Resources 

- [MetaMorphic Contracts](https://medium.com/@0age/the-promise-and-the-peril-of-metamorphic-contracts-9eb8b8413c5e)
- [How do I read the implementation address of a proxy?](https://ethereum.stackexchange.com/questions/103143/how-do-i-get-the-implementation-contract-address-from-the-proxy-contract-address)
- [Create2 Video](https://www.youtube.com/watch?v=883-koWrsO4)
- [Function Selector](https://solidity-by-example.org/function-selector/)
- [Understanding storage collisions in upgrades](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies#storage-collisions-between-implementation-versions)

# Thank you!

If you appreciated this, feel free to follow me or donate!

ETH/Polygon/Avalanche/etc Address: 0x9680201d9c93d65a3603d2088d125e955c73BD65

[![Patrick Collins Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/PatrickAlphaC)
[![Patrick Collins YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCn-3f8tw_E1jZvhuHatROwA)
[![Patrick Collins Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/patrickalphac/)
[![Patrick Collins Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@patrick.collins_58673/)
