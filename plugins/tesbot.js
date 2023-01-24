let handler = async (m, { conn }) => {
let url = 'https://telegra.ph/file/966b949e0e1f8f255c0b6.png'
conn.sendButtonLoc(m.chat, url, 'Tes', wm, 'MENU', '.menu', m)
}
handler.command = ['tesbot']

export default handler