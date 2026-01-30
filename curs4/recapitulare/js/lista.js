const data = [
  {
    "title": "Romania",
    "capital": "Bucharest",
    "languages": ["Romanian"],
    "population": 19000000,
    "flag": "https://flagcdn.com/w320/ro.png",
    "currency": "Romanian leu"
  },
  {
    "title": "Germany",
    "capital": "Berlin",
    "languages": ["German"],
    "population": 84000000,
    "flag": "https://flagcdn.com/w320/de.png",
    "currency": "Euro"
  },
  {
    "title": "France",
    "capital": "Paris",
    "languages": ["French"],
    "population": 68000000,
    "flag": "https://flagcdn.com/w320/fr.png",
    "currency": "Euro"
  },
  {
    "name": "Italy",
    "capital": "Rome",
    "languages": ["Italian"],
    "population": 59000000,
    "flag": "https://flagcdn.com/w320/it.png",
    "currency": "Euro"
  },
  {
    "name": "Spain",
    "capital": "Madrid",
    "languages": ["Spanish"],
    "population": 48000000,
    "flag": "https://flagcdn.com/w320/es.png",
    "currency": "Euro"
  },
  {
    "name": "United Kingdom",
    "capital": "London",
    "languages": ["English"],
    "population": 67000000,
    "flag": "https://flagcdn.com/w320/gb.png",
    "currency": "Pound sterling"
  },
  {
    "name": "United States",
    "capital": "Washington, D.C.",
    "languages": ["English"],
    "population": 335000000,
    "flag": "https://flagcdn.com/w320/us.png",
    "currency": "United States dollar"
  },
  {
    "name": "Canada",
    "capital": "Ottawa",
    "languages": ["English", "French"],
    "population": 41000000,
    "flag": "https://flagcdn.com/w320/ca.png",
    "currency": "Canadian dollar"
  },
  {
    "name": "Mexico",
    "capital": "Mexico City",
    "languages": ["Spanish"],
    "population": 129000000,
    "flag": "https://flagcdn.com/w320/mx.png",
    "currency": "Mexican peso"
  },
  {
    "name": "Brazil",
    "capital": "Brasília",
    "languages": ["Portuguese"],
    "population": 203000000,
    "flag": "https://flagcdn.com/w320/br.png",
    "currency": "Brazilian real"
  },
  {
    "name": "Argentina",
    "capital": "Buenos Aires",
    "languages": ["Spanish"],
    "population": 46000000,
    "flag": "https://flagcdn.com/w320/ar.png",
    "currency": "Argentine peso"
  },
  {
    "name": "Chile",
    "capital": "Santiago",
    "languages": ["Spanish"],
    "population": 20000000,
    "flag": "https://flagcdn.com/w320/cl.png",
    "currency": "Chilean peso"
  },
  {
    "name": "Colombia",
    "capital": "Bogotá",
    "languages": ["Spanish"],
    "population": 52000000,
    "flag": "https://flagcdn.com/w320/co.png",
    "currency": "Colombian peso"
  },
  {
    "name": "Peru",
    "capital": "Lima",
    "languages": ["Spanish", "Quechua", "Aymara"],
    "population": 34000000,
    "flag": "https://flagcdn.com/w320/pe.png",
    "currency": "Peruvian sol"
  },
  {
    "name": "Japan",
    "capital": "Tokyo",
    "languages": ["Japanese"],
    "population": 123000000,
    "flag": "https://flagcdn.com/w320/jp.png",
    "currency": "Japanese yen"
  },
  {
    "name": "South Korea",
    "capital": "Seoul",
    "languages": ["Korean"],
    "population": 52000000,
    "flag": "https://flagcdn.com/w320/kr.png",
    "currency": "South Korean won"
  },
  {
    "name": "China",
    "capital": "Beijing",
    "languages": ["Chinese"],
    "population": 1410000000,
    "flag": "https://flagcdn.com/w320/cn.png",
    "currency": "Renminbi (yuan)"
  },
  {
    "name": "India",
    "capital": "New Delhi",
    "languages": ["Hindi", "English"],
    "population": 1430000000,
    "flag": "https://flagcdn.com/w320/in.png",
    "currency": "Indian rupee"
  },
  {
    "name": "Australia",
    "capital": "Canberra",
    "languages": ["English"],
    "population": 27000000,
    "flag": "https://flagcdn.com/w320/au.png",
    "currency": "Australian dollar"
  },
  {
    "name": "New Zealand",
    "capital": "Wellington",
    "languages": ["English", "Māori", "New Zealand Sign Language"],
    "population": 5300000,
    "flag": "https://flagcdn.com/w320/nz.png",
    "currency": "New Zealand dollar"
  },
  {
    "name": "Russia",
    "capital": "Moscow",
    "languages": ["Russian"],
    "population": 146000000,
    "flag": "https://flagcdn.com/w320/ru.png",
    "currency": "Russian ruble"
  },
  {
    "name": "Ukraine",
    "capital": "Kyiv",
    "languages": ["Ukrainian"],
    "population": 36000000,
    "flag": "https://flagcdn.com/w320/ua.png",
    "currency": "Ukrainian hryvnia"
  },
  {
    "name": "Poland",
    "capital": "Warsaw",
    "languages": ["Polish"],
    "population": 38000000,
    "flag": "https://flagcdn.com/w320/pl.png",
    "currency": "Polish złoty"
  },
  {
    "name": "Czechia",
    "capital": "Prague",
    "languages": ["Czech"],
    "population": 10900000,
    "flag": "https://flagcdn.com/w320/cz.png",
    "currency": "Czech koruna"
  },
  {
    "name": "Hungary",
    "capital": "Budapest",
    "languages": ["Hungarian"],
    "population": 9600000,
    "flag": "https://flagcdn.com/w320/hu.png",
    "currency": "Hungarian forint"
  },
  {
    "name": "Austria",
    "capital": "Vienna",
    "languages": ["German"],
    "population": 9100000,
    "flag": "https://flagcdn.com/w320/at.png",
    "currency": "Euro"
  },
  {
    "name": "Switzerland",
    "capital": "Bern",
    "languages": ["German", "French", "Italian", "Romansh"],
    "population": 8800000,
    "flag": "https://flagcdn.com/w320/ch.png",
    "currency": "Swiss franc"
  },
  {
    "name": "Netherlands",
    "capital": "Amsterdam",
    "languages": ["Dutch"],
    "population": 18000000,
    "flag": "https://flagcdn.com/w320/nl.png",
    "currency": "Euro"
  },
  {
    "name": "Belgium",
    "capital": "Brussels",
    "languages": ["Dutch", "French", "German"],
    "population": 11700000,
    "flag": "https://flagcdn.com/w320/be.png",
    "currency": "Euro"
  },
  {
    "name": "Sweden",
    "capital": "Stockholm",
    "languages": ["Swedish"],
    "population": 10600000,
    "flag": "https://flagcdn.com/w320/se.png",
    "currency": "Swedish krona"
  },
  {
    "name": "Norway",
    "capital": "Oslo",
    "languages": ["Norwegian"],
    "population": 5600000,
    "flag": "https://flagcdn.com/w320/no.png",
    "currency": "Norwegian krone"
  },
  {
    "name": "Denmark",
    "capital": "Copenhagen",
    "languages": ["Danish"],
    "population": 6000000,
    "flag": "https://flagcdn.com/w320/dk.png",
    "currency": "Danish krone"
  },
  {
    "name": "Finland",
    "capital": "Helsinki",
    "languages": ["Finnish", "Swedish"],
    "population": 5600000,
    "flag": "https://flagcdn.com/w320/fi.png",
    "currency": "Euro"
  },
  {
    "name": "Greece",
    "capital": "Athens",
    "languages": ["Greek"],
    "population": 10400000,
    "flag": "https://flagcdn.com/w320/gr.png",
    "currency": "Euro"
  },
  {
    "name": "Turkey",
    "capital": "Ankara",
    "languages": ["Turkish"],
    "population": 85000000,
    "flag": "https://flagcdn.com/w320/tr.png",
    "currency": "Turkish lira"
  },
  {
    "name": "Egypt",
    "capital": "Cairo",
    "languages": ["Arabic"],
    "population": 112000000,
    "flag": "https://flagcdn.com/w320/eg.png",
    "currency": "Egyptian pound"
  },
  {
    "name": "South Africa",
    "capital": "Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)",
    "languages": ["Zulu", "Xhosa", "Afrikaans", "English", "Northern Sotho", "Tswana", "Southern Sotho", "Tsonga", "Swati", "Venda", "Southern Ndebele"],
    "population": 62000000,
    "flag": "https://flagcdn.com/w320/za.png",
    "currency": "South African rand"
  },
  {
    "name": "Nigeria",
    "capital": "Abuja",
    "languages": ["English"],
    "population": 224000000,
    "flag": "https://flagcdn.com/w320/ng.png",
    "currency": "Nigerian naira"
  },
  {
    "name": "Kenya",
    "capital": "Nairobi",
    "languages": ["Swahili", "English"],
    "population": 55000000,
    "flag": "https://flagcdn.com/w320/ke.png",
    "currency": "Kenyan shilling"
  },
  {
    "name": "Saudi Arabia",
    "capital": "Riyadh",
    "languages": ["Arabic"],
    "population": 36000000,
    "flag": "https://flagcdn.com/w320/sa.png",
    "currency": "Saudi riyal"
  },
  {
    "name": "United Arab Emirates",
    "capital": "Abu Dhabi",
    "languages": ["Arabic"],
    "population": 10000000,
    "flag": "https://flagcdn.com/w320/ae.png",
    "currency": "UAE dirham"
  },
  {
    "name": "Israel",
    "capital": "Jerusalem",
    "languages": ["Hebrew", "Arabic"],
    "population": 9800000,
    "flag": "https://flagcdn.com/w320/il.png",
    "currency": "Israeli new shekel"
  },
  {
    "name": "Iran",
    "capital": "Tehran",
    "languages": ["Persian (Farsi)"],
    "population": 89000000,
    "flag": "https://flagcdn.com/w320/ir.png",
    "currency": "Iranian rial"
  },
  {
    "name": "Thailand",
    "capital": "Bangkok",
    "languages": ["Thai"],
    "population": 71000000,
    "flag": "https://flagcdn.com/w320/th.png",
    "currency": "Thai baht"
  },
  {
    "name": "Vietnam",
    "capital": "Hanoi",
    "languages": ["Vietnamese"],
    "population": 100000000,
    "flag": "https://flagcdn.com/w320/vn.png",
    "currency": "Vietnamese đồng"
  },
  {
    "name": "Indonesia",
    "capital": "Jakarta",
    "languages": ["Indonesian"],
    "population": 281000000,
    "flag": "https://flagcdn.com/w320/id.png",
    "currency": "Indonesian rupiah"
  }
];
