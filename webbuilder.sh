clear
echo "This is Sparksammy's Tiny WebBuilder"
echo "Do not steal. Not illegal, but unethical..."
echo "Press any key to continue..."
read
clear
echo "Type a title [followed by enter]"

read title


echo "Type a slogan [enter to skip]"

read slogan

echo "Type a body [skip by enter]"

read p

echo "Type the link's name [skip by enter]"

read pa

echo "Type the link's url [skip by enter]"
read a

echo "Type a footer [followed by enter]"

read foot

echo "" > index.html

echo "<head>
<title>$title</title>
</head>
<body>
<center>
<h1>$title</h1>
<h3>$slogan</h3>
<h4>---------------------------</h4>
<p>$p</p>
<p>
<a href="$a">$pa</a>
</p>
<h4>---------------------------------</h4>
<h4>$foot</h4>
</body" >> index.html