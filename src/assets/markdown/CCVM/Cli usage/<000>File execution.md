# CCVM File execution

CCVM has the ability to execute binary executables from .ccb files (ccb stands for cc binary, since these files contain binary executable instructions).

to do this, you can simply navigate to the file in a terminal and use the ccvm cli to execute the command: `ccvm someFile.ccb`, where someFile.ccb can be replaced with any other file name.

This file should contain cc binary executable instructions, which you can obtain using the cc assembler or any other tool that compiles towards .ccb executables.