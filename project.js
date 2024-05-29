// create a variable to hold your NFT's
const NFTs=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (p_name, p_color, p_type, p_evolutions) {
    const NFT={
        "name": p_name,
        "color": p_color,
        "type": p_type,
        "evolutions": p_evolutions
    }
    NFTs.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<NFTs.length; i++)
        {
            console.log("Pokemon: "+ NFTs[i].name);
            console.log("\n Name:\t " + NFTs[i].name);
            console.log(" Color:  " + NFTs[i].color);
            console.log(" Type:  " + NFTs[i].Type);
            console.log(" Evolutions: " + NFTs[i].evolutions);
            console.log("-------------------------------");
        }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTs.length);

}

// call your functions below this line
mintNFT("Pikachu", "Yellow", "Electric", "2");
mintNFT("Bulbasaur", "greeen", "Grass", "3");
mintNFT("Charmander", "Orange", "Fire", "3");
mintNFT("Squirtle", "Blue", "Water", "3");
listNFTs();
getTotalSupply();

