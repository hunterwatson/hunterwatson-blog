---
template: post
title: solving a Rubik's Cube very slowly
slug: rubiks-cube
draft: false
date: 2019-10-17T05:07:14.064Z
description: >-
  I don't know how people complete a Rubik's Cube really quickly, but here's an
  unoptimized way to solve one fairly slowly. I used to think people who could
  solve a Rubik's Cube were geniuses with elite spacial awareness, but now I
  know they're just bored.
category: Misc
tags:
  - Rubik's Cube
  - Puzzle
  - Misc
---
This guide will explain how to solve a Rubik's cube in five (5) steps. For the first half, we'll put WHITE on the top and halfway through we'll switch to YELLOW on the top. Also, the algorithm steps are from left to right, then top to bottom.

- - -

## 1. First Layer Sides

Okay so I've decided to not include steps for how to get the white cross because I think it's the only reasonable "problem-solving" part of the cube. You'll need to figure out how to make a WHITE cross on the top of the cube (don't worry about the corners). Make sure the sides are lined up with the correct colour like in the picture below on the left. Good luck and have fun.

![](/media/1-top_cross.png "Starting and Ending Point")

## 2. First Layer Corners

Now we can start with the mindless algorithms. With WHITE on the top, find the corner piece that goes in the top-right corner (in the image it's the WHITE-RED-BLUE piece) and line it up somewhere on the right side.

![](/media/2-row1_corners.png "Top Layer Corners")

Repeat the shown algorithm with WHITE on the top until the corner piece is in the correct position with the correct orientation. Repeat this step with all 4 WHITE corners.

_Note: If the corner you're looking for is in the top layer but in the wrong position or wrong orientation, do the algorithm with the piece in the top right._

## 3. Second Layer Sides

With WHITE on the top, orient the bottom layer so that it matches one of the positions in the image below and do the associated algorithm depending on the direction.

![](/media/3-row2_sides.png "Middle Layer")

_Note: If the piece is in the correct position but the wrong orientation, do one of the above algorithms to put a different piece in that spot and then preform the algorithm. You can use this tip if none of the correct pieces are in the bottom row._

## 4. Third Layer Sides

The first two layers should be complete! Flip the cube over so that YELLOW is on top. Orient the cube so the YELLOW sides match one of the patterns below (don't worry about the corners). Repeat the algorithm until you complete the YELLOW cross.

![](/media/4-bottom_cross.png "Third Layer Sides 1")

Twist the top until the most YELLOW side pieces line up with the correct colour on the sides. Use the following algorithm to swap two YELLOW side pieces.

![](/media/5-row3_sides.png "Third Layer Sides 2")

## 5. Third Layer Corners

With YELLOW on top, find a corner with the correct position (doesn't need to have the correct orientation) and put that in the front-top-right of your hold. Perform the algorithm until all corners are in the correct position (don't worry about orientation). If no corner is in the correct position, do the algorithm with any side as the face and then find a correct corner.

![](/media/6-bottom_corner_positions.png "Third Layer Corner 1")

_Note: This next part gets wonky and temporarily screws up the progress we've made in other areas. Trust yourself and keep going._

All corners should be in the correct position (but maybe not the correct orientation). With YELLOW on top, perform the following algorithm until the corner is in the correct orientation. **Don't change your front side -** Rotate the top layer so the next wrong-orientation corner is in the top right. Repeat this algorithm until the corner is in the correct orientation. Do this for all corners until the top layer is complete. 

![](/media/7-bottom_corner_orientation.png "Third Layer Corners 2")

You might need to do a final twist on the top layer to line everything up.

- - -

I really hope that made sense. I think the pictures do at the very least. [Here](https://www.speedcube.com.au/pages/how-to-solve-a-rubiks-cube) is a link to the tutorial I used.
