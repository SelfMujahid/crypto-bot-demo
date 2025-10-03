import axios from 'axios';

// Crypto price check function
async function checkCryptoPrices() {
    try {
        console.log('🔍 Checking crypto prices...');
        
        // Bitcoin price
        const btcResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const btcPrice = btcResponse.data.bitcoin.usd;
        
        // Ethereum price  
        const ethResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const ethPrice = ethResponse.data.ethereum.usd;
        
        console.log('💰 Current Prices:');
        console.log(`Bitcoin: $${btcPrice}`);
        console.log(`Ethereum: $${ethPrice}`);
        
        // Simple trading logic
        if (btcPrice < 30000) {
            console.log('🚀 SIGNAL: Buy Bitcoin!');
        } else if (btcPrice > 50000) {
            console.log('📉 SIGNAL: Sell Bitcoin!');
        } else {
            console.log('⚡ HOLD Bitcoin');
        }
        
    } catch (error) {
        console.log('❌ Error fetching prices:', error.message);
    }
}

// Run the bot
checkCryptoPrices();
