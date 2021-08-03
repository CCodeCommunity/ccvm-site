# Sections

A .ccb file is divided into 2 sections. The first is called the data section and the last is called the code section.

#### Section seperation sequence
These sections can be recognised since they are divided by a section seperation sequence `0x1D1D1D1D`. The section seperation sequence is the first sequence of 4 0x1D bytes, everything before these 4 bytes counts as the data section and everything after it counts as the code section.

#### Data section
The data section contains hard coded data that will be needed in run time, this includes string litterals, array litterals and other hard coded data structures. It can also be used to reserve certain amounts of memory before the start of program execution

#### Code section
The code section is the part of the code which will be itterated trough at run time. It contains instructions incoding what kind of operations the VM much perform on its memory structures (like registers, the heap, the stack etc).
