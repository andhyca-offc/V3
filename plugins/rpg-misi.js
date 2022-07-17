let handler = async (m, { conn }) => {
let info = `
*${htki} MISI ${htka}*

©2022 FangzBot Official 
`
const sections = [
   {
	title: `✃ MISI`,
	rows: [
	    {title: "🚖 Taxy", rowId: '.misitaxy', description: 'Rpg Taxy' },
	    {title: "☠️ Membunuh", rowId: '.misibunuh', description: 'Rpg Membunuh' },
	{title: "🛵 Ojek", rowId: '.misiojek', description: 'Rpg Ojek' },
	{title: "🥵 Open Bo", rowId: '.misingewe', description: 'Rpg Open Bo' },
	{title: "🤠 Koboy", rowId: '.misikoboy', description: 'Rpg Koboy' },
	{title: "👮 Polisi", rowId: '.misipolisi', description: 'Rpg Polisi' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['misi', 'misirpg']
handler.tags = ['info']
handler.command = /^(misi(rpg)?|misirpg)$/i
handler.private = true

export default handler
