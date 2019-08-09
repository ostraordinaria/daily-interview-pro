function witnesses(heights)
{
	if(Array.isArray(heights) && heights.length)
	{
		var length = heights.length;
		var min_height = 0;
		var witness_count = 0;

		min_height = heights[length-1];
		witness_count++;

		for(var i = length - 2;i >= 0;i--)
		{
			if(heights[i] > min_height)
			{
				min_height = heights[i];
				witness_count++;
			}
		}
		return witness_count;
	}
	else
	{
		//expecting an array;
		return -1;
	}
}

witnesses([3,6,3,4,1]);
witnesses([]);
witnesses("sdsdsa");
witnesses('');
witnesses(3); //we're expecting an array. this will return -1.
witnesses(undefined);
witnesses(null);
witnesses([5,4,3,2,1]);