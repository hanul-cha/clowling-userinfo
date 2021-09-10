/* const axios = require("axios");
const cheerio = require("cheerio");

class clowlling {
    constructor(keyword) {
        this.keyword = keyword;
        this.info = [];
    }
    getHTML = async(keyword) => {
        try {
            return await axios.get("https://lostark.game.onstove.com/Profile/Character/" + encodeURI(keyword))
        }catch(err) {
            console.log(err);
        }
    }
    
    parsing = async (keyword) => {
        const html = await this.getHTML(keyword);
        const $ = cheerio.load(html.data);
        const $userInfo = $(".profile-info");
        
    
        
        $userInfo.each((idx, node) => {
            const level = $(node).find(".level-info2__expedition span").text();
            
            this.info.push(
                {
                    name: keyword,
                    level: $(node).find(".level-info2__expedition span").text(),
                    style: $(node).find(".game-info__title span").text(),
    
                }
            )  
        });
    }
}

module.exports = clowlling;




 */