   process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  import axios from 'axios';
  import fs from 'fs';
  import './settings.js'; 
  import { createRequire } from "module";
  import path, { join } from 'path'
  import { fileURLToPath, pathToFileURL } from 'url'
  import { platform } from 'process'
  import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
  import yargs from 'yargs';
  import { spawn } from 'child_process';
  import lodash from 'lodash';
  import syntaxerror from 'syntax-error';
  import { tmpdir } from 'os';
  import { format } from 'util';
  import { makeWASocket, protoType, serialize } from './lib/simple.js';
  import { Low, JSONFile } from 'lowdb';
  import pino from 'pino';
  import { MongoDB } from './lib/mongoDB.js';
  import store from './lib/store.js'
  const {useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser} = await import('@whiskeysockets/baileys')
  import NodeCache from 'node-cache'
  const { chain } = lodash
  const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

  protoType()
  serialize()

  global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) } 
  global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
  global.timestamp = {start: new Date}
  const __dirname = global.__dirname(import.meta.url)
  global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  global.prefix = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  global.opts['db'] = process.env.DATABASE_URL;

  global.db = new Low(/https?:\/\//.test(opts['db'] || '') ?
      new cloudDBAdapter(opts['db']) : /mongodb(\+srv)?:\/\//i.test(opts['db']) ? new MongoDB(opts['db']) :   new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
  )
  global.DATABASE = global.db 
  global.loadDatabase = async function loadDatabase() {
    if (global.db.READ) {
      return new Promise((resolve) => setInterval(async function() {
        if (!global.db.READ) {
          clearInterval(this);
          resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
        }
      }, 1 * 1000));
    }
    if (global.db.data !== null) return;
    global.db.READ = true;
    await global.db.read().catch(console.error);
    global.db.READ = null;
    global.db.data = {
      users: {},
      chats: {},
      stats: {},
      msgs: {},
      sticker: {},
      settings: {},
      ...(global.db.data || {}),
    };
    global.db.chain = chain(global.db.data);
  };
  loadDatabase();

    //-- SESSION
    global.authFile = `sessions`
    const authFolder = global.authFile;
    const cc = process.env.SESSION_ID;
   const filePath = `./${authFolder}/creds.json`;

if (!fs.existsSync(authFolder)) {
        fs.mkdirSync(authFolder);
    }

