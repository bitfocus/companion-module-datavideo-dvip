## Companion Datavideo DVIP Module

Work in progress module to control Datavideo vision mixers, with feedback.

Note: You have to restart companion after selecting or changing the model to get the correct instance actions.  

This module attempts to implement the realtime DVIP protocol to listen to changes while using the command protocol to send control commands to the vision mixer.  
More documentation on the DVIP specification is here: https://github.com/BB21B/datavideo-dvip-docs

Currently supports:  
SE-650  
SE-700  
SE-1200MU  
SE-3200  

Please add an issue for other Datavision vision mixers you would like to see added or any feedback you have.


**Available commands**

* Switch PGM and PVW bus input
* Switch Key, DSK and Aux bus input
* Transition Controls
* Set ME, DSK and FTB frame durations
* Fade to Black
* Keyer Controls
* Audio Controls
* Audio Sources
* Output Controls
* User Load/User Save
* Streamer Controls


**Available feedback**
* Current PGM and PVW Bus selected input feedback
* Current Key, DSK and Aux Bus selected input feedback
* T Bar and DSK T Bar transition active indication
* Currently selected transition type
* Current audio source


**Available presets**
* PGM Bus with feedback
* PVW Bus with feedback
* Transition Mix, Wipe Clip and DVE with feedback
* Transition Auto and DSK Auto with feedback
* Transition Cut and DSK Cut
* Audio source set with feedback

**Available variables**
* Current PGM and PVW input names
* Current Key, DSK and Aux bus input names
* Current audio source
* Current ME, DSK and FTB duration frames
* KEY and DSK button states (Just for testing for now)
