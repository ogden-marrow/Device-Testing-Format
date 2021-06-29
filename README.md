# Testing JSON file format
This is a File and DataBase format that is optimized for durability testing hardware.

# Purpose of the structure for the data
With this structure the intension was to avoid repeated data while saving important information in the structure of the json itself.
The data are made in such a way that each board is a virtual version of the physical hardware.
With the supporting hardware interface the states of the physical hardware and the virtual hardware are synchronized.

# Standers of use
The name of each file should be the esn of the device with the time of the report appended as a string.
Example File Name: "HC52HXTN51624368820403.dtf"
While this naming scheme is not perfect it assures that there will not be naming conflicts while saving the files to a cloud serves.
A benefit of this naming scheme is that it is programmatically friendly and will add a human readable way of identifying which files are associated with which hardware.