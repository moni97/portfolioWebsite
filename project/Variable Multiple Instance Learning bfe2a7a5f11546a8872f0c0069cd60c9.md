# Variable Multiple Instance Learning

Created: October 6, 2023 10:36 AM
Tags: Computer Vision
Developed at: IceCream Labs (Internship) (../All%20my%20work%20Ever%206517ef85bb234fe9b62b79b0a4608f13/My%20Work%20History%2027249e2628ea4e3a8ca4eb4a5c0e51a0/IceCream%20Labs%20(Internship)%204addc788810c4b3fb2d91f7d39431ce3.md)

A common problem in machine learning is using a variable number of inputs to get a fixed output.
For example: Creating a 3d model on an object with multiple images at different angles. The problem
with using machine learning is that it would require a constant number of images for each object, and
the angles and order of the photos must be standard.
This problem could potentially be solved with the implementation of capsule networks however for the
moment they are unfeasible due to their large computational cost.
The standard solution to this problem is using multiple convolutional networks in parallel that takes
various images in a rigid order. The problem is that this requires a consistent dataset of multiple images
taken in an order, with no missing images in the dataset to give a prediction with high confidence.
The solution implementing multiple convolutional networks was used to create a base from which
improvements could be made.
I had the idea of using a model very similar to an RNN to take a variable size input and try to understand
an embedding while also learning how to merge an embedding with an image. But there wasn’t enough
time left in the internship to test this hypothesis