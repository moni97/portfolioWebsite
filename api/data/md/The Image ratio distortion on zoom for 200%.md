# The Image ratio distortion on zoom for 200%

Created: October 6, 2023 10:27 AM
Tags: Automation
Developed at: CSS Corp (Movate) (../All%20my%20work%20Ever%206517ef85bb234fe9b62b79b0a4608f13/My%20Work%20History%2027249e2628ea4e3a8ca4eb4a5c0e51a0/CSS%20Corp%20(Movate)%209d4f4d513bca40a28c2d7ccae72baef3.md)

The requirement was to find if the page distorts, if zoomed to 200%.
Most of the overlapping images were created by intentional superimposition, created by client’s web developers. The major concern was, upon zooming, some images changed their aspect ratio which would result in distorted image.
After going through the html code for a few hours, it was found that the default value of “object-fit” was set as “contain”. If this were to be changed to “cover” the aspect ratio didn’t change anymore.
By the next day, created a python code that scanned through the html code of all the files and would save the name of the images. Following which it would go through all the CSS files and look for the same images, if they were found, it would check if the attribute “object-fit” was unassigned and if it was, the code would change the file to change the attribute’s value to “cover”.
This automatically fixed all the image aspect ratio distortions present in every web page.