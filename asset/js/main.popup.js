var myVar;

function onloadFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}




	function popup_01()
	{
		document.getElementById('content-popup-01').style.display="block";
		document.getElementById('content-popup-02').style.display="none";
		document.getElementById('content-popup-03').style.display="none";
		document.getElementById('content-popup-04').style.display="none";
		document.getElementById('content-popup-05').style.display="none";
		document.getElementById('content-popup-06').style.display="none";
		document.getElementById('navbar').style.display="none";
	}
		function popup_02()
	{
		document.getElementById('content-popup-01').style.display="none";
		document.getElementById('content-popup-02').style.display="block";
		document.getElementById('content-popup-03').style.display="none";
		document.getElementById('content-popup-04').style.display="none";
		document.getElementById('content-popup-05').style.display="none";
		document.getElementById('content-popup-06').style.display="none";
			document.getElementById('navbar').style.display="none";
	}
		function popup_03()
	{
		document.getElementById('content-popup-01').style.display="none";
		document.getElementById('content-popup-02').style.display="none";
		document.getElementById('content-popup-03').style.display="block";
		document.getElementById('content-popup-04').style.display="none";
		document.getElementById('content-popup-05').style.display="none";
		document.getElementById('content-popup-06').style.display="none";
			document.getElementById('navbar').style.display="none";
	}
		function popup_04()
	{
		document.getElementById('content-popup-01').style.display="none";
		document.getElementById('content-popup-02').style.display="none";
		document.getElementById('content-popup-03').style.display="none";
		document.getElementById('content-popup-04').style.display="block";
		document.getElementById('content-popup-05').style.display="none";
		document.getElementById('content-popup-06').style.display="none";
			document.getElementById('navbar').style.display="none";
	}
		function popup_05()
	{
		document.getElementById('content-popup-01').style.display="none";
		document.getElementById('content-popup-02').style.display="none";
		document.getElementById('content-popup-03').style.display="none";
		document.getElementById('content-popup-04').style.display="none";
		document.getElementById('content-popup-05').style.display="block";
		document.getElementById('content-popup-06').style.display="none";
			document.getElementById('navbar').style.display="none";
	}
		function popup_06()
	{
		document.getElementById('content-popup-01').style.display="none";
		document.getElementById('content-popup-02').style.display="none";
		document.getElementById('content-popup-03').style.display="none";
		document.getElementById('content-popup-04').style.display="none";
		document.getElementById('content-popup-05').style.display="none";
		document.getElementById('content-popup-06').style.display="block";
			document.getElementById('navbar').style.display="none";
	}


	function navbaropen() {
	document.getElementById('navbar').style.display="block";
	}