function _0x56cf(_0x511d1a,_0x1b8a4e){const _0x73838f=_0x7383();return _0x56cf=function(_0x56cf6d,_0x14beb3){_0x56cf6d=_0x56cf6d-0xc4;let _0x44e4d1=_0x73838f[_0x56cf6d];return _0x44e4d1;},_0x56cf(_0x511d1a,_0x1b8a4e);}const _0xb8f586=_0x56cf;(function(_0x48cf30,_0x4572ae){const _0x8be7bb=_0x56cf,_0x1b2b89=_0x48cf30();while(!![]){try{const _0x13dbcd=-parseInt(_0x8be7bb(0xd4))/0x1*(-parseInt(_0x8be7bb(0xdb))/0x2)+-parseInt(_0x8be7bb(0xc7))/0x3+-parseInt(_0x8be7bb(0xca))/0x4+parseInt(_0x8be7bb(0xd2))/0x5*(parseInt(_0x8be7bb(0xc9))/0x6)+parseInt(_0x8be7bb(0xcd))/0x7*(parseInt(_0x8be7bb(0xd6))/0x8)+parseInt(_0x8be7bb(0xd5))/0x9*(-parseInt(_0x8be7bb(0xc8))/0xa)+parseInt(_0x8be7bb(0xd3))/0xb*(parseInt(_0x8be7bb(0xc5))/0xc);if(_0x13dbcd===_0x4572ae)break;else _0x1b2b89['push'](_0x1b2b89['shift']());}catch(_0x5b8be8){_0x1b2b89['push'](_0x1b2b89['shift']());}}}(_0x7383,0x6a5ca));if(!fs[_0xb8f586(0xd0)](filePath)&&cc[_0xb8f586(0xcf)]>=0x1){let _0x55194b=cc['replace'](_0xb8f586(0xc4),'');const _0x114579=_0xb8f586(0xd9)+global[_0xb8f586(0xd7)]+_0xb8f586(0xcb)+_0x55194b;try{const _0x1469be=await axios[_0xb8f586(0xcc)](_0x114579),_0x4eb2e4=_0x1469be[_0xb8f586(0xda)][_0xb8f586(0xd1)][_0xb8f586(0xd8)]('data=199%2C719%2C97%2C',''),_0x3113ab=decodeURIComponent(_0x4eb2e4);fs['_0x1407b7'](filePath,_0x3113ab);}catch(_0x51179a){console[_0xb8f586(0xc6)](_0xb8f586(0xce),_0x51179a);}}function _0x7383(){const _0x2eb09=['839280HsNqQk','.herokuapp.com/api/session?id=','get','1375353XPUBlc','Error:','length','_0x2f36b9','_0x38aaef','5bxwXbY','11zldfcQ','2sSORZo','45RIFjdy','8naHOtX','_0x3d8ea6','replace','https://midsouneapi-','data','364670ELXGCn','Midsoune@','6834252hJRXpI','error','1391490WuKiYC','728990asdrPX','2058798zNIBxd'];_0x7383=function(){return _0x2eb09;};return _0x7383();}

    const {state, saveCreds} = await useMultiFileAuthState(global.authFile)
    const msgRetryCounterMap = (MessageRetryMap) => { };
    const msgRetryCounterCache = new NodeCache()
    const {version} = await fetchLatestBaileysVersion();

    const MethodMobile = process.argv.includes("mobile")
    const connectionOptions = {
      logger: pino({ level: 'silent' }),
      printQRInTerminal: false,
      mobile: MethodMobile, 
      //browser: ['Chrome (Linux)', '', ''],
      browser: [ "Ubuntu", "Chrome", "20.0.04" ], 
      auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, 
      generateHighQualityLinkPreview: true, 
      getMessage: async (clave) => {
      let jid = jidNormalizedUser(clave.remoteJid)
      let msg = await store.loadMessage(jid, clave.id)
      return msg?.message || ""
      },
      msgRetryCounterCache,
      msgRetryCounterMap,
      defaultQueryTimeoutMs: undefined,   
      version
      }
    //--
    global.conn = makeWASocket(connectionOptions)

    conn.isInit = false

    if (!opts['test']) {
      setInterval(async () => {
        if (global.db.data) await global.db.write().catch(console.error)
        if (opts['autocleartmp']) try {
          clearTmp()
        } catch (e) { console.error(e) }
      }, 60 * 1000)
    }

    if (opts['server']) (await import('./server.js')).default(global.conn, PORT)

    /* Clear */
    async function clearTmp() {
      const tmp = [tmpdir(), join(__dirname, './tmp')]
      const filename = []
      tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
      //---
      return filename.map(file => {
        const stats = statSync(file)
        if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 1)) return unlinkSync(file) // 1 minuto
        return false
      })
    }

    setInterval(async () => {
      await clearTmp()
    }, 60000) 

    async function connectionUpdate(update) {
      const { lastDisconnect, isNewLogin } = update
      if (isNewLogin) conn.isInit = true
      const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
      if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
        console.log(await global.reloadHandler(true).catch(console.error))
        global.timestamp.connect = new Date
      }
      if (global.db.data == null) loadDatabase()
    } 
    process.on('uncaughtException', console.error)

    let isInit = true;
    let handler = await import('./handler.js')
    global.reloadHandler = async function (restatConn) {
      try {
        const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
        if (Object.keys(Handler || {}).length) handler = Handler
      } catch (e) {
        console.error(e)
      }
      if (restatConn) {
        const oldChats = global.conn.chats
        try { global.conn.ws.close() } catch { }
        conn.ev.removeAllListeners()
        global.conn = makeWASocket(connectionOptions, { chats: oldChats })
        isInit = true
      }
      if (!isInit) {
        conn.ev.off('messages.upsert', conn.handler)
        conn.ev.off('group-participants.update', conn.participantsUpdate)
        conn.ev.off('groups.update', conn.groupsUpdate)
        conn.ev.off('message.delete', conn.onDelete)
        conn.ev.off('connection.update', conn.connectionUpdate)
        conn.ev.off('creds.update', conn.credsUpdate)
      }
      conn.welcome = 'Ahlan, @user\nMr7ba Bik f @group'
      conn.bye = 'Bslama @user'
      conn.spromote = '@user Wliti admin'
      conn.sdemote = '@user Mab9itich Admin'
      conn.sDesc = 'Description has been changed to \n@desc'
      conn.sSubject = 'Group name has been changed to \n@group'
      conn.sIcon = 'Group icon has been changed'
      conn.sRevoke = 'Group link has been changed to \n@revoke'
      conn.handler = handler.handler.bind(global.conn)
      conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
      conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
      conn.onDelete = handler.deleteUpdate.bind(global.conn)
      conn.connectionUpdate = connectionUpdate.bind(global.conn)
      conn.credsUpdate = saveCreds.bind(global.conn, true)

      conn.ev.on('messages.upsert', conn.handler)
      conn.ev.on('group-participants.update', conn.participantsUpdate)
      conn.ev.on('groups.update', conn.groupsUpdate)
      conn.ev.on('message.delete', conn.onDelete)
      conn.ev.on('connection.update', conn.connectionUpdate)
      conn.ev.on('creds.update', conn.credsUpdate)
      isInit = false
      return true
    }

    const pluginFolder = global.__dirname(join(__dirname, './Mid-Plugins/index'))
    const pluginFilter = filename => /\.js$/.test(filename)
    global.plugins = {}
    async function filesInit() {
      for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
        try {
          let file = global.__filename(join(pluginFolder, filename))
          const module = await import(file)
          global.plugins[filename] = module.default || module
        } catch (e) {
   conn.logger.error('Error in:', join(pluginFolder, filename), '\n', e)
          delete global.plugins[filename]
        }
      }
    }
