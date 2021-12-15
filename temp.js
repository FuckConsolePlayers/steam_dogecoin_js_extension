
get_price();
function get_price(){
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd').then(r => r.text()).then(result => {
        var doge_price = JSON.parse(result).dogecoin.usd;
        console.log(doge_price);
        var opp = document.getElementsByClassName("game_purchase_price price");
        var length = opp.length;
        while(length != 0){
            var l = opp[length-1];
            var price = parseInt(l.getAttribute("data-price-final"))/100;
            if(!isNaN(price)){
                var price_in_doge = Math.round(price/doge_price);
                l.textContent = price_in_doge+' DOGE';
            }
        length = length-1;
        }
        var ch = document.getElementsByClassName("discount_final_price");
        length = ch.length;
        while(length != 0){
            var price = parseInt(ch[length-1].textContent.replace(/[^\d.-]/g, ''));
            var price_in_doge = Math.round(price/doge_price);
            if(!isNaN(price)){
                ch[length-1].textContent = price_in_doge+' DOGE';
            }
            length = length-1;
        }
        var ch = document.getElementsByClassName("discount_original_price");
        length = ch.length;
        while(length != 0){
            var price = parseInt(ch[length-1].textContent.replace(/[^\d.-]/g, ''));
            var price_in_doge = Math.round(price/doge_price);
            if(!isNaN(price)){
                ch[length-1].textContent = price_in_doge+' DOGE';
            }
            length = length-1;
        }
    })
}