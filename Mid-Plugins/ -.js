import fetch from "node-fetch";
import cheerio from "cheerio";
import axios from 'axios';
let handler = async (m, {
    conn, command,
    args, text
}) => {
    if (!args) return m.reply("أكتب سؤالك");
    if (command === 'وازمر'){
      let ang = 'كن غاضبا ومتعصبا وتتحدث بصوت عال وأجبني ';
 let gpt = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=gatadios&text=${ang + text}&user=${m.sender}`)
  let haill = await gpt.json()
  let ress = haill.result.replace(/\چگونه می‌توانم به شما کمک کنم؟/g, "")
  .replace(/\ChatGPT/g, "MidBOT")
  .replace(/\Unlimited ADS/g, "")
  .replace(/\كمساعد ذكاء اصطناعي،/g, "")
  .replace(
    /\إذا كان لديك أي أسئلة أو استفسارات، فأنا هنا للمساعدة./g,
    "",
  )
  .replace(/\كيف يمكنني مساعدتك اليوم؟/g, "")
  .trim();
  conn.reply(m.chat, ress, null)
    } else {
  try {
  let gpt = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=gatadios&text=${text}&user=${m.sender}`)
  let haill = await gpt.json()
  let ress = haill.result.replace(/\چگونه می‌توانم به شما کمک کنم؟/g, "")
  .replace(/\ChatGPT/g, "MidBOT")
  .replace(/\Unlimited ADS/g, "")
  .replace(/\كمساعد ذكاء اصطناعي،/g, "")
  .replace(
    /\إذا كان لديك أي أسئلة أو استفسارات، فأنا هنا للمساعدة./g,
    "",
  )
  .replace(/\كيف يمكنني مساعدتك اليوم؟/g, "")
  .trim();
  conn.reply(m.chat, ress, null)
  } catch {    
  try {
    let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=gatadios&text=${text}`)
    let hasill = await tioress.json()
    let ress = hasill.result.replace(/\چگونه می‌توانم به شما کمک کنم؟/g, "")
    .replace(/\ChatGPT/g, "MidBOT")
    .replace(/\Unlimited ADS/g, "")
    .replace(/\كمساعد ذكاء اصطناعي،/g, "")
    .replace(
      /\إذا كان لديك أي أسئلة أو استفسارات، فأنا هنا للمساعدة./g,
      "",
    )
    .replace(/\كيف يمكنني مساعدتك اليوم؟/g, "")
    .trim();
    conn.reply(m.chat, ress, null)
    } catch { 
try {
        let result = await generate(text)
        console.log(result)
          let res = result.replace(/\چگونه می‌توانم به شما کمک کنم؟/g, "")
        .replace(/\ChatGPT/g, "MidBOT")
        .replace(/\Unlimited ADS/g, "")
        .replace(/\كمساعد ذكاء اصطناعي،/g, "")
        .replace(
          /\إذا كان لديك أي أسئلة أو استفسارات، فأنا هنا للمساعدة./g,
          "",
        )
        .replace(/\كيف يمكنني مساعدتك اليوم؟/g, "")
        .trim();
        await conn.reply(m.chat, res, null)
  } catch (error) {
      console.error(error);
  }}}}
};

handler.command = /^(ia|روبو|reda|ر|r|rida|openai|ia2|وازمر)$/i;
export default handler;


async function generate(q) {
    try {
        const nonceValue = JSON.parse(cheerio.load(await (await axios.get(
            "https://gpt4free.io/chat"
        )).data)('.mwai-chatbot-container').attr('data-system')).restNonce;

        const {
            data
        } = await axios(
            "https://gpt4free.io/wp-json/mwai-ui/v1/chats/submit", {
                method: "post",
                data: {
                    botId: "default",
                    newMessage: q,
                    stream: false,
                },
                headers: {
                    "X-WP-Nonce": nonceValue,
                    "Content-Type": "application/json",
                },
            }
        );
        return data.reply;
    } catch (err) {
        console.log(err.response.data);
        return err.response.data.message;
    }
}
