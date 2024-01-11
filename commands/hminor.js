const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const exampleEmbed = new EmbedBuilder()
	.setColor('DarkBlue')
	.setTitle('Minor Harmonic Fields')
	.setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdjbooth.net%2F.image%2Ft_share%2FMTUzNDg2NDUxODQ3NDczMDA5%2Fmusic-theory-pic-1jpg.jpg&f=1&nofb=1&ipt=485f65de702695be08af860b21664bf886051092cb12e07a8d0ff967a526f056&ipo=images')
	.addFields(
		{ name: 'C Minor', value: 'Cm Ddim E♭ Fm Gm A♭ B♭' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'C#(Db) Minor', value: 'C#m D#dim E F#m G#m A B' },
        { name: '\u200B', value: '\u200B' },
		{ name: 'D Minor', value: 'Dm Edim F Gm Am A# (B♭) C' },
        { name: '\u200B', value: '\u200B' },
        { name: 'D#(Eb) Minor', value: 'D#m E# (F) F# G#m A#m B C#' },
        { name: '\u200B', value: '\u200B' },
        { name: 'E Minor', value: 'Em F#dim G Am Bm C D' },
        { name: '\u200B', value: '\u200B' },
        { name: 'F Minor', value: 'Fm Gdim A♭ (G#) B♭m Cm D♭ (C#)' },
        { name: '\u200B', value: '\u200B' },
        { name: 'F#(Gb) Minor', value: 'F#m G#dim A Bm C#m D E' },
        { name: '\u200B', value: '\u200B' },
        { name: 'G Minor', value: 'Gm Adim B♭ (A#) Cm Dm E♭ F' },
        { name: '\u200B', value: '\u200B' },
        { name: 'G#(Ab) Minor', value: 'G#m A#dim B C#m D#m E F#' },
        { name: '\u200B', value: '\u200B' },
        { name: 'A Minor', value: 'Am Bdim C Dm Em F G' },
        { name: '\u200B', value: '\u200B' },
        { name: 'A#(Bb) Minor', value: 'A#m B# (C) D# E# (F) G#m A' },
        { name: '\u200B', value: '\u200B' },
        { name: 'B Minor', value: 'Bm C#dim D Em F#m G A' },
	)
	.setTimestamp()

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hminor")
        .setDescription("minor harmonic fields"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}