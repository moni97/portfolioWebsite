# Fashion Design Overlay

Created: October 6, 2023 10:35 AM
Tags: Computer Vision
Developed at: IceCream Labs (Internship) (../All%20my%20work%20Ever%206517ef85bb234fe9b62b79b0a4608f13/My%20Work%20History%2027249e2628ea4e3a8ca4eb4a5c0e51a0/IceCream%20Labs%20(Internship)%204addc788810c4b3fb2d91f7d39431ce3.md)

The task was to create a system that could overlay any design on top of a cloth that a model was
wearing. The model cloth was only a checkered pattern because it is easier to trace all the curves that
follow the shape of the model’s body.
The main challenge was to imitate the curves on the cloth. For example: the sides of a shirt where the
design of the shirt appears warped. The approach we used was by taking all the points where the
squares intersect to map out the clothes’ curvature, and accordingly warp the design to be overlaid on
the cloth.
However, this approach was limited because the edges of the shirt couldn’t be mapped perfectly. We
weren’t able to come up with a workable solution to this problem.

![Untitled](Fashion%20Design%20Overlay%2030f89e36ca9140c7a59684bc8be9a47d/Untitled.png)