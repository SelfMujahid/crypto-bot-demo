// Simple crypto bot without axios
async function checkCryptoPrices() {
    try {
        console.log('🔍 Checking crypto prices...');
        
        // Using different API that doesn't need axios
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await response.json();
        
        const btcPrice = data.bitcoin.usd;
        const ethPrice = data.ethereum.usd;
        
        console.log('💰 Current Prices:');
        console.log(`Bitcoin: $${btcPrice}`);
        console.log(`Ethereum: $${ethPrice}`);
        
        // Trading logic
        if (btcPrice < 30000) {
            console.log('🚀 SIGNAL: Buy Bitcoin!');
        } else if (btcPrice > 50000) {
            console.log('📉 SIGNAL: Sell Bitcoin!');
        } else {
            console.log('⚡ HOLD Bitcoin');
        }
        
    } catch (error) {
        console.log('❌ Error:', error.message);
    }
}

// Run bot
checkCryptoPrices();
