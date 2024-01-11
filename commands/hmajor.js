const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const exampleEmbed = new EmbedBuilder()
	.setColor('DarkBlue')
	.setTitle('Major Harmonic Fields')
	.setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdjbooth.net%2F.image%2Ft_share%2FMTUzNDg2NDUxODQ3NDczMDA5%2Fmusic-theory-pic-1jpg.jpg&f=1&nofb=1&ipt=485f65de702695be08af860b21664bf886051092cb12e07a8d0ff967a526f056&ipo=images')
	.addFields(
		{ name: 'C Major', value: 'C Dm Em F G Am Bdim' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'C#(Db) Major', value: 'C# D#m E# (F) G# A#m B# (C)' },
        { name: '\u200B', value: '\u200B' },
		{ name: 'D Major', value: 'D Em F#m G A Bm C#dim' },
        { name: '\u200B', value: '\u200B' },
        { name: 'D#(Eb) Major', value: 'D# E# (F) Fm G# A# B# (C)' },
        { name: '\u200B', value: '\u200B' },
        { name: 'E Major', value: 'E F#m G#m A B C#m D#dim' },
        { name: '\u200B', value: '\u200B' },
        { name: 'F Major', value: 'F Gm Am A# (B♭) C Dm Edim' },
        { name: '\u200B', value: '\u200B' },
        { name: 'F#(Gb) Major', value: 'F# G#m A#m B C# D#m E#dim' },
        { name: '\u200B', value: '\u200B' },
        { name: 'G Major', value: 'G Am Bm C D Em F#dim' },
        { name: '\u200B', value: '\u200B' },
        { name: 'G#(Ab) Major', value: 'G# A#m B# (C) C# D# E# (F)' },
        { name: '\u200B', value: '\u200B' },
        { name: 'A Major', value: 'A Bm C#m D E F#m G#dim' },
        { name: '\u200B', value: '\u200B' },
        { name: 'A#(Bb) Major', value: 'A# B# (C) Dm E# (F) Gm A#m B# (C)' },
        { name: '\u200B', value: '\u200B' },
        { name: 'B Major', value: 'B C#m D#m E F# G#m A#dim' },
	)
	.setTimestamp()

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hmajor")
        .setDescription("major harmonic fields"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}