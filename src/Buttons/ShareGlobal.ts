import { GuildMember } from 'discord.js';

import { IButton } from '../Types';
import { Words, Format } from '../Helpers';

export default {
	customID: 'share-global',
	execute: async interaction => {
		if (interaction.replied)
			return;

		const member = interaction.member as GuildMember;
		const name = member?.nickname ?? interaction.user.tag;
		const reply = await Words.ShareGame(interaction.user.id, name);

		return interaction.reply(Format.Reply(reply));
	}
} as IButton;
