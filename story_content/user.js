function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65iqd8o5VW9":
        Script1();
        break;
      case "6idGSQcovbl":
        Script2();
        break;
      case "6V0TRjeTeFi":
        Script3();
        break;
      case "6BRvrQefYn1":
        Script4();
        break;
      case "5tV6Q7Af3NA":
        Script5();
        break;
      case "6hv6FMxKW9x":
        Script6();
        break;
      case "6Xs6eQ00ve0":
        Script7();
        break;
  }
}

function Script1()
{
  window.open("https://www.onlinegdb.com/");

}

function Script2()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script3()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script4()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script5()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script6()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script7()
{
  var player = GetPlayer();
var nama = player.GetVar("namaSiswa");
var nilai = player.GetVar("Results.ScorePercent");

fetch("https://script.google.com/macros/s/AKfycbxbSf61CsrPMwAtu7Iz-j_Hc_TA2VfA8JAthGHaBcPi-9qlx8x5UIxjKN13lZF5aIQgrA/exec", {
  method: "POST",
  body: JSON.stringify({
    nama: nama,
    nilai: nilai
  }),
  headers: {
    "Content-Type": "application/json"
  }
});

}

