# Squirrels in Central Park 2018
A visualization created for Purdue CGT 29000 class.

Squirrels are your typical everyday creature. We see them all the time scrambling about, either burying or eating their food, or simply trotting from one tree to another. Central Park, a popular park located in New York City, is home to many of these fascinating squirrels. Everywhere you walk, you have the chance to become friends with a squirrel &mdash; just don't feed them, as it is against the rules!

But just how many squirrels are there in Central Park? And how many of each kind? Well, this is what the [Squirrel Census](https://www.thesquirrelcensus.com/) (yes, it's a real thing!) attempted to answer this back in the month of October in 2018. They collected data of 3023 squirrel sightings in Central Park, noting of their color, location, age, etc. Their data and visualization can be found [here](https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw).

## Visualization Makeover
There were a couple pros and cons with the original visualization. First, it is great that they show all the squirrels in one map, and that they have a legend to identify which squirrels are which. However, it becomes very cluttered as you zoom out, and it does not allow you to filter out which type of squirrels you can view (can't filter based on color, age, etc). Additionally, this visualization is an aggregation of all squirrels during the period, thus you cannot gain insights for specific time frames.

So, with these problem in mind, I decided to redo this visualization.

## Result
My visualization can be found [here](https://vivcoding.github.io/squirrelsviz/).

After getting the data through their API, I plotted all the squirrels locations on the canvas. I created filters on the side that let the user choose which squirrels to view on the canvas (filter by color or age). Additionally, I created a date filter that allows the user to pick a certain date to view the squirrels sightings for a specific day. One of the issues I ran into was that the dataset did not contain data for every single day. I assumed that the missing dates was not due to the fact that there were no squirrels spotted, as it is an unlikely event, but because they were unable to collect data on those days. Thus, I put messages warning the user that the specific dates did not have data.

I believe this visualization can bring better insight into the seeing which areas were more occupied by squirrels over time. Additionally, it also allows one to see specific types of squirrels, and how they travelled over a map over time.

There are several things that can be improved with my visualization. First, it would be very conveninent to plot the squirrels on a map rather than a white canvas. Second, showing statistics of how many squirrels seen would be a useful feature in solidifying insights, as currently it is just a hotmap and only shows the squirrels' location. However, I believe this visualization successfully serves as a proof-of-concept, that proves that the original visualization can be immensely improved.