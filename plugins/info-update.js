let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} RULES ${htka}

 > *BANNED SEMENTARA* :
┃• Laporan Request Fitur Palsu/Main-Main
┃• Laporan Bug Pada Fitur Palsu/Main-Main
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Youtube', url: 'https://youtube.com/channel/UCACHvReRmw2fxgMutPFCBWg'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['bansementara']
handler.tags = ['info']
handler.command = /^bansementara$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP