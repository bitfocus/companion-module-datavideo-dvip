module.exports = {

    COMMANDS: [{
            id: 0,
            label: 'DV_COMMAND_GET_CONTROL',
            sections: [{
                id: 0,
                label: "Test Section",
                controls: [{
                    id: 1,
                    label: "Test"
                }]
            }],


        },
        {
            id: 1,
            label: 'DV_COMMAND_SET_CONTROL',
            sections: [{
                    id: 0,
                    label: "SECTION_STATUS",
                    controls: [{
                            id: 0,
                            label: "STATUS_SYSTEM_CONNECTION_STATUS",
                            values: [{
                                    id: 0,
                                    label: "DV_CONNECTION_NO_CONNECTION"
                                },
                                {
                                    id: 1,
                                    label: "DV_CONNECTION_PENDING"
                                },
                                {
                                    id: 2,
                                    label: "DV_CONNECTION_CONNECTED"
                                }
                            ]
                        },
                        {
                            id: 1,
                            label: "STATUS_SYSTEM_VERSION"
                        },
                        {
                            id: 2,
                            label: "STATUS_MAIN_VERSION"
                        },
                        {
                            id: 3,
                            label: "STATUS_SOFTWARE_VERSION"
                        },
                        {
                            id: 4,
                            label: "STATUS_FPGA_VERSION"
                        },
                        {
                            id: 6,
                            label: "STATUS_BOARD_ID_VERSION"
                        },
                    ]
                },
                {
                    id: 1,
                    label: "SECTION_SYSTEM",
                    controls: [{
                            id: 0,
                            label: "SYSTEM_STANDARD",
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
                            label: "SYSTEM_ASPECT"
                        },
                        {
                            id: 2,
                            label: "SYSTEM_GENLOCK_ENABLE"
                        },
                        {
                            id: 3,
                            label: "SYSTEM_GENLOCK_SRC"
                        },
                        {
                            id: 4,
                            label: "SYSTEM_GENLOCK_H_PHASE"
                        },
                        {
                            id: 5,
                            label: "SYSTEM_GENLOCK_V_PHASE"
                        },
                    ]
                },
                {
                    id: 2,
                    label: "SECTION_SWITCHER",
                    controls: [{
                            id: 86,
                            label: "SWITCHER_PGM_SRC"
                        },
                        {
                            id: 87,
                            label: "SWITCHER_PST_SRC"
                        },
                        {
                            id: 19,
                            label: "SWITCHER_KEY1_KEYER_ON"
                        },
                        {
                            id: 20,
                            label: "SWITCHER_KEY1_KEY_SRC"
                        },
                        {
                            id: 49,
                            label: "SWITCHER_KEY2_KEYER_ON"
                        },
                        {
                            id: 50,
                            label: "SWITCHER_KEY2_KEY_SRC"
                        },
                        {
                            id: 91,
                            label: "SWITCHER_DSK1_KEYER_ON"
                        },
                        {
                            id: 92,
                            label: "SWITCHER_DSK1_KEY_SRC"
                        },
                        {
                            id: 109,
                            label: "SWITCHER_DSK2_KEYER_ON"
                        },
                        {
                            id: 110,
                            label: "SWITCHER_DSK2_KEY_SRC"
                        },

                    ]
                },
                {
                    id: 3,
                    label: "SECTION_INPUT",
                    controls: [{
                            id: 0,
                            label: "INPUT_PROC_AMP_BLACK_LEVEL"
                        },
                        {
                            id: 1,
                            label: "INPUT_PROC_AMP_CHROMA_GAIN"
                        },
                        {
                            id: 2,
                            label: "INPUT_PROC_AMP_WHITE_CLIP"
                        },
                        {
                            id: 3,
                            label: "INPUT_INPUT_VALID"
                        },
                        {
                            id: 4,
                            label: "INPUT_INPUT_MODE"
                        },
                        {
                            id: 5,
                            label: "INPUT_INPUT_FREEZE_MODE"
                        },
                        {
                            id: 6,
                            label: "INPUT_INPUT_FRAME_MODE"
                        },
                        {
                            id: 7,
                            label: "INPUT_INPUT_REMAP"
                        },
                        {
                            id: 8,
                            label: "INPUT_FREEZE_STILL_LOAD"
                        },
                        {
                            id: 9,
                            label: "INPUT_FREEZE_STILL_NUM"
                        },

                    ]
                },
                {
                    id: 4,
                    label: "SECTION_INPUT_CTRL",
                    controls: [{
                            id: 0,
                            label: "INPUT_DVI_INPUT_ENABLE"
                        },
                        {
                            id: 1,
                            label: "INPUT_ENABLE_REMAP"
                        },

                    ]
                },
                {
                    id: 5,
                    label: "SECTION_OUTPUT_CTRL",
                    controls: [{
                            id: 4,
                            label: "OUTPUT_MULTIVIEWER_MODE"
                        },
                        {
                            id: 5,
                            label: "OUTPUT_MULTIVIEWER_MAIN1_SRC"
                        },
                        {
                            id: 9,
                            label: "OUTPUT_MULTIVIEWER_TRANSP_LABELS"
                        },
                        {
                            id: 10,
                            label: "OUTPUT_MULTIVIEWER_AUTO_NUM"
                        },
                        {
                            id: 11,
                            label: "OUTPUT_MULTIVIEWER_LABEL_INFO"
                        },
                        {
                            id: 12,
                            label: "OUTPUT_ANALOG_OUT_SELECT"
                        },
                        {
                            id: 13,
                            label: "OUTPUT_ANALOG_OUT_MODE"
                        },
                        {
                            id: 14,
                            label: "OUTPUT_ANALOG_OUT_SYNC_MODE"
                        },
                        {
                            id: 15,
                            label: "OUTPUT_DVI_OUT_SELECT"
                        },
                        {
                            id: 16,
                            label: "OUTPUT_MULTI_OUT1_SELECT"
                        },
                        {
                            id: 17,
                            label: "OUTPUT_MULTI_OUT2_SELECT"
                        },
                    ]
                },
                {
                    id: 6,
                    label: "SECTION_AUDIO_CTRL",
                    controls: [{
                            id: 0,
                            label: "AUDIO_SOURCE"
                        },
                        {
                            id: 1,
                            label: "AUDIO_CHAN"
                        },
                        {
                            id: 2,
                            label: "AUDIO_MODE"
                        },
                    ]
                },
                {
                    id: 7,
                    label: "SECTION_TRANSITION_CTRL",
                    controls: [{
                            id: 0,
                            label: "ME_TRANS_COMMAND",
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
                            label: "ME_TRANS_DURATION"
                        },
                        {
                            id: 4,
                            label: "ME_TRANS_DIRN",
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
                            label: "DSK_TRANS_DURATION"
                        },
                        {
                            id: 9,
                            label: "DSK_TRANS_DIRN",
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
                            label: "FTB_TRANS_DURATION"
                        },
                        {
                            id: 14,
                            label: "FTB_TRANS_DIRN",
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
                            label: "MEMORY_SELECT"
                        },
                        {
                            id: 1,
                            label: "MEMORY_COMMAND"
                        },
                        {
                            id: 2,
                            label: "MEMORY_STATE"
                        },
                        {
                            id: 3,
                            label: "MEMORY_RESULT"
                        },
                        {
                            id: 4,
                            label: "MEMORY_EVENT"
                        },
                        {
                            id: 5,
                            label: "MEMORY_FLAGS"
                        },
                        {
                            id: 6,
                            label: "MEMORY_LOAD_ALL_SECTIONS"
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
                            label: "STILL_SELECT"
                        },
                        {
                            id: 1,
                            label: "STILL_BUF"
                        },
                        {
                            id: 2,
                            label: "STILL_COMMAND"
                        },
                        {
                            id: 3,
                            label: "STILL_STATE"
                        },
                        {
                            id: 4,
                            label: "STILL_RESULT"
                        },
                        {
                            id: 5,
                            label: "STILL_EVENT"
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
                            label: "STREAMER_COMMAND"
                        },
                        {
                            id: 1,
                            label: "STREAMER_CODEC"
                        },
                        {
                            id: 2,
                            label: "STREAMER_SIZE",
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
                            label: "STREAMER_QUALITY"
                        },
                    ]
                },
            ]
        },
        {
            id: 9,
            label: 'DV_COMMAND_GET_INPUT_NAME',
            sections: [{
                id: 0,
                label: "Test Section",
                controls: [{}]
            }],
        },
        {
            id: 10,
            label: 'DV_COMMAND_SET_INPUT_NAME',
            sections: [{
                id: 0,
                label: "Test Section",
                controls: [{}]
            }],
        },
        {
            id: 13,
            label: 'DV_COMMAND_GET_USER_MEM',
            sections: [{
                id: 0,
                label: "Test Section",
                controls: [{}]
            }],
        },
        {
            id: 14,
            label: 'DV_COMMAND_STORE_USER_MEM',
            sections: [{
                id: 0,
                label: "Test Section",
                controls: [{}]
            }],
        },
        {
            id: 15,
            label: 'DV_COMMAND_STREAMER_CONTROL',
			sections: [{
                id: 0,
                label: "Test Section",
                controls: [{}]
            }],
        }
    ]
}