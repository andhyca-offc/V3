let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *TUTORIAL* ${htka}

*📮 Tutorial Buat Bot WA:*

🔴–¸ Ketik di *[TERMUX]*
1) $ apt update
2) $ apt upgrade
3) $ pkg install ffmpeg
4) $ pkg install imagemagick
5) $ pkg install nodejs

🔴–¸ *Untuk Sc nya cari sendiri, atau beli sc ku*
6) $ termux-setup-storage
7) $ cd storage/downloads/(nama file yg kmu rename)


🔴–¸ *Git*
1) $ pkg install git
2) $ pkg install ffmpeg
3) $ pkg install imagemagick
4) $ pkg install nodejs

🔴–¸ *Script*
5) $ git clone (link sc github)
6) $ cd (nama sc)

*🔴–¸ Penginstal :*
$ npm start
atau
$ npm i pm2 && pm2 start (sesuaikan sama sc kalian)
$ node .

[ 📣 Note : Tanda $ Ga Perlu Di Ketik ]
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script', url: 'https://s.id/-1a7RO'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['cbb', 'carabuatbot', 'runbot']
handler.tags = ['info']
handler.command = /^(cbb|cararunbot|runbot)$/i
handler.private = true

export default handler
