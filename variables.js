exports.getVariables = function () {

	var variables = [
		{
			label: 'Current Command TCP Port',
			name: 'command_port'
		},
		{
			label: 'Current Real Time TCP Port',
			name: 'realtime_port'
		},
		{
			label: 'Current PGM bus input',
			name: 'pgm_in'
		},
		{
			label: 'Current PGM bus input name',
			name: 'pgm_in_name'
		},
		{
			label: 'Current PVW bus input',
			name: 'pvw_in'
		},
		{
			label: 'Current PVW bus input name',
			name: 'pvw_in_name'
		},
		{
			label: 'Current Audio source',
			name: 'audio_src'
		},
		{
			label: 'Current Key 1 bus input',
			name: 'key1_in'
		},
		{
			label: 'Current Key 1 bus input name',
			name: 'key1_in_name'
		},
		{
			label: 'Current Key 2 bus input',
			name: 'key2_in'
		},
		{
			label: 'Current Key 2 bus input name',
			name: 'key2_in_name'
		},
		{
			label: 'Current Key 3 bus input',
			name: 'key3_in'
		},
		{
			label: 'Current Key 3 bus input name',
			name: 'key3_in_name'
		},
		{
			label: 'Current Key 4 bus input',
			name: 'key4_in'
		},
		{
			label: 'Current Key 4 bus input name',
			name: 'key4_in_name'
		},
		{
			label: 'Current PIP bus input',
			name: 'pip_in'
		},
		{
			label: 'Current PIP bus input name',
			name: 'pip_in_name'
		},
		{
			label: 'Current DSK 1 bus input',
			name: 'dsk1_in'
		},
		{
			label: 'Current DSK 1 bus input name',
			name: 'dsk1_in_name'
		},
		{
			label: 'Current DSK 2 bus input',
			name: 'dsk2_in'
		},
		{
			label: 'Current DSK 2 bus input name',
			name: 'dsk2_in_name'
		},
		{
			label: 'Current Aux 1 bus input',
			name: 'aux1_in'
		},
		{
			label: 'Current Aux 1 bus input name',
			name: 'aux1_in_name'
		},
		{
			label: 'Current Aux 2 bus input',
			name: 'aux2_in'
		},
		{
			label: 'Current Aux 2 bus input name',
			name: 'aux2_in_name'
		},
		{
			label: 'Current Aux 3 bus input',
			name: 'aux3_in'
		},
		{
			label: 'Current Aux 3 bus input name',
			name: 'aux3_in_name'
		},
		{
			label: 'Current Aux 4 bus input',
			name: 'aux4_in'
		},
		{
			label: 'Current Aux 4 bus input name',
			name: 'aux4_in_name'
		},
		{
			label: 'Current HDMI 1 output',
			name: 'hdmi1_in'
		},
		{
			label: 'Current HDMI 1 output name',
			name: 'hdmi1_in_name'
		},
		{
			label: 'Current HDMI 2 output',
			name: 'hdmi2_in'
		},
		{
			label: 'Current HDMI 2 output name',
			name: 'hdmi2_in_name'
		},
		{
			label: 'Current HDMI 3 output',
			name: 'hdmi3_in'
		},
		{
			label: 'Current HDMI 3 output name',
			name: 'hdmi3_in_name'
		},
		{
			label: 'Current SDI 1 output',
			name: 'sdi1_in'
		},
		{
			label: 'Current SDI 1 output',
			name: 'sdi1_in_name'
		},
		{
			label: 'Current SDI 1 output',
			name: 'sdi2_in'
		},
		{
			label: 'Current SDI 2 output',
			name: 'sdi2_in_name'
		},
		{
			label: 'Current ME Duration in Frames',
			name: 'me_dur'
		},
		{
			label: 'Current DSK Duration in Frames',
			name: 'dsk_dur'
		},
		{
			label: 'Current FTB Duration in Frames',
			name: 'ftb_dur'
		},
		{
			label: 'Current Key 1 PGM state',
			name: 'key1_pgm_state'
		},
		{
			label: 'Current Key 1 PVW state',
			name: 'key1_pvw_state'
		},
		{
			label: 'Current Key 2 PGM state',
			name: 'key2_pgm_state'
		},
		{
			label: 'Current Key 2 PVW state',
			name: 'key2_pvw_state'
		},
		{
			label: 'Current Key 3 PGM state',
			name: 'key3_pgm_state'
		},
		{
			label: 'Current Key 3 PVW state',
			name: 'key3_pvw_state'
		},
		{
			label: 'Current Key 4 PGM state',
			name: 'key4_pgm_state'
		},
		{
			label: 'Current Key 4 PVW state',
			name: 'key4_pvw_state'
		},
		{
			label: 'Current PIP PGM state',
			name: 'pip_pgm_state'
		},
		{
			label: 'Current PIP PVW state',
			name: 'pip_pvw_state'
		},
		{
			label: 'Current DSK 1 PGM state',
			name: 'dsk1_pgm_state'
		},
		{
			label: 'Current DSK 1 PVW state',
			name: 'dsk1_pvw_state'
		},
		{
			label: 'Current DSK 2 PGM state',
			name: 'dsk2_pgm_state'
		},
		{
			label: 'Current DSK 2 PVW state',
			name: 'dsk2_pvw_state'
		},
		{
			label: 'Current In 1 Name',
			name: 'in1_name'
		},
		{
			label: 'Current In 2 Name',
			name: 'in2_name'
		},
		{
			label: 'Current In 3 Name',
			name: 'in3_name'
		},
		{
			label: 'Current In 4 Name',
			name: 'in4_name'
		},
		{
			label: 'Current In 5 Name',
			name: 'in5_name'
		},
		{
			label: 'Current In 6 Name',
			name: 'in6_name'
		},
		{
			label: 'Current In 7 Name',
			name: 'in7_name'
		},
		{
			label: 'Current In 8 Name',
			name: 'in8_name'
		},
		{
			label: 'Current In 9 Name',
			name: 'in9_name'
		},
		{
			label: 'Current In 10 Name',
			name: 'in10_name'
		},
		{
			label: 'Current In 11 Name',
			name: 'in11_name'
		},
		{
			label: 'Current In 12 Name',
			name: 'in12_name'
		},
		{
			label: 'Current User Number',
			name: 'curr_user'
		},
		{
			label: 'Current NORM REV state',
			name: 'normrev_state'
		},
		{
			label: 'Current REV state',
			name: 'rev_state'
		},
		{
			label: 'Current TRANS PREVIEW state',
			name: 'preview_state'
		},
		{
			label: 'Current BACKGROUND state',
			name: 'bgnd_state'
		},
		{
			label: 'Current FTB ENABLE state',
			name: 'ftbenable_state'
		},
		{
			label: 'Current FTB Level',
			name: 'ftb_level'
		},
		{
			label: 'Current KEY PRIORITY state',
			name: 'keypriority_state'
		},
		{
			label: 'Currently selected wipe',
			name: 'curr_wipe'
		},
		{
			label: 'Current audio SDI 1 enable state',
			name: 'audio_sdi1'
		},
		{
			label: 'Current audio SDI 2 enable state',
			name: 'audio_sdi2'
		},
		{
			label: 'Current audio SDI 3 enable state',
			name: 'audio_sdi3'
		},
		{
			label: 'Current audio SDI 4 enable state',
			name: 'audio_sdi4'
		},
		{
			label: 'Current audio SDI 5 enable state',
			name: 'audio_sdi5'
		},
		{
			label: 'Current audio SDI 6 enable state',
			name: 'audio_sdi6'
		},
		{
			label: 'Current audio HDMI 1 enable state',
			name: 'audio_hdmi1'
		},
		{
			label: 'Current audio HDMI 2 enable state',
			name: 'audio_hdmi2'
		},
		{
			label: 'Current audio HDMI 3 enable state',
			name: 'audio_hdmi3'
		},
		{
			label: 'Current System Standard ID',
			name: 'sys_standard'
		},
		{
			label: 'Current System Standard Format',
			name: 'sys_standard_label'
		},
	];

	return variables;
}