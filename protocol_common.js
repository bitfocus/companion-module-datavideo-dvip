module.exports = {
	//GET SET COMMANDS FOR SE650 SE700 SE1200MU  
	GET_SET_CMD_COMMON: [{
		id: 0,
		label: "SECTION_STATUS",
		controls: [{
			id: 0,
			label: "STATUS_SYSTEM_CONNECTION_STATUS",
			type: "int",
			values: [{
				id: 0,
				label: "DV_CONNECTION_NO_CONNECTION",
			},
			{
				id: 1,
				label: "DV_CONNECTION_PENDING",
			},
			{
				id: 2,
				label: "DV_CONNECTION_CONNECTED",
			}
			]
		},
		{
			id: 1,
			label: "STATUS_SYSTEM_VERSION",
			type: "int",
		},
		{
			id: 2,
			label: "STATUS_MAIN_VERSION",
			type: "int",
		},
		{
			id: 3,
			label: "STATUS_SOFTWARE_VERSION",
			type: "int",
		},
		{
			id: 4,
			label: "STATUS_FPGA_VERSION",
			type: "int",
		},
		{
			id: 5,
			label: "NOT_DOCUMENTED",
			type: "int",
		},
		{
			id: 6,
			label: "STATUS_BOARD_ID_VERSION",
			type: "int",
		},
		{
			id: 7,
			label: "STATUS_TALLY_SOURCE_0",
			type: "int",
		},
		{
			id: 8,
			label: "STATUS_TALLY_SOURCE_1",
			type: "int",
		},
		{
			id: 9,
			label: "STATUS_TALLY_SOURCE_2",
			type: "int",
		},
		{
			id: 10,
			label: "STATUS_TALLY_SOURCE_3",
			type: "int",
		},
		{
			id: 11,
			label: "STATUS_TALLY_SOURCE_4",
			type: "int",
		},
		{
			id: 12,
			label: "STATUS_TALLY_SOURCE_5",
			type: "int",
		},
		{
			id: 13,
			label: "STATUS_TALLY_SOURCE_6",
			type: "int",
		},
		{
			id: 14,
			label: "STATUS_TALLY_SOURCE_7",
			type: "int",
		},
		{
			id: 15,
			label: "STATUS_TALLY_SOURCE_8",
			type: "int",
		},
		{
			id: 16,
			label: "STATUS_TALLY_SOURCE_9",
			type: "int",
		},
		{
			id: 17,
			label: "STATUS_TALLY_SOURCE_10",
			type: "int",
		},
		{
			id: 18,
			label: "STATUS_TALLY_SOURCE_11",
			type: "int",
		},
		{
			id: 19,
			label: "STATUS_TALLY_SOURCE_12",
			type: "int",
		},
		{
			id: 20,
			label: "STATUS_TALLY_SOURCE_13",
			type: "int",
		},
		{
			id: 21,
			label: "STATUS_TALLY_SOURCE_14",
			type: "int",
		},
		{
			id: 22,
			label: "STATUS_TALLY_SOURCE_15",
			type: "int",
		},
		{
			id: 23,
			label: "STATUS_TALLY_SOURCE_16",
			type: "int",
		},
		{
			id: 24,
			label: "STATUS_TALLY_SOURCE_17",
			type: "int",
		},
		{
			id: 25,
			label: "STATUS_TALLY_SOURCE_18",
			type: "int",
		},
		{
			id: 26,
			label: "STATUS_TALLY_SOURCE_19",
			type: "int",
		},
		{
			id: 27,
			label: "STATUS_TALLY_PGM_SRC",
			type: "int",
		},
		{
			id: 28,
			label: "STATUS_TALLY_PST_SRC",
			type: "int",
		},
		{
			id: 29,
			label: "STATUS_TALLY_KEY1_FILL_SRC",
			type: "int",
		},
		{
			id: 30,
			label: "STATUS_TALLY_KEY1_KEY_SRC",
			type: "int",
		},
		{
			id: 31,
			label: "STATUS_TALLY_KEY2_FILL_SRC",
			type: "int",
		},
		{
			id: 32,
			label: "STATUS_TALLY_KEY2_KEY_SRC",
			type: "int",
		},
		{
			id: 33,
			label: "STATUS_TALLY_DSK1_FILL_SRC",
			type: "int",
		},
		{
			id: 34,
			label: "STATUS_TALLY_DSK1_KEY_SRC",
			type: "int",
		},
		{
			id: 35,
			label: "STATUS_TALLY_DSK2_FILL_SRC",
			type: "int",
		},
		{
			id: 36,
			label: "STATUS_TALLY_DSK2_KEY_SRC",
			type: "int",
		},
		{
			id: 40,
			label: "STATUS_FREE_SPACE",
			type: "int",
		},
		]
	},
	{
		id: 1,
		label: "SECTION_SYSTEM",
		controls: [{
			id: 0,
			label: "SYSTEM_STANDARD",
			type: "int",
			values: [{
				id: 0,
				label: "DV_STD_HD1080I_60"
			},
			{
				id: 1,
				label: "DV_STD_HD1080I_59_94"
			},
			{
				id: 2,
				label: "DV_STD_HD1080I_50"
			},
			{
				id: 3,
				label: "DV_STD_HD720P_60"
			},
			{
				id: 4,
				label: "DV_STD_HD720P_59_94"
			},
			{
				id: 5,
				label: "DV_STD_HD720P_50"
			},
			]
		},
		{
			id: 1,
			label: "SYSTEM_ASPECT",
			type: "flag",
		},
		{
			id: 2,
			label: "SYSTEM_GENLOCK_ENABLE",
			type: "flag",
		},
		{
			id: 3,
			label: "SYSTEM_GENLOCK_SRC",
			type: "int",
		},
		{
			id: 4,
			label: "SYSTEM_GENLOCK_H_PHASE",
			type: "int",
		},
		{
			id: 5,
			label: "SYSTEM_GENLOCK_V_PHASE",
			type: "int",
		},
		{
			id: 6,
			label: "SYSTEM_NETWORK_IP_MODE",
			type: "int",
		},
		{
			id: 7,
			label: "SYSTEM_NETWORK_IP_ADDR",
			type: "int",
		},
		{
			id: 8,
			label: "SYSTEM_NETWORK_NETWORK_MASK",
			type: "int",
		},
		{
			id: 9,
			label: "SYSTEM_NETWORK_GATEWAY",
			type: "int",
		},
		{
			id: 10,
			label: "SYSTEM_NETWORK_MAC_ADDR0",
			type: "int",
		},
		{
			id: 11,
			label: "SYSTEM_NETWORK_MAC_ADDR1",
			type: "int",
		},
		{
			id: 12,
			label: "SYSTEM_NETWORK_SPARE1",
			type: "int",
		},
		{
			id: 13,
			label: "SYSTEM_NETWORK_SPARE2",
			type: "int",
		},
		{
			id: 14,
			label: "SYSTEM_PREF_MENU_COLOUR",
			type: "int",
		},
		{
			id: 15,
			label: "SYSTEM_PREF_MENU_POSITION",
			type: "int",
		},
		{
			id: 16,
			label: "SYSTEM_PREF_TRANSP_MENUS",
			type: "int",
		},
		{
			id: 17,
			label: "SYSTEM_PREF_SMALL_MENUS",
			type: "int",
		},
		{
			id: 18,
			label: "SYSTEM_AUTO_SAVE_ENABLE",
			type: "int",
		},
		{
			id: 19,
			label: "SYSTEM_LANGUAGE_SELECT",
			type: "int",
		},
		{
			id: 20,
			label: "SYSTEM_PREF_MENU_MODE",
			type: "int",
		},
		{
			id: 21,
			label: "SYSTEM_PREF_KEYBOARD_BRIGHTNESS",
			type: "int",
		},
		{
			id: 22,
			label: "SYSTEM_SERIAL_MODE",
			type: "flag",
		},
		{
			id: 23,
			label: "SYSTEM_AUDIO_ANALOG_LEVEL",
			type: "flag",
		},
		]
	},
	{
		id: 2,
		mainSection: 2,
		subSection: 0,
		label: "SECTION_SWITCHER",
		controls: [
			{
				id: 0,
				label: "SWITCHER_WIPE_PATTERN_NUM",
				type: "int",
			},
			{
				id: 1,
				label: "SWITCHER_WIPE_LEVEL",
				type: "float",
			},
			{
				id: 2,
				label: "SWITCHER_WIPE_POSITION_X",
				type: "float",
			},
			{
				id: 3,
				label: "SWITCHER_WIPE_POSITION_Y",
				type: "float",
			},
			{
				id: 4,
				label: "SWITCHER_WIPE_ROTATION",
				type: "float",
			},
			{
				id: 5,
				label: "SWITCHER_WIPE_SOFT",
				type: "float",
			},
			{
				id: 7,
				label: "SWITCHER_WIPE_ASPECT",
				type: "float",
			},
			{
				id: 8,
				label: "SWITCHER_WIPE_BORDER_WIDTH",
				type: "float",
			},
			{
				id: 9,
				label: "SWITCHER_WIPE_BORDER_ENABLE",
				type: "flag",
			},
			{
				id: 10,
				label: "SWITCHER_WIPE_BORDER_HUE",
				type: "float",
			},
			{
				id: 11,
				label: "SWITCHER_WIPE_BORDER_SAT",
				type: "float",
			},
			{
				id: 12,
				label: "SWITCHER_WIPE_BORDER_LUMA",
				type: "float",
			},
			{
				id: 19,
				label: "SWITCHER_KEY1_KEYER_ON",
				type: "int",
			},
			{
				id: 20,
				label: "SWITCHER_KEY1_KEY_SRC",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 18,
					label: "PATTERN"
				},
				{
					id: 19,
					label: "STILL_1"
				},
				{
					id: 20,
					label: "STILL_2"
				},
				]
			},
			{
				id: 21,
				label: "SWITCHER_KEY1_SPLIT_SRC",
				type: "int",
			},
			{
				id: 22,
				label: "SWITCHER_KEY1_LINEAR_OPACITY",
				type: "float",
			},
			{
				id: 23,
				label: "SWITCHER_KEY1_LINEAR_LIFT",
				type: "float",
			},
			{
				id: 24,
				label: "SWITCHER_KEY1_LINEAR_GAIN",
				type: "float",
			},
			{
				id: 25,
				label: "SWITCHER_KEY1_LINEAR_KEY_MODE",
				type: "int",
			},
			{
				id: 26,
				label: "SWITCHER_KEY1_LINEAR_KEY_INVERT",
				type: "float",
			},
			{
				id: 27,
				label: "SWITCHER_KEY1_LINEAR_KEY_SEL_MODE",
				type: "int",
			},
			{
				id: 28,
				label: "SWITCHER_KEY1_LINEAR_KEY_FILL_MODE",
				type: "int",
			},
			{
				id: 29,
				label: "SWITCHER_KEY1_LINEAR_MATTE_HUE",
				type: "float",
			},
			{
				id: 30,
				label: "SWITCHER_KEY1_LINEAR_MATTE_SAT",
				type: "float",
			},
			{
				id: 31,
				label: "SWITCHER_KEY1_LINEAR_MATTE_LUMA",
				type: "float",
			},
			{
				id: 32,
				label: "SWITCHER_KEY1_CHROMA_ENABLE",
				type: "int",
			},
			{
				id: 33,
				label: "SWITCHER_KEY1_CHROMA_MATTE_HUE",
				type: "float",
			},
			{
				id: 34,
				label: "SWITCHER_KEY1_CHROMA_MATTE_SAT",
				type: "float",
			},
			{
				id: 35,
				label: "SWITCHER_KEY1_CHROMA_MATTE_LUMA",
				type: "float",
			},
			{
				id: 36,
				label: "SWITCHER_KEY1_CHROMA_KEY_ACC",
				type: "float",
			},
			{
				id: 37,
				label: "SWITCHER_KEY1_CHROMA_KEY_GAIN",
				type: "float",
			},
			{
				id: 38,
				label: "SWITCHER_KEY1_CHROMA_KEY_LIFT",
				type: "float",
			},
			{
				id: 39,
				label: "SWITCHER_KEY1_CHROMA_CHROMA_ACC",
				type: "float",
			},
			{
				id: 40,
				label: "SWITCHER_KEY1_CHROMA_CHROMA_SUP",
				type: "float",
			},
			{
				id: 41,
				label: "SWITCHER_KEY1_CHROMA_KEY_SOFT",
				type: "float",
			},
			{
				id: 42,
				label: "SWITCHER_KEY1_CHROMA_KEY_SHRINK",
				type: "float",
			},
			{
				id: 43,
				label: "SWITCHER_KEY1_CHROMA_BGND_SUPPRESS",
				type: "int",
			},
			{
				id: 44,
				label: "SWITCHER_KEY1_MASK_LEFT",
				type: "float",
			},
			{
				id: 45,
				label: "SWITCHER_KEY1_MASK_RIGHT",
				type: "float",
			},
			{
				id: 46,
				label: "SWITCHER_KEY1_MASK_TOP",
				type: "float",
			},
			{
				id: 47,
				label: "SWITCHER_KEY1_MASK_BOTTOM",
				type: "float",
			},
			{
				id: 48,
				label: "SWITCHER_KEY1_MASK_ENABLE",
				type: "int",
			},
			{
				id: 49,
				label: "SWITCHER_KEY2_KEYER_ON",
				type: "int",
			},
			{
				id: 50,
				label: "SWITCHER_KEY2_KEY_SRC",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 18,
					label: "PATTERN"
				},
				{
					id: 19,
					label: "STILL_1"
				},
				{
					id: 20,
					label: "STILL_2"
				},
				]
			},
			{
				id: 51,
				label: "SWITCHER_KEY2_SPLIT_SRC",
				type: "int",
			},
			{
				id: 52,
				label: "SWITCHER_KEY2_LINEAR_OPACITY",
				type: "float",
			},
			{
				id: 53,
				label: "SWITCHER_KEY2_LINEAR_LIFT",
				type: "float",
			},
			{
				id: 54,
				label: "SWITCHER_KEY2_LINEAR_GAIN",
				type: "float",
			},
			{
				id: 55,
				label: "SWITCHER_KEY2_LINEAR_KEY_MODE",
				type: "int",
			},
			{
				id: 56,
				label: "SWITCHER_KEY2_LINEAR_KEY_INVERT",
				type: "float",
			},
			{
				id: 57,
				label: "SWITCHER_KEY2_LINEAR_KEY_SEL_MODE",
				type: "int",
			},
			{
				id: 58,
				label: "SWITCHER_KEY2_LINEAR_KEY_FILL_MODE",
				type: "int",
			},
			{
				id: 59,
				label: "SWITCHER_KEY2_LINEAR_MATTE_HUE",
				type: "float",
			},
			{
				id: 60,
				label: "SWITCHER_KEY2_LINEAR_MATTE_SAT",
				type: "float",
			},
			{
				id: 61,
				label: "SWITCHER_KEY2_LINEAR_MATTE_LUMA",
				type: "float",
			},
			{
				id: 62,
				label: "SWITCHER_KEY2_CHROMA_ENABLE",
				type: "int",
			},
			{
				id: 63,
				label: "SWITCHER_KEY2_CHROMA_MATTE_HUE",
				type: "float",
			},
			{
				id: 64,
				label: "SWITCHER_KEY2_CHROMA_MATTE_SAT",
				type: "float",
			},
			{
				id: 65,
				label: "SWITCHER_KEY2_CHROMA_MATTE_LUMA",
				type: "float",
			},
			{
				id: 66,
				label: "SWITCHER_KEY2_CHROMA_KEY_ACC",
				type: "float",
			},
			{
				id: 67,
				label: "SWITCHER_KEY2_CHROMA_KEY_GAIN",
				type: "float",
			},
			{
				id: 68,
				label: "SWITCHER_KEY2_CHROMA_KEY_LIFT",
				type: "float",
			},
			{
				id: 69,
				label: "SWITCHER_KEY2_CHROMA_CHROMA_ACC",
				type: "float",
			},
			{
				id: 70,
				label: "SWITCHER_KEY2_CHROMA_CHROMA_SUP",
				type: "float",
			},
			{
				id: 71,
				label: "SWITCHER_KEY2_CHROMA_KEY_SOFT",
				type: "float",
			},
			{
				id: 72,
				label: "SWITCHER_KEY2_CHROMA_KEY_SHRINK",
				type: "float",
			},
			{
				id: 73,
				label: "SWITCHER_KEY2_CHROMA_BGND_SUPPRESS",
				type: "int",
			},
			{
				id: 74,
				label: "SWITCHER_KEY2_MASK_LEFT",
				type: "float",
			},
			{
				id: 75,
				label: "SWITCHER_KEY2_MASK_RIGHT",
				type: "float",
			},
			{
				id: 76,
				label: "SWITCHER_KEY2_MASK_TOP",
				type: "float",
			},
			{
				id: 77,
				label: "SWITCHER_KEY2_MASK_BOTTOM",
				type: "float",
			},
			{
				id: 78,
				label: "SWITCHER_KEY2_MASK_ENABLE",
				type: "int",
			},
			{
				id: 79,
				label: "SWITCHER_TRANS_BGND",
				type: "flag",
			},
			{
				id: 80,
				label: "SWITCHER_TRANS_KEY1",
				type: "flag",
			},
			{
				id: 81,
				label: "SWITCHER_TRANS_KEY2",
				type: "flag",
			},
			{
				id: 82,
				label: "SWITCHER_TRANS_PRIORITY",
				type: "flag",
			},
			{
				id: 83,
				label: "SWITCHER_TRANS_PREVIEW",
				type: "flag",
			},
			{
				id: 84,
				label: "SWITCHER_TRANS_REVERSE",
				type: "flag",
			},
			{
				id: 85,
				label: "SWITCHER_TRANS_NORMAL_REV",
				type: "flag",
			},
			{
				id: 86,
				label: "SWITCHER_PGM_SRC",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 18,
					label: "PATTERN"
				},
				{
					id: 19,
					label: "STILL_1"
				},
				{
					id: 20,
					label: "STILL_2"
				},
				]
			},
			{
				id: 87,
				label: "SWITCHER_PST_SRC",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 18,
					label: "PATTERN"
				},
				{
					id: 19,
					label: "STILL_1"
				},
				{
					id: 20,
					label: "STILL_2"
				},
				]
			},
			{
				id: 88,
				label: "SWITCHER_TRANS_TYPE",
				type: "int",
				values: [{
					id: 0,
					label: "MIX",
				},
				{
					id: 1,
					label: "WIPE",
				},
				{
					id: 2,
					label: "CLIP",
				}
				]

			},
			{
				id: 90,
				label: "SWITCHER_KEY_PRIORITY",
				type: "flag",
			},
			{
				id: 91,
				label: "SWITCHER_DSK1_KEYER_ON",
				type: "int",
			},
			{
				id: 92,
				label: "SWITCHER_DSK1_KEY_SRC",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 18,
					label: "PATTERN"
				},
				{
					id: 19,
					label: "STILL_1"
				},
				{
					id: 20,
					label: "STILL_2"
				},
				]
			},
			{
				id: 93,
				label: "SWITCHER_DSK1_SPLIT_SRC",
				type: "int",
			},
			{
				id: 94,
				label: "SWITCHER_DSK1_LINEAR_OPACITY",
				type: "float",
			},
			{
				id: 95,
				label: "SWITCHER_DSK1_LINEAR_LIFT",
				type: "float",
			},
			{
				id: 96,
				label: "SWITCHER_DSK1_LINEAR_GAIN",
				type: "float",
			},
			{
				id: 97,
				label: "SWITCHER_DSK1_LINEAR_KEY_MODE",
				type: "int",
			},
			{
				id: 98,
				label: "SWITCHER_DSK1_LINEAR_KEY_INVERT",
				type: "float",
			},
			{
				id: 99,
				label: "SWITCHER_DSK1_LINEAR_KEY_SEL_MODE",
				type: "int",
			},
			{
				id: 100,
				label: "SWITCHER_DSK1_LINEAR_KEY_FILL_MODE",
				type: "int",
			},
			{
				id: 101,
				label: "SWITCHER_DSK1_LINEAR_MATTE_HUE",
				type: "float",
			},
			{
				id: 102,
				label: "SWITCHER_DSK1_LINEAR_MATTE_SAT",
				type: "float",
			},
			{
				id: 103,
				label: "SWITCHER_DSK1_LINEAR_MATTE_LUMA",
				type: "float",
			},
			{
				id: 104,
				label: "SWITCHER_DSK1_MASK_LEFT",
				type: "float",
			},
			{
				id: 105,
				label: "SWITCHER_DSK1_MASK_RIGHT",
				type: "float",
			},
			{
				id: 106,
				label: "SWITCHER_DSK1_MASK_TOP",
				type: "float",
			},
			{
				id: 107,
				label: "SWITCHER_DSK1_MASK_BOTTOM",
				type: "float",
			},
			{
				id: 108,
				label: "SWITCHER_DSK1_MASK_ENABLE",
				type: "float",
			},
			{
				id: 109,
				label: "SWITCHER_DSK2_KEYER_ON",
				type: "int",
			},
			{
				id: 110,
				label: "SWITCHER_DSK2_KEY_SRC",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 18,
					label: "PATTERN"
				},
				{
					id: 19,
					label: "STILL_1"
				},
				{
					id: 20,
					label: "STILL_2"
				},
				]
			},
			{
				id: 111,
				label: "SWITCHER_DSK2_SPLIT_SRC",
				type: "int",
			},
			{
				id: 112,
				label: "SWITCHER_DSK2_LINEAR_OPACITY",
				type: "float",
			},
			{
				id: 113,
				label: "SWITCHER_DSK2_LINEAR_LIFT",
				type: "float",
			},
			{
				id: 114,
				label: "SWITCHER_DSK2_LINEAR_GAIN",
				type: "float",
			},
			{
				id: 115,
				label: "SWITCHER_DSK2_LINEAR_KEY_MODE",
				type: "int",
			},
			{
				id: 116,
				label: "SWITCHER_DSK2_LINEAR_KEY_INVERT",
				type: "float",
			},
			{
				id: 117,
				label: "SWITCHER_DSK2_LINEAR_KEY_SEL_MODE",
				type: "int",
			},
			{
				id: 118,
				label: "SWITCHER_DSK2_LINEAR_KEY_FILL_MODE",
				type: "int",
			},
			{
				id: 119,
				label: "SWITCHER_DSK2_LINEAR_MATTE_HUE",
				type: "float",
			},
			{
				id: 120,
				label: "SWITCHER_DSK2_LINEAR_MATTE_SAT",
				type: "float",
			},
			{
				id: 121,
				label: "SWITCHER_DSK2_LINEAR_MATTE_LUMA",
				type: "float",
			},
			{
				id: 122,
				label: "SWITCHER_DSK2_MASK_LEFT",
				type: "float",
			},
			{
				id: 123,
				label: "SWITCHER_DSK2_MASK_RIGHT",
				type: "float",
			},
			{
				id: 124,
				label: "SWITCHER_DSK2_MASK_TOP",
				type: "float",
			},
			{
				id: 125,
				label: "SWITCHER_DSK2_MASK_BOTTOM",
				type: "float",
			},
			{
				id: 126,
				label: "SWITCHER_DSK2_MASK_ENABLE",
				type: "float",
			},
			{
				id: 127,
				label: "SWITCHER_DSK1_TRANS_ENABLE",
				type: "flag",
			},
			{
				id: 128,
				label: "SWITCHER_DSK2_TRANS_ENABLE",
				type: "flag",
			},
			{
				id: 129,
				label: "SWITCHER_DSK_TRANS_LEVEL",
				type: "float",
			},
			{
				id: 130,
				label: "SWITCHER_BUS_MATTE_HUE",
				type: "float",
			},
			{
				id: 131,
				label: "SWITCHER_BUS_MATTE_SAT",
				type: "float",
			},
			{
				id: 132,
				label: "SWITCHER_BUS_MATTE_LUMA",
				type: "float",
			},
			{
				id: 133,
				label: "SWITCHER_FTB_ENABLE",
				type: "flag",
			},
			{
				id: 134,
				label: "SWITCHER_FTB_DIRN",
				type: "flag",
			},
			{
				id: 135,
				label: "SWITCHER_FTB_LEVEL",
				type: "float",
			},
			{
				id: 136,
				label: "SWITCHER_FLEX_SRC_BGND_SRC",
				type: "int",
			},
			{
				id: 137,
				label: "SWITCHER_FLEX_SRC_DVE1_SRC",
				type: "int",
			},
			{
				id: 138,
				label: "SWITCHER_FLEX_SRC_DVE2_SRC",
				type: "int",
			},
			{
				id: 139,
				label: "SWITCHER_FLEX_SRC_FGND_SRC",
				type: "int",
			},
			{
				id: 140,
				label: "SWITCHER_FLEX_SRC_FGND_SRC_K",
				type: "int",
			},
			{
				id: 141,
				label: "SWITCHER_FLEX_SRC_FGND_ENABLE",
				type: "flag",
			},
			{
				id: 142,
				label: "SWITCHER_FLEX_SRC_DVE1_ENABLE",
				type: "flag",
			},
			{
				id: 143,
				label: "SWITCHER_FLEX_SRC_DVE1_POSITION_X",
				type: "float",
			},
			{
				id: 144,
				label: "SWITCHER_FLEX_SRC_DVE1_POSITION_Y",
				type: "float",
			},
			{
				id: 145,
				label: "SWITCHER_FLEX_SRC_DVE1_POSITION_Z",
				type: "float",
			},
			{
				id: 146,
				label: "NOT_DOCUMENTED",
				type: "int",
			},
			{
				id: 147,
				label: "SWITCHER_FLEX_SRC_DVE1_SIZE_X",
				type: "float",
			},
			{
				id: 148,
				label: "SWITCHER_FLEX_SRC_DVE1_SIZE_Y",
				type: "float",
			},
			{
				id: 149,
				label: "SWITCHER_FLEX_SRC_DVE1_SIZE_Z",
				type: "float",
			},
			{
				id: 150,
				label: "SWITCHER_FLEX_SRC_DVE1_CROP_SIZE",
				type: "float",
			},
			{
				id: 151,
				label: "SWITCHER_FLEX_SRC_DVE1_CROP_LEFT",
				type: "float",
			},
			{
				id: 152,
				label: "SWITCHER_FLEX_SRC_DVE1_CROP_RIGHT",
				type: "float",
			},
			{
				id: 153,
				label: "SWITCHER_FLEX_SRC_DVE1_CROP_TOP",
				type: "float",
			},
			{
				id: 154,
				label: "SWITCHER_FLEX_SRC_DVE1_CROP_BOTTOM",
				type: "float",
			},
			{
				id: 155,
				label: "SWITCHER_FLEX_SRC_DVE1_CROP_SOFT",
				type: "float",
			},
			{
				id: 156,
				label: "SWITCHER_FLEX_SRC_DVE1_BORDER_SIZE",
				type: "float",
			},
			{
				id: 157,
				label: "SWITCHER_FLEX_SRC_DVE1_BORDER_LEFT",
				type: "float",
			},
			{
				id: 158,
				label: "SWITCHER_FLEX_SRC_DVE1_BORDER_RIGHT",
				type: "float",
			},
			{
				id: 159,
				label: "SWITCHER_FLEX_SRC_DVE1_BORDER_TOP",
				type: "float",
			},
			{
				id: 160,
				label: "SWITCHER_FLEX_SRC_DVE1_BORDER_BOTTOM",
				type: "float",
			},
			{
				id: 161,
				label: "SWITCHER_FLEX_SRC_DVE1_BORDER_SOFT",
				type: "float",
			},
			{
				id: 162,
				label: "SWITCHER_FLEX_SRC_DVE1_BORDER_STYLE",
				type: "float",
			},
			{
				id: 163,
				label: "SWITCHER_FLEX_SRC_DVE1_BORDER_HUE",
				type: "float",
			},
			{
				id: 164,
				label: "SWITCHER_FLEX_SRC_DVE1_BORDER_SAT",
				type: "float",
			},
			{
				id: 165,
				label: "SWITCHER_FLEX_SRC_DVE1_BORDER_LUMA",
				type: "float",
			},
			//Undocumented PIP Lite controls, seems to replicate DVE1 controls above

			{
				id: 166,
				label: "SWITCHER_FLEX_SRC_DVE2_ENABLE",
				type: "flag",
			},
			{
				id: 167,
				label: "SWITCHER_FLEX_SRC_DVE2_POSITION_X",
				type: "float",
			},
			{
				id: 168,
				label: "SWITCHER_FLEX_SRC_DVE2_POSITION_Y",
				type: "float",
			},
			{
				id: 169,
				label: "SWITCHER_FLEX_SRC_DVE2_POSITION_Z",
				type: "float",
			},
			{
				id: 170,
				label: "NOT_DOCUMENTED",
				type: "int",
			},
			{
				id: 171,
				label: "SWITCHER_FLEX_SRC_DVE2_SIZE_X",
				type: "float",
			},
			{
				id: 172,
				label: "SWITCHER_FLEX_SRC_DVE2_SIZE_Y",
				type: "float",
			},
			{
				id: 173,
				label: "SWITCHER_FLEX_SRC_DVE2_SIZE_Z",
				type: "float",
			},
			{
				id: 174,
				label: "SWITCHER_FLEX_SRC_DVE2_CROP_SIZE",
				type: "float",
			},
			{
				id: 175,
				label: "SWITCHER_FLEX_SRC_DVE2_CROP_LEFT",
				type: "float",
			},
			{
				id: 176,
				label: "SWITCHER_FLEX_SRC_DVE2_CROP_RIGHT",
				type: "float",
			},
			{
				id: 177,
				label: "SWITCHER_FLEX_SRC_DVE2_CROP_TOP",
				type: "float",
			},
			{
				id: 178,
				label: "SWITCHER_FLEX_SRC_DVE2_CROP_BOTTOM",
				type: "float",
			},
			{
				id: 179,
				label: "SWITCHER_FLEX_SRC_DVE2_CROP_SOFT",
				type: "float",
			},
			{
				id: 180,
				label: "SWITCHER_FLEX_SRC_DVE2_BORDER_SIZE",
				type: "float",
			},
			{
				id: 181,
				label: "SWITCHER_FLEX_SRC_DVE2_BORDER_LEFT",
				type: "float",
			},
			{
				id: 182,
				label: "SWITCHER_FLEX_SRC_DVE2_BORDER_RIGHT",
				type: "float",
			},
			{
				id: 183,
				label: "SWITCHER_FLEX_SRC_DVE2_BORDER_TOP",
				type: "float",
			},
			{
				id: 184,
				label: "SWITCHER_FLEX_SRC_DVE2_BORDER_BOTTOM",
				type: "float",
			},
			{
				id: 185,
				label: "SWITCHER_FLEX_SRC_DVE2_BORDER_SOFT",
				type: "float",
			},
			{
				id: 186,
				label: "SWITCHER_FLEX_SRC_DVE2_BORDER_STYLE",
				type: "float",
			},
			{
				id: 187,
				label: "SWITCHER_FLEX_SRC_DVE2_BORDER_HUE",
				type: "float",
			},
			{
				id: 188,
				label: "SWITCHER_FLEX_SRC_DVE2_BORDER_SAT",
				type: "float",
			},
			{
				id: 189,
				label: "SWITCHER_FLEX_SRC_DVE2_BORDER_LUMA",
				type: "float",
			},

		]
	},
	{
		//This command is an weird case as it encodes the input number into the command bit so hex 55 needs to be treated as two nibbles.
		//   10 00 00 00 00 00 00 00 55 00 03 00 01 00 00 00
		//Command Bits [7:4]
		// 0–Input1 1–Input2  2–Input3 Etc
		id: 3,
		label: "SECTION_INPUT",
		controls: [{
			id: 0,
			label: "INPUT_PROC_AMP_BLACK_LEVEL",
			type: "float",
		},
		{
			id: 1,
			label: "INPUT_PROC_AMP_CHROMA_GAIN",
			type: "float",
		},
		{
			id: 2,
			label: "INPUT_PROC_AMP_WHITE_CLIP",
			type: "float",
		},
		{
			id: 3,
			label: "INPUT_INPUT_VALID",
			type: "int",
			values: [{
				id: 0,
				label: "INPUT_NOT_VALID",
			},
			{
				id: 1,
				label: "INPUT_VALID",
			}
			]
		},
		{
			id: 4,
			label: "INPUT_INPUT_MODE",
			type: "int",
		},
		{
			id: 5,
			label: "INPUT_INPUT_FREEZE_MODE",
			type: "int",
			values: [{
				id: 0,
				label: "INPUT_LIVE",
			},
			{
				id: 1,
				label: "INPUT_FROZEN",
			},
			{
				id: 2,
				label: "INPUT_STILL",
			},
			{
				id: 3,
				label: "INPUT_CLIP",
			}
			]
		},
		{
			id: 6,
			label: "INPUT_INPUT_FRAME_MODE",
			type: "int",
			values: [{
				id: 0,
				label: "FRAME_MODE",
			},
			{
				id: 1,
				label: "FIELD_MODE",
			}
			]

		},
		{
			id: 7,
			label: "INPUT_INPUT_REMAP",
			type: "int",
		},
		{
			id: 8,
			label: "INPUT_FREEZE_STILL_LOAD",
			type: "int",
		},
		{
			id: 9,
			label: "INPUT_FREEZE_STILL_NUM",
			type: "int",
		},

		]
	},
	{
		id: 4,
		label: "SECTION_INPUT_CTRL",
		controls: [{
			id: 0,
			label: "INPUT_DVI_INPUT_ENABLE",
			type: "int",
			values: [{
				id: 0,
				label: "DVI_INPUT_NOT_ENABLED",
			},
			{
				id: 1,
				label: "DVI_INPUT_ENABLED",
			}
			]
		},
		{
			id: 1,
			label: "INPUT_ENABLE_REMAP",
			type: "int",
			values: [{
				id: 0,
				label: "REMAPPING_NOT_ENABLED",
			},
			{
				id: 1,
				label: "REMAPPING_ENABLED",
			}
			]
		},
		{
			id: 2,
			label: "INPUT_ENABLE_REMAP",
			type: "int",
			values: [{
				id: 0,
				label: "REMAPPING_NOT_ENABLED",
			},
			{
				id: 1,
				label: "REMAPPING_ENABLED",
			}
			]
		},

		]
	},
	{
		id: 5,
		label: "SECTION_OUTPUT_CTRL",
		controls: [
			{
				id: 4,
				label: "OUTPUT_MULTIVIEWER_MODE",
				type: "int",
			},
			{
				id: 5,
				label: "OUTPUT_MULTIVIEWER_MAIN1_SRC",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 18,
					label: "FLEX_SRC"
				},
				{
					id: 19,
					label: "STILL_1"
				},
				{
					id: 20,
					label: "STILL_2"
				},
				{
					id: 21,
					label: "PGM_OUT"
				},
				{
					id: 22,
					label: "PVW_OUT"
				},
				{
					id: 23,
					label: "PGM_DSK1"
				},
				{
					id: 24,
					label: "PVW_DSK1"
				},
				]
			},
			{
				id: 6,
				label: "OUTPUT_MULTIVIEWER_MAIN2_SRC",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 18,
					label: "FLEX_SRC"
				},
				{
					id: 19,
					label: "STILL_1"
				},
				{
					id: 20,
					label: "STILL_2"
				},
				{
					id: 21,
					label: "PGM_OUT"
				},
				{
					id: 22,
					label: "PVW_OUT"
				},
				{
					id: 23,
					label: "PGM_DSK1"
				},
				{
					id: 24,
					label: "PVW_DSK1"
				},
				]
			},
			{
				id: 9,
				label: "OUTPUT_MULTIVIEWER_TRANSP_LABELS",
				type: "int",
				values: [{
					id: 0,
					label: "NOT_TRANSPARENT",
				},
				{
					id: 1,
					label: "TRANSPARENT",
				}
				]
			},
			{
				id: 10,
				label: "OUTPUT_MULTIVIEWER_AUTO_NUM",
				type: "int",
				values: [{
					id: 0,
					label: "NOT_ENABLED",
				},
				{
					id: 1,
					label: "ENABLED",
				}
				]
			},
			{
				id: 11,
				label: "OUTPUT_MULTIVIEWER_LABEL_INFO",
				type: "int",
				values: [{
					id: 0,
					label: "NOT_ENABLED",
				},
				{
					id: 1,
					label: "ENABLED",
				}
				]
			},
			{
				id: 12,
				label: "OUTPUT_ANALOG_OUT_SELECT",
				type: "int",
			},
			{
				id: 13,
				label: "OUTPUT_ANALOG_OUT_MODE",
				type: "int",
			},
			{
				id: 14,
				label: "OUTPUT_ANALOG_OUT_SYNC_MODE",
				type: "int",
			},
			{
				id: 15,
				label: "OUTPUT_DVI_OUT_SELECT",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 21,
					label: "PGM_OUT"
				},
				{
					id: 22,
					label: "PVW_OUT"
				},
				{
					id: 23,
					label: "PGM_DSK1"
				},
				{
					id: 24,
					label: "PVW_DSK1"
				},
				{
					id: 25,
					label: "PGM_CLEAN"
				},
				{
					id: 26,
					label: "PVW_CLEAN"
				},
				]
			},
			{
				id: 16,
				label: "OUTPUT_MULTI_OUT1_SELECT",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 21,
					label: "PGM_OUT"
				},
				{
					id: 22,
					label: "PVW_OUT"
				},
				{
					id: 23,
					label: "PGM_DSK1"
				},
				{
					id: 24,
					label: "PVW_DSK1"
				},
				{
					id: 25,
					label: "PGM_CLEAN"
				},
				{
					id: 26,
					label: "PVW_CLEAN"
				},
				]
			},
			{
				id: 17,
				label: "OUTPUT_MULTI_OUT2_SELECT",
				type: "int",
				values: [{
					id: 0,
					label: "BLACK"
				},
				{
					id: 1,
					label: "INPUT_1"
				},
				{
					id: 2,
					label: "INPUT_2"
				},
				{
					id: 3,
					label: "INPUT_3"
				},
				{
					id: 4,
					label: "INPUT_4"
				},
				{
					id: 5,
					label: "INPUT_5"
				},
				{
					id: 6,
					label: "INPUT_6"
				},
				{
					id: 17,
					label: "MATTE"
				},
				{
					id: 21,
					label: "PGM_OUT"
				},
				{
					id: 22,
					label: "PVW_OUT"
				},
				{
					id: 23,
					label: "PGM_DSK1"
				},
				{
					id: 24,
					label: "PVW_DSK1"
				},
				{
					id: 25,
					label: "PGM_CLEAN"
				},
				{
					id: 26,
					label: "PVW_CLEAN"
				},
				]
			},
			{
				id: 18,
				label: "OUTPUT_GPI_OUT_ENABLE",
				type: "int",
			},
			{
				id: 19,
				label: "OUTPUT_GPI_OUT_MODE",
				type: "int",
			},
			{
				id: 20,
				label: "OUTPUT_GPI_OUT_SRC",
				type: "int",
			},
			{
				id: 21,
				label: "OUTPUT_GPI_OUT_DELAY",
				type: "int",
			},
			{
				id: 22,
				label: "OUTPUT_GPI_OUT_WIDTH",
				type: "int",
			},
			{
				id: 23,
				label: "OUTPUT_HDMI_MODE",
				type: "int",
				values: [{
					id: 0,
					label: "1080_P"
				},
				{
					id: 1,
					label: "1080_I"
				}
				]
			},
			{
				id: 24,
				label: "OUTPUT_TALLY_MODE",
				type: "int",
				values: [{
					id: 0,
					label: "NORMAL"
				},
				{
					id: 1,
					label: "AUDIO_MIXER"
				}
				]
			},
		]
	},
	{
		id: 6,
		label: "SECTION_AUDIO_CTRL",
		controls: [{
			id: 0,
			label: "AUDIO_SOURCE",
			type: "int"
		},
		{
			id: 1,
			label: "AUDIO_CHAN",
			type: "int"

		},
		{
			id: 2,
			label: "AUDIO_MODE",
			type: "int",
			values: [{
				id: 0,
				label: "OFF",
			},
			{
				id: 1,
				label: "DIGITAL",
			},
			{
				id: 2,
				label: "ANALOG",
			},
			{
				id: 3,
				label: "TEST",
			}
			]
		},
		{
			id: 4,
			label: "AUDIO_SDI1_ENABLE",
			type: "int"

		},
		{
			id: 5,
			label: "AUDIO_SDI2_ENABLE",
			type: "int"

		},
		{
			id: 6,
			label: "AUDIO_HDMI1_ENABLE",
			type: "int"

		},
		]
	},
	{
		id: 7,
		label: "SECTION_TRANSITION_CTRL",
		controls: [{
			id: 0,
			label: "ME_TRANS_COMMAND",
			type: "int",
			values: [{
				id: 0,
				label: "TRANSITION_STOP"
			},
			{
				id: 1,
				label: "TRANSITION_RUN"
			},
			{
				id: 2,
				label: "TRANSITION_PAUSE"
			},
			{
				id: 3,
				label: "TRANSITION_CONTINUE"
			},
			{
				id: 4,
				label: "TRANSITION_GOTO_START"
			},
			{
				id: 5,
				label: "TRANSITION_GOTO_END"
			},
			{
				id: 6,
				label: "TRANSITION_RESTART"
			},
			{
				id: 7,
				label: "TRANSITION_STOP_AND_CLEAR"
			},
			{
				id: 8,
				label: "TRANSITION_READY"
			},
			]
		},
		{
			id: 1,
			label: "ME_TRANS_TYPE",
			type: "int",
			values: [{
				id: 0,
				label: "ONE_SHOT"
			},
			{
				id: 1,
				label: "LOOP"
			},
			{
				id: 2,
				label: "PING_PONG"
			}
			]
		},
		{
			id: 2,
			label: "ME_TRANS_STATE",
			type: "int",
			values: [{
				id: 0,
				label: "STOPPED"
			},
			{
				id: 1,
				label: "AT_START"
			},
			{
				id: 2,
				label: "RUNNING"
			},
			{
				id: 3,
				label: "AT_END"
			},
			{
				id: 4,
				label: "PAUSED"
			},
			]
		},
		{
			id: 3,
			label: "ME_TRANS_DURATION",
			type: "int",
		},
		{
			id: 4,
			label: "ME_TRANS_DIRN",
			type: "int",
			values: [{
				id: 0,
				label: "FORWARD"
			},
			{
				id: 1,
				label: "REVERSE"
			}
			]
		},
		{
			id: 5,
			label: "DSK_TRANS_COMMAND",
			type: "int",
			values: [{
				id: 0,
				label: "TRANSITION_STOP"
			},
			{
				id: 1,
				label: "TRANSITION_RUN"
			},
			{
				id: 2,
				label: "TRANSITION_PAUSE"
			},
			{
				id: 3,
				label: "TRANSITION_CONTINUE"
			},
			{
				id: 4,
				label: "TRANSITION_GOTO_START"
			},
			{
				id: 5,
				label: "TRANSITION_GOTO_END"
			},
			{
				id: 6,
				label: "TRANSITION_RESTART"
			},
			{
				id: 7,
				label: "TRANSITION_STOP_AND_CLEAR"
			},
			{
				id: 8,
				label: "TRANSITION_READY"
			},
			]
		},
		{
			id: 6,
			label: "DSK_TRANS_TYPE",
			type: "int",
			values: [{
				id: 0,
				label: "ONE_SHOT"
			},
			{
				id: 1,
				label: "LOOP"
			},
			{
				id: 2,
				label: "PING_PONG"
			}
			]
		},
		{
			id: 7,
			label: "DSK_TRANS_STATE",
			type: "int",
			values: [{
				id: 0,
				label: "STOPPED"
			},
			{
				id: 1,
				label: "AT_START"
			},
			{
				id: 2,
				label: "RUNNING"
			},
			{
				id: 3,
				label: "AT_END"
			},
			{
				id: 4,
				label: "PAUSED"
			},
			]
		},
		{
			id: 8,
			label: "DSK_TRANS_DURATION",
			type: "int",
		},
		{
			id: 9,
			label: "DSK_TRANS_DIRN",
			type: "int",
			values: [{
				id: 0,
				label: "FORWARD"
			},
			{
				id: 1,
				label: "REVERSE"
			}
			]
		},
		{
			id: 10,
			label: "FTB_TRANS_COMMAND",
			type: "int",
			values: [{
				id: 0,
				label: "TRANSITION_STOP"
			},
			{
				id: 1,
				label: "TRANSITION_RUN"
			},
			{
				id: 2,
				label: "TRANSITION_PAUSE"
			},
			{
				id: 3,
				label: "TRANSITION_CONTINUE"
			},
			{
				id: 4,
				label: "TRANSITION_GOTO_START"
			},
			{
				id: 5,
				label: "TRANSITION_GOTO_END"
			},
			{
				id: 6,
				label: "TRANSITION_RESTART"
			},
			{
				id: 7,
				label: "TRANSITION_STOP_AND_CLEAR"
			},
			{
				id: 8,
				label: "TRANSITION_READY"
			},
			]
		},
		{
			id: 11,
			label: "FTB_TRANS_TYPE",
			type: "int",
			values: [{
				id: 0,
				label: "ONE_SHOT"
			},
			{
				id: 1,
				label: "LOOP"
			},
			{
				id: 2,
				label: "PING_PONG"
			}
			]
		},
		{
			id: 12,
			label: "FTB_TRANS_STATE",
			type: "int",
			values: [{
				id: 0,
				label: "STOPPED"
			},
			{
				id: 1,
				label: "AT_START"
			},
			{
				id: 2,
				label: "RUNNING"
			},
			{
				id: 3,
				label: "AT_END"
			},
			{
				id: 4,
				label: "PAUSED"
			},
			]
		},
		{
			id: 13,
			label: "FTB_TRANS_DURATION",
			type: "int",
		},
		{
			id: 14,
			label: "FTB_TRANS_DIRN",
			type: "int",
			values: [{
				id: 0,
				label: "FORWARD"
			},
			{
				id: 1,
				label: "REVERSE"
			}
			]
		},

		]
	},
	{
		id: 8,
		label: "SECTION_MEMORY_CTRL",
		controls: [{
			id: 0,
			label: "MEMORY_SELECT",
			type: "int",
		},
		{
			id: 1,
			label: "MEMORY_COMMAND",
			type: "int",
			values: [{
				id: 0,
				label: "DV_MEMORY_READY"
			},
			{
				id: 1,
				label: "DV_MEMORY_LOAD"
			},
			{
				id: 2,
				label: "DV_MEMORY_STORE"
			},
			{
				id: 3,
				label: "DV_MEMORY_DELETE"
			}
			]
		},
		{
			id: 2,
			label: "MEMORY_STATE",
			type: "int",
			values: [{
				id: 0,
				label: "DV_MEM_STATE_READY"
			},
			{
				id: 1,
				label: "DV_MEM_STATE_BUSY"
			},
			{
				id: 2,
				label: "DV_MEM_STATE_ERROR"
			}
			]
		},
		{
			id: 3,
			label: "MEMORY_RESULT",
			type: "int",
			values: [{
				id: 0,
				label: "DV_MEM_RESULT_OK"
			},
			{
				id: 1,
				label: "DV_MEM_RESULT_FAIL"
			},
			{
				id: 2,
				label: "DV_MEM_RESULT_NOT_FOUND"
			},
			{
				id: 3,
				label: "DV_MEM_RESULT_ILLEGAL_COMMAND"
			},
			{
				id: 4,
				label: "DV_MEM_RESULT_ILLEGAL_VALUE"
			}
			]
		},
		{
			id: 4,
			label: "MEMORY_EVENT",
			type: "int",
		},
		{
			id: 5,
			label: "MEMORY_FLAGS",
			type: "int",
		},
		{
			id: 6,
			label: "MEMORY_LOAD_ALL_SECTIONS",
			type: "int",
		}
		]
	},
	{
		id: 9,
		label: "SECTION_MEMORY_PRESENT",
		controls: [{}]
	},
	{
		id: 10,
		label: "SECTION_STILL_CTRL",
		controls: [{
			id: 0,
			label: "STILL_SELECT",
			type: "int",
		},
		{
			id: 1,
			label: "STILL_BUF",
			type: "int",
		},
		{
			id: 2,
			label: "STILL_COMMAND",
			type: "int",
			values: [{
				id: 0,
				label: "DV_STILL_READY"
			},
			{
				id: 1,
				label: "DV_STILL_LOAD"
			},
			{
				id: 2,
				label: "DV_STILL_STORE"
			},
			{
				id: 3,
				label: "DV_STILL_GRAB"
			},
			{
				id: 4,
				label: "DV_STILL_DELETE"
			},
			]
		},
		{
			id: 3,
			label: "STILL_STATE",
			type: "int",
			values: [{
				id: 0,
				label: "DV_STILL_STATE_READY"
			},
			{
				id: 1,
				label: "DV_STILL_STATE_BUSY"
			},
			{
				id: 2,
				label: "DV_STILL_STATE_ERROR"
			}
			]
		},
		{
			id: 4,
			label: "STILL_RESULT",
			type: "int",
			values: [{
				id: 0,
				label: "DV_STILL_RESULT_OK"
			},
			{
				id: 1,
				label: "DV_STILL_RESULT_FAIL"
			},
			{
				id: 2,
				label: "DV_STILL_RESULT_NOT_FOUND"
			},
			{
				id: 3,
				label: "DV_STILL_RESULT_ILLEGAL_COMMAND"
			},
			{
				id: 4,
				label: "DV_STILL_RESULT_ILLEGAL_VALUE"
			},
			]
		},
		{
			id: 5,
			label: "STILL_EVENT",
			type: "int",
		},
		]
	},
	{
		id: 11,
		label: "SECTION_STILL_PRESENT",
		controls: [{}]
	},
	{
		id: 12,
		label: "SECTION_STREAMER_CTRL",
		controls: [{
			id: 0,
			label: "STREAMER_COMMAND",
			type: "int",
		},
		{
			id: 1,
			label: "STREAMER_CODEC",
			type: "int",
		},
		{
			id: 2,
			label: "STREAMER_SIZE",
			type: "int",
			values: [{
				id: 0,
				label: "FULL_SIZE"
			},
			{
				id: 1,
				label: "HALF_SIZE"
			},
			{
				id: 2,
				label: "QUARTER_SIZE"
			},
			{
				id: 3,
				label: "SIXTH_SIZE"
			},
			]
		},
		{
			id: 3,
			label: "STREAMER_QUALITY",
			type: "int",
		},
		]
	},
	//Not documented assuming it is similar to SECTION_STILL_CTRL
	{
		id: 13,
		label: "SECTION_CLIP_CTRL",
		controls: [{
			id: 0,
			label: "CLIP_SELECT",
			type: "int",
		},
		{
			id: 1,
			label: "CLIP_BUF",
			type: "int",
		},
		{
			id: 2,
			label: "CLIP_COMMAND",
			type: "int",
			values: [{
				id: 0,
				label: "DV_CLIP_READY"
			},
			{
				id: 1,
				label: "DV_CLIP_LOAD"
			},
			{
				id: 2,
				label: "DV_CLIP_STORE"
			},
			{
				id: 3,
				label: "DV_CLIP_GRAB"
			},
			{
				id: 4,
				label: "DV_CLIP_DELETE"
			},
			]
		},
		{
			id: 3,
			label: "CLIP_STATE",
			type: "int",
			values: [{
				id: 0,
				label: "DV_CLIP_STATE_READY"
			},
			{
				id: 1,
				label: "DV_CLIP_STATE_BUSY"
			},
			{
				id: 2,
				label: "DV_CLIP_STATE_ERROR"
			}
			]
		},
		{
			id: 4,
			label: "CLIP_RESULT",
			type: "int",
			values: [{
				id: 0,
				label: "DV_CLIP_RESULT_OK"
			},
			{
				id: 1,
				label: "DV_CLIP_RESULT_FAIL"
			},
			{
				id: 2,
				label: "DV_CLIP_RESULT_NOT_FOUND"
			},
			{
				id: 3,
				label: "DV_CLIP_RESULT_ILLEGAL_COMMAND"
			},
			{
				id: 4,
				label: "DV_CLIP_RESULT_ILLEGAL_VALUE"
			},
			]
		},
		{
			id: 5,
			label: "CLIP_EVENT",
			type: "int",
		},
		]
	},
	{
		id: 14,
		label: "SECTION_CLIP_PRESENT",
		controls: [{}]
	},
	{
		id: 15,
		label: "SECTION_LOGO_CTRL",
		controls: [{
			id: 0,
			label: "LOGO_SELECT",
			type: "int",
		},
		{
			id: 1,
			label: "LOGO_BUF",
			type: "int",
		},
		{
			id: 2,
			label: "LOGO_COMMAND",
			type: "int",
			values: [{
				id: 0,
				label: "DV_LOGO_READY"
			},
			{
				id: 1,
				label: "DV_LOGO_LOAD"
			},
			{
				id: 2,
				label: "DV_LOGO_STORE"
			},
			{
				id: 3,
				label: "DV_LOGO_GRAB"
			},
			{
				id: 4,
				label: "DV_LOGO_DELETE"
			},
			]
		},
		{
			id: 3,
			label: "LOGO_STATE",
			type: "int",
			values: [{
				id: 0,
				label: "DV_LOGO_STATE_READY"
			},
			{
				id: 1,
				label: "DV_LOGO_STATE_BUSY"
			},
			{
				id: 2,
				label: "DV_LOGO_STATE_ERROR"
			}
			]
		},
		{
			id: 4,
			label: "LOGO_RESULT",
			type: "int",
			values: [{
				id: 0,
				label: "DV_LOGO_RESULT_OK"
			},
			{
				id: 1,
				label: "DV_LOGO_RESULT_FAIL"
			},
			{
				id: 2,
				label: "DV_LOGO_RESULT_NOT_FOUND"
			},
			{
				id: 3,
				label: "DV_LOGO_RESULT_ILLEGAL_COMMAND"
			},
			{
				id: 4,
				label: "DV_LOGO_RESULT_ILLEGAL_VALUE"
			},
			]
		},
		{
			id: 5,
			label: "LOGO_EVENT",
			type: "int",
		},
		]
	},
	{
		id: 16,
		label: "SECTION_LOGO_PRESENT",
		controls: [{}]
	},
	{
		id: 17,
		label: "SECTION_ANI_LOGO_CTRL",
		controls: [{
			id: 0,
			label: "ANI_LOGO_SELECT",
			type: "int",
		},
		{
			id: 1,
			label: "ANI_LOGO_BUF",
			type: "int",
		},
		{
			id: 2,
			label: "ANI_LOGO_COMMAND",
			type: "int",
			values: [{
				id: 0,
				label: "DV_ANI_LOGO_READY"
			},
			{
				id: 1,
				label: "DV_ANI_LOGO_LOAD"
			},
			{
				id: 2,
				label: "DV_ANI_LOGO_STORE"
			},
			{
				id: 3,
				label: "DV_ANI_LOGO_GRAB"
			},
			{
				id: 4,
				label: "DV_ANI_LOGO_DELETE"
			},
			]
		},
		{
			id: 3,
			label: "ANI_LOGO_STATE",
			type: "int",
			values: [{
				id: 0,
				label: "DV_ANI_LOGO_STATE_READY"
			},
			{
				id: 1,
				label: "DV_ANI_LOGO_STATE_BUSY"
			},
			{
				id: 2,
				label: "DV_ANI_LOGO_STATE_ERROR"
			}
			]
		},
		{
			id: 4,
			label: "ANI_LOGO_RESULT",
			type: "int",
			values: [{
				id: 0,
				label: "DV_ANI_LOGO_RESULT_OK"
			},
			{
				id: 1,
				label: "DV_ANI_LOGO_RESULT_FAIL"
			},
			{
				id: 2,
				label: "DV_ANI_LOGO_RESULT_NOT_FOUND"
			},
			{
				id: 3,
				label: "DV_ANI_LOGO_RESULT_ILLEGAL_COMMAND"
			},
			{
				id: 4,
				label: "DV_ANI_LOGO_RESULT_ILLEGAL_VALUE"
			},
			]
		},
		{
			id: 5,
			label: "ANI_LOGO_EVENT",
			type: "int",
		},
		]
	},
	{
		id: 18,
		label: "SECTION_ANI_LOGO_PRESENT",
		controls: [{}]
	},
	//SUB_SECTIONS use made up ID numbers to not complicate the format
	{
		id: 200,
		mainSection: 2,
		subSection: 0,
		label: "SWITCHER_SUB_SECTION_PINP",
		controls: [{}]
	},
	{
		id: 201,
		mainSection: 2,
		subSection: 2,
		label: "SWITCHER_SUB_SECTION_FLEX_SRC",
		controls: [{}]
	},
	{
		id: 202,
		mainSection: 2,
		subSection: 3,
		label: "SWITCHER_SUB_SECTION_RESERVED",
		controls: [{}]
	},
	{
		id: 203,
		mainSection: 2,
		subSection: 0,
		label: "SWITCHER_SUB_SECTION_LOGO",
		controls: [{}]
	},
	]
}