/* Jonathan Hall
12/10/2021 */

document.getElementById("myButton").addEventListener('click',myWindow)

function myWindow()
{
    userName = document.getElementById("name").value;
    userCity = document.getElementById("city").value;
    userState = document.getElementById("state").value;
    userZip = document.getElementById("zip").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    LinkedIn = document.getElementById("LinkedIn").value;
    portfolio = document.getElementById("portfolio").value;

    job = document.getElementById("job").value;
    exp1 = document.getElementById("exp1").value;
    exp2 = document.getElementById("exp2").value;
    exp3 = document.getElementById("exp3").value;

    skills1 = document.getElementById("skills1").value;
    skills2 = document.getElementById("skills2").value;
    skills3 = document.getElementById("skills3").value;

    school = document.getElementById("school").value;
    degree = document.getElementById("degree").value;
    courses = document.getElementById("courses").value;

    emp1 = document.getElementById("emp1").value;
    jobTitle1 = document.getElementById("jobTitle1").value;
    jobInfo1 = document.getElementById("jobInfo1").value;
    fromDate1 = document.getElementById("fromDate1").value;
    untilDate1 = document.getElementById("untilDate1").value;

    emp2 = document.getElementById("emp2").value;
    jobTitle2 = document.getElementById("jobTitle2").value;
    jobInfo2 = document.getElementById("jobInfo2").value;
    fromDate2 = document.getElementById("fromDate2").value;
    untilDate2 = document.getElementById("untilDate2").value;

    emp3 = document.getElementById("emp3").value;
    jobTitle3 = document.getElementById("jobTitle3").value;
    jobInfo3 = document.getElementById("jobInfo3").value;
    fromDate3 = document.getElementById("fromDate3").value;
    untilDate3 = document.getElementById("untilDate3").value;

    refInfo = document.getElementById("refInfo").value;

    myText = ("<html>\n<head>\n<title>Resume</title>\n</head>\n<body style='background-color:floralwhite; font-family:Georgia, Times, serif; padding: 3% 3% 3% 3%;'>\n<h1 style='color:white; background-color:rgb(46, 43, 43); padding: 2% 2% 2% 3%; text-align: center;'>"+ userName +"</h1>");
    myText += ("<p style= 'color:rgb(71, 72, 73); font-size:11pt; font-variant:small-caps; text-align:center;'>"+ userCity +", "+ userState +" "+ userZip +"&#11045;"+ phone +"&#11045;"+ email +"</p><p style= 'color:rgb(71, 72, 73); font-size:10pt; text-align:center;'>"+ LinkedIn +"&#11045;"+ portfolio +"</p>");
    myText += ("<br><br><h2 style='color:rgb(71, 72, 73);  margin-bottom: 0%;'>"+ job +"</h2><hr style='background-color:lightsteelblue; height:2px;'><ul style='font-size:11pt;'><li>"+ exp1 +"</li><li>"+ exp2 +"</li><li>"+ exp3 +"</li></ul><br>");
    myText += ("<h2 style='color:rgb(71, 72, 73);  margin-bottom: 0%;'>Technical Experience</h2><hr style='background-color:lightsteelblue; height:2px;'><ul style='font-size:11pt;'><li>"+ skills1 +"</li><li>"+ skills2 +"</li><li>"+ skills3 +"</li></ul>");
    myText += ("<h2 style='color:rgb(71, 72, 73);  margin-bottom: 0%;'>Education</h2><hr style='background-color:lightsteelblue; height:2px;'><h3>"+ school +"</h3><p style='font-size:11pt;>"+ degree +"</p><p style='font-size:11pt;>"+ courses +"</p><br>");
    myText += ("<h2 style='color:rgb(71, 72, 73);  margin-bottom: 0%;'>Employment History</h2><hr style='background-color:lightsteelblue; height:2px;'><h3 style= 'font-weight:normal; font-size:15pt;'>"+ emp1 +"</h3><p style= 'padding-left: 1%; font-weight: bold; font-size:11pt;'>"+ jobTitle1 +"</p><p style= ' padding-left: 1%;font-size:10pt; font-variant:small-caps;'>"+ fromDate1 +" to "+ untilDate1 +"</p><p style=' padding-left:1%;font-size:11pt;'>"+ jobInfo1 +"</p>");
    myText += ("<h3 style= 'font-weight:normal; font-size:15pt;'>"+ emp2 +"</h3><p style= 'padding-left: 1%; font-weight: bold; font-size:11pt;'>"+ jobTitle2 +"</p><p style= ' padding-left: 1%;font-size:10pt; font-variant:small-caps;'>"+ fromDate2 +" to "+ untilDate2 +"</p><p style=' padding-left:1%;font-size:11pt;'>"+ jobInfo2 +"</p>");
    myText += ("<h3 style= 'font-weight:normal; font-size:15pt;'>"+ emp3 +"</h3><p style= 'padding-left: 1%; font-weight: bold; font-size:11pt;'>"+ jobTitle3 +"</p><p style= ' padding-left: 1%;font-size:10pt; font-variant:small-caps;'>"+ fromDate3 +" to "+ untilDate3 +"</p><p style=' padding-left:1%;font-size:11pt;'>"+ jobInfo3 +"</p>");
    myText += ("<h2 style='color:rgb(71, 72, 73); margin-bottom: 0%;'>References</h2><hr style='background-color:lightsteelblue; height:2px;'><p style='font-size:11pt;'>"+ refInfo +"</p>");
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    flyWindow.document.write(myText);
}
