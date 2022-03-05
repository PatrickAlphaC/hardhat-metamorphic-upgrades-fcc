const {
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    SALT,
} = require("../helper-hardhat-config")

const { network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS

    log("----------------------------------------------------")

    const boxDeployment = await deploy("Box", {
        from: deployer,
        args: [],
        log: false,
        waitConfirmations: waitBlockConfirmations,
    })

    await deploy("MetamorphicProxy", {
        from: deployer,
        args: [],
        log: false,
        waitConfirmations: waitBlockConfirmations,
        deterministicDeployment: SALT,
    })

    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(boxDeployment.address, [])
    }

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(metamorphicProxyContract.address, [])
    }

    const metamorphicProxyContract = await ethers.getContract("MetamorphicProxy")
    const setTx = await metamorphicProxyContract.setImplementation(boxDeployment.address)
    await setTx.wait(1)

    const proxyBox = await ethers.getContractAt("Box", metamorphicProxyContract.address)
    const storeTx = await proxyBox.store("77")
    await storeTx.wait(1)
    const value = await proxyBox.retrieve()
    const version = await proxyBox.version()
    console.log(`Box address is: ${boxDeployment.address}`)
    console.log(`Proxy address is: ${proxyBox.address}`)
    console.log(`Value is: ${value}`)
    console.log(`Version is: ${version}`)

    log("----------------------------------------------------")
}

module.exports.tags = ["all", "box"]
