function fnAllOutputgoogoodan(num)
{
	var ndigit = num;
	var result;
	var nColor = 000000 + (200*num);
	document.write("<font size =5 color = 0000FF>" +"<b>" + ndigit+" 단 구구단 "
		+"<br>" + "</b>"+"<hr>"+"</font>");

	
	for(var j=1;j<10;j++)
	{
		result = ndigit * j;
		document.write(ndigit +" X " + j + "=" + result + "<br>" + "</font>");
	}
	document.write("<hr>" );
}