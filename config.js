import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

process.env.MODE = 'public'
process.env.antidelete = 'false'
process.env.DATABASE_URL = '';
process.env.PREFIX = '.' 
process.env.SESSION_ID = '' 

 global.owner = [['رقمك', '👑 ᴍɪᴅ-ʙᴏᴛ 👑', true]] 
 global.baileys = '@whiskeysockets/baileys'
 global.botNumber = 'رقمك' 
 global.prems = ['رقمك', 'رقمك']
 global.mods = ['رقمك','رقمك']
 global.lolkeysapi = 'gatadios'
 global.installationId = ['TruecallerID']
 global.xyro = 'p3m8UTEawQ'
 global.herapi = 'fee7b0be8faf'

 global.APIs = { 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  akuari: 'https://api.akuari.my.id'
 }

global.APIKeys = { 
  'https://api.fgmods.xyz': 'dEBWvxCY',
  'https://api.lolhuman.xyz': 'gatadios',	
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

  global.packname = '𝙈𝙞𝙙𝙨𝙤𝙪𝙣𝙚'
  global.author = '♛ 𝙈𝙞𝙙𝙨𝙤𝙪𝙣𝙚 ♛'
  global.wm = '◆──ᴍɪᴅ-ʙᴏᴛ──◆'
  global.igfg = '♛ 𝙈𝙞𝙙𝙨𝙤𝙪𝙣𝙚 ♛'
  global.wait = '◆──ᴍɪᴅ-ʙᴏᴛ──◆'
  global.eror = '*خطأ في جلب البيانات*'
  global.vs = '2.0.24'
  global.botName = '◆──ᴍɪᴅ-ʙᴏᴛ──◆'
  global.premium = 'true'  

global.rwait = '⏳'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
