import TicTacToe from '../lib/tictactoe.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `✳️ *أنت مزال فشي لعبة، باش تخرج كتب:*\n\n*${usedPrefix}xoxo*`
    if (!text) text = m.chat;
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    if (room) {
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❎',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
let str = `
❎ : @${room.game.playerX.split('@')[0]}
⭕ : @${room.game.playerO.split('@')[0]}
 *─── ⋆⋅⋆⋅⋆ ───*
   ${arr.slice(0, 3).join('')}  
   ${arr.slice(3, 6).join('')}
   ${arr.slice(6).join('')}
*─── ⋆⋅⋆⋅⋆ ───*
🪄 نوبة: @${room.game.currentTurn.split('@')[0]}`.trim()
        if (room.x !== room.o) await conn.reply(room.x, str, null)
        await conn.reply(room.o, str, null)
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
 
   conn.game[room.id] = room
    }
    
}
 handler.command = /^(ttt|xo)$/i;
export default handler;
