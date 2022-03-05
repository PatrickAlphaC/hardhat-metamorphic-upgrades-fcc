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

    let metamorphicProxyContract = await ethers.getContract("MetamorphicProxy")
    await metamorphicProxyContract.destroy()

    const boxV2Deployment = await deploy("BoxV2", {
        from: deployer,
        args: [],
        log: false,
        waitConfirmations: waitBlockConfirmations,
    })

    const metamorphicProxyDeployment = await deploy("MetamorphicProxy", {
        from: deployer,
        args: [],
        log: false,
        waitConfirmations: waitBlockConfirmations,
        deterministicDeployment: SALT,
    })

    metamorphicProxyContract = await ethers.getContract("MetamorphicProxy")
    await metamorphicProxyContract.setImplementation(boxV2Deployment.address)

    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(boxV2Deployment.address, [])
    }
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(metamorphicProxyDeployment.address, [])
    }

    const proxyBox = await ethers.getContractAt("BoxV2", metamorphicProxyContract.address)
    await proxyBox.increment()
    const value = await proxyBox.retrieve()
    const version = await proxyBox.version()
    console.log(`Box address is: ${boxV2Deployment.address}`)
    console.log(`Proxy address is: ${proxyBox.address}`)
    console.log(`Value is: ${value}`)
    console.log(`Version is: ${version}`)

    log("----------------------------------------------------")
}

module.exports.tags = ["all", "boxv2"]
