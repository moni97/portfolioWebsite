# Visual Search

Created: October 6, 2023 10:33 AM
Tags: Computer Vision, Deep Learning
Developed at: IceCream Labs (Internship) (../All%20my%20work%20Ever%206517ef85bb234fe9b62b79b0a4608f13/My%20Work%20History%2027249e2628ea4e3a8ca4eb4a5c0e51a0/IceCream%20Labs%20(Internship)%204addc788810c4b3fb2d91f7d39431ce3.md)

The objective was to group together similar objects based on visual appearance. The main
problem was that this was based only on images, without taking the product titles or any
attributes as inputs. This made it an unsupervised learning task.
The process used the ImageNet trained VGG 16 model to generate embeddings of the images
and used various clustering algorithms to group the images together based on the embeddings.
There were some setbacks for example, it would not put lamps mirrored images in the same
group, and a grayscale image would not be in the same group as the original image. Pooling the
embeddings from 7x7 to 1x1 images eliminated the spatial data from the embeddings. This solved
the mirroring problem while also solving the grayscale problem.
The result was 20 groups of lamps, where all the groups had lamps that looked similar. And
consistently grouped together lamps that were mirror images of one another, and grouped lamps
by similar color schemes.

![Untitled](Visual%20Search%20bef6eb162dbf4830a59d971223a0c435/Untitled.png)

![Untitled](Visual%20Search%20bef6eb162dbf4830a59d971223a0c435/Untitled%201.png)