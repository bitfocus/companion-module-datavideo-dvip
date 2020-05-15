exports.getCommands = function () {
    let GET_SET_CMD = [];

    if (this.config.modelID == 'se3200') {
        GET_SET_CMD = this.GET_SET_CMD_3200;
    } else {
        GET_SET_CMD = this.GET_SET_CMD_COMMON;
    }

    //Finished Command Set

    COMMANDS = [{
        id: 0,
        label: 'DV_COMMAND_GET_CONTROL',
        sections: GET_SET_CMD,
    },
    {
        id: 1,
        label: 'DV_COMMAND_SET_CONTROL',
        sections: GET_SET_CMD,
    },
    {
        id: 2,
        label: 'DV_COMMAND_OPEN_STILL_FILE',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 3,
        label: 'DV_COMMAND_OPEN_MINI_PIC_FILE',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 4,
        label: 'DV_COMMAND_CLOSE_DATA_FILE',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 5,
        label: 'DV_COMMAND_GET_FILE_DATA',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 6,
        label: 'DV_COMMAND_STORE_FILE_DATA',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 7,
        label: 'DV_COMMAND_STILL_EVENT',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 8,
        label: 'DV_COMMAND_GET_MINI_PIC',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 9,
        label: 'DV_COMMAND_GET_INPUT_NAME',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 10,
        label: 'DV_COMMAND_SET_INPUT_NAME',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 11,
        label: 'DV_COMMAND_GET_FILE_NAME',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 12,
        label: 'DV_COMMAND_SET_FILE_NAME',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 13,
        label: 'DV_COMMAND_GET_USER_MEM',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 14,
        label: 'DV_COMMAND_STORE_USER_MEM',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 15,
        label: 'DV_COMMAND_STREAMER_CONTROL',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 16,
        label: 'DV_COMMAND_OPEN_SOFTWARE_FILE',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 17,
        label: 'DV_COMMAND_INSTALL_SOFTWARE',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 18,
        label: 'DV_COMMAND_OPEN_NAMES_FILE',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 19,
        label: 'DV_COMMAND_RECORDER_CONTROL',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 20,
        label: 'DV_COMMAND_CHROMA_KEYER_AUTO',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    {
        id: 21,
        label: 'DV_COMMAND_MENU_COMMAND',
        sections: [{
            id: 0,
            label: "Test Section",
            type: "int",
            controls: [{}]
        }],
    },
    ]

    return COMMANDS;

}