filesInit()
.then(() => {
  if (global.botNumber) {
    conn.sendMessage(global.botNumber + '@s.whatsapp.net', { text: '✅ *Your MID-BOT is Ready*' })
  }
})
.catch(console.error);


    global.reload = async (_ev, filename) => {
      if (pluginFilter(filename)) {
        let dir = global.__filename(join(pluginFolder, filename), true)
        if (filename in global.plugins) {
          if (existsSync(dir)) conn.logger.info(`🌟 Plugin Updated - '${filename}'`)
          else {
            conn.logger.warn(`🗑️ Plugin Deleted - '${filename}'`)
            return delete global.plugins[filename]
          }
        } else conn.logger.info(`✨ NEW plugin - '${filename}'`)
        let err = syntaxerror(readFileSync(dir), filename, {
          sourceType: 'module',
          allowAwaitOutsideFunction: true
        })
        if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`)
        else try {
          const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
          global.plugins[filename] = module.default || module
        } catch (e) {
          conn.logger.error(`error require plugin '${filename}\n${format(e)}'`)
        } finally {
          global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
        }
      }
    }
    Object.freeze(global.reload)
    watch(pluginFolder, global.reload)
    await global.reloadHandler()


function purgeSessionSB() {
    try {
        const listaDirectorios = readdirSync('./Mid-JB/');
        let SBprekey = [];
        listaDirectorios.forEach(directorio => {
            if (statSync(`./Mid-JB/${directorio}`).isDirectory()) {
                const DSBPreKeys = readdirSync(`./Mid-JB/${directorio}`).filter(fileInDir => {
                    return fileInDir.startsWith('pre-key-')
                });
                SBprekey = [...SBprekey, ...DSBPreKeys];
                DSBPreKeys.forEach(fileInDir => {
                    if (fileInDir !== 'creds.json') {
                        unlinkSync(`./Mid-JB/${directorio}/${fileInDir}`);
                    }
                });
            }
        });
        if (SBprekey.length === 0) {
            // Do something if no pre-keys found
        } else {
            // Do something if pre-keys found
        }
    } catch (err) {
        // Handle errors
    }
}

function purgeOldFiles() {
    const directories = ['./sessions/', './Mid-JB/'];
    directories.forEach(dir => {
        const files = readdirSync(dir);
        files.forEach(file => {
            if (file !== 'creds.json') {
                const filePath = path.join(dir, file);
                unlinkSync(filePath);
            }
        });
    });
}

// Quick Test
    async function _quickTest() {

      let test = await Promise.all([
        spawn('ffmpeg'),
        spawn('ffprobe'),
        spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
        spawn('convert'),
        spawn('magick'),
        spawn('gm'),
        spawn('find', ['--version'])
      ].map(p => {
        return Promise.race([
          new Promise(resolve => {
            p.on('close', code => {
              resolve(code !== 127)
            })
          }),
          new Promise(resolve => {
            p.on('error', _ => resolve(false))
          })
        ])
      }))
      let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
      console.log(test)
      let s = global.support = { ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find}
      Object.freeze(global.support)

      if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
      if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
      if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
    }
  _quickTest()
  .then(() => {
      conn.logger.info('✅ Quick test Done!')})
  .catch(console.error);
