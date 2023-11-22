# NVDA plugin to store the spoken history on a text file

Created: October 6, 2023 10:29 AM
Tags: Automation
Developed at: CSS Corp (Movate) (../All%20my%20work%20Ever%206517ef85bb234fe9b62b79b0a4608f13/My%20Work%20History%2027249e2628ea4e3a8ca4eb4a5c0e51a0/CSS%20Corp%20(Movate)%209d4f4d513bca40a28c2d7ccae72baef3.md)

The requirement was to save the NVDA spoken history. This was not available since the Software didn’t have that option and there wasn’t any add-on to save history.
However, there was a python shell built into the software and there was a speech viewer. Although that seemed like that was all that was needed, it turned out to be completely useless as the shell had no documentation to work with and one couldn’t to figure out how to extract information from another window.
Hence used another already created plugin and modified it to stream the history into a file on the desktop.